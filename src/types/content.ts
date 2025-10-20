import type { Language } from './language';

// Navigation interfaces
export interface NavigationItem {
  [key: string]: string;
}

export interface NavigationSubmenu {
  about: string;
  fees: string;
  privacy: string;
  menu: string;
  programs: string;
  enrolment: string;
}

export interface ClassesSubmenu {
  nyuuji: string;
  youji: string;
  star: string;
}

export interface NavigationContent {
  home: string;
  information: string;
  informationSubmenu: NavigationSubmenu;
  forms: string;
  classes: string;
  classesSubmenu: ClassesSubmenu;
  activities: string;
}

// Header interfaces
export interface HeaderContent {
  email: string;
  languageToggle: string;
  siteName: string;
  contactButton: string;
  mailtoSubject: string;
  mailtoBody: string;
}

// Announcement interfaces
export interface AnnouncementContent {
  title: string;
  content: string;
  readMoreText: string;
  readMoreLink: string;
  minimizedText: string;
}

// Hero interfaces
export interface HeroHomepage {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export interface HeroPage {
  title: string;
  subtitle?: string;
}

export interface HeroPages {
  about: HeroPage;
  fees: HeroPage;
  privacy: HeroPage;
  menu: HeroPage;
  programs: HeroPage;
  enrolment: HeroPage;
  forms: HeroPage;
  nyuuji: HeroPage;
  youji: HeroPage;
  star: HeroPage;
  activities: HeroPage;
}

export interface HeroContent {
  homepage: HeroHomepage;
  pages: HeroPages;
}

// Age Groups interfaces
export interface AgeGroupInfo {
  name: string;
  ageRange: string;
  description: string;
  image: string;
}

export interface AgeGroupsContent {
  sectionTitle: string;
  nyuuji: AgeGroupInfo;
  youji: AgeGroupInfo;
  star: AgeGroupInfo;
}

// About interfaces
export interface AboutMainContent {
  title: string;
  paragraphs: string[];
}

export interface AboutNurturing {
  title: string;
  titleColored: string;
  subtitle: string;
  content: string;
}

export interface AboutVision {
  title: string;
  titleColored: string;
  paragraphs: string[];
}

export interface AboutCallToAction {
  title: string;
  description: string;
  buttonText: string;
}

export interface AboutPageContent {
  mainContent: AboutMainContent;
  nurturing: AboutNurturing;
  vision: AboutVision;
  callToAction: AboutCallToAction;
}

export interface AboutContent {
  sectionTitle: string;
  description: string;
  philosophy: string;
  page?: AboutPageContent;
}

// Class page interfaces
export interface ClassIntroduction {
  title: string;
  subtitle: string;
  description: string;
}

export interface ClassInfo {
  name: string;
  titleParts: string[];
  colorClass: string;
  bgColorClass: string;
  description: string;
  image: string;
  alt: string;
}

export interface NyuujiPageContent {
  introduction: ClassIntroduction;
  classes: ClassInfo[];
}

export interface NyuujiContent {
  sectionTitle: string;
  description: string;
  page: NyuujiPageContent;
}

export interface YoujiPageContent {
  introduction: ClassIntroduction;
  classes: ClassInfo[];
}

export interface YoujiContent {
  sectionTitle: string;
  description: string;
  page: YoujiPageContent;
}

export interface StarFeature {
  title: string;
  description: string;
}

export interface ScheduleItem {
  time: string;
  activity: string;
}

export interface StarDailySchedule {
  title: string;
  schedule: ScheduleItem[];
}

export interface StarInformation {
  text: string;
  text2?: string;
  image?: string;
  alt?: string;
}

export interface StarTeacher {
  name: string;
  englishName: string;
  image: string;
  description: string[];
}

export interface StarCurriculumItem {
  title: string;
  description: string;
  special?: string;
}

export interface StarPageContent {
  introduction: ClassIntroduction;
  features?: StarFeature[];
  dailySchedule?: StarDailySchedule;
  information?: StarInformation[];
  teachers?: StarTeacher[];
  curriculum?: StarCurriculumItem[];
}

export interface StarContent {
  sectionTitle: string;
  description: string;
  page: StarPageContent;
}

// Blog interfaces
export interface BlogContent {
  sectionTitle: string;
  viewAllText: string;
}

// Fees interfaces
export interface FeesPaymentDetails {
  title: string;
  mainText: string;
  paymentDetails: string[];
  busNote: string;
  allParents: {
    title: string;
    points: string[];
  };
  multiChildDiscount: {
    title: string;
    content: string;
  };
  certificationChange: {
    title: string;
    content: string;
  };
}

export interface FeesContentSection {
  title: string;
  introText: string;
  additionalFees: {
    title: string;
    infantFee: string;
    facilityFee: {
      title: string;
      content: string;
    };
    mealFee: {
      title: string;
      type1: string;
      type2: string;
      type3: string;
    };
    reductionNote: string;
    busFee: string;
  };
  busRules: string[];
}

export interface FeesPageContent {
  paymentSection: FeesPaymentDetails;
  contentSection: FeesContentSection;
}

export interface FeesContent {
  page: FeesPageContent;
}

// Menu interfaces
export interface MenuImage {
  src: string;
  alt: string;
  title: string;
}

export interface MenuPageContent {
  introduction: string;
  menuImage: MenuImage;
  features: string[];
  allergyNotice: string;
}

export interface MenuContent {
  page: MenuPageContent;
}

// Programs interfaces
export interface ProgramDocument {
  title: string;
  href: string;
  downloadName: string;
  description: string;
}

export interface ProgramEnrollmentSection {
  title: string;
  documents: ProgramDocument[];
}

export interface ProgramTokyoSukuwakuSection {
  title: string;
  description: string;
  documents: ProgramDocument[];
}

export interface ProgramsPageContent {
  introduction: string;
  enrollmentSection: ProgramEnrollmentSection;
  tokyoSukuwakuSection: ProgramTokyoSukuwakuSection;
}

export interface ProgramsContent {
  page: ProgramsPageContent;
}

// Activities interfaces
export interface ActivitiesEnglishClassSection {
  title: string;
  description: string[];
}

export interface ActivitiesAdultClassSection {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface ActivitiesDownloadSection {
  title: string;
  description: string;
  fileName: string;
  downloadText: string;
}

export interface ActivitiesPageContent {
  introduction: string;
  mainTitle: string;
  englishClassSection: ActivitiesEnglishClassSection;
  adultClassSection: ActivitiesAdultClassSection;
  downloadSection: ActivitiesDownloadSection;
}

export interface ActivitiesContent {
  page: ActivitiesPageContent;
}

// Forms interfaces
export interface FormsSection {
  titlePart1: string;
  titlePart2: string;
  subtitle: string;
  documents: any[];
}

export interface FormsPageContent {
  introduction: string;
  healthManagementSection: FormsSection;
  saturdayCareSection: FormsSection;
}

export interface FormsContent {
  page: FormsPageContent;
}

// Enrolment interfaces
export interface EnrolmentTableRow {
  certification: string;
  ages: string[];
}

export interface EnrolmentTable {
  title: string;
  headers: string[];
  rows: EnrolmentTableRow[];
}

export interface EnrolmentAvailabilityTable extends EnrolmentTable {
  legend: string;
  lastUpdated: string;
}

export interface EnrolmentApplicationInfoSessions {
  description: string;
  dates: string;
}

export interface EnrolmentApplicationDownloadLink {
  href: string;
  downloadName: string;
  buttonText: string;
}

export interface EnrolmentApplicationInfo {
  title: string;
  infoSessions: EnrolmentApplicationInfoSessions;
  downloadLink: EnrolmentApplicationDownloadLink;
}

export interface EnrolmentIntakeTable {
  title: string;
  lastUpdated: string;
  headers: string[];
  rows: EnrolmentTableRow[];
}

export interface EnrolmentInternationalClassTable {
  title: string;
  lastUpdated: string;
  headers: string[];
  description: string;
  numbers: string[];
}

export interface EnrolmentPageContent {
  introduction: string;
  capacityTable: EnrolmentTable;
  availabilityTable: EnrolmentAvailabilityTable;
  applicationInfo: EnrolmentApplicationInfo;
  intakeTable: EnrolmentIntakeTable;
  internationalClassTable: EnrolmentInternationalClassTable;
}

export interface EnrolmentContent {
  page: EnrolmentPageContent;
}

// Privacy interfaces
export interface PrivacySection {
  title: string;
  items: string[];
}

export interface PrivacyPageContent {
  introduction: string;
  sections: PrivacySection[];
}

export interface PrivacyContent {
  page: PrivacyPageContent;
}

// Footer interfaces
export interface FooterLinks {
  home: string;
  about: string;
  programs: string;
  contact: string;
}

export interface FooterQuickLinks {
  title: string;
  links: FooterLinks;
}

export interface FooterContact {
  title: string;
  phone: string;
  email: string;
  address: string;
}

export interface FooterSection {
  title: string;
}

export interface FooterContent {
  quickLinks: FooterQuickLinks;
  contact: FooterContact;
  social: FooterSection;
  location: FooterSection;
}

// Main content structure
export interface LanguageContent {
  navigation: NavigationContent;
  header: HeaderContent;
  announcement: AnnouncementContent;
  hero: HeroContent;
  ageGroups: AgeGroupsContent;
  about: AboutContent;
  nyuuji?: NyuujiContent;
  youji?: YoujiContent;
  star?: StarContent;
  fees?: FeesContent;
  menu?: MenuContent;
  programs?: ProgramsContent;
  activities?: ActivitiesContent;
  forms?: FormsContent;
  enrolment?: EnrolmentContent;
  privacy?: PrivacyContent;
  blog: BlogContent;
  footer: FooterContent;
}

export interface BilingualContent {
  ja: LanguageContent;
  en: LanguageContent;
}

// Content loading error interface
export interface ContentError {
  message: string;
  section?: string;
  fallbackUsed: boolean;
}