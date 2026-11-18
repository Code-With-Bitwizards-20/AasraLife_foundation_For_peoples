"use client";

import Link from "next/link";
import { Heart, Info, ArrowRight, ShieldCheck } from "lucide-react";
import { DONATIONS_ENABLED } from "@/lib/constants";

const ILLUSTRATIVE_EXAMPLES = [
  {
    category: "Medical Treatment & Prescriptions",
    exampleCost: "Illustrative Range: PKR 5,000 – 25,000",
    description: "Supports subsidized diagnostic investigations, laboratory screening, and essential medicines for low-income patients.",
  },
  {
    category: "Educational Supplies & Books",
    exampleCost: "Illustrative Range: PKR 3,000 – 8,000",
    description: "Helps cover standard curriculum textbooks, notebooks, stationery sets, and school uniform items for a deserving student.",
  },
  {
    category: "Monthly Family Food Packs",
    exampleCost: "Illustrative Range: PKR 8,000 – 12,000",
    description: "Provides a 30-day supply of unadulterated staple nutrition (flour, rice, pulses, cooking oil, tea) for an impoverished household.",
  },
  {
    category: "Emergency Household Essentials",
    exampleCost: "Illustrative Range: PKR 5,000 – 15,000",
    description: "Assists displaced or weather-affected families with waterproof tarpaulins, winter fleece blankets, and first-aid kits.",
  },
  {
    category: "Vocational Skills & Tailoring",
    exampleCost: "Illustrative Range: PKR 15,000 – 35,000",
    description: "Equips a widowed mother or aspiring craftswoman with an industrial sewing machine and basic starter fabric.",
  },
  {
    category: "Small Livelihood Opportunities",
    exampleCost: "Illustrative Range: PKR 30,000 – 60,000",
    description: "Provides an unemployed head of household with a durable pushcart, tools, and inventory to establish independent daily earnings.",
  },
];

export default function DonationImpactGuide() {
  return (
    <section className="py-20 bg-[#FFF9EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#064B35] bg-[#EAF3ED] px-3.5 py-1.5 rounded-full border border-[#064B35]/15">
            Transparent Giving
          </span>
          <h2 className="font-heading font-extrabold text-[#172B26] tracking-tight">
            Your Support Can Change Lives
          </h2>
          <p className="p-body text-base sm:text-lg">
            When authorized, contributions will directly fund verified humanitarian activities across Pakistan.
            Below are illustrative examples showing how charitable funds are structured across our welfare portfolios.
          </p>
        </div>

        {/* Illustrative Disclaimer Alert */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/70 text-xs text-amber-900 flex items-start gap-3 max-w-3xl mx-auto">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Important Transparency Notice:</strong> The cost ranges shown below are illustrative models
            describing prospective project allocations. They do not claim that the organization has already
            delivered these specific totals, nor do they represent financial guarantees until official donation facilities
            are formally authorized.
          </p>
        </div>

        {/* 6 Illustrative Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ILLUSTRATIVE_EXAMPLES.map((item) => (
            <div
              key={item.category}
              className="p-6 rounded-2xl bg-white border border-[#064B35]/10 shadow-sm space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-[#D6A943] uppercase tracking-wider block">
                  {item.exampleCost}
                </span>
                <h3 className="font-heading font-bold text-lg text-[#172B26]">
                  {item.category}
                </h3>
                <p className="text-xs sm:text-sm text-[#718078] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#064B35] font-semibold">
                <span>Vetted Assistance Model</span>
                <Heart className="w-3.5 h-3.5 text-[#D6A943]" />
              </div>
            </div>
          ))}
        </div>

        {/* Action Link */}
        <div className="text-center pt-4">
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#064B35] text-white font-bold text-xs sm:text-sm hover:bg-[#043526] transition-all shadow-md group"
          >
            <Heart className="w-4 h-4 text-[#D6A943] fill-[#D6A943]" />
            <span>{DONATIONS_ENABLED ? "Support A Deserving Cause" : "Read Donation Instructions & Policy"}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
