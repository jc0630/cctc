import React from 'react';

interface StatTileProps {
  icon?: React.ComponentType<{ className?: string }>;
  value: React.ReactNode;
  unit?: React.ReactNode;
  label: React.ReactNode;
  /** 'md' (default): denser grids with many tiles (e.g. Taichung Depot's
   * facility/equipment counts). 'lg': a handful of headline numbers (e.g.
   * Company Profile's milestone years). */
  size?: 'md' | 'lg';
  /** Milestone-style "feels clickable" hover (tinted background + shadow +
   * lift) vs. the plain border/icon-color hover used for static fact grids.
   * Off by default. */
  hoverLift?: boolean;
}

// Icon-chip (optional) + big number + label card — this exact recipe was
// independently re-typed in the homepage's AboutSection, Company Profile's
// MilestoneTimeline, and the Taichung Depot page's facility/equipment/
// capacity grids. Centralized here for the two in-scope inner pages
// (Company Profile, Taichung Depot); the homepage keeps its own copy
// untouched since it wasn't part of this cleanup's scope.
export const StatTile: React.FC<StatTileProps> = ({ icon: Icon, value, unit, label, size = 'md', hoverLift = false }) => (
  <div
    className={`bg-white border border-slate-200 hover:border-[var(--color-cta)] p-3 sm:p-4 rounded-[var(--radius-card)] flex flex-col items-center text-center transition-all duration-300 layer-shadow-soft group${
      hoverLift ? ' hover:bg-[var(--color-blue-100)] hover:shadow-lg hover:-translate-y-1 cursor-pointer' : ''
    }`}
  >
    {Icon && (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[var(--color-blue-100)] text-[var(--color-cta)] flex items-center justify-center mb-1.5 sm:mb-2 group-hover:bg-[var(--color-cta)] group-hover:text-white transition-colors duration-300">
        <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
      </div>
    )}
    <span
      className={`text-[var(--color-cta)] font-extrabold tracking-tight group-hover:text-[var(--color-cta-hover)] transition-colors duration-300 ${
        size === 'lg' ? 'text-2xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2' : 'text-xl sm:text-2xl lg:text-3xl mb-1'
      }`}
    >
      {value}
      {unit && <span className="text-sm sm:text-base font-bold ml-1">{unit}</span>}
    </span>
    <span className="text-xs sm:text-sm text-[var(--color-text-body)] font-bold leading-tight">{label}</span>
  </div>
);
