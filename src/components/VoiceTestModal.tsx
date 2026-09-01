import React, { useState } from 'react';
import { Language, ChemicalElement } from '../types';
import { audioService } from '../services/audioService';
import { X, Volume2, Sparkles, CheckCircle2, Play, Square } from 'lucide-react';

interface VoiceTestModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  elements: ChemicalElement[];
}

export const VoiceTestModal: React.FC<VoiceTestModalProps> = ({
  isOpen,
  onClose,
  language,
  elements
}) => {
  if (!isOpen) return null;

  const [selectedAtomicNumber, setSelectedAtomicNumber] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [customText, setCustomText] = useState(
    language === 'te' 
      ? 'హైడ్రోజన్. విశ్వంలో అత్యంత విస్తారంగా ఉన్న మూలకం.'
      : 'Hydrogen. The most abundant chemical substance in the Universe.'
  );

  const activeElement = elements.find((e) => e.atomicNumber === selectedAtomicNumber) || elements[0];

  const handlePlayElement = async () => {
    setIsPlaying(true);
    await audioService.playElementAudio(activeElement, language);
    setTimeout(() => setIsPlaying(false), 2500);
  };

  const handlePlayCustomText = () => {
    setIsPlaying(true);
    audioService.speakText(customText, language);
    setTimeout(() => setIsPlaying(false), 3000);
  };

  const handleStop = () => {
    audioService.stop();
    setIsPlaying(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        id="voice-diagnostic-modal"
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/20">
              <Volume2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                {language === 'en' ? 'Voice Narration & Audio Studio' : 'వాయిస్ ఆడియో & ఉచ్ఛారణ స్టూడియో'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {language === 'en'
                  ? 'Test MP3 audio files or browser speech synthesis in English & Telugu'
                  : 'ఇంగ్లీష్ మరియు తెలుగులో ఆడియో ఫైళ్లు & స్పీచ్ సింథసిస్ పరీక్షించండి'}
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

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Element audio test */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              {language === 'en' ? '1. Test Element Pronunciation' : '1. మూలకం ఉచ్ఛారణను పరీక్షించండి'}
            </span>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <select
                value={selectedAtomicNumber}
                onChange={(e) => setSelectedAtomicNumber(Number(e.target.value))}
                className="text-xs px-3 py-2 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 flex-1"
              >
                {elements.map((el) => (
                  <option key={`opt-voice-${el.atomicNumber}`} value={el.atomicNumber}>
                    {el.atomicNumber}. {el.symbol} - {el.name.en} ({el.name.te})
                  </option>
                ))}
              </select>

              <button
                onClick={handlePlayElement}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white shadow-md shadow-cyan-600/20 flex items-center justify-center gap-1.5 transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{language === 'en' ? 'Play Voice' : 'వినండి'}</span>
              </button>
            </div>

            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              {language === 'en'
                ? `Active target path: /public/audio/${language}/${activeElement.atomicNumber}.mp3 (falls back to SpeechSynthesis)`
                : `లక్ష్య ఆడియో పాత్: /public/audio/${language}/${activeElement.atomicNumber}.mp3`}
            </div>
          </div>

          {/* Custom text speak test */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              {language === 'en' ? '2. Test Custom Chemistry Phrase' : '2. స్వంత రసాయన వాక్యాన్ని వినిపించండి'}
            </span>

            <textarea
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              rows={2}
              className="w-full text-xs p-3 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={handleStop}
                className="px-3 py-1.5 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center gap-1"
              >
                <Square className="w-3 h-3 fill-current" />
                <span>{language === 'en' ? 'Stop' : 'ఆపు'}</span>
              </button>

              <button
                onClick={handlePlayCustomText}
                className="px-4 py-1.5 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white shadow-md shadow-cyan-600/20 flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{language === 'en' ? 'Speak Text' : 'చదవండి'}</span>
              </button>
            </div>
          </div>

          {/* Offline readiness note */}
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>
              {language === 'en'
                ? 'Speech Synthesis works fully offline without requiring any internet connection.'
                : 'స్పీచ్ సింథసిస్ ఇంటర్నెట్ లేకుండా ఆఫ్‌లైన్‌లో కూడా పనిచేస్తుంది.'}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300"
          >
            {language === 'en' ? 'Close' : 'మూసివేయి'}
          </button>
        </div>
      </div>
    </div>
  );
};
