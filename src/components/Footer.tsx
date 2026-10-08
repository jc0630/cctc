import React, { useEffect, useState } from 'react';
import { ChevronUp, Phone, Mail, MapPin, Plus } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  language: Language;
  onNavigateSection: (sectionId: string) => void;
}

interface FooterLink {
  labelZh: string;
  labelEn: string;
  sectionId: string;
}

interface FooterColumn {
  titleZh: string;
  titleEn: string;
  links: FooterLink[];
}

// Every link routes to the closest matching real section on this one-page
// site (there are no separate sub-pages yet) — a sitemap footer still needs
// each item to go somewhere real rather than dead-end.
const FOOTER_COLUMNS: FooterColumn[] = [
  {
    titleZh: '關於中櫃',
    titleEn: 'About Us',
    links: [
      { labelZh: '公司簡介', labelEn: 'Company Profile', sectionId: 'about' },
      { labelZh: '中櫃大事記', labelEn: 'Milestones', sectionId: 'about' },
      { labelZh: '獲獎及認證', labelEn: 'Awards & Certifications', sectionId: 'about' },
      { labelZh: '人才招募', labelEn: 'Careers', sectionId: 'careers' },
      { labelZh: '最新消息', labelEn: 'News', sectionId: 'news' },
      { labelZh: '聯絡資訊', labelEn: 'Contact', sectionId: 'site-footer' },
      { labelZh: '採購資訊', labelEn: 'Procurement', sectionId: 'about' }
    ]
  },
  {
    titleZh: '企業永續',
    titleEn: 'Sustainability',
    links: [
      { labelZh: '經營者的話', labelEn: "Management's Message", sectionId: 'about' },
      { labelZh: '永續發展策略', labelEn: 'Sustainability Strategy', sectionId: 'esg' },
      { labelZh: '利害關係人', labelEn: 'Stakeholders', sectionId: 'esg' },
      { labelZh: '風險管理', labelEn: 'Risk Management', sectionId: 'esg' },
      { labelZh: '供應鏈管理', labelEn: 'Supply Chain Management', sectionId: 'esg' },
      { labelZh: '職場健康安全', labelEn: 'Workplace Health & Safety', sectionId: 'esg' }
    ]
  },
  {
    titleZh: '投資人服務',
    titleEn: 'Investor Services',
    links: [
      { labelZh: '公司治理', labelEn: 'Corporate Governance', sectionId: 'esg' },
      { labelZh: '股東專區', labelEn: 'Shareholder Zone', sectionId: 'investor-relations' },
      { labelZh: '聯絡資訊', labelEn: 'Contact', sectionId: 'site-footer' }
    ]
  },
  {
    titleZh: '營運服務',
    titleEn: 'Operations',
    links: [
      { labelZh: '據點圖', labelEn: 'Terminal Map', sectionId: 'operations' },
      { labelZh: '五堵集散站', labelEn: 'Wudu Depot', sectionId: 'operations' },
      { labelZh: '基隆碼頭集散站', labelEn: 'Keelung Terminal', sectionId: 'operations' },
      { labelZh: '台中貨櫃集散站', labelEn: 'Taichung Depot', sectionId: 'operations' },
      { labelZh: '高雄貨櫃集散站', labelEn: 'Kaohsiung Depot', sectionId: 'operations' }
    ]
  },
  {
    titleZh: '服務專區',
    titleEn: 'Service Center',
    links: [
      { labelZh: '櫃動查詢', labelEn: 'Container Tracking', sectionId: 'services' },
      { labelZh: '船席動態', labelEn: 'Berth Status', sectionId: 'services' },
      { labelZh: 'LINE BOT', labelEn: 'LINE BOT', sectionId: 'services' },
      { labelZh: '表單下載', labelEn: 'Document Downloads', sectionId: 'services' }
    ]
  }
];

