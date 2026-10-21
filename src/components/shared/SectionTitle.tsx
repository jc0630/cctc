import React from 'react';

interface SectionTitleProps {
  /** 'xl' (default): primary section heading (2xl/3xl, tracking-tight) —
   * used for one major section per page. 'lg': secondary sub-heading
   * (lg/xl) — used for a smaller grouping within a section, e.g. the
   * Taichung Depot page's 場地及建築物規模／機具設備／場地圖 sub-blocks. */
  size?: 'lg' | 'xl';
  /** Escape hatch for the handful of call sites that still set their own
   * margin (e.g. SplitSection's title sits directly above body copy with no
   * parent flex gap) rather than relying on a parent `gap-*`. */
  className?: string;
  children: React.ReactNode;
}

// The site's one heading treatment — neutral ink color + orange underline
// (see .section-title in index.css) — was being re-typed at every call site
// as the same long className string. Centralizing it here means the look
// (and any future adjustment to it) lives in one place.
export const SectionTitle: React.FC<SectionTitleProps> = ({ size = 'xl', className, children }) => (
  <h2
    className={`section-title self-start font-bold ${
      size === 'xl' ? 'text-2xl sm:text-3xl tracking-tight' : 'text-lg sm:text-xl'
    }${className ? ` ${className}` : ''}`}
  >
    {children}
  </h2>
);
