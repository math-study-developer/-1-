import React, { useState, useEffect } from 'react';
import { HelpCircle, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Quiz } from '../types';
import { MathView } from './MathView';

interface QuickQuizProps {
  quiz: Quiz;
  lessonId: string;
  onQuizPass: (lessonId: string) => void;
  isCompleted: boolean;
}

export const QuickQuiz: React.FC<QuickQuizProps> = ({
  quiz,
  lessonId,
  onQuizPass,
  isCompleted,
}) => {
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | null>(null);

  // Reset quiz selection when lesson changes
  useEffect(() => {
    setSelectedOption(null);
  }, [lessonId]);

  const handleSelect = (option: 'A' | 'B') => {
    setSelectedOption(option);
    if (option === quiz.correctOption) {
      try {
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.7 },
        });
      } catch {
        // confetti fallback
      }
      onQuizPass(lessonId);
    }
  };

  const isAnswered = selectedOption !== null;
  const isCorrect = selectedOption === quiz.correctOption;

  return (
    <section className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs mb-4">
      {/* Quiz Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-amber-100 text-amber-700 flex items-center justify-center">
            <HelpCircle className="w-4 h-4" />
          </div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
            この時間の確認クイズ（2択）
          </h2>
        </div>
        <span className="text-xs font-medium text-slate-500">1問だけ</span>
      </div>

      {/* Question */}
      <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl mb-3">
        <p className="font-bold text-sm sm:text-base text-slate-800 leading-relaxed">
          {quiz.question}
        </p>
        {quiz.mathQuestion && (
          <div className="mt-2 text-center">
            <MathView math={quiz.mathQuestion} display={true} />
          </div>
        )}
      </div>

      {/* 2 Option Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        {/* Option A */}
        <button
          onClick={() => handleSelect('A')}
          disabled={isAnswered}
          className={`min-h-[52px] p-3 rounded-xl font-bold text-sm text-left flex items-center justify-between transition-all active:scale-98 ${
            selectedOption === 'A'
              ? quiz.correctOption === 'A'
                ? 'bg-emerald-500 text-white shadow-emerald-200 ring-2 ring-emerald-500'
                : 'bg-rose-500 text-white shadow-rose-200'
              : isAnswered && quiz.correctOption === 'A'
              ? 'bg-emerald-100 text-emerald-900 border-2 border-emerald-500'
              : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
                selectedOption === 'A'
                  ? 'bg-white/30 text-white'
                  : 'bg-slate-200 text-slate-700'
              }`}
            >
              A
            </span>
            <span className="leading-snug">{quiz.optionA}</span>
          </div>
        </button>

        {/* Option B */}
        <button
          onClick={() => handleSelect('B')}
          disabled={isAnswered}
          className={`min-h-[52px] p-3 rounded-xl font-bold text-sm text-left flex items-center justify-between transition-all active:scale-98 ${
            selectedOption === 'B'
              ? quiz.correctOption === 'B'
                ? 'bg-emerald-500 text-white shadow-emerald-200 ring-2 ring-emerald-500'
                : 'bg-rose-500 text-white shadow-rose-200'
              : isAnswered && quiz.correctOption === 'B'
              ? 'bg-emerald-100 text-emerald-900 border-2 border-emerald-500'
              : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
                selectedOption === 'B'
                  ? 'bg-white/30 text-white'
                  : 'bg-slate-200 text-slate-700'
              }`}
            >
              B
            </span>
            <span className="leading-snug">{quiz.optionB}</span>
          </div>
        </button>
      </div>

      {/* Feedback Panel */}
      {isAnswered && (
        <div
          className={`p-3.5 rounded-xl border transition-all ${
            isCorrect
              ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
              : 'bg-amber-50 border-amber-200 text-amber-900'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2 font-bold text-sm">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>正解です！おめでとう！</span>
                </>
              ) : (
                <>
                  <span className="text-amber-700 font-bold">おしい！もう一度確認しよう</span>
                </>
              )}
            </div>
            {!isCorrect && (
              <button
                onClick={() => setSelectedOption(null)}
                className="flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-900 bg-white/70 px-2.5 py-1 rounded-lg border border-amber-300"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>もう一度解く</span>
              </button>
            )}
          </div>

          <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
            {quiz.explanation}
          </p>

          {isCorrect && (
            <div className="mt-2 text-xs font-bold text-emerald-700 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{quiz.encouragement}</span>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
