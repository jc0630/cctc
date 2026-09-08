import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface AboutSectionProps {
  language: Language;
  onExploreMore: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  language,
  onExploreMore
}) => {
  return (
    <section
      id="about"
      className="relative w-full bg-white py-12 sm:py-16"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Split Layout: Large Typography + Image Frame + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-16">
          {/* Left Column: Heading + CTA */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                {language === 'zh' ? '關於中國貨櫃' : 'About Us'}
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-blue-900)] text-white text-sm sm:text-base font-bold px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer group layer-shadow-soft"
              >
                <span>{language === 'zh' ? '探索更多' : 'Discover More'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[var(--radius-panel)] overflow-hidden border border-slate-200 layer-shadow-raised">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_k6JOnStz85C0sFB4kI38pSEhqrRAAIKnUdRmdbbsynHw1nZqJBzInTGCK3cYluOnWnlk3dqGWYXGyY7gTw9EorEdvahAdGMNPVEpBIZlYfEOSaN3blAXIFl0dY7704gAuMn01nJA92SzIrNo7sZh-xMFATHEvt3hNfIcYnjX1x0UDm7vZ4mZH91nlQLqCVD3HwnjWTW3RQ4CV7_hRxzEx6fc0XApg_KEoLugsc9NmVSc0XrD5PGaPg"
                alt={language === 'zh' ? '中國貨櫃基隆、汐止、台中港全國物流網絡' : 'CCTC Logistics Terminal Network'}
                className="w-full h-56 sm:h-72 md:h-[400px] object-cover transform hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>

        {/* 4 Key Statistics Cards (Thin / Clean / Structured / Premium) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Stat 1: 56+ Years */}
          <div className="bg-white border border-slate-200 hover:border-[var(--color-blue-300)] p-4 sm:p-6 rounded-[var(--radius-card)] flex flex-col items-center text-center transition-all duration-300 layer-shadow-soft group cursor-pointer">
            <span className="text-3xl sm:text-4xl lg:text-5xl text-[var(--color-blue-800)] font-extrabold mb-1 sm:mb-2 tracking-tight group-hover:text-[var(--color-primary)] transition-colors duration-300">
              56<span className="text-[var(--color-orange)] font-bold">+</span>
            </span>
            <span className="text-xs sm:text-sm lg:text-base text-[var(--color-text-body)] font-bold leading-tight">
              {language === 'zh' ? '年深耕經驗' : 'Years Experience'}
            </span>
          </div>

          {/* Stat 2: 4 Major Hubs */}
          <div className="bg-white border border-slate-200 hover:border-[var(--color-blue-300)] p-4 sm:p-6 rounded-[var(--radius-card)] flex flex-col items-center text-center transition-all duration-300 layer-shadow-soft group cursor-pointer">
            <span className="text-3xl sm:text-4xl lg:text-5xl text-[var(--color-blue-800)] font-extrabold mb-1 sm:mb-2 tracking-tight group-hover:text-[var(--color-primary)] transition-colors duration-300">
              4
            </span>
            <span className="text-xs sm:text-sm lg:text-base text-[var(--color-text-body)] font-bold leading-tight">
              {language === 'zh' ? '大營運據點' : 'Major Terminals'}
            </span>
          </div>

          {/* Stat 3: 2613 Listed Stock */}
          <div className="bg-white border border-slate-200 hover:border-[var(--color-orange)] p-4 sm:p-6 rounded-[var(--radius-card)] flex flex-col items-center text-center transition-all duration-300 layer-shadow-soft group cursor-pointer">
            <span className="text-3xl sm:text-4xl lg:text-5xl text-[var(--color-orange)] font-extrabold mb-1 sm:mb-2 tracking-tight font-mono group-hover:text-[var(--color-blue-800)] transition-colors duration-300">
              2613
            </span>
            <span className="text-xs sm:text-sm lg:text-base text-[var(--color-text-body)] font-bold leading-tight">
              {language === 'zh' ? '上市公司代號' : 'TWSE Stock Code'}
            </span>
          </div>

          {/* Stat 4: ISO Certified */}
          <div className="bg-white border border-slate-200 hover:border-[var(--color-blue-300)] p-4 sm:p-6 rounded-[var(--radius-card)] flex flex-col items-center text-center transition-all duration-300 layer-shadow-soft group cursor-pointer">
            <span className="text-3xl sm:text-4xl lg:text-5xl text-[var(--color-blue-800)] font-extrabold mb-1 sm:mb-2 tracking-tight font-mono group-hover:text-[var(--color-primary)] transition-colors duration-300">
              ISO
            </span>
            <span className="text-xs sm:text-sm lg:text-base text-[var(--color-text-body)] font-bold leading-tight">
              {language === 'zh' ? '國際管理認證' : 'ISO Certified'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
