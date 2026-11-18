import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Language } from '../../types';
import { PageBanner } from '../shared/PageBanner';
import { PageSection } from '../shared/PageSection';
import { SectionTitle } from '../shared/SectionTitle';
import { SplitSection } from '../shared/SplitSection';
import { FaqAccordion } from '../shared/FaqAccordion';
import { ImageLightbox, ZoomButton } from '../shared/ImageLightbox';
import {
  COMPANY_PROFILE_BANNER_IMAGE,
  COMPANY_PROFILE_BANNER_MOBILE_IMAGE,
  COMPANY_PROFILE_BANNER_EYEBROW_ZH,
  COMPANY_PROFILE_BANNER_TITLE_ZH,
  COMPANY_PROFILE_SECTION_HISTORY_TITLE_ZH,
  COMPANY_PROFILE_SECTION_HISTORY_TITLE_EN,
  COMPANY_PROFILE_SECTION_CORE_SERVICES_TITLE_ZH,
  COMPANY_PROFILE_SECTION_CORE_SERVICES_TITLE_EN,
  COMPANY_PROFILE_SECTION_AFFILIATES_TITLE_ZH,
  COMPANY_PROFILE_SECTION_AFFILIATES_TITLE_EN,
  COMPANY_PROFILE_SECTION_MISSION_TITLE_ZH,
  COMPANY_PROFILE_SECTION_MISSION_TITLE_EN,
  COMPANY_PROFILE_FOUNDING_ZH,
  COMPANY_PROFILE_FOUNDING_EN,
  COMPANY_PROFILE_FOUNDING_IMAGE,
  COMPANY_PROFILE_FOUNDING_IMAGE_CAPTION_ZH,
  COMPANY_PROFILE_FOUNDING_IMAGE_CAPTION_EN,
  COMPANY_PROFILE_CORE_SERVICES_ZH,
  COMPANY_PROFILE_CORE_SERVICES_EN,
  COMPANY_PROFILE_CORE_SERVICES_VIDEO_ID,
  COMPANY_PROFILE_CORE_SERVICES_VIDEO_CAPTION_ZH,
  COMPANY_PROFILE_CORE_SERVICES_VIDEO_CAPTION_EN,
  COMPANY_PROFILE_CORE_SERVICES_IMAGE,
  COMPANY_PROFILE_CORE_SERVICES_IMAGE_CAPTION_ZH,
  COMPANY_PROFILE_CORE_SERVICES_IMAGE_CAPTION_EN,
  COMPANY_PROFILE_AFFILIATES_INTRO_ZH,
  COMPANY_PROFILE_AFFILIATES_INTRO_EN,
  COMPANY_PROFILE_AFFILIATES,
  COMPANY_PROFILE_AFFILIATES_IMAGE,
  COMPANY_PROFILE_AFFILIATES_IMAGE_CAPTION_ZH,
  COMPANY_PROFILE_AFFILIATES_IMAGE_CAPTION_EN,
  COMPANY_PROFILE_CERTIFICATIONS_ZH,
  COMPANY_PROFILE_CERTIFICATIONS_EN,
  COMPANY_PROFILE_MISSION_ZH,
  COMPANY_PROFILE_MISSION_EN,
  COMPANY_PROFILE_MISSION_IMAGE,
  COMPANY_PROFILE_MISSION_IMAGE_CAPTION_ZH,
  COMPANY_PROFILE_MISSION_IMAGE_CAPTION_EN,
  COMPANY_PROFILE_FAQ_ZH,
  COMPANY_PROFILE_FAQ_EN
} from '../../data/content';

interface CompanyProfilePageProps {
  language: Language;
  onNavigateSection: (sectionId: string) => void;
}

