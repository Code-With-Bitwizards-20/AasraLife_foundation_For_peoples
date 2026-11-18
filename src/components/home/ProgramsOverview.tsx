"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  GraduationCap,
  ShoppingBag,
  Sparkles,
  LifeBuoy,
  Briefcase,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { PROGRAMS } from "@/data/programs";
import SectionHeader from "@/components/shared/SectionHeader";

const ICON_MAP: Record<string, any> = {
  Activity,
  GraduationCap,
  ShoppingBag,
  Sparkles,
  LifeBuoy,
  Briefcase,
};

export default function ProgramsOverview() {
  return (
    <section className="py-20 sm:py-28 bg-white border-y border-[#064B35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#064B35]/12">
          <SectionHeader
            align="left"
            badge="Humanitarian Portfolios"
            badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
            title="Six Pillars of Dignified"
            highlight="Community"
            italicWord="Care."
            description="Every welfare portfolio addresses a distinct dimension of vulnerability—delivering essential relief, preserving human self-respect, and creating long-term pathways to independence."
          />

          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#EAF3ED] text-[#064B35] hover:bg-[#064B35] hover:text-white transition-all text-xs sm:text-sm font-bold shrink-0 shadow-sm group"
          >
            <span>All Programs Index</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#D6A943]" />
          </Link>
        </div>

        {/* 6 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program) => {
            const Icon = ICON_MAP[program.iconName] || Activity;
            return (
              <div
                key={program.id}
                className="group bg-[#FFFDF8] rounded-3xl overflow-hidden border border-[#064B35]/12 hover:border-[#D6A943]/50 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image with zoom effect */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#043526]">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#043526]/85 via-transparent to-black/20" />

                    <div className="absolute top-3.5 left-3.5">
                      <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md text-[#064B35] flex items-center justify-center shadow-md group-hover:bg-[#064B35] group-hover:text-[#D6A943] transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="absolute bottom-3 right-3">
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-white bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                        Planned Initiative
                      </span>
                    </div>
                  </div>

                  {/* Body Text */}
                  <div className="p-6 sm:p-7 space-y-3">
                    <span className="text-xs font-bold text-[#D6A943] uppercase tracking-wider block">
                      {program.subtitle}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-[#172B26] group-hover:text-[#064B35] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3D5A50] line-clamp-3 leading-relaxed">
                      {program.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-[#064B35]/8 flex items-center justify-between">
                  <Link
                    href={`/programs/${program.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064B35] group-hover:text-[#D6A943] transition-colors"
                  >
                    <span>Read Program Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <span className="inline-flex items-center gap-1 text-[11px] text-[#4A5B53] font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#064B35]" />
                    Verified Scope
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
