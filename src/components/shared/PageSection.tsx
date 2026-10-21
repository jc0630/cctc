import React from 'react';
import { FadeInSection } from './FadeInSection';

interface PageSectionProps {
  id?: string;
  /** Default true: wraps content in the scroll-fade-in behavior every
   * section on these inner pages already uses. Set false for a section that
   * must render immediately. */
  fade?: boolean;
  children: React.ReactNode;
}

// The "w-full py-[...] > max-w-7xl mx-auto px-[...] > FadeInSection" wrapper
// was copy-pasted verbatim at every section boundary across the Company
// Profile, Sustainability Strategy and Taichung Depot pages (and inside
// SplitSection). Centralizing it here means every "section" on these pages
// maps onto exactly one component — the unit a future page-builder/CMS
// rebuild (e.g. WordPress blocks) would also componentize at.
export const PageSection: React.FC<PageSectionProps> = ({ id, fade = true, children }) => {
  const content = <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>;
  return (
    <section id={id} className="w-full py-[20px] sm:py-[35px] lg:py-[50px]">
      {fade ? <FadeInSection>{content}</FadeInSection> : content}
    </section>
  );
};
