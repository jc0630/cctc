import React from 'react';
import { Language, MilestoneItem } from '../../types';

interface MilestoneTimelineProps {
  items: MilestoneItem[];
  language: Language;
}

// Milestones rendered as the homepage's own stat-card recipe (see
// AboutSection.tsx's 57+/2613/129萬/3% cards: bordered white card, big bold
// number, small label below) rather than a bespoke dot-and-line timeline —
// so this reads as the same design system, not an invented motif.
export const MilestoneTimeline: React.FC<MilestoneTimelineProps> = ({ items, language }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white hover:bg-[var(--color-blue-100)] border border-slate-200 hover:border-[var(--color-cta)] p-3 sm:p-4 rounded-[var(--radius-card)] flex flex-col items-center text-center transition-all duration-300 layer-shadow-soft hover:shadow-lg hover:-translate-y-1 cursor-pointer group"
        >
          <span className="text-2xl sm:text-3xl lg:text-4xl text-[var(--color-cta)] font-extrabold mb-1 sm:mb-2 tracking-tight group-hover:text-[var(--color-cta-hover)] transition-colors duration-300">
            {item.year}
          </span>
          <span className="text-xs sm:text-sm text-[var(--color-text-body)] font-bold leading-tight">
            {language === 'zh' ? item.labelZh : item.labelEn}
          </span>
        </div>
      ))}
    </div>
  );
};
