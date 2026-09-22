import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OnlineServices } from './components/OnlineServices';
import { VideoSection } from './components/VideoSection';
import { AboutSection } from './components/AboutSection';
import { TaiwanOperations } from './components/TaiwanOperations';
import { ESGSection } from './components/ESGSection';
import { LatestNews } from './components/LatestNews';
import { InvestorRelationsCareers } from './components/InvestorRelationsCareers';
import { Footer } from './components/Footer';

// Modals
import { VideoLightboxModal } from './components/modals/VideoLightboxModal';
import { LocationDetailModal } from './components/modals/LocationDetailModal';
import { NewsDetailModal } from './components/modals/NewsDetailModal';
import { GenericInfoModal, ModalType } from './components/modals/GenericInfoModal';

import { Language, TerminalLocation, NewsArticle, ESGItem, VideoItem } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('zh');

  // Modal States
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<TerminalLocation | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsArticle | null>(null);
  const [genericModalType, setGenericModalType] = useState<ModalType>(null);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceClick = (_serviceId: string) => {
    // Quick-nav cards are link-style only for now — no popups.
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

          {/* 02: Online Services Section (4 items) */}
          <OnlineServices
            language={language}
            onSelectService={handleServiceClick}
          />

          {/* 03: Corporate Video Section */}
          <VideoSection
            language={language}
            onPlayVideo={(video) => setSelectedVideo(video)}
          />

          {/* 04: About China Container Section */}
          <AboutSection
            language={language}
            onExploreMore={() => handleNavigate('operations')}
          />

          {/* 05: Taiwan Operations Section (4 locations, mobile carousel) */}
          <TaiwanOperations
            language={language}
            onSelectLocation={(loc) => setSelectedLocation(loc)}
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
            onSelectArticle={(article) => setSelectedNews(article)}
            onViewAllNews={() => handleNavigate('news')}
          />

          {/* 08 & 09: Investor Relations & Careers Section */}
          <InvestorRelationsCareers
            language={language}
            onOpenInvestor={() => setGenericModalType('investor')}
            onOpenCareers={() => setGenericModalType('careers')}
          />
        </main>

        {/* 10: Footer Section */}
        <Footer
          language={language}
          onNavigateSection={handleNavigate}
          onOpenPrivacy={() => setGenericModalType('privacy')}
          onOpenTerms={() => setGenericModalType('terms')}
        />
        </div>

      {/* Interactive Modals */}
      <VideoLightboxModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
        language={language}
      />

      <LocationDetailModal
        location={selectedLocation}
        onClose={() => setSelectedLocation(null)}
        language={language}
      />

      <NewsDetailModal
        article={selectedNews}
        onClose={() => setSelectedNews(null)}
        language={language}
      />

      <GenericInfoModal
        modalType={genericModalType}
        onClose={() => setGenericModalType(null)}
        language={language}
      />
    </div>
  );
}
