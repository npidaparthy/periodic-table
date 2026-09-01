import React, { useState } from 'react';
import { Language, StudyArticle } from '../types';
import { I18N_DATA } from '../data/i18n';
import { STUDY_ARTICLES } from '../data/readerData';
import { audioService } from '../services/audioService';
import { BookOpen, Volume2, CheckCircle2, Clock, Sparkles, ChevronRight } from 'lucide-react';

interface ReaderViewProps {
  language: Language;
}

export const ReaderView: React.FC<ReaderViewProps> = ({ language }) => {
  const t = I18N_DATA[language];
  const [selectedArticle, setSelectedArticle] = useState<StudyArticle>(STUDY_ARTICLES[0]);
  const [isReadingAloud, setIsReadingAloud] = useState(false);

  const handleReadAloud = () => {
    if (isReadingAloud) {
      audioService.stop();
      setIsReadingAloud(false);
      return;
    }

    setIsReadingAloud(true);
    const titleText = language === 'te' ? selectedArticle.title.te : selectedArticle.title.en;
    const summaryText = language === 'te' ? selectedArticle.summary.te : selectedArticle.summary.en;
    const fullText = `${titleText}. ${summaryText}`;

    audioService.speakText(fullText, language);
    setTimeout(() => {
      setIsReadingAloud(false);
    }, 6000);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/20 shadow-xs">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {t.reader.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {t.reader.subtitle}
            </p>
          </div>
        </div>

        {/* Audio Read-aloud action */}
        <button
          onClick={handleReadAloud}
          className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all ${
            isReadingAloud
              ? 'bg-cyan-500 text-white border-cyan-400 shadow-lg shadow-cyan-500/20 animate-pulse'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200'
          }`}
        >
          <Volume2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          <span>{isReadingAloud ? (language === 'en' ? 'Reading Aloud...' : 'చదువుతోంది...') : (language === 'en' ? 'Read Aloud' : 'బిగ్గరగా చదవండి')}</span>
        </button>
      </div>

      {/* 2-Column: Article List Sidebar + Active Article Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Article Navigator Sidebar */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
            {language === 'en' ? 'Study Curriculum Modules' : 'అధ్యయన పాఠాలు'}
          </h3>

          <div className="space-y-2">
            {STUDY_ARTICLES.map((article) => {
              const isSelected = selectedArticle.id === article.id;
              return (
                <div
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className={`p-4 rounded-2xl cursor-pointer border transition-all ${
                    isSelected
                      ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-900 dark:text-cyan-200 shadow-xs'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-semibold text-cyan-600 dark:text-cyan-400 mb-1">
                    <span>{article.category}</span>
                    <span className="flex items-center gap-1 opacity-80">
                      <Clock className="w-3 h-3" />
                      {article.readTime} {t.reader.readTime}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {language === 'te' ? article.title.te : article.title.en}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Article Content Reader */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-5 space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300">
                {selectedArticle.category}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {selectedArticle.readTime} {t.reader.readTime}
              </span>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {language === 'te' ? selectedArticle.title.te : selectedArticle.title.en}
            </h2>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
              {language === 'te' ? selectedArticle.summary.te : selectedArticle.summary.en}
            </p>
          </div>

          {/* Section Renderings */}
          <div className="space-y-6">
            {selectedArticle.sections.map((sec, idx) => (
              <div key={`sec-${idx}`} className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {language === 'te' ? sec.heading.te : sec.heading.en}
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                  {language === 'te' ? sec.content.te : sec.content.en}
                </p>

                {sec.keyTakeaways && (
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2 mt-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" />
                      {t.reader.keyTakeaways}
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-200">
                      {(language === 'te' ? sec.keyTakeaways.te : sec.keyTakeaways.en).map((pt, pIdx) => (
                        <li key={`takeaway-${pIdx}`} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
