import {
  HeroSlide,
  ServiceItem,
  TerminalLocation,
  ESGItem,
  NewsArticle,
  VideoItem,
  SdgIcon,
  HighlightTab,
  DashboardYearMetric,
  DashboardGenderRow,
  DashboardAgeRow,
  DashboardEmissionBreakdown,
  StrategyGoalTab,
  SustainabilityReportItem,
  CompanyInfoRow,
  MilestoneItem,
  TaichungDepotTerminal
} from '../types';

export const LOGO_URL = '/images/cctc-logo.png';

export const VIDEO_ITEMS: VideoItem[] = [
  {
    id: 'keelung-gantry-crane',
    titleZh: '基隆站新軌道機啟用典禮',
    titleEn: 'Keelung Depot New Rail Gantry Crane Launch',
    durationLabel: 'HD',
    src: '/videos/keelung-gantry-crane-ceremony.mp4'
  },
  {
    id: 'taichung-electric-tractor',
    titleZh: '台中站電動拖車頭',
    titleEn: 'Taichung Depot Electric Yard Tractor',
    durationLabel: 'HD',
    src: '/videos/taichung-electric-tractor.mp4'
  },
  {
    // Placeholder — reuses the Taichung clip until a 3rd unique video is available.
    id: 'taichung-electric-tractor-2',
    titleZh: '台中站營運紀實',
    titleEn: 'Taichung Depot Operations',
    durationLabel: 'HD',
    src: '/videos/taichung-electric-tractor.mp4'
  }
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    badgeZh: '',
    badgeEn: '',
    titleZh: '承載信任 鏈結世界',
    titleEn: 'Carrying Trust, Connecting the World',
    subtitleZh: '',
    subtitleEn: '',
    descZh: '',
    descEn: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8We6Nr78IDZVW1rMoUUiSD2XEYbM9BpSKsIdGj8UI7lIpW3yetaYpQQJIEzsD_9xizvllCVSv-gM-o1cYc6489aOztua39nOYWIQhch_MNRF4vuccU7WJYMldmLdf2W7HHnzYQ2nad7BWP5mle5tVsT5aQjpdu59vN0M_o7_uf1qo8ZaPRF8NmevVfs4_kPPOPhzaHvsxTyasT9_coLP38T-WorsmARN498oHdLmUJRulhP2gRiEobldTArm73RoGXFQ',
    ctaTextZh: '',
    ctaTextEn: '',
    secondaryCtaZh: '',
    secondaryCtaEn: ''
  },
  {
    id: 2,
    badgeZh: '',
    badgeEn: '',
    titleZh: '每只貨櫃 都是責任',
    titleEn: 'Every Container is a Responsibility',
    subtitleZh: '',
    subtitleEn: '',
    descZh: '',
    descEn: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDW4n3uB0TpH30xziswhzG2djuiuaBVSwCPNAZjwg5sNSIW7Wv52M32gvhgr9xG95n8vjgxygh6lcVpFtgpdP8cBZMXcHn_kehFBzuwPfpon3QqxIUeAXVwMYzcLlFged4y9kL_iyy1bpWNjLaFRksuI6eb0BZ9Toq6HkQC_3enJa4_lrPhzpJ96eMbkKqfAJFPKb3FJbp4NiYZVTQQGW0CzSUqoRM7z5fJsBvY_y5Hhp15tl_bv-c8Tw',
    ctaTextZh: '',
    ctaTextEn: '',
    secondaryCtaZh: '',
    secondaryCtaEn: ''
  },
  {
    id: 3,
    badgeZh: '',
    badgeEn: '',
    titleZh: '港口脈動 中櫃掌握',
    titleEn: 'Mastering the Port\'s Pulse',
    subtitleZh: '',
    subtitleEn: '',
    descZh: '',
    descEn: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ2mbsuhYdZ5xBS6ZwFz1RdotaJkirGtl-QuXeFpFtnEb4AlVVNsAo7tCViWXZ8wrI_i2XYmjupXvWbnFnc0ikcifFLKLfLXHeQDJiOTgAQRKYEhSsPWKHkiHXqvAucORztp8uOG9z7LAjIe2DW-y8GwlPcfug_NrGOHEa-rgHpEbBv-WalYQVvOChDhnfCWK11YrKdorTsDvZDhbqQdxQATCZUHuBw8qTp8Aqbhpnc7OnFqPetHzTxHNfiPrO9Q3piLM',
    ctaTextZh: '',
    ctaTextEn: '',
    secondaryCtaZh: '',
    secondaryCtaEn: ''
  },
  {
    id: 4,
    badgeZh: '',
    badgeEn: '',
    titleZh: '衷心服務 信賴相隨',
    titleEn: 'Sincere Service, Lasting Trust',
    subtitleZh: '',
    subtitleEn: '',
    descZh: '',
    descEn: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhEn2Kf1wmW1IQOY7tNIF9nVztrN2cRwBqnf7xV1NEhJz7LZJZZOJ2IHsXGZIrUYQSfI0fGZGPR_BJbGEqIwn-mdZ5Xjojwdr27Qrzb_RJm2Zcfrl4pe04m5l5jEVnkY5pzCbaOyUYO9Re1xb35XoFZ5mNrWZtVeXM3abRx6aJ-kGdX4A2Kbfv8XXZ64Y2pTxNNSkAsJihhGkHWuPfn9QjlalGNV2S5GDIyldmKB1O3ANoS7npdC9yAw',
    ctaTextZh: '',
    ctaTextEn: '',
    secondaryCtaZh: '',
    secondaryCtaEn: ''
  },
  {
    id: 5,
    badgeZh: '',
    badgeEn: '',
    titleZh: '綠色運輸 共創永續未來',
    titleEn: 'Green Transportation',
    subtitleZh: '',
    subtitleEn: '',
    descZh: '',
    descEn: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlGoWIHInGrS8UjZxmUW5J6VNoHYPB0c6tFM_ry1IWsgY2w3ABvd0pURTlnHwnCG054turcKb-uy14Ol5PbrmtWRcKvAVteal91bw0uX8tNTdh9zl4PPB9fR2NbqrXZaCRsLznKojii13QHPFm8SXHC2wYjgjCMDKDQ8FAISm_XmsY0dmtqqva5DfpeDQyWsG9lupBUMrDXsr155fuHgXjAqI8rwtGSQdi1aPBD4OFYRbor9irXT34Mw',
    ctaTextZh: '',
    ctaTextEn: '',
    secondaryCtaZh: '',
    secondaryCtaEn: ''
  }
];

export const ONLINE_SERVICES: ServiceItem[] = [
  {
    id: 'tracking',
    iconName: 'PackageCheck',
    titleZh: '櫃動查詢',
    titleEn: 'Container Tracking',
    descZh: '即時掌握提領、重櫃堆置與裝卸狀態。',
    descEn: 'Real-time status of pickup, full container yard storage and stevedoring.',
    actionZh: '前往查詢',
    actionEn: 'Track Now',
    accentColor: '#0284c7'
  },
  {
    id: 'berth',
    iconName: 'Ship',
    titleZh: '船席動態',
    titleEn: 'Berth Status',
    descZh: '各港口船舶靠泊時程與動態監控。',
    descEn: 'Vessel berthing schedules, real-time docking monitoring across ports.',
    actionZh: '即時掌握',
    actionEn: 'View Status',
    accentColor: '#0d9488'
  },
  {
    id: 'linebot',
    iconName: 'Bot',
    titleZh: 'LINE BOT',
    titleEn: 'LINE BOT',
    descZh: '加入官方帳號，隨時掌握貨櫃動態與自動化通知。',
    descEn: 'Add our official account for on-the-go tracking and automated updates.',
    actionZh: '加入好友',
    actionEn: 'Add Friend',
    accentColor: '#06c755'
  },
  {
    id: 'forms',
    iconName: 'FileDown',
    titleZh: '表單下載',
    titleEn: 'Document Downloads',
    descZh: '各式港埠作業申請書表與規章範本。',
    descEn: 'Port operation forms, application templates and regulatory standards.',
    actionZh: '文件中心',
    actionEn: 'Download Forms',
    accentColor: '#f97316'
  }
];

