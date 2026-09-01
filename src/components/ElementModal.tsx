import React, { useState } from 'react';
import { ChemicalElement, Language } from '../types';
import { I18N_DATA } from '../data/i18n';
import { audioService } from '../services/audioService';
import { getEtymologyForElement } from '../data/elementEtymologies';
import { 
  X, 
  Volume2, 
  Bookmark, 
  Sparkles, 
  Layers, 
  Thermometer, 
  Activity, 
  Atom, 
  FlaskConical, 
  CheckCircle2, 
  AlertTriangle,
  Lightbulb,
  BrainCircuit,
  Compass,
  BookOpen,
  Globe,
  Scroll,
  Info
} from 'lucide-react';

interface ElementModalProps {
  element: ChemicalElement | null;
  onClose: () => void;
  language: Language;
  isBookmarked: boolean;
  onToggleBookmark: (atomicNumber: number) => void;
  onLaunchQuizForElement: (element: ChemicalElement) => void;
}

export const ElementModal: React.FC<ElementModalProps> = ({
  element,
  onClose,
  language,
  isBookmarked,
  onToggleBookmark,
  onLaunchQuizForElement
}) => {
  if (!element) return null;
  const t = I18N_DATA[language];
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const etymology = element.etymology || getEtymologyForElement(element.atomicNumber, element.name.en, element.name.te, element.symbol);

  const handlePlayAudio = async () => {
    setIsPlayingAudio(true);
    await audioService.playElementAudio(element, language);
    setTimeout(() => {
      setIsPlayingAudio(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        id={`element-modal-${element.atomicNumber}`}
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Modal Header / Hero Banner */}
        <div 
          className="relative px-6 py-6 border-b border-slate-200 dark:border-slate-800"
          style={{
            background: `linear-gradient(135deg, ${element.visual.primaryColor}18 0%, ${element.visual.secondaryColor}25 100%)`
          }}
        >
          {/* Action buttons (Close, Bookmark, Audio) */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <button
              id="btn-modal-audio"
              onClick={handlePlayAudio}
              className={`p-2.5 rounded-full border transition-all ${
                isPlayingAudio
                  ? 'bg-cyan-500 text-white border-cyan-400 scale-110 shadow-lg shadow-cyan-500/30'
                  : 'bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700'
              }`}
              title={t.elementModal.playAudio}
            >
              <Volume2 className="w-5 h-5" />
            </button>

            <button
              id="btn-modal-bookmark"
              onClick={() => onToggleBookmark(element.atomicNumber)}
              className="p-2.5 rounded-full bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all"
              title={isBookmarked ? t.actions.unbookmark : t.actions.bookmark}
            >
              <Bookmark className={`w-5 h-5 ${isBookmarked ? 'text-amber-500 fill-amber-500' : ''}`} />
            </button>

            <button
              id="btn-modal-close"
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Hero Content */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pr-28">
            <div 
              className="w-20 h-20 rounded-2xl border-2 flex flex-col items-center justify-center font-serif shadow-lg shrink-0"
              style={{
                borderColor: element.visual.primaryColor,
                backgroundColor: `${element.visual.primaryColor}20`
              }}
            >
              <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                {element.atomicNumber}
              </span>
              <span className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {element.symbol}
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {language === 'te' ? element.name.te : element.name.en}
                </h2>
                {language === 'te' && (
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    ({element.name.en})
                  </span>
                )}
                {element.latinName && element.latinName !== element.name.en && (
                  <span className="text-xs italic text-slate-400 dark:text-slate-500">
                    Latin: {element.latinName}
                  </span>
                )}
              </div>

              {/* Tag Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                  {t.categories[element.category] || element.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  {element.phaseAtSTP} ({t.phases[element.phaseAtSTP]})
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                  {element.block}-Block • Group {element.group || 'N/A'} • Period {element.period}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Summary */}
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-200 dark:border-slate-800">
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
              {language === 'te' ? element.summary.te : element.summary.en}
            </p>
          </div>

          {/* 2-Column: Chemical Properties Grid + Electron Shell Bohr Visualizer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Chemical Properties Grid */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-500" />
                <span>{language === 'en' ? 'Physical & Chemical Properties' : 'భౌతిక & రసాయన ధర్మాలు'}</span>
              </h3>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-400 block text-[11px]">{t.elementModal.atomicWeight}</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">{element.atomicWeight} u</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-400 block text-[11px]">{t.elementModal.electronConfig}</span>
                  <span className="font-mono font-semibold text-slate-800 dark:text-slate-100">{element.electronConfiguration}</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-400 block text-[11px]">{t.elementModal.oxidationStates}</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">{element.oxidationStates || '0'}</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-400 block text-[11px]">{t.elementModal.electronegativity}</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">
                    {element.electronegativity !== null ? `${element.electronegativity} (Pauling)` : 'N/A'}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-400 block text-[11px]">{t.elementModal.atomicRadius}</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">
                    {element.atomicRadius !== null ? `${element.atomicRadius} pm` : 'N/A'}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-400 block text-[11px]">{t.elementModal.ionizationEnergy}</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">
                    {element.ionizationEnergy !== null ? `${element.ionizationEnergy} kJ/mol` : 'N/A'}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-400 block text-[11px]">{t.elementModal.density}</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">
                    {element.density !== null ? `${element.density} g/cm³` : 'N/A'}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-400 block text-[11px]">{t.elementModal.meltingPoint}</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">
                    {element.meltingPoint !== null ? `${element.meltingPoint} K (${(element.meltingPoint - 273.15).toFixed(1)}°C)` : 'N/A'}
                  </span>
                </div>
              </div>
            </div>

            {/* Electron Shell Visualization Card */}
            <div className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center space-y-3">
              <div className="flex items-center justify-between w-full text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Atom className="w-4 h-4 text-cyan-500" />
                  {t.elementModal.electronShells}
                </span>
                <span className="font-mono text-cyan-600 dark:text-cyan-400">
                  {element.electronShells.join(' , ')}
                </span>
              </div>

              {/* Concentric Shells graphic */}
              <div className="relative w-44 h-44 flex items-center justify-center my-2">
                {element.electronShells.map((count, sIdx) => {
                  const size = 36 + sIdx * 18;
                  return (
                    <div
                      key={`shell-${sIdx}`}
                      className="absolute rounded-full border border-dashed border-cyan-500/40 dark:border-cyan-400/40 animate-spin-slow"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        animationDuration: `${20 + sIdx * 10}s`
                      }}
                    >
                      {/* Little electron dot */}
                      <div className="w-2 h-2 rounded-full bg-cyan-500 absolute -top-1 left-1/2 -translate-x-1/2 shadow-xs shadow-cyan-400" />
                    </div>
                  );
                })}

                {/* Nucleus */}
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs text-white shadow-md z-10"
                  style={{ backgroundColor: element.visual.primaryColor }}
                >
                  {element.symbol}
                </div>
              </div>

              <p className="text-[11px] text-slate-400">
                {language === 'en'
                  ? `${element.electronShells.length} Principal Energy Levels • ${element.atomicNumber} Protons & Electrons`
                  : `${element.electronShells.length} ప్రధాన కర్పరాలు • ${element.atomicNumber} ప్రోటాన్లు & ఎలక్ట్రాన్లు`}
              </p>
            </div>
          </div>

          {/* Classical Etymology & Name Origin Section */}
          {etymology && (
            <div className="rounded-2xl p-5 bg-gradient-to-br from-amber-50/80 via-orange-50/40 to-amber-100/30 dark:from-amber-950/30 dark:via-slate-900/40 dark:to-orange-950/20 border border-amber-200/80 dark:border-amber-800/40 space-y-4 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200/60 dark:border-amber-800/30 pb-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>{t.elementModal.etymologyTitle}</span>
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200 border border-amber-300/80 dark:border-amber-700/50">
                  {etymology.originLanguage}
                </span>
              </div>

              {/* 2-Col Root Word & Literal Meaning */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-amber-200/50 dark:border-slate-700/60 space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Scroll className="w-3.5 h-3.5 text-amber-500" />
                    {t.elementModal.rootWord}
                  </span>
                  <p className="text-xs font-mono font-bold text-amber-900 dark:text-amber-300">
                    {etymology.rootWord}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-amber-200/50 dark:border-slate-700/60 space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-cyan-500" />
                    {t.elementModal.literalMeaning}
                  </span>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {language === 'te' ? etymology.literalMeaning.te : etymology.literalMeaning.en}
                  </p>
                </div>
              </div>

              {/* Naming Story / Why is it called with that name */}
              <div className="p-3.5 rounded-xl bg-white/90 dark:bg-slate-800/90 border border-amber-200/60 dark:border-slate-700/80 space-y-1.5">
                <span className="text-xs font-bold text-amber-800 dark:text-amber-400 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  {t.elementModal.namingReason}
                </span>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  {language === 'te' ? etymology.namingStory.te : etymology.namingStory.en}
                </p>
              </div>

              {/* Chemical Symbol Origin */}
              {etymology.symbolOrigin && (
                <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 bg-amber-500/10 dark:bg-amber-950/40 px-3 py-2 rounded-xl border border-amber-500/20">
                  <span className="font-bold text-amber-900 dark:text-amber-300 shrink-0">{t.elementModal.symbolOriginTitle}:</span>
                  <span>{language === 'te' ? etymology.symbolOrigin.te : etymology.symbolOrigin.en}</span>
                </div>
              )}
            </div>
          )}

          {/* Everyday Applications */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>{t.elementModal.applications}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {(language === 'te' ? element.applications.te : element.applications.en).map((app, idx) => (
                <div 
                  key={`app-${idx}`}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Home Chemistry Experiments (if available) */}
          {element.homeExperiments && element.homeExperiments.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-indigo-500" />
                <span>{t.elementModal.homeExperiments}</span>
              </h3>

              {element.homeExperiments.map((exp) => (
                <div 
                  key={exp.id}
                  className="p-4 rounded-2xl bg-indigo-500/5 dark:bg-indigo-950/30 border border-indigo-500/20 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-indigo-900 dark:text-indigo-300">
                      {language === 'te' ? exp.title.te : exp.title.en}
                    </h4>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      {exp.safetyLevel}
                    </span>
                  </div>

                  {/* Materials */}
                  <div>
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 block mb-1">
                      {t.elementModal.materialsNeeded}:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {(language === 'te' ? exp.materials.te : exp.materials.en).map((mat, mIdx) => (
                        <span key={`m-${mIdx}`} className="text-xs px-2 py-0.5 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Steps */}
                  <div>
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 block mb-1">
                      {t.elementModal.experimentSteps}:
                    </span>
                    <ol className="list-decimal list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300">
                      {(language === 'te' ? exp.steps.te : exp.steps.en).map((step, sIdx) => (
                        <li key={`s-${sIdx}`}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  {/* Principle */}
                  <div className="text-xs text-indigo-700 dark:text-indigo-300 bg-indigo-500/10 p-2.5 rounded-xl">
                    <span className="font-bold">{t.elementModal.scienceBehind}: </span>
                    {language === 'te' ? exp.scientificPrinciple.te : exp.scientificPrinciple.en}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Historical Discovery & Fun Fact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-amber-500/5 dark:bg-amber-950/20 border border-amber-500/20 space-y-1">
              <span className="text-[11px] font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                {t.elementModal.discovery} ({element.discoveryYear})
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {language === 'en' ? `Discovered by: ${element.discoveredBy}` : `కనుగొన్న వారు: ${element.discoveredBy}`}
              </p>
            </div>

            {element.funFact && (
              <div className="p-3.5 rounded-xl bg-cyan-500/5 dark:bg-cyan-950/20 border border-cyan-500/20 space-y-1">
                <span className="text-[11px] font-bold text-cyan-800 dark:text-cyan-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {t.elementModal.funFact}
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {language === 'te' ? element.funFact.te : element.funFact.en}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer with Quick Quiz Button */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            {language === 'en' ? 'Audio & data localized in EN & TE' : 'ఇంగ్లీష్ మరియు తెలుగులో ఆడియో & డేటా'}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              id="btn-quiz-this-element"
              onClick={() => {
                onClose();
                onLaunchQuizForElement(element);
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white shadow-md shadow-cyan-600/20 flex items-center justify-center gap-2 transition-all w-full sm:w-auto"
            >
              <BrainCircuit className="w-4 h-4" />
              <span>{t.elementModal.quizMe}</span>
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              {t.elementModal.close}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
