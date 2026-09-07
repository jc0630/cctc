import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language, TerminalLocation } from '../types';
import { TERMINAL_LOCATIONS } from '../data/content';
import { HorizontalCarousel } from './HorizontalCarousel';

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
  return (
    <section
      id="operations"
      className="w-full py-12 sm:py-16 bg-white"
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
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-blue-500)] hover:text-[var(--color-primary)] transition-colors duration-200 cursor-pointer group"
          >
            <span>{language === 'zh' ? '查看所有據點' : 'View All'}</span>
            <ArrowRight className="w-4 h-4 text-[var(--color-orange)] transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Horizontal carousel: 3 per view on desktop, 1 on mobile — Image + Title only */}
        <HorizontalCarousel
          ariaLabelPrefix={language === 'zh' ? '據點' : 'Location'}
          items={TERMINAL_LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              id={`location-card-${loc.id}`}
              onClick={() => onSelectLocation(loc)}
              className="h-full group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[var(--radius-card)] aspect-[4/3] bg-slate-100">
                <img
                  src={loc.image}
                  alt={language === 'zh' ? loc.nameZh : loc.nameEn}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-[var(--radius-card)] ring-1 ring-inset ring-black/5 group-hover:ring-2 group-hover:ring-[var(--color-blue-300)] transition-all duration-300" />
              </div>
              <h3 className="mt-4 text-base sm:text-lg font-bold text-[var(--color-blue-800)] group-hover:text-[var(--color-primary)] transition-colors duration-300 leading-snug">
                {language === 'zh' ? loc.nameZh : loc.nameEn}
              </h3>
            </div>
          ))}
        />
      </div>
    </section>
  );
};
