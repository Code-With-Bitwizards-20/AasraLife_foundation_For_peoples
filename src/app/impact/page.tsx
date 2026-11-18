import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  GraduationCap,
  ShoppingBag,
  Sparkles,
  LifeBuoy,
  Briefcase,
  ArrowRight,
  ShieldCheck,
  Heart,
  FileText,
  Clock,
  CheckCircle2,
  Lock,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import CTASection from "@/components/shared/CTASection";
import SectionHeader from "@/components/shared/SectionHeader";
import { DONATIONS_ENABLED } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Impact — Dignity, Accountability & Operational Standards",
  description:
    "Explore AasraLife Foundation's impact philosophy, operational pillars, measurement accountability framework, and our ethical standards for humanitarian action in Pakistan.",
};

const IMPACT_PILLARS = [
  {
    title: "Healthcare Access",
    subtitle: "Aasra Medical Care",
    icon: Activity,
    href: "/programs/medical-aid",
    description:
      "Alleviating the crippling burden of hospital bills, essential surgery costs, and chronic diagnostic treatments so that illness does not result in financial devastation.",
    metricFocus: "Hospital subsidies & direct medical remittance",
  },
  {
    title: "Education Opportunities",
    subtitle: "Aasra Education Support",
    icon: GraduationCap,
    href: "/programs/education",
    description:
      "Empowering bright students from marginalized backgrounds with tuition subsidies, uniforms, textbooks, and essential stationery to keep classrooms filled.",
    metricFocus: "School fee coverage & learning materials",
  },
  {
    title: "Food Security",
    subtitle: "Aasra Food Support",
    icon: ShoppingBag,
    href: "/programs/food-support",
    description:
      "Delivering monthly dignified nutrition packs containing whole wheat flour, lentils, cooking oil, and staples to vulnerable widow-led and low-income households.",
    metricFocus: "Wholesome monthly household ration kits",
  },
  {
    title: "Women's Empowerment",
    subtitle: "Vocational Independence",
    icon: Sparkles,
    href: "/programs/womens-empowerment",
    description:
      "Equipping women with industrial sewing machines, tailoring certifications, and digital micro-enterprise toolkits to build sustainable household financial sovereignty.",
    metricFocus: "Vocational tools & independent earnings",
  },
  {
    title: "Emergency Relief",
    subtitle: "Disaster & Seasonal Aid",
    icon: LifeBuoy,
    href: "/programs/emergency-relief",
    description:
      "Rapid humanitarian deployment during extreme monsoon floods, seasonal cold waves, and local emergencies with winter warm packs and survival provisions.",
    metricFocus: "Rapid survival assistance & winterization",
  },
  {
    title: "Sustainable Livelihoods",
    subtitle: "Productive Micro-Tools",
    icon: Briefcase,
    href: "/programs/livelihood",
    description:
      "Supplying honest breadwinners with durable pushcarts, professional plumbing/electrician toolkits, and inventory to generate dignified daily income.",
    metricFocus: "Income-generating assets & micro-tools",
  },
];

const ILLUSTRATIVE_SCENARIOS = [
  {
    title: "Preventing Medical Bankruptcy (Illustrative Scenario)",
    focus: "Healthcare Relief",
    scenario:
      "A daily-wage laborer requiring critical gallbladder surgery faces catastrophic borrowing from informal lenders. Under Aasra Medical Care, verified diagnostic reports are assessed and surgery bills are directly remitted to the partner hospital, allowing the patient to heal without family debt.",
  },
  {
    title: "Securing Classroom Continuity (Illustrative Scenario)",
    focus: "Educational Retention",
    scenario:
      "Three siblings at risk of dropping out due to unpaid examination fees receive semester tuition coverage and textbooks directly supplied to their school, ensuring their educational momentum remains uninterrupted.",
  },
  {
    title: "From Hardship to Self-Sufficiency (Illustrative Scenario)",
    focus: "Livelihood Tooling",
    scenario:
      "A skilled seamstress supporting elderly dependents is provided with a heavy-duty sewing machine and starter fabric roll, enabling her to secure local stitching orders and generate sustained monthly revenue.",
  },
];

