import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Lesson } from '../types';

interface FooterNavProps {
  prevLesson?: Lesson;
  nextLesson?: Lesson;
  onNavigate: (lesson: Lesson) => void;
}

export const FooterNav: React.FC<FooterNavProps> = ({
  prevLesson,
  nextLesson,
  onNavigate,
}) => {
  return (
    <footer className="mt-6 pt-4 border-t border-slate-200">
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {/* Previous Lesson */}
        {prevLesson ? (
          <button
            onClick={() => {
              onNavigate(prevLesson);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="min-h-[52px] p-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition flex items-center gap-2 sm:gap-3 text-left active:scale-98 shadow-xs"
          >
            <ArrowLeft className="w-5 h-5 text-slate-400 shrink-0" />
            <div className="min-w-0">
              <span className="text-[10px] sm:text-xs text-slate-500 block">
                前の時間へ
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 truncate block">
                {prevLesson.title}
              </span>
            </div>
          </button>
        ) : (
          <div className="min-h-[52px] p-3 rounded-xl border border-dashed border-slate-200 bg-slate-50/50 flex items-center justify-center text-xs text-slate-400">
            最初の時間です
          </div>
        )}

        {/* Next Lesson */}
        {nextLesson ? (
          <button
            onClick={() => {
              onNavigate(nextLesson);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="min-h-[52px] p-3 rounded-xl border border-sky-200 bg-sky-500 hover:bg-sky-600 text-white transition flex items-center justify-end gap-2 sm:gap-3 text-right active:scale-98 shadow-xs"
          >
            <div className="min-w-0">
              <span className="text-[10px] sm:text-xs text-sky-100 block">
                次の時間へ
              </span>
              <span className="text-xs sm:text-sm font-bold text-white truncate block">
                {nextLesson.title}
              </span>
            </div>
            <ArrowRight className="w-5 h-5 text-white shrink-0" />
          </button>
        ) : (
          <div className="min-h-[52px] p-3 rounded-xl border border-dashed border-emerald-200 bg-emerald-50/50 flex items-center justify-center text-xs text-emerald-700 font-bold">
            全課程修了！おめでとう！
          </div>
        )}
      </div>
    </footer>
  );
};