export const Footer: React.FC<FooterProps> = ({
  language,
  onNavigateSection
}) => {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleColumn = (idx: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  return (
    <>
    <footer
      id="site-footer"
      className="relative w-full text-[var(--color-blue-800)]"
    >
      {/* Tier 1: 5-column sitemap menu — plain grid on desktop, accordion on
          mobile. Lightest blue band; no rule against Tier 2/3 below — the
          shift to the deeper blue-300/50 band reads as the section break. */}
      <div className="bg-[var(--color-blue-100)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop / tablet: always-expanded columns */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-6 pt-10 pb-10 sm:pt-12 sm:pb-12">
          {FOOTER_COLUMNS.map((col, idx) => (
            <div key={idx}>
              <h4 className="text-base font-bold text-[var(--color-blue-800)] mb-4 pb-2 border-b-2 border-[var(--color-orange)] inline-block">
                {language === 'zh' ? col.titleZh : col.titleEn}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <button
                      onClick={() => onNavigateSection(link.sectionId)}
                      className="text-left text-sm sm:text-base text-slate-600 hover:text-[var(--color-orange)] transition-colors cursor-pointer"
                    >
                      {language === 'zh' ? link.labelZh : link.labelEn}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile: collapsible accordion, one row per category */}
        <div className="md:hidden -mx-4 sm:-mx-6 pt-2 pb-2">
          {FOOTER_COLUMNS.map((col, idx) => {
            const isOpen = openIndices.has(idx);
            return (
              <div key={idx} className="border-b border-slate-200">
                <button
                  onClick={() => toggleColumn(idx)}
                  className="w-full flex items-center justify-between px-4 sm:px-6 py-4 text-left cursor-pointer"
                >
                  <span className="text-base font-bold text-[var(--color-blue-800)]">
                    {language === 'zh' ? col.titleZh : col.titleEn}
                  </span>
                  <Plus
                    className={`w-5 h-5 text-[var(--color-orange)] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                  />
                </button>
                {isOpen && (
                  <ul className="px-4 sm:px-6 pb-4 space-y-3">
                    {col.links.map((link, i) => (
                      <li key={i}>
                        <button
                          onClick={() => onNavigateSection(link.sectionId)}
                          className="text-left text-base text-slate-600 hover:text-[var(--color-orange)] transition-colors cursor-pointer"
                        >
                          {language === 'zh' ? link.labelZh : link.labelEn}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
      </div>

      {/* Tier 2 + 3: Company info + Copyright share one deeper blue band —
          still light (blue-300 at half opacity), just a visible step down
          from Tier 1's blue-100, no divider rules needed. */}
      <div className="bg-[var(--color-blue-300)]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className={`font-bold text-[var(--color-blue-800)] ${language === 'zh' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
              {language === 'zh' ? '中國貨櫃運輸股份有限公司' : 'China Container Terminal Corporation'}
            </p>
            <p className="text-sm text-slate-500 mt-1">
              {language === 'zh' ? 'China Container Terminal Corporation' : '中國貨櫃運輸股份有限公司'}
            </p>
            <p className="text-sm text-slate-500 mt-2 flex items-center justify-center sm:justify-start gap-1.5">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>
                {language === 'zh'
                  ? '221041 新北市汐止區大同路三段275號'
                  : 'No. 275, Sec. 3, Datong Rd., Xizhi Dist., New Taipei City 221041'}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-5 sm:gap-6">
            <a href="tel:0286482111" className="flex items-center gap-2.5 group">
              <span className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center shrink-0 group-hover:border-[var(--color-orange)] group-hover:text-[var(--color-orange)] transition-colors">
                <Phone className="w-4 h-4" />
              </span>
              <span className="text-sm font-mono">(02) 8648-2111</span>
            </a>
            <button
              onClick={() => onNavigateSection('investor-relations')}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <span className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center shrink-0 group-hover:border-[var(--color-orange)] group-hover:text-[var(--color-orange)] transition-colors">
                <Mail className="w-4 h-4" />
              </span>
              <span className="text-sm font-bold">{language === 'zh' ? '聯絡我們' : 'Contact Us'}</span>
            </button>
          </div>
        </div>

        {/* Tier 3: Copyright — single centered row now that Back to Top
            has moved to its own viewport-fixed button below. */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500">
          <span>Copyright © China Container Terminal Corporation. All Rights Reserved.</span>
          <span className="hidden sm:inline text-slate-300">｜</span>
          <span>{language === 'zh' ? '隱私權保護政策' : 'Privacy Policy'}</span>
          <span className="text-slate-300">｜</span>
          <span>{language === 'zh' ? '資訊安全及免責聲明' : 'Security & Disclaimer'}</span>
        </div>
      </div>
    </footer>

    {/* Back to Top — fixed to the viewport, not the footer, so it stays
        anchored bottom-right and appears as soon as the page is scrolled. */}
    <button
      id="scroll-to-top-btn"
      onClick={scrollToTop}
      aria-label={language === 'zh' ? '回到頁首' : 'Back to Top'}
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[var(--color-blue-500)] hover:bg-[var(--color-cta-hover)] text-white flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer ${
        showScrollTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <ChevronUp className="w-6 h-6 sm:w-7 sm:h-7" />
    </button>
    </>
  );
};