export default function ImpactPage() {
  return (
    <div className="bg-[#FFF9EE] space-y-16 sm:space-y-24">
      {/* 1. Page Hero */}
      <PageHero
        badge="Humanitarian Impact & Standards"
        badgeIcon={<ShieldCheck className="w-4 h-4" />}
        title="Impact Is More Than Numbers."
        highlight="It Is Human"
        italicWord="Dignity."
        description="Every meaningful change begins with understanding human needs, protecting personal dignity, and creating durable opportunities for a better tomorrow. We measure success by lives sustainably stabilized."
        breadcrumbs={[{ label: "Our Impact" }]}
        actions={
          <>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#064B35] text-white font-bold text-xs sm:text-sm hover:bg-[#043526] transition-all shadow-md group"
            >
              <span>Explore Our Programs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#D6A943]" />
            </Link>
            <Link
              href="/transparency"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#064B35] border border-[#064B35]/20 font-bold text-xs sm:text-sm hover:bg-[#EAF3ED] transition-all"
            >
              <span>Transparency Charter</span>
            </Link>
          </>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* 2. Philosophy of Impact */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              align="left"
              badge="Our Core Philosophy"
              title="Transforming Vulnerability Into"
              highlight="Lasting"
              italicWord="Self-Reliance."
              description="Charity that merely provides temporary relief without preserving human honor often perpetuates dependency. At AasraLife Foundation, impact is defined by restoring capability, expanding opportunity, and upholding unconditional self-respect."
            />

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#064B35]/12 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#064B35] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#172B26]">
                    Preserving Beneficiary Dignity
                  </h4>
                  <p className="text-xs text-[#3D5A50] mt-0.5">
                    Strict zero-tolerance policy against camera exploitation or public distribution lines that compromise personal privacy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#064B35]/12 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#D6A943] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#172B26]">
                    Direct Institution Remittance
                  </h4>
                  <p className="text-xs text-[#3D5A50] mt-0.5">
                    Assistance is channeled directly to hospitals, registered schools, and equipment suppliers to eliminate leakage and ensure verified utilization.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#064B35]/12 shadow-sm">
                <Lock className="w-5 h-5 text-[#064B35] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#172B26]">
                    Documented Accountability
                  </h4>
                  <p className="text-xs text-[#3D5A50] mt-0.5">
                    Every allocation is maintained in formal registers ready for public auditing and verified supporter reports.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white aspect-[4/3] bg-[#043526]">
              <Image
                src="/images/mission/mission-hero.jpg"
                alt="Humanitarian care and dignity in community support"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#043526]/80 via-transparent to-black/20" />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#064B35]/15">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#D6A943] block">
                  Foundational Benchmark
                </span>
                <p className="text-xs sm:text-sm font-bold text-[#172B26] mt-1">
                  &ldquo;A humane society is measured not by its wealth, but by how courageously it protects the dignity of its most vulnerable.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Six Impact Pillars */}
        <section className="space-y-10">
          <SectionHeader
            badge="Structured Interventions"
            title="Six Foundational Pillars of"
            highlight="Humanitarian"
            italicWord="Action."
            description="Our program architecture addresses interconnected facets of community hardship, providing a multi-layered safety net."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {IMPACT_PILLARS.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-3xl p-7 bg-white border border-[#064B35]/12 shadow-sm hover:shadow-xl hover:border-[#D6A943]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#EAF3ED] text-[#064B35] flex items-center justify-center group-hover:bg-[#064B35] group-hover:text-[#D6A943] transition-all shadow-sm">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#D6A943] px-2.5 py-1 rounded-full bg-[#EAF3ED]/60 border border-[#064B35]/10">
                        Pillar
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading font-bold text-xl text-[#172B26] group-hover:text-[#064B35] transition-colors">
                        {pillar.title}
                      </h3>
                      <span className="text-xs font-semibold text-[#064B35]">
                        {pillar.subtitle}
                      </span>
                    </div>

                    <p className="text-sm text-[#3D5A50] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-[#064B35]/8 space-y-3">
                    <div className="text-[11px] text-[#4A5B53]">
                      <strong className="text-[#172B26]">Key Indicator: </strong>
                      {pillar.metricFocus}
                    </div>

                    <Link
                      href={pillar.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064B35] group-hover:text-[#D6A943] transition-colors"
                    >
                      <span>Explore Program Scope</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. How Impact Is Created (Operational Process Timeline) */}
        <section className="space-y-10">
          <SectionHeader
            badge="Operational Methodology"
            title="How Impact Is Rigorously"
            highlight="Delivered &"
            italicWord="Documented."
            description="Our six-step standard operating protocol ensures complete verification, ethical disbursement, and documented outcomes."
          />

          <ProcessTimeline />
        </section>

        {/* 5. Impact Measurement & Accountability (Honest Foundational Presentation) */}
        <section className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-white to-[#EAF3ED]/50 border border-[#064B35]/15 shadow-lg space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#064B35]/12">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-900 border border-amber-600/25">
                <Clock className="w-3.5 h-3.5 text-amber-700" />
                <span>Impact Reporting in Development</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-[#172B26] pt-1">
                Measurement Integrity & Ethical Reporting
              </h3>
            </div>
            <Link
              href="/transparency"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#064B35] text-white text-xs font-bold hover:bg-[#043526] transition-colors shrink-0"
            >
              <span>Review Financial Charter</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D6A943]" />
            </Link>
          </div>

          <p className="text-base sm:text-lg leading-relaxed text-[#2D433B]">
            AasraLife Foundation is committed to uncompromised transparency. Unlike organizations that present exaggerated or fabricated impact counts, we uphold strict ethical reporting:
          </p>

          <div className="p-6 rounded-2xl bg-white border border-[#064B35]/12 shadow-sm">
            <blockquote className="border-l-4 border-[#D6A943] pl-4 text-sm sm:text-base italic text-[#064B35] font-editorial">
              &ldquo;Verified impact statistics and official outcome reports will be published as authorized programmes become operational and documented results become available. We do not invent numbers to solicit trust.&rdquo;
            </blockquote>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-white/80 border border-[#064B35]/10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D6A943] block">
                Standard 01
              </span>
              <h4 className="text-sm font-bold text-[#172B26]">
                Zero Fabricated Counters
              </h4>
              <p className="text-xs text-[#4A5B53] leading-relaxed">
                No simulated beneficiary counters, arbitrary percentage metrics, or unverified global claims.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/80 border border-[#064B35]/10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D6A943] block">
                Standard 02
              </span>
              <h4 className="text-sm font-bold text-[#172B26]">
                Direct Hospital Vouchers
              </h4>
              <p className="text-xs text-[#4A5B53] leading-relaxed">
                Every rupee spent on medical aid corresponds to an official hospital invoice and ledger entry.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/80 border border-[#064B35]/10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D6A943] block">
                Standard 03
              </span>
              <h4 className="text-sm font-bold text-[#172B26]">
                Audited Annual Disclosure
              </h4>
              <p className="text-xs text-[#4A5B53] leading-relaxed">
                Formal financial statements and operational balance sheets made openly accessible to the public.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Stories of Change (Explicitly Labeled Illustrative Examples) */}
        <section className="space-y-8">
          <SectionHeader
            badge="Case Scenarios"
            title="Anticipated Pathways of"
            highlight="Humanitarian"
            italicWord="Change."
            description="The following scenarios illustrate how AasraLife's planned intervention models are designed to operate in community settings. (Labeled explicitly as illustrative operational examples)."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ILLUSTRATIVE_SCENARIOS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-[#064B35]/12 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#064B35] px-2.5 py-0.5 rounded-full bg-[#EAF3ED]">
                      {item.focus}
                    </span>
                    <span className="text-[10px] text-amber-800 font-semibold bg-amber-50 px-2 py-0.5 rounded">
                      Illustrative Example
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-base text-[#172B26]">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#3D5A50] leading-relaxed">
                    {item.scenario}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#064B35]/8 text-[11px] text-[#4A5B53] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D6A943]" />
                  <span>Planned Operational Protocol</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Institutional Transparency & Governance Links */}
        <section className="p-8 sm:p-10 rounded-3xl bg-[#043526] text-white space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D6A943] block">
                Open Governance
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-white">
                Committed to Complete Institutional Transparency
              </h3>
              <p className="text-sm sm:text-base text-[#FFF9EE]/85 max-w-2xl leading-relaxed">
                We believe true humanitarian leadership requires radical accountability. Review our governance charter, annual reporting roadmaps, and assistance inquiry guidelines.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href="/transparency"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#D6A943] text-[#172B26] font-bold text-xs sm:text-sm hover:bg-[#E5B854] transition-colors"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Financial Transparency</span>
              </Link>
              <Link
                href="/annual-reports"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white border border-white/20 font-bold text-xs sm:text-sm hover:bg-white/20 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Annual Reports & Documents</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* 8. Final CTA */}
      <CTASection
        title="Together, We Can Create Meaningful Change."
        subtitle="Dignity & Compassion in Action"
        description="Whether you would like to collaborate as a volunteer, refer a verified medical emergency, or explore our welfare pillars, your engagement strengthens our collective humanitarian mission."
        primaryBtnText="Explore Our Programs"
        primaryBtnHref="/programs"
        secondaryBtnText="Become a Volunteer"
        secondaryBtnHref="/volunteer"
      />
    </div>
  );
}
