"use client";

import Link from "next/link";
import {
  Heart,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const PILLARS = [
  {
    title: "Compassion",
    tagline: "Heartfelt Care & Empathy",
    description:
      "Approaching every family with active kindness, attentive listening, and unconditional respect for their circumstances.",
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
    <section className="py-20 sm:py-28 bg-[#FFF9EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <SectionHeader
          badge="Our Purpose & Foundation"
          title="Guided by Moral"
          highlight="Purpose &"
          italicWord="Dignity."
          description="To support individuals and families facing acute hardship by connecting them with essential resources, healthcare access, and compassionate opportunities."
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-[#064B35]/12 shadow-sm hover:shadow-2xl hover:border-[#D6A943]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF3ED] text-[#064B35] flex items-center justify-center group-hover:bg-[#064B35] group-hover:text-[#D6A943] transition-all shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D6A943] block">
                      {pillar.tagline}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-[#172B26] group-hover:text-[#064B35] transition-colors">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#3D5A50] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#064B35]/8 mt-5">
                  <Link
                    href="/mission-vision"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064B35] group-hover:text-[#D6A943] transition-colors"
                  >
                    <span>Read Mission Charter</span>
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
