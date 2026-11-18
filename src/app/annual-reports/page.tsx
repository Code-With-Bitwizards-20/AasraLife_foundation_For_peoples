import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ShieldCheck, Info, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Annual Reports & Documents — AasraLife Foundation",
  description:
    "Official annual reports, governance documents, and financial statements of AasraLife Foundation in Pakistan.",
};

export default function AnnualReportsPage() {
  return (
    <div className="bg-[#FFF9EE] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3ED] border border-[#064B35]/15 text-[#064B35] text-xs font-semibold">
            <FileText className="w-4 h-4 text-[#D6A943]" />
            <span>Public Publications</span>
          </div>

          <h1 className="font-heading font-extrabold text-[#172B26] tracking-tight">
            Annual Reports & <span className="text-[#064B35]">Publications</span>
          </h1>

          <p className="p-body text-base sm:text-lg">
            A central library for foundation governance documents, annual impact reviews,
            and future verified financial statements.
          </p>
        </div>

        {/* ============================================================== */}
        {/* Empty-State Design per Section 15                              */}
        {/* ============================================================== */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#064B35]/15 shadow-xl text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-[#EAF3ED] text-[#064B35] flex items-center justify-center mx-auto">
            <FileText className="w-8 h-8 text-[#064B35]" />
          </div>

          <div className="space-y-3 max-w-lg mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D6A943] block">
              Library Status
            </span>
            <h2 className="font-heading font-extrabold text-2xl text-[#172B26]">
              Official annual reports will be published here when available.
            </h2>
            <p className="p-body text-sm leading-relaxed">
              In adherence to our strict governance policy, AasraLife Foundation does not publish fictional
              annual reports or simulate activities that have not yet transpired.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FFF9EE] border border-[#064B35]/10 text-xs text-[#718078] max-w-md mx-auto text-left space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#064B35]">
              <Info className="w-4 h-4 text-[#D6A943]" />
              <span>Publication Process:</span>
            </div>
            <p className="leading-relaxed">
              As operational welfare programs disburse funds and annual financial reviews are compiled,
              official verified PDF reports will be uploaded directly to this repository for open download.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/transparency"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#064B35] text-white font-bold text-xs sm:text-sm hover:bg-[#043526] transition-all shadow-md group"
            >
              <span>Review Financial Transparency Policy</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#D6A943]" />
            </Link>
          </div>
        </div>

        {/* Directory Notice */}
        <div className="p-4 rounded-2xl bg-[#EAF3ED] border border-[#064B35]/15 flex items-center gap-3 text-xs text-[#064B35]">
          <ShieldCheck className="w-4 h-4 text-[#D6A943] shrink-0" />
          <p>
            <strong>Document Archiving:</strong> All published reports will be permanently preserved in PDF format
            within our local <code className="font-mono font-bold text-[#064B35]">/public/reports/</code> directory for permanent public access.
          </p>
        </div>
      </div>
    </div>
  );
}
