"use client";

import Link from "next/link";
import { Heart, Info, ArrowRight, ShieldCheck } from "lucide-react";
import { DONATIONS_ENABLED } from "@/lib/constants";
import SectionHeader from "@/components/shared/SectionHeader";

const ILLUSTRATIVE_EXAMPLES = [
  {
    category: "Medical Treatment & Prescriptions",
    exampleCost: "Illustrative Range: PKR 5,000 – 25,000",
    description:
      "Supports subsidized diagnostic investigations, laboratory screening, and prescribed medicines for low-income patients.",
  },
  {
    category: "Educational Supplies & Books",
    exampleCost: "Illustrative Range: PKR 3,000 – 8,000",
    description:
      "Helps cover standard curriculum textbooks, notebooks, stationery sets, and school uniforms for a deserving student.",
  },
  {
    category: "Monthly Family Food Packs",
    exampleCost: "Illustrative Range: PKR 8,000 – 12,000",
    description:
      "Provides a 30-day supply of unadulterated staple nutrition (flour, rice, lentils, cooking oil) for an impoverished household.",
  },
  {
    category: "Emergency Household Essentials",
    exampleCost: "Illustrative Range: PKR 5,000 – 15,000",
    description:
      "Assists displaced or weather-affected families with waterproof tarpaulins, winter fleece blankets, and first-aid provisions.",
  },
  {
    category: "Vocational Skills & Tailoring",
    exampleCost: "Illustrative Range: PKR 15,000 – 35,000",
    description:
      "Equips a widowed mother or aspiring craftswoman with an industrial sewing machine and basic starter fabric.",
  },
  {
    category: "Small Livelihood Opportunities",
    exampleCost: "Illustrative Range: PKR 30,000 – 60,000",
    description:
      "Provides an unemployed head of household with a durable pushcart, tools, and inventory to establish independent daily earnings.",
  },
];

export default function DonationImpactGuide() {
  return (
    <section className="py-20 sm:py-28 bg-[#FFF9EE] border-b border-[#064B35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <SectionHeader
          badge="Transparent Giving Framework"
          title="How Targeted Support Can"
          highlight="Dignify"
          italicWord="Lives."
          description="When authorized, contributions will directly fund verified humanitarian activities across Pakistan. Below are illustrative allocation models describing our intended welfare distribution."
        />

        {/* Illustrative Disclaimer Alert */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-600/25 text-xs text-amber-950 flex items-start gap-3 max-w-3xl mx-auto shadow-sm">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-amber-900">Important Transparency Notice:</strong> The cost ranges shown below are illustrative models
            describing prospective project allocations. They do not claim that the organization has already
            delivered these specific totals, nor do they represent financial guarantees until official donation facilities
            are formally authorized.
          </p>
        </div>

        {/* 6 Illustrative Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {ILLUSTRATIVE_EXAMPLES.map((item) => (
            <div
              key={item.category}
              className="p-7 rounded-3xl bg-white border border-[#064B35]/12 shadow-sm hover:shadow-xl hover:border-[#D6A943]/40 transition-all duration-300 space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-2.5">
                <span className="text-xs font-bold text-[#D6A943] uppercase tracking-wider block">
                  {item.exampleCost}
                </span>
                <h3 className="font-heading font-bold text-lg text-[#172B26] group-hover:text-[#064B35] transition-colors">
                  {item.category}
                </h3>
                <p className="text-xs sm:text-sm text-[#3D5A50] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#064B35]/8 flex items-center justify-between text-xs text-[#064B35] font-semibold">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#064B35]" />
                  Direct Provider Remittance
                </span>
                <Heart className="w-4 h-4 text-[#D6A943] fill-[#D6A943]/20" />
              </div>
            </div>
          ))}
        </div>

        {/* Action Link */}
        <div className="text-center pt-4">
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#064B35] text-white font-bold text-xs sm:text-sm hover:bg-[#043526] transition-all shadow-lg shadow-[#064B35]/15 hover:shadow-xl group"
          >
            <Heart className="w-4 h-4 text-[#D6A943] fill-[#D6A943]" />
            <span>
              {DONATIONS_ENABLED
                ? "Support A Deserving Cause"
                : "Read Donation Instructions & Policy"}
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
