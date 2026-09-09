import React from 'react';
import { Play } from 'lucide-react';
import { Language, VideoItem } from '../types';
import { VIDEO_ITEMS } from '../data/content';

interface VideoSectionProps {
  language: Language;
  onPlayVideo: (video: VideoItem) => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({
  language,
  onPlayVideo
}) => {
  const currentVideo = VIDEO_ITEMS[0];

  return (
    <section
      id="video-section"
      className="relative w-full py-12 sm:py-16 bg-white"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-8 gap-4">
          <h2 className="section-title text-3xl sm:text-4xl font-bold tracking-tight">
            {language === 'zh' ? '影音專區' : 'Video Hub'}
          </h2>
          <span className="section-title-rule mx-auto" />
        </div>

        <div className="relative w-full max-w-5xl mx-auto mt-4">
          {/* Main Video Container */}
          <div
            onClick={() => onPlayVideo(currentVideo)}
            className="relative bg-white rounded-[var(--radius-panel)] p-2 sm:p-3 layer-shadow-raised border border-slate-200 cursor-pointer group"
          >
            <div className="relative w-full aspect-video rounded-[var(--radius-card)] overflow-hidden bg-slate-900 border border-slate-800">
              <video
                src={`${currentVideo.src}#t=0.1`}
                muted
                preload="metadata"
                playsInline
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-[var(--color-orange)]/80 group-hover:border-[var(--color-orange)] transition-all duration-300">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-2" />
                </div>
              </div>

              {/* Video Meta Data Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold">
                      {language === 'zh' ? currentVideo.titleZh : currentVideo.titleEn}
                    </h3>
                    <p className="text-sm text-white/70 mt-1">{currentVideo.durationLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
