import React from 'react';
import { 
  Search, 
  Moon, 
  Sun, 
  HelpCircle, 
  Languages, 
  Volume2, 
  Atom, 
  BookOpen, 
  BrainCircuit, 
  TrendingUp, 
  BarChart3, 
  X,
  Sparkles
} from 'lucide-react';
import { AppTab, Language } from '../types';
import { I18N_DATA } from '../data/i18n';

interface HeaderProps {
  currentTab: AppTab;
  onTabChange: (tab: AppTab) => void;
  language: Language;
  onLanguageToggle: () => void;
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  selectedPhase: string;
  onPhaseChange: (phase: string) => void;
  onOpenHelp: () => void;
  onOpenVoiceTest: () => void;
  isAudioPlaying: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onTabChange,
  language,
  onLanguageToggle,
  theme,
  onThemeToggle,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedPhase,
  onPhaseChange,
  onOpenHelp,
  onOpenVoiceTest,
  isAudioPlaying
}) => {
  const t = I18N_DATA[language];

  return (
    <header id="main-app-header" className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Branding & Main Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between py-3 gap-3">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div 
              onClick={() => onTabChange('table')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <Atom className="w-6 h-6 animate-spin-slow" />
              </div>
              <div>
                <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2 font-sans">
                  {t.appTitle}
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800">
                    v2.0 • 118
                  </span>
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                  {t.tagline}
                </p>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-1.5">
              <button
                id="btn-lang-mobile"
                onClick={onLanguageToggle}
                className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center gap-1"
              >
                <Languages className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                {language === 'en' ? 'TE' : 'EN'}
              </button>
              <button
                id="btn-theme-mobile"
                onClick={onThemeToggle}
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
              </button>
              <button
                id="btn-help-mobile"
                onClick={onOpenHelp}
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                <HelpCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              </button>
            </div>
          </div>

          {/* Search Box */}
          <div className="w-full md:max-w-md relative">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 absolute left-3 text-slate-400 dark:text-slate-500 pointer-events-none" />
              <input
                id="input-element-search"
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={t.search.placeholder}
                className="w-full pl-9 pr-9 py-2 rounded-xl text-sm bg-slate-100 dark:bg-slate-800/90 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  id="btn-clear-search"
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Desktop Utilities */}
          <div className="hidden md:flex items-center gap-2">
            {/* Audio Voice Test & Status */}
            <button
              id="btn-voice-diagnostic"
              onClick={onOpenVoiceTest}
              title="Voice Audio Engine & Diagnostic"
              className={`px-3 py-1.5 rounded-xl text-xs font-medium border flex items-center gap-1.5 transition-colors ${
                isAudioPlaying
                  ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30 animate-pulse'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Volume2 className={`w-4 h-4 ${isAudioPlaying ? 'text-amber-500' : 'text-cyan-600 dark:text-cyan-400'}`} />
              <span>{language === 'en' ? 'Voice Audio' : 'వాయిస్ ఆడియో'}</span>
            </button>

            {/* Language Switcher */}
            <button
              id="btn-language-toggle"
              onClick={onLanguageToggle}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center gap-1.5 transition-all shadow-xs"
            >
              <Languages className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>{language === 'en' ? 'తెలుగు (TE)' : 'English (EN)'}</span>
            </button>

            {/* Theme Toggle */}
            <button
              id="btn-theme-toggle"
              onClick={onThemeToggle}
              title={t.actions.darkMode}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-xs"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            {/* Help Button */}
            <button
              id="btn-open-help"
              onClick={onOpenHelp}
              className="px-3 py-1.5 rounded-xl text-xs font-medium bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800 hover:bg-cyan-100 dark:hover:bg-cyan-900/60 flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <HelpCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>{language === 'en' ? 'Help & Guide' : 'సహాయం & గైడ్'}</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation & Secondary Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between pb-2.5 pt-1 gap-2 border-t border-slate-100 dark:border-slate-800/80">
          {/* Main Navigation Tabs */}
          <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
            <button
              id="tab-periodic-table"
              onClick={() => onTabChange('table')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap transition-all ${
                currentTab === 'table'
                  ? 'bg-cyan-600 text-white shadow-sm shadow-cyan-600/30'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Atom className="w-3.5 h-3.5" />
              <span>{t.tabs.table}</span>
            </button>

            <button
              id="tab-trends-visualizer"
              onClick={() => onTabChange('trends')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap transition-all ${
                currentTab === 'trends'
                  ? 'bg-cyan-600 text-white shadow-sm shadow-cyan-600/30'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{t.tabs.trends}</span>
            </button>

            <button
              id="tab-study-reader"
              onClick={() => onTabChange('reader')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap transition-all ${
                currentTab === 'reader'
                  ? 'bg-cyan-600 text-white shadow-sm shadow-cyan-600/30'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{t.tabs.reader}</span>
            </button>

            <button
              id="tab-quiz-section"
              onClick={() => onTabChange('quiz')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap transition-all ${
                currentTab === 'quiz'
                  ? 'bg-cyan-600 text-white shadow-sm shadow-cyan-600/30'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>{t.tabs.quiz}</span>
            </button>

            <button
              id="tab-progress-dashboard"
              onClick={() => onTabChange('progress')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap transition-all ${
                currentTab === 'progress'
                  ? 'bg-cyan-600 text-white shadow-sm shadow-cyan-600/30'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>{t.tabs.progress}</span>
            </button>
          </nav>

          {/* Quick Filters (only visible on table tab) */}
          {currentTab === 'table' && (
            <div className="flex items-center gap-2 overflow-x-auto py-0.5">
              {/* Category Filter */}
              <select
                id="select-category-filter"
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="text-xs px-2.5 py-1.2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              >
                <option value="all">{t.search.allCategories}</option>
                <option value="reactive-nonmetal">{t.categories['reactive-nonmetal']}</option>
                <option value="noble-gas">{t.categories['noble-gas']}</option>
                <option value="alkali-metal">{t.categories['alkali-metal']}</option>
                <option value="alkaline-earth-metal">{t.categories['alkaline-earth-metal']}</option>
                <option value="metalloid">{t.categories['metalloid']}</option>
                <option value="post-transition-metal">{t.categories['post-transition-metal']}</option>
                <option value="transition-metal">{t.categories['transition-metal']}</option>
                <option value="lanthanide">{t.categories['lanthanide']}</option>
                <option value="actinide">{t.categories['actinide']}</option>
              </select>

              {/* State Filter */}
              <select
                id="select-phase-filter"
                value={selectedPhase}
                onChange={(e) => onPhaseChange(e.target.value)}
                className="text-xs px-2.5 py-1.2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              >
                <option value="all">{t.search.allPhases}</option>
                <option value="Solid">Solid (ఘన)</option>
                <option value="Liquid">Liquid (ద్రవ)</option>
                <option value="Gas">Gas (వాయు)</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
