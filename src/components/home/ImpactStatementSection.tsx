"use client";

import Link from "next/link";
import { Heart, TrendingUp, ShieldCheck, GraduationCap, ArrowRight } from "lucide-react";
import { IMPACT_STATEMENTS, OPERATIONAL_STATUS } from "@/data/impact";

const ICON_MAP: Record<string, any> = {
  Heart,
  TrendingUp,
  ShieldCheck,
  GraduationCap,
};

export default function ImpactStatementSection() {
  return (
    <section id="impact" className="py-20 bg-[#043526] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#064B35] blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#064B35] border border-[#D6A943]/30 text-[#D6A943] text-xs font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Honest & Accountable Impact Charter</span>
          </div>

          <h2 className="font-heading font-extrabold text-white tracking-tight">
            Every Act of Kindness Matters
          </h2>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed">
            In adherence to our strict transparency charter, AasraLife Foundation rejects fabricated vanity metrics.
            We measure our calling through moral integrity, the protection of human dignity, and verified qualitative outcomes.
          </p>
        </div>

        {/* 4 Qualitative Impact Statement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_STATEMENTS.map((item) => {
            const Icon = ICON_MAP[item.iconName] || Heart;
            return (
              <div
                key={item.title}
                className="p-6 rounded-3xl bg-[#064B35]/70 border border-white/10 backdrop-blur-sm space-y-3 flex flex-col justify-between hover:border-[#D6A943]/50 transition-colors"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#D6A943] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D6A943] block">
                    {item.title}
                  </span>

                  <h3 className="font-heading font-bold text-lg text-white leading-snug">
                    {item.statement}
                  </h3>

                  <p className="text-xs text-white/70 leading-relaxed">
                    {item.subtext}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-[10.5px] text-[#D6A943] font-semibold">
                  Foundational Ethos
                </div>
              </div>
            );
          })}
        </div>

        {/* Operational Status Disclosure Bar */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/80">
          <div className="space-y-1 text-center md:text-left">
            <span className="font-bold text-[#D6A943] uppercase tracking-wider block">
              Current Organizational Stage: {OPERATIONAL_STATUS.phase}
            </span>
            <p className="text-white/70 text-xs">
              Focus region: {OPERATIONAL_STATUS.operatingScope}. Verified cumulative statistics and audited statements will be published on our transparency page as formal programs disburse funds.
            </p>
          </div>

          <Link
            href="/transparency"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#064B35] text-white border border-[#D6A943]/40 font-bold hover:bg-[#085e43] transition-colors shrink-0"
          >
            <span>View Transparency Charter</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D6A943]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
