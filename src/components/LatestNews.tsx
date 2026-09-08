import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Language, NewsArticle } from '../types';
import { NEWS_ARTICLES } from '../data/content';
import { HorizontalCarousel } from './HorizontalCarousel';

interface LatestNewsProps {
  language: Language;
  onSelectArticle: (article: NewsArticle) => void;
  onViewAllNews: () => void;
}

export const LatestNews: React.FC<LatestNewsProps> = ({
  language,
  onSelectArticle,
  onViewAllNews
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'announcement' | 'operations' | 'esg'>('all');

  const filteredArticles = activeFilter === 'all'
    ? NEWS_ARTICLES
    : NEWS_ARTICLES.filter((a) => a.categoryType === activeFilter);

  const filters = [
    { id: 'all', labelZh: '全部消息', labelEn: 'All' },
    { id: 'announcement', labelZh: '公司公告', labelEn: 'Announcements' },
    { id: 'operations', labelZh: '營運資訊', labelEn: 'Operations' },
    { id: 'esg', labelZh: 'ESG 活動', labelEn: 'ESG Events' }
  ];

  return (
    <section
      id="news"
      className="w-full py-12 sm:py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="section-title text-3xl sm:text-4xl font-bold tracking-tight">
              {language === 'zh' ? '最新消息' : 'Latest News'}
            </h2>
            <span className="section-title-rule" />
          </div>

          <button
            onClick={onViewAllNews}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-blue-500)] hover:text-[var(--color-primary)] transition-colors duration-200 cursor-pointer group"
          >
            <span>{language === 'zh' ? '查看所有消息' : 'View All News'}</span>
            <ArrowRight className="w-4 h-4 text-[var(--color-orange)] transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Category Filters — compact, low visual weight */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as any)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-[var(--color-blue-900)] text-white'
                  : 'bg-slate-100 text-[var(--color-text-body)] hover:bg-slate-200/80'
              }`}
            >
              {language === 'zh' ? filter.labelZh : filter.labelEn}
            </button>
          ))}
        </div>

        {/* Horizontal carousel: 3 per view on desktop, 1 on mobile — Image + Title only */}
        <HorizontalCarousel
          key={activeFilter}
          ariaLabelPrefix={language === 'zh' ? '消息' : 'News'}
          items={filteredArticles.map((article) => (
            <article
              key={article.id}
              id={`news-card-${article.id}`}
              onClick={() => onSelectArticle(article)}
              className="h-full group cursor-pointer card-framed"
            >
              <div className="relative overflow-hidden rounded-[var(--radius-card)] aspect-[4/3] bg-slate-100">
                <img
                  src={article.image}
                  alt={language === 'zh' ? article.titleZh : article.titleEn}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-[var(--radius-card)] ring-1 ring-inset ring-black/5 group-hover:ring-2 group-hover:ring-[var(--color-blue-300)] transition-all duration-300" />
              </div>
              <h3 className="mt-4 px-1 text-base sm:text-lg font-bold text-[var(--color-blue-800)] group-hover:text-[var(--color-primary)] transition-colors duration-300 leading-snug line-clamp-2">
                {language === 'zh' ? article.titleZh : article.titleEn}
              </h3>
            </article>
          ))}
        />
      </div>
    </section>
  );
};
