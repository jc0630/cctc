import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface AboutSectionProps {
  language: Language;
  onExploreMore: () => void;
}

/* Container Geometry Design System — small line-art icons built from the
   container's own physical vocabulary (corrugated panel, stacking yard,
   distribution network, ISO corner-casting) instead of generic shipping
   iconography like anchors, waves, globes or compasses. */
const ContainerUnitIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="6" width="18" height="12" rx="1.5" />
    <line x1="8" y1="6" x2="8" y2="18" />
    <line x1="13" y1="6" x2="13" y2="18" />
    <line x1="18" y1="6" x2="18" y2="18" />
  </svg>
);

const StackYardIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="13" width="9" height="6" rx="1" />
    <rect x="13" y="13" width="9" height="6" rx="1" />
    <rect x="7" y="5" width="9" height="6" rx="1" />
  </svg>
);

const NetworkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="2" />
    <circle cx="4" cy="5" r="1.75" />
    <circle cx="20" cy="5" r="1.75" />
    <circle cx="4" cy="19" r="1.75" />
    <circle cx="20" cy="19" r="1.75" />
    <line x1="12" y1="12" x2="4" y2="5" />
    <line x1="12" y1="12" x2="20" y2="5" />
    <line x1="12" y1="12" x2="4" y2="19" />
    <line x1="12" y1="12" x2="20" y2="19" />
  </svg>
);

const CornerCastingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <ellipse cx="12" cy="12" rx="4.5" ry="3" />
  </svg>
);

export const AboutSection: React.FC<AboutSectionProps> = ({
  language,
  onExploreMore
}) => {
  return (
    <section
      id="about"
      className="relative w-full bg-white py-[1.1rem] sm:py-[1.375rem]"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading + Copy + CTA */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <h2 className="section-title text-3xl sm:text-4xl font-bold tracking-tight">
                {language === 'zh' ? '關於中櫃' : 'About Us'}
              </h2>
              <span className="section-title-rule" />
            </div>

            <p className="text-sm sm:text-base text-[var(--color-text-body)] leading-relaxed">
              {language === 'zh'
                ? '中櫃股份有限公司成立於民國58年，為臺灣貨櫃集散站經營業的先驅。多年來秉持卓越、誠信與創新的經營理念，持續提升服務品質與營運效能，並於民國84年正式掛牌上市。憑藉完善的全臺營運據點、國際管理系統認證及專業團隊，中櫃致力提供安全、便捷、高效率的貨櫃倉儲與物流服務，與客戶攜手邁向永續發展。'
                : 'China Container Terminal Corporation was founded in 1969, pioneering Taiwan\'s container terminal and depot industry. Guided by excellence, integrity, and innovation, we have continuously enhanced service quality and operational efficiency, and were officially listed on the Taiwan Stock Exchange in 1995. With comprehensive terminal locations across Taiwan, international management system certifications, and a professional team, CCTC is dedicated to providing safe, convenient, and efficient container storage and logistics services, growing sustainably together with our customers.'}
            </p>

            <div className="pt-2">
              <button
                id="about-cta-link"
                onClick={onExploreMore}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-blue-900)] text-white text-sm sm:text-base font-bold px-7 py-3.5 rounded-[var(--radius-pill)] transition-colors duration-200 cursor-pointer group layer-shadow-soft"
              >
                <span>{language === 'zh' ? '探索更多' : 'Discover More'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Key Statistics Cards, 2x2 — capped width so they
              read as a compact companion to the text, not an oversized block */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {/* Stat 1: 56+ Years */}
              <div className="bg-white border border-slate-200 hover:border-[var(--color-blue-300)] p-3 sm:p-4 rounded-[var(--radius-card)] flex flex-col items-center text-center transition-all duration-300 layer-shadow-soft group cursor-pointer">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[var(--color-blue-100)] text-[var(--color-blue-700)] flex items-center justify-center mb-1.5 sm:mb-2 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                  <ContainerUnitIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-[var(--color-blue-800)] font-extrabold mb-1 sm:mb-2 tracking-tight group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  56<span className="text-[var(--color-orange)] font-bold">+</span>
                </span>
                <span className="text-xs sm:text-sm text-[var(--color-text-body)] font-bold leading-tight">
                  {language === 'zh' ? '年深耕經驗' : 'Years Experience'}
                </span>
              </div>

              {/* Stat 2: 4 Major Hubs */}
              <div className="bg-white border border-slate-200 hover:border-[var(--color-blue-300)] p-3 sm:p-4 rounded-[var(--radius-card)] flex flex-col items-center text-center transition-all duration-300 layer-shadow-soft group cursor-pointer">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[var(--color-blue-100)] text-[var(--color-blue-700)] flex items-center justify-center mb-1.5 sm:mb-2 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                  <StackYardIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-[var(--color-blue-800)] font-extrabold mb-1 sm:mb-2 tracking-tight group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  4
                </span>
                <span className="text-xs sm:text-sm text-[var(--color-text-body)] font-bold leading-tight">
                  {language === 'zh' ? '大營運據點' : 'Major Terminals'}
                </span>
              </div>

              {/* Stat 3: 2613 Listed Stock — same blue treatment as the other 3 cards */}
              <div className="bg-white border border-slate-200 hover:border-[var(--color-blue-300)] p-3 sm:p-4 rounded-[var(--radius-card)] flex flex-col items-center text-center transition-all duration-300 layer-shadow-soft group cursor-pointer">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[var(--color-blue-100)] text-[var(--color-blue-700)] flex items-center justify-center mb-1.5 sm:mb-2 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                  <NetworkIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-[var(--color-blue-800)] font-extrabold mb-1 sm:mb-2 tracking-tight font-mono group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  2613
                </span>
                <span className="text-xs sm:text-sm text-[var(--color-text-body)] font-bold leading-tight">
                  {language === 'zh' ? '上市公司代號' : 'TWSE Stock Code'}
                </span>
              </div>

              {/* Stat 4: ISO Certified */}
              <div className="bg-white border border-slate-200 hover:border-[var(--color-blue-300)] p-3 sm:p-4 rounded-[var(--radius-card)] flex flex-col items-center text-center transition-all duration-300 layer-shadow-soft group cursor-pointer">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[var(--color-blue-100)] text-[var(--color-blue-700)] flex items-center justify-center mb-1.5 sm:mb-2 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                  <CornerCastingIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-[var(--color-blue-800)] font-extrabold mb-1 sm:mb-2 tracking-tight font-mono group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  ISO
                </span>
                <span className="text-xs sm:text-sm text-[var(--color-text-body)] font-bold leading-tight">
                  {language === 'zh' ? '國際管理認證' : 'ISO Certified'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
