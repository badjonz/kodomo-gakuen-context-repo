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
  subtitle: string;
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
  subtitle: string;
  content: string;
}

export interface AboutVision {
  title: string;
  title2?: string;
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
  page: AboutPageContent;
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

export interface StarPageContent {
  introduction: ClassIntroduction;
  features: StarFeature[];
  dailySchedule: StarDailySchedule;
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
  nyuuji: NyuujiContent;
  youji: YoujiContent;
  star: StarContent;
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