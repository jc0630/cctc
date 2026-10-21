import React from 'react';
import { PageSection } from './PageSection';
import { SectionTitle } from './SectionTitle';

interface SplitSectionProps {
  id?: string;
  titleZh: string;
  /** true = image on the left at desktop widths (text stays first in DOM so
   * mobile always reads text → image, per the brief). */
  reverse?: boolean;
  /** Vertical alignment of the two columns at desktop widths. Defaults to
   * 'center', which stretches both columns to the same height so the image
   * fills the space beside the text; 'start' top-aligns them at their own
   * natural heights instead. */
  align?: 'center' | 'start';
  image: string;
  imageAlt: string;
  imageCaption?: string;
  /** For text-dense infographics (e.g. a map with address labels) that would
   * read too small once squeezed into this half-width column — wraps the
   * image in a horizontal-scroll container with a min-width floor instead
   * of shrinking it, same treatment as the Taichung Depot page's site maps. */
  scrollableImage?: boolean;
  children: React.ReactNode;
}

// Reusable alternating text/image block — desktop: left-text/right-image or
// mirrored via `reverse`; mobile: always single column, image below text
// (text div is always first in DOM regardless of `reverse`, which only
// reorders columns at the lg breakpoint). Image framing (blue-300 border +
// layer-shadow-raised) matches the homepage's featured-panel treatment
// (see ESGSection.tsx / OnlineServices.tsx) rather than a plain gray border.
export const SplitSection: React.FC<SplitSectionProps> = ({
  id,
  titleZh,
  reverse,
  align = 'center',
  image,
  imageAlt,
  imageCaption,
  scrollableImage,
  children
}) => {
  return (
    <PageSection id={id}>
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 ${align === 'start' ? 'lg:items-start' : 'lg:items-stretch'}`}>
        <div className={`flex flex-col ${reverse ? 'lg:order-2' : ''}`}>
          <SectionTitle className="mb-5 sm:mb-6">{titleZh}</SectionTitle>
          <div className="flex flex-col gap-4 text-sm sm:text-base text-[var(--color-text-secondary)] leading-loose">
            {children}
          </div>
        </div>
        <div className={`flex flex-col ${reverse ? 'lg:order-1' : ''}`}>
          {scrollableImage ? (
            <div className="flex-1 min-h-0 overflow-x-auto rounded-[var(--radius-panel)] border border-[var(--color-blue-300)]/50 layer-shadow-raised">
              <img src={image} alt={imageAlt} className="min-w-[480px] sm:min-w-[560px] lg:min-w-0 lg:h-full lg:w-auto w-full h-auto" />
            </div>
          ) : (
            <img
              src={image}
              alt={imageAlt}
              className="flex-1 min-h-0 w-full lg:h-full object-cover rounded-[var(--radius-panel)] border border-[var(--color-blue-300)]/50 layer-shadow-raised"
            />
          )}
          {imageCaption && (
            <p className="mt-2 text-xs sm:text-sm text-[var(--color-text-secondary)] leading-snug">{imageCaption}</p>
          )}
        </div>
      </div>
    </PageSection>
  );
};
