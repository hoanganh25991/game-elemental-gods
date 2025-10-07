/**
 * Audio Manager for Elemental Gods
 * Handles background music for each god theme
 */

class AudioManager {
    constructor() {
        this.currentAudio = null;
        this.audioFiles = {
            got: 'audio/thunder.mp3',  // Thunder/Storm theme
            gof: 'audio/fire.mp3',      // Fire/Forge theme
            gow: 'audio/water.mp3',     // Water/Ocean theme
            goa: 'audio/air.mp3',       // Air/Wind theme
            gom: 'audio/metal.mp3',     // Metal/Forge theme
            goe: 'audio/earth.mp3'      // Earth/Nature theme
        };
        this.volume = 0.3; // 30% volume
        this.fadeTime = 1000; // 1 second fade
    }

    /**
     * Play music for a specific god with fade in
     */
    playGodTheme(godId) {
        // Fade out current music
        if (this.currentAudio) {
            this.fadeOut(this.currentAudio, () => {
                this.currentAudio.pause();
                this.currentAudio.currentTime = 0;
            });
        }

        // Check if audio file exists for this god
        const audioPath = this.audioFiles[godId];
        if (!audioPath) {
            console.log(`No audio file configured for ${godId}`);
            return;
        }

        // Create new audio element
        const audio = new Audio(audioPath);
        audio.loop = true;
        audio.volume = 0; // Start at 0 for fade in

        // Handle audio load
        audio.addEventListener('canplaythrough', () => {
            audio.play()
                .then(() => {
                    this.fadeIn(audio);
                    console.log(`Playing theme for ${godId}`);
                })
                .catch(error => {
                    console.log('Audio play failed:', error);
                });
        });

        // Handle errors
        audio.addEventListener('error', (e) => {
            console.log(`Audio error for ${godId}:`, e);
        });

        this.currentAudio = audio;
    }

    /**
     * Fade in audio
     */
    fadeIn(audio) {
        const steps = 50;
        const stepTime = this.fadeTime / steps;
        const volumeStep = this.volume / steps;
        let currentStep = 0;

        const interval = setInterval(() => {
            if (currentStep >= steps) {
                audio.volume = this.volume;
                clearInterval(interval);
                return;
            }
            audio.volume = Math.min(volumeStep * currentStep, this.volume);
            currentStep++;
        }, stepTime);
    }

    /**
     * Fade out audio
     */
    fadeOut(audio, callback) {
        const steps = 50;
        const stepTime = this.fadeTime / steps;
        const volumeStep = audio.volume / steps;
        let currentStep = 0;

        const interval = setInterval(() => {
            if (currentStep >= steps) {
                audio.volume = 0;
                clearInterval(interval);
                if (callback) callback();
                return;
            }
            audio.volume = Math.max(audio.volume - volumeStep, 0);
            currentStep++;
        }, stepTime);
    }

    /**
     * Stop all music
     */
    stopAll() {
        if (this.currentAudio) {
            this.fadeOut(this.currentAudio, () => {
                this.currentAudio.pause();
                this.currentAudio.currentTime = 0;
                this.currentAudio = null;
            });
        }
    }

    /**
     * Set volume (0-1)
     */
    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
        if (this.currentAudio) {
            this.currentAudio.volume = this.volume;
        }
    }

    /**
     * Toggle mute
     */
    toggleMute() {
        if (this.currentAudio) {
            this.currentAudio.muted = !this.currentAudio.muted;
            return this.currentAudio.muted;
        }
        return false;
    }
}

// Export singleton instance
export const audioManager = new AudioManager();
