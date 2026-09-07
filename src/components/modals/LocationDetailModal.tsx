import React from 'react';
import { X, MapPin, Anchor, Cpu, Building2, Phone, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { Language, TerminalLocation } from '../../types';

interface LocationDetailModalProps {
  location: TerminalLocation | null;
  onClose: () => void;
  language: Language;
}

export const LocationDetailModal: React.FC<LocationDetailModalProps> = ({
  location,
  onClose,
  language
}) => {
  if (!location) return null;

  return (
    <div
      id="location-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-sm border-2 border-[#0a2540] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 bg-white">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-6 bg-[#0284c7]"></span>
            <div>
              <span className="text-[11px] font-mono text-[#0284c7] font-bold uppercase tracking-wider block">
                {language === 'zh' ? location.tagZh : location.tagEn}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#0a2540]">
                {language === 'zh' ? location.nameZh : location.nameEn}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-700 rounded-sm border border-slate-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-5">
          {/* Real Photo Frame */}
          <div className="relative h-56 sm:h-64 border border-slate-200 overflow-hidden rounded-sm">
            <img
              src={location.image}
              alt={language === 'zh' ? location.nameZh : location.nameEn}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 right-2 bg-white/95 text-xs text-[#0a2540] font-semibold px-2.5 py-1 rounded-xs border border-slate-200">
              {language === 'zh' ? '高畫質作業實景' : 'High Resolution Operational View'}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            {language === 'zh' ? location.descZh : location.descEn}
          </p>

          {/* Key Specifications Grid */}
          <div className="bg-slate-50 border border-slate-200 rounded-sm p-4">
            <h4 className="text-xs font-mono font-bold uppercase text-[#0a2540] tracking-wider mb-3 pb-1 border-b border-slate-200">
              {language === 'zh' ? '碼頭場站規格數據' : 'FACILITY SPECIFICATIONS'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-start gap-2.5">
                <Anchor className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block">{language === 'zh' ? '泊位 / 類型' : 'Berths / Type'}</span>
                  <span className="font-semibold text-slate-800">
                    {language === 'zh' ? location.specs.berthsZh : location.specs.berthsEn}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block">{language === 'zh' ? '總佔地面積' : 'Total Area'}</span>
                  <span className="font-semibold text-slate-800">
                    {language === 'zh' ? location.specs.areaZh : location.specs.areaEn}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 sm:col-span-2">
                <Cpu className="w-4 h-4 text-[#f97316] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block">{language === 'zh' ? '港埠機具與自動化' : 'Equipment'}</span>
                  <span className="font-semibold text-slate-800">
                    {language === 'zh' ? location.specs.equipmentZh : location.specs.equipmentEn}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Address and Operations Hours */}
          <div className="space-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#f97316] shrink-0" />
              <span className="font-medium">
                {language === 'zh' ? location.addressZh : location.addressEn}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0284c7] shrink-0" />
              <span>
                {language === 'zh'
                  ? '作業時程：24 小時全天候裝卸調度 / 櫃場提領週一至週六'
                  : 'Operating Hours: 24/7 Berth Stevedoring / Yard Gate Mon-Sat'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#0284c7] shrink-0" />
              <span className="font-mono font-semibold">(02) 8648-2111 分機 201~206 營運調度課</span>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">ID: {location.id.toUpperCase()}</span>
          <button
            onClick={() => {
              window.open(`https://maps.google.com/?q=${encodeURIComponent(location.addressZh)}`, '_blank');
            }}
            className="inline-flex items-center gap-1.5 bg-[#0a2540] hover:bg-[#0369a1] text-white text-xs font-bold px-4 py-2 rounded-sm transition-colors cursor-pointer"
          >
            <span>{language === 'zh' ? '開啟 Google 地圖導航' : 'Open in Google Maps'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
