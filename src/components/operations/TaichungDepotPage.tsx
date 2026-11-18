import React, { useState } from 'react';
import {
  Container,
  Warehouse,
  Building2,
  Wrench,
  Construction,
  Forklift,
  PackageSearch,
  Truck,
  Snowflake,
  PlugZap,
  Boxes,
  Image as ImageIcon,
  ArrowRight,
  Anchor,
  MapPin,
  Download
} from 'lucide-react';
import { Language, TaichungDepotTerminal, TaichungStatSection, TaichungBerthSpecTable } from '../../types';
import { PageBanner } from '../shared/PageBanner';
import { PageSection } from '../shared/PageSection';
import { SectionTitle } from '../shared/SectionTitle';
import { StatTile } from '../shared/StatTile';
import { ImageLightbox, ZoomButton } from '../shared/ImageLightbox';
import {
  TAICHUNG_DEPOT_BANNER_IMAGE,
  TAICHUNG_DEPOT_BANNER_MOBILE_IMAGE,
  TAICHUNG_DEPOT_BANNER_EYEBROW_ZH,
  TAICHUNG_DEPOT_BANNER_TITLE_ZH,
  TAICHUNG_DEPOT_INTRO_ZH,
  TAICHUNG_DEPOT_INTRO_EN,
  TAICHUNG_DEPOT_ADDRESS_ZH,
  TAICHUNG_DEPOT_ADDRESS_EN,
  TAICHUNG_DEPOT_TERMINALS
} from '../../data/content';

// Terminal labels carry a "台中 " prefix (e.g. "台中 10-11 號碼頭") so the
// banner/quick-links/cards all read consistently; the entry card's title
// splits it back out to style the station name and the terminal number
// separately (station name can wrap to its own line on mobile, the number
// never breaks mid-string).
const splitStationLabel = (label: string) => {
  const spaceIndex = label.indexOf(' ');
  return spaceIndex === -1 ? { prefix: label, rest: '' } : { prefix: label.slice(0, spaceIndex), rest: label.slice(spaceIndex + 1) };
};

