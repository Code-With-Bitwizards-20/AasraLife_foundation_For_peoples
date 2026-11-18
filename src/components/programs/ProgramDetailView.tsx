"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  AlertCircle,
  ArrowRight,
  Heart,
  HelpCircle,
  Activity,
  Users,
  Compass,
  Sparkles,
} from "lucide-react";
import { ProgramData, PROGRAMS } from "@/data/programs";
import { DONATIONS_ENABLED } from "@/lib/constants";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

export default function ProgramDetailView({ program }: { program: ProgramData }) {
  const relatedPrograms = PROGRAMS.filter((p) =>
    program.relatedProgramSlugs.includes(p.slug)
  );

  return (
    <div className="bg-[#FFF9EE] space-y-16 sm:space-y-24">
      {/* 1. Page Hero with Breadcrumbs */}
      <PageHero
        badge={program.subtitle}
        badgeIcon={<Sparkles className="w-4 h-4 text-[#D6A943]" />}
        title={program.title}
        description={program.shortDescription}
        breadcrumbs={[
          { label: "Programs", href: "/programs" },
          { label: program.title },
        ]}
        actions={
          <>
            <Link
              href="/apply-for-assistance"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#064B35] text-white font-bold text-xs sm:text-sm hover:bg-[#043526] transition-all shadow-md group"
            >
              <span>Assistance Inquiry Guidance</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#D6A943]" />
            </Link>

            <Link
              href="/donate"
              className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full bg-white text-[#064B35] border border-[#064B35]/20 font-bold text-xs sm:text-sm hover:bg-[#EAF3ED] transition-all"
            >
              <Heart className="w-4 h-4 text-[#D6A943] fill-[#D6A943]" />
              <span>{DONATIONS_ENABLED ? "Sponsor Program" : "Donation Information"}</span>
            </Link>
          </>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Status Strip & Hero Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-900 border border-amber-600/25">
              <span>{program.statusLabel}</span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#172B26]">
              Comprehensive Initiative Overview
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-[#2D433B]">
              {program.fullDescription}
            </p>

            <div className="p-5 rounded-2xl bg-[#EAF3ED]/80 border border-[#064B35]/15 flex items-center gap-3 text-xs text-[#064B35]">
              <ShieldCheck className="w-5 h-5 text-[#D6A943] shrink-0" />
              <span>
                <strong>Dignity Protocol:</strong> Assistance is provided with strict confidentiality. Direct institutional remittance ensures 100% verified utilization.
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-white bg-[#043526]">
            <Image
              src={program.image}
              alt={program.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* 2. Why This Program Matters */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#064B35]/12 shadow-sm space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D6A943] block">
            Impact Context
          </span>
          <h3 className="font-heading font-extrabold text-2xl text-[#172B26]">
            Why This Program Matters
          </h3>
          <p className="text-base sm:text-lg text-[#2D433B] leading-relaxed">
            {program.whyItMatters}
          </p>
        </div>

        {/* 3. Who May Benefit & 4. Types of Assistance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Who May Benefit */}
          <div className="bg-white rounded-3xl p-8 border border-[#064B35]/12 shadow-sm space-y-5">
            <h3 className="font-heading font-bold text-xl text-[#172B26] border-b border-[#064B35]/10 pb-3">
              Who May Benefit
            </h3>
            <ul className="space-y-3">
              {program.whoMayBenefit.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#172B26]">
                  <CheckCircle2 className="w-4 h-4 text-[#064B35] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Types of Assistance */}
          <div className="bg-white rounded-3xl p-8 border border-[#064B35]/12 shadow-sm space-y-5">
            <h3 className="font-heading font-bold text-xl text-[#172B26] border-b border-[#064B35]/10 pb-3">
              Types of Assistance
            </h3>
            <ul className="space-y-3">
              {program.typesOfAssistance.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#172B26]">
                  <CheckCircle2 className="w-4 h-4 text-[#D6A943] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 5. How Support May Be Provided & 6. How People Can Get Involved */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-[#064B35]/12 shadow-sm space-y-5">
            <h3 className="font-heading font-bold text-xl text-[#172B26] border-b border-[#064B35]/10 pb-3">
              How Support Is Rigorously Provided
            </h3>
            <ul className="space-y-3">
              {program.howSupportIsProvided.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#2D433B]">
                  <ShieldCheck className="w-4 h-4 text-[#064B35] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#064B35]/12 shadow-sm space-y-5">
            <h3 className="font-heading font-bold text-xl text-[#172B26] border-b border-[#064B35]/10 pb-3">
              How You Can Get Involved
            </h3>
            <ul className="space-y-3">
              {program.howToGetInvolved.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#2D433B]">
                  <Users className="w-4 h-4 text-[#064B35] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQs if present */}
        {program.faqs && program.faqs.length > 0 && (
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#064B35]/12 shadow-sm space-y-6">
            <h3 className="font-heading font-extrabold text-2xl text-[#172B26]">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {program.faqs.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#064B35]/10 space-y-2">
                  <h4 className="font-heading font-bold text-base text-[#172B26]">
                    {faq.question}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#3D5A50] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Programs */}
        {relatedPrograms.length > 0 && (
          <div className="space-y-6 pt-4">
            <h3 className="font-heading font-extrabold text-2xl text-[#172B26]">
              Related Welfare Programs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPrograms.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/programs/${rel.slug}`}
                  className="p-6 rounded-3xl bg-white border border-[#064B35]/12 shadow-sm hover:shadow-xl hover:border-[#D6A943]/40 transition-all flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-[#D6A943] uppercase tracking-wider block">
                      {rel.subtitle}
                    </span>
                    <h4 className="font-heading font-bold text-lg text-[#172B26] group-hover:text-[#064B35] transition-colors">
                      {rel.title}
                    </h4>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#064B35] group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      <CTASection
        title={`Support ${program.title}`}
        subtitle="Humanitarian Action"
        description="Whether contributing your specialized skills as a field volunteer or preparing to support once donation lines are formally authorized, every effort counts."
        primaryBtnText="Apply for Assistance"
        primaryBtnHref="/apply-for-assistance"
        secondaryBtnText="Volunteer With Us"
        secondaryBtnHref="/volunteer"
      />
    </div>
  );
}