// Interim short area names — formal full terminal names to be supplied by
// CCTC later; homepage cards intentionally show just the area name for now.
export const TERMINAL_LOCATIONS: TerminalLocation[] = [
  {
    id: 'wudu',
    nameZh: '五堵',
    nameEn: 'Wudu',
    tagZh: 'HUB · 內陸轉運樞紐',
    tagEn: 'HUB · Inland Transfer Center',
    addressZh: '新北市汐止區大同路三段 193 號',
    addressEn: 'No. 193, Sec. 3, Datong Rd., Xizhi Dist., New Taipei City',
    descZh: '保稅倉庫、重櫃儲放與全功能車隊調度中心。',
    descEn: 'Bonded warehouse, heavy container yard and comprehensive fleet dispatch center.',
    image: '/locations/wudu.jpg',
    specs: {
      berthsZh: '內陸轉運集散站',
      berthsEn: 'Inland Container Depot',
      areaZh: '總佔地 120,000 平方公尺',
      areaEn: 'Total Area: 120,000 m²',
      equipmentZh: '全自動門機、跨載機、重櫃堆高機',
      equipmentEn: 'Automated Gantry, Straddle Carriers, Heavy Forklifts'
    }
  },
  {
    id: 'keelung',
    nameZh: '基隆',
    nameEn: 'Keelung',
    tagZh: 'TERMINAL · 北台灣港埠',
    tagEn: 'TERMINAL · Northern Port',
    addressZh: '基隆市中山區港埠特區',
    addressEn: 'Port District, Zhongshan Dist., Keelung City',
    descZh: '專用碼頭靠泊、高效率快裝快卸與通關整合。',
    descEn: 'Dedicated berth docking, rapid stevedoring and customs integration.',
    image: '/locations/keelung.jpg',
    specs: {
      berthsZh: '專用深水席位 2 席',
      berthsEn: '2 Dedicated Deepwater Berths',
      areaZh: '總佔地 85,000 平方公尺',
      areaEn: 'Total Area: 85,000 m²',
      equipmentZh: '超巴拿馬型橋式起重機、智慧地磅系統',
      equipmentEn: 'Super Post-Panamax Quay Cranes, Smart Weighbridges'
    }
  },
  {
    id: 'taichung',
    nameZh: '台中',
    nameEn: 'Taichung',
    tagZh: 'BERTH · 散雜與大型貨櫃',
    tagEn: 'BERTH · Bulk & Container Hub',
    addressZh: '台中市梧棲區港區路段',
    addressEn: 'Port Area Rd., Wuqi Dist., Taichung City',
    descZh: '深水專用泊位、全自動門機作業與智慧櫃場監控，涵蓋 10-11 號及 31 號碼頭。',
    descEn: 'Deep-water specialized berths, automated gantry operations and smart yard monitoring, spanning Berths 10-11 and Berth 31.',
    image: '/locations/taichung.jpg',
    imagePosition: '25% center',
    specs: {
      berthsZh: '10號、11號及31號碼頭',
      berthsEn: 'Berths No. 10, 11 & 31',
      areaZh: '總佔地 242,000 平方公尺',
      areaEn: 'Total Area: 242,000 m²',
      equipmentZh: '重型門式起重機、全電能門機、智慧岸電插座',
      equipmentEn: 'Heavy Rail Gantry Cranes, Electric Gantries, Shore Power Sockets'
    }
  },
  {
    id: 'kaohsiung',
    nameZh: '高雄',
    nameEn: 'Kaohsiung',
    tagZh: 'TERMINAL · 南台灣港埠',
    tagEn: 'TERMINAL · Southern Port',
    addressZh: '高雄市小港區港區路段',
    addressEn: 'Port Area Rd., Siaogang Dist., Kaohsiung City',
    descZh: '大型深水碼頭作業、國際航線樞紐與高效率貨櫃裝卸服務。',
    descEn: 'Large-scale deep-water berth operations, international shipping hub and high-efficiency container handling.',
    image: '/locations/kaohsiung.jpg',
    specs: {
      berthsZh: '深水專用碼頭席位',
      berthsEn: 'Deep-water Dedicated Berths',
      areaZh: '總佔地 110,000 平方公尺',
      areaEn: 'Total Area: 110,000 m²',
      equipmentZh: '超大型橋式起重機、自動化查驗系統',
      equipmentEn: 'Super-large Quay Cranes, Automated Inspection Systems'
    }
  }
];

export const ESG_ITEMS: ESGItem[] = [
  {
    id: 'env',
    code: '01 / ENVIRONMENT',
    titleZh: '環境保護',
    titleEn: 'Environment',
    descZh: '引進電動機具、太陽能光電屋頂、港區智慧岸電低碳節能計畫。',
    descEn: 'Electric stevedoring equipment, solar rooftop installations, and port shore power programs.',
    accentColor: '#059669',
    iconName: 'Leaf'
  },
  {
    id: 'soc',
    code: '02 / SOCIAL',
    titleZh: '社會責任',
    titleEn: 'Social',
    descZh: '培育專業港埠人才、嚴密落實職安零災害、熱心在地海洋淨灘公益。',
    descEn: 'Talent cultivation, zero-hazard occupational safety culture, and coastal preservation initiatives.',
    accentColor: '#0e4c82',
    iconName: 'Users'
  },
  {
    id: 'gov',
    code: '03 / GOVERNANCE',
    titleZh: '公司治理',
    titleEn: 'Governance',
    descZh: '公開透明財務資訊、健全董事會多元專業職能、恪守商業誠信準則。',
    descEn: 'Transparent financial reporting, board diversity, and strict compliance with ethical corporate standards.',
    accentColor: '#6366f1',
    iconName: 'Scale'
  },
  {
    id: 'rep',
    code: '04 / REPORT',
    titleZh: '永續報告書',
    titleEn: 'ESG Reports',
    descZh: '歷年 ESG 報告書完整下載，定期公開利害關係人與重大議題進程。',
    descEn: 'Annual sustainability reports downloads, regular stakeholder disclosures and progress updates.',
    accentColor: '#f97316',
    iconName: 'FileText'
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'gym-opening',
    categoryZh: '公司公告',
    categoryEn: 'Announcement',
    categoryType: 'announcement',
    date: '2026/10/08',
    titleZh: '中櫃行政大樓健身房正式啟用',
    titleEn: 'Employee Gym Now Open',
    summaryZh: '全新健身空間啟用，提供同仁多元運動器材與課程，落實健康職場理念。',
    summaryEn: 'A new on-site gym opens at headquarters, offering staff a range of equipment and classes as part of our workplace wellness initiative.',
    image: '/news/news-gym.jpg',
    contentZh: [
      '為照顧同仁身心健康，本公司於汐止總部設置全新員工健身房，即日起正式啟用。',
      '健身房配置有氧器材、重訓設備及多功能運動空間，並規劃定期教學課程，鼓勵同仁於忙碌工作之餘維持規律運動習慣。',
      '公司將持續完善職場福利措施，打造兼顧效率與健康的工作環境。'
    ],
    contentEn: [
      'To support employee wellbeing, the company has opened a brand-new gym at its Xizhi headquarters, now available to all staff.',
      'The facility includes cardio equipment, strength training gear, and a multi-purpose exercise space, with regular scheduled classes to encourage consistent exercise habits.',
      'The company remains committed to enhancing workplace benefits and building an environment that supports both productivity and health.'
    ]
  },
  {
    id: 'sustainability-report-2025',
    categoryZh: 'ESG 活動',
    categoryEn: 'ESG Events',
    categoryType: 'esg',
    date: '2026/08/31',
    titleZh: '中櫃正式發布「2025年永續報告書」展現ESG永續成果',
    titleEn: '2025 Sustainability Report Released',
    summaryZh: '完整揭露年度環境、社會與治理績效，展現中櫃邁向低碳智慧港埠的具體行動。',
    summaryEn: 'Full disclosure of annual environmental, social, and governance performance, reflecting CCTC\'s continued progress toward a low-carbon, smart port.',
    image: '/news/news-sustainability-report.jpg',
    contentZh: [
      '本公司「2025年度永續報告書」正式發布，完整揭露年度環境保護、社會責任與公司治理三大面向之具體成果。',
      '報告書內容涵蓋智慧港埠節能措施、職場安全與人才培育投入，以及公司治理透明度提升等重點進展，並依循國際永續報告框架編製。',
      '歡迎至本公司網站永續發展專區下載完整報告書，共同關注中櫃的永續發展歷程。'
    ],
    contentEn: [
      'The company has officially released its 2025 Sustainability Report, fully disclosing annual achievements across environmental protection, social responsibility, and corporate governance.',
      'The report covers smart port energy-saving initiatives, workplace safety and talent development investments, and improvements in governance transparency, prepared in line with international sustainability reporting frameworks.',
      'The full report is available for download in the Sustainability section of our website.'
    ]
  },
  {
    id: 'yard-upgrade',
    categoryZh: '營運資訊',
    categoryEn: 'Operations',
    categoryType: 'operations',
    date: '2026/10/02',
    titleZh: '中櫃榮獲臺灣港務公司「數位轉型成果獎勵」',
    titleEn: 'Recognized for Port Digital Transformation',
    summaryZh: '全數門機導入精準定位與自動化通報系統，全面提升提領車流效率逾百分之二十。',
    summaryEn: 'All gantry units upgraded with precise GPS positioning and automated dispatch, boosting truck turnaround efficiency by 20%.',
    image: '/news/news-digital-award.jpg',
    contentZh: [
      '為因應日益增長的貨櫃吞吐量與嚴格的交期需求，中櫃五堵貨櫃集散站歷時六個月的場域自動化全面升級工程於本月正式竣工投產。',
      '本次升級包含光纖通訊網路全面覆蓋、門機配備 3D 鐳射防撞感測與自動集裝箱辨識 (OCR)，並將拖車叫號系統直接串接海關通關即時資料庫。',
      '經實地測試，外車進場提領時間自平均 32 分鐘大幅縮減至 24 分鐘以內，顯著降低車輛怠速碳排放。'
    ],
    contentEn: [
      'In response to growing container throughput and strict delivery schedules, the 6-month automated facility upgrade at Wudu Depot has been officially commissioned.',
      'The project features full-yard optical fiber networking, 3D laser anti-collision sensors, automated container OCR recognition, and real-time customs database synchronization.',
      'Field testing demonstrates truck turnaround time reduced from 32 minutes to under 24 minutes, substantially reducing idling vehicle emissions.'
    ]
  }
];

