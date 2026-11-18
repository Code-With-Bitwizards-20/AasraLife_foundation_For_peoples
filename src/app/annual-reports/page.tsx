import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ShieldCheck, Info, ArrowRight, Clock } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Annual Reports & Documents — Official Public Archive",
  description:
    "Official annual reports, governance documents, and financial statements of AasraLife Foundation in Pakistan.",
};

export default function AnnualReportsPage() {
  return (
    <div className="bg-[#FFF9EE] space-y-16 sm:space-y-24">
      {/* 1. Page Hero with Breadcrumbs */}
      <PageHero
        badge="Public Publications"
        badgeIcon={<FileText className="w-4 h-4 text-[#D6A943]" />}
        title="Annual Reports &"
        highlight="Verified"
        italicWord="Publications."
        description="A central repository for foundation governance charters, annual impact reviews, and verified audited financial statements."
        breadcrumbs={[{ label: "Annual Reports" }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Empty-State Design with Dignity & Honesty */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#064B35]/12 shadow-xl text-center space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-[#EAF3ED] text-[#064B35] flex items-center justify-center mx-auto shadow-sm">
            <FileText className="w-10 h-10 text-[#064B35]" />
          </div>

          <div className="space-y-3 max-w-lg mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D6A943] block">
              Library Status
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#172B26]">
              Official annual reports will be published here when available.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#2D433B]">
              In adherence to our strict governance policy, AasraLife Foundation does not publish fictional
              annual reports or simulate activities that have not yet transpired.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#064B35]/12 text-xs sm:text-sm text-[#3D5A50] max-w-md mx-auto text-left space-y-2 shadow-sm">
            <div className="flex items-center gap-2 font-bold text-[#064B35]">
              <Info className="w-4 h-4 text-[#D6A943]" />
              <span>Publication Standards:</span>
            </div>
            <p className="leading-relaxed">
              As operational welfare programs disburse funds and annual financial reviews are compiled,
              official verified PDF reports will be uploaded directly to this repository for open download.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/transparency"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#064B35] text-white font-bold text-xs sm:text-sm hover:bg-[#043526] transition-all shadow-md group"
            >
              <span>Review Financial Transparency Policy</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#D6A943]" />
            </Link>
          </div>
        </div>

        {/* Directory Notice */}
        <div className="p-5 rounded-2xl bg-[#EAF3ED] border border-[#064B35]/15 flex items-center gap-3 text-xs sm:text-sm text-[#064B35] shadow-sm">
          <ShieldCheck className="w-5 h-5 text-[#D6A943] shrink-0" />
          <p>
            <strong>Document Archiving:</strong> All published reports will be permanently preserved in PDF format
            within our public repository for open public inspection.
          </p>
        </div>
      </div>

      {/* CTA */}
      <CTASection
        title="Committed to Authentic Transparency."
        subtitle="Public Trust"
        description="Explore how our welfare initiatives operate with strict documentary controls and institutional remittances."
        primaryBtnText="Discover Programs"
        primaryBtnHref="/programs"
        secondaryBtnText="Review Impact Standards"
        secondaryBtnHref="/impact"
      />
    </div>
  );
}
