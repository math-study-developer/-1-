import React from 'react';
import { Target } from 'lucide-react';

interface LessonTargetProps {
  target: string;
}

export const LessonTarget: React.FC<LessonTargetProps> = ({ target }) => {
  return (
    <div className="bg-amber-50/70 border-l-4 border-amber-400 rounded-r-xl p-3.5 sm:p-4 mb-4 shadow-xs">
      <div className="flex items-center gap-2 mb-1">
        <Target className="w-4 h-4 text-amber-600 shrink-0" />
        <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
          本時のめあて
        </span>
      </div>
      <p className="text-sm sm:text-base font-bold text-slate-800 leading-relaxed pl-1">
        {target}
      </p>
    </div>
  );
};
