import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowRight,
  Info,
  CheckCircle2,
  Lock,
  FileText,
  Clock,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Financial Transparency & Governance Charter — AasraLife Foundation",
  description:
    "Review AasraLife Foundation's commitment to financial accountability, responsible use of charitable contributions, and transparent reporting principles in Pakistan.",
};

export default function TransparencyPage() {
  return (
    <div className="bg-[#FFF9EE] space-y-16 sm:space-y-24">
      {/* 1. Page Hero with Breadcrumbs */}
      <PageHero
        badge="Institutional Governance"
        badgeIcon={<ShieldCheck className="w-4 h-4 text-[#D6A943]" />}
        title="Financial"
        highlight="Transparency &"
        italicWord="Accountability."
        description="Trust is the foundation of every contribution. We believe humanitarian work should be guided by honesty, responsibility, accountability, and respect for every contribution."
        breadcrumbs={[{ label: "Transparency" }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* 1. Our Commitment to Transparency */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#064B35]/12 shadow-sm space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D6A943] block">
            Institutional Standard
          </span>
          <h2 className="font-heading font-extrabold text-2xl text-[#172B26] flex items-center gap-2.5">
            <ShieldCheck className="w-6 h-6 text-[#064B35]" />
            <span>Our Commitment to Transparency</span>
          </h2>
          <p className="text-base sm:text-lg text-[#2D433B] leading-relaxed">
            At AasraLife Foundation, transparency is an active moral responsibility. We believe donors,
            volunteers, and communities have an unconditional right to understand how funds are handled, how assistance is verified,
            and how resources are utilized to uplift vulnerable lives.
          </p>
        </div>

        {/* 2. Responsible Use of Contributions & 3. Financial Accountability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-[#064B35]/12 shadow-sm space-y-4">
            <h3 className="font-heading font-bold text-xl text-[#172B26] border-b border-[#064B35]/10 pb-3">
              Responsible Use of Contributions
            </h3>
            <p className="text-sm leading-relaxed text-[#3D5A50]">
              Every contribution is allocated strictly according to approved charitable purposes.
              We prioritize direct institutional payments—such as settling hospital invoices directly with registered medical
              centers or procuring wholesale nutrition packs—ensuring charitable resources are never diverted.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#064B35]/12 shadow-sm space-y-4">
            <h3 className="font-heading font-bold text-xl text-[#172B26] border-b border-[#064B35]/10 pb-3">
              Financial Accountability
            </h3>
            <p className="text-sm leading-relaxed text-[#3D5A50]">
              We maintain documented bookkeeping for all authorized transactions. The foundation opposes
              unverified cash distributions, requiring receipts, patient case summaries, and vendor invoices
              for all disbursed relief items.
            </p>
          </div>
        </div>

        {/* 4. Donation Handling Principles */}
        <div className="bg-white rounded-3xl p-8 border border-[#064B35]/12 shadow-sm space-y-5">
          <h3 className="font-heading font-bold text-xl text-[#172B26] border-b border-[#064B35]/10 pb-3">
            Donation Handling Principles
          </h3>
          <ul className="space-y-3.5 text-xs sm:text-sm text-[#172B26]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#064B35] shrink-0 mt-0.5" />
              <span><strong>Designated Fund Earmarking:</strong> Contributions earmarked for specific causes (e.g. Medical Care or Food Support) are dedicated exclusively to those initiatives.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#064B35] shrink-0 mt-0.5" />
              <span><strong>No Fabricated Financial Metrics:</strong> We never invent false beneficiary counts, exaggerated donor numbers, or fictitious financial balances.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#064B35] shrink-0 mt-0.5" />
              <span><strong>Zero Intermediary Leakage:</strong> Remittances are settled with vendors, diagnostic labs, and schools to ensure 100% verified application of funds.</span>
            </li>
          </ul>
        </div>

        {/* 5. Reporting and Annual Disclosure */}
        <div className="p-8 rounded-3xl bg-[#043526] text-white space-y-4 shadow-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D6A943] block">
            Verification Roadmap
          </span>
          <h3 className="font-heading font-extrabold text-2xl text-white">
            Reporting and Periodic Disclosure
          </h3>
          <p className="text-[#FFF9EE]/85 text-sm sm:text-base leading-relaxed">
            As formal operations expand and authorized funds are collected and disbursed, AasraLife Foundation
            will publish comprehensive financial disclosures, audited accounts, and project reports on our Annual Reports page.
          </p>
          <div className="pt-2">
            <Link
              href="/annual-reports"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D6A943] text-[#172B26] font-bold text-xs sm:text-sm hover:bg-[#E5B854] transition-colors"
            >
              <span>View Annual Reports & Documentation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 6. Legal and Non-Discrimination Notice */}
        <div className="p-5 rounded-2xl bg-[#EAF3ED] border border-[#064B35]/15 text-xs text-[#064B35] space-y-1.5 shadow-sm">
          <div className="flex items-center gap-2 font-bold">
            <Info className="w-4 h-4 text-[#D6A943] shrink-0" />
            <span>Ethical Commitment:</span>
          </div>
          <p className="leading-relaxed">
            AasraLife Foundation provides humanitarian assistance strictly on the basis of verified human need,
            without discrimination based on religion, ethnicity, gender, caste, or geographic background.
          </p>
        </div>
      </div>

      {/* CTA */}
      <CTASection
        title="Transparent Humanitarian Action."
        subtitle="Uncompromising Integrity"
        description="Review our six welfare portfolios or review our impact standards and process timelines."
        primaryBtnText="Discover Programs"
        primaryBtnHref="/programs"
        secondaryBtnText="Review Impact Standards"
        secondaryBtnHref="/impact"
      />
    </div>
  );
}
