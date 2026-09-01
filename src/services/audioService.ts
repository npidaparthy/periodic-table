import { Language, ChemicalElement } from '../types';

class AudioService {
  private currentAudio: HTMLAudioElement | null = null;
  private isSpeakingSpeechSynth = false;

  public async playElementAudio(element: ChemicalElement, lang: Language): Promise<boolean> {
    this.stop();

    // 1. Try to play custom audio file if available
    const audioPath = lang === 'te' ? element.audio.teAudioPath : element.audio.enAudioPath;
    if (audioPath) {
      try {
        const audio = new Audio(audioPath);
        this.currentAudio = audio;
        
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          await playPromise;
          return true;
        }
      } catch {
        // Fall back to Speech Synthesis if MP3 is not yet placed in public/audio
      }
    }

    // 2. Fallback to Browser Web Speech API
    return this.speakText(
      lang === 'te' 
        ? `${element.name.te}. పరమాణు సంఖ్య ${element.atomicNumber}. సంకేతం ${element.symbol}. పరమాణు భారం ${element.atomicWeight}.`
        : `${element.name.en}. Atomic number ${element.atomicNumber}. Symbol ${element.symbol}. Atomic weight ${element.atomicWeight}.`,
      lang
    );
  }

  public speakText(text: string, lang: Language): boolean {
    this.stop();

    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return false;
    }

    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;

      if (lang === 'te') {
        utterance.lang = 'te-IN';
      } else {
        utterance.lang = 'en-US';
      }

      // Find best available voice
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        if (lang === 'te') {
          const teVoice = voices.find(v => v.lang.includes('te') || v.name.toLowerCase().includes('telugu'));
          if (teVoice) utterance.voice = teVoice;
        } else {
          const enVoice = voices.find(v => (v.lang === 'en-US' || v.lang === 'en-GB') && (v.name.includes('Natural') || v.name.includes('Google')));
          if (enVoice) utterance.voice = enVoice;
        }
      }

      this.isSpeakingSpeechSynth = true;
      utterance.onend = () => {
        this.isSpeakingSpeechSynth = false;
      };
      utterance.onerror = () => {
        this.isSpeakingSpeechSynth = false;
      };

      window.speechSynthesis.speak(utterance);
      return true;
    } catch {
      this.isSpeakingSpeechSynth = false;
      return false;
    }
  }

  public stop() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.isSpeakingSpeechSynth = false;
    }
  }

  public isPlaying(): boolean {
    return (this.currentAudio !== null && !this.currentAudio.paused) || this.isSpeakingSpeechSynth;
  }
}

export const audioService = new AudioService();
