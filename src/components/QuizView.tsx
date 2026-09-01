import React, { useState, useEffect } from 'react';
import { ChemicalElement, Language, QuizDifficulty, QuizType, QuizQuestion, QuizSessionResult } from '../types';
import { I18N_DATA } from '../data/i18n';
import { generateQuizQuestions } from '../services/quizGenerator';
import { audioService } from '../services/audioService';
import { 
  BrainCircuit, 
  Sparkles, 
  Volume2, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw, 
  Trophy, 
  Flame, 
  Timer, 
  Zap 
} from 'lucide-react';

interface QuizViewProps {
  elements: ChemicalElement[];
  language: Language;
  onSaveQuizResult: (result: QuizSessionResult) => void;
  preselectedElement?: ChemicalElement | null;
  onClearPreselectedElement?: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  elements,
  language,
  onSaveQuizResult,
  preselectedElement,
  onClearPreselectedElement
}) => {
  const t = I18N_DATA[language];

  // Setup state
  const [inQuiz, setInQuiz] = useState(false);
  const [difficulty, setDifficulty] = useState<QuizDifficulty>('beginner');
  const [quizType, setQuizType] = useState<QuizType>('mixed');
  const [questionCount, setQuestionCount] = useState<number>(10);

  // Active quiz state
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [missedElementNumbers, setMissedElementNumbers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);

  // Auto start quiz if an element was preselected from ElementModal
  useEffect(() => {
    if (preselectedElement) {
      startQuizForSingleElement(preselectedElement);
      if (onClearPreselectedElement) onClearPreselectedElement();
    }
  }, [preselectedElement]);

  const startQuizForSingleElement = (el: ChemicalElement) => {
    const generated = generateQuizQuestions(elements, 'mixed', 'intermediate', 5);
    // Put target element question first
    setQuestions(generated);
    setCurrentIndex(0);
    setScore(0);
    setCurrentStreak(0);
    setSelectedOptionId(null);
    setIsAnswered(false);
    setMissedElementNumbers([]);
    setQuizCompleted(false);
    setStartTime(Date.now());
    setInQuiz(true);
  };

  const handleStartQuiz = () => {
    const generated = generateQuizQuestions(elements, quizType, difficulty, questionCount);
    setQuestions(generated);
    setCurrentIndex(0);
    setScore(0);
    setCurrentStreak(0);
    setSelectedOptionId(null);
    setIsAnswered(false);
    setMissedElementNumbers([]);
    setQuizCompleted(false);
    setStartTime(Date.now());
    setInQuiz(true);
  };

  const handlePlayQuestionAudio = () => {
    if (!questions[currentIndex]) return;
    setIsPlayingVoice(true);
    const q = questions[currentIndex];
    const promptText = language === 'te' ? q.prompt.te : q.prompt.en;
    audioService.speakText(promptText, language);
    setTimeout(() => setIsPlayingVoice(false), 3000);
  };

  const handleOptionSelect = (optionId: string) => {
    if (isAnswered) return;
    setSelectedOptionId(optionId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOptionId || isAnswered) return;
    const currentQ = questions[currentIndex];
    const selectedOpt = currentQ.options.find((o) => o.id === selectedOptionId);
    const isCorrect = selectedOpt?.isCorrect ?? false;

    setIsAnswered(true);

    if (isCorrect) {
      setScore((prev) => prev + 1);
      setCurrentStreak((prev) => prev + 1);
    } else {
      setCurrentStreak(0);
      setMissedElementNumbers((prev) => [...prev, currentQ.element.atomicNumber]);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsAnswered(false);
    } else {
      // Complete quiz
      const totalTime = Math.round((Date.now() - startTime) / 1000);
      const finalResult: QuizSessionResult = {
        id: `quiz-${Date.now()}`,
        timestamp: Date.now(),
        totalQuestions: questions.length,
        correctCount: score + (questions[currentIndex]?.options.find((o) => o.id === selectedOptionId)?.isCorrect ? 1 : 0),
        accuracy: Math.round(((score + (questions[currentIndex]?.options.find((o) => o.id === selectedOptionId)?.isCorrect ? 1 : 0)) / questions.length) * 100),
        difficulty,
        quizType,
        timeSpentSeconds: totalTime,
        missedElementNumbers
      };

      onSaveQuizResult(finalResult);
      setQuizCompleted(true);
    }
  };

  // 1. Setup Configuration View
  if (!inQuiz) {
    return (
      <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-cyan-600/30">
              <BrainCircuit className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {t.quiz.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                {t.quiz.subtitle}
              </p>
            </div>
          </div>

          {/* Difficulty Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {t.quiz.selectDifficulty}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                ['beginner', t.quiz.beginner, 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'],
                ['intermediate', t.quiz.intermediate, 'border-cyan-500 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300'],
                ['master', t.quiz.master, 'border-indigo-500 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300']
              ].map(([lvl, label, style]) => (
                <div
                  key={lvl}
                  onClick={() => setDifficulty(lvl as QuizDifficulty)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    difficulty === lvl
                      ? `${style} ring-2 ring-cyan-500 font-bold shadow-xs`
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                  }`}
                >
                  <span className="text-xs">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quiz Mode Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {t.quiz.selectMode}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {(
                [
                  ['mixed', t.quiz.modes.mixed],
                  ['etymology', t.quiz.modes.etymology],
                  ['symbol-to-name', t.quiz.modes['symbol-to-name']],
                  ['name-to-symbol', t.quiz.modes['name-to-symbol']],
                  ['atomic-number', t.quiz.modes['atomic-number']],
                  ['atomic-weight', t.quiz.modes['atomic-weight']],
                  ['category', t.quiz.modes.category]
                ] as const
              ).map(([m, label]) => (
                <div
                  key={m}
                  onClick={() => setQuizType(m as QuizType)}
                  className={`p-3.5 rounded-xl border text-xs cursor-pointer transition-all text-center ${
                    quizType === m
                      ? 'bg-cyan-500/10 border-cyan-500 text-cyan-800 dark:text-cyan-200 font-bold shadow-xs'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                  }`}
                >
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Number of questions */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
            <span className="text-xs font-medium text-slate-500">
              {language === 'en' ? 'Questions Count:' : 'ప్రశ్నల సంఖ్య:'}
            </span>
            <div className="flex gap-2">
              {[5, 10, 15, 20].map((num) => (
                <button
                  key={`qc-${num}`}
                  onClick={() => setQuestionCount(num)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    questionCount === num
                      ? 'bg-cyan-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Launch Quiz Button */}
          <button
            id="btn-start-quiz"
            onClick={handleStartQuiz}
            className="w-full py-3.5 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm shadow-lg shadow-cyan-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
          >
            <Sparkles className="w-5 h-5" />
            <span>{language === 'en' ? 'Start Retention Quiz' : 'క్విజ్ ప్రారంభించండి'}</span>
          </button>
        </div>
      </div>
    );
  }

  // 2. Results Screen
  if (quizCompleted) {
    const accuracy = Math.round((score / questions.length) * 100);

    return (
      <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl text-center space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-500 to-yellow-500 text-white flex items-center justify-center mx-auto shadow-xl shadow-amber-500/30 animate-bounce">
            <Trophy className="w-10 h-10" />
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {t.quiz.summaryTitle}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {language === 'en'
                ? `You scored ${score} out of ${questions.length} questions correctly.`
                : `మీరు ${questions.length} ప్రశ్నలలో ${score} సరైన సమాధానాలు ఇచ్చారు.`}
            </p>
          </div>

          {/* Score Badge Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              <span className="text-[11px] text-slate-400 block">{t.quiz.accuracyRate}</span>
              <span className="text-2xl font-black text-cyan-600 dark:text-cyan-400">{accuracy}%</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              <span className="text-[11px] text-slate-400 block">{t.quiz.score}</span>
              <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{score}/{questions.length}</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 col-span-2 sm:col-span-1">
              <span className="text-[11px] text-slate-400 block">{language === 'en' ? 'Difficulty' : 'స్థాయి'}</span>
              <span className="text-lg font-bold text-slate-800 dark:text-slate-100 capitalize">{difficulty}</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleStartQuiz}
              className="flex-1 py-3 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-cyan-600/20 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t.quiz.playAgain}</span>
            </button>

            <button
              onClick={() => setInQuiz(false)}
              className="px-6 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs hover:bg-slate-200 transition-colors"
            >
              {language === 'en' ? 'Back to Quiz Menu' : 'క్విజ్ మెనూకి తిరిగి వెళ్ళండి'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 3. Active Question View
  const currentQ = questions[currentIndex];
  if (!currentQ) return null;

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
      {/* Top Status Bar (Timer, Streak, Progress) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-xl text-xs font-bold bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300">
            {t.quiz.questionCount} {currentIndex + 1} {t.quiz.of} {questions.length}
          </span>
          {currentStreak > 1 && (
            <span className="px-2.5 py-1 rounded-xl text-xs font-bold bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 flex items-center gap-1 animate-pulse">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              {currentStreak} {t.quiz.streak}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Voice Prompt audio button */}
          <button
            onClick={handlePlayQuestionAudio}
            className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
              isPlayingVoice
                ? 'bg-cyan-500 text-white border-cyan-400 scale-105 shadow-md shadow-cyan-500/20'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200'
            }`}
            title={t.quiz.audioVoiceover}
          >
            <Volume2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="hidden sm:inline">{language === 'en' ? 'Audio Question' : 'ఆడియో ప్రశ్న'}</span>
          </button>

          <span className="text-xs font-bold text-slate-600 dark:text-slate-400 font-mono">
            {t.quiz.score}: {score}
          </span>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
        
        {/* Question Prompt */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              {currentQ.type.replace('-', ' ')}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
            {language === 'te' ? currentQ.prompt.te : currentQ.prompt.en}
          </h3>
        </div>

        {/* 4 Choices Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {currentQ.options.map((opt) => {
            const isSelected = selectedOptionId === opt.id;
            let optStyle = 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200 hover:border-cyan-400';

            if (isAnswered) {
              if (opt.isCorrect) {
                optStyle = 'border-emerald-500 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 font-bold';
              } else if (isSelected && !opt.isCorrect) {
                optStyle = 'border-rose-500 bg-rose-500/10 text-rose-800 dark:text-rose-300';
              } else {
                optStyle = 'opacity-40 border-slate-200 dark:border-slate-800';
              }
            } else if (isSelected) {
              optStyle = 'border-cyan-500 bg-cyan-500/10 text-cyan-900 dark:text-cyan-200 ring-2 ring-cyan-500 font-bold';
            }

            return (
              <div
                key={opt.id}
                onClick={() => handleOptionSelect(opt.id)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between text-sm ${optStyle}`}
              >
                <span>{language === 'te' ? opt.text.te : opt.text.en}</span>
                {isAnswered && opt.isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />}
                {isAnswered && isSelected && !opt.isCorrect && <XCircle className="w-5 h-5 text-rose-500 shrink-0" />}
              </div>
            );
          })}
        </div>

        {/* Explanation Banner when answered */}
        {isAnswered && (
          <div className="p-4 rounded-2xl bg-cyan-500/5 dark:bg-cyan-950/20 border border-cyan-500/20 space-y-1.5 animate-fade-in">
            <span className="text-xs font-bold text-cyan-800 dark:text-cyan-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {t.quiz.explanation}
            </span>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {language === 'te' ? currentQ.explanation.te : currentQ.explanation.en}
            </p>
          </div>
        )}

        {/* Footer Next Button */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          {!isAnswered ? (
            <button
              disabled={!selectedOptionId}
              onClick={handleSubmitAnswer}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                selectedOptionId
                  ? 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-md shadow-cyan-600/20'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
              }`}
            >
              {t.quiz.submitAnswer}
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="px-6 py-2.5 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white shadow-md shadow-cyan-600/20 flex items-center gap-2 transition-all"
            >
              <span>{currentIndex + 1 < questions.length ? t.quiz.nextQuestion : t.quiz.finishQuiz}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
