import React, { useRef, useState, useLayoutEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HorizontalCarouselProps {
  items: React.ReactNode[];
  ariaLabelPrefix?: string;
}

/**
 * Shared scroll-snap carousel: shows 3 items per view on desktop, 2 on
 * tablet, 1 on mobile. Renders dot indicators + prev/next controls with a
 * subtle pulsing hint on the "next" arrow to signal it's swipeable.
 */
export const HorizontalCarousel: React.FC<HorizontalCarouselProps> = ({
  items,
  ariaLabelPrefix = 'Item',
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = items.length;

  // Guard against the browser restoring a stale horizontal scroll offset on reload
  useLayoutEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
    setActiveIndex(0);
  }, []);

  const scrollToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(index, total - 1));
    setActiveIndex(clamped);
    const container = scrollRef.current;
    const card = container?.children[clamped] as HTMLElement | undefined;
    if (container && card) {
      container.scrollTo({ left: card.offsetLeft - container.offsetLeft, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    let closestIdx = 0;
    let closestDist = Infinity;
    Array.from(container.children).forEach((child, idx) => {
      const dist = Math.abs((child as HTMLElement).offsetLeft - container.offsetLeft - container.scrollLeft);
      if (dist < closestDist) {
        closestDist = dist;
        closestIdx = idx;
      }
    });
    setActiveIndex(closestIdx);
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto gap-5 sm:gap-6 pb-2 snap-x snap-mandatory no-scrollbar scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="snap-start shrink-0 w-[86%] sm:w-[70%] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Controls: dot indicators + prev/next, with an animated swipe hint */}
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              aria-label={`${ariaLabelPrefix} ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                idx === activeIndex ? 'w-6 bg-[var(--color-primary)]' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label={`${ariaLabelPrefix} previous`}
            className="w-11 h-11 rounded-full border border-slate-300 bg-white text-slate-600 disabled:opacity-40 flex items-center justify-center transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={activeIndex === total - 1}
            aria-label={`${ariaLabelPrefix} next`}
            className="w-11 h-11 rounded-full border border-slate-300 bg-white text-slate-600 disabled:opacity-40 flex items-center justify-center transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] cursor-pointer"
          >
            <ChevronRight className={`w-4 h-4 ${activeIndex < total - 1 ? 'animate-swipe-hint' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
};
