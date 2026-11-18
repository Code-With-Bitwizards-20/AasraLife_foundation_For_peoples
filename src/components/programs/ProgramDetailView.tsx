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
} from "lucide-react";
import { ProgramData, PROGRAMS } from "@/data/programs";
import { DONATIONS_ENABLED } from "@/lib/constants";

export default function ProgramDetailView({ program }: { program: ProgramData }) {
  const relatedPrograms = PROGRAMS.filter((p) =>
    program.relatedProgramSlugs.includes(p.slug)
  );

  return (
    <div className="bg-[#FFF9EE] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#718078]">
          <Link href="/" className="hover:text-[#064B35]">
            Home
          </Link>
          <span>/</span>
          <Link href="/programs" className="hover:text-[#064B35]">
            Programs
          </Link>
          <span>/</span>
          <span className="text-[#064B35] font-semibold">{program.title}</span>
        </div>

        {/* 1. Hero Image & Program Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#064B35] bg-[#EAF3ED] px-3.5 py-1.5 rounded-full border border-[#064B35]/15 inline-block">
                {program.subtitle}
              </span>
              <span className="text-[11px] font-semibold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                {program.statusLabel}
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-[#172B26] tracking-tight">
              {program.title}
            </h1>

            <p className="p-body text-base sm:text-lg leading-relaxed">
              {program.fullDescription}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
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
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#064B35]/15 shadow-md space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D6A943] block">
            Impact Context
          </span>
          <h2 className="font-heading font-extrabold text-2xl text-[#172B26]">
            Why This Program Matters
          </h2>
          <p className="p-body text-sm sm:text-base leading-relaxed">
            {program.whyItMatters}
          </p>
        </div>

        {/* 3. Who May Benefit & 4. Types of Assistance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Who May Benefit */}
          <div className="bg-white rounded-3xl p-8 border border-[#064B35]/15 shadow-md space-y-5">
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
          <div className="bg-white rounded-3xl p-8 border border-[#064B35]/15 shadow-md space-y-5">
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
          {/* How Support Is Provided */}
          <div className="bg-white rounded-3xl p-8 border border-[#064B35]/15 shadow-md space-y-5">
            <h3 className="font-heading font-bold text-xl text-[#172B26] border-b border-[#064B35]/10 pb-3">
              How Support May Be Provided
            </h3>
            <ul className="space-y-3">
              {program.howSupportIsProvided.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#718078]">
                  <ShieldCheck className="w-4 h-4 text-[#064B35] shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-[#172B26]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How People Can Get Involved */}
          <div className="bg-white rounded-3xl p-8 border border-[#064B35]/15 shadow-md space-y-5">
            <h3 className="font-heading font-bold text-xl text-[#172B26] border-b border-[#064B35]/10 pb-3">
              How People Can Get Involved
            </h3>
            <ul className="space-y-3">
              {program.howToGetInvolved.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#718078]">
                  <Users className="w-4 h-4 text-[#D6A943] shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-[#172B26]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 7. Relevant Program FAQs */}
        {program.faqs.length > 0 && (
          <div className="bg-white rounded-3xl p-8 border border-[#064B35]/15 shadow-md space-y-6">
            <h3 className="font-heading font-bold text-xl text-[#172B26] border-b border-[#064B35]/10 pb-3">
              Frequently Asked Questions About {program.title}
            </h3>
            <div className="space-y-4">
              {program.faqs.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#FFF9EE] border border-[#064B35]/10 space-y-1.5">
                  <h4 className="font-heading font-bold text-sm text-[#172B26]">
                    {faq.question}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#718078] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 8. Related Programs */}
        {relatedPrograms.length > 0 && (
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-xl text-[#172B26]">
              Related Welfare Initiatives
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPrograms.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/programs/${rel.slug}`}
                  className="bg-white rounded-2xl p-6 border border-[#064B35]/10 hover:border-[#064B35]/30 shadow-sm transition-all flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-[#D6A943] uppercase tracking-wider block">
                      {rel.subtitle}
                    </span>
                    <h4 className="font-heading font-bold text-base text-[#172B26] group-hover:text-[#064B35] transition-colors">
                      {rel.title}
                    </h4>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#064B35] group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 9. Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#064B35] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-heading font-extrabold text-2xl">
              Seek Guidance or Volunteer for {program.title}
            </h3>
            <p className="text-white/80 text-xs sm:text-sm max-w-lg">
              Our regional coordination team provides general application advice and coordinates volunteer activities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/apply-for-assistance"
              className="px-6 py-3.5 rounded-full bg-[#D6A943] text-[#172B26] font-bold text-xs sm:text-sm hover:bg-[#b88f34] transition-all shadow-md"
            >
              Assistance Guidance
            </Link>
            <Link
              href="/volunteer"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-all border border-white/20"
            >
              Join As Volunteer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
