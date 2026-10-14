import React from 'react';
import { ArrowRight, Leaf, Calendar } from 'lucide-react';
import { Language } from '../types';

interface AboutSectionProps {
  language: Language;
  onExploreMore: () => void;
}

/* Container Geometry Design System — small line-art icons built from the
   container's own physical vocabulary (corrugated panel, stacking yard,
   ISO corner-casting) instead of generic shipping iconography like anchors,
   waves, globes or compasses. */
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
      className="relative w-full bg-white py-[25px] sm:py-[40px] lg:py-[50px]"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Heading + Copy only — CTA moves to its own grid item
              below so mobile reads title → body → data → CTA; on desktop the
              12-col grid (5 + 7) wraps the CTA to row 2 col 1-5, landing it
              right back under this text column, same spot as before. */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <h2 className="section-title text-3xl sm:text-4xl font-bold tracking-tight">
                {language === 'zh' ? '關於中櫃' : 'About Us'}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[var(--color-text-body)] leading-relaxed">
              {language === 'zh'
                ? '中國貨櫃運輸股份有限公司（中櫃）創立於西元1969年，為臺灣首家股票上市貨櫃集散站業者，服務據點涵蓋五堵、基隆、臺中及高雄，提供專業港埠物流服務。'
                : 'China Container Terminal Corporation (CCTC), founded in 1969, is Taiwan\'s first publicly listed container terminal and depot operator, with locations spanning Wudu, Keelung, Taichung, and Kaohsiung, delivering professional port logistics services.'}
            </p>
          </div>

          {/* Right Column: 4 Key Data Cards — regrouped as Listed Company /
              Annual Revenue / Annual Throughput / Carbon Metrics, 2x2 —
              capped width so they read as a compact companion to the text,
              not an oversized block */}
          <div className="lg:col-span-7 lg:row-span-2 lg:self-stretch">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:h-full lg:auto-rows-fr">
              {/* Stat 1: Years in Operation — top-left */}
              <div className="bg-white border border-slate-200 hover:border-[var(--color-cta)] p-3 sm:p-4 rounded-[var(--radius-card)] flex flex-col items-center text-center transition-all duration-300 layer-shadow-soft group cursor-pointer">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[var(--color-blue-100)] text-[var(--color-cta)] flex items-center justify-center mb-1.5 sm:mb-2 group-hover:bg-[var(--color-cta)] group-hover:text-white transition-colors duration-300">
                  <Calendar className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-[var(--color-cta)] font-extrabold mb-1 sm:mb-2 tracking-tight group-hover:text-[var(--color-cta-hover)] transition-colors duration-300">
                  57<span className="text-[var(--color-cta)] font-bold">+</span>
                </span>
                <span className="text-xs sm:text-sm text-[var(--color-text-body)] font-bold leading-tight">
                  {language === 'zh' ? '公司成立年數' : 'Years in Operation'}
                </span>
              </div>

              {/* Stat 2: Listed Company — stock code — top-right */}
              <div className="bg-white border border-slate-200 hover:border-[var(--color-cta)] p-3 sm:p-4 rounded-[var(--radius-card)] flex flex-col items-center text-center transition-all duration-300 layer-shadow-soft group cursor-pointer">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[var(--color-blue-100)] text-[var(--color-cta)] flex items-center justify-center mb-1.5 sm:mb-2 group-hover:bg-[var(--color-cta)] group-hover:text-white transition-colors duration-300">
                  <CornerCastingIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-[var(--color-cta)] font-extrabold mb-1 sm:mb-2 tracking-tight group-hover:text-[var(--color-cta-hover)] transition-colors duration-300">
                  2613
                </span>
                <span className="text-xs sm:text-sm text-[var(--color-text-body)] font-bold leading-tight">
                  {language === 'zh' ? '公司上市代號' : 'TWSE Listed Co.'}
                </span>
              </div>

              {/* Stat 3: Annual Throughput */}
              <div className="bg-white border border-slate-200 hover:border-[var(--color-cta)] p-3 sm:p-4 rounded-[var(--radius-card)] flex flex-col items-center text-center transition-all duration-300 layer-shadow-soft group cursor-pointer">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[var(--color-blue-100)] text-[var(--color-cta)] flex items-center justify-center mb-1.5 sm:mb-2 group-hover:bg-[var(--color-cta)] group-hover:text-white transition-colors duration-300">
                  <StackYardIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-[var(--color-cta)] font-extrabold mb-1 sm:mb-2 tracking-tight group-hover:text-[var(--color-cta-hover)] transition-colors duration-300">
                  {language === 'zh' ? (
                    <>150<span className="text-[var(--color-cta)] font-bold">萬</span></>
                  ) : (
                    <>1.5<span className="text-[var(--color-cta)] font-bold">M</span></>
                  )}
                </span>
                <span className="text-xs sm:text-sm text-[var(--color-text-body)] font-bold leading-tight">
                  {language === 'zh' ? '年度前線總TEU數' : 'TEU Annual Throughput'}
                </span>
              </div>

              {/* Stat 4: Carbon Metrics */}
              <div className="bg-white border border-slate-200 hover:border-[var(--color-cta)] p-3 sm:p-4 rounded-[var(--radius-card)] flex flex-col items-center text-center transition-all duration-300 layer-shadow-soft group cursor-pointer">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[var(--color-blue-100)] text-[var(--color-cta)] flex items-center justify-center mb-1.5 sm:mb-2 group-hover:bg-[var(--color-cta)] group-hover:text-white transition-colors duration-300">
                  <Leaf className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-[var(--color-cta)] font-extrabold mb-1 sm:mb-2 tracking-tight group-hover:text-[var(--color-cta-hover)] transition-colors duration-300">
                  3<span className="text-[var(--color-cta)] font-bold">%</span>
                </span>
                <span className="text-xs sm:text-sm text-[var(--color-text-body)] font-bold leading-tight">
                  {language === 'zh' ? '預估碳排放年減目標' : 'Est. Annual Carbon Reduction Target'}
                </span>
              </div>
            </div>
          </div>

          {/* CTA — see note above: this grid item's own col-span-5 is what
              makes it land directly under the text column on desktop. */}
          <div className="lg:col-span-5 justify-self-end lg:justify-self-auto">
            <button
              id="about-cta-link"
              onClick={onExploreMore}
              className="btn-explore group"
            >
              <span>{language === 'zh' ? '了解更多' : 'Explore More'}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
