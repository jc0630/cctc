import React from 'react';
import { Package, Ship, FileDown, Bot, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { ONLINE_SERVICES } from '../data/content';

interface OnlineServicesProps {
  language: Language;
  onSelectService: (serviceId: string) => void;
}

// Same panel treatment as the ESG section (light tint + card style) for a
// consistent look, but a different, calmer background photo so the two
// panels don't read as duplicates.
const SERVICES_IMAGE = '/hero/hero-1.jpg';

export const OnlineServices: React.FC<OnlineServicesProps> = ({
  language,
  onSelectService
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PackageCheck':
        return <Package className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Ship':
        return <Ship className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'FileDown':
        return <FileDown className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Bot':
        return <Bot className="w-5 h-5 sm:w-6 sm:h-6" />;
      default:
        return <Package className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  return (
    <section
      id="services"
      className="w-full py-8 sm:py-14 lg:py-[80px] bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-blue-300)]/50 layer-shadow-raised py-6 sm:py-8 lg:py-10 px-5 sm:px-10 lg:px-14">
          {/* Background photo + light frosted wash, contained within the rounded frame */}
          <div className="absolute inset-0 z-0">
            <img
              src={SERVICES_IMAGE}
              alt=""
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: 'rgba(242, 250, 244, 0.92)' }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
            {/* Intro text only — CTA becomes its own grid item below so
                mobile reads title → body → data (service buttons) → CTA; on
                desktop the 12-col grid (5 + 7) wraps the CTA to row 2
                col 1-5, same spot as before. */}
            <div className="lg:col-span-5">
              <h2 className="section-title text-3xl sm:text-4xl font-bold tracking-tight mb-2 sm:mb-3">
                {language === 'zh' ? '服務專區' : 'Service Center'}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed mb-3 sm:mb-5 max-w-md">
                {language === 'zh'
                  ? '櫃動查詢、船席動態、LINE BOT 與表單下載，一站掌握中櫃營運動態。'
                  : 'Container tracking, berth status, LINE Bot and document downloads — all in one place.'}
              </p>
            </div>

            {/* Service buttons ("data" step): bottom block on mobile, right column on desktop */}
            <div className="lg:col-span-7 lg:row-span-2 lg:self-stretch">
              <div className="grid grid-cols-2 gap-2 sm:gap-5 lg:h-full lg:auto-rows-fr">
                {ONLINE_SERVICES.map((service) => (
                  <button
                    key={service.id}
                    id={`service-card-${service.id}`}
                    onClick={() => onSelectService(service.id)}
                    className="flex items-center gap-2 sm:gap-4 bg-white/70 hover:bg-white border border-slate-200 hover:border-[var(--color-green-600)]/50 rounded-[var(--radius-card)] px-2 py-3 sm:p-5 transition-all duration-300 group text-left cursor-pointer"
                  >
                    <div
                      className="esg-icon-circle w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 ring-1 ring-slate-200 group-hover:ring-0 group-hover:scale-105 transition-all duration-300"
                      style={{ '--icon-accent': service.accentColor } as React.CSSProperties}
                    >
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-[var(--color-ink)] font-bold text-sm sm:text-lg leading-snug">
                      {language === 'zh' ? service.titleZh : service.titleEn}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA — this grid item's own col-span-5 is what lands it
                directly under the text column on desktop (see note above). */}
            <div className="lg:col-span-5 justify-self-end lg:justify-self-auto">
              <button
                onClick={() => onSelectService(ONLINE_SERVICES[0].id)}
                className="btn-explore group"
              >
                <span>{language === 'zh' ? '了解更多' : 'Explore More'}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
