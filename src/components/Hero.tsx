import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { HERO_SLIDES } from '../data/content';

interface HeroProps {
  language: Language;
  onExploreClick?: () => void;
  onTrackingClick?: () => void;
}

// Local banner photos — drop hero-1.jpg ... hero-5.jpg into /public/hero to replace.
// Falls back to the original placeholder photo per slide until those files exist.
const LOCAL_HERO_IMAGES = [
  '/hero/hero-1.jpg',
  '/hero/hero-2.jpg',
  '/hero/hero-3.jpg',
  '/hero/hero-4.jpg',
  '/hero/hero-5.jpg',
];

export const Hero: React.FC<HeroProps> = ({
  language,
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
      {/* Full-bleed Background Photo Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          key={currentSlide.id}
          src={LOCAL_HERO_IMAGES[currentSlideIndex] ?? currentSlide.image}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = currentSlide.image;
          }}
          alt={language === 'zh' ? currentSlide.titleZh : currentSlide.titleEn}
          className="w-full h-full object-cover object-center animate-in fade-in duration-1000"
        />
        {/* Readability overlay */}
        <div className="absolute inset-0 bg-[var(--color-navy-deep)]/35" />
        {/* Bottom gradient fade — blends the banner smoothly into the white section below */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/0 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--color-navy-deep)]/50 to-transparent" />
      </div>

      {/* Centered Title Only */}
      <div className="relative z-10 w-full h-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <h1
          id="hero-title"
          key={`title-${currentSlide.id}`}
          className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-wide leading-[1.2] text-white drop-shadow-md animate-in fade-in slide-in-from-bottom-4 duration-700"
        >
          {language === 'zh' ? currentSlide.titleZh : currentSlide.titleEn}
        </h1>
      </div>

      {/* Carousel Prev / Next Controls (Hidden on small screens) */}
      <button
        onClick={handlePrev}
        aria-label={language === 'zh' ? '上一張輪播圖' : 'Previous slide'}
        className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/20 hover:bg-white/20 text-white backdrop-blur-sm items-center justify-center transition-all border border-white/30 cursor-pointer"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={handleNext}
        aria-label={language === 'zh' ? '下一張輪播圖' : 'Next slide'}
        className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/20 hover:bg-white/20 text-white backdrop-blur-sm items-center justify-center transition-all border border-white/30 cursor-pointer"
      >
        <ChevronRight className="w-8 h-8" />
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
