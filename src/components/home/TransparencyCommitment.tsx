"use client";

import Link from "next/link";
import { ShieldCheck, FileText, ArrowRight, Eye, Scale } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

export default function TransparencyCommitment() {
  return (
    <section className="py-20 sm:py-28 bg-[#FFF9EE] border-b border-[#064B35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Public Accountability"
          badgeIcon={<ShieldCheck className="w-3.5 h-3.5" />}
          title="Trust Is the Foundation of"
          highlight="Every"
          italicWord="Contribution."
          description="We believe humanitarian leadership must be guided by uncompromised honesty, verifiable financial records, and radical respect for every supporter."
        />

        {/* 4 Feature Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          <Link
            href="/transparency"
            className="p-7 rounded-3xl bg-white border border-[#064B35]/12 shadow-sm hover:shadow-xl hover:border-[#D6A943]/50 transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF3ED] text-[#064B35] flex items-center justify-center group-hover:bg-[#064B35] group-hover:text-[#D6A943] transition-all shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#172B26] group-hover:text-[#064B35] transition-colors">
                Financial Transparency
              </h3>
              <p className="text-xs sm:text-sm text-[#3D5A50] leading-relaxed">
                Review our governance framework, allocation targets, and commitment to open bookkeeping.
              </p>
            </div>
            <div className="pt-4 border-t border-[#064B35]/8 mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#064B35] group-hover:text-[#D6A943] transition-colors">
              <span>Read Charter</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/annual-reports"
            className="p-7 rounded-3xl bg-white border border-[#064B35]/12 shadow-sm hover:shadow-xl hover:border-[#D6A943]/50 transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF3ED] text-[#064B35] flex items-center justify-center group-hover:bg-[#064B35] group-hover:text-[#D6A943] transition-all shadow-sm">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#172B26] group-hover:text-[#064B35] transition-colors">
                Annual Reports & Audits
              </h3>
              <p className="text-xs sm:text-sm text-[#3D5A50] leading-relaxed">
                Official publications and governance documents published periodically as activities unfold.
              </p>
            </div>
            <div className="pt-4 border-t border-[#064B35]/8 mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#064B35] group-hover:text-[#D6A943] transition-colors">
              <span>View Documents</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/impact"
            className="p-7 rounded-3xl bg-white border border-[#064B35]/12 shadow-sm hover:shadow-xl hover:border-[#D6A943]/50 transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF3ED] text-[#064B35] flex items-center justify-center group-hover:bg-[#064B35] group-hover:text-[#D6A943] transition-all shadow-sm">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#172B26] group-hover:text-[#064B35] transition-colors">
                Our Impact Standards
              </h3>
              <p className="text-xs sm:text-sm text-[#3D5A50] leading-relaxed">
                Learn how we identify community needs, independently verify cases, and remit direct institutional aid.
              </p>
            </div>
            <div className="pt-4 border-t border-[#064B35]/8 mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#064B35] group-hover:text-[#D6A943] transition-colors">
              <span>Explore Impact</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/contact"
            className="p-7 rounded-3xl bg-white border border-[#064B35]/12 shadow-sm hover:shadow-xl hover:border-[#D6A943]/50 transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF3ED] text-[#064B35] flex items-center justify-center group-hover:bg-[#064B35] group-hover:text-[#D6A943] transition-all shadow-sm">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#172B26] group-hover:text-[#064B35] transition-colors">
                Contact Coordination
              </h3>
              <p className="text-xs sm:text-sm text-[#3D5A50] leading-relaxed">
                Connect directly with our coordination desk in Lahore with any inquiries or suggestions.
              </p>
            </div>
            <div className="pt-4 border-t border-[#064B35]/8 mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#064B35] group-hover:text-[#D6A943] transition-colors">
              <span>Reach Out</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