interface TaichungDepotPageProps {
  language: Language;
  onNavigateSection: (sectionId: string) => void;
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

const StatSectionBlock: React.FC<{ section: TaichungStatSection; language: Language; lgCols?: 4 | 5 }> = ({ section, language, lgCols = 4 }) => (
  <div className="flex flex-col gap-4 sm:gap-5">
    <SectionTitle size="lg">{language === 'zh' ? section.titleZh : section.titleEn}</SectionTitle>
    <div className={`grid grid-cols-2 sm:grid-cols-3 ${lgCols === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4'} gap-3 sm:gap-4`}>
      {section.items.map((item, i) => (
        <StatTile
          key={i}
          icon={STAT_ICONS[item.iconKey] ?? Boxes}
          value={item.valueZh}
          unit={language === 'zh' ? item.unitZh : item.unitEn}
          label={language === 'zh' ? item.labelZh : item.labelEn}
        />
      ))}
    </div>
  </div>
);

// Reserved layout slot for real equipment photography the client hasn't
// supplied yet (see 三 in the brief — "設備圖片後續提供，請先預留圖片配置
//位置"). Swapping in real photos later is a one-line content.ts change, no
// further code change needed.
const EquipmentPhotoPlaceholder: React.FC<{ language: Language }> = ({ language }) => (
  <div className="aspect-[4/3] rounded-[var(--radius-card)] border border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center gap-2 text-slate-400">
    <ImageIcon className="w-8 h-8 sm:w-10 sm:h-10" />
    <span className="text-xs sm:text-sm font-semibold">{language === 'zh' ? '照片製作中' : 'Photo coming soon'}</span>
  </div>
);

// Equipment: a 3-photo row (placeholders for now) above a compact 5-tile
// stat grid — replaces the old "one card per equipment type" layout (10 and
// 9 granular items respectively) that ran too long on mobile. See 三.
const EquipmentSectionBlock: React.FC<{ section: TaichungStatSection; language: Language }> = ({ section, language }) => (
  <div className="flex flex-col gap-4 sm:gap-5">
    <SectionTitle size="lg">{language === 'zh' ? section.titleZh : section.titleEn}</SectionTitle>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
      <EquipmentPhotoPlaceholder language={language} />
      <EquipmentPhotoPlaceholder language={language} />
      <EquipmentPhotoPlaceholder language={language} />
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
      {section.items.map((item, i) => (
        <StatTile
          key={i}
          icon={STAT_ICONS[item.iconKey] ?? Boxes}
          value={item.valueZh}
          unit={language === 'zh' ? item.unitZh : item.unitEn}
          label={language === 'zh' ? item.labelZh : item.labelEn}
        />
      ))}
    </div>
  </div>
);

// Berth specs (碼頭長度／限制水深／繫樁數目) are genuinely tabular — one row
// per named berth — so this is the only part of the page that needs a real
// <table> rather than the stat-tile grid.
const BerthSpecTableBlock: React.FC<{ table: TaichungBerthSpecTable; language: Language }> = ({ table, language }) => (
  <div className="flex flex-col gap-4 sm:gap-5">
    <SectionTitle size="lg">{language === 'zh' ? table.titleZh : table.titleEn}</SectionTitle>
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

// Site layout map: zoomable (放大檢視), a Google Maps link for driver/
// visitor navigation, and a PDF download folded into the caption itself
// (see TaichungDepotTerminal.layoutPdfUrl) — styled as a live link even
// before the client supplies the real file, per their request to design
// it as a demo placeholder in the meantime.
const MapSection: React.FC<{ terminal: TaichungDepotTerminal; language: Language }> = ({ terminal, language }) => {
  const [zoomOpen, setZoomOpen] = useState(false);
  const caption = language === 'zh' ? terminal.layoutImageCaptionZh : terminal.layoutImageCaptionEn;
  const address = language === 'zh' ? TAICHUNG_DEPOT_ADDRESS_ZH : TAICHUNG_DEPOT_ADDRESS_EN;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="flex flex-col gap-4 sm:gap-5">
      <SectionTitle size="lg">{language === 'zh' ? '場地圖' : 'Site Layout Map'}</SectionTitle>
      {/* Scales down to fit the viewport at every width instead of keeping
          a min-width floor, so mobile shows the whole map with no
          horizontal scroll; the zoom button still opens the full-resolution
          image in a lightbox for a closer look at the dense labels. */}
      <div className="relative rounded-[var(--radius-panel)] border border-[var(--color-blue-300)]/50 layer-shadow-raised bg-white p-2 sm:p-3">
        <img
          src={terminal.layoutImage}
          alt={caption}
          className="w-full h-auto rounded-[var(--radius-card)]"
        />
        <ZoomButton onClick={() => setZoomOpen(true)} />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        {/* The caption itself is the PDF-download trigger (client hasn't
            supplied the real file yet, so this renders as a styled demo
            link rather than being gated behind layoutPdfUrl like the other
            optional downloads on this site — once the real PDF is added to
            layoutPdfUrl, this becomes a live download with no further
            changes needed). */}
        <a
          href={terminal.layoutPdfUrl ?? '#'}
          download={terminal.layoutPdfUrl ? true : undefined}
          onClick={(e) => {
            if (!terminal.layoutPdfUrl) e.preventDefault();
          }}
          className="group inline-flex items-start gap-1.5 text-xs sm:text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-cta)] leading-snug transition-colors"
        >
          <Download className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-cta)] group-hover:text-[var(--color-cta-hover)]" />
          <span className="underline decoration-dotted underline-offset-2">
            {caption}（{language === 'zh' ? 'PDF下載' : 'PDF Download'}）
          </span>
        </a>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[var(--color-cta)] hover:text-[var(--color-cta-hover)] transition-colors shrink-0"
        >
          <MapPin className="w-4 h-4" />
          {language === 'zh' ? 'Google地圖導航' : 'Navigate via Google Maps'}
        </a>
      </div>
      {zoomOpen && <ImageLightbox image={terminal.layoutImage} imageAlt={caption} onClose={() => setZoomOpen(false)} />}
    </div>
  );
};

const ContactCTA: React.FC<{ language: Language; onNavigateSection: (sectionId: string) => void }> = ({ language, onNavigateSection }) => (
  <button type="button" onClick={() => onNavigateSection('site-footer')} className="self-end btn-explore group">
    <span>{language === 'zh' ? '業務洽詢' : 'Contact Sales'}</span>
    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
  </button>
);

// Entry card for a terminal — photo + centered name, same compact framing
// as the homepage's Taiwan Operations station cards (not the old wider
// intro-paragraph card) since there are only ever two of these and they sit
// centered in the grid (lg:col-start-2 on the first one) rather than filling
// the full row width.
const TerminalEntryCard: React.FC<{ terminal: TaichungDepotTerminal; language: Language; onSelect: () => void; centerOnDesktop?: boolean }> = ({
  terminal,
  language,
  onSelect,
  centerOnDesktop
}) => {
  const label = language === 'zh' ? terminal.labelZh : terminal.labelEn;
  const { prefix, rest } = splitStationLabel(label);
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`interactive-card interactive-card--accent w-full text-left h-full flex flex-col group rounded-[var(--radius-panel)] border-[var(--color-blue-300)]/60 overflow-hidden bg-white layer-shadow-soft cursor-pointer ${
        centerOnDesktop ? 'lg:col-start-2' : ''
      }`}
    >
      <div className="relative overflow-hidden aspect-[4/3] bg-slate-100">
        <img
          src={terminal.cardImage}
          alt={label}
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col items-center gap-1.5 px-4 pt-3.5 pb-4 flex-1">
        <h3 className="text-base sm:text-xl font-bold text-center text-balance text-[var(--color-ink)] leading-snug">
          <span className="block sm:inline">{prefix}</span> <span className="whitespace-nowrap">{rest}</span>
        </h3>
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-cta)] group-hover:text-[var(--color-cta-hover)] transition-colors">
          {language === 'zh' ? '了解更多' : 'Explore More'}
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </button>
  );
};

