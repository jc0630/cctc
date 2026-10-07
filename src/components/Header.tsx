import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronDown, Plus } from 'lucide-react';
import { Language } from '../types';
import { LOGO_URL } from '../data/content';

interface HeaderProps {
  language: Language;
  onToggleLanguage: (lang: Language) => void;
  onNavigateSection: (sectionId: string) => void;
}

interface NavSubItem {
  labelZh: string;
  labelEn: string;
  sectionId: string;
}

interface NavCategory {
  id: string;
  labelZh: string;
  labelEn: string;
  sectionId: string;
  items: NavSubItem[];
}

// First level only, by design — every category is a hover (desktop) / tap
// (mobile) dropdown of flat links, no nested second/third level anywhere.
// Sub-items route to the closest matching real homepage section since this
// is a one-page site without separate sub-pages yet.
const NAV_CATEGORIES: NavCategory[] = [
  {
    id: 'about',
    labelZh: '關於中櫃',
    labelEn: 'About Us',
    sectionId: 'about',
    items: [
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
    id: 'esg',
    labelZh: '企業永續',
    labelEn: 'Sustainability',
    sectionId: 'esg',
    items: [
      { labelZh: '經營者的話', labelEn: "Management's Message", sectionId: 'about' },
      { labelZh: '永續發展策略', labelEn: 'Sustainability Strategy', sectionId: 'esg' },
      { labelZh: '利害關係人', labelEn: 'Stakeholders', sectionId: 'esg' },
      { labelZh: '風險管理', labelEn: 'Risk Management', sectionId: 'esg' },
      { labelZh: '供應鏈管理', labelEn: 'Supply Chain Management', sectionId: 'esg' },
      { labelZh: '職場健康安全', labelEn: 'Workplace Health & Safety', sectionId: 'esg' }
    ]
  },
  {
    id: 'investor-relations',
    labelZh: '投資人服務',
    labelEn: 'Investor Services',
    sectionId: 'investor-relations',
    items: [
      { labelZh: '公司治理', labelEn: 'Corporate Governance', sectionId: 'esg' },
      { labelZh: '股東專區', labelEn: 'Shareholder Zone', sectionId: 'investor-relations' },
      { labelZh: '聯絡資訊', labelEn: 'Contact', sectionId: 'site-footer' }
    ]
  },
  {
    id: 'operations',
    labelZh: '營運服務',
    labelEn: 'Operations',
    sectionId: 'operations',
    items: [
      { labelZh: '據點圖', labelEn: 'Terminal Map', sectionId: 'operations' },
      { labelZh: '五堵集散站', labelEn: 'Wudu Depot', sectionId: 'operations' },
      { labelZh: '基隆碼頭集散站', labelEn: 'Keelung Terminal', sectionId: 'operations' },
      { labelZh: '台中貨櫃集散站', labelEn: 'Taichung Depot', sectionId: 'operations' },
      { labelZh: '高雄貨櫃集散站', labelEn: 'Kaohsiung Depot', sectionId: 'operations' }
    ]
  },
  {
    id: 'services',
    labelZh: '服務專區',
    labelEn: 'Service Center',
    sectionId: 'services',
    items: [
      { labelZh: '櫃動查詢', labelEn: 'Container Tracking', sectionId: 'services' },
      { labelZh: '船席動態', labelEn: 'Berth Status', sectionId: 'services' },
      { labelZh: 'LINE BOT', labelEn: 'LINE BOT', sectionId: 'services' },
      { labelZh: '表單下載', labelEn: 'Document Downloads', sectionId: 'services' }
    ]
  },
  {
    id: 'careers',
    labelZh: '員工專區',
    labelEn: 'Staff Zone',
    sectionId: 'careers',
    items: [
      { labelZh: '公司福利措施', labelEn: 'Employee Benefits', sectionId: 'careers' },
      { labelZh: '福委會／工會', labelEn: 'Welfare Committee / Union', sectionId: 'careers' }
    ]
  }
];

export const Header: React.FC<HeaderProps> = ({
  language,
  onToggleLanguage,
  onNavigateSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileCategory, setOpenMobileCategory] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // The logo (and therefore header) height changes across breakpoints
  // (h-12 / h-[3.25rem] / h-[3.75rem]), so the mobile drawer's top offset is
  // measured live rather than hardcoded — otherwise the backdrop bleeds up
  // into the header on viewports where the header is taller than assumed.
  useEffect(() => {
    const measure = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const handleNavClick = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onNavigateSection(sectionId);
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileCategory = (id: string) => {
    setOpenMobileCategory((prev) => (prev === id ? null : id));
  };

  return (
    <>
    <header
      ref={headerRef}
      id="site-header"
      className="sticky top-0 w-full z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200 py-3"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#"
            id="brand-logo-link"
            className="flex items-center gap-2.5 group shrink-0"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src={LOGO_URL}
              alt="中國貨櫃 CCTC"
              className="h-12 sm:h-[3.25rem] md:h-[3.75rem] w-auto shrink-0 object-contain transition-transform group-hover:scale-[1.02]"
            />
          </a>
        </div>

        {/* Desktop Navigation — each category is a hover dropdown, first level only */}
        <nav aria-label="主要導覽" className="hidden xl:flex items-center gap-0 2xl:gap-1.5">
          {NAV_CATEGORIES.map((cat) => (
            <div key={cat.id} className="relative group">
              <button
                id={`nav-${cat.id}`}
                onClick={() => handleNavClick(cat.sectionId)}
                className="shrink-0 whitespace-nowrap flex items-center gap-1 text-[20px] font-semibold px-1.5 py-1.5 rounded-sm transition-colors cursor-pointer text-[#0a2540]/80 hover:text-[#0284c7] hover:bg-[#f0f7ff]"
              >
                <span>{language === 'zh' ? cat.labelZh : cat.labelEn}</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {/* Dropdown — first-level items only, opens on hover */}
              <div className="absolute left-0 top-full pt-2 z-50 invisible opacity-0 -translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                <div className="min-w-[220px] bg-white rounded-[var(--radius-card)] border border-slate-200 shadow-lg py-2">
                  {cat.items.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => handleNavClick(item.sectionId)}
                      className="block w-full text-left whitespace-nowrap text-sm font-medium px-4 py-2 text-[#0a2540]/80 hover:text-[#0284c7] hover:bg-[#f0f7ff] transition-colors cursor-pointer"
                    >
                      {language === 'zh' ? item.labelZh : item.labelEn}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        {/* Header Actions: Language Switcher + Search + Portal CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <div
            id="language-switcher"
            className="flex items-center border rounded-[var(--radius-pill)] p-0.5 text-xs font-semibold shadow-xs bg-slate-100/90 border-slate-200"
          >
            <button
              id="lang-zh-btn"
              onClick={() => onToggleLanguage('zh')}
              className={`px-2.5 py-1 rounded-[var(--radius-pill)] text-xs font-bold transition-all cursor-pointer ${
                language === 'zh'
                  ? 'bg-white text-[#0369a1] shadow-xs border border-slate-200/80'
                  : 'text-slate-500 hover:text-[#0a2540]'
              }`}
            >
              繁中
            </button>
            <button
              id="lang-en-btn"
              onClick={() => onToggleLanguage('en')}
              className={`px-2.5 py-1 rounded-[var(--radius-pill)] text-xs font-bold transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-white text-[#0369a1] shadow-xs border border-slate-200/80'
                  : 'text-slate-500 hover:text-[#0a2540]'
              }`}
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? '關閉選單' : '開啟選單'}
            className="xl:hidden w-9 h-9 flex items-center justify-center rounded-full border transition-colors cursor-pointer bg-white text-[#0a2540] hover:text-[#0284c7] border-slate-200 hover:border-[#0284c7]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>

      {/* Mobile Menu Drawer Modal — rendered as a header sibling, not a descendant, so the
          header's backdrop-blur (which creates a CSS containing block for `fixed` children)
          can't collapse this overlay's height. */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="xl:hidden fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex justify-end"
          style={{ top: headerHeight || undefined }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-[340px] bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-slate-200 animate-in slide-in-from-right duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Home — standalone link, not a dropdown category */}
              <div className="border-t border-slate-100 mt-4">
                <button
                  onClick={() => handleNavClick('home')}
                  className="w-full flex items-center py-4 px-5 text-left border-b border-slate-100 transition-colors cursor-pointer hover:bg-slate-50"
                >
                  <span className="text-[18px] font-medium text-[var(--color-blue-900)]">
                    {language === 'zh' ? '首頁' : 'Home'}
                  </span>
                </button>

                {/* 6 main categories — tap to expand first-level items, tap again to collapse */}
                {NAV_CATEGORIES.map((cat) => {
                  const isOpen = openMobileCategory === cat.id;
                  return (
                    <div key={cat.id} className="border-b border-slate-100">
                      <button
                        onClick={() => toggleMobileCategory(cat.id)}
                        className={`w-full flex items-center justify-between py-4 px-5 text-left transition-colors cursor-pointer ${
                          isOpen ? 'bg-[var(--color-blue-100)]' : 'hover:bg-slate-50'
                        }`}
                      >
                        <span
                          className={`text-[18px] font-medium ${
                            isOpen ? 'text-[var(--color-blue-700)] font-bold' : 'text-[var(--color-blue-900)]'
                          }`}
                        >
                          {language === 'zh' ? cat.labelZh : cat.labelEn}
                        </span>
                        <Plus
                          className={`w-6 h-6 sm:w-7 sm:h-7 shrink-0 text-[var(--color-orange)] transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                          strokeWidth={2.25}
                        />
                      </button>
                      {isOpen && (
                        <ul className="pb-2 bg-[var(--color-blue-100)]/50">
                          {cat.items.map((item, i) => (
                            <li key={i}>
                              <button
                                onClick={() => handleNavClick(item.sectionId)}
                                className="w-full text-left py-3 pl-9 pr-5 text-sm text-[var(--color-text-body)] hover:text-[var(--color-orange)] transition-colors cursor-pointer"
                              >
                                {language === 'zh' ? item.labelZh : item.labelEn}
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
        </div>
      )}
    </>
  );
};
