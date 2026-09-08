import React from 'react';
import { ArrowUp, MapPin, Phone, Printer, Mail, ShieldCheck, Globe } from 'lucide-react';
import { Language } from '../types';
import { LOGO_URL } from '../data/content';

interface FooterProps {
  language: Language;
  onNavigateSection: (sectionId: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

const CONTACT_LOCATIONS = [
  {
    addressZh: '新北市汐止區大同路三段 275 號',
    addressEn: 'No. 275, Sec. 3, Datong Rd., Xizhi Dist., New Taipei City',
    phone: '(02) 8648-2211',
    fax: '(02) 2649-1299'
  },
  {
    addressZh: '基隆市中山區中山三路 56 號',
    addressEn: 'No. 56, Zhongshan 3rd Rd., Zhongshan Dist., Keelung City',
    phone: '(02) 8643-0168',
    fax: '(02) 8643-0169'
  },
  {
    addressZh: '臺中市清水區中橫十三路 15 號',
    addressEn: 'No. 15, Zhonghengshisan Rd., Qingshui Dist., Taichung City',
    phone: '(02) 8643-0168',
    fax: '(02) 8643-0169'
  },
  {
    addressZh: '高雄市鼓山區臨海一路 21 號之 7',
    addressEn: 'No. 21-7, Linhai 1st Rd., Gushan Dist., Kaohsiung City',
    phone: '(07) 551-9987',
    fax: '(07) 532-2708'
  }
];

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
      className="relative w-full bg-white text-[var(--color-blue-800)] pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
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
                <a href="tel:0286482111" className="hover:text-[#f97316] font-mono font-semibold">
                  (02) 8648-2111 (代表號)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#f97316] shrink-0" />
                <a href="mailto:service@cctcorp.com.tw" className="hover:text-[#f97316] font-mono">
                  service@cctcorp.com.tw
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Regional Contact Addresses (span 8) */}
          <div className="lg:col-span-8">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-blue-800)] pb-2 mb-3 border-b-2 border-[#f97316] inline-block">
              {language === 'zh' ? '服務據點' : 'LOCATIONS'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
              {CONTACT_LOCATIONS.map((loc, idx) => (
                <div key={idx} className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#f97316] shrink-0 mt-0.5" />
                    <span>{language === 'zh' ? loc.addressZh : loc.addressEn}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#f97316] shrink-0" />
                    <span className="font-mono">{loc.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Printer className="w-4 h-4 text-[#f97316] shrink-0" />
                    <span className="font-mono">{loc.fax}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-3">
            <span>© 2024 中國貨櫃股份有限公司 China Container Terminal Corp.</span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#f97316] transition-colors cursor-pointer"
            >
              {language === 'zh' ? '隱私權保護政策' : 'Privacy Policy'}
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#f97316] transition-colors cursor-pointer"
            >
              {language === 'zh' ? '資訊安全及免責聲明' : 'Security & Disclaimer'}
            </button>
          </div>

          <button
            id="scroll-to-top-btn"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-slate-200 hover:border-[#f97316] text-[var(--color-blue-800)] hover:text-[#f97316] bg-white transition-all cursor-pointer shadow-2xs font-semibold"
          >
            <span>{language === 'zh' ? '回到頁首' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#f97316]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
