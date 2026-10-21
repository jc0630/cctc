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
          image="/hero/banner-sustainability-strategy.jpg"
          mobileImage="/hero/mobile-banner-sustainability-strategy.jpg"
          eyebrowZh="企業永續"
          titleZh="永續發展策略"
          overlay={false}
        />
        {/* All 9 SDGs CCTC maps to, pressed directly onto the banner photo
            rather than sitting in their own strip below it. */}
        <div className="absolute inset-x-0 bottom-3 sm:bottom-5 z-10 flex justify-center px-4">
          <SdgIconRow size="xs" />
        </div>
      </div>

      <PageSection>
        <div className="flex flex-col gap-6 sm:gap-8">
          <SectionTitle>{language === 'zh' ? '永續績效亮點' : 'Sustainability Highlights'}</SectionTitle>
          <HighlightsTab language={language} />
        </div>
      </PageSection>

      <PageSection>
        <div className="flex flex-col gap-6 sm:gap-8">
          <SectionTitle>{language === 'zh' ? '數據儀表板' : 'Data Dashboard'}</SectionTitle>
          <DashboardTab language={language} />
        </div>
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
