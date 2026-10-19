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
  accentColor: string;
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
  imagePosition?: string;
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

// ---- Company Profile page (「公司簡介」單元) ----

export interface CompanyInfoRow {
  labelZh: string;
  labelEn: string;
  valueZh: string;
  valueEn: string;
}

export interface MilestoneItem {
  year: number;
  labelZh: string;
  labelEn: string;
}

// ---- Sustainability Strategy page (「永續發展策略」單元) ----

export interface SdgIcon {
  num: number;
  image: string;
}

export interface HighlightTab {
  id: string;
  labelZh: string;
  labelEn: string;
  itemsZh: string[];
  itemsEn: string[];
}

export interface DashboardYearMetric {
  year: number;
  value: number;
}

export interface DashboardGenderRow {
  labelZh: string;
  labelEn: string;
  male: number;
  female: number;
}

export interface DashboardAgeRow {
  labelZh: string;
  labelEn: string;
  male: number;
  female: number;
}

export interface DashboardEmissionBreakdown {
  labelZh: string;
  labelEn: string;
  percent: number;
}

export interface StrategyGoalTab {
  id: string;
  labelZh: string;
  labelEn: string;
  descZh: string;
  descEn: string;
  sdgNums: number[];
  shortTermZh: string[];
  shortTermEn: string[];
  midTermZh: string[];
  midTermEn: string[];
  longTermZh: string[];
  longTermEn: string[];
}

export interface SustainabilityReportItem {
  year: number;
  titleZh: string;
  titleEn: string;
  coverImage: string;
  pdfUrl: string;
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
