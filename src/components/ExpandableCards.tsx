import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle, HelpCircle, Check, X } from 'lucide-react';
import { FormulaModel, CautionMistake } from '../types';
import { MathView } from './MathView';

interface ExpandableCardsProps {
  formulaModel: FormulaModel;
  cautionMistake: CautionMistake;
}

export const ExpandableCards: React.FC<ExpandableCardsProps> = ({
  formulaModel,
  cautionMistake,
}) => {
  const [openFormula, setOpenFormula] = useState<boolean>(false);
  const [openCaution, setOpenCaution] = useState<boolean>(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
      {/* 1. Formula Model Card */}
      <div className="border border-sky-200/90 rounded-2xl bg-white shadow-xs overflow-hidden transition-all">
        <button
          onClick={() => setOpenFormula(!openFormula)}
          className="w-full min-h-[48px] px-4 py-3 flex items-center justify-between text-left bg-sky-50/60 hover:bg-sky-50 transition"
          aria-expanded={openFormula}
        >
          <div className="flex items-center gap-2">
            <span className="text-base">📐</span>
            <span className="font-bold text-sm text-sky-900">
              公式の型（テンプレート）
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-sky-700 font-medium">
            <span>{openFormula ? '閉じる' : 'タップで開く'}</span>
            {openFormula ? (
              <ChevronUp className="w-4 h-4 text-sky-600" />
            ) : (
              <ChevronDown className="w-4 h-4 text-sky-600" />
            )}
          </div>
        </button>

        {openFormula && (
          <div className="p-4 bg-white border-t border-sky-100 text-xs sm:text-sm space-y-3">
            <div>
              <span className="text-xs font-bold text-slate-500 block mb-1">
                当てはめるだけの型枠：
              </span>
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-center">
                <MathView math={formulaModel.templateLatex} display={true} />
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed">
              {formulaModel.explanation}
            </p>

            {formulaModel.exampleLatex && (
              <div className="p-2.5 bg-sky-50/50 border border-sky-100 rounded-lg">
                <span className="text-[11px] font-bold text-sky-800 block mb-1">
                  具体例：
                </span>
                <MathView math={formulaModel.exampleLatex} display={true} />
              </div>
            )}

            <div className="flex items-start gap-1.5 p-2 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 text-xs">
              <span className="font-bold shrink-0">💡 コツ:</span>
              <span>{formulaModel.tips}</span>
            </div>
          </div>
        )}
      </div>

      {/* 2. Caution Mistakes Card */}
      <div className="border border-rose-200/90 rounded-2xl bg-white shadow-xs overflow-hidden transition-all">
        <button
          onClick={() => setOpenCaution(!openCaution)}
          className="w-full min-h-[48px] px-4 py-3 flex items-center justify-between text-left bg-rose-50/60 hover:bg-rose-50 transition"
          aria-expanded={openCaution}
        >
          <div className="flex items-center gap-2">
            <span className="text-base">⚠️</span>
            <span className="font-bold text-sm text-rose-900">
              うっかりミス注意！
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-rose-700 font-medium">
            <span>{openCaution ? '閉じる' : 'タップで開く'}</span>
            {openCaution ? (
              <ChevronUp className="w-4 h-4 text-rose-600" />
            ) : (
              <ChevronDown className="w-4 h-4 text-rose-600" />
            )}
          </div>
        </button>

        {openCaution && (
          <div className="p-4 bg-white border-t border-rose-100 text-xs sm:text-sm space-y-3">
            {/* Wrong (✕) */}
            <div className="p-2.5 bg-rose-50/60 border border-rose-200 rounded-lg">
              <div className="flex items-center gap-1.5 font-bold text-rose-700 mb-1">
                <div className="w-4 h-4 rounded-full bg-rose-200 flex items-center justify-center shrink-0">
                  <X className="w-3 h-3 text-rose-700 stroke-[3]" />
                </div>
                <span>やりがちな間違い（✕）</span>
              </div>
              <p className="font-bold text-slate-800 text-xs sm:text-sm">
                {cautionMistake.wrong}
              </p>
              {cautionMistake.wrongMath && (
                <div className="my-1 text-center">
                  <MathView math={cautionMistake.wrongMath} display={true} />
                </div>
              )}
              <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
                原因: {cautionMistake.wrongReason}
              </p>
            </div>

            {/* Correct (◯) */}
            <div className="p-2.5 bg-emerald-50/60 border border-emerald-200 rounded-lg">
              <div className="flex items-center gap-1.5 font-bold text-emerald-800 mb-1">
                <div className="w-4 h-4 rounded-full bg-emerald-200 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-emerald-800 stroke-[3]" />
                </div>
                <span>正しい解き方（◯）</span>
              </div>
              <p className="font-bold text-slate-800 text-xs sm:text-sm">
                {cautionMistake.correct}
              </p>
              {cautionMistake.correctMath && (
                <div className="my-1 text-center">
                  <MathView math={cautionMistake.correctMath} display={true} />
                </div>
              )}
              <p className="text-[11px] sm:text-xs text-emerald-800 mt-1 font-medium">
                ポイント: {cautionMistake.correctReason}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
