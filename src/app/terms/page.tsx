import type { Metadata } from "next";
import { Scale, AlertTriangle, ShieldCheck } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Terms & Conditions — Informational Terms of Use",
  description:
    "Website terms, conditions of informational use, and legal limitations of AasraLife Foundation in Pakistan.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#FFF9EE] space-y-16 sm:space-y-24">
      {/* 1. Page Hero with Breadcrumbs */}
      <PageHero
        badge="Informational Terms of Use"
        badgeIcon={<Scale className="w-4 h-4 text-[#D6A943]" />}
        title="Terms &"
        highlight="Conditions of"
        italicWord="Use."
        description="Please review these terms governing the informational use of the AasraLife Foundation website."
        breadcrumbs={[{ label: "Terms & Conditions" }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="p-5 rounded-3xl bg-amber-500/10 border border-amber-600/25 text-xs sm:text-sm text-amber-950 flex items-start gap-3 shadow-sm">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-amber-900">Legal Notice:</strong> This website is an informational frontend platform. These terms serve
            as a foundational framework and should be reviewed under applicable Pakistani statutory laws before
            the organization commences public fundraising.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#064B35]/12 shadow-xl space-y-8 text-xs sm:text-sm text-[#172B26] leading-relaxed">
          {/* Section 1 */}
          <div className="space-y-2.5">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-[#064B35]">
              1. Informational Nature of the Website
            </h2>
            <p className="text-[#3D5A50] leading-relaxed">
              All content published on this website—including descriptions of welfare programs, illustrative assistance
              categories, and operational models—is provided for general informational and awareness purposes.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2.5 border-t border-[#064B35]/10 pt-6">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-[#064B35]">
              2. No Guarantee of Assistance
            </h2>
            <p className="text-[#3D5A50] leading-relaxed">
              Publication of welfare programs or submission of an inquiry through an email draft does not constitute
              a legally binding agreement, promise, or guarantee of financial or material assistance. Assistance is
              subject to available resources, documentary authentication, and committee approval.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-2.5 border-t border-[#064B35]/10 pt-6">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-[#064B35]">
              3. Donations and Regulatory Authorization
            </h2>
            <p className="text-[#3D5A50] leading-relaxed">
              AasraLife Foundation does not operate an automated online payment gateway. Donations will only be invited
              or accepted once all mandatory regulatory authorizations in Pakistan have been completed.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-2.5 border-t border-[#064B35]/10 pt-6">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-[#064B35]">
              4. Intellectual Property
            </h2>
            <p className="text-[#3D5A50] leading-relaxed">
              The organization name (&quot;AasraLife Foundation&quot;), logo emblem, primary tagline (&quot;Connecting Humanity.
              Creating Opportunities.&quot;), and all original photography and written content belong exclusively to AasraLife
              Foundation and may not be reproduced without written consent.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-2.5 border-t border-[#064B35]/10 pt-6">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-[#064B35]">
              5. Governing Law
            </h2>
            <p className="text-[#3D5A50] leading-relaxed">
              These terms are governed by the laws of the Islamic Republic of Pakistan, with exclusive jurisdiction in
              the courts of Lahore, Punjab.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <CTASection
        title="Dignity, Integrity & Transparency."
        subtitle="Governing Principles"
        description="Learn more about our organizational structure and public accountability charter."
        primaryBtnText="Transparency Charter"
        primaryBtnHref="/transparency"
        secondaryBtnText="Explore Programs"
        secondaryBtnHref="/programs"
      />
    </div>
  );
}
