import React from 'react';

interface PageBannerProps {
  image: string;
  mobileImage?: string;
  fallbackImage?: string;
  titleZh: string;
}

// Dedicated inner-page banner — the homepage has no existing "sub-page banner"
// pattern to reuse (it's a single-page site), so this extends the Hero's own
// photo + dark-overlay + white-title treatment (see Hero.tsx) into a shorter,
// static (non-carousel) variant. Fixed 550px height at every breakpoint to
// match the supplied banner photos' native crop height.
export const PageBanner: React.FC<PageBannerProps> = ({ image, mobileImage, fallbackImage, titleZh }) => {
  return (
    <section className="relative w-full h-[550px] bg-[var(--color-navy-deep)] overflow-hidden">
      {/* Same desktop/mobile crop swap as Hero.tsx's carousel — mobile gets
          its own crop below the sm breakpoint instead of the wide desktop
          photo squeezed into a narrow aspect ratio. */}
      <picture>
        {mobileImage && <source media="(max-width: 639px)" srcSet={mobileImage} />}
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
      </picture>
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/55" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide"
          style={{ textShadow: '0 2px 16px rgba(0,0,0,0.45), 0 1px 4px rgba(0,0,0,0.4)' }}
        >
          {titleZh}
        </h1>
      </div>
    </section>
  );
};
