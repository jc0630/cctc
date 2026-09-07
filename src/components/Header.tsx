import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Globe, User, ChevronRight, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { LOGO_URL } from '../data/content';

interface HeaderProps {
  language: Language;
  onToggleLanguage: (lang: Language) => void;
  onOpenSearch: () => void;
  onOpenPortal: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onToggleLanguage,
  onOpenSearch,
  onOpenPortal,
  onNavigateSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNavId, setActiveNavId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', labelZh: '關於中櫃', labelEn: 'About Us' },
    { id: 'services', labelZh: '服務項目', labelEn: 'Services' },
    { id: 'operations', labelZh: '營運據點', labelEn: 'Locations' },
    { id: 'esg', labelZh: 'ESG 永續', labelEn: 'ESG' },
    { id: 'news', labelZh: '最新消息', labelEn: 'News' },
    { id: 'investor-relations', labelZh: '投資人專區', labelEn: 'Investor Relations' },
    { id: 'careers', labelZh: '人才招募', labelEn: 'Careers' }
  ];

  const mobileNavItems = [
    { id: 'home', labelZh: '首頁', labelEn: 'Home' },
    ...navItems
  ];

  const handleNavClick = (id: string) => {
    setActiveNavId(id);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onNavigateSection(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Stock Info */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            id="brand-logo-link"
            className="flex items-center gap-2.5 group bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src={LOGO_URL}
              alt="中國貨櫃 CCTC"
              className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02] brightness-0 invert"
              style={{ filter: isScrolled ? 'none' : 'brightness(0) invert(1)' }}
            />
            <div className="hidden xl:flex flex-col border-l border-white/30 pl-2.5">
              <span className={`text-xs font-bold tracking-tight leading-tight ${isScrolled ? 'text-[#0a2540]' : 'text-white'}`}>
                {language === 'zh' ? '中國貨櫃' : 'China Container'}
              </span>
              <span className={`text-[10px] font-mono font-semibold uppercase tracking-wider ${isScrolled ? 'text-slate-500' : 'text-white/80'}`}>
                TWSE · 2613
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav aria-label="主要導覽" className="hidden xl:flex items-center gap-1 2xl:gap-1.5">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`text-[13px] 2xl:text-[14px] font-semibold px-2.5 py-1.5 rounded-sm transition-colors cursor-pointer ${
                isScrolled
                  ? 'text-[#0a2540]/80 hover:text-[#0284c7] hover:bg-[#f0f7ff]'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {language === 'zh' ? item.labelZh : item.labelEn}
            </button>
          ))}
        </nav>

        {/* Header Actions: Language Switcher + Search + Portal CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <div
            id="language-switcher"
            className={`flex items-center border rounded-full p-0.5 text-xs font-semibold shadow-xs ${
              isScrolled ? 'bg-slate-100/90 border-slate-200' : 'bg-white/10 border-white/20 backdrop-blur-sm'
            }`}
          >
            <button
              id="lang-zh-btn"
              onClick={() => onToggleLanguage('zh')}
              className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                language === 'zh'
                  ? isScrolled 
                    ? 'bg-white text-[#0369a1] shadow-xs border border-slate-200/80'
                    : 'bg-white text-[#0369a1] shadow-xs'
                  : isScrolled
                    ? 'text-slate-500 hover:text-[#0a2540]'
                    : 'text-white/70 hover:text-white'
              }`}
            >
              繁中
            </button>
            <button
              id="lang-en-btn"
              onClick={() => onToggleLanguage('en')}
              className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                language === 'en'
                  ? isScrolled 
                    ? 'bg-white text-[#0369a1] shadow-xs border border-slate-200/80'
                    : 'bg-white text-[#0369a1] shadow-xs'
                  : isScrolled
                    ? 'text-slate-500 hover:text-[#0a2540]'
                    : 'text-white/70 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Quick Search */}
          <button
            id="search-trigger-btn"
            onClick={onOpenSearch}
            aria-label={language === 'zh' ? '全站搜尋' : 'Site Search'}
            className={`w-9 h-9 flex items-center justify-center rounded-full border transition-all cursor-pointer ${
              isScrolled
                ? 'text-slate-600 hover:text-[#0284c7] hover:bg-[#f0f7ff] border-transparent hover:border-sky-200'
                : 'text-white hover:bg-white/20 border-white/20 backdrop-blur-sm'
            }`}
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Customer Portal CTA (Orange Accent) */}
          <button
            id="portal-cta-btn"
            onClick={onOpenPortal}
            className={`hidden sm:inline-flex items-center gap-1.5 text-white text-xs lg:text-sm font-bold px-3.5 py-2 rounded-full transition-all cursor-pointer group ${
              isScrolled
                ? 'bg-[#f97316] hover:bg-[#ea580c] shadow-xs hover:shadow-sm'
                : 'bg-white/20 hover:bg-[#f97316] border border-white/30 hover:border-transparent backdrop-blur-sm'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>{language === 'zh' ? '客戶專區 / 線上申辦' : 'Client Portal'}</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? '關閉選單' : '開啟選單'}
            className={`xl:hidden w-9 h-9 flex items-center justify-center rounded-full border transition-colors cursor-pointer ${
              isScrolled
                ? 'bg-white text-[#0a2540] hover:text-[#0284c7] border-slate-200 hover:border-[#0284c7]'
                : 'bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30'
            }`}
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
          className="xl:hidden fixed inset-0 top-[60px] z-50 bg-slate-900/40 backdrop-blur-xs flex justify-end"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-[340px] bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-slate-200 animate-in slide-in-from-right duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between px-5 pt-5 pb-3">
                <span className="text-xs font-mono font-bold text-[var(--color-blue-900)] tracking-wider uppercase">
                  {language === 'zh' ? '網站主導覽' : 'SITE NAVIGATION'}
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-700 rounded-full border border-slate-200 text-xs transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Flat navigation list — thin dividers, active item highlighted blue */}
              <div className="border-t border-slate-100">
                {mobileNavItems.map((item) => {
                  const isActive = item.id === activeNavId;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full flex items-center justify-between py-4 px-5 text-left border-b border-slate-100 transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[var(--color-primary)]'
                          : 'hover:bg-slate-50'
                      }`}
                    >
                      <span className={`text-[15px] font-medium ${isActive ? 'text-white' : 'text-[var(--color-blue-900)]'}`}>
                        {language === 'zh' ? item.labelZh : item.labelEn}
                      </span>
                      <ChevronRight className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Utilities in Mobile Drawer */}
            <div className="p-5 pt-4 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPortal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white text-xs font-bold shadow-xs transition-colors"
              >
                <User className="w-4 h-4" />
                <span>{language === 'zh' ? '客戶專區 / 線上申辦' : 'Client Portal Login'}</span>
              </button>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-[16px] text-xs text-slate-500 space-y-1">
                <p className="font-semibold text-[#0a2540]">
                  {language === 'zh' ? '總機專人服務' : 'Customer Service'}
                </p>
                <a href="tel:0286482111" className="text-[#0284c7] font-mono font-bold block mt-1 text-sm">
                  (02) 8648-2111
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
