import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language, TerminalLocation } from '../types';
import { TERMINAL_LOCATIONS } from '../data/content';

interface TaiwanOperationsProps {
  language: Language;
  onViewAllLocations: () => void;
}

export const TaiwanOperations: React.FC<TaiwanOperationsProps> = ({
  language,
  onViewAllLocations
}) => {
  const renderCard = (loc: TerminalLocation) => (
    <div
      key={loc.id}
      id={`location-card-${loc.id}`}
      className="interactive-card interactive-card--accent h-full group rounded-[var(--radius-panel)] border-[var(--color-blue-300)]/60 overflow-hidden bg-white layer-shadow-soft"
    >
      {/* Photo fills the card frame edge-to-edge (no inset matting) so the
          real terminal photo reads as the primary visual, Evergreen-style. */}
      <div className="relative overflow-hidden aspect-[4/3] bg-slate-100">
        <img
          src={loc.image}
          alt={language === 'zh' ? loc.nameZh : loc.nameEn}
          style={{ objectPosition: loc.imagePosition || 'center' }}
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
      <h3 className="px-4 py-3.5 text-lg sm:text-xl font-bold text-center text-[var(--color-blue-800)] group-hover:text-[var(--color-orange-deep)] transition-colors duration-300 leading-snug">
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
              {language === 'zh' ? '營運服務' : 'Operations & Services'}
            </h2>
          </div>

          <button
            onClick={onViewAllLocations}
            className="inline-flex items-center justify-center gap-2 bg-[var(--color-orange)] hover:bg-[var(--color-orange-deep)] text-white text-sm sm:text-base font-bold px-7 py-3.5 rounded-[var(--radius-pill)] transition-colors duration-200 cursor-pointer group layer-shadow-soft"
          >
            <span>{language === 'zh' ? '了解更多' : 'Explore More'}</span>
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
