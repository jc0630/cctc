import React from 'react';
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
  // Homepage shows only the 3 most recent articles, sorted by date, no filtering
  const articles = [...NEWS_ARTICLES]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section
      id="news"
      className="w-full py-[1.1rem] sm:py-[1.375rem] bg-white"
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
            className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-blue-900)] text-white text-sm sm:text-base font-bold px-7 py-3.5 rounded-[var(--radius-pill)] transition-colors duration-200 cursor-pointer group layer-shadow-soft"
          >
            <span>{language === 'zh' ? '查看所有消息' : 'View All News'}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Horizontal carousel: 3 per view on desktop, 1 on mobile — Image + Title only */}
        <HorizontalCarousel
          ariaLabelPrefix={language === 'zh' ? '消息' : 'News'}
          items={articles.map((article) => (
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
