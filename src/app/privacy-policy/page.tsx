import type { Metadata } from "next";
import Link from "next/link";
import { Lock, AlertTriangle, ShieldCheck } from "lucide-react";
import { ORGANIZATION } from "@/data/organization";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Privacy Policy — Informational Data Ethics & Transparency",
  description:
    "Privacy policy for the AasraLife Foundation frontend-only informational website in Pakistan.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FFF9EE] space-y-16 sm:space-y-24">
      {/* 1. Page Hero with Breadcrumbs */}
      <PageHero
        badge="Informational Data Ethics"
        badgeIcon={<Lock className="w-4 h-4 text-[#D6A943]" />}
        title="Privacy"
        highlight="Policy & Data"
        italicWord="Ethics."
        description="This Privacy Policy explains how information is handled on the AasraLife Foundation website (aasralife.org)."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Notice on Pre-Launch Policy Review */}
        <div className="p-5 rounded-3xl bg-amber-500/10 border border-amber-600/25 text-xs sm:text-sm text-amber-950 flex items-start gap-3 shadow-sm">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-amber-900">Advisory Notice:</strong> This policy is tailored for our initial frontend-only informational
            presence. It must be formally reviewed and expanded before the organization establishes formal beneficiary
            database collection or online financial processing.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#064B35]/12 shadow-xl space-y-8 text-xs sm:text-sm text-[#172B26] leading-relaxed">
          {/* Section 1 */}
          <div className="space-y-2.5">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-[#064B35]">
              1. No Database or Server-Side Information Storage
            </h2>
            <p className="text-[#3D5A50] leading-relaxed">
              This website is a static, frontend-only application. It does not connect to any database (such as Supabase,
              Firebase, PostgreSQL, or MongoDB) and does not store user profiles, passwords, application records, or uploaded
              documents on any server.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2.5 border-t border-[#064B35]/10 pt-6">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-[#064B35]">
              2. How Email-Based Inquiries Work
            </h2>
            <p className="text-[#3D5A50] leading-relaxed">
              Inquiry forms on this website generate pre-addressed draft messages that open directly inside your device&apos;s
              default email software (using the standard <code className="font-mono text-xs text-[#064B35] font-bold">mailto:</code> protocol). No data
              is transmitted to or stored by this website when you fill out these forms.
            </p>
            <div className="p-4 rounded-2xl bg-[#FFFDF8] border border-[#064B35]/12 text-xs text-[#064B35] font-medium leading-relaxed">
              <strong>Caution regarding sensitive documents:</strong> We do not encourage visitors to send CNIC scans,
              confidential medical records, or sensitive personal documents through ordinary email. Official verification
              materials will only be requested through designated, authorized procedures once formal operations commence.
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-2.5 border-t border-[#064B35]/10 pt-6">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-[#064B35]">
              3. Hosting and Infrastructure
            </h2>
            <p className="text-[#3D5A50] leading-relaxed">
              This website is hosted via Vercel. Like standard web hosting platforms, server logs may record basic technical
              telemetry (such as IP addresses, browser types, and access timestamps) for security monitoring and edge routing.
              AasraLife does not sell, lease, or monetize visitor data.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-2.5 border-t border-[#064B35]/10 pt-6">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-[#064B35]">
              4. Cookies and Analytics
            </h2>
            <p className="text-[#3D5A50] leading-relaxed">
              This frontend application does not use tracking cookies, advertising pixels, or cross-site commercial profiling.
              Local session data may be utilized solely for technical preferences (such as remembering UI toggles).
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-2.5 border-t border-[#064B35]/10 pt-6">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-[#064B35]">
              5. Contact for Privacy Inquiries
            </h2>
            <p className="text-[#3D5A50] leading-relaxed">
              For any privacy questions or requests regarding our website disclosures, please reach out to our regional desk:
            </p>
            <div className="p-3.5 rounded-2xl bg-[#EAF3ED] font-mono text-xs text-[#064B35] font-bold">
              Email: {ORGANIZATION.contact.email}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <CTASection
        title="Questions About Our Governance?"
        subtitle="Data Dignity"
        description="Read our comprehensive transparency charter or discover how our welfare initiatives operate."
        primaryBtnText="Transparency Charter"
        primaryBtnHref="/transparency"
        secondaryBtnText="Review Programs"
        secondaryBtnHref="/programs"
      />
    </div>
  );
}
