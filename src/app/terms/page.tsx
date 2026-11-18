import type { Metadata } from "next";
import { Scale, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions — AasraLife Foundation",
  description:
    "Website terms, conditions of informational use, and legal limitations of AasraLife Foundation.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#FFF9EE] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3ED] text-[#064B35] text-xs font-semibold">
            <Scale className="w-3.5 h-3.5 text-[#D6A943]" />
            <span>Informational Terms of Use</span>
          </div>
          <h1 className="font-heading font-extrabold text-[#172B26] tracking-tight">
            Terms & Conditions
          </h1>
          <p className="p-body text-sm leading-relaxed">
            Please review these terms governing the informational use of the AasraLife Foundation website.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Legal Notice:</strong> This website is an informational frontend platform. These terms serve
            as a foundational framework and should be reviewed under applicable Pakistani statutory laws before
            the organization commences public fundraising.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#064B35]/15 shadow-xl space-y-8 text-xs sm:text-sm text-[#172B26] leading-relaxed">
          {/* Section 1 */}
          <div className="space-y-2">
            <h2 className="font-heading font-bold text-base sm:text-lg text-[#064B35]">
              1. Informational Nature of the Website
            </h2>
            <p className="text-[#718078]">
              All content published on this website—including descriptions of welfare programs, illustrative assistance
              categories, and operational models—is provided for general informational and awareness purposes.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2 border-t border-[#064B35]/10 pt-6">
            <h2 className="font-heading font-bold text-base sm:text-lg text-[#064B35]">
              2. No Guarantee of Assistance
            </h2>
            <p className="text-[#718078]">
              Publication of welfare programs or submission of an inquiry through an email draft does not constitute
              a legally binding agreement, promise, or guarantee of financial or material assistance. Assistance is
              subject to available resources, documentary authentication, and committee approval.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-2 border-t border-[#064B35]/10 pt-6">
            <h2 className="font-heading font-bold text-base sm:text-lg text-[#064B35]">
              3. Donations and Regulatory Authorization
            </h2>
            <p className="text-[#718078]">
              AasraLife Foundation does not operate an automated online payment gateway. Donations will only be invited
              or accepted once all mandatory regulatory authorizations in Pakistan have been completed.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-2 border-t border-[#064B35]/10 pt-6">
            <h2 className="font-heading font-bold text-base sm:text-lg text-[#064B35]">
              4. Intellectual Property
            </h2>
            <p className="text-[#718078]">
              The organization name (&quot;AasraLife Foundation&quot;), logo emblem, primary tagline (&quot;Connecting Humanity.
              Creating Opportunities.&quot;), and all original photography and written content belong exclusively to AasraLife
              Foundation and may not be reproduced without written consent.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-2 border-t border-[#064B35]/10 pt-6">
            <h2 className="font-heading font-bold text-base sm:text-lg text-[#064B35]">
              5. Governing Law
            </h2>
            <p className="text-[#718078]">
              These terms are governed by the laws of the Islamic Republic of Pakistan, with exclusive jurisdiction in
              the courts of Lahore, Punjab.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
