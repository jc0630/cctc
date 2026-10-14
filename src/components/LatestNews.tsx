import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { NEWS_ARTICLES } from '../data/content';
import { HorizontalCarousel } from './HorizontalCarousel';

interface LatestNewsProps {
  language: Language;
  onViewAllNews: () => void;
}

export const LatestNews: React.FC<LatestNewsProps> = ({
  language,
  onViewAllNews
}) => {
  // Homepage shows only the 3 most recent articles, sorted by date, no filtering
  const articles = [...NEWS_ARTICLES]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section
      id="news"
      className="w-full py-[25px] sm:py-[40px] lg:pt-[50px] lg:pb-[25px] bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + carousel: mobile reads title → carousel → CTA
            (CTA always last); desktop keeps title+CTA on one row via
            flex-wrap, with the carousel wrapper's own w-full forcing it to
            wrap onto its own full-width row underneath — same row2 position
            as before. */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-end justify-between gap-4 mb-8">
          <div className="order-1">
            <h2 className="section-title text-3xl sm:text-4xl font-bold tracking-tight">
              {language === 'zh' ? '最新消息' : 'Latest News'}
            </h2>
          </div>

          <button
            onClick={onViewAllNews}
            className="order-3 sm:order-2 self-end sm:self-auto btn-explore group"
          >
            <span>{language === 'zh' ? '了解更多' : 'Explore More'}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Horizontal carousel: 3 per view on desktop, 1 on mobile — Image + Title only */}
          <div className="order-2 sm:order-3 w-full">
            <HorizontalCarousel
              ariaLabelPrefix={language === 'zh' ? '消息' : 'News'}
              items={articles.map((article) => (
                <article
                  key={article.id}
                  id={`news-card-${article.id}`}
                  className="interactive-card interactive-card--accent h-full flex flex-col group rounded-[var(--radius-panel)] border-[var(--color-blue-300)]/60 overflow-hidden bg-white layer-shadow-soft"
                >
                  <div className="relative overflow-hidden aspect-[4/3] bg-slate-100">
                    <img
                      src={article.image}
                      alt={language === 'zh' ? article.titleZh : article.titleEn}
                      className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="px-4 py-3.5">
                    <time className="block text-xs sm:text-sm font-bold text-[var(--color-text-secondary)] tracking-wide">
                      {article.date}
                    </time>
                    <h3 className="mt-1 text-base sm:text-lg font-bold text-[var(--color-ink)] leading-snug line-clamp-2">
                      {language === 'zh' ? article.titleZh : article.titleEn}
                    </h3>
                  </div>
                </article>
              ))}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