// ============================================================
// 公司簡介 (Company Profile) page data
// Source: 中櫃集團「公司簡介」網站頁面設計需求書 (2026.10.16，文圖陳核版 2026.10.05)
// ============================================================

// Real header visual (港區/碼頭/貨櫃場橫向實景) hasn't been supplied yet —
// reusing an existing homepage hero photo as a placeholder (see brief §四, 編號1).
export const COMPANY_PROFILE_BANNER_IMAGE = '/hero/hero-1.jpg';
export const COMPANY_PROFILE_BANNER_TITLE_ZH = '中櫃｜臺灣貨櫃集散站產業的開拓者';

// ---- 區塊 2：快速認識中櫃 ----

export const COMPANY_INFO_ROWS: CompanyInfoRow[] = [
  {
    labelZh: '公司名稱',
    labelEn: 'Company Name',
    valueZh: '中國貨櫃運輸股份有限公司　China Container Terminal Corporation',
    valueEn: 'China Container Terminal Corporation'
  },
  { labelZh: '公司簡稱', labelEn: 'Short Name', valueZh: '中櫃／CCTC', valueEn: 'CCTC' },
  { labelZh: '創立時間', labelEn: 'Founded', valueZh: '1969 年 11 月 27 日', valueEn: 'November 27, 1969' },
  { labelZh: '股票代號', labelEn: 'Stock Code', valueZh: '2613（TWSE）', valueEn: '2613 (TWSE)' },
  { labelZh: '總公司', labelEn: 'Headquarters', valueZh: '新北市汐止區', valueEn: 'Xizhi Dist., New Taipei City' },
  // "服務據點" in the source table used "台中"; the design brief itself flags
  // this inconsistency against the body copy's "臺中" and recommends
  // standardizing on "臺中" — applied here per that recommendation.
  { labelZh: '服務據點', labelEn: 'Service Locations', valueZh: '基隆、五堵、臺中、高雄', valueEn: 'Keelung, Wudu, Taichung, Kaohsiung' },
  { labelZh: '服務項目', labelEn: 'Services', valueZh: '船舶裝卸作業、櫃場作業、倉棧作業', valueEn: 'Stevedoring, Yard Operations, Warehousing' }
];

export const COMPANY_POSITIONING_ZH =
  '中櫃屬國際貨櫃航運產業中的「貨櫃集散站經營商」，主要經營業務包括船舶裝卸、櫃場作業及倉棧作業等服務。貨櫃集散站產業係配合國際運輸貨櫃化而設置，為銜接海運航線與內陸運輸之關鍵樞紐，與國際貨櫃航運產業及進出口貿易有著密不可分的關係。';
export const COMPANY_POSITIONING_EN =
  'CCTC operates as a container freight station operator within the international container shipping industry, providing stevedoring, yard operations, and warehousing services. Container freight stations exist to serve international containerized transport, acting as the critical link between ocean shipping routes and inland logistics.';

export const INDUSTRY_STRUCTURE_IMAGE = '/images/about/img_1.jpg';
export const INDUSTRY_STRUCTURE_CAPTION_ZH = '國際貨櫃運輸產業結構圖（資料來源：中櫃114年年報 P.64）';
export const INDUSTRY_STRUCTURE_CAPTION_EN = 'International Container Transport Industry Structure (Source: CCTC 2025 Annual Report, p.64)';

// ---- 區塊 3：鏈結海陸與接軌國際的時代使命 ----

export const FOUNDING_HISTORY_ZH =
  '1969年11月27日，為因應貨櫃化運輸發展之需，於交通部貨櫃化運輸促進小組督導下，結合來自公、民營航業公司、裝卸業、貿易界、與臺灣省政府所屬的鐵路管理局、基隆港務局等10個單位，投資成立中國貨櫃運輸股份有限公司（簡稱中櫃），成為我國貨櫃集散站經營業之先驅。';
export const FOUNDING_HISTORY_EN =
  'On November 27, 1969, in response to the growing need for containerized transport, China Container Terminal Corporation (CCTC) was established under the guidance of the Ministry of Transportation and Communications\' Containerization Promotion Task Force — jointly invested in by 10 organizations spanning public and private shipping lines, stevedoring companies, trading firms, the Taiwan Railway Administration, and the Keelung Harbor Bureau, becoming Taiwan\'s pioneer in the container freight station business.';

export const WUDU_HISTORIC_IMAGE = '/images/about/img_2.jpg';
export const WUDU_HISTORIC_CAPTION_ZH =
  '中櫃五堵貨櫃集散站早期俯瞰全景。中櫃於1969年創立後，陸續於北、中、南完成場站佈局，開創全臺貨櫃集散與港埠物流網絡。';
export const WUDU_HISTORIC_CAPTION_EN =
  'An early aerial view of the Wudu Container Freight Station. Since its founding in 1969, CCTC progressively established stations across northern, central, and southern Taiwan, building a nationwide container freight and port logistics network.';

// ---- 區塊 4：全臺營運布局與多元港埠服務 ----

// "逾57年" (over 57 years, counted from 1969/11/27) only becomes accurate on
// 2026/11/27. Publishing before that date — per the brief's own flagged
// caveat — uses "近57年" (nearly 57 years) instead.
export const OPERATIONS_OVERVIEW_ZH =
  '1995年，中櫃正式於臺灣證券交易所掛牌上市（股票代號：2613），為全臺第一家股票上市的貨櫃集散站業者。中櫃於2001年首度跨足經營臺中港碼頭前線作業；並自2009年起，正式承租接手基隆港西19～21號碼頭前、後線營運，開啟雙港運營新階段。配合各港區營運環境與客戶需求，中櫃提供船舶裝卸作業、櫃場作業、倉棧作業等相關服務，深獲航商信賴與支持。歷經近57年的發展，中櫃目前為臺灣最大純貨櫃碼頭營運商，總部位於新北市汐止區，並於五堵、基隆、臺中及高雄等地設有服務據點。';
