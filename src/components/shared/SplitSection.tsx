import React from 'react';
import { FadeInSection } from './FadeInSection';

interface SplitSectionProps {
  id?: string;
  titleZh: string;
  /** true = image on the left at desktop widths (text stays first in DOM so
   * mobile always reads text → image, per the brief). */
  reverse?: boolean;
  image: string;
  imageAlt: string;
  imageCaption?: string;
  children: React.ReactNode;
}

// Reusable alternating text/image block — desktop: left-text/right-image or
// mirrored via `reverse`; mobile: always single column, image below text
// (text div is always first in DOM regardless of `reverse`, which only
// reorders columns at the lg breakpoint). Image framing (blue-300 border +
// layer-shadow-raised) matches the homepage's featured-panel treatment
// (see ESGSection.tsx / OnlineServices.tsx) rather than a plain gray border.
export const SplitSection: React.FC<SplitSectionProps> = ({ id, titleZh, reverse, image, imageAlt, imageCaption, children }) => {
  return (
    <section id={id} className="w-full py-[20px] sm:py-[35px] lg:py-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className={reverse ? 'lg:order-2' : ''}>
              <h2 className="section-title text-2xl sm:text-3xl font-bold tracking-tight mb-5 sm:mb-6">{titleZh}</h2>
              <div className="flex flex-col gap-4 text-sm sm:text-base text-[var(--color-text-secondary)] leading-loose">
                {children}
              </div>
            </div>
            <div className={reverse ? 'lg:order-1' : ''}>
              <img
                src={image}
                alt={imageAlt}
                className="w-full rounded-[var(--radius-panel)] object-cover border border-[var(--color-blue-300)]/50 layer-shadow-raised"
              />
              {imageCaption && (
                <p className="mt-2 text-xs sm:text-sm text-[var(--color-text-secondary)] leading-snug">{imageCaption}</p>
              )}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};
