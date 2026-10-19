import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Language } from '../../types';
import { TabPills } from './TabPills';
import { SdgIconRow } from './SdgIconRow';
import { VALUE_CHAIN_INTRO_ZH, VALUE_CHAIN_INTRO_EN, STRATEGY_GOAL_TABS } from '../../data/content';

interface StrategyGoalsTabProps {
  language: Language;
}

const PERIODS = [
  { id: 'short', labelZh: '短期（2026–2028）', labelEn: 'Short-term (2026–2028)' },
  { id: 'mid', labelZh: '中期（2030）', labelEn: 'Mid-term (2030)' },
  { id: 'long', labelZh: '長期（2050）', labelEn: 'Long-term (2050)' }
] as const;

export const StrategyGoalsTab: React.FC<StrategyGoalsTabProps> = ({ language }) => {
  const [activeGoalTab, setActiveGoalTab] = useState(STRATEGY_GOAL_TABS[0].id);
  const [openPeriods, setOpenPeriods] = useState<Record<string, boolean>>({ short: true });
  const activeTab = STRATEGY_GOAL_TABS.find((t) => t.id === activeGoalTab)!;
  const intro = language === 'zh' ? VALUE_CHAIN_INTRO_ZH : VALUE_CHAIN_INTRO_EN;

  const togglePeriod = (id: string) => {
    setOpenPeriods((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const periodItems = (periodId: (typeof PERIODS)[number]['id']) => {
    if (periodId === 'short') return language === 'zh' ? activeTab.shortTermZh : activeTab.shortTermEn;
    if (periodId === 'mid') return language === 'zh' ? activeTab.midTermZh : activeTab.midTermEn;
    return language === 'zh' ? activeTab.longTermZh : activeTab.longTermEn;
  };

  return (
    <div className="flex flex-col gap-10 sm:gap-14">
      {/* 區塊 A：永續價值鏈 */}
      <div className="flex flex-col gap-6 sm:gap-8">
        <h2 className="section-title self-start text-2xl sm:text-3xl font-bold tracking-tight">
          {language === 'zh' ? '永續價值鏈' : 'Sustainability Value Chain'}
        </h2>

        <div className="flex flex-col gap-4 max-w-4xl">
          {intro.map((para, i) => (
            <p key={i} className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-loose">
              {para}
            </p>
          ))}
        </div>

        {/* Value chain flow diagram, supplied as a finished graphic — covers
            the full flow plus the TOS 2.0/EMS/MMS and ISO-certification
            callouts that previously lived in separate cards below it. */}
        <img
          src="/images/about/image22.png"
          alt={language === 'zh' ? '永續價值鏈流程圖' : 'Sustainability value chain diagram'}
          className="w-full rounded-[var(--radius-panel)] border border-slate-200"
        />
      </div>

      {/* 區塊 B：永續發展策略與短中長期目標 */}
      <div className="flex flex-col gap-6 sm:gap-8">
        <h2 className="section-title self-start text-2xl sm:text-3xl font-bold tracking-tight">
          {language === 'zh' ? '永續發展策略與短中長期目標' : 'Strategy & Short/Mid/Long-term Goals'}
        </h2>

        <TabPills
          tabs={STRATEGY_GOAL_TABS.map((t) => ({ id: t.id, label: language === 'zh' ? t.labelZh : t.labelEn }))}
          activeId={activeGoalTab}
          onChange={setActiveGoalTab}
        />

        <div key={activeGoalTab} className="flex flex-col gap-6 animate-in fade-in duration-300">
          <div className="flex flex-col gap-4 items-start text-left">
            <p className="max-w-3xl text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
              {language === 'zh' ? activeTab.descZh : activeTab.descEn}
            </p>
            <SdgIconRow nums={activeTab.sdgNums} size="sm" align="start" />
          </div>

          {/* Desktop: left period label / right bullet list, stacked by period.
              Mobile: accordion ("+" expand), per the brief ("手機版改為編號
              清單，點「＋」展開") — reuses the same Plus-rotate-45 interaction
              already established in Header.tsx's mobile menu. */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {PERIODS.map((period) => {
              const items = periodItems(period.id);
              const isOpen = !!openPeriods[period.id];
              return (
                <div key={period.id} className="border border-slate-200 rounded-[var(--radius-card)] overflow-hidden bg-white">
                  <button
                    onClick={() => togglePeriod(period.id)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer lg:cursor-default lg:pointer-events-none"
                  >
                    <span className="text-base sm:text-lg font-bold text-[var(--color-cta)] shrink-0">
                      {language === 'zh' ? period.labelZh : period.labelEn}
                    </span>
                    <Plus
                      className={`w-5 h-5 shrink-0 text-[var(--color-cta)] transition-transform duration-200 lg:hidden ${isOpen ? 'rotate-45' : ''}`}
                    />
                  </button>
                  <ul
                    className={`flex-col gap-2.5 px-5 pb-5 ${isOpen ? 'flex' : 'hidden'} lg:flex lg:pt-0`}
                  >
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-[var(--color-ink)] leading-relaxed">
                        <span className="shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-[var(--color-cta)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