export const OPERATIONS_OVERVIEW_EN =
  'In 1995, CCTC officially listed on the Taiwan Stock Exchange (stock code: 2613), becoming the first publicly listed container freight station operator in Taiwan. CCTC expanded into Taichung Port frontline operations in 2001, and in 2009 took over front- and rear-line operations at Keelung Port Berths 19–21, opening a new dual-port era. Tailoring services to each port\'s operating environment and client needs, CCTC provides stevedoring, yard, and warehousing services trusted by shipping lines industry-wide. After nearly 57 years of growth, CCTC is now Taiwan\'s largest dedicated container terminal operator, headquartered in Xizhi, New Taipei City, with service locations in Wudu, Keelung, Taichung, and Kaohsiung.';

export const MILESTONES: MilestoneItem[] = [
  { year: 1969, labelZh: '創立', labelEn: 'Founded' },
  { year: 1995, labelZh: '股票上市', labelEn: 'Listed (TWSE)' },
  { year: 2001, labelZh: '臺中港碼頭前線', labelEn: 'Taichung Port Frontline' },
  { year: 2009, labelZh: '基隆港西19～21號碼頭', labelEn: 'Keelung Port Berths 19–21' }
];

export const TAICHUNG_OVERVIEW_IMAGE = '/images/about/img_4.jpg';
export const TAICHUNG_OVERVIEW_CAPTION_ZH =
  '中櫃台中貨櫃集散站俯瞰全景。2001年起，中櫃服務範疇由貨櫃集散站延伸至船邊裝卸及碼頭營運管理，提供碼頭前、後線完整港埠服務。（圖片來源：臺灣港務公司臺中港務分公司）';
export const TAICHUNG_OVERVIEW_CAPTION_EN =
  'An aerial view of the Taichung Container Freight Station. Since 2001, CCTC\'s services have expanded from container freight station operations to quayside handling and terminal management, offering complete front- and rear-line port services. (Image source: Taiwan International Ports Corporation, Taichung Branch)';

export const KEELUNG_OVERVIEW_IMAGE = '/images/about/img_3.jpg';
export const KEELUNG_OVERVIEW_CAPTION_ZH =
  '中櫃基隆碼頭集散站（西19-21號碼頭）俯瞰全景。中櫃為國內唯一同時於基隆港與臺中港設有碼頭裝卸、場站與倉庫之業者。';
export const KEELUNG_OVERVIEW_CAPTION_EN =
  'An aerial view of the Keelung Container Terminal (Berths 19–21). CCTC is the only operator in Taiwan with quayside handling, yard, and warehouse facilities at both Keelung and Taichung ports.';

// ---- 區塊 5：雙軸轉型：智慧營運與永續低碳實踐 ----

export const SMART_OPERATIONS_ZH =
  '在智慧營運方面，自主開發並導入新一代 TOS 2.0（Terminal Operating System 2.0）智慧物流作業系統，透過數位管理、即時監控與風險預警機制，提升碼頭營運效率與作業安全，並多次獲得臺灣港務公司頒發「金舫獎」。';
export const SMART_OPERATIONS_EN =
  'In smart operations, CCTC independently developed and deployed the next-generation TOS 2.0 (Terminal Operating System 2.0) smart logistics platform — using digital management, real-time monitoring, and risk-alert mechanisms to improve terminal efficiency and operational safety, earning the Taiwan International Ports Corporation\'s "Golden Junk Award" multiple times.';

export const LOW_CARBON_TRANSFORMATION_ZH =
  '在低碳轉型方面，配合全球淨零排放趨勢，引進儲能櫃系統，於臺中港 31 號碼頭倉庫導入電動堆高機及採購綠電憑證完成碳中和，並於2025年12月導入電動拖車。此外，中櫃更與國立臺北科技大學合作建立貨櫃裝卸碳足跡計算標準，於2026年6月完成第三方查證與規則審核，為臺灣港口物流產業建立具公信力的碳管理機制。';
export const LOW_CARBON_TRANSFORMATION_EN =
  'In low-carbon transformation, aligned with the global net-zero trend, CCTC introduced energy storage container systems, deployed electric forklifts at the Taichung Port Berth 31 warehouse, achieved carbon neutrality through renewable energy certificates, and introduced electric yard tractors in December 2025. CCTC also partnered with National Taipei University of Technology to establish a container handling carbon footprint calculation standard, completing third-party verification in June 2026 — building a credible carbon management framework for Taiwan\'s port logistics industry.';

export const ELECTRIC_TRACTOR_IMAGE = '/images/about/img_5.jpg';
export const ENERGY_STORAGE_IMAGE = '/images/about/img_6.jpg';
export const DUAL_TRANSFORMATION_SHARED_CAPTION_ZH =
  '中櫃導入電動拖車與港區儲能櫃系統。透過港區作業車輛電氣化與能源管理系統，積極回應全球淨零碳排趨勢，建構綠色港口永續營運模式。';
export const DUAL_TRANSFORMATION_SHARED_CAPTION_EN =
  'CCTC has introduced electric yard tractors and port energy storage container systems. Through vehicle electrification and energy management, CCTC actively responds to the global net-zero trend and builds a sustainable green port operating model.';

// ---- 區塊 6：共創永續未來 ----

export const CORE_VALUES = [
  { zh: '熱忱', en: 'Passion' },
  { zh: '專業', en: 'Professionalism' },
  { zh: '誠信', en: 'Integrity' },
  { zh: '踏實', en: 'Diligence' }
];

export const VISION_TEXT_ZH =
  '秉持「熱忱、專業、誠信、踏實」的經營理念，中櫃持續深耕港埠物流鏈，致力推動智慧與綠色營運，優化服務效率並落實企業社會責任，期許與客戶、股東、合作夥伴等所有利害關係人共創永續與韌性兼備的未來。';
export const VISION_TEXT_EN =
  'Guided by the principles of Passion, Professionalism, Integrity, and Diligence, CCTC continues to deepen its port logistics expertise, advancing smart and green operations while optimizing service efficiency and fulfilling corporate social responsibility — aiming to build a sustainable, resilient future together with customers, shareholders, and all partners.';

export const CONTAINER_VISUAL_IMAGE = '/images/about/img_7.jpg';
export const CONTAINER_VISUAL_ALT_ZH = '吊掛中的中櫃藍色貨櫃，象徵智慧與綠色港埠營運';
export const CONTAINER_VISUAL_ALT_EN = 'A CCTC blue container being lifted, symbolizing smart and green port operations';

// ============================================================
// 永續發展策略 (Sustainability Strategy) page data
// Source: 中櫃集團「永續發展策略」網站頁面設計需求書 (2026.10.16)
// ============================================================

// SDGs icons already extracted from the client's slide deck into
// public/images/ as image3–image11 (English UN artwork); mapped here to
// their real SDG numbers (verified visually, filenames are not sequential).
export const SDG_ICONS: SdgIcon[] = [
  { num: 3, image: '/images/image8.png' },
  { num: 4, image: '/images/image5.png' },
  { num: 7, image: '/images/image11.png' },
  { num: 8, image: '/images/image6.png' },
  { num: 9, image: '/images/image4.png' },
  { num: 10, image: '/images/image7.png' },
  { num: 13, image: '/images/image10.png' },
  { num: 16, image: '/images/image3.png' },
  { num: 17, image: '/images/image9.png' }
];

// ---- 子頁一：永續績效亮點 ----

export const SUSTAINABILITY_HIGHLIGHTS_INTRO_ZH: string[] = [
  '永續發展已成為本公司經營策略的重要核心。我們秉持誠信經營、環境友善及社會共好的理念，持續將ESG精神融入日常營運與管理決策，致力於創造兼具經濟、環境與社會價值的永續企業。',
  '在公司治理方面，本公司持續強化風險管理與資訊安全機制，透過教育訓練及演練提升全體同仁的資安意識，並以誠信經營作為企業文化基石，維持穩健且透明的治理制度。同時，憑藉優質的營運管理與服務表現，獲得產業獎項肯定，展現企業持續精進的成果。',
  '在人才與社會參與方面，我們重視員工發展與職場平權，致力打造多元共融、健康安全的工作環境，並積極投入公益關懷、支持弱勢團體及推動產學合作，透過實際行動回饋社會，與各界攜手創造共享價值。',
  '在環境永續方面，本公司持續推動溫室氣體管理及碳盤查工作，逐步建構完整的減碳管理機制，並透過設備更新、能源管理系統導入及節能措施執行，提高能源使用效率，降低營運對環境的影響。近年來亦積極推動智慧化與數位化轉型，結合智慧營運及能源管理技術，提升整體作業效能與資源運用效率。',
  '展望未來，本公司將持續深化永續治理，落實環境保護、社會責任及公司治理各項作為，攜手員工、客戶、供應商及各利害關係人，共同邁向更具韌性與永續競爭力的未來。'
];

