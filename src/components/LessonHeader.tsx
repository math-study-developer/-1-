import React from 'react';
import { Star, Check, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Lesson } from '../types';

interface LessonHeaderProps {
  lesson: Lesson;
  isCompleted: boolean;
  onToggleComplete: () => void;
}

export const LessonHeader: React.FC<LessonHeaderProps> = ({
  lesson,
  isCompleted,
  onToggleComplete,
}) => {
  const handleCompleteClick = () => {
    if (!isCompleted) {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
        });
      } catch {
        // fallback if canvas not available
      }
    }
    onToggleComplete();
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs mb-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Breadcrumb / Lesson Meta */}
        <div>
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-1">
            <span>{lesson.chapterTitle}</span>
            <span aria-hidden="true">·</span>
            <span className="text-sky-700 font-bold">
              第{lesson.lessonNumber}時 / 全{lesson.totalLessonsInChapter}時間
            </span>
          </div>
          <h1 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight">
            第{lesson.lessonNumber}時：{lesson.title}
          </h1>
        </div>

        {/* Clear Button */}
        <div className="shrink-0">
          <button
            onClick={handleCompleteClick}
            className={`min-h-[44px] px-4 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xs ${
              isCompleted
                ? 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-emerald-200'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            {isCompleted ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                <span>クリア済み！</span>
                <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>この時間をクリア！</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
