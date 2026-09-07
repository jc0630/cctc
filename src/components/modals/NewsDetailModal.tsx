import React from 'react';
import { X, Calendar, Share2, Tag, ArrowLeft } from 'lucide-react';
import { Language, NewsArticle } from '../../types';

interface NewsDetailModalProps {
  article: NewsArticle | null;
  onClose: () => void;
  language: Language;
}

export const NewsDetailModal: React.FC<NewsDetailModalProps> = ({
  article,
  onClose,
  language
}) => {
  if (!article) return null;

  return (
    <div
      id="news-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-sm border-2 border-[#0a2540] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 bg-white">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#0369a1] bg-sky-50 px-2 py-0.5 rounded-xs border border-sky-100">
              {language === 'zh' ? article.categoryZh : article.categoryEn}
            </span>
            <span className="text-xs text-slate-400 font-mono">| {article.date}</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-700 rounded-sm border border-slate-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0a2540] leading-tight">
            {language === 'zh' ? article.titleZh : article.titleEn}
          </h2>

          <div className="relative h-56 sm:h-64 border border-slate-200 rounded-sm overflow-hidden my-4">
            <img
              src={article.image}
              alt={language === 'zh' ? article.titleZh : article.titleEn}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-sm max-w-none text-slate-700 space-y-3 leading-relaxed">
            {(language === 'zh' ? article.contentZh : article.contentEn).map((para, idx) => (
              <p key={idx} className="text-sm leading-relaxed text-slate-700 font-normal">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>中國貨櫃股份有限公司 · 公共事務室發布</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-[#0a2540] font-bold rounded-sm transition-colors cursor-pointer"
          >
            {language === 'zh' ? '關閉文章' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
