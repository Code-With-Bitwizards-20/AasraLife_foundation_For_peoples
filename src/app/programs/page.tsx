import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Heart } from "lucide-react";
import { PROGRAMS } from "@/data/programs";
import { DONATIONS_ENABLED } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Welfare Programs — Comprehensive Humanitarian Portfolios",
  description:
    "Explore AasraLife Foundation's 6 welfare programs: Medical Care, Education, Food Support, Women's Empowerment, Emergency Relief, and Livelihood Grants in Pakistan.",
};

export default function ProgramsIndexPage() {
  return (
    <div className="bg-[#FFF9EE] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3ED] border border-[#064B35]/15 text-[#064B35] text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#D6A943]" />
            <span>Humanitarian Portfolios</span>
          </div>
          <h1 className="font-heading font-extrabold text-[#172B26] tracking-tight">
            Our Welfare <span className="text-[#064B35]">Programs</span>
          </h1>
          <p className="p-body text-base sm:text-lg">
            AasraLife Foundation works across six targeted humanitarian areas. Every initiative is designed
            with strict dignity protections, verified needs assessment, and direct institutional payments.
          </p>
        </div>

        {/* Programs List */}
        <div className="space-y-12">
          {PROGRAMS.map((prog, idx) => (
            <div
              key={prog.id}
              className={`bg-white rounded-3xl p-6 sm:p-10 border border-[#064B35]/15 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-[#064B35]/10 bg-[#043526] ${
                  idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#064B35] text-xs font-bold uppercase tracking-wider">
                    {prog.subtitle}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div
                className={`lg:col-span-7 space-y-5 ${
                  idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="space-y-1.5">
                  <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full inline-block">
                    {prog.statusLabel}
                  </span>
                  <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#172B26]">
                    {prog.title}
                  </h2>
                </div>

                <p className="p-body text-sm leading-relaxed">
                  {prog.fullDescription}
                </p>

                {/* Key Benefits Preview */}
                <div className="space-y-2 pt-2 border-t border-[#064B35]/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#172B26] block">
                    Core Program Focus:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {prog.typesOfAssistance.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#172B26]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#064B35] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/programs/${prog.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#064B35] text-white font-bold text-xs sm:text-sm hover:bg-[#043526] transition-all shadow-md group"
                  >
                    <span>Full Details & Eligibility</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#D6A943]" />
                  </Link>

                  <Link
                    href="/apply-for-assistance"
                    className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-[#EAF3ED] text-[#064B35] font-bold text-xs sm:text-sm hover:bg-[#064B35] hover:text-white transition-all"
                  >
                    Assistance Guidance
                  </Link>

                  <Link
                    href="/donate"
                    className="inline-flex items-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-semibold text-[#D6A943] hover:text-[#064B35] transition-colors ml-auto"
                  >
                    <Heart className="w-4 h-4 fill-[#D6A943]" />
                    {DONATIONS_ENABLED ? "Sponsor" : "Donation Policy"}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
