import React from 'react';
import { Leaf, Users, Scale, FileText, ArrowRight } from 'lucide-react';
import { Language, ESGItem } from '../types';
import { ESG_ITEMS } from '../data/content';

interface ESGSectionProps {
  language: Language;
  onOpenESG: (item: ESGItem) => void;
}

// Drop /public/images/ESG.jpg to replace — falls back to the placeholder below until it exists.
const ESG_IMAGE = '/images/ESG.jpg';
const ESG_IMAGE_FALLBACK =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ2mbsuhYdZ5xBS6ZwFz1RdotaJkirGtl-QuXeFpFtnEb4AlVVNsAo7tCViWXZ8wrI_i2XYmjupXvWbnFnc0ikcifFLKLfLXHeQDJiOTgAQRKYEhSsPWKHkiHXqvAucORztp8uOG9z7LAjIe2DW-y8GwlPcfug_NrGOHEa-rgHpEbBv-WalYQVvOChDhnfCWK11YrKdorTsDvZDhbqQdxQATCZUHuBw8qTp8Aqbhpnc7OnFqPetHzTxHNfiPrO9Q3piLM';

export const ESGSection: React.FC<ESGSectionProps> = ({
  language,
  onOpenESG
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Leaf':
        return <Leaf className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'Users':
        return <Users className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'Scale':
        return <Scale className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'FileText':
        return <FileText className="w-4 h-4 sm:w-5 sm:h-5" />;
      default:
        return <Leaf className="w-4 h-4 sm:w-5 sm:h-5" />;
    }
  };

  return (
    <section
      id="esg"
      className="w-full py-[0.825rem] sm:py-[1.375rem] bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-blue-300)]/50 layer-shadow-raised py-3 sm:py-5 px-5 sm:px-10 lg:px-14">
          {/* Background photo + soft green tint, contained within the rounded frame */}
          <div className="absolute inset-0 z-0">
            <img
              src={ESG_IMAGE}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = ESG_IMAGE_FALLBACK;
              }}
              alt={language === 'zh' ? '企業永續' : 'ESG Sustainability'}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: 'rgba(242, 250, 244, 0.92)' }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
          {/* Left: Intro text + CTA */}
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-2 sm:mb-3 text-[var(--color-green-900)]">
              {language === 'zh' ? '企業永續' : 'ESG Sustainability'}
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-body)] leading-relaxed mb-3 sm:mb-5 max-w-md">
              {language === 'zh'
                ? '以環境保護、社會責任及公司治理為核心，持續提升營運韌性，攜手利害關係人共創永續價值。'
                : 'Centered on environmental protection, social responsibility, and corporate governance, we continuously strengthen operational resilience and create sustainable value together with our stakeholders.'}
            </p>
            <button
              onClick={() => onOpenESG(ESG_ITEMS[0])}
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-green-700)] hover:bg-[var(--color-green-900)] text-white px-6 sm:px-7 py-2.5 sm:py-3.5 rounded-[var(--radius-pill)] text-sm sm:text-base font-bold transition-colors duration-200 cursor-pointer group"
            >
              <span>{language === 'zh' ? '了解更多' : 'Explore More'}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right: 2x2 Icon Button Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-2 sm:gap-5">
              {ESG_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onOpenESG(item)}
                  className="flex items-center gap-2 sm:gap-4 bg-white/70 hover:bg-white border border-slate-200 hover:border-[var(--color-green-600)]/50 rounded-[var(--radius-card)] px-2 py-3 sm:p-5 transition-all duration-300 group text-left cursor-pointer"
                >
                  <div
                    className="esg-icon-circle w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 ring-1 ring-slate-200 group-hover:ring-0 group-hover:scale-105 transition-all duration-300"
                    style={{ '--icon-accent': item.accentColor } as React.CSSProperties}
                  >
                    {getIcon(item.iconName)}
                  </div>
                  <span
                    className={`min-w-0 text-[var(--color-green-900)] font-bold leading-snug ${language === 'zh' ? 'text-sm sm:text-lg whitespace-nowrap' : 'text-xs sm:text-lg break-words'}`}
                  >
                    {language === 'zh' ? item.titleZh : item.titleEn}
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
