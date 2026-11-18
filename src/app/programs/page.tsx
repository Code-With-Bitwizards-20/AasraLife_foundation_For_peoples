import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { PROGRAMS } from "@/data/programs";
import { DONATIONS_ENABLED } from "@/lib/constants";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Welfare Programs — Comprehensive Humanitarian Portfolios",
  description:
    "Explore AasraLife Foundation's 6 welfare programs: Medical Care, Education, Food Support, Women's Empowerment, Emergency Relief, and Livelihood Grants in Pakistan.",
};

export default function ProgramsIndexPage() {
  return (
    <div className="bg-[#FFF9EE] space-y-16 sm:space-y-24">
      {/* 1. Page Hero */}
      <PageHero
        badge="Humanitarian Portfolios"
        badgeIcon={<ShieldCheck className="w-4 h-4 text-[#D6A943]" />}
        title="Our Welfare"
        highlight="Humanitarian"
        italicWord="Programs."
        description="AasraLife Foundation works across six targeted humanitarian areas. Every initiative is designed with strict dignity protections, verified needs assessment, and direct institutional payments."
        breadcrumbs={[{ label: "Programs" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Programs List */}
        <div className="space-y-12">
          {PROGRAMS.map((prog, idx) => (
            <div
              key={prog.id}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-[#064B35]/12 shadow-sm hover:shadow-2xl hover:border-[#D6A943]/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Image */}
              <div
                className={`lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-[#064B35]/10 bg-[#043526] ${
                  idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#064B35] text-xs font-bold uppercase tracking-wider shadow-sm">
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
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-600/25 inline-block">
                    {prog.statusLabel}
                  </span>
                  <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#172B26]">
                    {prog.title}
                  </h2>
                </div>

                <p className="text-base sm:text-lg leading-relaxed text-[#2D433B]">
                  {prog.fullDescription}
                </p>

                {/* Key Benefits Preview */}
                <div className="space-y-2.5 pt-3 border-t border-[#064B35]/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#064B35] block">
                    Core Assistance Types:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {prog.typesOfAssistance.slice(0, 3).map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs sm:text-sm text-[#172B26]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#064B35] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/programs/${prog.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#064B35] text-white font-bold text-xs sm:text-sm hover:bg-[#043526] transition-all shadow-md group"
                  >
                    <span>Read Program Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#D6A943]" />
                  </Link>

                  <Link
                    href="/apply-for-assistance"
                    className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-white text-[#064B35] border border-[#064B35]/20 font-bold text-xs sm:text-sm hover:bg-[#EAF3ED] transition-all"
                  >
                    <span>Assistance Inquiries</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <CTASection
        title="Need Humanitarian Assistance or Wish to Support?"
        subtitle="Dignity First"
        description="Learn about our transparent application requirements or discover how to participate as a community volunteer."
        primaryBtnText="Apply for Assistance"
        primaryBtnHref="/apply-for-assistance"
        secondaryBtnText="Volunteer With Us"
        secondaryBtnHref="/volunteer"
      />
    </div>
  );
}
