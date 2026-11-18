export interface ProgramData {
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

export const PROGRAMS: ProgramData[] = [
  {
    id: "medical-aid",
    slug: "medical-aid",
    title: "Aasra Medical Care",
    subtitle: "Healthcare Support & Life-Saving Assistance",
    shortDescription:
      "Support for vulnerable individuals who need access to essential medical treatment, prescribed medicines, diagnostic assistance, and specialized surgical care.",
    fullDescription:
      "Aasra Medical Care is dedicated to easing the immense burden of healthcare costs on underprivileged families. In Pakistan, severe illness or sudden injury often forces low-income households into devastating debt. We aim to collaborate directly with registered hospitals and diagnostic centers to subsidize medical bills, supply prescribed chronic medicines, and support critical operations, ensuring that financial vulnerability does not prevent life-saving care.",
    image: "/images/programs/medical-aid.jpg",
    iconName: "Activity",
    statusLabel: "Program in Development (Subject to Funding & Verification)",
    whyItMatters:
      "Healthcare is a fundamental human right. When an ailing parent or child cannot afford diagnosis or medication, the entire family structure faces collapse. By alleviating medical distress, we preserve lives and protect household stability.",
    whoMayBenefit: [
      "Low-income patients requiring urgent surgeries or specialized hospital admissions",
      "Elderly individuals living on meager pensions requiring chronic daily medication (e.g. diabetes, hypertension)",
      "Vulnerable children in need of pediatric treatments or corrective procedures",
      "Families facing acute diagnostic or emergency hospitalization expenses",
    ],
    typesOfAssistance: [
      "Hospital bill subsidies paid directly to registered healthcare provider accounts",
      "Assistance with prescribed diagnostic tests (laboratory work, ultrasounds, MRI/CT scans)",
      "Supply of essential monthly prescription medications for verified chronic ailments",
      "Mobility and assistive devices such as wheelchairs, crutches, and hearing aids",
    ],
    howSupportIsProvided: [
      "Case identification through hospital welfare desks and direct community inquiries",
      "Thorough documentary review of medical reports, prescriptions, and official hospital estimates",
      "Direct remittance to verified medical institutions—avoiding unverified cash handovers",
      "Periodic follow-up with attending physicians to verify treatment progress and recovery",
    ],
    howToGetInvolved: [
      "Volunteer as a medical coordinator or liaison between hospitals and the foundation",
      "Healthcare professionals: Offer pro-bono diagnostic consultations or clinical guidance",
      "Support our medical fund once official donation channels are formally authorized",
    ],
    faqs: [
      {
        question: "How does AasraLife verify medical aid requests?",
        answer: "Assistance is evaluated through authenticated hospital documentation, doctor prescriptions, and direct liaison with the treating hospital's accounts department. We verify both medical urgency and socioeconomic need.",
      },
      {
        question: "Do you hand cash directly to patients?",
        answer: "No. In accordance with strict governance principles, financial assistance is paid directly to verified hospital accounts or registered medical pharmacies.",
      },
    ],
    relatedProgramSlugs: ["food-support", "livelihood"],
  },
  {
    id: "education",
    slug: "education",
    title: "Aasra Education Support",
    subtitle: "Learning Resources, Books & Student Sponsorships",
    shortDescription:
      "Educational assistance, textbooks, stationery, school uniforms, and learning resources for deserving students from financially constrained backgrounds.",
    fullDescription:
      "Education is the single most enduring engine of human opportunity. The Aasra Education Support initiative focuses on keeping bright, eager young minds in schools and vocational institutes. In disadvantaged communities, the modest cost of notebooks, uniforms, or monthly school fees often forces children into premature labor. We work to eliminate these barriers so every child can read, learn, and build a brighter tomorrow.",
    image: "/images/programs/education.jpg",
    iconName: "GraduationCap",
    statusLabel: "Program in Development (Subject to Funding & Verification)",
    whyItMatters:
      "When a child stays in school, the trajectory of an entire generation shifts from poverty to self-reliance. Education builds critical thinking, community leadership, and economic resilience.",
    whoMayBenefit: [
      "Students from low-income households at risk of discontinuing schooling due to fees",
      "Children of daily wage earners unable to afford curriculum textbooks and uniforms",
      "Promising secondary and technical students requiring vocational study assistance",
      "Young girls facing economic or transport barriers to continuing secondary education",
    ],
    typesOfAssistance: [
      "School fee sponsorships paid directly to accredited educational institutions",
      "Standard academic packs containing curriculum textbooks, notebooks, and writing materials",
      "School uniform sets, backpacks, and sturdy school footwear",
      "Vocational and technical course assistance for young adults seeking employable trades",
    ],
    howSupportIsProvided: [
      "Direct verification of student enrollment and attendance with school administration",
      "Distribution of standardized, high-quality learning materials directly to students",
      "Coordination with school heads to ensure tuition support reaches the student account",
      "Annual review of academic engagement to encourage continuous learning",
    ],
    howToGetInvolved: [
      "Educators: Volunteer for weekend tutoring or academic guidance sessions",
      "Contribute books, school supplies, or educational materials during supply drives",
      "Support student sponsorships once donation channels are formally enabled",
    ],
    faqs: [
      {
        question: "Which schools do you work with?",
        answer: "We aim to work with community-based schools, government institutions, and nonprofit educational partners that provide recognized curriculum schooling.",
      },
      {
        question: "Can I sponsor an individual child's education?",
        answer: "Once our formal donation facilities and verification mechanisms are fully activated, educational sponsorships with progress reporting will be available.",
      },
    ],
    relatedProgramSlugs: ["womens-empowerment", "livelihood"],
  },
  {
    id: "food-support",
    slug: "food-support",
    title: "Aasra Food Support",
    subtitle: "Nutritional Staple Packs & Family Care",
    shortDescription:
      "Food packages and essential household nutrition supplies for vulnerable families, elderly citizens, and individuals experiencing acute food insecurity.",
    fullDescription:
      "No family should ever face the pain of an empty table. Aasra Food Support prepares dignified family nutrition packages containing unadulterated staple provisions: wheat flour (atta), basmati rice, lentils (daal), cooking oil, tea, sugar, and basic hygiene soap. We prioritize bedridden individuals, widows with young children, and daily wage earners facing acute crisis, delivering aid with courteous respect and zero photographic humiliation.",
    image: "/images/programs/food-support.jpg",
    iconName: "ShoppingBag",
    statusLabel: "Planned Humanitarian Initiative",
    whyItMatters:
      "Adequate nutrition is the foundation of human health, cognitive development, and daily productivity. Assisting a struggling family with monthly food provisions relieves acute stress and allows parents to keep children in school.",
    whoMayBenefit: [
      "Destitute households with no steady breadwinner or dependable income",
      "Elderly or medically incapacitated citizens living without family support",
      "Widows supporting minor children without external pensions",
      "Communities impacted by seasonal unemployment or localized food price surges",
    ],
    typesOfAssistance: [
      "Standard 30-day comprehensive family nutrition ration packages",
      "Essential hygienic items (handwashing soap, laundry supplies)",
      "Seasonal emergency food kits during winter weather or natural adversity",
      "Discreet doorstep delivery for elderly or disabled beneficiaries unable to walk",
    ],
    howSupportIsProvided: [
      "Community-level assessment to identify genuinely needy households",
      "Bulk procurement of high-grade, unadulterated staple provisions from wholesale vendors",
      "Orderly, dignified distribution with absolute respect for personal privacy",
      "No public photography or social media display of beneficiaries receiving aid",
    ],
    howToGetInvolved: [
      "Volunteer at our packing hubs to assemble and organize monthly ration cartons",
      "Help coordinate discreet delivery to verified homebound elderly citizens",
      "Support nutritional packages once donation channels are active",
    ],
    faqs: [
      {
        question: "What is included in a typical food ration pack?",
        answer: "Packs typically contain 20kg wheat flour, 5kg rice, 4kg mixed lentils, 3 liters cooking oil, sugar, tea, salt, and basic hygiene soap—enough to sustain an average family for a month.",
      },
      {
        question: "Are beneficiaries photographed during distributions?",
        answer: "Strictly no. AasraLife Foundation has a strict dignity charter forbidding the photography of vulnerable individuals receiving humanitarian relief.",
      },
    ],
    relatedProgramSlugs: ["emergency-relief", "medical-aid"],
  },
  {
    id: "womens-empowerment",
    slug: "womens-empowerment",
    title: "Aasra Women's Empowerment",
    subtitle: "Vocational Skills & Economic Independence",
    shortDescription:
      "Vocational education, professional training, practical trade skills, and home-based enterprise opportunities that encourage women's economic self-reliance.",
    fullDescription:
      "Aasra Women's Empowerment is anchored in the belief that when women are economically empowered, entire families prosper. We work to support widowed mothers, female heads of households, and young women through professional tailoring courses, embroidery and craft training, culinary entrepreneurship skills, and financial literacy. All initiatives are conducted in safe, culturally respectful environments that uphold dignity.",
    image: "/images/programs/womens-empowerment.jpg",
    iconName: "Sparkles",
    statusLabel: "Program in Development (Subject to Funding & Verification)",
    whyItMatters:
      "Women invest a high proportion of their earnings directly into their children's education, nutrition, and healthcare. Economic independence provides security, confidence, and protection against exploitation.",
    whoMayBenefit: [
      "Widows and female heads of households supporting dependent children",
      "Women seeking home-based vocational earnings through tailoring or crafts",
      "Young women seeking practical digital or technical skill certifications",
      "Artisans lacking market access or equipment to commercialize their craft",
    ],
    typesOfAssistance: [
      "Industrial and heavy-duty electric sewing machines with starter fabric packages",
      "Vocational training in professional stitching, pattern-making, and embroidery",
      "Culinary kits and packaging materials for home catering micro-enterprises",
      "Basic business literacy: bookkeeping, customer relations, and fair pricing",
    ],
    howSupportIsProvided: [
      "Assessment of applicant aptitude and safe household workspace suitability",
      "Provision of tangible productive equipment rather than short-term cash",
      "Mentorship from experienced female instructors and vocational trainers",
      "Quarterly check-ins to support ongoing enterprise growth and problem-solving",
    ],
    howToGetInvolved: [
      "Vocational trainers: Volunteer your expertise to teach sewing, design, or craft skills",
      "Help connect female home-based artisans with ethical local consumer markets",
      "Support vocational equipment starter kits once donations are authorized",
    ],
    faqs: [
      {
        question: "Are training programs conducted in safe premises?",
        answer: "Yes. All training workshops and programs are organized in safe, accessible, community-based spaces with female instructors.",
      },
      {
        question: "Do participants keep the sewing machines and equipment?",
        answer: "Yes. Equipment is gifted directly to the participant upon successful course completion to enable ongoing self-employment.",
      },
    ],
    relatedProgramSlugs: ["livelihood", "education"],
  },
  {
    id: "emergency-relief",
    slug: "emergency-relief",
    title: "Aasra Emergency Relief",
    subtitle: "Crisis Response, Clean Water & Disaster Relief",
    shortDescription:
      "Humanitarian support during natural disasters, seasonal floods, severe weather events, and sudden emergency hardship across Pakistan.",
    fullDescription:
      "When unexpected catastrophes strike—such as monsoon flash floods, severe urban waterlogging, or bitter winter cold waves—vulnerable communities suffer the most devastating losses. Aasra Emergency Relief maintains a proactive disaster response protocol to deploy emergency survival kits, dry nutrition, clean drinking water, water purification supplies, and waterproof tarpaulins to affected families.",
    image: "/images/programs/emergency-relief.jpg",
    iconName: "LifeBuoy",
    statusLabel: "Contingency Humanitarian Framework",
    whyItMatters:
      "In emergencies, immediate speed and logistical coordination save lives. Providing clean water, temporary sheltering, and warm blankets prevents secondary disease outbreaks and preserves human dignity during crisis.",
    whoMayBenefit: [
      "Families displaced or affected by seasonal monsoon flooding and flash inundation",
      "Low-income households facing severe winter weather without heat or blankets",
      "Communities facing sudden emergency displacement or localized structural fires",
    ],
    typesOfAssistance: [
      "Emergency survival rations (ready-to-eat dry food, clean drinking water, biscuits)",
      "Water purification tablets and portable community filtration units",
      "Heavy waterproof shelter tarpaulins, warm fleece blankets, and seasonal jackets",
      "First aid and emergency hygiene survival packages",
    ],
    howSupportIsProvided: [
      "Rapid on-site need appraisal coordinated with local community elders",
      "Procurement and assembly of disaster-ready survival kits",
      "Direct distribution in coordination with local rescue authorities where required",
      "Transition support to help families return to stable shelter",
    ],
    howToGetInvolved: [
      "Join our rapid-response volunteer roster for emergency packing and dispatch",
      "Logistics and vehicle owners: Assist with transporting emergency relief supplies",
      "Support emergency disaster contingency supplies once donations are enabled",
    ],
    faqs: [
      {
        question: "How quickly can emergency supplies be deployed?",
        answer: "Our contingency framework aims to mobilize volunteer packing teams and initial supplies within 24 to 48 hours of an official calamity declaration.",
      },
    ],
    relatedProgramSlugs: ["food-support", "medical-aid"],
  },
  {
    id: "livelihood",
    slug: "livelihood",
    title: "Aasra Livelihood Program",
    subtitle: "Small Business Grants & Sustainable Self-Reliance",
    shortDescription:
      "Support for sustainable livelihood development, professional tools, pushcarts, and small-business opportunities that foster enduring dignity.",
    fullDescription:
      "The Aasra Livelihood Program focuses on the profound dignity of self-reliance. Rather than fostering indefinite dependency through recurring handouts, we provide aspiring small-business operators with productive tangible assets. From industrial sewing machines and motorcycle delivery setups to fruit pushcarts, carpentry kits, and electrical tools, we help breadwinners establish viable, dignified daily incomes that support entire households.",
    image: "/images/programs/livelihood.jpg",
    iconName: "Briefcase",
    statusLabel: "Flagship Welfare Initiative (In Development)",
    whyItMatters:
      "Handouts provide temporary relief; productive tools build permanent independence. Enabling an unemployed breadwinner to earn an honest daily income restores family dignity and breaks the cycle of poverty permanently.",
    whoMayBenefit: [
      "Unemployed or underemployed heads of households with dependents",
      "Skilled tradespeople (mechanics, tailors, carpenters, electricians) lacking tools",
      "Day laborers seeking to establish independent mobile vending or kiosk businesses",
      "Young adults with technical vocational diplomas seeking starter toolkits",
    ],
    typesOfAssistance: [
      "Heavy-duty mobile vending pushcarts with basic starter inventory",
      "Industrial tailoring and sewing workstations for home or shop operation",
      "Complete professional trade kits (automotive repair, plumbing, carpentry)",
      "Small starter inventory grants for neighborhood grocery or convenience kiosks",
    ],
    howSupportIsProvided: [
      "Assessment of applicant skills, trade background, and business feasibility",
      "Procurement of durable, professional-grade equipment from authorized suppliers",
      "Formal asset transfer agreement stipulating that tools cannot be resold",
      "Follow-up mentorship and revenue tracking at 30, 90, and 180-day intervals",
    ],
    howToGetInvolved: [
      "Business owners: Mentor aspiring small entrepreneurs in sales, customer care, and bookkeeping",
      "Technical specialists: Help inspect and verify trade tool quality before handover",
      "Support a livelihood equipment kit once official donation channels are open",
    ],
    faqs: [
      {
        question: "Is this a loan program?",
        answer: "No. AasraLife provides equipment as a charitable grant of productive assets, not a microfinance loan with interest. Our goal is debt-free empowerment.",
      },
      {
        question: "How do you ensure the tools are not resold?",
        answer: "We establish community guarantor agreements and conduct periodic follow-up visits to ensure the equipment remains actively used for household livelihood.",
      },
    ],
    relatedProgramSlugs: ["womens-empowerment", "education"],
  },
];
