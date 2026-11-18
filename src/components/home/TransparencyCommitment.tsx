"use client";

import Link from "next/link";
import { ShieldCheck, FileText, ArrowRight, Eye, Scale } from "lucide-react";

export default function TransparencyCommitment() {
  return (
    <section className="py-20 bg-[#FFF9EE] border-b border-[#064B35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#064B35] bg-[#EAF3ED] px-3.5 py-1.5 rounded-full border border-[#064B35]/15">
            Public Accountability
          </span>
          <h2 className="font-heading font-extrabold text-[#172B26] tracking-tight">
            Trust Is the Foundation of Every Contribution
          </h2>
          <p className="p-body text-base sm:text-lg">
            We believe humanitarian work should be guided by honesty, responsibility, accountability,
            and respect for every contribution.
          </p>
        </div>

        {/* 4 Feature Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/transparency"
            className="p-6 rounded-2xl bg-white border border-[#064B35]/10 shadow-sm hover:shadow-md hover:border-[#064B35]/30 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EAF3ED] text-[#064B35] flex items-center justify-center group-hover:bg-[#064B35] group-hover:text-[#D6A943] transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#172B26]">
                Financial Transparency
              </h3>
              <p className="text-xs text-[#718078] leading-relaxed">
                Review our governance framework, allocation targets, and commitment to open bookkeeping.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#064B35] group-hover:text-[#D6A943]">
              <span>Read Charter</span> <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="/annual-reports"
            className="p-6 rounded-2xl bg-white border border-[#064B35]/10 shadow-sm hover:shadow-md hover:border-[#064B35]/30 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EAF3ED] text-[#064B35] flex items-center justify-center group-hover:bg-[#064B35] group-hover:text-[#D6A943] transition-colors">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#172B26]">
                Annual Reports & Audits
              </h3>
              <p className="text-xs text-[#718078] leading-relaxed">
                Official publications and governance documents published periodically as activities unfold.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#064B35] group-hover:text-[#D6A943]">
              <span>View Documents</span> <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="/about"
            className="p-6 rounded-2xl bg-white border border-[#064B35]/10 shadow-sm hover:shadow-md hover:border-[#064B35]/30 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EAF3ED] text-[#064B35] flex items-center justify-center group-hover:bg-[#064B35] group-hover:text-[#D6A943] transition-colors">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#172B26]">
                Our Approach
              </h3>
              <p className="text-xs text-[#718078] leading-relaxed">
                Learn how we identify needs, independently verify cases, and remit direct institutional aid.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#064B35] group-hover:text-[#D6A943]">
              <span>Learn Approach</span> <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="/contact"
            className="p-6 rounded-2xl bg-white border border-[#064B35]/10 shadow-sm hover:shadow-md hover:border-[#064B35]/30 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EAF3ED] text-[#064B35] flex items-center justify-center group-hover:bg-[#064B35] group-hover:text-[#D6A943] transition-colors">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#172B26]">
                Contact Us
              </h3>
              <p className="text-xs text-[#718078] leading-relaxed">
                Connect directly with our coordination desk in Lahore with any inquiries or suggestions.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#064B35] group-hover:text-[#D6A943]">
              <span>Reach Out</span> <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
