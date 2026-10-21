import React, { useState } from 'react';
import {
  X,
  ZoomIn,
  Cpu,
  Leaf,
  Heart,
  Award,
  ShieldCheck,
  Footprints,
  Building2,
  Tag,
  CalendarDays,
  Landmark,
  MapPin,
  Map,
  Briefcase
} from 'lucide-react';
import { Language, CompanyInfoRow } from '../../types';
import { PageBanner } from '../shared/PageBanner';
import { PageSection } from '../shared/PageSection';
import { SectionTitle } from '../shared/SectionTitle';
import { SplitSection } from '../shared/SplitSection';
import { MilestoneTimeline } from './MilestoneTimeline';
import {
  COMPANY_PROFILE_BANNER_IMAGE,
  COMPANY_PROFILE_BANNER_TITLE_ZH,
  COMPANY_INFO_ROWS,
  COMPANY_POSITIONING_ZH,
  COMPANY_POSITIONING_EN,
  INDUSTRY_STRUCTURE_IMAGE,
  INDUSTRY_STRUCTURE_CAPTION_ZH,
  INDUSTRY_STRUCTURE_CAPTION_EN,
  FOUNDING_HISTORY_ZH,
  FOUNDING_HISTORY_EN,
  WUDU_HISTORIC_IMAGE,
  WUDU_HISTORIC_CAPTION_ZH,
  WUDU_HISTORIC_CAPTION_EN,
  OPERATIONS_OVERVIEW_ZH,
  OPERATIONS_OVERVIEW_EN,
  MILESTONES,
  TAICHUNG_OVERVIEW_IMAGE,
  TAICHUNG_OVERVIEW_CAPTION_ZH,
  TAICHUNG_OVERVIEW_CAPTION_EN,
  KEELUNG_OVERVIEW_IMAGE,
  KEELUNG_OVERVIEW_CAPTION_ZH,
  KEELUNG_OVERVIEW_CAPTION_EN,
  SMART_OPERATIONS_ZH,
  SMART_OPERATIONS_EN,
  LOW_CARBON_TRANSFORMATION_ZH,
  LOW_CARBON_TRANSFORMATION_EN,
  ELECTRIC_TRACTOR_IMAGE,
  ENERGY_STORAGE_IMAGE,
  DUAL_TRANSFORMATION_SHARED_CAPTION_ZH,
  DUAL_TRANSFORMATION_SHARED_CAPTION_EN,
  CORE_VALUES,
  VISION_TEXT_ZH,
  VISION_TEXT_EN,
  CONTAINER_VISUAL_IMAGE,
  CONTAINER_VISUAL_ALT_ZH,
  CONTAINER_VISUAL_ALT_EN
} from '../../data/content';

interface CompanyProfilePageProps {
  language: Language;
}

interface CompanyInfoCardProps {
  row: CompanyInfoRow;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  language: Language;
}

const CompanyInfoCard: React.FC<CompanyInfoCardProps> = ({ row, icon: Icon, accent, language }) => (
  <div className="group relative bg-white border border-slate-200 rounded-[var(--radius-card)] p-4 sm:p-5 layer-shadow-soft hover:layer-shadow-raised hover:-translate-y-1 transition-all duration-300 overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: accent }} />
    <div
      className="esg-icon-circle w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mb-3 ring-1 ring-slate-200 group-hover:ring-0 group-hover:scale-105 transition-all duration-300"
      style={{ '--icon-accent': accent } as React.CSSProperties}
    >
      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
    </div>
    <span className="block text-xs sm:text-sm font-bold mb-1" style={{ color: accent }}>
      {language === 'zh' ? row.labelZh : row.labelEn}
    </span>
    <span className="block text-sm sm:text-base font-bold text-[var(--color-ink)] leading-snug">
      {language === 'zh' ? row.valueZh : row.valueEn}
    </span>
  </div>
);

