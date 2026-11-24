import React, { useEffect, useId, useState } from 'react';
import { motion } from 'motion/react';

interface AnchorNavItem {
  id: string;
  label: string;
}

interface AnchorNavProps {
  items: AnchorNavItem[];
}

// In-page section jump bar for a long single-scroll page (see the
// Sustainability Strategy page) — styled identically to TabPills' segmented
// capsule (same classes, same sliding active-pill animation) so every tab-
// like control on the page reads as one consistent pattern, even though
// this one scrolls to a point on the same page rather than switching
// content. Keeps its own scroll listener (TabPills has none) to highlight
// whichever section is currently in view.
export const AnchorNav: React.FC<AnchorNavProps> = ({ items }) => {
  const [activeId, setActiveId] = useState(items[0]?.id);
  const layoutId = useId();

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    // Scrollspy: the active pill is the last section whose top has crossed
    // above the fixed header + this nav's own height (~140px) — i.e. the
    // section currently occupying that band just under both bars.
    const onScroll = () => {
      let current = sections[0]?.id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top - 140 <= 0) {
          current = section.id;
        }
      }
      if (current) setActiveId(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [items]);

  return (
    <nav aria-label="頁面章節" className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <div className="w-full overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 flex">
          <div className="inline-flex rounded-full border border-[var(--color-blue-300)] bg-white mx-auto">
            {items.map((item) => {
              const active = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-current={active ? 'location' : undefined}
                  onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className={`relative z-0 shrink-0 whitespace-nowrap px-4 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base font-bold cursor-pointer transition-colors duration-300 ${
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
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
