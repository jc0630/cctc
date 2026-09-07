import React, { useState } from 'react';
import { X, Search, ArrowRight, FileText, MapPin, Package } from 'lucide-react';
import { Language } from '../../types';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onSelectAction: (type: string, id?: string) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  language,
  onSelectAction
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const quickLinks = [
    { title: '櫃動查詢 (Container Tracking)', type: 'tracking', icon: Package },
    { title: '五堵貨櫃集散站 (Wudu Hub)', type: 'location', id: 'wudu', icon: MapPin },
    { title: '基隆港貨櫃碼頭 (Keelung Terminal)', type: 'location', id: 'keelung', icon: MapPin },
    { title: '台中港 10-11 號碼頭 (Taichung 10-11)', type: 'location', id: 'taichung10-11', icon: MapPin },
    { title: 'ESG 永續報告書下載 (Sustainability)', type: 'esg', icon: FileText },
    { title: '投資人專區 (TWSE: 2613)', type: 'investor', icon: FileText }
  ];

  const filtered = quickLinks.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-sm border-2 border-[#0a2540] shadow-2xl overflow-hidden p-4 sm:p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative mb-3">
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              language === 'zh'
                ? '搜尋中櫃網站... 例如：櫃動、五堵、船席、ESG、2613'
                : 'Search CCTC... e.g. Tracking, Wudu, Berth, ESG'
            }
            className="w-full pl-10 pr-10 py-2.5 text-sm border border-slate-300 rounded-sm focus:outline-none focus:border-[#0284c7] font-medium text-[#0a2540]"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <button
            onClick={onClose}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-1 mt-3">
          <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider block px-1 mb-1.5">
            {language === 'zh' ? '快速導航推薦' : 'QUICK RESULTS'}
          </span>
          {filtered.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                onClick={() => {
                  onSelectAction(item.type, item.id);
                  onClose();
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-sm hover:bg-[#f0f7ff] text-left text-xs sm:text-sm font-semibold text-[#0a2540] hover:text-[#0284c7] transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-[#0284c7] shrink-0" />
                  <span>{item.title}</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#f97316] group-hover:translate-x-0.5 transition-all" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