export const SUSTAINABILITY_HIGHLIGHTS_INTRO_EN: string[] = [
  'Sustainability has become a core pillar of our corporate strategy. Guided by integrity, environmental stewardship, and shared social value, we continue to embed ESG principles into daily operations and management decisions.',
  'In governance, we continue to strengthen risk management and information security through training and drills, while upholding integrity as the foundation of our corporate culture — maintaining a sound, transparent governance system and earning industry recognition for operational excellence.',
  'In talent and social engagement, we prioritize employee development and workplace equity, fostering an inclusive, safe working environment while actively supporting public welfare, underprivileged groups, and academia-industry collaboration.',
  'In environmental sustainability, we continue to advance greenhouse gas management and carbon inventory work, building a complete decarbonization framework through equipment upgrades, energy management systems, and efficiency measures — alongside smart and digital transformation to improve overall operational efficiency.',
  'Looking ahead, we will continue deepening sustainability governance across environmental, social, and governance dimensions, working with employees, customers, suppliers, and all stakeholders toward a more resilient and sustainably competitive future.'
];

export const SUSTAINABILITY_HIGHLIGHT_TABS: HighlightTab[] = [
  {
    id: 'economic',
    labelZh: '經濟',
    labelEn: 'Economic',
    itemsZh: [
      '本年度未因貪腐或賄賂而捲入法律訴訟之情事，且並無因此造成財務損失。',
      '辦理全員資訊安全教育訓練 3 小時，辦理資安社交工程演練 2 次。',
      '獲頒 2025 年金舫獎－裝卸承攬業。'
    ],
    itemsEn: [
      'No corruption or bribery litigation occurred this year, with no resulting financial loss.',
      '3 hours of company-wide information security training; 2 social engineering drills conducted.',
      'Awarded the 2025 Golden Junk Award (Stevedoring & Cargo Handling Category).'
    ]
  },
  {
    id: 'people',
    labelZh: '人群（包含其人權）',
    labelEn: 'People & Human Rights',
    itemsZh: [
      '永續發展與 ESG 相關訓練 4 場 52 小時。',
      '18 位身心障礙者，超過企業法定進用人數。',
      '道德採購支持弱勢團體新臺幣 30 萬元及投入 110 人次於社會關懷領域、與國立臺灣海洋大學合作辦企業參訪。',
      '台北總公司榮獲健康職場認證標章，營造優質工作環境。'
    ],
    itemsEn: [
      '4 ESG/sustainability training sessions totaling 52 hours.',
      '18 employees with disabilities, exceeding the statutory employment quota.',
      'NT$300,000 in ethical procurement supporting disadvantaged groups; 110 person-times in community outreach; corporate visit program with National Taiwan Ocean University.',
      'Taipei headquarters certified as a Healthy Workplace.'
    ]
  },
  {
    id: 'environment',
    labelZh: '環境',
    labelEn: 'Environment',
    itemsZh: [
      'ISO 14064-1 溫室氣體盤查完成，並取得 ISO 14067 碳足跡認證。',
      '基隆站採購 2 臺新橋式機及 2 臺門型軌道貨櫃起重機、台中站採購 2 臺新橋式機，持續投資提高能源使用效率與汰換老舊設備。',
      '五堵站及台中站合計新購 8 部 2.5 噸電動堆高機，汰換老舊柴油車機，降低空氣污染排放。',
      '更換 8 部舊型冷氣改為一級能效變頻冷氣節能設備。'
    ],
    itemsEn: [
      'Completed ISO 14064-1 GHG inventory and obtained ISO 14067 carbon footprint certification.',
      'Keelung station acquired 2 new gantry cranes and 2 RMGs; Taichung station acquired 2 new gantry cranes, continuing investment in energy efficiency and equipment renewal.',
      '8 new 2.5-ton electric forklifts purchased across Wudu and Taichung stations, replacing aging diesel equipment.',
      '8 old air conditioning units replaced with Tier-1 energy-efficient inverter units.'
    ]
  },
  {
    id: 'service',
    labelZh: '服務績效亮點',
    labelEn: 'Service Highlights',
    itemsZh: [
      '優化 TOS 2.0 智慧營運系統，提升操作標準化、視覺化與即時性，管理營運流程。',
      '導入 EMS 環境管理系統整合能源使用數據，有助於盤點並管理溫室氣體排放來源，作為減碳目標設定。',
      '更新導入新 MMS 車機保養維修系統，透過統一安全庫存管理，以精簡備用零件數量。',
      '導入台中站智慧能源管理系統搭配安裝智慧電表與建置儲能系統，減少尖峰用電、隨時監控電力使用情形，提高整體能源使用效率。',
      '客戶滿意度達 89%，逐年提升目標。'
    ],
    itemsEn: [
      'Upgraded TOS 2.0 smart operations system for standardized, visualized, real-time process management.',
      'Deployed EMS environmental management system to consolidate energy data, supporting GHG source tracking and decarbonization targets.',
      'Rolled out the new MMS maintenance system with unified safety-stock management to streamline spare parts.',
      'Deployed smart energy management at Taichung station with smart meters and an energy storage system to reduce peak demand and improve efficiency.',
      'Customer satisfaction reached 89%, with year-over-year improvement targeted.'
    ]
  }
];

// ---- 子頁二：數據儀表板 ----
// 年度由近到遠排列 (2025 在最上方)；最新年度於圖表中以輔色(橘)凸顯，其餘以主色(藍)。

export const DASHBOARD_REVENUE: DashboardYearMetric[] = [
  { year: 2025, value: 3367572 },
  { year: 2024, value: 3285815 },
  { year: 2023, value: 3148316 }
];

export const DASHBOARD_VOLUME: DashboardYearMetric[] = [
  { year: 2025, value: 1248468 },
  { year: 2024, value: 1276236 },
  { year: 2023, value: 1205188 }
];

export const DASHBOARD_GENDER_ROWS: DashboardGenderRow[] = [
  { labelZh: '管理階層', labelEn: 'Management', male: 228, female: 42 },
  { labelZh: '一般職員', labelEn: 'General Staff', male: 746, female: 88 }
];

export const DASHBOARD_AGE_ROWS: DashboardAgeRow[] = [
  { labelZh: '30 歲以下', labelEn: 'Under 30', male: 74, female: 11 },
  { labelZh: '30–50 歲', labelEn: '30–50', male: 567, female: 77 },
  { labelZh: '50 歲以上', labelEn: 'Over 50', male: 333, female: 42 }
];

export const DASHBOARD_EMISSIONS: DashboardYearMetric[] = [
  { year: 2025, value: 17461.56 },
  { year: 2024, value: 16465.42 },
  { year: 2023, value: 18064.85 }
];

export const DASHBOARD_EMISSION_BREAKDOWN: DashboardEmissionBreakdown[] = [
  { labelZh: '外部輸入能源', labelEn: 'Indirect Energy', percent: 46.64 },
  { labelZh: '直接排放', labelEn: 'Direct Emissions', percent: 28.96 },
  { labelZh: '組織使用的產品', labelEn: 'Products Used by Org', percent: 21.17 },
  { labelZh: '運輸', labelEn: 'Transportation', percent: 3.23 }
];

export const DASHBOARD_REDUCTION = {
  percentLabel: '−8.72%',
  descZh: '集團溫室氣體排放量減少 1,668.97 公噸 CO2e',
  descEn: 'Group GHG emissions decreased by 1,668.97 tCO2e versus 2023'
};

// ---- 子頁三：永續發展策略 ----

