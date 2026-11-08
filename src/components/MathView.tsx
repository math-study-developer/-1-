import React, { useMemo } from 'react';
import katex from 'katex';

interface MathViewProps {
  math: string;
  display?: boolean;
  className?: string;
}

export const MathView: React.FC<MathViewProps> = ({
  math,
  display = false,
  className = '',
}) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: display,
        throwOnError: false,
        strict: false,
      });
    } catch {
      return math;
    }
  }, [math, display]);

  if (display) {
    return (
      <div
        className={`my-2 py-1.5 px-3 overflow-x-auto text-center font-serif text-slate-800 ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      className={`inline-block mx-0.5 px-1 py-0.5 font-serif text-slate-800 ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
