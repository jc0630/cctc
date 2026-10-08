import React, { useRef, useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { VIDEO_ITEMS } from '../data/content';

interface VideoSectionProps {
  language: Language;
}

export const VideoSection: React.FC<VideoSectionProps> = ({
  language
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentVideo = VIDEO_ITEMS[currentIndex];
  const hasMultiple = VIDEO_ITEMS.length > 1;

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + VIDEO_ITEMS.length) % VIDEO_ITEMS.length);
  };

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % VIDEO_ITEMS.length);
  };

  // Plays inline, in place, instead of opening a lightbox popup.
  const togglePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    if (isPlaying) {
      el.pause();
    } else {
      el.muted = false;
      el.play();
    }
  };

  return (
    <section
      id="video-section"
      className="relative w-full py-[1.1rem] sm:py-[1.375rem] bg-white"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="section-title text-3xl sm:text-4xl font-bold tracking-tight">
              {language === 'zh' ? '影音專區' : 'Video Hub'}
            </h2>
          </div>
        </div>

        {/* Capped width + auto margins — mirrors the MSC / DP World video-hub
            layout, where the player reads as one modest, framed element with
            breathing room on both sides instead of a full-bleed block. */}
        <div className="relative w-full max-w-3xl mx-auto">
          {/* Video fills the panel directly — no white frame/border around it */}
          <div
            onClick={togglePlay}
            className="relative w-full aspect-video rounded-[var(--radius-panel)] overflow-hidden bg-slate-900 cursor-pointer group"
          >
            <video
              key={currentVideo.id}
              ref={videoRef}
              src={`${currentVideo.src}#t=0.1`}
              muted
              controls={isPlaying}
              preload="metadata"
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                isPlaying ? '' : 'opacity-90 group-hover:scale-105'
              }`}
            />

            {/* Play Button Overlay — hidden once playing; native controls take over */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-[var(--color-orange)]/80 group-hover:border-[var(--color-orange)] transition-all duration-300">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-2" />
                </div>
              </div>
            )}

            {/* Video Meta Data Bar */}
            {!isPlaying && (
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold">
                      {language === 'zh' ? currentVideo.titleZh : currentVideo.titleEn}
                    </h3>
                    <p className="text-sm text-white/70 mt-1">{currentVideo.durationLabel}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Prev / Next Controls */}
            {hasMultiple && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  aria-label={language === 'zh' ? '上一部影片' : 'Previous video'}
                  className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-white/20 text-white backdrop-blur-sm flex items-center justify-center transition-all border border-white/30 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  aria-label={language === 'zh' ? '下一部影片' : 'Next video'}
                  className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-white/20 text-white backdrop-blur-sm flex items-center justify-center transition-all border border-white/30 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </>
            )}
          </div>

          {/* Carousel Indicator Dots — same interaction language as Taiwan Operations */}
          {hasMultiple && (
            <div className="flex items-center justify-center gap-2 mt-5">
              {VIDEO_ITEMS.map((video, idx) => (
                <button
                  key={video.id}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`${language === 'zh' ? '影片' : 'Video'} ${idx + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex ? 'w-8 bg-[var(--color-orange)]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
