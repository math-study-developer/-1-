import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, BookOpen } from 'lucide-react';
import { ALL_LESSONS } from '../data/lessonsData';
import { Lesson } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLesson: (lesson: Lesson) => void;
}

const QUICK_TAGS = ['移項', '比例', '反比例', '累乗', '作図', 'ねじれの位置', '体積', '扇形', '中央値', '符号'];

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectLesson,
}) => {
  const [query, setQuery] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if (e.key === '/' && !isOpen) {
        // avoid trigger if already typing in an input
        if (
          document.activeElement?.tagName !== 'INPUT' &&
          document.activeElement?.tagName !== 'TEXTAREA'
        ) {
          e.preventDefault();
          // let parent open search
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = query.trim()
    ? ALL_LESSONS.filter((lesson) => {
        const q = query.toLowerCase().trim();
        return (
          lesson.title.toLowerCase().includes(q) ||
          lesson.chapterTitle.toLowerCase().includes(q) ||
          lesson.target.toLowerCase().includes(q) ||
          lesson.keywords.some((k) => k.toLowerCase().includes(q))
        );
      })
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-14 sm:pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Box */}
        <div className="p-3.5 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0 ml-1" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="探したい言葉を入力（例: 移項, 比例, 体積, 符号...）"
            className="w-full text-sm sm:text-base bg-transparent text-slate-800 placeholder-slate-400 focus:outline-hidden"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              aria-label="検索語句をクリア"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              aria-label="検索を閉じる"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick Tag Recommendations */}
        <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto text-xs">
          <span className="text-slate-500 shrink-0 font-medium mr-1">よくある検索:</span>
          {QUICK_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2 py-1 rounded bg-white hover:bg-slate-200 text-slate-700 border border-slate-200 shrink-0 transition"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-slate-100">
          {query.trim() === '' ? (
            <div className="p-8 text-center text-slate-400 text-xs sm:text-sm">
              キーワードを入力するか、上のタグをタップしてください
            </div>
          ) : filtered.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-xs sm:text-sm">
              「{query}」に一致する時間は見つかりませんでした。
              <div className="text-xs text-slate-400 mt-1">
                別のキーワード（例：プラス、方程式、グラフ、図形）で試してみてください。
              </div>
            </div>
          ) : (
            filtered.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => {
                  onSelectLesson(lesson);
                  onClose();
                }}
                className="w-full p-3 rounded-xl hover:bg-sky-50 text-left transition flex items-center justify-between group"
              >
                <div className="min-w-0 pr-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-0.5">
                    <span>{lesson.chapterTitle}</span>
                    <span aria-hidden="true">·</span>
                    <span>第{lesson.lessonNumber}時</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 group-hover:text-sky-700 truncate">
                    {lesson.title}
                  </h4>
                  <p className="text-xs text-slate-500 truncate mt-0.5">
                    {lesson.target}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition shrink-0" />
              </button>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-400 flex justify-between items-center">
          <span>全42時間分から瞬時に検索</span>
          <span>Escで閉じる</span>
        </div>
      </div>
    </div>
  );
};