export const VALUE_CHAIN_INTRO_ZH: string[] = [
  '中櫃集團透過提供船舶裝卸、貨櫃場站搬運與倉儲管理等專業服務，構建涵蓋港區至倉儲作業之高效且具韌性的貨櫃運輸倉儲永續價值鏈。物流運輸本身即為現代貿易的重要加值過程，協助客戶實現貨物流通、供應鏈連結與市場價值轉換，為全球運輸體系創造實質貢獻。',
  '中櫃集團核心服務涵蓋船舶裝卸、櫃場營運與倉棧作業三大主軸。船舶裝卸作業主要於港區船上或岸邊進行貨物的裝卸、搬運與處理；櫃場作業則透過拖車與跨載機等設備將貨櫃水平搬運、堆積與交付外部運輸車輛，並提供維修服務；倉棧作業則包含出口貨物結關裝櫃、送至碼頭裝船，或進口貨物拆櫃入倉後待客戶提貨等流程，形成一條完整且專業的物流服務鏈。',
  '各營運環節導入數位化與標準化管理系統，包括TOS 2.0智慧物流作業系統，結合EMS（環境管理系統）與MMS（車機保養維修系統），以提升操作效率、降低資源消耗與碳排放，並強化營運透明度與即時應變能力。集團亦依循ISO 9001、ISO 14001、ISO 45001與ISO 50001等國際標準，確保品質、環境、職安衛及能源管理體系落實，持續優化作業流程以降低營運過程中各項風險。'
];

export const VALUE_CHAIN_INTRO_EN: string[] = [
  'CCTC Group delivers vessel stevedoring, container yard handling, and warehousing services that form a resilient, end-to-end container logistics sustainability value chain — from the port to the warehouse — contributing real value to global trade flows.',
  'Our core services span three pillars: stevedoring (loading/unloading at berth), yard operations (horizontal transfer, stacking, and delivery via tractors and straddle carriers, plus maintenance), and warehousing (export customs clearance and stuffing, or import destuffing and storage pending pickup).',
  'Every operational link is digitized through TOS 2.0 smart logistics, integrated with EMS (environmental management) and MMS (vehicle maintenance), improving efficiency and transparency while reducing resource use and emissions — all governed under ISO 9001, 14001, 45001, and 50001 standards.'
];


export const STRATEGY_GOAL_TABS: StrategyGoalTab[] = [
  {
    id: 'governance',
    labelZh: '治理與永續經營',
    labelEn: 'Governance & Sustainable Management',
    descZh: '深化誠信經營與供應鏈管理，確保資訊安全與風險控管。',
    descEn: 'Deepening integrity-based management and supply chain governance, ensuring information security and risk control.',
    sdgNums: [16, 17],
    shortTermZh: [
      '誠信課程完成率：全體董事、經理人及員工每年完成誠信課程 100%',
      '規劃建置優於法令功能性委員會，如：提名委員會',
      '每年 2 次召開法人說明會',
      '公司治理評鑑排名維持 36%~50%',
      '資訊安全演練次數：每年進行社交工程演練次數至少 2 次'
    ],
    shortTermEn: [
      'Integrity course completion: 100% annually for all directors, managers, and employees',
      'Plan functional committees exceeding regulatory requirements, e.g. a Nomination Committee',
      '2 investor conferences per year',
      'Corporate Governance Evaluation ranking maintained in the 36%–50% band',
      'At least 2 social-engineering security drills per year'
    ],
    midTermZh: [
      '完成 IFRS S1、S2 導入，持續提升財務報告品質並關注新公報及因應',
      '每季召開法人說明會',
      '公司治理評鑑排名維持 36%~50%',
      '資訊安全演練次數：每年進行社交工程演練次數至少 2 次'
    ],
    midTermEn: [
      'Complete IFRS S1/S2 adoption, continuously improving financial reporting quality',
      'Quarterly investor conferences',
      'Corporate Governance Evaluation ranking maintained in the 36%–50% band',
      'At least 2 social-engineering security drills per year'
    ],
    longTermZh: [
      '每季召開法人說明會',
      '公司治理評鑑排名提升 5%',
      '資訊安全演練次數：每季進行社交工程演練，每年至少 4 次',
      '資訊安全事件：發生資安事件次數 0 次／年'
    ],
    longTermEn: [
      'Quarterly investor conferences',
      'Corporate Governance Evaluation ranking improved by 5%',
      'Quarterly security drills, at least 4 per year',
      'Zero information security incidents per year'
    ]
  },
  {
    id: 'environment',
    labelZh: '環境與氣候行動',
    labelEn: 'Environment & Climate Action',
    descZh: '強化節能減碳、循環經濟與供應鏈永續管理。',
    descEn: 'Strengthening energy conservation, circular economy, and sustainable supply chain management.',
    sdgNums: [7, 9, 13],
    shortTermZh: [
      '汰換老舊機具及建置新機：2026 年台中站汰除 1 部橋式機、2 部 RMG，建置新橋式機 2 部與新 RMG 2 部；2027 年台中站汰除 1 部橋式機、1 部 RMG、4 部 TL，建置新橋式機 1 部與新 RMG 1 部，基隆站汰除 2 部橋式機；2028 年台中站汰除 1 部橋式機、2 部 RMG、7 部 TL，建置新橋式機 1 部與新 RMG 2 部',
      '完成各站智慧電錶與能源管理系統之安裝：即時監控碼頭前、後線各車機、冷鏈系統用電情形並自動調整用電行為，精確記錄用電情形與排碳計算，有助 ISO 14064／ESG 揭露',
      '電子化公文占比：全面推行電子公文作業占比 95% 以上',
      '持續執行 ISO 14064-1 溫室氣體盤查，目標較前一年度減少 3% 碳排放量',
      '完成 ISO 14067 碳足跡盤查，申請取得環境部碳標籤',
      '依循主管機關 TCFD 框架，進行氣候變遷風險與機會評估，並進行情境分析'
    ],
    shortTermEn: [
      'Retire and replace aging equipment at Taichung and Keelung stations (gantry cranes, RMG, TL) across 2026–2028',
      'Complete smart meter and energy management system installation at all stations for real-time monitoring and carbon accounting',
      'Electronic document processing at 95%+',
      'Continue ISO 14064-1 GHG inventory, targeting 3% YoY emissions reduction',
      'Complete ISO 14067 carbon footprint inventory and apply for Ministry of Environment carbon labeling',
      'Conduct TCFD-aligned climate risk and opportunity assessment with scenario analysis'
    ],
    midTermZh: [
      '汰換老舊機具：2030 年台中站汰除最後一部舊橋式機',
      '倉庫柴油堆高機汰換為電動堆高機占比達 50% 以上',
      '解櫃車汰換為電動解櫃車達 25% 以上',
      '台中站新設儲區擬採 ARMG 進行規劃',
      '租賃公務車輛改換為油電混合車型',
      '持續執行 ISO 14064-1 溫室氣體盤查，目標較前一年度減少 3% 碳排放量',
      '依循主管機關 TCFD 框架，進行氣候變遷風險與機會評估、情境分析，並持續追蹤成效'
    ],
    midTermEn: [
      'Retire the last aging gantry crane at Taichung station by 2030',
      'Electrify 50%+ of warehouse diesel forklifts',
      'Electrify 25%+ of yard chassis fleet',
      'Plan ARMG for the new Taichung storage yard',
      'Convert leased company vehicles to hybrid models',
      'Continue ISO 14064-1 GHG inventory, targeting 3% YoY emissions reduction',
      'Continue TCFD-aligned climate risk assessment and track outcomes'
    ],
    longTermZh: [
      '機具持續汰舊換新，至 2050 年前不再使用柴油車機',
      'AI 與各站前後線儲區、倉庫、進出站與維修廠等作業系統結合',
      '吊卸櫃裝卸動線：預測裝卸順序 → 自動分配 RMG／Gantry 動線，縮短裝卸時間、減少吊車閒置等待',
      '貨櫃識別與影像辨識：AI 辨識貨櫃、地磅檢測、編號、封條、破損、異常貨櫃，結合監視影像自動通報或排除問題櫃',
      '排程與動線最佳化：導入 AI 學習歷史數據，預測各站尖峰／壅塞時段，動態調整場內儲區與拖車調度順序',
      '能源管理與預測：AI 預測各班次用電、吊車需求，預排電量負載，結合智慧電錶即時反饋數據進行節能調度',
      '車機預防性維護：對橋式機、RMG 等重要部位安裝感測器，提前預測異常，減少臨停風險、提升設備妥善率',
      '持續執行 ISO 14064-1 溫室氣體盤查，目標較前一年度減少 3% 碳排放量',
      '依循主管機關 TCFD 框架，進行氣候變遷風險與機會評估，並進行情境分析，完成率 100%'
    ],
    longTermEn: [
      'No diesel equipment in use by 2050',
      'AI integration across all stations\' yard, warehouse, gate, and maintenance systems',
      'AI-optimized crane dispatch to shorten handling time and reduce idle waiting',
      'AI-based container/image recognition for ID, seal, and damage detection with automated alerts',
      'AI-driven scheduling to predict peak/congestion periods and optimize yard and chassis dispatch',
      'AI-predicted energy demand per shift, integrated with smart meters for real-time energy optimization',
      'Predictive maintenance sensors on cranes and RMGs to reduce downtime and improve equipment availability',
      'Continue ISO 14064-1 GHG inventory, targeting 3% YoY emissions reduction',
      '100% completion of TCFD-aligned climate risk and scenario assessment'
    ]
  },
  {
    id: 'social',
    labelZh: '社會與人才發展',
    labelEn: 'Social & Talent Development',
    descZh: '提升員工福祉、數位賦能，並擴展社會公益影響力。',
    descEn: 'Enhancing employee wellbeing, digital empowerment, and expanding social impact.',
    sdgNums: [3, 4, 8, 10],
    shortTermZh: [
      '員工安全衛生教育訓練完成率 100%',
      '制定供應商簽署企業社會責任承諾書',
      'ESG 公益參與人次較前一年度增加 5%'
    ],
    shortTermEn: [
      '100% completion of employee occupational safety training',
      'Establish supplier CSR commitment sign-off',
      'ESG community engagement participation up 5% YoY'
    ],
    midTermZh: [
      '員工安全衛生教育訓練完成率 100%',
      '制定供應商簽署企業社會責任承諾書',
      'ESG 公益參與人次較前一年度增加 5%'
    ],
    midTermEn: [
      '100% completion of employee occupational safety training',
      'Establish supplier CSR commitment sign-off',
      'ESG community engagement participation up 5% YoY'
    ],
    longTermZh: [
      '員工安全衛生教育訓練完成率 100%',
      '制定供應商簽署企業社會責任承諾書，完成率 100%',
      'ESG 公益參與人次較前一年度增加 15%'
    ],
    longTermEn: [
      '100% completion of employee occupational safety training',
      '100% supplier CSR commitment sign-off',
      'ESG community engagement participation up 15% YoY'
    ]
  },
  {
    id: 'innovation',
    labelZh: '創新與智慧發展',
    labelEn: 'Innovation & Smart Development',
    descZh: '以「智慧創新」為核心，提升作業效率、降低成本、強化競爭力，並減少環境影響。',
    descEn: 'Centered on smart innovation to improve efficiency, reduce cost, strengthen competitiveness, and lower environmental impact.',
    sdgNums: [9, 13],
    shortTermZh: [
      '導入能源管理系統，視情況調高或降低臺電契約容量',
      '設置充電樁，配合能源管理系統並導入電動解櫃車',
      '視綠能技術研發成熟度及經濟效益，適當時機引入'
    ],
    shortTermEn: [
      'Deploy energy management system to flexibly adjust Taipower contract capacity',
      'Install EV chargers alongside the energy management system and introduce electric yard chassis',
      'Adopt renewable energy technologies as they mature and prove cost-effective'
    ],
    midTermZh: [
      '導入能源管理系統，減少用電超過臺電契約容量之比例（從 5 個月減少至 3 個月）',
      '設置充電樁，配合能源管理系統並導入電動解櫃車，1/3 解櫃車電動化',
      '視綠能技術研發成熟度及經濟效益，適當時機引入'
    ],
    midTermEn: [
      'Reduce months exceeding Taipower contract capacity from 5 to 3 via the energy management system',
      'Electrify 1/3 of the yard chassis fleet alongside EV charger rollout',
      'Adopt renewable energy technologies as they mature and prove cost-effective'
    ],
    longTermZh: [
      '導入能源管理系統，確保用電不超過臺電契約容量',
      '設置充電樁，配合能源管理系統並導入電動解櫃車，所有解櫃車電動化',
      '視綠能技術研發成熟度及經濟效益，適當時機引入'
    ],
    longTermEn: [
      'Ensure power usage stays within Taipower contract capacity via the energy management system',
      '100% electrification of the yard chassis fleet',
      'Adopt renewable energy technologies as they mature and prove cost-effective'
    ]
  }
];

