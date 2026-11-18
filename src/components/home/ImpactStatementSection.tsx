"use client";

import Link from "next/link";
import {
  Heart,
  TrendingUp,
  ShieldCheck,
  GraduationCap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { IMPACT_STATEMENTS, OPERATIONAL_STATUS } from "@/data/impact";
import SectionHeader from "@/components/shared/SectionHeader";

const ICON_MAP: Record<string, any> = {
  Heart,
  TrendingUp,
  ShieldCheck,
  GraduationCap,
};

export default function ImpactStatementSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#043526] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#064B35] blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <SectionHeader
            align="left"
            theme="dark"
            badge="Honest & Accountable Impact"
            badgeIcon={<ShieldCheck className="w-3.5 h-3.5" />}
            title="Impact Is More Than Numbers."
            highlight="It Is Human"
            italicWord="Dignity."
            description="In adherence to our strict transparency charter, AasraLife Foundation rejects fabricated vanity metrics. We measure our calling through moral integrity, the protection of human self-respect, and verified qualitative outcomes."
          />

          <Link
            href="/impact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#D6A943] text-[#172B26] hover:bg-[#E5B854] transition-all text-xs sm:text-sm font-bold shrink-0 shadow-lg group"
          >
            <span>Explore Standalone Impact Page</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Qualitative Impact Statement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_STATEMENTS.map((item) => {
            const Icon = ICON_MAP[item.iconName] || Heart;
            return (
              <div
                key={item.title}
                className="p-7 rounded-3xl bg-[#064B35]/80 border border-white/15 backdrop-blur-md space-y-4 flex flex-col justify-between hover:border-[#D6A943]/60 hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#D6A943] flex items-center justify-center border border-white/10 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#D6A943] block">
                    {item.title}
                  </span>

                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white leading-snug">
                    {item.statement}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#E2ECE6] leading-relaxed">
                    {item.subtext}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-[#D6A943] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D6A943]" />
                  <span>Foundational Ethos</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Operational Status Disclosure Bar */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white/5 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#E2ECE6]">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="font-bold text-[#D6A943] uppercase tracking-wider block text-xs flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Organizational Status: {OPERATIONAL_STATUS.phase}
            </span>
            <p className="text-[#FFF9EE]/85 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Target region: {OPERATIONAL_STATUS.operatingScope}. Verified cumulative statistics and official reports will be published as authorized programs disburse verified assistance.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/impact"
              className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-[#064B35] text-white border border-[#D6A943]/50 font-bold hover:bg-[#085e43] transition-colors shadow-md text-xs sm:text-sm"
            >
              <span>Our Impact Pillars</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D6A943]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
