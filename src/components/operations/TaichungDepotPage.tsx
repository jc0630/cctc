import React, { useState } from 'react';
import { Container, Warehouse, Building2, Wrench, Construction, Forklift, PackageSearch, Truck, Snowflake, PlugZap, Boxes } from 'lucide-react';
import { Language, TaichungStatItem, TaichungStatSection, TaichungBerthSpecTable } from '../../types';
import { PageBanner } from '../shared/PageBanner';
import { FadeInSection } from '../shared/FadeInSection';
import { TabPills } from '../sustainability/TabPills';
import {
  TAICHUNG_DEPOT_BANNER_IMAGE,
  TAICHUNG_DEPOT_BANNER_MOBILE_IMAGE,
  TAICHUNG_DEPOT_BANNER_TITLE_ZH,
  TAICHUNG_DEPOT_TERMINALS
} from '../../data/content';

interface TaichungDepotPageProps {
  language: Language;
}

const STAT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  yard: Container,
  warehouse: Warehouse,
  building: Building2,
  workshop: Wrench,
  crane: Construction,
  stacker: Forklift,
  handler: PackageSearch,
  forklift: Forklift,
  chassis: Truck,
  reefer: Snowflake,
  generator: PlugZap,
  tractor: Truck,
  capacity: Boxes
};

// Same stat-tile recipe as AboutSection's 4 homepage fact tiles (icon chip +
// big number + label) — reused here so facility/equipment/capacity figures
// read consistently with the rest of the site instead of inventing a new
// card style for this page.
const StatTile: React.FC<{ item: TaichungStatItem; language: Language }> = ({ item, language }) => {
  const Icon = STAT_ICONS[item.iconKey] ?? Boxes;
  return (
    <div className="bg-white border border-slate-200 hover:border-[var(--color-cta)] p-3 sm:p-4 rounded-[var(--radius-card)] flex flex-col items-center text-center transition-all duration-300 layer-shadow-soft group">
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[var(--color-blue-100)] text-[var(--color-cta)] flex items-center justify-center mb-1.5 sm:mb-2 group-hover:bg-[var(--color-cta)] group-hover:text-white transition-colors duration-300">
        <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
      </div>
      <span className="text-xl sm:text-2xl lg:text-3xl text-[var(--color-cta)] font-extrabold mb-1 tracking-tight group-hover:text-[var(--color-cta-hover)] transition-colors duration-300">
        {item.valueZh}
        <span className="text-sm sm:text-base font-bold ml-1">{language === 'zh' ? item.unitZh : item.unitEn}</span>
      </span>
      <span className="text-xs sm:text-sm text-[var(--color-text-body)] font-bold leading-tight">
        {language === 'zh' ? item.labelZh : item.labelEn}
      </span>
    </div>
  );
};

const StatSectionBlock: React.FC<{ section: TaichungStatSection; language: Language }> = ({ section, language }) => (
  <div className="flex flex-col gap-4 sm:gap-5">
    <h2 className="section-title self-start text-lg sm:text-xl font-bold">
      {language === 'zh' ? section.titleZh : section.titleEn}
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
      {section.items.map((item, i) => (
        <StatTile key={i} item={item} language={language} />
      ))}
    </div>
  </div>
);

// Berth specs (碼頭長度／限制水深／繫樁數目) are genuinely tabular — one row
// per named berth — so this is the only part of the page that needs a real
// <table> rather than the stat-tile grid.
const BerthSpecTableBlock: React.FC<{ table: TaichungBerthSpecTable; language: Language }> = ({ table, language }) => (
  <div className="flex flex-col gap-4 sm:gap-5">
    <h2 className="section-title self-start text-lg sm:text-xl font-bold">
      {language === 'zh' ? table.titleZh : table.titleEn}
    </h2>
    <div className="overflow-x-auto rounded-[var(--radius-card)] border border-slate-200 layer-shadow-soft">
      <table className="w-full min-w-[480px] border-collapse text-sm sm:text-base">
        <thead>
          <tr className="bg-[var(--color-blue-100)]">
            <th className="px-4 py-3 text-left font-bold text-[var(--color-cta)] whitespace-nowrap">
              {language === 'zh' ? table.rowHeaderZh : table.rowHeaderEn}
            </th>
            {table.columns.map((col, i) => (
              <th key={i} className="px-4 py-3 text-left font-bold text-[var(--color-cta)] whitespace-nowrap">
                {language === 'zh' ? col.labelZh : col.labelEn}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? 'bg-slate-50' : 'bg-white'}>
              <td className="px-4 py-3 font-bold text-[var(--color-ink)] border-t border-slate-200 whitespace-nowrap">{row.name}</td>
              {row.values.map((v, j) => (
                <td key={j} className="px-4 py-3 text-[var(--color-text-secondary)] border-t border-slate-200">{v}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// 「營運服務」單元：台中貨櫃集散站 — two tabs (10-11號碼頭／31號碼頭), each a
// self-contained terminal fact sheet (facilities, equipment, berth specs or
// yard capacity, and the real site-layout map) rather than separate pages,
// matching the tab-based presentation the client asked for.
export const TaichungDepotPage: React.FC<TaichungDepotPageProps> = ({ language }) => {
  const terminals = TAICHUNG_DEPOT_TERMINALS;
  const [activeId, setActiveId] = useState(terminals[0].id);
  const active = terminals.find((t) => t.id === activeId) ?? terminals[0];

  return (
    <div>
      <PageBanner
        image={TAICHUNG_DEPOT_BANNER_IMAGE}
        mobileImage={TAICHUNG_DEPOT_BANNER_MOBILE_IMAGE}
        titleZh={TAICHUNG_DEPOT_BANNER_TITLE_ZH}
      />

      <section className="w-full py-[20px] sm:py-[35px] lg:py-[50px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="flex flex-col gap-6 sm:gap-8">
              <TabPills
                tabs={terminals.map((t) => ({ id: t.id, label: language === 'zh' ? t.labelZh : t.labelEn }))}
                activeId={activeId}
                onChange={setActiveId}
              />

              <div key={active.id} className="flex flex-col gap-10 sm:gap-14 animate-in fade-in duration-300">
                <StatSectionBlock section={active.facilityStats} language={language} />
                <StatSectionBlock section={active.equipmentStats} language={language} />
                {active.specTable && <BerthSpecTableBlock table={active.specTable} language={language} />}
                {active.extraStats && <StatSectionBlock section={active.extraStats} language={language} />}

                <div className="flex flex-col gap-4 sm:gap-5">
                  <h2 className="section-title self-start text-lg sm:text-xl font-bold">
                    {language === 'zh' ? '場地圖' : 'Site Layout Map'}
                  </h2>
                  {/* Technical diagrams stay horizontally scrollable on mobile
                      (min-w floor) instead of being squeezed illegibly small
                      at full width — desktop shows the full map at once. */}
                  <div className="overflow-x-auto rounded-[var(--radius-panel)] border border-[var(--color-blue-300)]/50 layer-shadow-raised bg-white p-2 sm:p-3">
                    <img
                      src={active.layoutImage}
                      alt={language === 'zh' ? active.layoutImageCaptionZh : active.layoutImageCaptionEn}
                      className="min-w-[700px] sm:min-w-0 w-full h-auto rounded-[var(--radius-card)]"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-snug">
                    {language === 'zh' ? active.layoutImageCaptionZh : active.layoutImageCaptionEn}
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};
