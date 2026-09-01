import React from 'react';
import { UserProgress, Language, ChemicalElement } from '../types';
import { I18N_DATA } from '../data/i18n';
import { 
  BarChart3, 
  Trophy, 
  Flame, 
  Target, 
  Compass, 
  Bookmark, 
  RotateCcw, 
  Sparkles,
  Layers
} from 'lucide-react';

interface ProgressDashboardProps {
  progress: UserProgress;
  language: Language;
  elements: ChemicalElement[];
  onSelectElement: (el: ChemicalElement) => void;
  onResetProgress: () => void;
}

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  progress,
  language,
  elements,
  onSelectElement,
  onResetProgress
}) => {
  const t = I18N_DATA[language];

  const overallAccuracy =
    progress.totalQuestionsAnswered > 0
      ? Math.round((progress.totalCorrectAnswers / progress.totalQuestionsAnswered) * 100)
      : 0;

  const exploredCount = progress.exploredElements.length;
  const exploredPct = Math.round((exploredCount / 118) * 100);

  const bookmarkedElements = elements.filter((el) => progress.bookmarkedElements.includes(el.atomicNumber));

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/20 shadow-xs">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {t.progress.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {t.progress.subtitle}
            </p>
          </div>
        </div>

        <button
          onClick={onResetProgress}
          className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-500/10 border border-rose-200 dark:border-rose-900/40 transition-colors flex items-center gap-1.5"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t.progress.resetProgress}</span>
        </button>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-cyan-600 dark:text-cyan-400">
            <span className="text-xs font-bold uppercase tracking-wider">{t.progress.quizzesTaken}</span>
            <Target className="w-4 h-4" />
          </div>
          <span className="text-3xl font-black text-slate-900 dark:text-white block">
            {progress.totalQuizzesTaken}
          </span>
          <span className="text-[11px] text-slate-400 block">
            {progress.totalQuestionsAnswered} {language === 'en' ? 'questions total' : 'మొత్తం ప్రశ్నలు'}
          </span>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400">
            <span className="text-xs font-bold uppercase tracking-wider">{t.progress.overallAccuracy}</span>
            <Trophy className="w-4 h-4" />
          </div>
          <span className="text-3xl font-black text-slate-900 dark:text-white block">
            {overallAccuracy}%
          </span>
          <span className="text-[11px] text-slate-400 block">
            {progress.totalCorrectAnswers} {language === 'en' ? 'correct answers' : 'సరైన సమాధానాలు'}
          </span>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-amber-500">
            <span className="text-xs font-bold uppercase tracking-wider">{t.progress.bestStreak}</span>
            <Flame className="w-4 h-4" />
          </div>
          <span className="text-3xl font-black text-slate-900 dark:text-white block">
            {progress.bestStreak}
          </span>
          <span className="text-[11px] text-slate-400 block">
            {language === 'en' ? 'Consecutive correct' : 'వరుసగా సరైనవి'}
          </span>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-indigo-500">
            <span className="text-xs font-bold uppercase tracking-wider">{t.progress.elementsExplored}</span>
            <Compass className="w-4 h-4" />
          </div>
          <span className="text-3xl font-black text-slate-900 dark:text-white block">
            {exploredCount} / 118
          </span>
          {/* Progress bar */}
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-indigo-500 h-full rounded-full transition-all"
              style={{ width: `${exploredPct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Bookmarked Elements Section */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>{t.progress.bookmarkedElements} ({bookmarkedElements.length})</span>
          </h3>
        </div>

        {bookmarkedElements.length === 0 ? (
          <p className="text-xs text-slate-400 italic">
            {language === 'en'
              ? 'No elements bookmarked yet. Tap the bookmark icon in any element dossier to save it here for quick revision.'
              : 'ఇంకా ఏ మూలకాన్ని సేవ్ చేయలేదు. మూలకం పేజీలోని బుక్‌మార్క్ ఐకాన్ నొక్కి ఇక్కడ సేవ్ చేసుకోవచ్చు.'}
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {bookmarkedElements.map((el) => (
              <div
                key={`bm-${el.atomicNumber}`}
                onClick={() => onSelectElement(el)}
                className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-cyan-500/10 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/30 cursor-pointer transition-all flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center font-bold text-xs">
                  {el.symbol}
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs font-bold text-slate-900 dark:text-white block truncate">
                    {language === 'te' ? el.name.te.split(' ')[0] : el.name.en}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono block">Z={el.atomicNumber}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Recent Quiz Sessions History */}
      {progress.quizHistory && progress.quizHistory.length > 0 && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-500" />
            <span>{t.progress.recentHistory}</span>
          </h3>

          <div className="space-y-2">
            {progress.quizHistory.slice(0, 5).map((sess) => (
              <div
                key={sess.id}
                className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs"
              >
                <div className="space-y-0.5">
                  <span className="font-bold text-slate-900 dark:text-white capitalize">
                    {sess.quizType.replace('-', ' ')} ({sess.difficulty})
                  </span>
                  <span className="text-[11px] text-slate-400 block">
                    {new Date(sess.timestamp).toLocaleDateString()} • {sess.timeSpentSeconds}s
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-sm font-black text-cyan-600 dark:text-cyan-400 block">
                    {sess.accuracy}%
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {sess.correctCount}/{sess.totalQuestions}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
