import React from 'react';
import { BookOpen, Search, Sparkles, CheckCircle2, Menu } from 'lucide-react';
import { TextSize } from '../types';

interface HeaderProps {
  completedCount: number;
  totalCount: number;
  textSize: TextSize;
  onTextSizeChange: (size: TextSize) => void;
  onOpenSearch: () => void;
  onToggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  completedCount,
  totalCount,
  textSize,
  onTextSizeChange,
  onOpenSearch,
  onToggleSidebar,
}) => {
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Mobile Menu Toggle & Brand Name */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onToggleSidebar}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 active:scale-95 transition"
            aria-label="単元一覧メニューを開く"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-500 text-white flex items-center justify-center shadow-xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-base sm:text-lg tracking-tight text-slate-800 block leading-tight">
                中1数学のおたすけ辞書
              </span>
              <span className="text-[11px] text-slate-500 hidden sm:block">
                1時間1画面 · スモールステップ学習
              </span>
            </div>
          </div>
        </div>

        {/* Center: Search trigger */}
        <div className="flex-1 max-w-xs sm:max-w-sm mx-2">
          <button
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between px-3 py-2 text-xs sm:text-sm bg-slate-100 hover:bg-slate-200/80 text-slate-500 rounded-lg border border-slate-200 transition group"
          >
            <div className="flex items-center gap-2 truncate">
              <Search className="w-4 h-4 text-slate-400 group-hover:text-slate-600 shrink-0" />
              <span className="truncate">単元・用語を検索 (移項, 比例...)</span>
            </div>
            <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-white border border-slate-200 rounded">
              /
            </kbd>
          </button>
        </div>

        {/* Right: Text Size Switcher & Overall Progress */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Text Size Switcher */}
          <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs">
            <button
              onClick={() => onTextSizeChange('normal')}
              className={`px-2 py-1 rounded font-medium transition ${
                textSize === 'normal'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="文字サイズ：標準"
            >
              標準
            </button>
            <button
              onClick={() => onTextSizeChange('large')}
              className={`px-2 py-1 rounded font-medium transition ${
                textSize === 'large'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="文字サイズ：大"
            >
              大
            </button>
            <button
              onClick={() => onTextSizeChange('xlarge')}
              className={`px-2 py-1 rounded font-medium transition ${
                textSize === 'xlarge'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="文字サイズ：特大"
            >
              特大
            </button>
          </div>

          {/* Progress Tracker */}
          <div className="hidden lg:flex items-center gap-2 pl-2 border-l border-slate-200">
            <div className="text-right">
              <div className="flex items-center gap-1 justify-end text-xs font-bold text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>{completedCount} / {totalCount} 時間クリア</span>
              </div>
              <div className="w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden mt-1">
                <div
                  className="h-full bg-emerald-500 transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
