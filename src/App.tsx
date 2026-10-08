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

import { Language } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('zh');

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
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
        {/* Main Content Sections (Strictly in prescribed order) */}
        <main>
          {/* 01: Hero Section */}
          <Hero
            language={language}
            onExploreClick={() => handleNavigate('about')}
          />

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
          />
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
