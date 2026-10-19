import React from 'react';
import { SDG_ICONS } from '../../data/content';

interface SdgIconRowProps {
  nums?: number[];
  size?: 'xs' | 'sm' | 'md';
  align?: 'center' | 'start';
}

// Shared SDGs icon strip — 'xs' sits directly over the page banner, 'sm' is
// used within each strategy tab on sub-page 3 (the subset of SDGs that tab
// maps to), and 'md' is the default standalone size. `align` controls
// horizontal placement of the row itself (e.g. left-aligned under a
// left-aligned body paragraph, rather than always centered).
export const SdgIconRow: React.FC<SdgIconRowProps> = ({ nums, size = 'md', align = 'center' }) => {
  const icons = nums ? SDG_ICONS.filter((icon) => nums.includes(icon.num)) : SDG_ICONS;
  const dimension =
    size === 'xs' ? 'w-6 h-6 sm:w-9 sm:h-9' : size === 'sm' ? 'w-10 h-10 sm:w-12 sm:h-12' : 'w-12 h-12 sm:w-16 sm:h-16';
  // Tighter gap for 'xs' so all 9 icons stay on one line over the banner at
  // mobile widths instead of wrapping and colliding with the banner text.
  const gap = size === 'xs' ? 'gap-1.5 sm:gap-2' : 'gap-2 sm:gap-3';
  const justify = align === 'start' ? 'justify-start' : 'justify-center';

  return (
    <div className={`flex flex-wrap items-center ${justify} ${gap}`}>
      {icons.map((icon) => (
        <img
          key={icon.num}
          src={icon.image}
          alt={`SDG ${icon.num}`}
          className={`${dimension} rounded-[6px] shadow-sm`}
        />
      ))}
    </div>
  );
};
