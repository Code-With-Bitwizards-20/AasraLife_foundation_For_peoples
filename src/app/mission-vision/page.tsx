import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Eye,
  Target,
  ShieldCheck,
  ArrowRight,
  Heart,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Mission & Vision — Institutional Purpose & Strategic Charter",
  description:
    "Explore the humanitarian mission, vision, and core community objectives of AasraLife Foundation in Pakistan.",
};

const CORE_OBJECTIVES = [
  {
    title: "Reduce Hardship",
    desc: "Alleviating acute destitution through timely essential relief and dignified support.",
  },
  {
    title: "Improve Access to Education",
    desc: "Sponsoring fees, books, and uniforms to prevent school dropouts among disadvantaged youth.",
  },
  {
    title: "Support Healthcare Needs",
    desc: "Funding life-saving surgeries, diagnostics, and chronic medicines directly via hospital accounts.",
  },
  {
    title: "Address Food Insecurity",
    desc: "Delivering standardized 30-day staple nutrition packages to destitute families with zero public shaming.",
  },
  {
    title: "Empower Women",
    desc: "Providing vocational training, sewing workstations, and home enterprise skills for economic autonomy.",
  },
  {
    title: "Encourage Sustainable Livelihoods",
    desc: "Gifting pushcarts, trade toolkits, and inventory grants that create independent daily earnings.",
  },
  {
    title: "Respond to Emergencies",
    desc: "Deploying survival kits, clean water, and temporary shelter during flash floods and severe winter events.",
  },
  {
    title: "Strengthen Communities",
    desc: "Cultivating local volunteer chapters that champion human rights, mutual aid, and civic responsibility.",
  },
];

export default function MissionVisionPage() {
  return (
    <div className="bg-[#FFF9EE] space-y-16 sm:space-y-24">
      {/* 1. Page Hero */}
      <PageHero
        badge="Institutional Charter"
        badgeIcon={<Compass className="w-4 h-4 text-[#D6A943]" />}
        title="Our Mission &"
        highlight="Strategic"
        italicWord="Vision."
        description="Humanity is at the heart of everything we do. Explore the foundational mission, vision, and eight core objectives guiding AasraLife Foundation across Pakistan and beyond."
        breadcrumbs={[{ label: "Mission & Vision" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Hero Panorama */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white aspect-[16/9] sm:aspect-[21/9] bg-[#043526]">
          <Image
            src="/images/mission/mission-hero.jpg"
            alt="Dawn over Pakistan landscape representing hope and vision"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white max-w-xl p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15">
            <span className="text-xs uppercase font-bold text-[#D6A943] tracking-widest block mb-1">
              Dawn of Hope
            </span>
            <p className="text-xs sm:text-sm font-medium text-white/95">
              Connecting humanity to create lasting opportunities across Pakistan.
            </p>
          </div>
        </div>

        {/* Mission & Vision Twin Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {/* Mission Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#064B35]/12 shadow-sm hover:shadow-xl hover:border-[#D6A943]/40 transition-all duration-300 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF3ED] text-[#064B35] flex items-center justify-center shadow-sm">
                <Target className="w-6 h-6 text-[#064B35]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D6A943] block">
                The Foundation Mission
              </span>
              <h2 className="font-heading font-extrabold text-2xl text-[#172B26]">
                Our Mission
              </h2>
              <div className="p-4 rounded-2xl bg-[#FFFDF8] border-l-4 border-[#064B35] border-y border-r border-[#064B35]/10">
                <p className="text-base sm:text-lg font-bold text-[#064B35] leading-relaxed">
                  &ldquo;To connect vulnerable individuals and communities with essential support, meaningful opportunities, and resources that improve their quality of life.&rdquo;
                </p>
              </div>
              <p className="text-sm leading-relaxed text-[#3D5A50]">
                We believe that relief must be administered without compromising dignity, through direct institutional
                payments, thorough need verification, and open accountability.
              </p>
            </div>
            <div className="pt-4 border-t border-[#064B35]/8 text-xs font-bold text-[#064B35] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D6A943]" />
              <span>Dignified Humanitarian Standard</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#064B35]/12 shadow-sm hover:shadow-xl hover:border-[#D6A943]/40 transition-all duration-300 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF3ED] text-[#064B35] flex items-center justify-center shadow-sm">
                <Eye className="w-6 h-6 text-[#064B35]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D6A943] block">
                The Long-Term Horizon
              </span>
              <h2 className="font-heading font-extrabold text-2xl text-[#172B26]">
                Our Vision
              </h2>
              <div className="p-4 rounded-2xl bg-[#FFFDF8] border-l-4 border-[#D6A943] border-y border-r border-[#D6A943]/20">
                <p className="text-base sm:text-lg font-bold text-[#064B35] leading-relaxed">
                  &ldquo;A world where every human being has access to opportunities, dignity, and a pathway to a better tomorrow.&rdquo;
                </p>
              </div>
              <p className="text-sm leading-relaxed text-[#3D5A50]">
                We envision resilient communities across Pakistan where acute poverty no longer locks generations
                out of health, education, and honest self-determination.
              </p>
            </div>
            <div className="pt-4 border-t border-[#064B35]/8 text-xs font-bold text-[#064B35] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#D6A943]" />
              <span>Future of Humanitarian Dignity</span>
            </div>
          </div>
        </div>

        {/* Core Objectives Section */}
        <div className="space-y-10">
          <SectionHeader
            badge="Strategic Focus"
            badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
            title="Eight Core"
            highlight="Humanitarian"
            italicWord="Objectives."
            description="Our organizational roadmap addresses immediate acute distress while establishing enduring pathways for community self-reliance."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_OBJECTIVES.map((obj, index) => (
              <div
                key={obj.title}
                className="p-6 rounded-3xl bg-white border border-[#064B35]/12 shadow-sm space-y-3 hover:shadow-xl hover:border-[#D6A943]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-2.5">
                  <span className="text-xs font-extrabold text-[#D6A943] block">
                    0{index + 1}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-[#172B26] group-hover:text-[#064B35] transition-colors">
                    {obj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3D5A50] leading-relaxed">
                    {obj.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#064B35]/8 text-[11px] font-semibold text-[#064B35]">
                  Strategic Milestone
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <CTASection
        title="Support Our Humanitarian Mission."
        subtitle="Shared Responsibility"
        description="Every initiative starts with the courage to care. Explore our welfare portfolios or review our impact standards."
        primaryBtnText="Explore Welfare Programs"
        primaryBtnHref="/programs"
        secondaryBtnText="Review Impact Standards"
        secondaryBtnHref="/impact"
      />
    </div>
  );
}
