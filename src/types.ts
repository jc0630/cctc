export type Language = 'zh' | 'en';

export interface ServiceItem {
  id: string;
  iconName: string;
  titleZh: string;
  titleEn: string;
  descZh: string;
  descEn: string;
  actionZh: string;
  actionEn: string;
  badge?: string;
}

export interface TerminalLocation {
  id: string;
  nameZh: string;
  nameEn: string;
  tagZh: string;
  tagEn: string;
  addressZh: string;
  addressEn: string;
  descZh: string;
  descEn: string;
  image: string;
  specs: {
    berthsZh: string;
    berthsEn: string;
    areaZh: string;
    areaEn: string;
    equipmentZh: string;
    equipmentEn: string;
  };
}

export interface ESGItem {
  id: string;
  code: string;
  titleZh: string;
  titleEn: string;
  descZh: string;
  descEn: string;
  accentColor: string;
  iconName: string;
}

export interface NewsArticle {
  id: string;
  categoryZh: string;
  categoryEn: string;
  categoryType: 'announcement' | 'operations' | 'esg';
  date: string;
  titleZh: string;
  titleEn: string;
  summaryZh: string;
  summaryEn: string;
  contentZh: string[];
  contentEn: string[];
  image: string;
}

export interface VideoItem {
  id: string;
  titleZh: string;
  titleEn: string;
  durationLabel: string;
  src: string;
}

export interface HeroSlide {
  id: number;
  badgeZh: string;
  badgeEn: string;
  titleZh: string;
  titleEn: string;
  subtitleZh: string;
  subtitleEn: string;
  descZh: string;
  descEn: string;
  image: string;
  ctaTextZh: string;
  ctaTextEn: string;
  secondaryCtaZh: string;
  secondaryCtaEn: string;
}
