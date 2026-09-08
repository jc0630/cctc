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
        return <Leaf className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Scale':
        return <Scale className="w-5 h-5" />;
      case 'FileText':
        return <FileText className="w-5 h-5" />;
      default:
        return <Leaf className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="esg"
      className="w-full py-16 sm:py-24 bg-[var(--color-blue-100)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-blue-300)]/50 layer-shadow-raised py-12 sm:py-16 px-6 sm:px-10 lg:px-14">
          {/* Background photo + soft green tint, contained within the rounded frame */}
          <div className="absolute inset-0 z-0">
            <img
              src={ESG_IMAGE}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = ESG_IMAGE_FALLBACK;
              }}
              alt={language === 'zh' ? 'ESG 永續發展' : 'ESG Sustainability'}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: 'rgba(24, 92, 56, 0.8)' }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left: Intro text + CTA */}
          <div className="lg:col-span-5 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {language === 'zh' ? 'ESG 永續發展' : 'ESG Sustainability'}
            </h2>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed mb-8 max-w-md">
              {language === 'zh'
                ? '環境、社會、治理，攜手共創永續未來。中櫃致力於打造低碳智慧港埠，與所有利害關係人共好成長。'
                : 'Environment, Social, Governance — building a sustainable future together with smart, low-carbon port operations.'}
            </p>
            <button
              onClick={() => onOpenESG(ESG_ITEMS[0])}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[var(--color-green-700)] px-7 py-3.5 rounded-full text-sm sm:text-base font-bold transition-colors duration-200 cursor-pointer group"
            >
              <span>{language === 'zh' ? '進入 ESG 專區' : 'Visit ESG Hub'}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right: 2x2 Icon Button Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {ESG_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onOpenESG(item)}
                  className="flex items-center gap-3 sm:gap-4 bg-white/15 hover:bg-white/30 border border-white/20 hover:border-white/50 rounded-[var(--radius-card)] p-4 sm:p-5 transition-all duration-300 group backdrop-blur-sm text-left cursor-pointer"
                >
                  <div
                    className="esg-icon-circle w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300"
                    style={{ '--icon-accent': item.accentColor } as React.CSSProperties}
                  >
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-white font-bold text-sm sm:text-base leading-snug">
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
