/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { CHAPTERS_DATA, ALL_LESSONS, getLessonById } from './data/lessonsData';
import { Lesson, TextSize } from './types';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { LessonHeader } from './components/LessonHeader';
import { LessonTarget } from './components/LessonTarget';
import { LessonSteps } from './components/LessonSteps';
import { ExpandableCards } from './components/ExpandableCards';
import { QuickQuiz } from './components/QuickQuiz';
import { FooterNav } from './components/FooterNav';
import { SearchModal } from './components/SearchModal';

const STORAGE_KEYS = {
  COMPLETED: 'otasukedict_completed_lessons',
  LAST_LESSON: 'otasukedict_last_lesson_id',
  TEXT_SIZE: 'otasukedict_text_size',
  QUIZ_PASS: 'otasukedict_quiz_pass_ids',
};

export default function App() {
  // 1. Text size state
  const [textSize, setTextSize] = useState<TextSize>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TEXT_SIZE);
      if (saved === 'large' || saved === 'xlarge') return saved;
    } catch {
      // ignore
    }
    return 'normal';
  });

  const handleTextSizeChange = (newSize: TextSize) => {
    setTextSize(newSize);
    try {
      localStorage.setItem(STORAGE_KEYS.TEXT_SIZE, newSize);
    } catch {
      // ignore
    }
  };

  // 2. Current Lesson
  const [currentLessonId, setCurrentLessonId] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LAST_LESSON);
      if (saved && getLessonById(saved)) return saved;
    } catch {
      // ignore
    }
    return 'ch1-1';
  });

  const currentLesson: Lesson = useMemo(() => {
    return getLessonById(currentLessonId) || ALL_LESSONS[0];
  }, [currentLessonId]);

  // Save current lesson id
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.LAST_LESSON, currentLessonId);
    } catch {
      // ignore
    }
  }, [currentLessonId]);

  // 3. Completed Lessons
  const [completedLessonIds, setCompletedLessonIds] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.COMPLETED);
      if (raw) {
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) return new Set(arr);
      }
    } catch {
      // ignore
    }
    return new Set<string>();
  });

  const toggleCompleteCurrent = useCallback(() => {
    setCompletedLessonIds((prev) => {
      const next = new Set(prev);
      if (next.has(currentLesson.id)) {
        next.delete(currentLesson.id);
      } else {
        next.add(currentLesson.id);
      }
      try {
        localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify(Array.from(next)));
      } catch {
        // ignore
      }
      return next;
    });
  }, [currentLesson.id]);

  // 4. Quiz Passed Set
  const [quizPassIds, setQuizPassIds] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.QUIZ_PASS);
      if (raw) {
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) return new Set(arr);
      }
    } catch {
      // ignore
    }
    return new Set<string>();
  });

  const handleQuizPass = useCallback((lessonId: string) => {
    setQuizPassIds((prev) => {
      const next = new Set(prev);
      next.add(lessonId);
      try {
        localStorage.setItem(STORAGE_KEYS.QUIZ_PASS, JSON.stringify(Array.from(next)));
      } catch {
        // ignore
      }
      return next;
    });

    // Also mark lesson as completed if not yet
    setCompletedLessonIds((prev) => {
      if (!prev.has(lessonId)) {
        const next = new Set(prev);
        next.add(lessonId);
        try {
          localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify(Array.from(next)));
        } catch {
          // ignore
        }
        return next;
      }
      return prev;
    });
  }, []);

  // 5. Navigation (Prev / Next)
  const currentIndex = useMemo(() => {
    return ALL_LESSONS.findIndex((l) => l.id === currentLesson.id);
  }, [currentLesson.id]);

  const prevLesson = currentIndex > 0 ? ALL_LESSONS[currentIndex - 1] : undefined;
  const nextLesson = currentIndex < ALL_LESSONS.length - 1 ? ALL_LESSONS[currentIndex + 1] : undefined;

  const navigateToLesson = (lesson: Lesson) => {
    setCurrentLessonId(lesson.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 6. UI Controls
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = useState<boolean>(false);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.key === '/') {
        e.preventDefault();
        setIsSearchOpen(true);
      } else if (e.key === 'ArrowRight' && nextLesson) {
        navigateToLesson(nextLesson);
      } else if (e.key === 'ArrowLeft' && prevLesson) {
        navigateToLesson(prevLesson);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextLesson, prevLesson]);

  // Compute text-size scaling class
  const textSizeClass = useMemo(() => {
    switch (textSize) {
      case 'large':
        return 'text-[17px] leading-relaxed';
      case 'xlarge':
        return 'text-[19px] leading-loose';
      default:
        return 'text-[15px] leading-normal';
    }
  }, [textSize]);

  const isCurrentCompleted = completedLessonIds.has(currentLesson.id);

  return (
    <div className={`min-h-screen bg-[#F8FAFC] flex flex-col text-slate-800 ${textSizeClass}`}>
      {/* 1. Header with search, text-size toggle, and total progress */}
      <Header
        completedCount={completedLessonIds.size}
        totalCount={ALL_LESSONS.length}
        textSize={textSize}
        onTextSizeChange={handleTextSizeChange}
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleSidebar={() => setIsSidebarOpenMobile((v) => !v)}
      />

      {/* Main Container Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex">
        {/* 2. Sidebar with chapter accordions and lesson links */}
        <Sidebar
          chapters={CHAPTERS_DATA}
          currentLesson={currentLesson}
          onSelectLesson={navigateToLesson}
          completedLessonIds={completedLessonIds}
          isOpenMobile={isSidebarOpenMobile}
          onCloseMobile={() => setIsSidebarOpenMobile(false)}
        />

        {/* 3. Main Lesson Panel: 1 Screen = 1 Lesson */}
        <main className="flex-1 min-w-0 p-3 sm:p-6 lg:p-8 max-w-4xl mx-auto">
          {/* Section 1: 授業ヘッダー（現在位置 & クリアボタン） */}
          <LessonHeader
            lesson={currentLesson}
            isCompleted={isCurrentCompleted}
            onToggleComplete={toggleCompleteCurrent}
          />

          {/* Section 2: 本時のめあて（1行完結） */}
          <LessonTarget target={currentLesson.target} />

          {/* Section 3: これだけ覚える！解き方 2ステップ（KaTeX数式 & ミニシミュレーター） */}
          <LessonSteps lesson={currentLesson} />

          {/* Section 4: ワンタップ開閉カード（公式の型 📐 & うっかりミス注意！ ⚠️） */}
          <ExpandableCards
            formulaModel={currentLesson.formulaModel}
            cautionMistake={currentLesson.cautionMistake}
          />

          {/* Section 5: この時間の確認クイズ（2択・1問だけ） */}
          <QuickQuiz
            quiz={currentLesson.quiz}
            lessonId={currentLesson.id}
            onQuizPass={handleQuizPass}
            isCompleted={isCurrentCompleted}
          />

          {/* Section 6: 時間送りナビゲーション（前の時間へ・次の時間へ） */}
          <FooterNav
            prevLesson={prevLesson}
            nextLesson={nextLesson}
            onNavigate={navigateToLesson}
          />
        </main>
      </div>

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectLesson={navigateToLesson}
      />
    </div>
  );
}
