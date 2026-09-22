import React, { useState } from 'react';
import { ArrowUp, Phone, Mail, Plus } from 'lucide-react';
import { Language } from '../types';
import { LOGO_URL } from '../data/content';

interface FooterProps {
  language: Language;
  onNavigateSection: (sectionId: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
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
      { labelZh: '台中港貨櫃集散站（10-11號碼頭）', labelEn: 'Taichung Berths 10-11', sectionId: 'operations' },
      { labelZh: '台中港貨櫃集散站（31號碼頭）', labelEn: 'Taichung Berth 31', sectionId: 'operations' }
    ]
  },
  {
    titleZh: '快速服務',
    titleEn: 'Quick Services',
    links: [
      { labelZh: '櫃動查詢', labelEn: 'Container Tracking', sectionId: 'services' },
      { labelZh: '船期查詢', labelEn: 'Berth Schedule', sectionId: 'services' },
      { labelZh: 'LINE BOT', labelEn: 'LINE BOT', sectionId: 'services' },
      { labelZh: '表單下載', labelEn: 'Document Downloads', sectionId: 'services' }
    ]
  }
];

export const Footer: React.FC<FooterProps> = ({
  language,
  onNavigateSection,
  onOpenPrivacy,
  onOpenTerms
}) => {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

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
    <footer
      id="site-footer"
      className="relative w-full bg-[var(--color-blue-100)] text-[var(--color-blue-800)]"
    >
      {/* Tier 1: 5-column sitemap menu — plain grid on desktop, accordion on mobile */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 border-b border-slate-200">
        {/* Desktop / tablet: always-expanded columns */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-6">
          {FOOTER_COLUMNS.map((col, idx) => (
            <div key={idx}>
              <h4 className="text-sm font-bold text-[var(--color-blue-800)] mb-4 pb-2 border-b-2 border-[var(--color-orange)] inline-block">
                {language === 'zh' ? col.titleZh : col.titleEn}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <button
                      onClick={() => onNavigateSection(link.sectionId)}
                      className="text-left text-xs sm:text-sm text-slate-600 hover:text-[var(--color-orange)] transition-colors cursor-pointer"
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
        <div className="md:hidden -mx-4 sm:-mx-6">
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
                          className="text-left text-sm text-slate-600 hover:text-[var(--color-orange)] transition-colors cursor-pointer"
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

      {/* Tier 2: Company info — logo stacked above the company name, same logo size as the header */}
      <div className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <img
              src={LOGO_URL}
              alt="中國貨櫃 CCTC"
              className="h-12 sm:h-[3.25rem] md:h-[3.75rem] w-auto object-contain"
            />
            <div className="text-center sm:text-left">
              <p className="text-sm font-bold text-[var(--color-blue-800)]">
                {language === 'zh' ? '中國貨櫃運輸股份有限公司' : 'China Container Terminal Corporation'}
              </p>
              <p className="text-xs text-slate-500">
                {language === 'zh' ? 'China Container Terminal Corporation' : 'TWSE: 2613'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 sm:gap-6">
            <a href="tel:0286482111" className="flex items-center gap-2.5 group">
              <span className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center shrink-0 group-hover:border-[var(--color-orange)] group-hover:text-[var(--color-orange)] transition-colors">
                <Phone className="w-4 h-4" />
              </span>
              <span className="text-sm font-mono">(02) 8648-2111</span>
            </a>
            <a href="mailto:service@cctcorp.com.tw" className="flex items-center gap-2.5 group">
              <span className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center shrink-0 group-hover:border-[var(--color-orange)] group-hover:text-[var(--color-orange)] transition-colors">
                <Mail className="w-4 h-4" />
              </span>
              <span className="text-sm font-bold">{language === 'zh' ? '聯絡我們' : 'Contact Us'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Tier 3: Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span>© 2026 中國貨櫃運輸股份有限公司 China Container Terminal Corp.</span>
          <span className="hidden sm:inline text-slate-300">|</span>
          <button
            onClick={onOpenPrivacy}
            className="hover:text-[var(--color-orange)] transition-colors cursor-pointer"
          >
            {language === 'zh' ? '隱私權保護政策' : 'Privacy Policy'}
          </button>
          <span className="text-slate-300">|</span>
          <button
            onClick={onOpenTerms}
            className="hover:text-[var(--color-orange)] transition-colors cursor-pointer"
          >
            {language === 'zh' ? '資訊安全及免責聲明' : 'Security & Disclaimer'}
          </button>
        </div>

        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-pill)] border border-slate-200 hover:border-[var(--color-orange)] text-[var(--color-blue-800)] hover:text-[var(--color-orange)] bg-white transition-all cursor-pointer shadow-2xs font-semibold"
        >
          <span>{language === 'zh' ? '回到頁首' : 'Back to Top'}</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
