import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VideoSection } from './components/VideoSection';
import { AboutSection } from './components/AboutSection';
import { TaiwanOperations } from './components/TaiwanOperations';
import { ESGSection } from './components/ESGSection';
import { LatestNews } from './components/LatestNews';
import { InvestorRelationsCareers } from './components/InvestorRelationsCareers';
import { Footer } from './components/Footer';
import { SustainabilityStrategyPage } from './components/sustainability/SustainabilityStrategyPage';
import { CompanyProfilePage } from './components/about-page/CompanyProfilePage';
import { TaichungDepotPage } from './components/operations/TaichungDepotPage';

import { Language } from './types';

// Sentinel ids recognized by handleNavigate below to switch into a dedicated
// inner-page view instead of scrolling to a homepage anchor — this is a
// single-page app with no router, so "pages" beyond the homepage are modeled
// as a `currentView` toggle rather than real routes.
type View = 'home' | 'sustainability-strategy' | 'about-page' | 'taichung-depot';

const VIEW_SENTINELS: Record<string, View> = {
  'sustainability-strategy-page': 'sustainability-strategy',
  'about-page': 'about-page',
  'taichung-depot-page': 'taichung-depot'
};

export default function App() {
  const [language, setLanguage] = useState<Language>('zh');
  const [currentView, setCurrentView] = useState<View>('home');

  const handleNavigate = (sectionId: string) => {
    if (sectionId in VIEW_SENTINELS) {
      setCurrentView(VIEW_SENTINELS[sectionId]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'home-top') {
      setCurrentView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentView !== 'home') {
      // Leaving an inner-page view: switch back to the homepage first, then
      // scroll once the target section has mounted.
      setCurrentView('home');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        });
      });
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-white">
        {/* Site Header */}
        <Header
          language={language}
          onToggleLanguage={(lang) => setLanguage(lang)}
          onNavigateSection={handleNavigate}
        />

        {/* overflow-x-hidden lives here (not on the root wrapper) so it guards
            against any full-bleed section without becoming a containing block
            for the sticky Header above it — overflow-x on an ancestor forces
            overflow-y to compute to auto too, which silently breaks `sticky`. */}
        <div className="overflow-x-hidden">
        {/* Main Content: homepage sections, or a dedicated inner page when
            navigated to from the header dropdown. */}
        <main>
          {currentView === 'sustainability-strategy' ? (
            <SustainabilityStrategyPage language={language} />
          ) : currentView === 'about-page' ? (
            <CompanyProfilePage language={language} onNavigateSection={handleNavigate} />
          ) : currentView === 'taichung-depot' ? (
            <TaichungDepotPage language={language} />
          ) : (
            <>
              {/* 01: Hero Section */}
              <Hero language={language} />

              {/* 03: Corporate Video Section */}
              <VideoSection
                language={language}
              />

              {/* 04: About China Container Section */}
              <AboutSection
                language={language}
                onExploreMore={() => handleNavigate('operations')}
              />

              {/* 05: Taiwan Operations Section (4 locations, mobile carousel) */}
              <TaiwanOperations
                language={language}
                onViewAllLocations={() => handleNavigate('operations')}
              />

              {/* 06: ESG Sustainability Section */}
              <ESGSection
                language={language}
                onOpenESG={() => handleNavigate('esg')}
              />

              {/* 07: Latest News Section */}
              <LatestNews
                language={language}
                onViewAllNews={() => handleNavigate('news')}
              />

              {/* 08 & 09: Investor Relations & Careers Section */}
              <InvestorRelationsCareers
                language={language}
                onNavigateSection={handleNavigate}
              />
            </>
          )}
        </main>

        {/* 10: Footer Section */}
        <Footer
          language={language}
          onNavigateSection={handleNavigate}
        />
        </div>
    </div>
  );
}
