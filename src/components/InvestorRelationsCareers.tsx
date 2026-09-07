import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface InvestorRelationsCareersProps {
  language: Language;
  onOpenInvestor: () => void;
  onOpenCareers: () => void;
}

// Drop /public/images/投資人.jpg and /public/images/人才招募.jpg to replace —
// falls back to the placeholders below until those files exist.
const INVESTOR_IMAGE = '/images/投資人.jpg';
const INVESTOR_IMAGE_FALLBACK =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDnVdb6QJ6ZWtv-C9NyoJca_eVXD5XgKRZ0aa1664-BGiTf-BBISbRpdQfGRjD3RBuZxf_aseuuJhA0K8igicm1KUb5PTwhP0_uMPNX5Hb2iix993JeWdai3KfUNLLj36yIuMmGZ2Lcwwr9Gfp3zhR-gZN3O9OFRl95gJSru6ymKj5NGOatxzCaMMFao6QPOC6y1PHPfgjBjSR_XfckdbdGGz35v0Wy7zS8oNFdDeT6D59POt1dvfTd3A';
const CAREERS_IMAGE = '/images/人才招募.jpg';
const CAREERS_IMAGE_FALLBACK =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBKXeGKrMZ_2LoRRxNAvW21W8-x0_HSBZ3X2q8Vlg5ywt83WIpXTQa_QPZaKwPkMQhFzVfBBdPGunLfpO0J8YLfZ2aY1BOw7bx9MuRyfc-MGrZqXWHMWqzyMAwOUAJcBo9IxqoAcByc_uTC6JyGsp8_wep14MTIa1kY90RFj12zjt1LZVbyByRjpIW-0ArO2tp0LSJSZmmOXCZEwP-_ngLETIkgKWGKHiW-RVemd9dMTuBg6dsBpuDNWw';

const TEXT_SHADOW = { textShadow: '0 2px 10px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.5)' };

export const InvestorRelationsCareers: React.FC<InvestorRelationsCareersProps> = ({
  language,
  onOpenInvestor,
  onOpenCareers
}) => {
  return (
    <section className="w-full py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Block 1: Investor Relations — full-width photo, no panel, white text + shadow */}
          <div
            id="investor-relations"
            className="group relative overflow-hidden rounded-[var(--radius-panel)] aspect-[4/3] sm:aspect-[16/11] layer-shadow-soft"
          >
            <img
              src={INVESTOR_IMAGE}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = INVESTOR_IMAGE_FALLBACK;
              }}
              alt={language === 'zh' ? '投資人專區' : 'Investor Relations'}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
            {/* faint edge fade so white text stays legible — not a color wash */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent pointer-events-none" />

            <div className="absolute left-6 right-6 bottom-6 sm:left-8 sm:bottom-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={TEXT_SHADOW}>
                {language === 'zh' ? '投資人專區' : 'Investor Relations'}
              </h3>
              <button
                id="investor-cta-btn"
                onClick={onOpenInvestor}
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[var(--color-blue-900)] px-6 py-3 rounded-full font-bold text-sm transition-colors duration-200 cursor-pointer group/btn"
              >
                <span>{language === 'zh' ? '進入專區' : 'Learn More'}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Block 2: Careers — identical structure, different photo */}
          <div
            id="careers"
            className="group relative overflow-hidden rounded-[var(--radius-panel)] aspect-[4/3] sm:aspect-[16/11] layer-shadow-soft"
          >
            <img
              src={CAREERS_IMAGE}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = CAREERS_IMAGE_FALLBACK;
              }}
              alt={language === 'zh' ? '人才招募' : 'Careers'}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent pointer-events-none" />

            <div className="absolute left-6 right-6 bottom-6 sm:left-8 sm:bottom-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={TEXT_SHADOW}>
                {language === 'zh' ? '人才招募' : 'Careers'}
              </h3>
              <button
                id="careers-cta-btn"
                onClick={onOpenCareers}
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[var(--color-blue-900)] px-6 py-3 rounded-full font-bold text-sm transition-colors duration-200 cursor-pointer group/btn"
              >
                <span>{language === 'zh' ? '加入我們' : 'Join Us'}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