// One icon per CORE_VALUES entry, in order (熱忱/專業/誠信/踏實).
const CORE_VALUE_ICONS = [Heart, Award, ShieldCheck, Footprints];

// One icon + accent color per COMPANY_INFO_ROWS entry, in order (公司名稱/
// 公司簡稱/創立時間/股票代號/總公司/服務據點/服務項目). The accent cycles
// through the site's full color family (blue/orange/green/navy/ocean) so the
// card row reads like a line of shipping containers in different colors,
// rather than one flat brand-blue repeated seven times.
const COMPANY_INFO_ICONS = [Building2, Tag, CalendarDays, Landmark, MapPin, Map, Briefcase];
const COMPANY_INFO_ACCENTS = [
  'var(--color-cta)',
  'var(--color-orange)',
  'var(--color-green-600)',
  'var(--color-navy)',
  'var(--color-ocean)',
  'var(--color-orange-deep)',
  'var(--color-blue-500)'
];

export const CompanyProfilePage: React.FC<CompanyProfilePageProps> = ({ language }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div>
      <PageBanner
        image={COMPANY_PROFILE_BANNER_IMAGE}
        titleZh={COMPANY_PROFILE_BANNER_TITLE_ZH}
      />

      {/* 區塊 2：快速認識中櫃 — 7 facts as individual cards in ONE 4-col
          grid: row 1 fills with 4 cards, row 2 takes the remaining 3 and
          stays flush left (matching row 1's left edge) rather than being
          centered as its own group. Each card gets its own icon + accent
          color cycling through the site's full color family, echoing the
          multi-colored shipping containers themselves rather than repeating
          one flat brand-blue seven times. */}
      <PageSection>
        <SectionTitle className="mb-6 sm:mb-8">
          {language === 'zh' ? '快速認識中櫃' : 'Company Overview'}
        </SectionTitle>

        <div className="max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
          {COMPANY_INFO_ROWS.map((row, i) => (
            <CompanyInfoCard key={i} row={row} icon={COMPANY_INFO_ICONS[i]} accent={COMPANY_INFO_ACCENTS[i]} language={language} />
          ))}
        </div>
      </PageSection>

      {/* 區塊 2.5：產業定位 — left-text/right-diagram split (the diagram was
          previously full-width below the text, which rendered far larger
          than the content needs; halving it into a two-column split keeps
          it legible without dominating the section). */}
      <PageSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <div>
            <SectionTitle className="mb-5 sm:mb-6">
              {language === 'zh' ? '產業定位' : 'Industry Positioning'}
            </SectionTitle>
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-loose">
              {language === 'zh' ? COMPANY_POSITIONING_ZH : COMPANY_POSITIONING_EN}
            </p>
          </div>

          <div>
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="group relative block w-full cursor-zoom-in"
            >
              <img
                src={INDUSTRY_STRUCTURE_IMAGE}
                alt={language === 'zh' ? INDUSTRY_STRUCTURE_CAPTION_ZH : INDUSTRY_STRUCTURE_CAPTION_EN}
                className="w-full rounded-[var(--radius-panel)] border border-[var(--color-blue-300)]/50 layer-shadow-raised"
              />
              <span className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/60 text-white text-xs font-bold px-3 py-1.5 rounded-[var(--radius-pill)]">
                <ZoomIn className="w-3.5 h-3.5" />
                {language === 'zh' ? '點擊放大' : 'Click to zoom'}
              </span>
            </button>
            <p className="mt-2 text-xs sm:text-sm text-[var(--color-text-secondary)] leading-snug">
              {language === 'zh' ? INDUSTRY_STRUCTURE_CAPTION_ZH : INDUSTRY_STRUCTURE_CAPTION_EN}
            </p>
          </div>
        </div>
      </PageSection>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            aria-label={language === 'zh' ? '關閉' : 'Close'}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={INDUSTRY_STRUCTURE_IMAGE}
            alt={language === 'zh' ? INDUSTRY_STRUCTURE_CAPTION_ZH : INDUSTRY_STRUCTURE_CAPTION_EN}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* 區塊 3：鏈結海陸與接軌國際的時代使命 */}
      <SplitSection
        titleZh={language === 'zh' ? '鏈結海陸與接軌國際的時代使命' : "A Mission to Connect Sea, Land, and the World"}
        image={WUDU_HISTORIC_IMAGE}
        imageAlt={language === 'zh' ? WUDU_HISTORIC_CAPTION_ZH : WUDU_HISTORIC_CAPTION_EN}
        imageCaption={language === 'zh' ? WUDU_HISTORIC_CAPTION_ZH : WUDU_HISTORIC_CAPTION_EN}
      >
        <p>{language === 'zh' ? FOUNDING_HISTORY_ZH : FOUNDING_HISTORY_EN}</p>
      </SplitSection>

      {/* 區塊 4：全臺營運布局與多元港埠服務 — left text / right milestone
          cards, same 5/7-column split as the homepage's 關於中櫃 section
          (see AboutSection.tsx) rather than text-then-full-width-cards. */}
      <PageSection>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10 sm:mb-14">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <SectionTitle>
              {language === 'zh' ? '全臺營運布局與多元港埠服務' : 'Nationwide Operations & Diversified Port Services'}
            </SectionTitle>
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-loose">
              {language === 'zh' ? OPERATIONS_OVERVIEW_ZH : OPERATIONS_OVERVIEW_EN}
            </p>
          </div>

          <div className="lg:col-span-7">
            <MilestoneTimeline items={MILESTONES} language={language} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <img
              src={TAICHUNG_OVERVIEW_IMAGE}
              alt={language === 'zh' ? TAICHUNG_OVERVIEW_CAPTION_ZH : TAICHUNG_OVERVIEW_CAPTION_EN}
              className="w-full aspect-[4/3] object-cover rounded-[var(--radius-panel)] border border-[var(--color-blue-300)]/50 layer-shadow-raised"
            />
            <p className="mt-2 text-xs sm:text-sm text-[var(--color-text-secondary)] leading-snug">
              {language === 'zh' ? TAICHUNG_OVERVIEW_CAPTION_ZH : TAICHUNG_OVERVIEW_CAPTION_EN}
            </p>
          </div>
          <div>
            <img
              src={KEELUNG_OVERVIEW_IMAGE}
              alt={language === 'zh' ? KEELUNG_OVERVIEW_CAPTION_ZH : KEELUNG_OVERVIEW_CAPTION_EN}
              className="w-full aspect-[4/3] object-cover rounded-[var(--radius-panel)] border border-[var(--color-blue-300)]/50 layer-shadow-raised"
            />
            <p className="mt-2 text-xs sm:text-sm text-[var(--color-text-secondary)] leading-snug">
              {language === 'zh' ? KEELUNG_OVERVIEW_CAPTION_ZH : KEELUNG_OVERVIEW_CAPTION_EN}
            </p>
          </div>
        </div>
      </PageSection>

      {/* 區塊 5：雙軸轉型：智慧營運與永續低碳實踐 */}
      <PageSection>
        <SectionTitle className="mb-6 sm:mb-8">
          {language === 'zh' ? '雙軸轉型：智慧營運與永續低碳實踐' : 'Dual Transformation: Smart Operations & Low-Carbon Sustainability'}
        </SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 mb-10 sm:mb-14">
              {/* Smart Operations — brand-blue accent */}
              <div className="group relative bg-white border border-slate-200 rounded-[var(--radius-card)] p-6 sm:p-8 layer-shadow-soft hover:layer-shadow-raised hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: 'var(--color-cta)' }} />
                <div
                  className="esg-icon-circle w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4 sm:mb-5 ring-1 ring-slate-200 group-hover:ring-0 group-hover:scale-105 transition-all duration-300"
                  style={{ '--icon-accent': 'var(--color-cta)' } as React.CSSProperties}
                >
                  <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[var(--color-ink)] mb-3">
                  {language === 'zh' ? '智慧營運' : 'Smart Operations'}
                </h3>
                <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-loose">
                  {language === 'zh' ? SMART_OPERATIONS_ZH : SMART_OPERATIONS_EN}
                </p>
              </div>

              {/* Low-Carbon Transformation — ESG green accent, matching the
                  site's existing environmental color family. */}
              <div className="group relative bg-white border border-slate-200 rounded-[var(--radius-card)] p-6 sm:p-8 layer-shadow-soft hover:layer-shadow-raised hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: 'var(--color-green-600)' }} />
                <div
                  className="esg-icon-circle w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4 sm:mb-5 ring-1 ring-slate-200 group-hover:ring-0 group-hover:scale-105 transition-all duration-300"
                  style={{ '--icon-accent': 'var(--color-green-600)' } as React.CSSProperties}
                >
                  <Leaf className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[var(--color-ink)] mb-3">
                  {language === 'zh' ? '低碳轉型' : 'Low-Carbon Transformation'}
                </h3>
                <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-loose">
                  {language === 'zh' ? LOW_CARBON_TRANSFORMATION_ZH : LOW_CARBON_TRANSFORMATION_EN}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <img
                src={ELECTRIC_TRACTOR_IMAGE}
                alt={language === 'zh' ? DUAL_TRANSFORMATION_SHARED_CAPTION_ZH : DUAL_TRANSFORMATION_SHARED_CAPTION_EN}
                className="w-full aspect-video object-cover rounded-[var(--radius-panel)] border border-[var(--color-blue-300)]/50 layer-shadow-raised"
              />
              <img
                src={ENERGY_STORAGE_IMAGE}
                alt={language === 'zh' ? DUAL_TRANSFORMATION_SHARED_CAPTION_ZH : DUAL_TRANSFORMATION_SHARED_CAPTION_EN}
                className="w-full aspect-video object-cover rounded-[var(--radius-panel)] border border-[var(--color-blue-300)]/50 layer-shadow-raised"
              />
            </div>
        <p className="mt-2 text-xs sm:text-sm text-[var(--color-text-secondary)] leading-snug">
          {language === 'zh' ? DUAL_TRANSFORMATION_SHARED_CAPTION_ZH : DUAL_TRANSFORMATION_SHARED_CAPTION_EN}
        </p>
      </PageSection>

      {/* 區塊 6：共創永續未來 */}
      <SplitSection
        titleZh={language === 'zh' ? '共創永續未來' : 'Building a Sustainable Future Together'}
        image={CONTAINER_VISUAL_IMAGE}
        imageAlt={language === 'zh' ? CONTAINER_VISUAL_ALT_ZH : CONTAINER_VISUAL_ALT_EN}
        align="start"
      >
        {/* Core values as a 2x2 icon-card grid rather than one inline text
            row — gives this column more visual weight so it doesn't read as
            mostly blank space next to the tall container visual on the right. */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5">
          {CORE_VALUES.map((value, i) => {
            const Icon = CORE_VALUE_ICONS[i];
            return (
              <div
                key={value.zh}
                className="group flex items-center gap-3 bg-white border border-slate-200 hover:border-[var(--color-cta)]/50 rounded-[var(--radius-card)] p-3 sm:p-4 layer-shadow-soft hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="esg-icon-circle w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0 ring-1 ring-slate-200 group-hover:ring-0 group-hover:scale-105 transition-all duration-300"
                  style={{ '--icon-accent': 'var(--color-cta)' } as React.CSSProperties}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-base sm:text-lg font-extrabold text-[var(--color-ink)]">
                  {language === 'zh' ? value.zh : value.en}
                </span>
              </div>
            );
          })}
        </div>
        <p>{language === 'zh' ? VISION_TEXT_ZH : VISION_TEXT_EN}</p>
      </SplitSection>
    </div>
  );
};