// 「營運服務」單元：台中貨櫃集散站 — an entry screen (depot intro + a card
// per terminal) leading into each terminal's own detail view (facilities,
// equipment, berth specs/yard capacity, site map). This SPA has no router
// (see App.tsx's VIEW_SENTINELS/currentView pattern), so "entering" a
// terminal's detail view is a local state swap rather than a real
// navigation — consistent with how every other "page" on this site already
// works, and reusable as-is for Kaohsiung if the same structure is needed
// there later. If a directly shareable/bookmarkable link into one specific
// terminal is wanted, that's a small follow-up (extending the existing
// `?page=` convention in App.tsx), not a redesign of this component.
export const TaichungDepotPage: React.FC<TaichungDepotPageProps> = ({ language, onNavigateSection }) => {
  const terminals = TAICHUNG_DEPOT_TERMINALS;
  const [activeTerminalId, setActiveTerminalId] = useState<string | null>(null);
  const active = terminals.find((t) => t.id === activeTerminalId) ?? null;

  const selectTerminal = (id: string) => {
    setActiveTerminalId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToEntry = () => {
    setActiveTerminalId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Drilled into a terminal: the eyebrow becomes a clickable "back to
          depot" breadcrumb and the title/description switch to that
          terminal's own name and intro, replacing the separate back-link +
          heading block that used to sit below the banner. */}
      <PageBanner
        image={TAICHUNG_DEPOT_BANNER_IMAGE}
        mobileImage={TAICHUNG_DEPOT_BANNER_MOBILE_IMAGE}
        eyebrowZh={active ? TAICHUNG_DEPOT_BANNER_TITLE_ZH : TAICHUNG_DEPOT_BANNER_EYEBROW_ZH}
        onEyebrowClick={active ? backToEntry : undefined}
        titleZh={active ? (language === 'zh' ? active.labelZh : active.labelEn) : TAICHUNG_DEPOT_BANNER_TITLE_ZH}
        descriptionZh={active ? (language === 'zh' ? active.introZh : active.introEn) : undefined}
        overlay={false}
        mobileAspectRatio={active ? undefined : '800/360'}
        desktopAspectRatio={active ? undefined : '1920/430'}
        quickLinks={
          active
            ? undefined
            : terminals.map((terminal) => ({
                label: language === 'zh' ? terminal.labelZh : terminal.labelEn,
                onClick: () => selectTerminal(terminal.id)
              }))
        }
      />

      {!active ? (
        <>
          {/* Mobile equivalent of the banner's desktop quick-links bar —
              homepage-style cards instead of a text overlay, since there's
              no room on the short mobile banner crop for the gradient bar. */}
          <div className="lg:hidden grid grid-cols-2 gap-3 sm:gap-4 px-4 sm:px-6 pt-5 bg-white">
            {terminals.map((terminal) => (
              <button
                key={terminal.id}
                type="button"
                onClick={() => selectTerminal(terminal.id)}
                className="interactive-card interactive-card--accent group flex flex-col items-center gap-2 px-3 py-4 rounded-[var(--radius-panel)] border-[var(--color-blue-300)]/60 bg-white layer-shadow-soft text-[var(--color-cta)] cursor-pointer"
              >
                <Anchor className="w-6 h-6 sm:w-7 sm:h-7" />
                <span className="text-sm font-bold tracking-wide text-[var(--color-ink)]">
                  {language === 'zh' ? terminal.labelZh : terminal.labelEn}
                </span>
              </button>
            ))}
          </div>

          <PageSection>
            <div className="flex flex-col gap-5 sm:gap-6">
              <SectionTitle>{language === 'zh' ? '場站簡介' : 'Depot Overview'}</SectionTitle>
              <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-loose">
                {language === 'zh' ? TAICHUNG_DEPOT_INTRO_ZH : TAICHUNG_DEPOT_INTRO_EN}
              </p>
            </div>
          </PageSection>

          <PageSection>
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {terminals.map((terminal, i) => (
                  <TerminalEntryCard
                    key={terminal.id}
                    terminal={terminal}
                    language={language}
                    onSelect={() => selectTerminal(terminal.id)}
                    centerOnDesktop={i === 0}
                  />
                ))}
              </div>
              <ContactCTA language={language} onNavigateSection={onNavigateSection} />
            </div>
          </PageSection>
        </>
      ) : (
        <PageSection>
          <div key={active.id} className="flex flex-col gap-10 sm:gap-14 animate-in fade-in duration-300">
            <StatSectionBlock section={active.facilityStats} language={language} />
            <EquipmentSectionBlock section={active.equipmentStats} language={language} />
            {active.specTable && <BerthSpecTableBlock table={active.specTable} language={language} />}
            <MapSection terminal={active} language={language} />
            <ContactCTA language={language} onNavigateSection={onNavigateSection} />
          </div>
        </PageSection>
      )}
    </div>
  );
};
