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
} from "lucide-react";
import { PROGRAMS } from "@/data/programs";

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
    <section className="py-20 bg-white border-y border-[#064B35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-[#064B35]/10">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#064B35] bg-[#EAF3ED] px-3.5 py-1.5 rounded-full border border-[#064B35]/15">
              Humanitarian Portfolios
            </span>
            <h2 className="font-heading font-extrabold text-[#172B26] tracking-tight">
              How We Help Communities
            </h2>
            <p className="p-body">
              Every welfare initiative addresses a distinct dimension of vulnerability—delivering essential relief,
              preserving human dignity, and nurturing long-term opportunities.
            </p>
          </div>

          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#064B35] hover:text-[#D6A943] transition-colors shrink-0 group"
          >
            <span>Explore All 6 Programs Overview</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program) => {
            const Icon = ICON_MAP[program.iconName] || Activity;
            return (
              <div
                key={program.id}
                className="group bg-[#FFF9EE] rounded-3xl overflow-hidden border border-[#064B35]/10 hover:border-[#064B35]/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image with zoom effect */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#043526]">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                    <div className="absolute top-3 left-3">
                      <div className="w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md text-[#064B35] flex items-center justify-center shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Body Text */}
                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-bold text-[#D6A943] uppercase tracking-wider block">
                      {program.subtitle}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-[#172B26] group-hover:text-[#064B35] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#718078] line-clamp-3 leading-relaxed">
                      {program.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-6 pb-6 pt-2 border-t border-[#064B35]/10 flex items-center justify-between">
                  <Link
                    href={`/programs/${program.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064B35] group-hover:text-[#D6A943] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <span className="text-[11px] text-[#718078] font-medium">
                    Verified Guidelines
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
