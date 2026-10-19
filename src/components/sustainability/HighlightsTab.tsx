import React, { useState } from 'react';
import { Language } from '../../types';
import { TabPills } from './TabPills';
import {
  SUSTAINABILITY_HIGHLIGHTS_INTRO_ZH,
  SUSTAINABILITY_HIGHLIGHTS_INTRO_EN,
  SUSTAINABILITY_HIGHLIGHT_TABS
} from '../../data/content';

interface HighlightsTabProps {
  language: Language;
}

export const HighlightsTab: React.FC<HighlightsTabProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState(SUSTAINABILITY_HIGHLIGHT_TABS[0].id);
  const intro = language === 'zh' ? SUSTAINABILITY_HIGHLIGHTS_INTRO_ZH : SUSTAINABILITY_HIGHLIGHTS_INTRO_EN;
  const activeTabData = SUSTAINABILITY_HIGHLIGHT_TABS.find((t) => t.id === activeTab)!;

  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      {/* 5-paragraph performance summary. (The 金舫獎 award photo placement is
          still marked "待確認" in the client's brief, so this ships
          text-only for now — dropping a photo in later just needs a flex
          layout added here.) */}
      <div className="max-w-4xl flex flex-col gap-4">
        {intro.map((para, i) => (
          <p key={i} className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-loose">
            {para}
          </p>
        ))}
      </div>

      <div className="flex flex-col gap-5 sm:gap-6">
        <TabPills
          tabs={SUSTAINABILITY_HIGHLIGHT_TABS.map((t) => ({ id: t.id, label: language === 'zh' ? t.labelZh : t.labelEn }))}
          activeId={activeTab}
          onChange={setActiveTab}
        />
        <ul key={activeTab} className="max-w-3xl w-full flex flex-col gap-3 animate-in fade-in duration-300">
          {(language === 'zh' ? activeTabData.itemsZh : activeTabData.itemsEn).map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 bg-[var(--color-green-bg)] border border-[var(--color-green-card)] rounded-[var(--radius-card)] px-4 py-3 sm:px-5 sm:py-4"
            >
              <span className="shrink-0 w-2 h-2 mt-2 rounded-full bg-[var(--color-green-600)]" />
              <span className="text-sm sm:text-base text-[var(--color-ink)] leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
