import React from 'react';
import { Language, MilestoneItem } from '../../types';
import { StatTile } from '../shared/StatTile';

interface MilestoneTimelineProps {
  items: MilestoneItem[];
  language: Language;
}

// Milestones rendered as the homepage's own stat-card recipe (see
// AboutSection.tsx's 57+/2613/129萬/3% cards: bordered white card, big bold
// number, small label below) via the shared StatTile, with its "feels
// clickable" lift hover — so this reads as the same design system, not an
// invented motif. Stays a 2x2 grid at every breakpoint (not 1x4 at desktop)
// since it now sits beside body text in a narrower column, same as
// AboutSection's own stat grid in that same layout position.
export const MilestoneTimeline: React.FC<MilestoneTimelineProps> = ({ items, language }) => {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
      {items.map((item, i) => (
        <StatTile key={i} value={item.year} label={language === 'zh' ? item.labelZh : item.labelEn} size="lg" hoverLift />
      ))}
    </div>
  );
};
