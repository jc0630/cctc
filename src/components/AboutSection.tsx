import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface AboutSectionProps {
  language: Language;
  onExploreMore: () => void;
}

// Number + suffix + label only, no icons — mirrors the reference layout's
// plain stat-strip treatment (divider lines doing the separation work
// instead of bordered/iconed cards).
const ABOUT_STATS: { numberZh: React.ReactNode; numberEn: React.ReactNode; labelZh: string; labelEn: string }[] = [
  {
    numberZh: '2613',
    numberEn: '2613',
    labelZh: '上市公司代號',
    labelEn: 'TWSE Listed Co.'
  },
  {
    numberZh: <>25<span className="text-[var(--color-orange)] font-bold">億+</span></>,
    numberEn: <>2.5<span className="text-[var(--color-orange)] font-bold">B+</span></>,
    labelZh: '年度營收',
    labelEn: 'Annual Revenue'
  },
  {
    numberZh: <>150<span className="text-[var(--color-orange)] font-bold">萬</span></>,
    numberEn: <>1.5<span className="text-[var(--color-orange)] font-bold">M</span></>,
    labelZh: 'TEU 年度作業量',
    labelEn: 'TEU Annual Throughput'
  },
  {
    numberZh: <>30<span className="text-[var(--color-orange)] font-bold">%</span></>,
    numberEn: <>30<span className="text-[var(--color-orange)] font-bold">%</span></>,
    labelZh: '碳排放年減目標',
    labelEn: 'Carbon Reduction Target'
  }
];

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
        {/* Intro: heading + copy + CTA, full-width top block (reference
            layout stacks text above the stat strip instead of a side-by-
            side split) */}
        <div className="max-w-2xl flex flex-col gap-5">
          <h2 className="section-title text-3xl sm:text-4xl font-bold tracking-tight">
            {language === 'zh' ? '關於中櫃' : 'About Us'}
          </h2>

          <p className="text-sm sm:text-base text-[var(--color-text-body)] leading-relaxed">
            {language === 'zh'
              ? '中國貨櫃運輸股份有限公司（中櫃）創立於民國58年，為臺灣首家股票上市貨櫃集散站業者，服務據點涵蓋五堵、基隆、臺中及高雄，提供專業港埠物流服務。'
              : 'China Container Terminal Corporation (CCTC), founded in 1969, is Taiwan\'s first publicly listed container terminal and depot operator, with locations spanning Wudu, Keelung, Taichung, and Kaohsiung, delivering professional port logistics services.'}
          </p>

          <div>
            <button
              id="about-cta-link"
              onClick={onExploreMore}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-blue-900)] text-white text-sm sm:text-base font-bold px-7 py-3.5 rounded-[var(--radius-pill)] transition-colors duration-200 cursor-pointer group layer-shadow-soft"
            >
              <span>{language === 'zh' ? '了解更多' : 'Explore More'}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Stats: plain number + label strip, divider lines doing the
            separation instead of bordered cards. Desktop/tablet lays the 4
            out horizontally with vertical rules; mobile stacks them with
            horizontal rules, number-left / label-right per row. */}
        <div className="mt-8 sm:mt-10">
          <div className="hidden sm:flex items-stretch divide-x divide-slate-200 border-t border-b border-slate-200">
            {ABOUT_STATS.map((stat, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center text-center px-4 py-6 sm:py-8">
                <span className="text-3xl lg:text-4xl font-extrabold text-[var(--color-blue-800)] tracking-tight">
                  {language === 'zh' ? stat.numberZh : stat.numberEn}
                </span>
                <span className="mt-2 text-xs sm:text-sm text-[var(--color-text-body)] font-bold leading-tight">
                  {language === 'zh' ? stat.labelZh : stat.labelEn}
                </span>
              </div>
            ))}
          </div>

          <div className="sm:hidden divide-y divide-slate-200 border-t border-slate-200">
            {ABOUT_STATS.map((stat, idx) => (
              <div key={idx} className="flex items-center justify-between gap-4 py-4">
                <span className="shrink-0 text-3xl font-extrabold text-[var(--color-blue-800)] tracking-tight">
                  {language === 'zh' ? stat.numberZh : stat.numberEn}
                </span>
                <span className="text-sm text-[var(--color-text-body)] font-bold text-right leading-tight">
                  {language === 'zh' ? stat.labelZh : stat.labelEn}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
