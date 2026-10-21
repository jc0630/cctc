import React, { useState } from 'react';
import { TrendingUp, Ship, Users, UsersRound, Factory, PieChart as PieChartIcon, ArrowDownRight } from 'lucide-react';
import { Language } from '../../types';
import { TabPills } from './TabPills';
import { BarChart } from '../charts/BarChart';
import { DonutChart } from '../charts/DonutChart';
import {
  DASHBOARD_REVENUE,
  DASHBOARD_VOLUME,
  DASHBOARD_GENDER_ROWS,
  DASHBOARD_AGE_ROWS,
  DASHBOARD_EMISSIONS,
  DASHBOARD_EMISSION_BREAKDOWN,
  DASHBOARD_REDUCTION
} from '../../data/content';

interface DashboardTabProps {
  language: Language;
}

const DASHBOARD_TABS = [
  { id: 'governance', labelZh: '治理面', labelEn: 'Governance' },
  { id: 'social', labelZh: '社會面', labelEn: 'Social' },
  { id: 'environment', labelZh: '環境面', labelEn: 'Environment' }
];

const LATEST_YEAR = Math.max(...DASHBOARD_REVENUE.map((d) => d.year));

// Chart colors for multi-segment donut breakdowns — all blue, per the site's
// established chart palette, spread across the full dark-to-light range
// (navy → brand blue → sky → pale blue-300) rather than four closely-spaced
// mid-tones so adjacent segments stay distinguishable at this chart size.
const CHART_SCALE = ['var(--color-navy)', 'var(--color-cta)', 'var(--color-sky)', 'var(--color-blue-300)'];

const formatBillion = (v: number) => `${(v / 100000).toFixed(2)} 億元`;
const formatTenKTeu = (v: number) => `${(v / 10000).toFixed(1)} 萬TEU`;
const formatTonnes = (v: number) => `${v.toLocaleString('en-US', { maximumFractionDigits: 2 })} tCO2e`;

// Icon+title stacked above full-width content (not side-by-side) — these
// cards now sit two-up on desktop ("電腦版...左右區塊排放"), so the content
// column needs the card's full width rather than sharing it with a fixed
// label column.
const MetricRow: React.FC<{
  icon: React.ReactNode;
  titleZh: string;
  titleEn: string;
  language: Language;
  children: React.ReactNode;
}> = ({ icon, titleZh, titleEn, language, children }) => (
  <div className="flex flex-col gap-4 bg-white border border-slate-200 rounded-[var(--radius-card)] p-5 sm:p-6 layer-shadow-soft h-full">
    <div className="flex items-center gap-3 shrink-0">
      <div className="w-10 h-10 rounded-full bg-[var(--color-blue-100)] text-[var(--color-cta)] flex items-center justify-center shrink-0">
        {icon}
      </div>
      <span className="text-base sm:text-lg font-bold text-[var(--color-ink)]">
        {language === 'zh' ? titleZh : titleEn}
      </span>
    </div>
    <div className="flex-1 min-w-0">{children}</div>
  </div>
);

// Donut chart + its total value/label, stacked below the ring rather than
// crammed into its hole — reads more clearly at this chart size than tiny
// centered text ever did.
const DonutWithTotal: React.FC<{ data: { label: string; value: number; color: string }[]; totalValue: string; totalLabel: string }> = ({
  data,
  totalValue,
  totalLabel
}) => (
  <div className="flex flex-col items-center gap-2 shrink-0">
    <DonutChart data={data} />
    <div className="text-center">
      <div className="text-base sm:text-xl font-extrabold text-[var(--color-ink)] leading-tight">{totalValue}</div>
      <div className="text-[10px] sm:text-xs text-[var(--color-text-secondary)] mt-0.5 leading-tight">{totalLabel}</div>
    </div>
  </div>
);