// ---- 子頁四：永續報告書 ----
// 年度由近到遠排列；封面與 PDF 檔案待中櫃提供後依下列路徑命名放入對應資料夾即可生效。
export const SUSTAINABILITY_REPORTS: SustainabilityReportItem[] = [
  { year: 2025, titleZh: '2025 年永續報告書', titleEn: '2025 Sustainability Report', coverImage: '/reports/cover-2025.jpg', pdfUrl: '/reports/2025-sustainability-report.pdf' },
  { year: 2024, titleZh: '2024 年永續報告書', titleEn: '2024 Sustainability Report', coverImage: '/reports/cover-2024.jpg', pdfUrl: '/reports/2024-sustainability-report.pdf' },
  { year: 2023, titleZh: '2023 年永續報告書', titleEn: '2023 Sustainability Report', coverImage: '/reports/cover-2023.jpg', pdfUrl: '/reports/2023-sustainability-report.pdf' },
  { year: 2022, titleZh: '2022 年永續報告書', titleEn: '2022 Sustainability Report', coverImage: '/reports/cover-2022.jpg', pdfUrl: '/reports/2022-sustainability-report.pdf' },
  { year: 2021, titleZh: '2021 年永續報告書', titleEn: '2021 Sustainability Report', coverImage: '/reports/cover-2021.jpg', pdfUrl: '/reports/2021-sustainability-report.pdf' },
  { year: 2020, titleZh: '2020 年永續報告書', titleEn: '2020 Sustainability Report', coverImage: '/reports/cover-2020.jpg', pdfUrl: '/reports/2020-sustainability-report.pdf' }
];

export const MOCK_CONTAINER_RESULTS: Record<string, {
  containerNo: string;
  sizeType: string;
  terminal: string;
  status: string;
  vesselVoyage: string;
  gateInTime: string;
  gateOutStatus: string;
  weight: string;
  customsRelease: string;
}> = {
  'CCTU8821943': {
    containerNo: 'CCTU8821943',
    sizeType: "40' High Cube (45G1)",
    terminal: '五堵集散站 (Wudu Hub - Yard B-04)',
    status: '重櫃已卸放 (Full Container Stored)',
    vesselVoyage: 'WAN HAI 512 / V.092E',
    gateInTime: '2024-05-21 09:42:15',
    gateOutStatus: '可提領 (Ready for Gate-Out)',
    weight: '24,850 KG',
    customsRelease: '已放行 (C3 Customs Cleared)'
  },
  'EMCU3918204': {
    containerNo: 'EMCU3918204',
    sizeType: "20' General Purpose (22G1)",
    terminal: '台中港 10-11 號碼頭 (Taichung Berth 10)',
    status: '碼頭待裝船 (Staged for Loading)',
    vesselVoyage: 'EVER GENTLE / V.042W',
    gateInTime: '2024-05-22 14:10:02',
    gateOutStatus: '裝船中 (Loading in Progress)',
    weight: '18,200 KG',
    customsRelease: '已放行 (Cleared)'
  }
};

// ---- 台中貨櫃集散站 (Taichung Container Depot page) ----
// Two tabs, one per terminal (10-11號碼頭／31號碼頭), each a fully
// self-contained TaichungDepotTerminal — facility/equipment counts and berth
// specs are sourced from CCTC's own terminal fact sheets; the two site-layout
// map images are the company's real yard maps (not the slide deck's AI demo
// mockup, which was style reference only).
export const TAICHUNG_DEPOT_BANNER_IMAGE = '/hero/banner-taichung-depot.jpg';
export const TAICHUNG_DEPOT_BANNER_MOBILE_IMAGE = '/hero/mobile-banner-taichung-depot.jpg';
export const TAICHUNG_DEPOT_BANNER_TITLE_ZH = '台中貨櫃集散站';

