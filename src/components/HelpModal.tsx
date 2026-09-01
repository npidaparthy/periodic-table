import React, { useState } from 'react';
import { Language, HelpTopic } from '../types';
import { I18N_DATA } from '../data/i18n';
import { HELP_TOPICS } from '../data/helpData';
import { 
  X, 
  HelpCircle, 
  LayoutGrid, 
  TrendingUp, 
  BrainCircuit, 
  Volume2, 
  FileJson, 
  Lightbulb, 
  CheckCircle2 
} from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const HelpModal: React.FC<HelpModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  if (!isOpen) return null;
  const t = I18N_DATA[language];
  const [activeTopic, setActiveTopic] = useState<HelpTopic>(HELP_TOPICS[0]);

  const getIcon = (name: string) => {
    switch (name) {
      case 'LayoutGrid':
        return <LayoutGrid className="w-4 h-4 text-cyan-500" />;
      case 'TrendingUp':
        return <TrendingUp className="w-4 h-4 text-emerald-500" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-4 h-4 text-indigo-500" />;
      case 'Volume2':
        return <Volume2 className="w-4 h-4 text-amber-500" />;
      case 'FileJson':
      default:
        return <FileJson className="w-4 h-4 text-pink-500" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        id="help-guide-modal"
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/20">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {t.help.title}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t.help.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2-Column: Topics List + Detail View */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800 flex-1 overflow-y-auto">
          
          {/* Topics List */}
          <div className="p-4 space-y-2 bg-slate-50/50 dark:bg-slate-900/50">
            {HELP_TOPICS.map((topic) => {
              const isSelected = activeTopic.id === topic.id;
              return (
                <div
                  key={topic.id}
                  onClick={() => setActiveTopic(topic)}
                  className={`p-3 rounded-2xl cursor-pointer border text-xs font-semibold flex items-center gap-2.5 transition-all ${
                    isSelected
                      ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-900 dark:text-cyan-200 shadow-xs'
                      : 'border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {getIcon(topic.iconName)}
                  <span className="truncate">{language === 'te' ? topic.title.te : topic.title.en}</span>
                </div>
              );
            })}
          </div>

          {/* Active Topic Description & Tips */}
          <div className="p-6 md:col-span-2 space-y-5 overflow-y-auto">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                {language === 'te' ? activeTopic.title.te : activeTopic.title.en}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {language === 'te' ? activeTopic.description.te : activeTopic.description.en}
              </p>
            </div>

            {activeTopic.tips && (
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  {t.help.proTips}
                </span>

                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  {(language === 'te' ? activeTopic.tips.te : activeTopic.tips.en).map((tip, idx) => (
                    <li key={`tip-${idx}`} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white shadow-md shadow-cyan-600/20 transition-all"
          >
            {language === 'en' ? 'Got it' : 'అర్థమైంది'}
          </button>
        </div>
      </div>
    </div>
  );
};
