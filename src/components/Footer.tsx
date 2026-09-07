import React from 'react';
import { ArrowUp, MapPin, Phone, Mail, ChevronRight, ShieldCheck, Globe } from 'lucide-react';
import { Language } from '../types';
import { LOGO_URL } from '../data/content';

interface FooterProps {
  language: Language;
  onNavigateSection: (sectionId: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onNavigateSection,
  onOpenPrivacy,
  onOpenTerms
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="site-footer"
      className="relative w-full bg-white text-[var(--color-blue-800)] pt-12 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Company Info + 4 Columns Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-200">
          {/* Col 1: Brand & Contact Info (span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={LOGO_URL}
                  alt="中國貨櫃 CCTC"
                  className="h-9 w-auto object-contain"
                />
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal max-w-sm">
                {language === 'zh'
                  ? '中國貨櫃股份有限公司 (TWSE: 2613) 成立於 1967 年，為台灣貨櫃集散與港埠裝卸服務領航者，深耕基隆、五堵與台中港區。'
                  : 'China Container Terminal Corp. (TWSE: 2613), founded in 1967, is Taiwan’s premier container terminal operator connecting international ports.'}
              </p>

              {/* Verified Badge */}
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#f0f7ff] border border-sky-200 text-[#0369a1] text-xs font-semibold rounded-sm mb-5">
                <ShieldCheck className="w-4 h-4 text-[var(--color-primary)]" />
                <span>ISO 9001 · ISO 14001 · ISO 45001 認證</span>
              </div>
            </div>

            {/* Direct Contact Details */}
            <div className="space-y-2 text-xs text-slate-600 font-normal">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#f97316] shrink-0 mt-0.5" />
                <span>
                  {language === 'zh'
                    ? '新北市汐止區大同路三段 193 號 (221412)'
                    : 'No. 193, Sec. 3, Datong Rd., Xizhi Dist., New Taipei City 221412'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#f97316] shrink-0" />
                <a href="tel:0286482111" className="hover:text-[var(--color-primary)] font-mono font-semibold">
                  (02) 8648-2111 (代表號)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#f97316] shrink-0" />
                <a href="mailto:service@cctcorp.com.tw" className="hover:text-[var(--color-primary)] font-mono">
                  service@cctcorp.com.tw
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: About & Services Links (span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-blue-800)] pb-2 mb-3 border-b-2 border-[var(--color-primary)] inline-block">
              {language === 'zh' ? '關於中櫃' : 'ABOUT US'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <button
                  onClick={() => onNavigateSection('about')}
                  className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#f97316]" />
                  <span>{language === 'zh' ? '經營理念與沿革' : 'Milestones'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('about')}
                  className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#f97316]" />
                  <span>{language === 'zh' ? '組織架構與團隊' : 'Leadership'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('about')}
                  className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#f97316]" />
                  <span>{language === 'zh' ? '品質與安全認證' : 'Certifications'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('news')}
                  className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#f97316]" />
                  <span>{language === 'zh' ? '重要獲獎榮譽' : 'Awards & Honors'}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Terminal Operations (span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-blue-800)] pb-2 mb-3 border-b-2 border-[var(--color-blue-800)] inline-block">
              {language === 'zh' ? '營運據點' : 'TERMINALS'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <button
                  onClick={() => onNavigateSection('operations')}
                  className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#f97316]" />
                  <span>{language === 'zh' ? '五堵貨櫃集散站 (HUB)' : 'Wudu Container Depot'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('operations')}
                  className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#f97316]" />
                  <span>{language === 'zh' ? '基隆港貨櫃碼頭' : 'Keelung Port Berth'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('operations')}
                  className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#f97316]" />
                  <span>{language === 'zh' ? '台中港 10-11 號碼頭' : 'Taichung Port Berths 10-11'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('operations')}
                  className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#f97316]" />
                  <span>{language === 'zh' ? '台中港 31 號碼頭' : 'Taichung Port Berth 31'}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Online Services & Investor (span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-blue-800)] pb-2 mb-3 border-b-2 border-[#f97316] inline-block">
              {language === 'zh' ? '線上服務與專區' : 'SERVICES & IR'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <button
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#f97316]" />
                  <span>{language === 'zh' ? '線上櫃動即時查詢' : 'Container Tracking'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#f97316]" />
                  <span>{language === 'zh' ? '各港口即時船席圖' : 'Berth Schedule'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('investor-relations')}
                  className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#f97316]" />
                  <span>{language === 'zh' ? '投資人專區 (TWSE: 2613)' : 'Investor Relations'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('esg')}
                  className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-1 group text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#f97316]" />
                  <span>{language === 'zh' ? 'ESG 永續發展報告書' : 'Sustainability Reports'}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-3">
            <span>© 2024 中國貨櫃股份有限公司 China Container Terminal Corp.</span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[var(--color-primary)] transition-colors cursor-pointer"
            >
              {language === 'zh' ? '隱私權保護政策' : 'Privacy Policy'}
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-[var(--color-primary)] transition-colors cursor-pointer"
            >
              {language === 'zh' ? '資訊安全及免責聲明' : 'Security & Disclaimer'}
            </button>
          </div>

          <button
            id="scroll-to-top-btn"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-slate-200 hover:border-[var(--color-primary)] text-[var(--color-blue-800)] hover:text-[var(--color-primary)] bg-white transition-all cursor-pointer shadow-2xs font-semibold"
          >
            <span>{language === 'zh' ? '回到頁首' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#f97316]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
