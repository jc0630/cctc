import React, { useState } from 'react';
import { X, Search, CheckCircle, Clock, ShieldCheck, Box, FileText, ArrowRight } from 'lucide-react';
import { Language } from '../../types';
import { MOCK_CONTAINER_RESULTS } from '../../data/content';

interface ContainerTrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const ContainerTrackingModal: React.FC<ContainerTrackingModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  const [inputVal, setInputVal] = useState('CCTU8821943');
  const [result, setResult] = useState<any>(MOCK_CONTAINER_RESULTS['CCTU8821943']);
  const [searched, setSearched] = useState(true);

  if (!isOpen) return null;

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const clean = inputVal.trim().toUpperCase();
    if (MOCK_CONTAINER_RESULTS[clean]) {
      setResult(MOCK_CONTAINER_RESULTS[clean]);
    } else if (clean) {
      setResult({
        containerNo: clean,
        sizeType: "40' High Cube Standard",
        terminal: '基隆港貨櫃碼頭 (Keelung Terminal)',
        status: '海關查驗完成 (Customs Cleared)',
        vesselVoyage: 'YM WELLHEAD / V.241W',
        gateInTime: '2024-05-22 11:15:30',
        gateOutStatus: '待提領 (Pending Pickup)',
        weight: '21,340 KG',
        customsRelease: '已放行 (C1 免驗放行)'
      });
    } else {
      setResult(null);
    }
    setSearched(true);
  };

  const setPreset = (code: string) => {
    setInputVal(code);
    setResult(MOCK_CONTAINER_RESULTS[code]);
    setSearched(true);
  };

  return (
    <div
      id="tracking-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-sm border-2 border-[#0a2540] shadow-2xl p-5 sm:p-7 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-sm bg-[#f0f7ff] text-[#0284c7] flex items-center justify-center">
              <Box className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0a2540]">
                {language === 'zh' ? '線上櫃動即時查詢' : 'Real-time Container Tracking'}
              </h3>
              <p className="text-xs text-slate-500">
                {language === 'zh'
                  ? '輸入貨櫃號碼 (11碼) 或提單號碼查詢即時進出站與通關動態'
                  : 'Enter 11-digit container number or Bill of Lading (B/L)'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-700 rounded-sm border border-slate-200 hover:border-slate-300 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Input Bar */}
        <form onSubmit={handleSearch} className="mb-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder={language === 'zh' ? '請輸入櫃號，例如 CCTU8821943' : 'Container No. e.g. CCTU8821943'}
                className="w-full pl-3.5 pr-10 py-2.5 text-sm font-mono border border-slate-300 rounded-sm focus:outline-none focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7] uppercase font-bold text-[#0a2540]"
              />
              <button
                type="submit"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#0284c7]"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
            <button
              type="submit"
              className="bg-[#f97316] hover:bg-[#ea580c] text-white px-5 py-2.5 rounded-sm text-sm font-bold shadow-xs transition-colors cursor-pointer"
            >
              {language === 'zh' ? '查詢' : 'Search'}
            </button>
          </div>

          {/* Quick presets */}
          <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
            <span>{language === 'zh' ? '快速測試範例：' : 'Sample Containers:'}</span>
            <button
              type="button"
              onClick={() => setPreset('CCTU8821943')}
              className="font-mono text-[#0369a1] hover:underline font-semibold"
            >
              CCTU8821943 (五堵站)
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => setPreset('EMCU3918204')}
              className="font-mono text-[#0369a1] hover:underline font-semibold"
            >
              EMCU3918204 (台中港)
            </button>
          </div>
        </form>

        {/* Search Results Display */}
        {result ? (
          <div className="bg-slate-50 border border-slate-200 rounded-sm p-4 text-xs sm:text-sm">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                  CONTAINER NUMBER
                </span>
                <span className="text-base font-mono font-bold text-[#0a2540]">
                  {result.containerNo}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                  STATUS
                </span>
                <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-xs font-bold text-xs">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  {result.status}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-3 gap-x-4">
              <div>
                <span className="text-slate-400 text-xs block">{language === 'zh' ? '櫃型規格' : 'Size / Type'}</span>
                <span className="font-semibold text-slate-800">{result.sizeType}</span>
              </div>
              <div>
                <span className="text-slate-400 text-xs block">{language === 'zh' ? '所在場站' : 'Current Terminal'}</span>
                <span className="font-semibold text-[#0369a1]">{result.terminal}</span>
              </div>
              <div>
                <span className="text-slate-400 text-xs block">{language === 'zh' ? '船名 / 航次' : 'Vessel / Voyage'}</span>
                <span className="font-mono font-semibold text-slate-800">{result.vesselVoyage}</span>
              </div>
              <div>
                <span className="text-slate-400 text-xs block">{language === 'zh' ? '進站時間' : 'Gate-In Timestamp'}</span>
                <span className="font-mono text-slate-700">{result.gateInTime}</span>
              </div>
              <div>
                <span className="text-slate-400 text-xs block">{language === 'zh' ? '提領狀態' : 'Gate-Out Clearance'}</span>
                <span className="font-semibold text-emerald-700">{result.gateOutStatus}</span>
              </div>
              <div>
                <span className="text-slate-400 text-xs block">{language === 'zh' ? '海關放行' : 'Customs Status'}</span>
                <span className="font-semibold text-[#0a2540]">{result.customsRelease}</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>資料同步時間：即時連線 (Live Sync)</span>
              <button
                onClick={() => alert(language === 'zh' ? '已列印/匯出提單櫃動證明！' : 'Exported tracking summary!')}
                className="text-[#0369a1] hover:underline font-bold"
              >
                {language === 'zh' ? '下載櫃動明細表 (PDF)' : 'Download PDF'}
              </button>
            </div>
          </div>
        ) : (
          <div className="py-8 text-center text-slate-400 text-sm">
            {language === 'zh' ? '請輸入貨櫃號碼進行查詢' : 'Please input a container number'}
          </div>
        )}
      </div>
    </div>
  );
};
