/*!
 * serviceworker.js
 * Service Worker for Elemental Gods PWA
 * Provides offline support and caching strategies
 */

const CACHE_NAME = 'elemental-gods-v1.0.1';
const RUNTIME_CACHE = 'elemental-gods-runtime-v1';

// Assets to cache on install
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './landscape.css',
  './src/main.js',
  './i18n.js',
  './lock-zoom.js',
  './manifest.json',
  './icon.png',
  './favicon.ico',
  './locales/en.json',
  './locales/vi.json',
  './image/background.png',
  './image/goa-heroic-figure-standing.png',
  './image/goe-heroic-figure-standing.png',
  './image/gof-heroic-figure-standing.png',
  './image/gom-heroic-figure-standing.png',
  './image/got-heroic-figure-standing.png',
  './image/gow-heroic-figure-standing.png'
];

// Install event - cache essential assets
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[ServiceWorker] Precaching assets');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => {
        console.log('[ServiceWorker] Skip waiting');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[ServiceWorker] Precaching failed:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
              console.log('[ServiceWorker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[ServiceWorker] Claiming clients');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return;
  }

  // Skip chrome-extension and other non-http(s) requests
  if (!request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          console.log('[ServiceWorker] Serving from cache:', request.url);
          return cachedResponse;
        }

        // Clone the request
        const fetchRequest = request.clone();

        return fetch(fetchRequest)
          .then((response) => {
            // Check if valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Cache runtime assets
            caches.open(RUNTIME_CACHE)
              .then((cache) => {
                cache.put(request, responseToCache);
              });

            return response;
          })
          .catch((error) => {
            console.error('[ServiceWorker] Fetch failed:', error);
            
            // Return offline page if available
            return caches.match('./index.html');
          });
      })
  );
});

// Handle messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('[ServiceWorker] Received SKIP_WAITING message');
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    console.log('[ServiceWorker] Clearing all caches');
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => caches.delete(cacheName))
        );
      })
    );
  }
});

// Background sync for offline actions (if needed in future)
self.addEventListener('sync', (event) => {
  console.log('[ServiceWorker] Background sync:', event.tag);
  
  if (event.tag === 'sync-game-data') {
    event.waitUntil(
      // Add your sync logic here
      Promise.resolve()
    );
  }
});

// Push notification support (if needed in future)
self.addEventListener('push', (event) => {
  console.log('[ServiceWorker] Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: './icon.png',
    badge: './icon.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };

  event.waitUntil(
    self.registration.showNotification('Elemental Gods', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  console.log('[ServiceWorker] Notification clicked');
  
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('./')
  );
});