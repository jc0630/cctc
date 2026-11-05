import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ZoomIn } from 'lucide-react';

interface ImageLightboxProps {
  image: string;
  imageAlt: string;
  onClose: () => void;
}

// Full-size lightbox for a zoomed image — click the backdrop, the close
// button, or Escape to dismiss. Body scroll is locked while open so the page
// behind the overlay doesn't also scroll. Shared by every page with an
// info-dense diagram/map that needs a closer look than its in-flow size
// allows (see ZoomButton below for the trigger).
//
// Rendered via a portal straight into document.body: every call site lives
// inside PageSection's FadeInSection (a Framer Motion div), and Motion keeps
// a `transform` on that element even at rest — which makes it a containing
// block for `position: fixed` descendants per the CSS spec, trapping a
// plain-DOM lightbox inside that section instead of over the full viewport.
// A portal sidesteps that regardless of how deep the trigger is nested.
export const ImageLightbox: React.FC<ImageLightboxProps> = ({ image, imageAlt, onClose }) => {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-8"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white transition-colors"
      >
        <X className="w-7 h-7 sm:w-8 sm:h-8" />
      </button>
      <img
        src={image}
        alt={imageAlt}
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-full w-auto h-auto object-contain rounded-[var(--radius-panel)]"
      />
    </div>,
    document.body
  );
};

// Trigger button overlaid on a zoomable image — pair with ImageLightbox.
export const ZoomButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 flex items-center gap-1.5 rounded-full bg-black/60 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 backdrop-blur-sm hover:bg-black/75 transition-colors"
  >
    <ZoomIn className="w-3.5 h-3.5" />
    放大檢視
  </button>
);
