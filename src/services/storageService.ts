import { UserProgress, Language, ElementCategory } from '../types';

const PROGRESS_KEY = 'periodic_table_user_progress_v1';
const THEME_KEY = 'periodic_table_theme_v1';
const LANG_KEY = 'periodic_table_lang_v1';

const DEFAULT_CATEGORY_MASTERY: Record<ElementCategory, { attempted: number; correct: number }> = {
  'reactive-nonmetal': { attempted: 0, correct: 0 },
  'noble-gas': { attempted: 0, correct: 0 },
  'alkali-metal': { attempted: 0, correct: 0 },
  'alkaline-earth-metal': { attempted: 0, correct: 0 },
  'metalloid': { attempted: 0, correct: 0 },
  'post-transition-metal': { attempted: 0, correct: 0 },
  'transition-metal': { attempted: 0, correct: 0 },
  'lanthanide': { attempted: 0, correct: 0 },
  'actinide': { attempted: 0, correct: 0 },
  'unknown': { attempted: 0, correct: 0 }
};

const DEFAULT_PROGRESS: UserProgress = {
  totalQuizzesTaken: 0,
  totalQuestionsAnswered: 0,
  totalCorrectAnswers: 0,
  currentStreak: 0,
  bestStreak: 0,
  lastPlayedDate: '',
  categoryMastery: DEFAULT_CATEGORY_MASTERY,
  bookmarkedElements: [1, 6, 8, 26, 79],
  exploredElements: [1, 2, 6, 8, 26, 29, 79, 80],
  quizHistory: []
};

export const storageService = {
  getProgress(): UserProgress {
    try {
      const data = localStorage.getItem(PROGRESS_KEY);
      if (data) {
        return { ...DEFAULT_PROGRESS, ...JSON.parse(data) };
      }
    } catch {
      // Fallback on error
    }
    return DEFAULT_PROGRESS;
  },

  saveProgress(progress: UserProgress): void {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch {
      // Ignore write errors
    }
  },

  clearProgress(): void {
    try {
      localStorage.removeItem(PROGRESS_KEY);
    } catch {
      // Ignore
    }
  },

  getSavedTheme(): 'dark' | 'light' {
    try {
      const theme = localStorage.getItem(THEME_KEY);
      if (theme === 'light' || theme === 'dark') return theme;
    } catch {
      // default
    }
    return 'dark';
  },

  saveTheme(theme: 'dark' | 'light'): void {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Ignore
    }
  },

  getSavedLanguage(): Language {
    try {
      const lang = localStorage.getItem(LANG_KEY);
      if (lang === 'en' || lang === 'te') return lang;
    } catch {
      // default
    }
    return 'en';
  },

  saveLanguage(lang: Language): void {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      // Ignore
    }
  }
};
