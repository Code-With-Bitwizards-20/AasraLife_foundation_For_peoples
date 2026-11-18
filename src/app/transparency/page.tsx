import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowRight,
  Info,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Financial Transparency & Governance — AasraLife Foundation",
  description:
    "Review AasraLife Foundation's commitment to financial accountability, responsible use of charitable contributions, and transparent reporting principles.",
};

export default function TransparencyPage() {
  return (
    <div className="bg-[#FFF9EE] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3ED] border border-[#064B35]/15 text-[#064B35] text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#D6A943]" />
            <span>Foundational Integrity Charter</span>
          </div>

          <h1 className="font-heading font-extrabold text-[#172B26] tracking-tight">
            Financial <span className="text-[#064B35]">Transparency</span>
          </h1>

          <p className="p-body text-base sm:text-lg">
            Trust is the foundation of every contribution. We believe humanitarian work should be guided
            by honesty, responsibility, accountability, and respect for every contribution.
          </p>
        </div>

        {/* 1. Our Commitment to Transparency */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#064B35]/15 shadow-md space-y-4">
          <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[#172B26] flex items-center gap-2.5">
            <ShieldCheck className="w-6 h-6 text-[#064B35]" />
            Our Commitment to Transparency
          </h2>
          <p className="p-body text-sm sm:text-base leading-relaxed">
            At AasraLife Foundation, transparency is an active moral responsibility. We believe donors,
            volunteers, and communities have a right to understand how funds are handled, how assistance is verified,
            and how resources are utilized to uplift vulnerable lives.
          </p>
        </div>

        {/* 2. Responsible Use of Contributions & 3. Financial Accountability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-[#064B35]/15 shadow-md space-y-4">
            <h3 className="font-heading font-bold text-lg text-[#172B26] border-b border-[#064B35]/10 pb-3">
              Responsible Use of Contributions
            </h3>
            <p className="text-xs sm:text-sm text-[#718078] leading-relaxed">
              Every prospective contribution is allocated strictly according to approved charitable purposes.
              We prioritize direct institutional payments—such as settling hospital invoices directly with medical
              centers or procuring wholesale nutrition packs—ensuring funds are not diverted.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#064B35]/15 shadow-md space-y-4">
            <h3 className="font-heading font-bold text-lg text-[#172B26] border-b border-[#064B35]/10 pb-3">
              Financial Accountability
            </h3>
            <p className="text-xs sm:text-sm text-[#718078] leading-relaxed">
              We maintain documented bookkeeping for all authorized transactions. The foundation opposes
              unverified cash distributions, requiring receipts, patient case summaries, and vendor invoices
              for all disbursed relief items.
            </p>
          </div>
        </div>

        {/* 4. Donation Handling Principles */}
        <div className="bg-white rounded-3xl p-8 border border-[#064B35]/15 shadow-md space-y-5">
          <h3 className="font-heading font-bold text-lg text-[#172B26] border-b border-[#064B35]/10 pb-3">
            Donation Handling Principles
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm text-[#172B26]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#064B35] shrink-0 mt-0.5" />
              <span><strong>Designated Fund Earmarking:</strong> Contributions earmarked for specific causes (e.g. Medical Care or Food Support) will be dedicated to those initiatives.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#064B35] shrink-0 mt-0.5" />
              <span><strong>No Fabricated Financial Metrics:</strong> We will never invent false beneficiary counts, exaggerated donor numbers, or fictitious financial balances.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#064B35] shrink-0 mt-0.5" />
              <span><strong>Strict Dignity Charter:</strong> Donated funds are never used to stage photo opportunities or exploit recipient distress for publicity.</span>
            </li>
          </ul>
        </div>

        {/* 5. Reporting and Recordkeeping & 6. Annual Financial Reports */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#064B35]/15 shadow-md space-y-6">
          <div className="space-y-2 border-b border-[#064B35]/10 pb-4">
            <h3 className="font-heading font-bold text-lg text-[#172B26]">
              Annual Financial Reports & Reporting Process
            </h3>
            <p className="text-xs text-[#718078]">
              Static report cards are prepared below for official publication once programs are formally active.
            </p>
          </div>

          {/* Transparent Empty-State / Planned Reporting Notice */}
          <div className="p-6 rounded-2xl bg-[#FFF9EE] border border-[#064B35]/15 space-y-3">
            <div className="flex items-center gap-2 font-bold text-sm text-[#064B35]">
              <Info className="w-4 h-4 text-[#D6A943]" />
              <span>Official Financial Publication Notice:</span>
            </div>
            <p className="p-body text-xs sm:text-sm leading-relaxed text-[#172B26]">
              &quot;Financial reports will be published as the foundation&apos;s authorized activities and financial reporting processes become established.&quot;
            </p>
            <p className="text-xs text-[#718078] leading-relaxed">
              We decline to publish fabricated financial statements or speculative ledger figures. As authorized
              activities disburse charitable relief, certified statements will be published in our public annual reports archive.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/annual-reports"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064B35] hover:text-[#D6A943] transition-colors"
            >
              <span>Visit Annual Reports & Documents Library</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 7. Frequently Asked Questions on Transparency */}
        <div className="space-y-4">
          <h2 className="font-heading font-extrabold text-xl text-[#172B26]">
            Transparency Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            <div className="p-5 rounded-2xl bg-white border border-[#064B35]/10 space-y-1.5 shadow-sm">
              <h3 className="font-heading font-bold text-sm text-[#172B26]">
                Why are there no beneficiary numbers or total money amounts on this website?
              </h3>
              <p className="text-xs text-[#718078] leading-relaxed">
                In strict accordance with our core commitment to honesty, we do not invent fake statistics. Because the foundation is currently establishing its authorized infrastructure and programs, we display transparent principles rather than fictitious achievements.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#064B35]/10 space-y-1.5 shadow-sm">
              <h3 className="font-heading font-bold text-sm text-[#172B26]">
                How will donors receive updates on their contributions?
              </h3>
              <p className="text-xs text-[#718078] leading-relaxed">
                Once public donations are activated, donors who provide their transaction reference can receive verified confirmation and general progress reports detailing how program funds were deployed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
