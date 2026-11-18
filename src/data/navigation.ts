export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  submenu?: {
    label: string;
    href: string;
    description: string;
    iconName?: string;
  }[];
}

export const MAIN_NAVIGATION: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Mission", href: "/mission-vision" },
  {
    label: "Programs",
    href: "/programs",
    submenu: [
      {
        label: "All Programs Overview",
        href: "/programs",
        description: "Comprehensive humanitarian initiatives index",
        iconName: "Compass",
      },
      {
        label: "Aasra Medical Care",
        href: "/programs/medical-aid",
        description: "Healthcare assistance & surgeries",
        iconName: "Activity",
      },
      {
        label: "Aasra Education Support",
        href: "/programs/education",
        description: "Textbooks, school supplies & fees",
        iconName: "GraduationCap",
      },
      {
        label: "Aasra Food Support",
        href: "/programs/food-support",
        description: "Monthly family staple nutrition packs",
        iconName: "ShoppingBag",
      },
      {
        label: "Women's Empowerment",
        href: "/programs/womens-empowerment",
        description: "Vocational skills & enterprise",
        iconName: "Sparkles",
      },
      {
        label: "Emergency Relief",
        href: "/programs/emergency-relief",
        description: "Crisis, flood & seasonal disaster response",
        iconName: "LifeBuoy",
      },
      {
        label: "Aasra Livelihood Program",
        href: "/programs/livelihood",
        description: "Small business tools & pushcarts",
        iconName: "Briefcase",
      },
    ],
  },
  { label: "Our Impact", href: "/impact" },
  { label: "Get Involved", href: "/volunteer" },
  { label: "Transparency", href: "/transparency" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  programs: [
    { label: "Aasra Medical Care", href: "/programs/medical-aid" },
    { label: "Aasra Education Support", href: "/programs/education" },
    { label: "Aasra Food Support", href: "/programs/food-support" },
    { label: "Women's Empowerment", href: "/programs/womens-empowerment" },
    { label: "Emergency Relief", href: "/programs/emergency-relief" },
    { label: "Aasra Livelihood Program", href: "/programs/livelihood" },
  ],
  organization: [
    { label: "About Us", href: "/about" },
    { label: "Our Mission & Vision", href: "/mission-vision" },
    { label: "Our Impact & Standards", href: "/impact" },
    { label: "Financial Transparency", href: "/transparency" },
    { label: "Annual Reports & Roadmap", href: "/annual-reports" },
    { label: "Volunteer With Us", href: "/volunteer" },
    { label: "Apply for Assistance", href: "/apply-for-assistance" },
    { label: "Contact Coordination", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};
