import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { HERO_SLIDES } from '../data/content';

interface HeroProps {
  language: Language;
  onExploreClick?: () => void;
  onTrackingClick?: () => void;
}

// Client-supplied, pre-cropped carousel banners (named banner-N, distinct from
// the hero-N.jpg files reused as generic photography elsewhere on the page).
const LOCAL_HERO_IMAGES = [
  '/hero/banner-1.jpg',
  '/hero/banner-2.jpg',
  '/hero/banner-3.jpg',
  '/hero/banner-4.jpg',
  '/hero/banner-5.jpg',
];

export const Hero: React.FC<HeroProps> = ({
  language,
  onExploreClick,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = HERO_SLIDES[currentSlideIndex];

  // Auto-play carousel gently every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section
      id="hero-section"
      className="relative w-full h-[70vh] min-h-[520px] max-h-[880px] bg-[var(--color-navy-deep)] overflow-hidden"
    >
      {/* Full-bleed Background Photo Carousel — same full-bleed object-cover
          at every breakpoint, subject kept centered via object-center. */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          key={currentSlide.id}
          src={LOCAL_HERO_IMAGES[currentSlideIndex] ?? currentSlide.image}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = currentSlide.image;
          }}
          alt={language === 'zh' ? currentSlide.titleZh : currentSlide.titleEn}
          className="w-full h-full object-cover object-center animate-kenburns"
        />
      </div>

      {/* Title + CTA — stacked as one centered block, weighted toward the
          upper half vertically. The CTA reads as the headline's own call to
          action (standard hero pattern) instead of an orphaned corner
          button, and stays well clear of the lower third of the frame
          where the photo's subject usually sits. */}
      <div className="relative z-10 w-full h-full max-w-5xl mx-auto px-12 sm:px-16 lg:px-8 flex flex-col items-center justify-center text-center -translate-y-[125px] sm:-translate-y-[143px] lg:-translate-y-[160px]">
        <h1
          id="hero-title"
          key={`title-${currentSlide.id}`}
          className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-wide leading-[1.2] text-white animate-in fade-in slide-in-from-bottom-4 duration-700"
          style={{ textShadow: '0 2px 16px rgba(0,0,0,0.45), 0 1px 4px rgba(0,0,0,0.4)' }}
        >
          {(() => {
            const title = language === 'zh' ? currentSlide.titleZh : currentSlide.titleEn;
            const parts = title.split(' ');
            if (parts.length === 2 && parts[0] && parts[1]) {
              return (
                <>
                  <span className="block sm:inline">{parts[0]}</span>
                  <span className="hidden sm:inline"> </span>
                  <span className="block sm:inline">{parts[1]}</span>
                </>
              );
            }
            return title;
          })()}
        </h1>

        <button
          id="hero-cta-btn"
          key={`cta-${currentSlide.id}`}
          onClick={onExploreClick}
          className="mt-7 sm:mt-9 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/80 hover:border-white text-white text-sm sm:text-base font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-[var(--radius-pill)] transition-all duration-200 cursor-pointer group layer-shadow-raised animate-in fade-in slide-in-from-bottom-4 duration-700"
        >
          <span>{language === 'zh' ? '了解更多' : 'Explore More'}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Carousel Prev / Next Controls */}
      <button
        onClick={handlePrev}
        aria-label={language === 'zh' ? '上一張輪播圖' : 'Previous slide'}
        className="flex absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/20 hover:bg-white/20 text-white backdrop-blur-sm items-center justify-center transition-all border border-white/30 cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 sm:w-8 sm:h-8" />
      </button>
      <button
        onClick={handleNext}
        aria-label={language === 'zh' ? '下一張輪播圖' : 'Next slide'}
        className="flex absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/20 hover:bg-white/20 text-white backdrop-blur-sm items-center justify-center transition-all border border-white/30 cursor-pointer"
      >
        <ChevronRight className="w-5 h-5 sm:w-8 sm:h-8" />
      </button>

      {/* Carousel Indicator Dots */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex items-center justify-center gap-3">
        {HERO_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlideIndex(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`transition-all rounded-full cursor-pointer h-2 ${
              idx === currentSlideIndex
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