export const TAICHUNG_DEPOT_TERMINALS: TaichungDepotTerminal[] = [
  {
    id: 'berth-10-11',
    labelZh: '10-11號碼頭',
    labelEn: 'Terminal 10-11',
    facilityStats: {
      titleZh: '場地及建築物規模',
      titleEn: 'Facilities & Area',
      items: [
        { iconKey: 'yard', labelZh: '貨櫃堆積場面積', labelEn: 'Container Yard Area', valueZh: '340,000', unitZh: '平方公尺', unitEn: 'm²' },
        { iconKey: 'warehouse', labelZh: '倉庫面積（2座）', labelEn: 'Warehouse Area (2 units)', valueZh: '14,960', unitZh: '平方公尺', unitEn: 'm²' },
        { iconKey: 'building', labelZh: '管制室大樓面積（2座）', labelEn: 'Control Building Area (2 units)', valueZh: '2,910', unitZh: '平方公尺', unitEn: 'm²' },
        { iconKey: 'workshop', labelZh: '維修廠與機棚面積（1座）', labelEn: 'Workshop Area (1 unit)', valueZh: '1,510', unitZh: '平方公尺', unitEn: 'm²' }
      ]
    },
    equipmentStats: {
      titleZh: '機具設備',
      titleEn: 'Handling Equipment',
      items: [
        { iconKey: 'crane', labelZh: '橋式起重機', labelEn: 'Gantry Cranes', valueZh: '5', unitZh: '部', unitEn: 'units' },
        { iconKey: 'crane', labelZh: '軌道式起重機', labelEn: 'Rail-Mounted Gantry Cranes', valueZh: '15', unitZh: '部', unitEn: 'units' },
        { iconKey: 'crane', labelZh: '輪胎式起重機', labelEn: 'Rubber-Tyred Gantry Cranes', valueZh: '11', unitZh: '部', unitEn: 'units' },
        { iconKey: 'stacker', labelZh: '堆積機', labelEn: 'Reach Stackers', valueZh: '3', unitZh: '部', unitEn: 'units' },
        { iconKey: 'handler', labelZh: '空櫃機', labelEn: 'Empty Container Handlers', valueZh: '4', unitZh: '部', unitEn: 'units' },
        { iconKey: 'forklift', labelZh: '堆高機', labelEn: 'Forklifts', valueZh: '40', unitZh: '部', unitEn: 'units' },
        { iconKey: 'chassis', labelZh: '車架', labelEn: 'Chassis', valueZh: '103', unitZh: '台', unitEn: 'units' },
        { iconKey: 'reefer', labelZh: '冷凍櫃插座（440伏特）', labelEn: 'Reefer Sockets (440V)', valueZh: '146', unitZh: '座', unitEn: 'units' },
        { iconKey: 'generator', labelZh: '冷凍櫃場供電用發電機', labelEn: 'Reefer Yard Generator', valueZh: '1', unitZh: '台', unitEn: 'unit' },
        { iconKey: 'tractor', labelZh: '電動解櫃車', labelEn: 'Electric Container Tractors', valueZh: '4', unitZh: '部', unitEn: 'units' }
      ]
    },
    specTable: {
      titleZh: '貨櫃碼頭條件',
      titleEn: 'Berth Specifications',
      rowHeaderZh: '碼頭名稱',
      rowHeaderEn: 'Berth',
      columns: [
        { labelZh: '碼頭長度（公尺）', labelEn: 'Length (m)' },
        { labelZh: '限制水深（公尺）', labelEn: 'Depth (m)' },
        { labelZh: '繫樁數目', labelEn: 'Bollards' }
      ],
      rows: [
        { name: 'W10', values: ['320', '13', '14'] },
        { name: 'W11', values: ['320', '13', '15'] }
      ]
    },
    layoutImage: '/images/operations/taichung-berth-10-11-layout.jpg',
    layoutImageCaptionZh: '中國貨櫃公司台中港集散站場地圖',
    layoutImageCaptionEn: 'CCTC Taichung Port Depot Site Layout Map'
  },
  {
    id: 'berth-31',
    labelZh: '31號碼頭',
    labelEn: 'Terminal 31',
    facilityStats: {
      titleZh: '場地及建築物規模',
      titleEn: 'Facilities & Area',
      items: [
        { iconKey: 'yard', labelZh: '貨櫃堆積場面積', labelEn: 'Container Yard Area', valueZh: '138,173', unitZh: '平方公尺', unitEn: 'm²' },
        { iconKey: 'building', labelZh: '辦公室大樓', labelEn: 'Office Building', valueZh: '1', unitZh: '座', unitEn: 'unit' },
        { iconKey: 'warehouse', labelZh: '倉庫面積（1座）', labelEn: 'Warehouse Area (1 unit)', valueZh: '4,255', unitZh: '平方公尺', unitEn: 'm²' },
        { iconKey: 'workshop', labelZh: '維修廠與機棚面積（1座）', labelEn: 'Workshop Area (1 unit)', valueZh: '1,168', unitZh: '平方公尺', unitEn: 'm²' }
      ]
    },
    equipmentStats: {
      titleZh: '機具設備',
      titleEn: 'Handling Equipment',
      items: [
        { iconKey: 'crane', labelZh: '軌道式起重機', labelEn: 'Rail-Mounted Gantry Cranes', valueZh: '2', unitZh: '部', unitEn: 'units' },
        { iconKey: 'crane', labelZh: '輪胎式起重機', labelEn: 'Rubber-Tyred Gantry Cranes', valueZh: '5', unitZh: '部', unitEn: 'units' },
        { iconKey: 'stacker', labelZh: '堆積機', labelEn: 'Reach Stackers', valueZh: '2', unitZh: '部', unitEn: 'units' },
        { iconKey: 'handler', labelZh: '空櫃機', labelEn: 'Empty Container Handlers', valueZh: '3', unitZh: '部', unitEn: 'units' },
        { iconKey: 'forklift', labelZh: '堆高機', labelEn: 'Forklifts', valueZh: '15', unitZh: '部', unitEn: 'units' },
        { iconKey: 'forklift', labelZh: '電動堆高機', labelEn: 'Electric Forklifts', valueZh: '9', unitZh: '台', unitEn: 'units' },
        { iconKey: 'tractor', labelZh: '解櫃車', labelEn: 'Container Tractor', valueZh: '1', unitZh: '部', unitEn: 'unit' },
        { iconKey: 'chassis', labelZh: '車架', labelEn: 'Chassis', valueZh: '21', unitZh: '台', unitEn: 'units' },
        { iconKey: 'reefer', labelZh: '冷凍櫃插座（440伏特）', labelEn: 'Reefer Sockets (440V)', valueZh: '70', unitZh: '座', unitEn: 'units' }
      ]
    },
    extraStats: {
      titleZh: '主要作業區容量',
      titleEn: 'Yard Capacity by Zone',
      items: [
        { iconKey: 'capacity', labelZh: 'TL作業區', labelEn: 'Zone TL', valueZh: '1,872', unitZh: 'TEU', unitEn: 'TEU' },
        { iconKey: 'capacity', labelZh: 'TF作業區', labelEn: 'Zone TF', valueZh: '510', unitZh: 'TEU', unitEn: 'TEU' },
        { iconKey: 'capacity', labelZh: 'RTG作業區', labelEn: 'Zone RTG', valueZh: '1,360', unitZh: 'TEU', unitEn: 'TEU' },
        { iconKey: 'capacity', labelZh: 'RT作業區', labelEn: 'Zone RT', valueZh: '1,772', unitZh: 'TEU', unitEn: 'TEU' },
        { iconKey: 'capacity', labelZh: 'A3空櫃區（雙區）', labelEn: 'Zone A3 Empty (×2)', valueZh: '578×2', unitZh: 'TEU', unitEn: 'TEU' },
        { iconKey: 'capacity', labelZh: 'A2空櫃區', labelEn: 'Zone A2 Empty', valueZh: '900', unitZh: 'TEU', unitEn: 'TEU' },
        { iconKey: 'capacity', labelZh: 'A1空櫃區', labelEn: 'Zone A1 Empty', valueZh: '306', unitZh: 'TEU', unitEn: 'TEU' },
        { iconKey: 'reefer', labelZh: '冷凍櫃區', labelEn: 'Reefer Zone', valueZh: '70', unitZh: 'BOX', unitEn: 'BOX' }
      ]
    },
    layoutImage: '/images/operations/taichung-berth-31-layout.jpg',
    layoutImageCaptionZh: '中櫃台中港W31號碼頭後線場地平面圖',
    layoutImageCaptionEn: 'CCTC Taichung Port Terminal 31 Yard Layout Map'
  }
];
