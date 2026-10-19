import React from 'react';

interface PageBannerProps {
  image: string;
  fallbackImage?: string;
  titleZh: string;
  subtitleEn: string;
}

// Dedicated inner-page banner — the homepage has no existing "sub-page banner"
// pattern to reuse (it's a single-page site), so this extends the Hero's own
// photo + dark-overlay + white-title treatment (see Hero.tsx) into a shorter,
// static (non-carousel) variant. Per the design brief, the banner always
// pairs a Chinese title with an English subtitle regardless of site language
// — it's a fixed bilingual banner convention, not tied to the language toggle.
export const PageBanner: React.FC<PageBannerProps> = ({ image, fallbackImage, titleZh, subtitleEn }) => {
  return (
    <section className="relative w-full h-[220px] sm:h-[300px] lg:h-[360px] bg-[var(--color-navy-deep)] overflow-hidden">
      <img
        src={image}
        onError={(e) => {
          if (fallbackImage) {
            e.currentTarget.onerror = null;
            e.currentTarget.src = fallbackImage;
          }
        }}
        alt={titleZh}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/55" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide"
          style={{ textShadow: '0 2px 16px rgba(0,0,0,0.45), 0 1px 4px rgba(0,0,0,0.4)' }}
        >
          {titleZh}
        </h1>
        <p className="mt-2 sm:mt-3 text-xs sm:text-sm tracking-[0.25em] text-white/80 uppercase">
          {subtitleEn}
        </p>
      </div>
    </section>
  );
};
