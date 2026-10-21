import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language } from '../../types';
import { PageBanner } from '../shared/PageBanner';
import { SplitSection } from '../shared/SplitSection';
import {
  COMPANY_PROFILE_BANNER_IMAGE,
  COMPANY_PROFILE_BANNER_EYEBROW_ZH,
  COMPANY_PROFILE_BANNER_TITLE_ZH,
  COMPANY_PROFILE_SECTION_HISTORY_TITLE_ZH,
  COMPANY_PROFILE_SECTION_HISTORY_TITLE_EN,
  COMPANY_PROFILE_SECTION_MISSION_TITLE_ZH,
  COMPANY_PROFILE_SECTION_MISSION_TITLE_EN,
  COMPANY_PROFILE_FOUNDING_ZH,
  COMPANY_PROFILE_FOUNDING_EN,
  COMPANY_PROFILE_LOCATIONS_MAP_IMAGE,
  COMPANY_PROFILE_LOCATIONS_MAP_CAPTION_ZH,
  COMPANY_PROFILE_LOCATIONS_MAP_CAPTION_EN,
  COMPANY_PROFILE_OPERATIONS_ZH,
  COMPANY_PROFILE_OPERATIONS_EN,
  COMPANY_PROFILE_CERTIFICATIONS_ZH,
  COMPANY_PROFILE_CERTIFICATIONS_EN,
  COMPANY_PROFILE_MISSION_ZH,
  COMPANY_PROFILE_MISSION_EN,
  COMPANY_PROFILE_SECONDARY_IMAGE,
  COMPANY_PROFILE_SECONDARY_IMAGE_CAPTION_ZH,
  COMPANY_PROFILE_SECONDARY_IMAGE_CAPTION_EN,
  COMPANY_PROFILE_CTA_LABEL_ZH,
  COMPANY_PROFILE_CTA_LABEL_EN
} from '../../data/content';

interface CompanyProfilePageProps {
  language: Language;
  onNavigateSection: (sectionId: string) => void;
}

// Restyled 2026-10-21: banner eyebrow + left-aligned title with no dark
// overlay (per the brief's reference, modeled on U-Ming Marine Transport's
// 公司簡介 page), and just two content blocks — each an orange-underline h2
// paired with its own SplitSection image (map, then photo) in alternating
// left/right order — rather than splitting every paragraph into its own
// section.
export const CompanyProfilePage: React.FC<CompanyProfilePageProps> = ({ language, onNavigateSection }) => {
  return (
    <div>
      <PageBanner
        image={COMPANY_PROFILE_BANNER_IMAGE}
        eyebrowZh={COMPANY_PROFILE_BANNER_EYEBROW_ZH}
        titleZh={COMPANY_PROFILE_BANNER_TITLE_ZH}
        overlay={false}
      />

      <SplitSection
        titleZh={language === 'zh' ? COMPANY_PROFILE_SECTION_HISTORY_TITLE_ZH : COMPANY_PROFILE_SECTION_HISTORY_TITLE_EN}
        image={COMPANY_PROFILE_LOCATIONS_MAP_IMAGE}
        imageAlt={language === 'zh' ? COMPANY_PROFILE_LOCATIONS_MAP_CAPTION_ZH : COMPANY_PROFILE_LOCATIONS_MAP_CAPTION_EN}
        imageCaption={language === 'zh' ? COMPANY_PROFILE_LOCATIONS_MAP_CAPTION_ZH : COMPANY_PROFILE_LOCATIONS_MAP_CAPTION_EN}
        scrollableImage
      >
        <p>{language === 'zh' ? COMPANY_PROFILE_FOUNDING_ZH : COMPANY_PROFILE_FOUNDING_EN}</p>
        <p>{language === 'zh' ? COMPANY_PROFILE_OPERATIONS_ZH : COMPANY_PROFILE_OPERATIONS_EN}</p>
      </SplitSection>

      <SplitSection
        reverse
        titleZh={language === 'zh' ? COMPANY_PROFILE_SECTION_MISSION_TITLE_ZH : COMPANY_PROFILE_SECTION_MISSION_TITLE_EN}
        image={COMPANY_PROFILE_SECONDARY_IMAGE}
        imageAlt={language === 'zh' ? COMPANY_PROFILE_SECONDARY_IMAGE_CAPTION_ZH : COMPANY_PROFILE_SECONDARY_IMAGE_CAPTION_EN}
        imageCaption={language === 'zh' ? COMPANY_PROFILE_SECONDARY_IMAGE_CAPTION_ZH : COMPANY_PROFILE_SECONDARY_IMAGE_CAPTION_EN}
      >
        <p>{language === 'zh' ? COMPANY_PROFILE_CERTIFICATIONS_ZH : COMPANY_PROFILE_CERTIFICATIONS_EN}</p>
        <p>{language === 'zh' ? COMPANY_PROFILE_MISSION_ZH : COMPANY_PROFILE_MISSION_EN}</p>
        <button onClick={() => onNavigateSection('about')} className="self-start btn-explore group">
          <span>{language === 'zh' ? COMPANY_PROFILE_CTA_LABEL_ZH : COMPANY_PROFILE_CTA_LABEL_EN}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </SplitSection>
    </div>
  );
};
