import React, { useId } from 'react';
import { motion } from 'motion/react';

interface Tab {
  id: string;
  label: string;
}

interface TabPillsProps {
  tabs: Tab[];
  activeId: string;
  onChange: (id: string) => void;
  /** Pill size — 'lg' for a more prominent standalone tab bar (e.g. the
   * Dashboard's top-level 治理/社會/環境 switch, once its own section title was
   * removed and the pills became the section's main heading). Defaults to
   * 'md'. */
  size?: 'md' | 'lg';
  /** Horizontal alignment of the pill group. Defaults to 'start' (left-
   * aligned under its section title). */
  align?: 'start' | 'center';
}

// Shared segmented-control tab bar — one continuous outlined capsule (no
// dividers between segments) with a brand-blue pill that glides to the
// active segment (shared-layout animation) instead of just swapping colors,
// for a more tactile feel on click. `useId()` keeps each TabPills instance's
// sliding indicator scoped to itself, since several render on the page at
// once (highlights/dashboard/strategy tabs). Left-aligned under its section
// title rather than centered; horizontally scrollable as one unit on mobile
// when labels don't fit ("手機版頁籤可橫向滑動").
export const TabPills: React.FC<TabPillsProps> = ({ tabs, activeId, onChange, size = 'md', align = 'start' }) => {
  const layoutId = useId();
  const sizeClasses =
    size === 'lg' ? 'px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg' : 'px-4 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base';

  return (
    <div className="w-full overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
      {/* `mx-auto` on the capsule itself (not `flex justify-center` on this
          wrapper) so centering degrades gracefully when the pills overflow
          the viewport on mobile: margin:auto just resolves to 0 once the
          element is wider than its container, leaving it flush left and
          fully reachable by the wrapper's horizontal scroll — centering via
          flex justify-content instead traps the start-side overflow outside
          the scrollable range ("卡到 tab，沒辦法左右滑"). */}
      <div className={`inline-flex rounded-full border border-[var(--color-blue-300)] bg-white ${align === 'center' ? 'mx-auto' : ''}`}>
        {tabs.map((tab) => {
          const active = tab.id === activeId;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`relative z-0 shrink-0 whitespace-nowrap ${sizeClasses} font-bold cursor-pointer transition-colors duration-300 ${
                active ? 'text-white' : 'text-[var(--color-cta)] hover:text-[var(--color-cta-hover)]'
              }`}
            >
              {active && (
                <motion.span
                  layoutId={`${layoutId}-active`}
                  className="absolute -top-[2px] -bottom-[2px] left-0 right-0 -z-10 rounded-full bg-[var(--color-cta)]"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
