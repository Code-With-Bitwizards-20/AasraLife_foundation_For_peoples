import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ShieldCheck,
  GraduationCap,
  Scale,
  ArrowRight,
} from "lucide-react";
import { ORGANIZATION } from "@/data/organization";

export const metadata: Metadata = {
  title: "About Us — Who We Are & Foundation Leadership",
  description:
    "Learn about AasraLife Foundation, our founder Muhammad Abdullah Shahzad Bhatti, our purpose, values, and our commitment to human dignity in Pakistan.",
};

const VALUES_LIST = [
  { name: "Humanity", desc: "Placing compassion, empathy, and kindness at the heart of every decision." },
  { name: "Compassion", desc: "Listening with humility and providing care without judgment." },
  { name: "Integrity", desc: "Honesty in all our communications, disclosures, and leadership actions." },
  { name: "Dignity", desc: "Strictly protecting the privacy and self-respect of every assisted individual." },
  { name: "Transparency", desc: "Open financial recordkeeping, clear accounting, and public accountability." },
  { name: "Equality", desc: "Providing assistance regardless of social standing, gender, or background." },
  { name: "Responsibility", desc: "Managing resources prudently to maximize sustainable community outcomes." },
  { name: "Empowerment", desc: "Fostering long-term self-reliance rather than perpetual dependence." },
];

export default function AboutPage() {
  return (
    <div className="bg-[#FFF9EE] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section 1: Hero Introduction */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3ED] border border-[#064B35]/15 text-[#064B35] text-xs font-semibold">
            <Heart className="w-4 h-4 text-[#D6A943]" />
            <span>About AasraLife Foundation</span>
          </div>
          <h1 className="font-heading font-extrabold text-[#172B26] tracking-tight">
            Connecting Humanity. <br />
            <span className="text-[#064B35]">Creating Opportunities.</span>
          </h1>
          <p className="p-body text-base sm:text-lg">
            AasraLife Foundation is a humanitarian nonprofit initiative established in Pakistan to support
            individuals and families experiencing hardship, providing compassionate healthcare assistance,
            educational support, food security, and sustainable livelihood opportunities.
          </p>
        </div>

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
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white max-w-xl">
            <span className="text-xs uppercase font-bold text-[#D6A943] tracking-widest block mb-1">
              Community Solidarity
            </span>
            <p className="text-xs sm:text-sm font-medium text-white/90">
              Passionate youth coordinators, legal minds, and field volunteers united to serve Pakistan&apos;s vulnerable.
            </p>
          </div>
        </div>

        {/* Section 2: Who We Are & Section 3: Why We Exist */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#064B35]/15 shadow-md space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D6A943] block">
              Section 02
            </span>
            <h2 className="font-heading font-extrabold text-2xl text-[#172B26]">
              Who We Are
            </h2>
            <p className="p-body text-sm leading-relaxed">
              We are a team of dedicated young Pakistanis, students, professionals, and community advocates
              who believe that compassion must be paired with structured action. Originating in Lahore, Punjab,
              AasraLife Foundation focuses on direct, verified humanitarian support that helps individuals overcome
              critical hardship and regain autonomy.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#064B35]/15 shadow-md space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D6A943] block">
              Section 03
            </span>
            <h2 className="font-heading font-extrabold text-2xl text-[#172B26]">
              Why AasraLife Exists
            </h2>
            <p className="p-body text-sm leading-relaxed">
              In developing communities, unexpected shocks—such as acute illness, inflation in staple food costs,
              or sudden joblessness—frequently push hardworking families below the poverty line. AasraLife was
              founded to provide a reliable, transparent safety net that protects family honor, keeps children in
              school, and replaces despair with productive opportunity.
            </p>
          </div>
        </div>

        {/* Section 4: Our Purpose & Section 5: Our Values */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#064B35]">
              Guiding Principles
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#172B26]">
              Our Purpose & Core Values
            </h2>
            <p className="text-xs sm:text-sm text-[#718078]">
              The unshakeable ethical commitments that guide our interactions with beneficiaries, volunteers, and supporters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES_LIST.map((val) => (
              <div
                key={val.name}
                className="p-6 rounded-2xl bg-white border border-[#064B35]/10 shadow-sm space-y-2 hover:border-[#064B35]/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#EAF3ED] text-[#064B35] flex items-center justify-center font-bold text-xs">
                  {val.name.slice(0, 1)}
                </div>
                <h3 className="font-heading font-bold text-base text-[#172B26]">
                  {val.name}
                </h3>
                <p className="text-xs text-[#718078] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 7: Founder Introduction */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#064B35]/15 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-[#064B35]/10 bg-[#043526]">
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
              <span className="text-xs font-bold uppercase tracking-widest text-[#D6A943] bg-[#FFF9EE] px-3 py-1 rounded-full border border-[#D6A943]/30">
                Founder & Leadership
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#172B26]">
                {ORGANIZATION.founder.name}
              </h2>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#064B35]">
                <GraduationCap className="w-4 h-4 text-[#D6A943]" />
                <span>{ORGANIZATION.founder.academicStatus}</span>
              </div>
            </div>

            <p className="p-body text-sm leading-relaxed">
              &quot;{ORGANIZATION.founder.statement}&quot;
            </p>

            <p className="p-body text-sm leading-relaxed">
              Muhammad Abdullah Shahzad Bhatti established AasraLife Foundation with clear operational boundaries:
              every beneficiary case must be verified through authentic documentation; medical assistance must be
              remitted directly to registered healthcare institutions; and financial records must remain completely
              transparent to every contributor.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#064B35] font-semibold">
              <div className="flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-[#D6A943]" />
                <span>Legal & Human Rights Awareness</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D6A943]" />
                <span>Non-Discrimination Charter</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 8: Our Commitment to Humanity */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#043526] text-white space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D6A943] block">
            Ethical Covenant
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl">
            Our Commitment to Humanity
          </h2>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-3xl">
            We pledge to never exploit human vulnerability for marketing. We will not publish humiliating photographs
            of beneficiaries receiving aid. We will guard the privacy of every struggling family, verify all cases
            with fairness, and operate with humility, transparency, and deep respect for the communities we serve.
          </p>
        </div>

        {/* Section 9: CTA */}
        <div className="text-center pt-4">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#064B35] text-white font-bold text-sm sm:text-base hover:bg-[#043526] transition-all shadow-md group"
          >
            <span>Discover Our Welfare Initiatives</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#D6A943]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
