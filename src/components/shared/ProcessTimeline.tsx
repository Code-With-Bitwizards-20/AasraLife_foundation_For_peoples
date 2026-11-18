import React from "react";
import {
  Search,
  CheckCircle2,
  PackageSearch,
  HandHeart,
  LineChart,
  FileCheck2,
} from "lucide-react";

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  iconName?: string;
}

const DEFAULT_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Understand Community Needs",
    description:
      "Direct engagement with local families, hospitals, and community leaders to identify verified vulnerabilities without bureaucratic delay.",
  },
  {
    step: "02",
    title: "Verify Assistance Requirements",
    description:
      "Strict 100% pre-disbursement verification of medical prescriptions, hospital estimates, student records, and household conditions.",
  },
  {
    step: "03",
    title: "Identify Appropriate Support",
    description:
      "Matching verified needs with targeted solutions—direct hospital remittance, school fee coverage, or productive livelihood tools.",
  },
  {
    step: "04",
    title: "Provide Responsible Assistance",
    description:
      "Direct disbursement to service providers (hospitals, vendors, schools) preserving the dignity, privacy, and self-respect of every beneficiary.",
  },
  {
    step: "05",
    title: "Review Outcomes",
    description:
      "Structured post-assistance follow-up to evaluate health recovery, educational retention, or micro-enterprise sustainability.",
  },
  {
    step: "06",
    title: "Publish Verified Updates",
    description:
      "Documenting allocations in open financial registers for public accountability and institutional transparency.",
  },
];

const ICONS = [Search, CheckCircle2, PackageSearch, HandHeart, LineChart, FileCheck2];

export default function ProcessTimeline({
  steps = DEFAULT_STEPS,
}: {
  steps?: ProcessStep[];
}) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((item, idx) => {
          const IconComp = ICONS[idx % ICONS.length];
          return (
            <div
              key={item.step}
              className="relative rounded-3xl p-6 sm:p-7 bg-white border border-[#064B35]/12 shadow-sm hover:shadow-xl hover:border-[#D6A943]/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#064B35]/30 group-hover:text-[#D6A943] transition-colors">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#EAF3ED] text-[#064B35] flex items-center justify-center group-hover:bg-[#064B35] group-hover:text-[#D6A943] transition-colors shadow-sm">
                    <IconComp className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-heading font-bold text-lg text-[#172B26] group-hover:text-[#064B35] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#3D5A50]">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#064B35]/8 flex items-center gap-1.5 text-[11px] font-semibold text-[#064B35]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6A943]" />
                <span>Operational Standard</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4 rounded-2xl bg-[#EAF3ED]/60 border border-[#064B35]/15 text-center text-xs text-[#2D433B]">
        <strong className="text-[#064B35]">Transparency Note:</strong> These
        phases represent AasraLife Foundation&apos;s verified operational standards
        and compliance framework. Specific project outcomes are published as
        authorized programs are executed and documented.
      </div>
    </div>
  );
}
