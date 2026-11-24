import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ImageLightbox, ZoomButton } from './ImageLightbox';
import { FaqContentItem } from '../../types';

interface FaqAccordionProps {
  items: FaqContentItem[];
}

// Single-open accordion (opening one question closes whichever was open) —
// used for the Company Profile page's FAQ section. Only the open panel is
// mounted, matching the site's existing on-demand-render pattern rather than
// rendering every panel hidden.
export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  const [openNumber, setOpenNumber] = useState<number | null>(null);
  const [zoomImage, setZoomImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => {
        const isOpen = item.number === openNumber;
        const triggerId = `faq-${item.number}-trigger`;
        const panelId = `faq-${item.number}-panel`;
        return (
          <div key={item.number} className="rounded-[var(--radius-card)] border border-slate-200 bg-white layer-shadow-soft overflow-hidden">
            <h3>
              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenNumber(isOpen ? null : item.number)}
                className="w-full flex items-start gap-3 text-left px-4 sm:px-6 py-3.5 sm:py-4 hover:bg-[var(--color-blue-100)] transition-colors cursor-pointer"
              >
                <span className="shrink-0 w-7 font-extrabold text-[var(--color-cta)] text-sm sm:text-base leading-snug">Q{item.number}</span>
                <span className="flex-1 min-w-0 font-bold text-[var(--color-ink)] text-sm sm:text-base leading-snug">{item.question}</span>
                <ChevronDown
                  className={`shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-0.5 text-[var(--color-cta)] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </h3>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                className="px-4 sm:px-6 pb-5 sm:pb-6 pt-4 flex flex-col gap-3 text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed border-t border-slate-100"
              >
                <p>
                  <span className="shrink-0 font-extrabold text-[var(--color-cta)] mr-3">A{item.number}</span>
                  {item.answer}
                </p>
                {item.bullets && (
                  <ul className="flex flex-col gap-2 pl-5 sm:pl-10 list-disc marker:text-[var(--color-cta)]">
                    {item.bullets.map((bullet, i) => (
                      <li key={i}>
                        <strong className="font-bold text-[var(--color-ink)]">{bullet.label}</strong>：{bullet.text}
                      </li>
                    ))}
                  </ul>
                )}
                {item.image && (
                  <figure className="flex flex-col">
                    {/* Scales down to fit the viewport at every width instead
                        of keeping a min-width floor, so mobile shows the
                        whole infographic with no horizontal scroll; the
                        zoom button still opens it full-size for a closer
                        look at the dense text inside. */}
                    <div className="relative rounded-[var(--radius-panel)] border border-[var(--color-blue-300)]/50 layer-shadow-raised">
                      <img src={item.image.src} alt={item.image.alt} className="w-full h-auto" />
                      <ZoomButton onClick={() => setZoomImage({ src: item.image!.src, alt: item.image!.alt })} />
                    </div>
                    <figcaption className="mt-2 text-xs sm:text-sm leading-snug">{item.image.caption}</figcaption>
                  </figure>
                )}
              </div>
            )}
          </div>
        );
      })}
      {zoomImage && (
        <ImageLightbox image={zoomImage.src} imageAlt={zoomImage.alt} onClose={() => setZoomImage(null)} />
      )}
    </div>
  );
};
