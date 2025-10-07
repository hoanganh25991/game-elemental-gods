// Hero Data Configuration
const heroData = {
    got: {
        id: 'got',
        name: 'THOR',
        title: 'God of Thunder',
        tagline: 'Master of lightning and storms, commanding the fury of the heavens.',
        description: 'Master of lightning and storms, Thor commands the fury of the heavens. With each strike of his mighty hammer, thunder echoes across the battlefield, bringing divine justice to those who dare challenge the storm.',
        stats: {
            power: 95,
            control: 88,
            wisdom: 82
        },
        abilities: [
            { icon: '⚡', name: 'Lightning Strike', desc: 'Summon devastating bolts from the sky' },
            { icon: '🌩️', name: 'Storm Shield', desc: 'Create a protective barrier of swirling winds' },
            { icon: '⛈️', name: 'Thunderclap', desc: 'Release a shockwave that stuns enemies' },
            { icon: '🔱', name: 'Divine Fury', desc: 'Channel pure electrical energy' }
        ],
        theme: {
            dark: '#0b1a2b',
            primary: '#1e90ff',
            secondary: '#123a6b',
            accent: '#ffde59'
        },
        image: 'image/got-heroic-figure-standing.png',
        gameUrl: 'https://hoanganh25991.github.io/game-got'
    },
    gof: {
        id: 'gof',
        name: 'VULCAN',
        title: 'God of Fire',
        tagline: 'Born from the heart of a volcano, wielding the eternal flame.',
        description: 'Born from the heart of a volcano, Vulcan wields the eternal flame. His power scorches the earth, turning enemies to ash and forging new worlds from the crucible of destruction.',
        stats: {
            power: 92,
            control: 90,
            wisdom: 85
        },
        abilities: [
            { icon: '🔥', name: 'Inferno Blast', desc: 'Unleash a torrent of flames' },
            { icon: '🌋', name: 'Magma Eruption', desc: 'Cause volcanic upheaval' },
            { icon: '💥', name: 'Phoenix Rise', desc: 'Regenerate through flames' },
            { icon: '🔆', name: 'Solar Flare', desc: 'Blind enemies with intense heat' }
        ],
        theme: {
            dark: '#1a0a05',
            primary: '#ff6b35',
            secondary: '#ff8c42',
            accent: '#ffd94a'
        },
        image: 'image/gof-heroic-figure-standing.png',
        gameUrl: 'https://hoanganh25991.github.io/game-gof'
    },
    gow: {
        id: 'gow',
        name: 'POSEIDON',
        title: 'God of Water',
        tagline: 'Ruler of the oceans, master of the tides and the deep.',
        description: 'Ruler of the oceans and master of the tides, Poseidon controls the ebb and flow of water itself. His power can heal or destroy, bringing life-giving rain or devastating tsunamis.',
        stats: {
            power: 88,
            control: 93,
            wisdom: 90
        },
        abilities: [
            { icon: '🌊', name: 'Tidal Wave', desc: 'Summon massive waves of destruction' },
            { icon: '💧', name: 'Aqua Shield', desc: 'Create a protective water barrier' },
            { icon: '🌀', name: 'Whirlpool', desc: 'Trap enemies in swirling currents' },
            { icon: '❄️', name: 'Frozen Depths', desc: 'Freeze water into deadly ice' }
        ],
        theme: {
            dark: '#0a1a24',
            primary: '#00bfff',
            secondary: '#4dd0e1',
            accent: '#b0e0e6'
        },
        image: 'image/gow-heroic-figure-standing.png',
        gameUrl: 'https://hoanganh25991.github.io/game-gow'
    },
    goa: {
        id: 'goa',
        name: 'ZEPHYR',
        title: 'God of Air',
        tagline: 'Swift as the wind, free as the sky, commanding the breath of life.',
        description: 'Swift as the wind and free as the sky, Zephyr commands the very breath of the world. Invisible yet omnipresent, the air god strikes with the speed of a hurricane and the grace of a gentle breeze.',
        stats: {
            power: 90,
            control: 85,
            wisdom: 94
        },
        abilities: [
            { icon: '💨', name: 'Cyclone Spin', desc: 'Create devastating wind vortexes' },
            { icon: '🌪️', name: 'Tornado Strike', desc: 'Summon a localized twister' },
            { icon: '☁️', name: 'Cloud Step', desc: 'Move with supernatural speed' },
            { icon: '🌬️', name: 'Breath of Life', desc: 'Channel healing winds' }
        ],
        theme: {
            dark: '#0a0f1a',
            primary: '#c8f0ff',
            secondary: '#e0f7ff',
            accent: '#d4e8f0'
        },
        image: 'image/goa-heroic-figure-standing.png',
        gameUrl: 'https://hoanganh25991.github.io/game-goa'
    },
    gom: {
        id: 'gom',
        name: 'HEPHAESTUS',
        title: 'God of Metal',
        tagline: 'Forged in fire, tempered by time, master of the forge.',
        description: 'Forged in the deepest mines and tempered by eternal flames, Hephaestus shapes metal with divine precision. His creations are unbreakable, his armor impenetrable, his will unyielding as steel.',
        stats: {
            power: 85,
            control: 87,
            wisdom: 88
        },
        abilities: [
            { icon: '⚒️', name: 'Steel Forge', desc: 'Craft indestructible weapons' },
            { icon: '🛡️', name: 'Iron Fortress', desc: 'Create an unbreakable defense' },
            { icon: '⚙️', name: 'Metal Manipulation', desc: 'Control all metallic objects' },
            { icon: '🔨', name: 'Hammer of Ages', desc: 'Strike with crushing force' }
        ],
        theme: {
            dark: '#1b1f27',
            primary: '#6f7b84',
            secondary: '#b4b4c8',
            accent: '#e6b478'
        },
        image: 'image/gom-heroic-figure-standing.png',
        gameUrl: 'https://hoanganh25991.github.io/game-gom'
    },
    goe: {
        id: 'goe',
        name: 'GAIA',
        title: 'God of Earth',
        tagline: 'Ancient and eternal, embodying the strength of mountains.',
        description: 'Ancient and eternal, Gaia embodies the strength of mountains and the fertility of soil. With roots deeper than time itself, the earth god brings both nurturing growth and devastating earthquakes.',
        stats: {
            power: 87,
            control: 89,
            wisdom: 92
        },
        abilities: [
            { icon: '🏔️', name: 'Mountain Rise', desc: 'Summon massive stone pillars' },
            { icon: '🌿', name: "Nature's Blessing", desc: 'Heal through earth energy' },
            { icon: '⛰️', name: 'Seismic Slam', desc: 'Cause devastating earthquakes' },
            { icon: '🪨', name: 'Stone Armor', desc: 'Coat yourself in impenetrable rock' }
        ],
        theme: {
            dark: '#2d2a26',
            primary: '#6b5a49',
            secondary: '#b08e63',
            accent: '#caa36b'
        },
        image: 'image/goe-heroic-figure-standing.png',
        gameUrl: 'https://hoanganh25991.github.io/game-goe'
    }
};

