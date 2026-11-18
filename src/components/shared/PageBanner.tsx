import React from 'react';
import { ArrowLeft, Anchor } from 'lucide-react';

interface PageBannerProps {
  image: string;
  mobileImage?: string;
  fallbackImage?: string;
  titleZh: string;
  /** Small label above the title (e.g. "關於中櫃"), centered with it. */
  eyebrowZh?: string;
  /** Makes the eyebrow a clickable back-breadcrumb (leading arrow + hover
   * state) instead of plain text — for a drilled-into sub-page whose banner
   * doubles as the "back to parent" control. */
  onEyebrowClick?: () => void;
  /** Optional line of body text below the title, centered and width-capped —
   * for a banner that also carries a short intro (e.g. a terminal's lead
   * paragraph) instead of title alone. */
  descriptionZh?: string;
  /** Dark gradient scrim behind the title, on by default. Set false for a
   * banner photo that already reads clearly without it. */
  overlay?: boolean;
  /** Container aspect ratio below the sm breakpoint, as a CSS "width/height"
   * value (e.g. "800/360"). Provide together with desktopAspectRatio to make
   * the banner's height scale with viewport width instead of staying a fixed
   * 550px at every breakpoint. */
  mobileAspectRatio?: string;
  /** Container aspect ratio at the sm breakpoint and above, as a CSS
   * "width/height" value (e.g. "1920/430"). */
  desktopAspectRatio?: string;
  /** Desktop-only quick-link row anchored to the banner's bottom edge (own
   * gradient scrim, independent of `overlay`) — for a landing banner that
   * doubles as an entry point into a couple of named sub-pages (e.g. the
   * Taichung Depot page's two terminals). Not rendered below lg; the caller
   * renders its own mobile equivalent (see TaichungDepotPage) since that
   * version uses the homepage's card styling instead of an overlay. */
  quickLinks?: { label: string; onClick: () => void }[];
}

// Dedicated inner-page banner — the homepage has no existing "sub-page banner"
// pattern to reuse (it's a single-page site), so this extends the Hero's own
// photo + dark-overlay + white-title treatment (see Hero.tsx) into a shorter,
// static (non-carousel) variant. Fixed 550px height by default at every
// breakpoint; pass mobileAspectRatio/desktopAspectRatio to size the banner to
// a specific export spec instead (height then scales with viewport width).
export const PageBanner: React.FC<PageBannerProps> = ({
  image,
  mobileImage,
  fallbackImage,
  titleZh,
  eyebrowZh,
  onEyebrowClick,
  descriptionZh,
  overlay = true,
  mobileAspectRatio,
  desktopAspectRatio,
  quickLinks
}) => {
  const titleShadow = { textShadow: '0 2px 16px rgba(0,0,0,0.45), 0 1px 4px rgba(0,0,0,0.4)' };
  const hasCustomAspect = Boolean(mobileAspectRatio || desktopAspectRatio);
  const aspectStyle = hasCustomAspect
    ? ({
        '--banner-aspect-mobile': mobileAspectRatio ?? desktopAspectRatio,
        '--banner-aspect-desktop': desktopAspectRatio ?? mobileAspectRatio
      } as React.CSSProperties)
    : undefined;

  return (
    <section
      className={`relative w-full bg-[var(--color-navy-deep)] overflow-hidden ${
        hasCustomAspect
          ? '[aspect-ratio:var(--banner-aspect-mobile)] sm:[aspect-ratio:var(--banner-aspect-desktop)]'
          : 'h-[550px]'
      } ${quickLinks ? 'lg:min-h-[300px]' : ''}`}
      style={aspectStyle}
    >
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
      {overlay && <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/55" />}
      <div className={`relative z-10 h-full flex flex-col items-center justify-center text-center px-6 ${quickLinks ? 'lg:pb-24' : ''}`}>
        {eyebrowZh && (
          onEyebrowClick ? (
            <button
              type="button"
              onClick={onEyebrowClick}
              className="flex items-center gap-1.5 text-sm sm:text-base font-bold text-white/90 hover:text-white mb-2 sm:mb-3 tracking-wide transition-colors"
              style={titleShadow}
            >
              <ArrowLeft className="w-4 h-4" />
              {eyebrowZh}
            </button>
          ) : (
            <span className="text-sm sm:text-base font-bold text-white mb-2 sm:mb-3 tracking-wide" style={titleShadow}>
              {eyebrowZh}
            </span>
          )
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide" style={titleShadow}>
          {titleZh}
        </h1>
        {descriptionZh && (
          <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-white/90 leading-relaxed" style={titleShadow}>
            {descriptionZh}
          </p>
        )}
      </div>
      {quickLinks && (
        <div className="hidden lg:flex absolute inset-x-0 bottom-0 z-10 justify-center gap-20 xl:gap-28 pt-12 pb-5 bg-gradient-to-t from-black/60 to-transparent">
          {quickLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={link.onClick}
              className="group flex flex-col items-center gap-2 text-white cursor-pointer"
              style={titleShadow}
            >
              <span className="transition-transform duration-200 group-hover:-translate-y-0.5">
                <Anchor className="w-6 h-6 sm:w-7 sm:h-7" />
              </span>
              <span className="text-base font-bold tracking-wide border-b-2 border-transparent group-hover:border-white transition-colors">
                {link.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </section>
  );
};
