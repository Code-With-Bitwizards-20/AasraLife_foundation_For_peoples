export interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "assistance" | "donations" | "volunteering" | "transparency";
}

export const FAQS: FAQItem[] = [
  {
    category: "general",
    question: "What is AasraLife Foundation?",
    answer:
      "AasraLife Foundation is a humanitarian nonprofit initiative established in Pakistan to support vulnerable individuals and families through medical care, education support, food security, women's empowerment, emergency relief, and sustainable small-business livelihoods.",
  },
  {
    category: "general",
    question: "Who is the founder of AasraLife Foundation?",
    answer:
      "AasraLife Foundation was founded by Muhammad Abdullah Shahzad Bhatti, an LLB Part IV student at the University of the Punjab, Lahore, Pakistan, driven by a deep conviction that human dignity and compassionate support are universal humanitarian imperatives.",
  },
  {
    category: "donations",
    question: "How can I donate through SadaPay or bank transfer?",
    answer:
      "To protect donors and maintain strict regulatory compliance, public donation facilities will be published on our /donate page once all regulatory registration and fundraising authorization requirements are formally finalized. We will then provide verified SadaPay and bank transfer account details for manual transfers.",
  },
  {
    category: "donations",
    question: "Are online payments processed automatically on this website?",
    answer:
      "No. AasraLife Foundation operates a frontend-only platform without third-party payment gateways. All future donations will use transparent, verified manual account transfers directly between your banking app and the foundation's official account.",
  },
  {
    category: "assistance",
    question: "How do individuals apply for assistance?",
    answer:
      "Eligible individuals facing acute hardship can submit an inquiry via our /apply-for-assistance page or by reaching out to our regional desk. Every case undergoes independent documentation review and physical verification.",
  },
  {
    category: "assistance",
    question: "Does submitting an inquiry guarantee assistance?",
    answer:
      "No. Assistance depends on rigorous eligibility vetting, medical and financial documentation review, and available charitable funding. We prioritize life-threatening medical emergencies and destitute households.",
  },
  {
    category: "transparency",
    question: "How does AasraLife safeguard beneficiary dignity?",
    answer:
      "We strictly prohibit photographing vulnerable beneficiaries or using their hardship for promotional social media campaigns. Assistance is delivered with absolute privacy, honor, and confidentiality.",
  },
  {
    category: "volunteering",
    question: "How can I volunteer with AasraLife Foundation?",
    answer:
      "You can submit a volunteer inquiry on our /volunteer page. We welcome university students, healthcare workers, educators, and working professionals for field verification, packing drives, tutoring, and emergency response teams.",
  },
];
