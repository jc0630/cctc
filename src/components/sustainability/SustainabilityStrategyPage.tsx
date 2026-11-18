import React from 'react';
import { Language } from '../../types';
import { PageBanner } from '../shared/PageBanner';
import { PageSection } from '../shared/PageSection';
import { SectionTitle } from '../shared/SectionTitle';
import { SdgIconRow } from './SdgIconRow';
import { SDG_ICONS } from '../../data/content';
import { HighlightsTab } from './HighlightsTab';
import { DashboardTab } from './DashboardTab';
import { StrategyGoalsTab } from './StrategyGoalsTab';
import { ReportsTab } from './ReportsTab';
import { AnchorNav } from '../shared/AnchorNav';

// Matches the id's StrategyGoalsTab/ReportsTab place on their own content
// wrappers below — scrollspy targets for AnchorNav, not routes.
const ANCHOR_NAV_ITEMS_ZH = [
  { id: 'sustainability-highlights', label: '永續績效亮點' },
  { id: 'sustainability-value-chain', label: '永續價值鏈' },
  { id: 'sustainability-strategy-goals', label: '永續發展策略與短中長期目標' },
  { id: 'sustainability-reports', label: '永續報告書' }
];
const ANCHOR_NAV_ITEMS_EN = [
  { id: 'sustainability-highlights', label: 'Sustainability Highlights' },
  { id: 'sustainability-value-chain', label: 'Sustainability Value Chain' },
  { id: 'sustainability-strategy-goals', label: 'Strategy & Short/Mid/Long-term Goals' },
  { id: 'sustainability-reports', label: 'Sustainability Reports' }
];

interface SustainabilityStrategyPageProps {
  language: Language;
}

// One continuous page (not 4 separate tabbed pages) — 永續績效亮點／數據儀表板／
// 永續發展策略／永續報告書 are sections on the same scroll, each keeping its own
// internal tab navigation (highlights' 經濟/人群/環境/服務 pills, the dashboard's
// 治理/社會/環境 pills, the strategy block's goal-category pills) where the brief
// actually calls for a tab.
export const SustainabilityStrategyPage: React.FC<SustainabilityStrategyPageProps> = ({ language }) => {
  return (
    <div>
      <PageBanner
        image="/hero/2-2永續發展策略白1920.jpg"
        mobileImage="/hero/2-2永續發展策略白800.jpg"
        eyebrowZh="企業永續"
        titleZh="永續發展策略"
        overlay={false}
        mobileAspectRatio="800/360"
        desktopAspectRatio="1920/430"
      />
      {/* All 9 SDGs CCTC maps to — a light band below the banner at sm+
          (bigger icons + a label to their left, same light-blue tone as the
          rest of the site), below the mobile banner too (own band,
          unchanged) since the mobile crop has no room for icons this size
          without overlapping the title. */}
      <div className="hidden sm:block w-full bg-[var(--color-blue-100)]/60 border-b border-[var(--color-blue-300)]/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-row items-center gap-4 lg:gap-8">
          <p className="shrink-0 text-left text-lg font-bold text-[var(--color-ink)] pr-4 lg:pr-8 border-r border-[var(--color-blue-300)]/70">
            對應之SDGs目標
          </p>
          <div className="flex-1 flex justify-start">
            <div className="flex flex-wrap items-center justify-start gap-3">
              {SDG_ICONS.map((icon) => (
                <img key={icon.num} src={icon.image} alt={`SDG ${icon.num}`} className="w-11 h-11 lg:w-14 lg:h-14 rounded-[6px] shadow-sm" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden w-full py-5 px-4 flex justify-center bg-white">
        <SdgIconRow size="xs" />
      </div>

      <AnchorNav items={language === 'zh' ? ANCHOR_NAV_ITEMS_ZH : ANCHOR_NAV_ITEMS_EN} />

      <PageSection>
        <div id="sustainability-highlights" className="flex flex-col gap-6 sm:gap-8">
          <SectionTitle>{language === 'zh' ? '永續績效亮點' : 'Sustainability Highlights'}</SectionTitle>
          <HighlightsTab language={language} />
        </div>
      </PageSection>

      <PageSection>
        <DashboardTab language={language} />
      </PageSection>

      <PageSection>
        <StrategyGoalsTab language={language} />
      </PageSection>

      <PageSection>
        <ReportsTab language={language} />
      </PageSection>
    </div>
  );
};
