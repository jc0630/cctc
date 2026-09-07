import React from 'react';
import { Play } from 'lucide-react';
import { Language } from '../types';

interface VideoSectionProps {
  language: Language;
  onPlayVideo: () => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({
  language,
  onPlayVideo
}) => {
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
            onClick={onPlayVideo}
            className="relative bg-white rounded-[var(--radius-panel)] p-2 sm:p-3 layer-shadow-raised border border-slate-200 cursor-pointer group"
          >
          <div className="relative w-full aspect-video rounded-[var(--radius-card)] overflow-hidden bg-slate-900 border border-slate-800">
            {/* Using a placeholder image that looks like a video */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW4n3uB0TpH30xziswhzG2djuiuaBVSwCPNAZjwg5sNSIW7Wv52M32gvhgr9xG95n8vjgxygh6lcVpFtgpdP8cBZMXcHn_kehFBzuwPfpon3QqxIUeAXVwMYzcLlFged4y9kL_iyy1bpWNjLaFRksuI6eb0BZ9Toq6HkQC_3enJa4_lrPhzpJ96eMbkKqfAJFPKb3FJbp4NiYZVTQQGW0CzSUqoRM7z5fJsBvY_y5Hhp15tl_bv-c8Tw"
              alt="Corporate Video"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-[var(--color-primary)]/80 group-hover:border-[var(--color-primary)] transition-all duration-300">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-2" />
              </div>
            </div>

            {/* Video Meta Data Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="flex items-center justify-between text-white">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">
                    {language === 'zh' ? '中國貨櫃企業形象影片' : 'CCTC Corporate Video'}
                  </h3>
                  <p className="text-sm text-white/70 mt-1">HD · 03:20</p>
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