export const DashboardTab: React.FC<DashboardTabProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState(DASHBOARD_TABS[0].id);

  const revenueData = DASHBOARD_REVENUE.map((d) => ({ label: `${d.year}`, value: d.value, highlight: d.year === LATEST_YEAR }));
  const volumeData = DASHBOARD_VOLUME.map((d) => ({ label: `${d.year}`, value: d.value, highlight: d.year === LATEST_YEAR }));
  const emissionsData = DASHBOARD_EMISSIONS.map((d) => ({ label: `${d.year}`, value: d.value, highlight: d.year === LATEST_YEAR }));

  const emissionTotal = DASHBOARD_EMISSIONS.find((d) => d.year === LATEST_YEAR)?.value ?? 0;
  const emissionDonutData = DASHBOARD_EMISSION_BREAKDOWN.map((d, i) => ({
    label: language === 'zh' ? d.labelZh : d.labelEn,
    value: d.percent,
    color: CHART_SCALE[i % CHART_SCALE.length]
  }));

  const ageTotal = DASHBOARD_AGE_ROWS.reduce((sum, r) => sum + r.male + r.female, 0);
  const ageDonutData = DASHBOARD_AGE_ROWS.map((r, i) => ({
    label: language === 'zh' ? r.labelZh : r.labelEn,
    value: r.male + r.female,
    color: CHART_SCALE[i % CHART_SCALE.length]
  }));

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <TabPills
        tabs={DASHBOARD_TABS.map((t) => ({ id: t.id, label: language === 'zh' ? t.labelZh : t.labelEn }))}
        activeId={activeTab}
        onChange={setActiveTab}
      />

      {activeTab === 'governance' && (
        <div key="governance" className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:items-start lg:gap-5 animate-in fade-in duration-300">
          <MetricRow icon={<TrendingUp className="w-5 h-5" />} titleZh="營業收入" titleEn="Revenue" language={language}>
            <BarChart data={revenueData} formatValue={formatBillion} />
          </MetricRow>
          <MetricRow icon={<Ship className="w-5 h-5" />} titleZh="營運量（碼頭前線 TEU）" titleEn="Throughput (TEU)" language={language}>
            <BarChart data={volumeData} formatValue={formatTenKTeu} />
          </MetricRow>
        </div>
      )}

      {activeTab === 'social' && (
        <div key="social" className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:items-start lg:gap-5 animate-in fade-in duration-300">
          <MetricRow icon={<Users className="w-5 h-5" />} titleZh="人力類別（男女比例）" titleEn="Workforce by Category" language={language}>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {DASHBOARD_GENDER_ROWS.map((row, i) => {
                  const total = row.male + row.female;
                  const malePct = total > 0 ? ((row.male / total) * 100).toFixed(1) : '0';
                  const femalePct = total > 0 ? ((row.female / total) * 100).toFixed(1) : '0';
                  const genderDonutData = [
                    { label: language === 'zh' ? '男' : 'Male', value: row.male, color: 'var(--color-cta)' },
                    { label: language === 'zh' ? '女' : 'Female', value: row.female, color: 'var(--color-orange)' }
                  ];
                  return (
                    <div key={i} className="flex flex-col items-center gap-2 text-center">
                      <DonutChart data={genderDonutData} size="sm" />
                      <span className="text-sm sm:text-base font-bold text-[var(--color-ink)]">
                        {language === 'zh' ? row.labelZh : row.labelEn}
                      </span>
                      <span className="text-[10px] sm:text-xs text-[var(--color-text-secondary)] leading-tight">
                        {language === 'zh' ? `男 ${malePct}% ／ 女 ${femalePct}%` : `M ${malePct}% / F ${femalePct}%`}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-center gap-4 text-xs sm:text-sm text-[var(--color-text-secondary)]">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[var(--color-cta)]" />
                  {language === 'zh' ? '男' : 'Male'}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[var(--color-orange)]" />
                  {language === 'zh' ? '女' : 'Female'}
                </span>
              </div>
            </div>
          </MetricRow>

          <MetricRow icon={<UsersRound className="w-5 h-5" />} titleZh="人力結構（依年齡）" titleEn="Workforce by Age" language={language}>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <DonutWithTotal
                data={ageDonutData}
                totalValue={ageTotal.toLocaleString()}
                totalLabel={language === 'zh' ? '總人數' : 'Total'}
              />
              <div className="flex-1 w-full flex flex-col gap-2.5">
                {DASHBOARD_AGE_ROWS.map((row, i) => {
                  const total = row.male + row.female;
                  const sharePct = ageTotal > 0 ? ((total / ageTotal) * 100).toFixed(1) : '0';
                  return (
                    <div key={i} className="flex items-center justify-between text-sm sm:text-base">
                      <span className="flex items-center gap-2 font-bold text-[var(--color-ink)]">
                        <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: CHART_SCALE[i % CHART_SCALE.length] }} />
                        {language === 'zh' ? row.labelZh : row.labelEn}
                      </span>
                      <span className="text-[var(--color-text-secondary)]">{sharePct}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </MetricRow>
        </div>
      )}

      {activeTab === 'environment' && (
        <div key="environment" className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:items-start lg:gap-5 animate-in fade-in duration-300">
          <MetricRow icon={<Factory className="w-5 h-5" />} titleZh="溫室氣體排放量" titleEn="GHG Emissions" language={language}>
            <BarChart data={emissionsData} formatValue={formatTonnes} />
          </MetricRow>

          <MetricRow
            icon={<PieChartIcon className="w-5 h-5" />}
            titleZh={`${LATEST_YEAR} 年排放結構`}
            titleEn={`${LATEST_YEAR} Emission Structure`}
            language={language}
          >
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <DonutWithTotal
                data={emissionDonutData}
                totalValue={formatTonnes(emissionTotal)}
                totalLabel={language === 'zh' ? '總排放量' : 'Total'}
              />
              <div className="flex-1 w-full flex flex-col gap-2.5">
                {DASHBOARD_EMISSION_BREAKDOWN.map((d, i) => (
                  <div key={i} className="flex items-center justify-between text-sm sm:text-base">
                    <span className="flex items-center gap-2 font-bold text-[var(--color-ink)]">
                      <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: CHART_SCALE[i % CHART_SCALE.length] }} />
                      {language === 'zh' ? d.labelZh : d.labelEn}
                    </span>
                    <span className="text-[var(--color-text-secondary)]">{d.percent}%</span>
                  </div>
                ))}
              </div>
            </div>
          </MetricRow>

          <div className="lg:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 bg-[var(--color-blue-100)] border border-[var(--color-blue-300)]/60 rounded-[var(--radius-card)] px-5 py-5 sm:px-8 sm:py-6">
            <div className="flex items-center gap-2 shrink-0">
              <ArrowDownRight className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--color-cta)]" />
              <span className="text-3xl sm:text-5xl font-extrabold text-[var(--color-cta)] tracking-tight">
                {DASHBOARD_REDUCTION.percentLabel}
              </span>
            </div>
            <p className="text-sm sm:text-base text-[var(--color-ink)] font-medium text-left">
              {language === 'zh'
                ? `${LATEST_YEAR} 年較 2023 年：${DASHBOARD_REDUCTION.descZh}`
                : DASHBOARD_REDUCTION.descEn}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
