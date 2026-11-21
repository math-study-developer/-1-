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
  // Store expanded state per chapter id and per section key ("chId-secId")
  const [expandedChapters, setExpandedChapters] = useState<Record<number, boolean>>({
    [currentLesson.chapterId]: true,
  });
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    [`${currentLesson.chapterId}-${currentLesson.sectionId}`]: true,
  });

  // Automatically expand the chapter & section of the current lesson
  useEffect(() => {
    setExpandedChapters((prev) => ({
      ...prev,
      [currentLesson.chapterId]: true,
    }));
    setExpandedSections((prev) => ({
      ...prev,
      [`${currentLesson.chapterId}-${currentLesson.sectionId}`]: true,
    }));
  }, [currentLesson.chapterId, currentLesson.sectionId]);

  const toggleChapter = (chapterId: number) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  const toggleSection = (chapterId: number, sectionId: number) => {
    const key = `${chapterId}-${sectionId}`;
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const totalSections = chapters.reduce((acc, ch) => acc + ch.sections.length, 0);
  const totalLessons = chapters.reduce((acc, ch) => acc + ch.totalLessons, 0);

  const content = (
    <div className="h-full flex flex-col bg-white border-r border-slate-200">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-slate-200 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-bold text-slate-800">全単元カリキュラム</h2>
          <p className="text-xs text-slate-500">
            全{chapters.length}章・{totalSections}節 · 計{totalLessons}時間分
          </p>
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
                className="w-full px-3 py-2.5 flex items-center justify-between text-left hover:bg-slate-100/80 transition min-h-[44px]"
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
                      {chapter.sections.length}節 · {completedInChapter} / {chapter.totalLessons} 時間クリア
                    </span>
                  </div>
                </div>

                {isChapterComplete && (
                  <span className="shrink-0 text-xs text-emerald-700 font-bold">
                    完了
                  </span>
                )}
              </button>

              {/* Sections within Chapter */}
              {isExpanded && (
                <div className="bg-white border-t border-slate-200 divide-y divide-slate-200/80">
                  {chapter.sections.map((section) => {
                    const secKey = `${chapter.id}-${section.id}`;
                    const isSecExpanded = !!expandedSections[secKey];
                    const completedInSection = section.lessons.filter((l) =>
                      completedLessonIds.has(l.id)
                    ).length;

                    return (
                      <div key={secKey}>
                        {/* Section Header Trigger */}
                        <button
                          onClick={() => toggleSection(chapter.id, section.id)}
                          className="w-full px-3 py-2 bg-slate-50/80 hover:bg-slate-100/80 flex items-center justify-between text-left transition min-h-[40px]"
                        >
                          <div className="flex items-center gap-1.5 min-w-0 pr-2">
                            {isSecExpanded ? (
                              <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            ) : (
                              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            )}
                            <span className="text-[11px] font-bold text-slate-700 truncate">
                              {section.title}
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-500 shrink-0">
                            {completedInSection}/{section.lessons.length}時間
                          </span>
                        </button>

                        {/* Lesson Items inside Section */}
                        {isSecExpanded && (
                          <div className="divide-y divide-slate-100">
                            {section.lessons.map((lesson) => {
                              const isSelected = currentLesson.id === lesson.id;
                              const isCompleted = completedLessonIds.has(lesson.id);

                              return (
                                <button
                                  key={lesson.id}
                                  onClick={() => {
                                    onSelectLesson(lesson);
                                    onCloseMobile();
                                  }}
                                  className={`w-full px-3 py-2.5 flex items-start gap-2.5 text-left text-xs transition min-h-[44px] ${
                                    isSelected
                                      ? 'bg-sky-50 text-sky-900 font-bold border-l-4 border-sky-500 pl-2'
                                      : 'text-slate-700 hover:bg-slate-50 pl-4'
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
                                    <span className="text-[10px] text-slate-500 font-medium block">
                                      第{lesson.lessonNumber}時
                                    </span>
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
