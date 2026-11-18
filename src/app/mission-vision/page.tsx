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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mission & Vision — AasraLife Foundation",
  description:
    "Explore the humanitarian mission, vision, and core community objectives of AasraLife Foundation in Pakistan.",
};

const CORE_OBJECTIVES = [
  { title: "Reduce Hardship", desc: "Alleviating acute destitution through timely essential relief and dignified support." },
  { title: "Improve Access to Education", desc: "Sponsoring fees, books, and uniforms to prevent school dropouts among disadvantaged youth." },
  { title: "Support Healthcare Needs", desc: "Funding life-saving surgeries, diagnostics, and chronic medicines directly via hospital accounts." },
  { title: "Address Food Insecurity", desc: "Delivering standardized 30-day staple nutrition packages to destitute families with zero public shaming." },
  { title: "Empower Women", desc: "Providing vocational training, sewing workstations, and home enterprise skills for economic autonomy." },
  { title: "Encourage Sustainable Livelihoods", desc: "Gifting pushcarts, trade toolkits, and inventory grants that create independent daily earnings." },
  { title: "Respond to Emergencies", desc: "Deploying survival kits, clean water, and temporary shelter during flash floods and severe winter events." },
  { title: "Strengthen Communities", desc: "Cultivating local volunteer chapters that champion human rights, mutual aid, and civic responsibility." },
];

export default function MissionVisionPage() {
  return (
    <div className="bg-[#FFF9EE] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3ED] border border-[#064B35]/15 text-[#064B35] text-xs font-semibold">
            <Compass className="w-4 h-4 text-[#D6A943]" />
            <span>Institutional Charter</span>
          </div>
          <h1 className="font-heading font-extrabold text-[#172B26] tracking-tight">
            Our Mission & <span className="text-[#064B35]">Vision</span>
          </h1>
          <p className="p-body text-base sm:text-lg">
            Humanity is at the heart of everything we do. Explore the foundational mission, vision,
            and eight core objectives guiding AasraLife Foundation.
          </p>
        </div>

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
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white max-w-xl">
            <span className="text-xs uppercase font-bold text-[#D6A943] tracking-widest block mb-1">
              Dawn of Hope
            </span>
            <p className="text-xs sm:text-sm font-medium text-white/90">
              Connecting humanity to create lasting opportunities across Pakistan.
            </p>
          </div>
        </div>

        {/* Mission & Vision Twin Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#064B35]/15 shadow-lg space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAF3ED] text-[#064B35] flex items-center justify-center">
                <Target className="w-6 h-6 text-[#064B35]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D6A943] block">
                The Foundation Mission
              </span>
              <h2 className="font-heading font-extrabold text-2xl text-[#172B26]">
                Our Mission
              </h2>
              <blockquote className="p-body text-sm sm:text-base leading-relaxed not-italic border-l-4 border-[#064B35] pl-4 py-1 text-[#172B26]">
                &quot;To connect vulnerable individuals and communities with essential support, meaningful opportunities, and resources that improve their quality of life.&quot;
              </blockquote>
              <p className="text-xs sm:text-sm text-[#718078] leading-relaxed">
                We believe that relief must be administered without compromising dignity, through direct institutional
                payments, thorough need verification, and open accountability.
              </p>
            </div>
            <div className="pt-4 border-t border-[#064B35]/10 flex items-center gap-2 text-xs text-[#064B35] font-bold">
              <ShieldCheck className="w-4 h-4 text-[#D6A943]" />
              <span>Compassionate & Accountable Delivery</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#064B35]/15 shadow-lg space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAF3ED] text-[#064B35] flex items-center justify-center">
                <Eye className="w-6 h-6 text-[#064B35]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D6A943] block">
                The Enduring Horizon
              </span>
              <h2 className="font-heading font-extrabold text-2xl text-[#172B26]">
                Our Vision
              </h2>
              <blockquote className="p-body text-sm sm:text-base leading-relaxed not-italic border-l-4 border-[#D6A943] pl-4 py-1 text-[#172B26]">
                &quot;A society where every individual has access to dignity, opportunity, essential support, and the possibility of a better future.&quot;
              </blockquote>
              <p className="text-xs sm:text-sm text-[#718078] leading-relaxed">
                An international humanitarian standard originating in Pakistan, where health crises do not destroy families
                and every willing individual has the tools to earn a respectable livelihood.
              </p>
            </div>
            <div className="pt-4 border-t border-[#064B35]/10 flex items-center gap-2 text-xs text-[#064B35] font-bold">
              <Heart className="w-4 h-4 text-[#D6A943]" />
              <span>Every Life Deserves Dignity</span>
            </div>
          </div>
        </div>

        {/* 8 Core Objectives */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#064B35]/15 shadow-xl space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#064B35]">
              Strategic Pillars
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#172B26]">
              Our Core Objectives
            </h2>
            <p className="text-xs sm:text-sm text-[#718078]">
              The eight practical benchmarks guiding our welfare program design and volunteer mobilization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_OBJECTIVES.map((obj, i) => (
              <div
                key={obj.title}
                className="p-5 rounded-2xl bg-[#FFF9EE] border border-[#064B35]/10 space-y-2 hover:border-[#064B35]/30 transition-colors"
              >
                <span className="w-6 h-6 rounded-full bg-[#064B35] text-white flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </span>
                <h3 className="font-heading font-bold text-base text-[#172B26]">
                  {obj.title}
                </h3>
                <p className="text-xs text-[#718078] leading-relaxed">
                  {obj.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-2">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#064B35] text-white font-bold text-sm hover:bg-[#043526] transition-all shadow-md group"
          >
            <span>Explore Welfare Programs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#D6A943]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
