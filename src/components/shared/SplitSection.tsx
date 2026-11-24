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
          {/* The <img> stays in normal flow (not absolutely positioned) so it
              keeps contributing its own content height to this wrapper — on
              mobile the grid row has no externally-stretched height to
              flex-grow into, so an auto-height flex item with no in-flow
              content collapses to 0 (confirmed by testing position:absolute
              here). */}
          <div className="relative flex-1 min-h-0">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-auto lg:h-full object-cover rounded-[var(--radius-panel)] border border-[var(--color-blue-300)]/50 layer-shadow-raised"
            />
          </div>
          {imageCaption && (
            <p className="mt-2 text-xs sm:text-sm text-[var(--color-text-secondary)] leading-snug">{imageCaption}</p>
          )}
        </div>
      </div>
    </PageSection>
  );
};
