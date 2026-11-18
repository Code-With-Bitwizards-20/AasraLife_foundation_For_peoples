export interface ImpactStatement {
  title: string;
  statement: string;
  subtext: string;
  iconName: string;
}

export const IMPACT_STATEMENTS: ImpactStatement[] = [
  {
    title: "Dignified Support",
    statement: "Every Act of Kindness Strengthens Communities",
    subtext: "Providing support that preserves self-respect, privacy, and personal honor.",
    iconName: "Heart",
  },
  {
    title: "Self-Reliance",
    statement: "Every Opportunity Creates Enduring Hope",
    subtext: "Empowering breadwinners with productive tools and practical trade skills.",
    iconName: "TrendingUp",
  },
  {
    title: "Transparent Trust",
    statement: "Every Contribution Matters & Is Accounted For",
    subtext: "Operating with open books, verified bank statements, and clear allocations.",
    iconName: "ShieldCheck",
  },
  {
    title: "Lifelong Growth",
    statement: "Every Child Educated Transforms A Generation",
    subtext: "Breaking barriers of poverty through textbooks, supplies, and school retention.",
    iconName: "GraduationCap",
  },
];

/**
 * Foundational Operating Milestones (Non-fabricated, clear pre-launch/operational status)
 */
export const OPERATIONAL_STATUS = {
  phase: "Inception & Foundational Development",
  operatingScope: "Lahore & Adjoining Districts, Punjab, Pakistan",
  verificationStandard: "100% Pre-Disbursement Verification Requirement",
  paymentMethod: "Direct Hospital & Vendor Remittance (Zero Unverified Cash Handouts)",
};
