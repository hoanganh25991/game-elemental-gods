// Hero Data Configuration
const heroData = {
    got: {
        name: 'THOR',
        title: 'God of Thunder',
        description: 'Master of lightning and storms, Thor commands the fury of the heavens. With each strike of his mighty hammer, thunder echoes across the battlefield, bringing divine justice to those who dare challenge the storm.',
        stats: {
            power: 95,
            control: 88,
            wisdom: 82
        },
        abilities: [
            '⚡ Lightning Strike - Summon devastating bolts from the sky',
            '🌩️ Storm Shield - Create a protective barrier of swirling winds',
            '⛈️ Thunderclap - Release a shockwave that stuns enemies',
            '🔱 Divine Fury - Channel pure electrical energy'
        ],
        theme: {
            dark: '#0b1a2b',
            primary: '#1e90ff',
            secondary: '#123a6b',
            accent: '#ffde59'
        },
        symbol: 'M50 10 L30 45 H45 L40 75 L70 40 H55 L60 10 Z',
        gameUrl: 'https://hoanganh25991.github.io/game-got'
    },
    gof: {
        name: 'VULCAN',
        title: 'God of Fire',
        description: 'Born from the heart of a volcano, Vulcan wields the eternal flame. His power scorches the earth, turning enemies to ash and forging new worlds from the crucible of destruction.',
        stats: {
            power: 92,
            control: 90,
            wisdom: 85
        },
        abilities: [
            '🔥 Inferno Blast - Unleash a torrent of flames',
            '🌋 Magma Eruption - Cause volcanic upheaval',
            '💥 Phoenix Rise - Regenerate through flames',
            '🔆 Solar Flare - Blind enemies with intense heat'
        ],
        theme: {
            dark: '#1a0a05',
            primary: '#ff6b35',
            secondary: '#ff8c42',
            accent: '#ffd94a'
        },
        symbol: 'M50 10 Q45 30 50 45 Q55 30 50 10 M50 45 Q35 55 40 75 Q45 60 50 65 Q55 60 60 75 Q65 55 50 45',
        gameUrl: 'https://hoanganh25991.github.io/game-gof'
    },
    gow: {
        name: 'POSEIDON',
        title: 'God of Water',
        description: 'Ruler of the oceans and master of the tides, Poseidon controls the ebb and flow of water itself. His power can heal or destroy, bringing life-giving rain or devastating tsunamis.',
        stats: {
            power: 88,
            control: 93,
            wisdom: 90
        },
        abilities: [
            '🌊 Tidal Wave - Summon massive waves of destruction',
            '💧 Aqua Shield - Create a protective water barrier',
            '🌀 Whirlpool - Trap enemies in swirling currents',
            '❄️ Frozen Depths - Freeze water into deadly ice'
        ],
        theme: {
            dark: '#0a1a24',
            primary: '#00bfff',
            secondary: '#4dd0e1',
            accent: '#b0e0e6'
        },
        symbol: 'M50 10 Q35 40 35 60 Q35 80 50 85 Q65 80 65 60 Q65 40 50 10',
        gameUrl: 'https://hoanganh25991.github.io/game-gow'
    },
    goa: {
        name: 'ZEPHYR',
        title: 'God of Air',
        description: 'Swift as the wind and free as the sky, Zephyr commands the very breath of the world. Invisible yet omnipresent, the air god strikes with the speed of a hurricane and the grace of a gentle breeze.',
        stats: {
            power: 90,
            control: 85,
            wisdom: 94
        },
        abilities: [
            '💨 Cyclone Spin - Create devastating wind vortexes',
            '🌪️ Tornado Strike - Summon a localized twister',
            '☁️ Cloud Step - Move with supernatural speed',
            '🌬️ Breath of Life - Channel healing winds'
        ],
        theme: {
            dark: '#0a0f1a',
            primary: '#c8f0ff',
            secondary: '#e0f7ff',
            accent: '#d4e8f0'
        },
        symbol: 'M20 30 Q50 20 80 30 M20 50 Q50 40 80 50 M20 70 Q50 60 80 70',
        gameUrl: 'https://hoanganh25991.github.io/game-goa'
    },
    gom: {
        name: 'HEPHAESTUS',
        title: 'God of Metal',
        description: 'Forged in the deepest mines and tempered by eternal flames, Hephaestus shapes metal with divine precision. His creations are unbreakable, his armor impenetrable, his will unyielding as steel.',
        stats: {
            power: 85,
            control: 87,
            wisdom: 88
        },
        abilities: [
            '⚒️ Steel Forge - Craft indestructible weapons',
            '🛡️ Iron Fortress - Create an unbreakable defense',
            '⚙️ Metal Manipulation - Control all metallic objects',
            '🔨 Hammer of Ages - Strike with crushing force'
        ],
        theme: {
            dark: '#1b1f27',
            primary: '#6f7b84',
            secondary: '#b4b4c8',
            accent: '#e6b478'
        },
        symbol: 'M30 30 L70 30 L70 70 L30 70 Z M50 30 L70 50 L50 70 L30 50 Z',
        gameUrl: 'https://hoanganh25991.github.io/game-gom'
    },
    goe: {
        name: 'GAIA',
        title: 'God of Earth',
        description: 'Ancient and eternal, Gaia embodies the strength of mountains and the fertility of soil. With roots deeper than time itself, the earth god brings both nurturing growth and devastating earthquakes.',
        stats: {
            power: 87,
            control: 89,
            wisdom: 92
        },
        abilities: [
            '🏔️ Mountain Rise - Summon massive stone pillars',
            '🌿 Nature\'s Blessing - Heal through earth energy',
            '⛰️ Seismic Slam - Cause devastating earthquakes',
            '🪨 Stone Armor - Coat yourself in impenetrable rock'
        ],
        theme: {
            dark: '#2d2a26',
            primary: '#6b5a49',
            secondary: '#b08e63',
            accent: '#caa36b'
        },
        symbol: 'M30 70 L40 50 L30 40 L50 30 L60 45 L70 35 L70 70 Z',
        gameUrl: 'https://hoanganh25991.github.io/game-goe'
    }
};