// Current active hero
let currentHero = 'got';

// Apply theme to page
function applyTheme(heroId) {
    const hero = heroData[heroId];
    if (!hero) return;

    const root = document.documentElement;
    root.style.setProperty('--theme-dark', hero.theme.dark);
    root.style.setProperty('--theme-primary', hero.theme.primary);
    root.style.setProperty('--theme-secondary', hero.theme.secondary);
    root.style.setProperty('--theme-accent', hero.theme.accent);

    // Update body class for theme-specific animations
    document.body.className = `theme-${heroId}`;
}

// Update stage with hero data
function updateStage(heroId) {
    const hero = heroData[heroId];
    if (!hero) return;

    // Apply theme with smooth transition
    applyTheme(heroId);

    // Update hero image with fade effect
    const heroImage = document.getElementById('hero-image');
    heroImage.style.opacity = '0';
    
    setTimeout(() => {
        heroImage.src = hero.image;
        heroImage.onerror = function() {
            this.style.display = 'none';
        };
        heroImage.onload = function() {
            this.style.display = 'block';
            this.style.opacity = '1';
        };
    }, 300);

    // Update text content with animation
    const heroName = document.querySelector('.stage-hero-name');
    const heroTitle = document.querySelector('.stage-hero-title');
    const heroTagline = document.querySelector('.hero-tagline');

    heroName.style.animation = 'none';
    heroTitle.style.animation = 'none';
    heroTagline.style.animation = 'none';

    setTimeout(() => {
        heroName.textContent = hero.name;
        heroTitle.textContent = hero.title;
        heroTagline.textContent = hero.tagline;

        heroName.style.animation = 'nameReveal 0.8s ease-out';
        heroTitle.style.animation = 'fadeInDown 0.8s ease-out 0.2s backwards';
        heroTagline.style.animation = 'fadeInUp 0.8s ease-out 0.3s backwards';
    }, 50);

    // Update stats with animation
    const statValues = document.querySelectorAll('.stat-value');
    statValues[0].textContent = hero.stats.power;
    statValues[1].textContent = hero.stats.control;
    statValues[2].textContent = hero.stats.wisdom;

    // Animate stat circles
    document.querySelectorAll('.stat-circle').forEach((circle, index) => {
        circle.style.animation = 'none';
        setTimeout(() => {
            circle.style.animation = `fadeInUp 0.8s ease-out ${0.4 + index * 0.1}s backwards`;
        }, 50);
    });

    // Update play button
    const playButton = document.getElementById('play-button');
    playButton.onclick = () => {
        window.open(hero.gameUrl, '_blank');
    };

    // Create elemental particles
    createElementalParticles(heroId);

    // Update current hero
    currentHero = heroId;
}

