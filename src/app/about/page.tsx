import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ShieldCheck,
  GraduationCap,
  Scale,
  ArrowRight,
  Sparkles,
  Lock,
  Users,
} from "lucide-react";
import { ORGANIZATION } from "@/data/organization";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "About Us — Leadership, Purpose & Humanitarian Charter",
  description:
    "Learn about AasraLife Foundation, our founder Muhammad Abdullah Shahzad Bhatti, our purpose, values, and our commitment to human dignity in Pakistan.",
};

const VALUES_LIST = [
  {
    name: "Humanity",
    desc: "Placing compassion, empathy, and active kindness at the heart of every decision.",
  },
  {
    name: "Compassion",
    desc: "Listening with humility and providing care without judgment or bureaucratic delay.",
  },
  {
    name: "Integrity",
    desc: "Honesty in all our communications, disclosures, and leadership actions.",
  },
  {
    name: "Dignity",
    desc: "Strictly protecting the privacy and self-respect of every assisted individual.",
  },
  {
    name: "Transparency",
    desc: "Open financial recordkeeping, clear accounting, and public accountability.",
  },
  {
    name: "Equality",
    desc: "Providing assistance regardless of social standing, gender, or background.",
  },
  {
    name: "Responsibility",
    desc: "Managing resources prudently to maximize sustainable community outcomes.",
  },
  {
    name: "Empowerment",
    desc: "Fostering long-term self-reliance rather than perpetual dependence.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#FFF9EE] space-y-16 sm:space-y-24">
      {/* 1. Page Hero */}
      <PageHero
        badge="About AasraLife Foundation"
        badgeIcon={<Heart className="w-4 h-4 text-[#D6A943]" />}
        title="Connecting Humanity."
        highlight="Creating"
        italicWord="Opportunities."
        description="AasraLife Foundation is a humanitarian nonprofit initiative established in Pakistan to support individuals and families experiencing hardship, providing compassionate healthcare assistance, educational support, food security, and sustainable livelihood opportunities."
        breadcrumbs={[{ label: "About Us" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Hero Group Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white aspect-[16/9] sm:aspect-[21/9] bg-[#043526]">
          <Image
            src="/images/about/about-hero.jpg"
            alt="AasraLife Foundation volunteers and community members standing in solidarity"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white max-w-xl p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15">
            <span className="text-xs uppercase font-bold text-[#D6A943] tracking-widest block mb-1">
              Community Solidarity
            </span>
            <p className="text-xs sm:text-sm font-medium text-white/95">
              Passionate youth coordinators, legal minds, and field volunteers united to serve Pakistan&apos;s vulnerable with dignity.
            </p>
          </div>
        </div>

        {/* Section 2: Who We Are & Section 3: Why We Exist */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#064B35]/12 shadow-sm hover:shadow-xl hover:border-[#D6A943]/40 transition-all duration-300 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D6A943] block">
              Identity & Origin
            </span>
            <h2 className="font-heading font-extrabold text-2xl text-[#172B26]">
              Who We Are
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#2D433B]">
              We are a team of dedicated young Pakistanis, students, professionals, and community advocates
              who believe that compassion must be paired with structured action. Originating in Lahore, Punjab,
              AasraLife Foundation focuses on direct, verified humanitarian support that helps individuals overcome
              critical hardship and regain autonomy.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#064B35]/12 shadow-sm hover:shadow-xl hover:border-[#D6A943]/40 transition-all duration-300 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D6A943] block">
              Purpose & Calling
            </span>
            <h2 className="font-heading font-extrabold text-2xl text-[#172B26]">
              Why AasraLife Exists
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#2D433B]">
              In developing communities, unexpected shocks—such as acute illness, inflation in staple food costs,
              or sudden joblessness—frequently push hardworking families below the poverty line. AasraLife was
              founded to provide a reliable, transparent safety net that protects family honor, keeps children in
              school, and replaces despair with productive opportunity.
            </p>
          </div>
        </div>

        {/* Section 4: Our Purpose & Section 5: Our Values */}
        <div className="space-y-10">
          <SectionHeader
            badge="Guiding Principles"
            badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
            title="Our Purpose &"
            highlight="Core Ethical"
            italicWord="Values."
            description="The unshakeable ethical commitments that guide our interactions with beneficiaries, volunteers, and supporters."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES_LIST.map((val) => (
              <div
                key={val.name}
                className="p-6 rounded-3xl bg-white border border-[#064B35]/12 shadow-sm space-y-3 hover:shadow-xl hover:border-[#D6A943]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#EAF3ED] text-[#064B35] flex items-center justify-center font-bold text-sm shadow-sm">
                    {val.name.slice(0, 1)}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#172B26]">
                    {val.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3D5A50] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#064B35]/8 text-[11px] font-semibold text-[#064B35]">
                  Charter Principle
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 7: Founder Introduction */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#064B35]/15 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-white bg-[#043526]">
            <Image
              src={ORGANIZATION.founder.portraitPlaceholder}
              alt="Muhammad Abdullah Shahzad Bhatti, Founder of AasraLife Foundation"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D6A943] bg-[#EAF3ED] px-3.5 py-1.5 rounded-full border border-[#064B35]/15 inline-block">
                Founder & Legal Leadership
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#172B26]">
                {ORGANIZATION.founder.name}
              </h2>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#064B35]">
                <GraduationCap className="w-4 h-4 text-[#D6A943]" />
                <span>{ORGANIZATION.founder.academicStatus}</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#064B35]/12 shadow-sm">
              <blockquote className="text-sm sm:text-base leading-relaxed text-[#064B35] font-editorial italic">
                &ldquo;{ORGANIZATION.founder.statement}&rdquo;
              </blockquote>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-[#2D433B]">
              Muhammad Abdullah Shahzad Bhatti established AasraLife Foundation with clear operational boundaries:
              every beneficiary case must be verified through authentic documentation; medical assistance must be
              remitted directly to registered healthcare institutions; and financial records must remain completely
              transparent to every contributor.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#064B35] font-semibold">
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-[#EAF3ED]">
                <Scale className="w-4 h-4 text-[#D6A943]" />
                <span>Legal & Human Rights Awareness</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-[#EAF3ED]">
                <ShieldCheck className="w-4 h-4 text-[#D6A943]" />
                <span>Non-Discrimination Charter</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 8: Our Commitment to Humanity */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#043526] text-white space-y-4 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#064B35] blur-3xl opacity-50 pointer-events-none" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#D6A943] block">
            Ethical Covenant
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Our Unconditional Commitment to Human Dignity
          </h2>
          <p className="text-[#FFF9EE]/85 text-base sm:text-lg leading-relaxed max-w-3xl">
            We pledge to never exploit human vulnerability for marketing. We will not publish humiliating photographs
            of beneficiaries receiving aid. We will guard the privacy of every struggling family, verify all cases
            with fairness, and operate with humility, transparency, and deep respect for the communities we serve.
          </p>
        </div>
      </div>

      {/* Section 9: CTA */}
      <CTASection
        title="Ready to Learn More About Our Initiatives?"
        subtitle="Explore Programs & Standards"
        description="Discover how AasraLife Foundation's six core welfare portfolios turn humanitarian dedication into tangible, dignified support across Pakistan."
        primaryBtnText="Explore Welfare Programs"
        primaryBtnHref="/programs"
        secondaryBtnText="Review Impact Standards"
        secondaryBtnHref="/impact"
      />
    </div>
  );
}