// Particle generation
function createAmbientParticles() {
    const container = document.querySelector('.ambient-particles');
    if (!container) return;

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, ${Math.random() * 0.5 + 0.3})`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 5}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(particle);
    }
}

function createHeroParticles(container, heroId) {
    const hero = heroData[heroId];
    if (!container || !hero) return;

    // Clear existing particles
    container.innerHTML = '';

    const colors = {
        got: ['#1e90ff', '#ffde59'],
        gof: ['#ff6b35', '#ffd94a'],
        gow: ['#00bfff', '#4dd0e1'],
        goa: ['#c8f0ff', '#e0f7ff'],
        gom: ['#b87333', '#b4b4c8'],
        goe: ['#6a8f4e', '#caa36b']
    };

    const heroColors = colors[heroId] || colors.got;

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 6 + 3;
        const angle = (i / 20) * Math.PI * 2;
        const distance = 45 + Math.random() * 10;
        
        particle.style.position = 'absolute';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.background = heroColors[Math.floor(Math.random() * heroColors.length)];
        particle.style.borderRadius = '50%';
        particle.style.left = 50 + Math.cos(angle) * distance + '%';
        particle.style.top = 50 + Math.sin(angle) * distance + '%';
        particle.style.transform = 'translate(-50%, -50%)';
        particle.style.boxShadow = `0 0 ${size * 2}px ${heroColors[0]}`;
        particle.style.opacity = Math.random() * 0.6 + 0.4;
        
        container.appendChild(particle);
    }
}

// Theme application
function applyTheme(heroId) {
    const hero = heroData[heroId];
    if (!hero) return;

    const root = document.documentElement;
    root.style.setProperty('--theme-dark', hero.theme.dark);
    root.style.setProperty('--theme-primary', hero.theme.primary);
    root.style.setProperty('--theme-secondary', hero.theme.secondary);
    root.style.setProperty('--theme-accent', hero.theme.accent);
}

// Show detail page
function showDetailPage(heroId) {
    const hero = heroData[heroId];
    if (!hero) return;

    // Apply theme
    applyTheme(heroId);

    // Get elements
    const detailPage = document.getElementById('detail-page');
    const heroCollection = document.querySelector('.hero-collection');
    
    // Populate content
    document.querySelector('.detail-hero-name').textContent = hero.name;
    document.querySelector('.detail-hero-title').textContent = hero.title;
    document.querySelector('.hero-description').textContent = hero.description;
    
    // Set stats
    const statValues = detailPage.querySelectorAll('.stat-value');
    statValues[0].style.width = hero.stats.power + '%';
    statValues[1].style.width = hero.stats.control + '%';
    statValues[2].style.width = hero.stats.wisdom + '%';
    
    // Set abilities
    const abilitiesList = document.querySelector('.abilities-list');
    abilitiesList.innerHTML = hero.abilities.map(ability => `<li>${ability}</li>`).join('');
    
    // Create hero icon
    const largeIcon = document.querySelector('.hero-large-icon');
    largeIcon.innerHTML = `
        <svg viewBox="0 0 100 100" style="width: 100%; height: 100%; filter: drop-shadow(0 0 30px ${hero.theme.primary});">
            <path d="${hero.symbol}" fill="${hero.theme.primary}" stroke="${hero.theme.accent}" stroke-width="2"/>
        </svg>
    `;
    
    // Create particles
    const particlesContainer = document.querySelector('.showcase-particles');
    createHeroParticles(particlesContainer, heroId);
    
    // Update play button
    const playButton = document.querySelector('.play-button');
    playButton.onclick = () => {
        window.open(hero.gameUrl, '_blank');
    };
    
    // Show detail page with animation
    heroCollection.style.display = 'none';
    detailPage.style.display = 'block';
    
    // Scroll to top
    detailPage.scrollTop = 0;
}

// Hide detail page
function hideDetailPage() {
    const detailPage = document.getElementById('detail-page');
    const heroCollection = document.querySelector('.hero-collection');
    
    detailPage.style.display = 'none';
    heroCollection.style.display = 'block';
    
    // Reset to default theme
    applyTheme('got');
}

// Initialize
function init() {
    // Create ambient particles
    createAmbientParticles();
    
    // Add click handlers to hero cards
    const heroCards = document.querySelectorAll('.hero-card');
    heroCards.forEach(card => {
        card.addEventListener('click', () => {
            const heroId = card.getAttribute('data-hero');
            showDetailPage(heroId);
        });
        
        // Add hover sound effect (visual feedback)
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
    
    // Add back button handler
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', hideDetailPage);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const detailPage = document.getElementById('detail-page');
            if (detailPage.style.display === 'block') {
                hideDetailPage();
            }
        }
    });
    
    // Animate power bars on load
    setTimeout(() => {
        const powerFills = document.querySelectorAll('.power-fill');
        powerFills.forEach(fill => {
            fill.style.transition = 'width 1.5s ease-out';
        });
    }, 500);
}

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { heroData, showDetailPage, hideDetailPage };
}
