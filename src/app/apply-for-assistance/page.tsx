"use client";

import { useState } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Mail,
  FileText,
  Heart,
  Lock,
} from "lucide-react";
import { ORGANIZATION } from "@/data/organization";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

const ELIGIBILITY_GUIDELINES = [
  "Pakistani citizens and families experiencing verified socioeconomic hardship",
  "Patients facing acute medical conditions requiring urgent hospital admission or surgery",
  "Households where the primary breadwinner is deceased, disabled, or facing sudden crisis",
  "Students enrolled in recognized primary, secondary, or vocational institutes at risk of dropping out",
  "Applicants willing to cooperate with respectful documentary verification",
];

const REQUIRED_DOCUMENTS_INFO = [
  "Valid copy of National Identity Card (CNIC) or child B-Form",
  "For medical cases: Original hospital diagnosis, attending doctor prescription, and official cost quote",
  "For educational assistance: School enrollment letter, student report card, and fee voucher",
  "For livelihood requests: Brief trade proposal and estimated cost of requested equipment or tools",
];

export default function ApplyForAssistancePage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [assistanceType, setAssistanceType] = useState("Medical Care");
  const [description, setDescription] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !city.trim() || !description.trim()) {
      setErrorMsg("Please complete all required fields (Name, Phone, City, and Description).");
      return;
    }

    if (ORGANIZATION.contact.hasConfiguredEmail) {
      const subject = encodeURIComponent(`Assistance Inquiry: ${assistanceType} - ${fullName} (${city})`);
      const body = encodeURIComponent(
        `AasraLife Foundation Welfare Committee,\n\nI am submitting an assistance inquiry for evaluation:\n\n` +
          `Applicant Name: ${fullName}\n` +
          `Contact Phone: ${phone}\n` +
          `Email: ${email || "Not provided"}\n` +
          `City / District: ${city}\n` +
          `Type of Assistance Requested: ${assistanceType}\n\n` +
          `Circumstances Description:\n${description}\n\n` +
          `I understand that submitting this inquiry does not guarantee assistance and that verified documentation will be required during assessment.`
      );
      window.location.href = `mailto:${ORGANIZATION.contact.email}?subject=${subject}&body=${body}`;
    } else {
      setIsSuccess(true);
      setErrorMsg("");
    }
  };

  return (
    <div className="bg-[#FFF9EE] space-y-16 sm:space-y-24">
      {/* 1. Page Hero with Breadcrumbs */}
      <PageHero
        badge="Beneficiary Guidance & Inquiries"
        badgeIcon={<ShieldCheck className="w-4 h-4 text-[#D6A943]" />}
        title="Apply for"
        highlight="Dignified"
        italicWord="Assistance."
        description="AasraLife Foundation supports vulnerable individuals and families through fair, documented, and respectful welfare initiatives. Please review our application principles and verification standards below."
        breadcrumbs={[{ label: "Apply for Assistance" }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Fundamental Non-Guarantee & Document Caution Alert */}
        <div className="p-6 rounded-3xl bg-amber-500/10 border border-amber-600/25 text-xs sm:text-sm text-amber-950 space-y-2.5 shadow-sm">
          <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Important Application Notice:</span>
          </div>
          <p className="leading-relaxed">
            Submitting an inquiry does <strong>not guarantee financial or material assistance</strong>. All support
            depends on independent verification, availability of charitable allocations, and supervisory committee approval.
            <strong> Under no circumstances will funds be disbursed as unverified cash handovers.</strong> Medical and
            educational disbursements are paid directly to registered institutions.
          </p>
        </div>

        {/* 1. Eligibility Principles & 2. Required Documents Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-[#064B35]/12 shadow-sm space-y-4">
            <h3 className="font-heading font-bold text-xl text-[#172B26] border-b border-[#064B35]/10 pb-3">
              Eligibility Guidance
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[#172B26]">
              {ELIGIBILITY_GUIDELINES.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#064B35] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#064B35]/12 shadow-sm space-y-4">
            <h3 className="font-heading font-bold text-xl text-[#172B26] border-b border-[#064B35]/10 pb-3">
              Required Documentary Proof
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[#172B26]">
              {REQUIRED_DOCUMENTS_INFO.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <FileText className="w-4 h-4 text-[#D6A943] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3. Dignity Safeguards Card */}
        <div className="p-7 rounded-3xl bg-[#043526] text-white space-y-3 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D6A943]">
            <Lock className="w-4 h-4" />
            <span>Absolute Dignity Safeguards</span>
          </div>
          <h3 className="font-heading font-bold text-xl text-white">
            Your Privacy & Honor Are Strictly Protected
          </h3>
          <p className="text-xs sm:text-sm text-[#FFF9EE]/85 leading-relaxed">
            We will never photograph you or your family receiving assistance for publicity or marketing purposes.
            Your medical records and personal details are handled solely by authorized coordinators and verified medical staff.
          </p>
        </div>

        {/* 4. Frontend Assistance Inquiry Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#064B35]/15 shadow-xl space-y-6">
          <div className="border-b border-[#064B35]/10 pb-4">
            <h2 className="font-heading font-extrabold text-2xl text-[#172B26]">
              Submit Assistance Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-[#3D5A50] mt-1">
              Frontend application. Drafts an email inquiry to the welfare committee for documentary review.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3.5 rounded-2xl bg-rose-50 text-rose-800 text-xs font-semibold flex items-center gap-2 border border-rose-200">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{errorMsg}</span>
            </div>
          )}

          {isSuccess && (
            <div className="p-4 rounded-2xl bg-[#EAF3ED] border border-[#064B35]/20 text-xs text-[#064B35] space-y-1">
              <span className="font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D6A943]" />
                Inquiry Logged Locally
              </span>
              <p>
                Thank you, {fullName}. Our coordination desk will review inquiries once formal welfare intakes begin. You can also reach us directly at: <strong>{ORGANIZATION.contact.email}</strong>
              </p>
            </div>
          )}

          <form onSubmit={handleInquiry} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#172B26]">
                  Applicant or Dependent Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full Legal Name as per CNIC"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-[#064B35]/20 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064B35]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#172B26]">
                  Phone Number (Active Mobile) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0300-XXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-[#064B35]/20 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064B35]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#172B26]">
                  City / District *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lahore, Kasur, Sheikhupura"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-[#064B35]/20 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064B35]"
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#172B26]">
                  Category of Assistance Requested *
                </label>
                <select
                  value={assistanceType}
                  onChange={(e) => setAssistanceType(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-[#064B35]/20 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#064B35]"
                >
                  <option value="Medical Care">Aasra Medical Care (Hospital Surgery / Medicine / Diagnostics)</option>
                  <option value="Education Support">Aasra Education Support (School Fees / Textbooks / Uniforms)</option>
                  <option value="Food Support">Aasra Food Support (Monthly Household Staples Pack)</option>
                  <option value="Women Empowerment">Women&apos;s Empowerment (Sewing Workstation / Craft Tools)</option>
                  <option value="Emergency Relief">Emergency Relief (Flood / Winter Warmth / Seasonal Crisis)</option>
                  <option value="Livelihood Tooling">Livelihood Assistance (Pushcart / Trade Toolkits)</option>
                </select>
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#172B26]">
                  Summary of Circumstances & Specific Need *
                </label>
                <textarea
                  rows={4}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your household situation, family members, the exact nature of medical condition or educational difficulty, and doctor/school name..."
                  className="w-full px-4 py-3 rounded-2xl border border-[#064B35]/20 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064B35]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#064B35] text-white font-bold text-xs sm:text-sm hover:bg-[#043526] transition-all shadow-md flex items-center justify-center gap-2 border border-[#D6A943]/30"
            >
              <Mail className="w-4 h-4 text-[#D6A943]" />
              <span>Submit Assistance Inquiry</span>
            </button>
          </form>
        </div>
      </div>

      {/* CTA */}
      <CTASection
        title="Explore Our Six Welfare Portfolios."
        subtitle="Transparent Assistance"
        description="Every welfare portfolio operates with strict verification protocols, ensuring that assistance directly reaches verified individuals."
        primaryBtnText="Discover Programs"
        primaryBtnHref="/programs"
        secondaryBtnText="Review Impact Standards"
        secondaryBtnHref="/impact"
      />
    </div>
  );
}
