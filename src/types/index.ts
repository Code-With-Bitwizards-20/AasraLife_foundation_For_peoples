export type ProgramCategory =
  | "medical"
  | "livelihood"
  | "education"
  | "women"
  | "food"
  | "emergency";

export interface ProgramItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  iconName: string;
  statusLabel: string;
  whyItMatters: string;
  whoMayBenefit: string[];
  typesOfAssistance: string[];
  howSupportIsProvided: string[];
  howToGetInvolved: string[];
  faqs: { question: string; answer: string }[];
  relatedProgramSlugs: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "assistance" | "donations" | "volunteering" | "transparency";
}

export interface ImpactStatement {
  title: string;
  statement: string;
  subtext: string;
  iconName: string;
}
