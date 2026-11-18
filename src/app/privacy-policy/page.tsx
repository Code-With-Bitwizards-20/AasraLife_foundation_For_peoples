import type { Metadata } from "next";
import Link from "next/link";
import { Lock, AlertTriangle } from "lucide-react";
import { ORGANIZATION } from "@/data/organization";

export const metadata: Metadata = {
  title: "Privacy Policy — AasraLife Foundation",
  description:
    "Privacy policy for the AasraLife Foundation frontend-only informational website.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FFF9EE] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3ED] text-[#064B35] text-xs font-semibold">
            <Lock className="w-3.5 h-3.5 text-[#D6A943]" />
            <span>Frontend-Only Informational Website</span>
          </div>
          <h1 className="font-heading font-extrabold text-[#172B26] tracking-tight">
            Privacy Policy
          </h1>
          <p className="p-body text-sm leading-relaxed">
            This Privacy Policy explains how information is handled on the AasraLife Foundation website
            (<code className="font-mono text-xs">aasralife.org</code>).
          </p>
        </div>

        {/* Notice on Pre-Launch Policy Review */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Advisory Notice:</strong> This policy is tailored for our initial frontend-only informational
            presence. It must be formally reviewed and expanded before the organization establishes formal beneficiary
            database collection or online financial processing.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#064B35]/15 shadow-xl space-y-8 text-xs sm:text-sm text-[#172B26] leading-relaxed">
          {/* Section 1 */}
          <div className="space-y-2">
            <h2 className="font-heading font-bold text-base sm:text-lg text-[#064B35]">
              1. No Database or Server-Side Information Storage
            </h2>
            <p className="text-[#718078]">
              This website is a static, frontend-only application. It does not connect to any database (such as Supabase,
              Firebase, PostgreSQL, or MongoDB) and does not store user profiles, passwords, application records, or uploaded
              documents on any server.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2 border-t border-[#064B35]/10 pt-6">
            <h2 className="font-heading font-bold text-base sm:text-lg text-[#064B35]">
              2. How Email-Based Inquiries Work
            </h2>
            <p className="text-[#718078]">
              Inquiry forms on this website generate pre-addressed draft messages that open directly inside your device&apos;s
              default email software (using the standard <code className="font-mono text-xs">mailto:</code> protocol). No data
              is transmitted to or stored by this website when you fill out these forms.
            </p>
            <div className="p-3.5 rounded-xl bg-[#FFF9EE] border border-[#064B35]/10 text-xs text-[#064B35] font-medium">
              <strong>Caution regarding sensitive documents:</strong> We do not encourage visitors to send CNIC scans,
              confidential medical records, or sensitive personal documents through ordinary email. Official verification
              materials will only be requested through designated, authorized procedures once formal operations commence.
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-2 border-t border-[#064B35]/10 pt-6">
            <h2 className="font-heading font-bold text-base sm:text-lg text-[#064B35]">
              3. Hosting and Infrastructure
            </h2>
            <p className="text-[#718078]">
              This website is hosted via Vercel. Like standard web hosting platforms, server logs may record basic technical
              telemetry (such as IP addresses, browser types, and access timestamps) for security monitoring and edge routing.
              AasraLife does not sell, lease, or monetize visitor data.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-2 border-t border-[#064B35]/10 pt-6">
            <h2 className="font-heading font-bold text-base sm:text-lg text-[#064B35]">
              4. Cookies and Analytics
            </h2>
            <p className="text-[#718078]">
              This frontend application does not use tracking cookies, advertising pixels, or cross-site commercial profiling.
              Local session data may be utilized solely for technical preferences (such as remembering UI toggles).
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-2 border-t border-[#064B35]/10 pt-6">
            <h2 className="font-heading font-bold text-base sm:text-lg text-[#064B35]">
              5. Contact for Privacy Inquiries
            </h2>
            <p className="text-[#718078]">
              For any privacy questions or requests regarding our website disclosures, please reach out to:
            </p>
            <div className="p-3 rounded-xl bg-[#EAF3ED] font-mono text-xs text-[#064B35]">
              Email: {ORGANIZATION.contact.email}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
