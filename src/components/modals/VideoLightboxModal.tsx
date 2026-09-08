import React, { useState, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, ShieldCheck } from 'lucide-react';
import { Language, VideoItem } from '../../types';

interface VideoLightboxModalProps {
  video: VideoItem | null;
  onClose: () => void;
  language: Language;
}

export const VideoLightboxModal: React.FC<VideoLightboxModalProps> = ({
  video,
  onClose,
  language
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!video) return null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      id="video-lightbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-slate-900 rounded-sm overflow-hidden shadow-2xl border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-3.5 bg-slate-900 border-b border-slate-800 text-white">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]"></span>
            <span className="text-xs font-mono font-bold tracking-wider text-slate-300">
              {language === 'zh' ? video.titleZh : video.titleEn} · {video.durationLabel}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <video
            key={video.id}
            ref={videoRef}
            src={video.src}
            autoPlay
            playsInline
            loop
            className="w-full h-full object-cover"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Custom Controls Bar */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="w-9 h-9 rounded-full bg-[#f97316] hover:bg-[#ea580c] flex items-center justify-center text-white transition-colors cursor-pointer shadow-sm"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
              </button>

              <button
                onClick={toggleMute}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-300 hidden sm:inline">
                {language === 'zh' ? video.titleZh : video.titleEn}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
