"use client";

import {
  Search,
  FileCheck,
  HandHeart,
  BarChart3,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";

const STEPS = [
  {
    step: "01",
    title: "Identify Needs",
    description:
      "Vulnerable individuals and families can submit inquiries directly through our public portal or via community referrals in local union councils.",
    icon: Search,
  },
  {
    step: "02",
    title: "Understand & Verify",
    description:
      "Assistance requests undergo strict documentary validation—hospital prescriptions, school fee cards, trade tool estimates, and local references.",
    icon: FileCheck,
  },
  {
    step: "03",
    title: "Provide Targeted Support",
    description:
      "Funds and resources are remitted directly to registered hospital accounts, schools, and tool vendors—preventing diversion and ensuring life-saving aid.",
    icon: HandHeart,
  },
  {
    step: "04",
    title: "Review Outcomes",
    description:
      "Welfare coordinators follow up to assess patient recovery, business sustainability, and student retention, documenting verified progress reports.",
    icon: BarChart3,
  },
];

export default function OurApproach() {
  return (
    <section className="py-20 sm:py-28 bg-white border-y border-[#064B35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <SectionHeader
          badge="Operational Methodology"
          title="Turning Compassion Into"
          highlight="Systematic"
          italicWord="Action."
          description="Our planned operational model is engineered around rigorous documentary verification, direct institutional remittance, and unconditional beneficiary dignity."
        />

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative">
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#FFFDF8] rounded-3xl p-7 border border-[#064B35]/12 flex flex-col justify-between hover:shadow-xl hover:border-[#D6A943]/40 transition-all duration-300 relative group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-black text-3xl text-[#064B35]/30 group-hover:text-[#D6A943] transition-colors">
                      {item.step}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-[#EAF3ED] text-[#064B35] flex items-center justify-center shadow-sm group-hover:bg-[#064B35] group-hover:text-[#D6A943] transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#172B26] group-hover:text-[#064B35] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#3D5A50] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#064B35]/8 flex items-center justify-between text-[11px] font-semibold text-[#064B35]">
                  <span>Protocol {index + 1} of 4</span>
                  <span className="text-[#D6A943]">Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on procedural readiness */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#EAF3ED] border border-[#064B35]/15 flex items-center justify-between flex-wrap gap-4 text-xs text-[#064B35] max-w-3xl mx-auto shadow-sm">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#D6A943] shrink-0" />
            <p>
              <strong className="text-[#043526]">Procedural Standard:</strong> Assistance programs use documented verification procedures
              as formal operational deployments and authorized funding allocations become established.
            </p>
          </div>
          <Link
            href="/impact"
            className="inline-flex items-center gap-1 font-bold text-[#064B35] hover:text-[#D6A943] transition-colors shrink-0"
          >
            <span>Read 6-Step Impact Timeline</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
