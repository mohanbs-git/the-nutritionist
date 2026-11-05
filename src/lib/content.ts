import contentData from '@/data/siteContent.json';

export interface SocialLink {
  name: string;
  handle: string;
  url: string;
  icon: string;
}

export interface Program {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  image: string;
  details: string;
  format: string;
  isActive: boolean;
}

export interface CaseStudy {
  id?: string;
  patient: string;
  location: string;
  profession: string;
  diagnosis: string;
  quote: string;
  timeline: string;
  outcome: string;
  verified: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Qualification {
  category: string;
  title: string;
  institution: string;
  description: string;
}

export interface SiteContent {
  contact: {
    phone: string;
    displayPhone: string;
    email: string;
    whatsappNumber: string;
    whatsappUrl: string;
  };
  clinic: {
    name: string;
    suite: string;
    area: string;
    timings: {
      weekdays: string;
      sunday: string;
    };
    workingHours: {
      start: number;
      end: number;
    };
  };
  socials: SocialLink[];
  programs: Program[];
  caseStudies: CaseStudy[];
  faqs: FAQ[];
  qualifications: Qualification[];
}

export const siteContent: SiteContent = contentData as SiteContent;

export function getActivePrograms(): Program[] {
  return siteContent.programs.filter((p) => p.isActive !== false);
}

export function getProgramTitles(): string[] {
  return getActivePrograms().map((p) => p.title);
}

export function getCaseStudies(): CaseStudy[] {
  return siteContent.caseStudies;
}

export function getFaqs(): FAQ[] {
  return siteContent.faqs;
}

export function getSocials(): SocialLink[] {
  return siteContent.socials;
}

export function getQualifications(): Qualification[] {
  return siteContent.qualifications;
}

export default siteContent;

