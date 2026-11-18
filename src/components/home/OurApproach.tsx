"use client";

import { Search, FileCheck, HandHeart, BarChart3, ShieldCheck } from "lucide-react";

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
    title: "Understand and Verify",
    description:
      "Future assistance cases will undergo documentary validation (hospital prescriptions, school fee cards, trade tool estimates) and local reference checks.",
    icon: FileCheck,
  },
  {
    step: "03",
    title: "Provide Appropriate Support",
    description:
      "Funds and resources will be remitted directly to registered hospital accounts, schools, and tool vendors—preventing diversion and ensuring life-saving aid.",
    icon: HandHeart,
  },
  {
    step: "04",
    title: "Review and Communicate Outcomes",
    description:
      "Welfare coordinators will follow up to assess patient recovery, business sustainability, and student retention, publishing generalized progress reports.",
    icon: BarChart3,
  },
];

export default function OurApproach() {
  return (
    <section className="py-20 bg-white border-y border-[#064B35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#064B35] bg-[#EAF3ED] px-3.5 py-1.5 rounded-full border border-[#064B35]/15">
            Operational Methodology
          </span>
          <h2 className="font-heading font-extrabold text-[#172B26] tracking-tight">
            Turning Compassion Into Action
          </h2>
          <p className="p-body text-base sm:text-lg">
            Our planned operational model is designed around systematic verification, institutional payments,
            and respectful beneficiary protection.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#FFF9EE] rounded-3xl p-7 border border-[#064B35]/15 flex flex-col justify-between hover:shadow-md transition-shadow relative"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-black text-3xl text-[#D6A943]">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white text-[#064B35] flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5 text-[#064B35]" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#172B26]">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#718078] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#064B35]/10 flex items-center justify-between text-[11px] font-semibold text-[#064B35]">
                  <span>Step {index + 1} of 4</span>
                  <span className="text-[#D6A943]">Verification Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on procedural readiness */}
        <div className="p-4 rounded-2xl bg-[#EAF3ED] border border-[#064B35]/15 flex items-center gap-3 text-xs text-[#064B35] max-w-2xl mx-auto">
          <ShieldCheck className="w-4 h-4 text-[#D6A943] shrink-0" />
          <p>
            <strong>Procedural Standard:</strong> Assistance programs will use documented verification procedures
            as formal operational deployments and authorized funding allocations become established.
          </p>
        </div>
      </div>
    </section>
  );
}
