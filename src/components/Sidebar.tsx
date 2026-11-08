import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, CheckCircle, Circle, X } from 'lucide-react';
import { Chapter, Lesson } from '../types';

interface SidebarProps {
  chapters: Chapter[];
  currentLesson: Lesson;
  onSelectLesson: (lesson: Lesson) => void;
  completedLessonIds: Set<string>;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  chapters,
  currentLesson,
  onSelectLesson,
  completedLessonIds,
  isOpenMobile,
  onCloseMobile,
}) => {
  // Store expanded state per chapter id
  const [expandedChapters, setExpandedChapters] = useState<Record<number, boolean>>({
    1: true,
  });

  // Automatically expand the chapter of the current lesson
  useEffect(() => {
    setExpandedChapters((prev) => ({
      ...prev,
      [currentLesson.chapterId]: true,
    }));
  }, [currentLesson.chapterId]);

  const toggleChapter = (chapterId: number) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  const content = (
    <div className="h-full flex flex-col bg-white border-r border-slate-200">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-slate-200 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-bold text-slate-800">全単元カリキュラム</h2>
          <p className="text-xs text-slate-500">全7章 · 計42時間分</p>
        </div>
        <button
          onClick={onCloseMobile}
          className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          aria-label="メニューを閉じる"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Chapters Accordion List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {chapters.map((chapter) => {
          const isExpanded = !!expandedChapters[chapter.id];
          const completedInChapter = chapter.lessons.filter((l) =>
            completedLessonIds.has(l.id)
          ).length;
          const isChapterComplete = completedInChapter === chapter.totalLessons;

          return (
            <div
              key={chapter.id}
              className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-slate-50/50"
            >
              {/* Chapter Accordion Trigger */}
              <button
                onClick={() => toggleChapter(chapter.id)}
                className="w-full px-3 py-2.5 flex items-center justify-between text-left hover:bg-slate-100/80 transition"
              >
                <div className="flex items-center gap-2 min-w-0 pr-2">
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                  )}
                  <div className="truncate">
                    <span className="text-xs font-bold text-slate-800 block truncate">
                      {chapter.title}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {completedInChapter} / {chapter.totalLessons} 時間クリア
                    </span>
                  </div>
                </div>

                {isChapterComplete && (
                  <span className="shrink-0 text-xs text-emerald-600 font-bold bg-emerald-50 border border-emerald-200 rounded px-1.5 py-0.5">
                    完了
                  </span>
                )}
              </button>

              {/* Lesson Items */}
              {isExpanded && (
                <div className="bg-white border-t border-slate-200 divide-y divide-slate-100">
                  {chapter.lessons.map((lesson) => {
                    const isSelected = currentLesson.id === lesson.id;
                    const isCompleted = completedLessonIds.has(lesson.id);

                    return (
                      <button
                        key={lesson.id}
                        onClick={() => {
                          onSelectLesson(lesson);
                          onCloseMobile();
                        }}
                        className={`w-full px-3 py-2.5 flex items-start gap-2.5 text-left text-xs transition ${
                          isSelected
                            ? 'bg-sky-50 text-sky-900 font-bold border-l-4 border-sky-500 pl-2'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div className="mt-0.5 shrink-0">
                          {isCompleted ? (
                            <CheckCircle className="w-4 h-4 text-emerald-500" />
                          ) : (
                            <Circle className="w-4 h-4 text-slate-300" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] text-slate-500 font-medium">
                              第{lesson.lessonNumber}時
                            </span>
                          </div>
                          <p className="truncate text-slate-800 leading-snug">
                            {lesson.title}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden md:block w-72 lg:w-80 shrink-0 sticky top-16 h-[calc(100vh-4rem)]">
        {content}
      </aside>

      {/* Mobile Drawer */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobile}
          />
          <div className="relative w-4/5 max-w-sm h-full shadow-2xl z-10 animate-in slide-in-from-left duration-200">
            {content}
          </div>
        </div>
      )}
    </>
  );
};