// Rebuilt per the client's PDF brief into 4 alternating text/image sections
// (成立背景與股票上市／核心服務與營運據點／集團協力服務 貨暢其流／經營理念與永續
// 發展) plus an FAQ accordion — the previous 2-section build is fully
// superseded (see content.ts's COMPANY_PROFILE_* constants).
export const CompanyProfilePage: React.FC<CompanyProfilePageProps> = ({ language, onNavigateSection }) => {
  const [coreServicesImageZoomOpen, setCoreServicesImageZoomOpen] = useState(false);

  return (
    <div>
      <PageBanner
        image={COMPANY_PROFILE_BANNER_IMAGE}
        mobileImage={COMPANY_PROFILE_BANNER_MOBILE_IMAGE}
        eyebrowZh={COMPANY_PROFILE_BANNER_EYEBROW_ZH}
        titleZh={COMPANY_PROFILE_BANNER_TITLE_ZH}
        overlay={false}
        mobileAspectRatio="800/360"
        desktopAspectRatio="1920/430"
      />

      <SplitSection
        titleZh={language === 'zh' ? COMPANY_PROFILE_SECTION_HISTORY_TITLE_ZH : COMPANY_PROFILE_SECTION_HISTORY_TITLE_EN}
        image={COMPANY_PROFILE_FOUNDING_IMAGE}
        imageAlt={language === 'zh' ? COMPANY_PROFILE_FOUNDING_IMAGE_CAPTION_ZH : COMPANY_PROFILE_FOUNDING_IMAGE_CAPTION_EN}
        imageCaption={language === 'zh' ? COMPANY_PROFILE_FOUNDING_IMAGE_CAPTION_ZH : COMPANY_PROFILE_FOUNDING_IMAGE_CAPTION_EN}
        zoomable
      >
        <p>{language === 'zh' ? COMPANY_PROFILE_FOUNDING_ZH : COMPANY_PROFILE_FOUNDING_EN}</p>
      </SplitSection>

      {/* 核心服務與營運據點 — full-width intro above a 2-col media grid
          (corporate video + a supporting photo) rather than SplitSection's
          single text/image pairing, since the brief calls for both media
          items side by side under one shared paragraph. */}
      <PageSection>
        <div className="flex flex-col gap-8 lg:gap-10">
          <div className="flex flex-col">
            <SectionTitle className="mb-5 sm:mb-6">
              {language === 'zh' ? COMPANY_PROFILE_SECTION_CORE_SERVICES_TITLE_ZH : COMPANY_PROFILE_SECTION_CORE_SERVICES_TITLE_EN}
            </SectionTitle>
            <div className="flex flex-col gap-4 text-sm sm:text-base text-[var(--color-text-secondary)] leading-loose">
              <p>{language === 'zh' ? COMPANY_PROFILE_CORE_SERVICES_ZH : COMPANY_PROFILE_CORE_SERVICES_EN}</p>
              <button type="button" onClick={() => onNavigateSection('operations')} className="self-start btn-explore group">
                <span>{language === 'zh' ? '了解更多' : 'Explore More'}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
            <figure className="flex flex-col">
              <div className="relative w-full aspect-video overflow-hidden bg-slate-900 rounded-[var(--radius-panel)] border border-[var(--color-blue-300)]/50 layer-shadow-raised">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${COMPANY_PROFILE_CORE_SERVICES_VIDEO_ID}`}
                  title={language === 'zh' ? COMPANY_PROFILE_CORE_SERVICES_VIDEO_CAPTION_ZH : COMPANY_PROFILE_CORE_SERVICES_VIDEO_CAPTION_EN}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <figcaption className="mt-2 text-xs sm:text-sm text-[var(--color-text-secondary)] leading-snug">
                {language === 'zh' ? COMPANY_PROFILE_CORE_SERVICES_VIDEO_CAPTION_ZH : COMPANY_PROFILE_CORE_SERVICES_VIDEO_CAPTION_EN}
              </figcaption>
            </figure>
            <figure className="flex flex-col">
              <div className="relative">
                <img
                  src={COMPANY_PROFILE_CORE_SERVICES_IMAGE}
                  alt={language === 'zh' ? COMPANY_PROFILE_CORE_SERVICES_IMAGE_CAPTION_ZH : COMPANY_PROFILE_CORE_SERVICES_IMAGE_CAPTION_EN}
                  className="w-full aspect-video object-cover rounded-[var(--radius-panel)] border border-[var(--color-blue-300)]/50 layer-shadow-raised"
                />
                <ZoomButton onClick={() => setCoreServicesImageZoomOpen(true)} />
              </div>
              <figcaption className="mt-2 text-xs sm:text-sm text-[var(--color-text-secondary)] leading-snug">
                {language === 'zh' ? COMPANY_PROFILE_CORE_SERVICES_IMAGE_CAPTION_ZH : COMPANY_PROFILE_CORE_SERVICES_IMAGE_CAPTION_EN}
              </figcaption>
            </figure>
          </div>
        </div>
      </PageSection>
      {coreServicesImageZoomOpen && (
        <ImageLightbox
          image={COMPANY_PROFILE_CORE_SERVICES_IMAGE}
          imageAlt={language === 'zh' ? COMPANY_PROFILE_CORE_SERVICES_IMAGE_CAPTION_ZH : COMPANY_PROFILE_CORE_SERVICES_IMAGE_CAPTION_EN}
          onClose={() => setCoreServicesImageZoomOpen(false)}
        />
      )}

      <SplitSection
        titleZh={language === 'zh' ? COMPANY_PROFILE_SECTION_AFFILIATES_TITLE_ZH : COMPANY_PROFILE_SECTION_AFFILIATES_TITLE_EN}
        image={COMPANY_PROFILE_AFFILIATES_IMAGE}
        imageAlt={language === 'zh' ? COMPANY_PROFILE_AFFILIATES_IMAGE_CAPTION_ZH : COMPANY_PROFILE_AFFILIATES_IMAGE_CAPTION_EN}
        imageCaption={language === 'zh' ? COMPANY_PROFILE_AFFILIATES_IMAGE_CAPTION_ZH : COMPANY_PROFILE_AFFILIATES_IMAGE_CAPTION_EN}
        zoomable
      >
        <p>{language === 'zh' ? COMPANY_PROFILE_AFFILIATES_INTRO_ZH : COMPANY_PROFILE_AFFILIATES_INTRO_EN}</p>
        <ul className="flex flex-col gap-3 pl-5 list-disc marker:text-[var(--color-cta)]">
          {COMPANY_PROFILE_AFFILIATES.map((affiliate) => (
            <li key={affiliate.labelZh}>
              <strong className="font-bold text-[var(--color-ink)]">{language === 'zh' ? affiliate.labelZh : affiliate.labelEn}</strong>
              ：{language === 'zh' ? affiliate.textZh : affiliate.textEn}
            </li>
          ))}
        </ul>
      </SplitSection>

      <SplitSection
        reverse
        titleZh={language === 'zh' ? COMPANY_PROFILE_SECTION_MISSION_TITLE_ZH : COMPANY_PROFILE_SECTION_MISSION_TITLE_EN}
        image={COMPANY_PROFILE_MISSION_IMAGE}
        imageAlt={language === 'zh' ? COMPANY_PROFILE_MISSION_IMAGE_CAPTION_ZH : COMPANY_PROFILE_MISSION_IMAGE_CAPTION_EN}
        imageCaption={language === 'zh' ? COMPANY_PROFILE_MISSION_IMAGE_CAPTION_ZH : COMPANY_PROFILE_MISSION_IMAGE_CAPTION_EN}
        zoomable
      >
        <p>{language === 'zh' ? COMPANY_PROFILE_CERTIFICATIONS_ZH : COMPANY_PROFILE_CERTIFICATIONS_EN}</p>
        <p>{language === 'zh' ? COMPANY_PROFILE_MISSION_ZH : COMPANY_PROFILE_MISSION_EN}</p>
      </SplitSection>

      <PageSection id="company-profile-faq">
        <div className="flex flex-col gap-5 sm:gap-6">
          <SectionTitle>{language === 'zh' ? '常見問題（FAQ）' : 'Frequently Asked Questions (FAQ)'}</SectionTitle>
          <FaqAccordion items={language === 'zh' ? COMPANY_PROFILE_FAQ_ZH : COMPANY_PROFILE_FAQ_EN} />
        </div>
      </PageSection>
    </div>
  );
};
