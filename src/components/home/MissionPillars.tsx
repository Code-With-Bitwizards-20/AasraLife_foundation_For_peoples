"use client";

import Link from "next/link";
import { Heart, Sparkles, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react";

const PILLARS = [
  {
    title: "Compassion",
    tagline: "Heartfelt Care & Empathy",
    description:
      "Approaching every family with kindness, attentive listening, and unconditional respect for their circumstances.",
    icon: Heart,
  },
  {
    title: "Empowerment",
    tagline: "Dignity Over Dependency",
    description:
      "Equipping hardworking individuals with skills, vocational tools, and mentorship to achieve independent livelihood.",
    icon: Sparkles,
  },
  {
    title: "Opportunity",
    tagline: "Unlocking Human Potential",
    description:
      "Creating bridges to quality healthcare, schooling, and micro-business that open doors to a self-determined future.",
    icon: TrendingUp,
  },
  {
    title: "Sustainable Development",
    tagline: "Enduring Community Impact",
    description:
      "Designing long-term welfare interventions that address root causes of distress rather than offering short-term palliatives.",
    icon: ShieldCheck,
  },
];

export default function MissionPillars() {
  return (
    <section className="py-20 bg-[#FFF9EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#064B35] bg-[#EAF3ED] px-3.5 py-1.5 rounded-full border border-[#064B35]/15">
            Our Purpose & Foundation
          </span>
          <h2 className="font-heading font-extrabold text-[#172B26] tracking-tight">
            Our Mission
          </h2>
          <p className="p-body max-w-2xl mx-auto text-base sm:text-lg">
            To support individuals and families facing hardship by connecting them with essential resources,
            opportunities, and compassionate assistance.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-2xl p-7 border border-[#064B35]/10 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group hover:border-[#064B35]/30"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF3ED] text-[#064B35] flex items-center justify-center group-hover:bg-[#064B35] group-hover:text-[#D6A943] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D6A943] block">
                      {pillar.tagline}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-[#172B26]">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#718078] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-4">
                  <Link
                    href="/mission-vision"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064B35] group-hover:text-[#D6A943] transition-colors"
                  >
                    <span>Read Our Charter</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
