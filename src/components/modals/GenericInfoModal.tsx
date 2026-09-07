import React from 'react';
import { X, FileText, Download, Phone, Ship, Briefcase, CheckCircle2, UserCheck, ShieldCheck } from 'lucide-react';
import { Language } from '../../types';

export type ModalType =
  | 'berth'
  | 'forms'
  | 'support'
  | 'portal'
  | 'investor'
  | 'careers'
  | 'privacy'
  | 'terms'
  | null;

interface GenericInfoModalProps {
  modalType: ModalType;
  onClose: () => void;
  language: Language;
}

export const GenericInfoModal: React.FC<GenericInfoModalProps> = ({
  modalType,
  onClose,
  language
}) => {
  if (!modalType) return null;

  const renderContent = () => {
    switch (modalType) {
      case 'berth':
        return (
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-slate-600">
              {language === 'zh'
                ? '即時彙整基隆港、台中港 10-11 號及 31 號專用碼頭船舶靠泊時程，即時更新動態。'
                : 'Real-time schedule of container vessels berthing at Keelung and Taichung Terminals.'}
            </p>
            <div className="border border-slate-200 rounded-sm overflow-hidden">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#0a2540] text-white font-mono uppercase">
                  <tr>
                    <th className="p-2.5">泊位</th>
                    <th className="p-2.5">船名 / 航次</th>
                    <th className="p-2.5">預報靠泊</th>
                    <th className="p-2.5">預計離泊</th>
                    <th className="p-2.5">作業狀態</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-mono">
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold text-[#0369a1]">基隆 No.1</td>
                    <td className="p-2.5 font-bold">WAN HAI 512 / 092E</td>
                    <td className="p-2.5 text-slate-600">05/22 06:00</td>
                    <td className="p-2.5 text-slate-600">05/22 18:30</td>
                    <td className="p-2.5 text-emerald-700 font-bold">裝卸中 (Stevedoring)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold text-[#0369a1]">基隆 No.2</td>
                    <td className="p-2.5 font-bold">EVER GENTLE / 042W</td>
                    <td className="p-2.5 text-slate-600">05/22 12:00</td>
                    <td className="p-2.5 text-slate-600">05/23 04:00</td>
                    <td className="p-2.5 text-amber-700 font-bold">進港中 (Approaching)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold text-[#0369a1]">台中 10號</td>
                    <td className="p-2.5 font-bold">YM WELLHEAD / 241W</td>
                    <td className="p-2.5 text-slate-600">05/22 08:30</td>
                    <td className="p-2.5 text-slate-600">05/22 22:00</td>
                    <td className="p-2.5 text-emerald-700 font-bold">裝卸中 (Stevedoring)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold text-[#0369a1]">台中 31號</td>
                    <td className="p-2.5 font-bold">TS SHENZHEN / 2404</td>
                    <td className="p-2.5 text-slate-600">05/23 01:00</td>
                    <td className="p-2.5 text-slate-600">05/23 16:00</td>
                    <td className="p-2.5 text-slate-500 font-bold">預報靠泊 (Scheduled)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'forms':
        return (
          <div className="space-y-3">
            <p className="text-xs sm:text-sm text-slate-600">
              {language === 'zh'
                ? '提供港埠集散站各項常用標準申辦書表，歡迎下載填寫。'
                : 'Download official terminal application forms, tariff guides, and certificates.'}
            </p>
            <div className="divide-y divide-slate-200 border border-slate-200 rounded-sm">
              {[
                { name: '進口貨櫃提領切結書 (Container Release Form)', size: '240 KB · PDF' },
                { name: '危險品重櫃進場申報表 (Dangerous Cargo Declaration)', size: '180 KB · PDF' },
                { name: '冷凍櫃插電溫控記錄申請表 (Reefer Monitoring Request)', size: '150 KB · PDF' },
                { name: '中櫃 2024 年度港埠業務費率規章 (Official Tariff 2024)', size: '820 KB · PDF' }
              ].map((doc, i) => (
                <div key={i} className="p-3 flex items-center justify-between hover:bg-slate-50">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#0a2540]">
                    <FileText className="w-4 h-4 text-[#0284c7]" />
                    <span>{doc.name}</span>
                  </div>
                  <button
                    onClick={() => alert(`已下載: ${doc.name}`)}
                    className="inline-flex items-center gap-1 text-xs text-[#f97316] font-bold hover:underline cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>下載</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'support':
        return (
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-slate-600">
              {language === 'zh'
                ? '中櫃設有專業客戶服務窗口，提供即時進出站諮詢、異常狀況排除與通關協助。'
                : 'Contact our specialized support team for terminal inquiries, gate appointments, or exceptions.'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-sm">
                <span className="font-bold text-[#0a2540] block mb-1">五堵貨櫃集散站服務專線</span>
                <p className="text-slate-500">電話：(02) 8648-2111 分機 101~105</p>
                <p className="text-slate-500">傳真：(02) 8648-2119</p>
                <p className="text-slate-500">時間：週一至週五 08:00 - 17:00</p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-sm">
                <span className="font-bold text-[#0a2540] block mb-1">基隆港碼頭現場調度室</span>
                <p className="text-slate-500">電話：(02) 2422-4161 分機 201</p>
                <p className="text-slate-500">傳真：(02) 2428-1150</p>
                <p className="text-slate-500">時間：24小時全天候值班</p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-sm sm:col-span-2">
                <span className="font-bold text-[#0a2540] block mb-1">台中港 10-11 及 31 號碼頭</span>
                <p className="text-slate-500">電話：(04) 2657-3101 分機 301~305</p>
                <p className="text-slate-500">電子信箱：service@cctcorp.com.tw</p>
              </div>
            </div>
          </div>
        );

      case 'portal':
        return (
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-slate-600">
              {language === 'zh'
                ? '航商、報關行與拖車司機專用線上作業系統，請登入進行預約提領與資料核對。'
                : 'Dedicated login portal for shipping carriers, customs brokers, and truck drivers.'}
            </p>
            <div className="space-y-3 bg-slate-50 p-4 border border-slate-200 rounded-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">客戶帳號 / 統一編號</label>
                <input
                  type="text"
                  placeholder="請輸入公司統編或帳號"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-sm bg-white"
                  defaultValue="03562914"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">使用者密碼</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-sm bg-white"
                  defaultValue="secret123"
                />
              </div>
              <button
                onClick={() => alert('展示環境：已成功模擬登入中櫃客戶專區！')}
                className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white py-2 rounded-sm text-xs font-bold transition-colors cursor-pointer"
              >
                {language === 'zh' ? '登入系統' : 'Sign In'}
              </button>
            </div>
          </div>
        );

      case 'investor':
        return (
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-slate-600">
              {language === 'zh'
                ? '中國貨櫃股份有限公司 (TWSE: 2613) 投資人專區，提供健全財務與公司治理資訊。'
                : 'China Container Terminal Corp. (TWSE: 2613) Investor Relations disclosure center.'}
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 border border-slate-200 rounded-sm">
                <span className="text-slate-400 block">股票代號</span>
                <span className="text-lg font-mono font-bold text-[#0a2540]">2613</span>
              </div>
              <div className="p-3 border border-slate-200 rounded-sm">
                <span className="text-slate-400 block">上市市場</span>
                <span className="text-sm font-bold text-[#0284c7]">臺灣證券交易所</span>
              </div>
            </div>
            <div className="space-y-2 text-xs">
              <span className="font-bold text-[#0a2540] block">最新公告下載：</span>
              {[
                '2024 年第一季財務報告書 (Q1 Financial Report)',
                '2023 年度股東常會會議手冊暨議事錄',
                '企業內部重大資訊處理作業程序規章'
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-200 rounded-sm">
                  <span className="text-slate-700">{doc}</span>
                  <button
                    onClick={() => alert(`已下載: ${doc}`)}
                    className="text-[#f97316] hover:underline font-bold"
                  >
                    下載 PDF
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'careers':
        return (
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-slate-600">
              {language === 'zh'
                ? '中櫃提供優渥的薪資福利、定期進修補助與安全的現代化港埠工作環境，誠摯邀請優秀人才加入！'
                : 'Join our experienced team shaping modern smart logistics and maritime terminal operations.'}
            </p>
            <div className="space-y-2 text-xs">
              {[
                { title: '碼頭大型機具調度工程師 (五堵/基隆)', type: '全職 · 現場技術 · 月薪 45K~60K' },
                { title: '港埠智慧資訊系統研發工程師 (汐止總部)', type: '全職 · IT 研發 · 月薪 50K~75K' },
                { title: '重櫃堆高機與門機操作員 (台中港)', type: '全職 · 具重機操作證 · 月薪 42K~58K' }
              ].map((job, idx) => (
                <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-sm flex items-center justify-between">
                  <div>
                    <span className="font-bold text-[#0a2540] block text-xs sm:text-sm">{job.title}</span>
                    <span className="text-slate-500 text-[11px]">{job.type}</span>
                  </div>
                  <button
                    onClick={() => alert(`已開啟應徵: ${job.title}`)}
                    className="bg-[#0284c7] hover:bg-[#0369a1] text-white px-3 py-1.5 rounded-sm font-bold text-xs cursor-pointer"
                  >
                    立即應徵
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'privacy':
      case 'terms':
        return (
          <div className="space-y-3 text-xs text-slate-600 leading-relaxed max-h-72 overflow-y-auto">
            <p>
              中國貨櫃股份有限公司（以下簡稱本公司）尊重並保護您的個人隱私權。本政策說明本公司網站如何蒐集、處理、利用及保護您的個人資料。
            </p>
            <p>
              本公司依據個人資料保護法及相關法令規定，僅於提供港埠物流服務、櫃動查詢、投資人聯繫或徵才之特定目的範圍內處理個人資料，採取嚴密之資安防護措施防範未經授權之存取。
            </p>
            <p>
              如對本政策或個人資料保護有任何疑義，歡迎隨時透過本公司客戶服務專線與我們聯繫。
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (modalType) {
      case 'berth':
        return language === 'zh' ? '船席圖查詢 · 即時靠泊動態' : 'Berth Schedule & Live Tracking';
      case 'forms':
        return language === 'zh' ? '表單規章下載中心' : 'Document & Forms Download Center';
      case 'support':
        return language === 'zh' ? '客戶服務支援專區' : 'Customer Support & Inquiries';
      case 'portal':
        return language === 'zh' ? '客戶專區 / 線上申辦系統' : 'Client Portal Login';
      case 'investor':
        return language === 'zh' ? '投資人專區 (TWSE: 2613)' : 'Investor Relations (TWSE: 2613)';
      case 'careers':
        return language === 'zh' ? '人才招募 · 最新職缺' : 'Careers & Opportunities';
      case 'privacy':
        return language === 'zh' ? '隱私權保護政策' : 'Privacy Policy';
      case 'terms':
        return language === 'zh' ? '資訊安全及免責聲明' : 'Terms of Service';
      default:
        return '';
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-sm border-2 border-[#0a2540] shadow-2xl overflow-hidden p-5 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
          <h3 className="text-base sm:text-lg font-bold text-[#0a2540] flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[#f97316]"></span>
            <span>{getTitle()}</span>
          </h3>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-slate-700 rounded-sm border border-slate-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {renderContent()}

        <div className="mt-5 pt-3 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-bold bg-slate-200 hover:bg-slate-300 text-[#0a2540] rounded-sm cursor-pointer"
          >
            {language === 'zh' ? '關閉' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
