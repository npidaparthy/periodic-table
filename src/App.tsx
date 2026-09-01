import React, { useState, useEffect, useMemo } from 'react';
import { ChemicalElement, Language, AppTab, UserProgress, QuizSessionResult } from './types';
import { ELEMENTS_DATA } from './data/elementsData';
import { generateFull118Elements } from './data/elementGenerator';
import { storageService } from './services/storageService';
import { audioService } from './services/audioService';

import { Header } from './components/Header';
import { PeriodicTable } from './components/PeriodicTable';
import { TrendsVisualizer } from './components/TrendsVisualizer';
import { ReaderView } from './components/ReaderView';
import { QuizView } from './components/QuizView';
import { ProgressDashboard } from './components/ProgressDashboard';
import { ElementModal } from './components/ElementModal';
import { HelpModal } from './components/HelpModal';
import { VoiceTestModal } from './components/VoiceTestModal';

export default function App() {
  // 1. Generate & memoize complete 118 periodic table elements
  const allElements = useMemo(() => generateFull118Elements(ELEMENTS_DATA), []);

  // 2. Preferences & State
  const [language, setLanguage] = useState<Language>(() => storageService.getSavedLanguage());
  const [theme, setTheme] = useState<'dark' | 'light'>(() => storageService.getSavedTheme());
  const [currentTab, setCurrentTab] = useState<AppTab>('table');

  // Search & Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPhase, setSelectedPhase] = useState('all');

  // Modals & Active Elements
  const [selectedElement, setSelectedElement] = useState<ChemicalElement | null>(null);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isVoiceTestOpen, setIsVoiceTestOpen] = useState(false);
  const [quizPreselectedElement, setQuizPreselectedElement] = useState<ChemicalElement | null>(null);

  // Audio playing state
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // User Progress state
  const [progress, setProgress] = useState<UserProgress>(() => storageService.getProgress());

  // Sync Theme to HTML Root class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
    storageService.saveTheme(theme);
  }, [theme]);

  // Sync Language
  useEffect(() => {
    storageService.saveLanguage(language);
  }, [language]);

  // Sync Progress
  useEffect(() => {
    storageService.saveProgress(progress);
  }, [progress]);

  // Audio monitor interval
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAudioPlaying(audioService.isPlaying());
    }, 400);
    return () => clearInterval(interval);
  }, []);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'te' : 'en'));
  };

  const handleSelectElement = (element: ChemicalElement) => {
    setSelectedElement(element);
    // Mark element as explored in user progress
    if (!progress.exploredElements.includes(element.atomicNumber)) {
      setProgress((prev) => ({
        ...prev,
        exploredElements: [...prev.exploredElements, element.atomicNumber]
      }));
    }
  };

  const handleToggleBookmark = (atomicNumber: number) => {
    setProgress((prev) => {
      const isBookmarked = prev.bookmarkedElements.includes(atomicNumber);
      return {
        ...prev,
        bookmarkedElements: isBookmarked
          ? prev.bookmarkedElements.filter((id) => id !== atomicNumber)
          : [...prev.bookmarkedElements, atomicNumber]
      };
    });
  };

  const handleLaunchQuizForElement = (element: ChemicalElement) => {
    setQuizPreselectedElement(element);
    setCurrentTab('quiz');
  };

  const handleSaveQuizResult = (result: QuizSessionResult) => {
    setProgress((prev) => {
      const newHistory = [result, ...(prev.quizHistory || [])];
      const newStreak = result.accuracy >= 80 ? prev.currentStreak + 1 : 0;
      const bestStreak = Math.max(prev.bestStreak, newStreak);

      return {
        ...prev,
        totalQuizzesTaken: prev.totalQuizzesTaken + 1,
        totalQuestionsAnswered: prev.totalQuestionsAnswered + result.totalQuestions,
        totalCorrectAnswers: prev.totalCorrectAnswers + result.correctCount,
        currentStreak: newStreak,
        bestStreak,
        lastPlayedDate: new Date().toISOString(),
        quizHistory: newHistory
      };
    });
  };

  const handleResetProgress = () => {
    if (window.confirm(language === 'en' ? 'Are you sure you want to reset your study progress?' : 'మీరు అధ్యయన పురోగతిని రీసెట్ చేయాలనుకుంటున్నారా?')) {
      storageService.clearProgress();
      setProgress(storageService.getProgress());
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      
      {/* Top Main Navigation & Controls Header */}
      <Header
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        language={language}
        onLanguageToggle={handleToggleLanguage}
        theme={theme}
        onThemeToggle={handleToggleTheme}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedPhase={selectedPhase}
        onPhaseChange={setSelectedPhase}
        onOpenHelp={() => setIsHelpOpen(true)}
        onOpenVoiceTest={() => setIsVoiceTestOpen(true)}
        isAudioPlaying={isAudioPlaying}
      />

      {/* Main View Port Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {currentTab === 'table' && (
          <PeriodicTable
            elements={allElements}
            onSelectElement={handleSelectElement}
            language={language}
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            selectedPhase={selectedPhase}
            bookmarkedIds={progress.bookmarkedElements}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {currentTab === 'trends' && (
          <TrendsVisualizer
            elements={allElements}
            language={language}
            onSelectElement={handleSelectElement}
          />
        )}

        {currentTab === 'reader' && <ReaderView language={language} />}

        {currentTab === 'quiz' && (
          <QuizView
            elements={allElements}
            language={language}
            onSaveQuizResult={handleSaveQuizResult}
            preselectedElement={quizPreselectedElement}
            onClearPreselectedElement={() => setQuizPreselectedElement(null)}
          />
        )}

        {currentTab === 'progress' && (
          <ProgressDashboard
            progress={progress}
            language={language}
            elements={allElements}
            onSelectElement={handleSelectElement}
            onResetProgress={handleResetProgress}
          />
        )}
      </main>

      {/* Element Dossier Modal */}
      {selectedElement && (
        <ElementModal
          element={selectedElement}
          onClose={() => setSelectedElement(null)}
          language={language}
          isBookmarked={progress.bookmarkedElements.includes(selectedElement.atomicNumber)}
          onToggleBookmark={handleToggleBookmark}
          onLaunchQuizForElement={handleLaunchQuizForElement}
        />
      )}

      {/* Help Guide Modal */}
      <HelpModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
        language={language}
      />

      {/* Voice Diagnostic Studio Modal */}
      <VoiceTestModal
        isOpen={isVoiceTestOpen}
        onClose={() => setIsVoiceTestOpen(false)}
        language={language}
        elements={allElements}
      />

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/50 py-4 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            {language === 'en'
              ? 'Periodic Table & Chemistry Lab • Offline Ready • Bilingual EN/TE • 118 Elements'
              : 'ఆవర్తన పట్టిక & రసాయన శాస్త్ర ప్రయోగశాల • ఆఫ్‌లైన్ సదుపాయం • ద్విభాషా EN/TE • 118 మూలకాలు'}
          </span>
          <span className="font-mono text-[11px] opacity-70">
            Decoupled Modular Architecture • /public/data/ JSON
          </span>
        </div>
      </footer>
    </div>
  );
}
