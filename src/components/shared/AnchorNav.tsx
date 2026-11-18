import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

interface AnchorNavItem {
  id: string;
  label: string;
}

interface AnchorNavProps {
  items: AnchorNavItem[];
}

// In-page section jump bar for a long single-scroll page (see the
// Sustainability Strategy page) — one pill per section, horizontally
// scrollable as a unit on mobile when they don't fit. Deliberately styled
// distinct from TabPills (underline instead of a filled capsule): these
// jump to a point on the SAME page rather than switching between mutually
// exclusive tab content.
export const AnchorNav: React.FC<AnchorNavProps> = ({ items }) => {
  const [activeId, setActiveId] = useState(items[0]?.id);

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
    <nav aria-label="頁面章節" className="w-full bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar">
        <ul className="flex w-max mx-auto">
          {items.map((item) => {
            const active = item.id === activeId;
            return (
              <li key={item.id} className="shrink-0">
                <button
                  type="button"
                  aria-current={active ? 'location' : undefined}
                  onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className={`inline-flex items-center gap-1.5 px-4 sm:px-6 py-3.5 sm:py-4 -mb-px whitespace-nowrap text-sm sm:text-base font-bold border-b-[3px] cursor-pointer transition-colors duration-200 ${
                    active ? 'border-[var(--color-cta)] text-[var(--color-cta)]' : 'border-transparent text-[var(--color-ink)] hover:text-[var(--color-cta)]'
                  }`}
                >
                  <ArrowDown className="w-3.5 h-3.5 shrink-0" />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
