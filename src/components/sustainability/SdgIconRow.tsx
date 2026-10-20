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
    size === 'xs' ? 'w-11 h-11 sm:w-9 sm:h-9' : size === 'sm' ? 'w-10 h-10 sm:w-12 sm:h-12' : 'w-12 h-12 sm:w-16 sm:h-16';
  const gap = size === 'xs' ? 'gap-2.5 sm:gap-2' : 'gap-2 sm:gap-3';
  // 'xs' caps the row width on mobile so all 9 icons wrap into a clean 5+4
  // two-line layout at a readable size, instead of being squeezed onto one
  // line (desktop has enough banner width to keep them on one line).
  const maxWidth = size === 'xs' ? 'max-w-[300px] sm:max-w-none' : '';
  const justify = align === 'start' ? 'justify-start' : 'justify-center';

  return (
    <div className={`flex flex-wrap items-center ${justify} ${gap} ${maxWidth}`}>
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
