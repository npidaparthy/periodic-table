export type Language = 'en' | 'te';

export type ElementCategory =
  | 'reactive-nonmetal'
  | 'noble-gas'
  | 'alkali-metal'
  | 'alkaline-earth-metal'
  | 'metalloid'
  | 'post-transition-metal'
  | 'transition-metal'
  | 'lanthanide'
  | 'actinide'
  | 'unknown';

export type ElementPhase = 'Solid' | 'Liquid' | 'Gas' | 'Unknown';

export type ElementBlock = 's' | 'p' | 'd' | 'f';

export interface ElementEtymology {
  originLanguage: string; // e.g. "Greek", "Latin", "Old German", "Arabic", "Greek Mythology", "Norse Mythology", "Astronomical", "Eponym (Scientist)", "Toponym (Place)", "Sanskrit"
  rootWord: string; // e.g. "hydro + genes (ὕδωρ + γενής)", "helios (ἥλιος)", "lithos (λίθος)", "ferrum", "aurum"
  literalMeaning: {
    en: string;
    te: string;
  };
  namingStory: {
    en: string;
    te: string;
  };
  symbolOrigin?: {
    en: string;
    te: string;
  };
}

export interface HomeExperiment {
  id: string;
  title: {
    en: string;
    te: string;
  };
  safetyLevel: 'Safe / No Supervision' | 'Adult Supervision Required';
  safetyColor?: string;
  materials: {
    en: string[];
    te: string[];
  };
  steps: {
    en: string[];
    te: string[];
  };
  scientificPrinciple: {
    en: string;
    te: string;
  };
}

export interface ElementVisual {
  primaryColor: string;
  secondaryColor: string;
  textColor?: string;
  materialTexture: 'metallic' | 'crystalline' | 'gaseous' | 'liquid' | 'synthetic';
  imageAssetPath: string;
  glowColor: string;
}

export interface ElementAudio {
  enAudioPath?: string;
  teAudioPath?: string;
  phoneticEn?: string;
  phoneticTe?: string;
}

export interface ChemicalElement {
  atomicNumber: number;
  symbol: string;
  name: {
    en: string;
    te: string;
  };
  latinName?: string;
  atomicWeight: number;
  category: ElementCategory;
  group: number | null;
  period: number;
  block: ElementBlock;
  electronConfiguration: string;
  electronShells: number[];
  oxidationStates: string;
  electronegativity: number | null;
  atomicRadius: number | null; // in pm
  ionizationEnergy: number | null; // in kJ/mol
  density: number | null; // in g/cm³ or g/L for gas
  meltingPoint: number | null; // in K
  boilingPoint: number | null; // in K
  discoveryYear: number | string;
  discoveredBy: string;
  phaseAtSTP: ElementPhase;
  summary: {
    en: string;
    te: string;
  };
  applications: {
    en: string[];
    te: string[];
  };
  homeExperiments?: HomeExperiment[];
  funFact?: {
    en: string;
    te: string;
  };
  etymology?: ElementEtymology;
  visual: ElementVisual;
  audio: ElementAudio;
}

export type PeriodicTrendKey =
  | 'none'
  | 'atomicRadius'
  | 'electronegativity'
  | 'ionizationEnergy'
  | 'atomicWeight'
  | 'density'
  | 'meltingPoint'
  | 'boilingPoint';

export type AppTab = 'table' | 'trends' | 'reader' | 'quiz' | 'progress';

export type QuizType =
  | 'symbol-to-name'
  | 'name-to-symbol'
  | 'atomic-number'
  | 'atomic-weight'
  | 'category'
  | 'phase'
  | 'application'
  | 'etymology'
  | 'mixed';

export type QuizDifficulty = 'beginner' | 'intermediate' | 'master';

export interface QuizQuestion {
  id: string;
  type: QuizType;
  prompt: {
    en: string;
    te: string;
  };
  element: ChemicalElement;
  options: {
    id: string;
    text: {
      en: string;
      te: string;
    };
    isCorrect: boolean;
  }[];
  explanation: {
    en: string;
    te: string;
  };
}

export interface QuizSessionResult {
  id: string;
  timestamp: number;
  totalQuestions: number;
  correctCount: number;
  accuracy: number;
  difficulty: QuizDifficulty;
  quizType: QuizType;
  timeSpentSeconds: number;
  missedElementNumbers: number[];
}

export interface UserProgress {
  totalQuizzesTaken: number;
  totalQuestionsAnswered: number;
  totalCorrectAnswers: number;
  currentStreak: number;
  bestStreak: number;
  lastPlayedDate: string;
  categoryMastery: Record<ElementCategory, { attempted: number; correct: number }>;
  bookmarkedElements: number[];
  exploredElements: number[];
  quizHistory: QuizSessionResult[];
}

export interface HelpTopic {
  id: string;
  title: {
    en: string;
    te: string;
  };
  description: {
    en: string;
    te: string;
  };
  tips: {
    en: string[];
    te: string[];
  };
  iconName: string;
}

export interface StudyArticle {
  id: string;
  title: {
    en: string;
    te: string;
  };
  category: string;
  readTime: string;
  summary: {
    en: string;
    te: string;
  };
  sections: {
    heading: {
      en: string;
      te: string;
    };
    content: {
      en: string;
      te: string;
    };
    keyTakeaways?: {
      en: string[];
      te: string[];
    };
  }[];
}
