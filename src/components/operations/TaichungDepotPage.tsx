import React, { useState } from 'react';
import { ArrowRight, MapPin, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language, TaichungDepotTerminal, TaichungStatItem, TaichungBerthSpecTable, TaichungSitePhoto } from '../../types';
import { PageBanner } from '../shared/PageBanner';
import { PageSection } from '../shared/PageSection';
import { SectionTitle } from '../shared/SectionTitle';
import { TabPills } from '../sustainability/TabPills';
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

interface TaichungDepotPageProps {
  language: Language;
  onNavigateSection: (sectionId: string) => void;
}

// One labeled row-group within the merged spec table below — a left label
// column (category name, e.g. "場地及建築物規模") beside a 2-col grid of
// label/value pairs. Replaces the old per-category StatTile grid (with its
// equipment-photo placeholders) with a single continuous table-like block
// now that real photos have their own section further down the page.
const StatRowGroup: React.FC<{ titleZh: string; titleEn: string; items: TaichungStatItem[]; language: Language }> = ({
  titleZh,
  titleEn,
  items,
  language
}) => (
  <div className="grid grid-cols-1 sm:grid-cols-[11rem_1fr] border-b border-slate-200">
    <div className="bg-[var(--color-blue-100)] px-4 py-3 sm:py-5 text-sm sm:text-base font-bold text-[var(--color-cta-hover)] sm:flex sm:items-center">
      {language === 'zh' ? titleZh : titleEn}
    </div>
    <div className="px-4 sm:px-6 py-3 sm:py-4">
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-baseline justify-between gap-4 py-2 border-b border-dashed border-slate-200 last:border-b-0 sm:[&:nth-last-child(2):nth-child(odd)]:border-b-0"
          >
            <dt className="text-sm sm:text-base text-[var(--color-ink)] leading-snug">{language === 'zh' ? item.labelZh : item.labelEn}</dt>
            <dd className="shrink-0 text-right">
              <span className="text-[19px] sm:text-[21px] font-bold text-[var(--color-cta)]">{item.valueZh}</span>
              {(language === 'zh' ? item.unitZh : item.unitEn) && (
                <span className="ml-1 text-xs sm:text-sm font-bold text-[var(--color-text-secondary)]">
                  {language === 'zh' ? item.unitZh : item.unitEn}
                </span>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
);

// Berth specs (碼頭長度／限制水深／繫樁數目) get their own row layout within
// the same label-column pattern as StatRowGroup — one row per named berth,
// each wrapping its label/value pairs inline instead of a 2-col grid (a
// genuine small table would be overkill for 2-3 berths).
const BerthSpecRowGroup: React.FC<{ table: TaichungBerthSpecTable; language: Language }> = ({ table, language }) => (
  <div className="grid grid-cols-1 sm:grid-cols-[11rem_1fr] border-b border-slate-200">
    <div className="bg-[var(--color-blue-100)] px-4 py-3 sm:py-5 text-sm sm:text-base font-bold text-[var(--color-cta-hover)] sm:flex sm:items-center">
      {language === 'zh' ? table.titleZh : table.titleEn}
    </div>
    <div className="px-4 sm:px-6 py-3 sm:py-4">
      <div className="flex flex-col">
        {table.rows.map((row, i) => (
          <div key={i} className="py-2.5 border-b border-dashed border-slate-200 last:border-b-0 sm:flex sm:flex-wrap sm:items-baseline sm:gap-x-8 sm:gap-y-1">
            <p className="mb-1 sm:mb-0 sm:w-12 text-sm sm:text-base font-bold text-[var(--color-ink)]">{row.name}</p>
            {row.values.map((v, j) => (
              <p key={j} className="flex items-baseline justify-between gap-4 py-0.5 sm:py-0 text-sm sm:text-base text-[var(--color-ink)]">
                <span>{language === 'zh' ? table.columns[j].labelZh : table.columns[j].labelEn}</span>
                <span className="sm:ml-2 text-[19px] sm:text-[21px] font-bold text-[var(--color-cta)]">{v}</span>
              </p>
            ))}
          </div>
        ))}
      </div>
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

// Real equipment/site photos — 3-across on desktop; mobile shows one at a
// time with a prev/next pager (cycles, no dot indicators) since 3 columns
// of these would run too small on a narrow screen.
const PhotoShowcase: React.FC<{ photos: TaichungSitePhoto[]; language: Language }> = ({ photos, language }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = photos[activeIndex];
  const alt = (photo: TaichungSitePhoto) => (language === 'zh' ? photo.altZh : photo.altEn);

  return (
    <>
      <div className="sm:hidden">
        <div className="relative">
          <div>
            <img alt={alt(active)} loading="lazy" className="w-full aspect-[3/2] object-cover rounded-[var(--radius-card)] border border-[var(--color-blue-300)]/50" src={active.src} />
          </div>
          <button
            type="button"
            aria-label={language === 'zh' ? '照片 previous' : 'Previous photo'}
            onClick={() => setActiveIndex((i) => (i - 1 + photos.length) % photos.length)}
            className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-black/35 hover:bg-black/55 text-white flex items-center justify-center transition-colors cursor-pointer left-2"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            aria-label={language === 'zh' ? '照片 next' : 'Next photo'}
            onClick={() => setActiveIndex((i) => (i + 1) % photos.length)}
            className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-black/35 hover:bg-black/55 text-white flex items-center justify-center transition-colors cursor-pointer right-2"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="hidden sm:grid grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <img
            key={i}
            alt={alt(photo)}
            loading="lazy"
            className="w-full aspect-[3/2] object-cover rounded-[var(--radius-card)] border border-[var(--color-blue-300)]/50"
            src={photo.src}
          />
        ))}
      </div>
    </>
  );
};

