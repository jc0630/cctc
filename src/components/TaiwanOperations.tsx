import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language, TerminalLocation } from '../types';
import { TERMINAL_LOCATIONS } from '../data/content';

interface TaiwanOperationsProps {
  language: Language;
  onSelectLocation: (loc: TerminalLocation) => void;
  onViewAllLocations: () => void;
}

export const TaiwanOperations: React.FC<TaiwanOperationsProps> = ({
  language,
  onSelectLocation,
  onViewAllLocations
}) => {
  const renderCard = (loc: TerminalLocation) => (
    <div
      key={loc.id}
      id={`location-card-${loc.id}`}
      onClick={() => onSelectLocation(loc)}
      className="h-full group cursor-pointer card-framed"
    >
      <div className="relative overflow-hidden rounded-[var(--radius-card)] aspect-[4/3] bg-slate-100">
        <img
          src={loc.image}
          alt={language === 'zh' ? loc.nameZh : loc.nameEn}
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 rounded-[var(--radius-card)] ring-1 ring-inset ring-black/5 group-hover:ring-2 group-hover:ring-[var(--color-blue-300)] transition-all duration-300" />
      </div>
      <h3 className="mt-4 px-1 text-base sm:text-lg font-bold text-[var(--color-blue-800)] group-hover:text-[var(--color-primary)] transition-colors duration-300 leading-snug">
        {language === 'zh' ? loc.nameZh : loc.nameEn}
      </h3>
    </div>
  );

  return (
    <section
      id="operations"
      className="w-full py-[1.1rem] sm:py-[1.375rem] bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="section-title text-3xl sm:text-4xl font-bold tracking-tight">
              {language === 'zh' ? '全台營運據點' : 'Taiwan Operations'}
            </h2>
            <span className="section-title-rule" />
          </div>

          <button
            onClick={onViewAllLocations}
            className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-blue-900)] text-white text-sm sm:text-base font-bold px-7 py-3.5 rounded-[var(--radius-pill)] transition-colors duration-200 cursor-pointer group layer-shadow-soft"
          >
            <span>{language === 'zh' ? '查看所有據點' : 'View All'}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* All 4 locations always shown — 2x2 on mobile/tablet, 4-across on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TERMINAL_LOCATIONS.map(renderCard)}
        </div>
      </div>
    </section>
  );
};
