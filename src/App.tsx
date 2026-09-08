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
import { ContainerTrackingModal } from './components/modals/ContainerTrackingModal';
import { VideoLightboxModal } from './components/modals/VideoLightboxModal';
import { LocationDetailModal } from './components/modals/LocationDetailModal';
import { NewsDetailModal } from './components/modals/NewsDetailModal';
import { GenericInfoModal, ModalType } from './components/modals/GenericInfoModal';

import { Language, TerminalLocation, NewsArticle, ESGItem, VideoItem } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('zh');

  // Modal States
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
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

  const handleServiceClick = (serviceId: string) => {
    if (serviceId === 'tracking') {
      setIsTrackingOpen(true);
    } else if (serviceId === 'berth') {
      setGenericModalType('berth');
    } else if (serviceId === 'forms') {
      setGenericModalType('forms');
    } else if (serviceId === 'support') {
      setGenericModalType('support');
    }
  };

  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
        {/* Site Header */}
        <Header
          language={language}
          onToggleLanguage={(lang) => setLanguage(lang)}
          onOpenPortal={() => setGenericModalType('portal')}
          onNavigateSection={handleNavigate}
        />

        {/* Main Content Sections (Strictly in prescribed order) */}
        <main>
          {/* 01: Hero Section */}
          <Hero
            language={language}
            onExploreClick={() => handleNavigate('about')}
            onTrackingClick={() => setIsTrackingOpen(true)}
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
            onOpenESG={(item) => {
              if (item.id === 'rep') {
                setGenericModalType('forms');
              } else {
                handleNavigate('esg');
              }
            }}
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

      {/* Interactive Modals */}
      <ContainerTrackingModal
        isOpen={isTrackingOpen}
        onClose={() => setIsTrackingOpen(false)}
        language={language}
      />

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