const ContactCTA: React.FC<{ language: Language; onNavigateSection: (sectionId: string) => void }> = ({ language, onNavigateSection }) => (
  <button type="button" onClick={() => onNavigateSection('site-footer')} className="self-end btn-explore group">
    <span>{language === 'zh' ? '聯絡資訊' : 'Contact'}</span>
    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
  </button>
);

// 「營運服務」單元：台中分公司 — one continuous page (fixed banner + depot
// intro), then a 2-tab switcher (centered, same TabPills capsule used
// throughout the Sustainability Strategy page) swapping in whichever
// terminal's own stats/map/photos below. Replaces the previous entry-screen
// + drill-down-view pattern: there are only ever two terminals, so a tab
// switch reads more directly than a separate "choose a terminal" step.
export const TaichungDepotPage: React.FC<TaichungDepotPageProps> = ({ language, onNavigateSection }) => {
  const terminals = TAICHUNG_DEPOT_TERMINALS;
  const [activeTerminalId, setActiveTerminalId] = useState(terminals[0].id);
  const active = terminals.find((t) => t.id === activeTerminalId) ?? terminals[0];

  return (
    <div>
      <PageBanner
        image={TAICHUNG_DEPOT_BANNER_IMAGE}
        mobileImage={TAICHUNG_DEPOT_BANNER_MOBILE_IMAGE}
        eyebrowZh={TAICHUNG_DEPOT_BANNER_EYEBROW_ZH}
        titleZh={TAICHUNG_DEPOT_BANNER_TITLE_ZH}
        overlay={false}
        mobileAspectRatio="800/360"
        desktopAspectRatio="1920/430"
      />

      <PageSection>
        <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-loose">
          {language === 'zh' ? TAICHUNG_DEPOT_INTRO_ZH : TAICHUNG_DEPOT_INTRO_EN}
        </p>
      </PageSection>

      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TabPills
            tabs={terminals.map((terminal) => ({ id: terminal.id, label: language === 'zh' ? terminal.labelZh : terminal.labelEn }))}
            activeId={activeTerminalId}
            onChange={setActiveTerminalId}
            align="center"
          />
        </div>
      </div>

      <PageSection>
        <div key={active.id} className="flex flex-col gap-10 sm:gap-14 animate-in fade-in duration-300">
          <div className="flex flex-col gap-5 sm:gap-6">
            <SectionTitle>{language === 'zh' ? active.fullTitleZh : active.fullTitleEn}</SectionTitle>
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-loose">
              {language === 'zh' ? active.introZh : active.introEn}
            </p>
          </div>

          <div className="border-t-2 border-[var(--color-ink)]">
            <StatRowGroup titleZh={active.facilityStats.titleZh} titleEn={active.facilityStats.titleEn} items={active.facilityStats.items} language={language} />
            <StatRowGroup titleZh={active.equipmentStats.titleZh} titleEn={active.equipmentStats.titleEn} items={active.equipmentStats.items} language={language} />
            {active.specTable && <BerthSpecRowGroup table={active.specTable} language={language} />}
          </div>

          <MapSection terminal={active} language={language} />

          <PhotoShowcase photos={active.sitePhotos} language={language} />

          <ContactCTA language={language} onNavigateSection={onNavigateSection} />
        </div>
      </PageSection>
    </div>
  );
};
