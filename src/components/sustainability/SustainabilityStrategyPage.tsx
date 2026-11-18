import React from 'react';
import { Language } from '../../types';
import { PageBanner } from '../shared/PageBanner';
import { PageSection } from '../shared/PageSection';
import { SectionTitle } from '../shared/SectionTitle';
import { SdgIconRow } from './SdgIconRow';
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
      <div className="relative">
        <PageBanner
          image="/hero/2-2永續發展策略白1920.jpg"
          mobileImage="/hero/2-2永續發展策略白800.jpg"
          eyebrowZh="企業永續"
          titleZh="永續發展策略"
          overlay={false}
          mobileAspectRatio="800/360"
          desktopAspectRatio="1920/430"
        />
        {/* All 9 SDGs CCTC maps to — overlaid on the banner itself at sm+,
            where there's enough height to fit cleanly. Mobile keeps its own
            band below the banner instead (see the block further down): the
            short mobile banner doesn't have room for the icon row without
            overlapping the title. */}
        <div className="hidden sm:flex absolute inset-x-0 bottom-5 justify-center z-10">
          <SdgIconRow size="xs" />
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
