import React from 'react';
import { Lightbulb, ArrowRight } from 'lucide-react';
import { Lesson } from '../types';
import { MathView } from './MathView';
import { SimulatorContainer } from './simulators/SimulatorContainer';

interface LessonStepsProps {
  lesson: Lesson;
}

export const LessonSteps: React.FC<LessonStepsProps> = ({ lesson }) => {
  return (
    <section className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs mb-4">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-md bg-sky-100 text-sky-700 flex items-center justify-center">
          <Lightbulb className="w-4 h-4" />
        </div>
        <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
          これだけ覚える！解き方 2ステップ
        </h2>
      </div>

      {/* 2 Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
        {/* Step 1 */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="w-7 h-7 rounded-lg bg-sky-600 text-white font-bold text-sm flex items-center justify-center shadow-xs">
                ①
              </span>
              {lesson.step1.badge && (
                <span className="text-[11px] font-bold text-sky-700 bg-sky-100/70 px-2 py-0.5 rounded">
                  {lesson.step1.badge}
                </span>
              )}
            </div>
            <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1.5">
              {lesson.step1.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
              {lesson.step1.instruction}
            </p>
          </div>

          {lesson.step1.mathLatex && (
            <div className="bg-white rounded-lg p-2.5 border border-slate-200 text-center">
              <MathView math={lesson.step1.mathLatex} display={true} className="text-sm sm:text-base" />
            </div>
          )}
        </div>

        {/* Step 2 */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-bold text-sm flex items-center justify-center shadow-xs">
                ②
              </span>
              {lesson.step2.badge && (
                <span className="text-[11px] font-bold text-indigo-700 bg-indigo-100/70 px-2 py-0.5 rounded">
                  {lesson.step2.badge}
                </span>
              )}
            </div>
            <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1.5">
              {lesson.step2.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
              {lesson.step2.instruction}
            </p>
          </div>

          {lesson.step2.mathLatex && (
            <div className="bg-white rounded-lg p-2.5 border border-slate-200 text-center">
              <MathView math={lesson.step2.mathLatex} display={true} className="text-sm sm:text-base" />
            </div>
          )}
        </div>
      </div>

      {/* Interactive Simulator if available for this lesson */}
      {lesson.simulatorType && (
        <div className="mt-2">
          <SimulatorContainer type={lesson.simulatorType} />
        </div>
      )}
    </section>
  );
};