// Create dynamic elemental particles
function createElementalParticles(heroId) {
    const container = document.getElementById('stage-particles');
    if (!container) return;

    // Clear existing particles
    container.innerHTML = '';

    const hero = heroData[heroId];
    const particleCount = 40;
    
    const particleColors = {
        got: ['#1e90ff', '#ffde59', '#87ceeb'],
        gof: ['#ff6b35', '#ffd94a', '#ff8c42'],
        gow: ['#00bfff', '#4dd0e1', '#b0e0e6'],
        goa: ['#c8f0ff', '#e0f7ff', '#d4e8f0'],
        gom: ['#b87333', '#b4b4c8', '#6f7b84'],
        goe: ['#6a8f4e', '#caa36b', '#b08e63']
    };

    const colors = particleColors[heroId] || particleColors.got;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 6 + 3;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const duration = Math.random() * 10 + 8;
        const delay = Math.random() * 5;

        particle.style.position = 'absolute';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.background = color;
        particle.style.borderRadius = '50%';
        particle.style.left = startX + '%';
        particle.style.top = startY + '%';
        particle.style.boxShadow = `0 0 ${size * 3}px ${color}`;
        particle.style.opacity = Math.random() * 0.6 + 0.3;
        particle.style.animation = `particleFloat ${duration}s ease-in-out infinite`;
        particle.style.animationDelay = delay + 's';
        particle.style.pointerEvents = 'none';

        container.appendChild(particle);
    }
}

// Handle card selection
function selectHero(heroId) {
    // Remove active class from all cards
    document.querySelectorAll('.stack-card').forEach(card => {
        card.classList.remove('active');
    });

    // Add active class to selected card
    const selectedCard = document.querySelector(`.stack-card[data-hero="${heroId}"]`);
    if (selectedCard) {
        selectedCard.classList.add('active');
    }

    // Update stage
    updateStage(heroId);
}

// Show abilities modal
function showAbilitiesModal(heroId) {
    const hero = heroData[heroId];
    if (!hero) return;

    const modal = document.getElementById('detail-modal');
    const abilitiesGrid = document.getElementById('abilities-grid');

    // Clear existing abilities
    abilitiesGrid.innerHTML = '';

    // Add ability cards
    hero.abilities.forEach((ability, index) => {
        const abilityCard = document.createElement('div');
        abilityCard.className = 'ability-card';
        abilityCard.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s backwards`;
        abilityCard.innerHTML = `
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">${ability.icon}</div>
            <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem; color: var(--theme-accent);">${ability.name}</h3>
            <p style="color: rgba(255, 255, 255, 0.8); font-size: 0.9rem;">${ability.desc}</p>
        `;
        abilitiesGrid.appendChild(abilityCard);
    });

    modal.classList.add('active');
}

// Hide abilities modal
function hideAbilitiesModal() {
    const modal = document.getElementById('detail-modal');
    modal.classList.remove('active');
}

// Initialize the application
function init() {
    // Set initial theme
    applyTheme(currentHero);
    updateStage(currentHero);

    // Add event listeners to stack cards
    document.querySelectorAll('.stack-card').forEach(card => {
        card.addEventListener('click', () => {
            const heroId = card.getAttribute('data-hero');
            selectHero(heroId);
        });
    });

    // Modal close button
    const modalClose = document.getElementById('modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', hideAbilitiesModal);
    }

    // Close modal on background click
    const modal = document.getElementById('detail-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                hideAbilitiesModal();
            }
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideAbilitiesModal();
        }

        // Arrow key navigation
        const heroes = ['got', 'gof', 'gow', 'goa', 'gom', 'goe'];
        const currentIndex = heroes.indexOf(currentHero);

        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            selectHero(heroes[currentIndex - 1]);
        } else if (e.key === 'ArrowRight' && currentIndex < heroes.length - 1) {
            selectHero(heroes[currentIndex + 1]);
        }
    });

    // Add double-click to show abilities
    document.querySelector('.hero-info-panel').addEventListener('dblclick', () => {
        showAbilitiesModal(currentHero);
    });

    // Add info button hint
    const infoHint = document.createElement('div');
    infoHint.style.cssText = `
        position: fixed;
        bottom: 10px;
        right: 10px;
        background: rgba(0, 0, 0, 0.7);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.6);
        z-index: 1000;
        pointer-events: none;
    `;
    infoHint.textContent = 'Double-click hero panel for abilities • Arrow keys to navigate';
    document.body.appendChild(infoHint);

    // Fade out hint after 5 seconds
    setTimeout(() => {
        infoHint.style.transition = 'opacity 1s';
        infoHint.style.opacity = '0';
        setTimeout(() => infoHint.remove(), 1000);
    }, 5000);

    console.log('🎮 Elemental Gods - Grand Stage Initialized!');
    console.log('💡 Tip: Use arrow keys to navigate between heroes');
}

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { heroData, selectHero, applyTheme };
}
