import React from 'react';
import { Package, Ship, FileDown, MessageCircle, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { ONLINE_SERVICES } from '../data/content';

interface OnlineServicesProps {
  language: Language;
  onSelectService: (serviceId: string) => void;
}

// Reuses one of the existing banner photos as the panel background — mirrors
// the ESG section's photo+tint card, but with a blue mask instead of green
// to read as a distinct "quick actions" zone.
const SERVICES_IMAGE = '/hero/hero-4.jpg';

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
      case 'MessageCircle':
        return <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />;
      default:
        return <Package className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  return (
    <section
      id="services"
      className="w-full py-[0.825rem] sm:py-[1.375rem] bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-blue-300)]/50 layer-shadow-raised py-3 sm:py-5 px-5 sm:px-10 lg:px-14">
          {/* Background photo + blue tint, contained within the rounded frame */}
          <div className="absolute inset-0 z-0">
            <img
              src={SERVICES_IMAGE}
              alt=""
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: 'rgba(2, 132, 199, 0.75)' }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
            {/* Intro text + CTA: top block on mobile, left column on desktop */}
            <div className="lg:col-span-5 text-white">
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-2 sm:mb-3">
                {language === 'zh' ? '快速服務' : 'Quick Services'}
              </h2>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed mb-3 sm:mb-5 max-w-md">
                {language === 'zh'
                  ? '櫃動查詢、船席資訊、即時客服與表單下載，一站掌握中櫃營運動態。'
                  : 'Container tracking, berth schedules, live support and document downloads — all in one place.'}
              </p>
              <button
                onClick={() => onSelectService(ONLINE_SERVICES[0].id)}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[var(--color-blue-800)] px-6 sm:px-7 py-2.5 sm:py-3.5 rounded-[var(--radius-pill)] text-sm sm:text-base font-bold transition-colors duration-200 cursor-pointer group"
              >
                <span>{language === 'zh' ? '進入服務專區' : 'Visit Services'}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Buttons: bottom block on mobile, right column on desktop */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-2.5 sm:gap-5">
                {ONLINE_SERVICES.map((service) => (
                  <button
                    key={service.id}
                    id={`service-card-${service.id}`}
                    onClick={() => onSelectService(service.id)}
                    className="flex items-center gap-2.5 sm:gap-4 bg-white/15 hover:bg-white/30 border border-white/20 hover:border-white/50 rounded-[var(--radius-card)] p-3 sm:p-5 transition-all duration-300 group backdrop-blur-sm text-left cursor-pointer"
                  >
                    <div
                      className="esg-icon-circle w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300"
                      style={{ '--icon-accent': 'var(--color-orange)' } as React.CSSProperties}
                    >
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-white font-bold text-xs sm:text-base leading-snug">
                      {language === 'zh' ? service.titleZh : service.titleEn}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
