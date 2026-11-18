"use client";

import { useState } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Mail,
  FileText,
} from "lucide-react";
import { ORGANIZATION } from "@/data/organization";

const ELIGIBILITY_GUIDELINES = [
  "Pakistani citizens and families experiencing verified socioeconomic hardship",
  "Patients facing acute, life-threatening medical conditions requiring hospital admission or surgery",
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
      setErrorMsg(
        "Official organizational email is currently in pre-launch configuration. Please reach out to our regional desk or consult the contact details below."
      );
    }
  };

  return (
    <div className="bg-[#FFF9EE] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3ED] border border-[#064B35]/15 text-[#064B35] text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#D6A943]" />
            <span>Beneficiary Guidance & Information</span>
          </div>
          <h1 className="font-heading font-extrabold text-[#172B26] tracking-tight">
            Apply for Assistance
          </h1>
          <p className="p-body text-base sm:text-lg">
            AasraLife Foundation supports vulnerable individuals and families through fair, documented,
            and dignified welfare programs. Please review our application principles and eligibility guidance below.
          </p>
        </div>

        {/* Fundamental Non-Guarantee & Document Caution Alert */}
        <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs sm:text-sm text-amber-900 space-y-2">
          <div className="flex items-center gap-2 font-bold text-amber-950">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Important Application Notice:</span>
          </div>
          <p className="leading-relaxed">
            Submitting an inquiry does <strong>not guarantee financial or material assistance</strong>. All support
            depends on independent verification, availability of charitable allocations, and supervisory committee approval.
          </p>
          <p className="leading-relaxed text-[11.5px] text-amber-800">
            <strong>Security & Privacy Note:</strong> This frontend website does not maintain an online database and does not store uploaded personal identity documents. Please do not send sensitive personal identity cards, unrequested original documents, or bank credentials over insecure channels.
          </p>
        </div>

        {/* 1. Who May Be Eligible */}
        <div className="bg-white rounded-3xl p-8 border border-[#064B35]/15 shadow-md space-y-4">
          <h2 className="font-heading font-extrabold text-xl text-[#172B26] flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-[#064B35]" />
            Who May Be Eligible
          </h2>
          <p className="p-body text-xs sm:text-sm">
            Assistance is prioritized for individuals and families facing severe economic or health hardship who cannot afford essential care without debt:
          </p>
          <ul className="space-y-2.5 pt-1">
            {ELIGIBILITY_GUIDELINES.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#172B26]">
                <CheckCircle2 className="w-4 h-4 text-[#064B35] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 2. Information Applicants May Need */}
        <div className="bg-white rounded-3xl p-8 border border-[#064B35]/15 shadow-md space-y-4">
          <h2 className="font-heading font-extrabold text-xl text-[#172B26] flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-[#064B35]" />
            Information & Documents You May Need
          </h2>
          <p className="p-body text-xs sm:text-sm">
            When your inquiry is reviewed by our welfare coordinators, you will be requested to provide authenticated copies of the following:
          </p>
          <ul className="space-y-2.5 pt-1">
            {REQUIRED_DOCUMENTS_INFO.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#172B26]">
                <CheckCircle2 className="w-4 h-4 text-[#D6A943] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Verification Principles & Dignity Protection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-[#EAF3ED] border border-[#064B35]/15 space-y-2">
            <h3 className="font-heading font-bold text-base text-[#064B35]">
              Verification Principles
            </h3>
            <p className="text-xs text-[#172B26] leading-relaxed">
              Every case is confirmed through on-ground liaison, hospital billing records, or local reference checks.
              For medical assistance, funds are remitted directly to registered hospital accounts to prevent fund diversion.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FFF9EE] border border-[#064B35]/15 space-y-2">
            <h3 className="font-heading font-bold text-base text-[#064B35]">
              Privacy and Dignity Charter
            </h3>
            <p className="text-xs text-[#172B26] leading-relaxed">
              We strictly forbid photographing beneficiaries receiving aid. Beneficiary records are treated with the highest
              confidentiality and are never published on social media or marketing materials.
            </p>
          </div>
        </div>

        {/* 4. Frontend-Only Assistance Inquiry Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#064B35]/15 shadow-xl space-y-6">
          <div className="border-b border-[#064B35]/10 pb-4">
            <h2 className="font-heading font-extrabold text-xl text-[#172B26]">
              Assistance Inquiry Form
            </h2>
            <p className="text-xs text-[#718078]">
              This form drafts a pre-addressed email inquiry directly to our welfare coordinators. No information is stored on a database.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-50 text-rose-800 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleInquiry} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#172B26]">
                  Full Name (As on CNIC / B-Form) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Muhammad Asif"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#064B35]/20 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064B35]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#172B26]">
                  Phone Number (Active WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0300-XXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#064B35]/20 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064B35]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#172B26]">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#064B35]/20 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064B35]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#172B26]">
                  City / District *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lahore, Kasur, Gujranwala"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#064B35]/20 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064B35]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#172B26]">
                  Type of Assistance Requested *
                </label>
                <select
                  value={assistanceType}
                  onChange={(e) => setAssistanceType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#064B35]/20 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#064B35]"
                >
                  <option value="Medical Care">Aasra Medical Care (Hospital Surgery / Medicine)</option>
                  <option value="Education Support">Aasra Education Support (Books / School Fees)</option>
                  <option value="Food Support">Aasra Food Support (Monthly Nutrition Pack)</option>
                  <option value="Women's Empowerment">Women&apos;s Empowerment (Vocational Skills / Sewing)</option>
                  <option value="Livelihood Support">Aasra Livelihood Program (Pushcart / Tools)</option>
                  <option value="Emergency Relief">Aasra Emergency Relief (Disaster / Crisis)</option>
                </select>
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#172B26]">
                  Brief Description of Circumstances *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your household situation, medical diagnosis, or specific need..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#064B35]/20 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064B35]"
                />
              </div>
            </div>

            {ORGANIZATION.contact.hasConfiguredEmail ? (
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#064B35] text-white font-bold text-xs sm:text-sm hover:bg-[#043526] transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#D6A943]" />
                <span>Open Pre-Addressed Email Draft (Mailto)</span>
              </button>
            ) : (
              <div className="p-4 rounded-xl bg-[#EAF3ED] text-xs text-[#064B35] space-y-1">
                <span className="font-bold block">Direct Contact Guidance:</span>
                <p>
                  Official email integration is currently in progress. You may reach out directly to the foundation
                  coordination desk at: <strong>{ORGANIZATION.contact.email}</strong> or visit our office in Lahore during business hours.
                </p>
              </div>
            )}
          </form>
        </div>

        {/* 5. Frequently Asked Questions */}
        <div className="space-y-4">
          <h2 className="font-heading font-extrabold text-xl text-[#172B26]">
            Application Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            <div className="p-5 rounded-2xl bg-white border border-[#064B35]/10 space-y-1.5 shadow-sm">
              <h3 className="font-heading font-bold text-sm text-[#172B26]">
                How long does the assessment review take?
              </h3>
              <p className="text-xs text-[#718078] leading-relaxed">
                Critical medical emergencies are appraised within 48 to 72 hours. General livelihood and educational inquiries are reviewed periodically based on scheduled committee meetings and available allocations.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#064B35]/10 space-y-1.5 shadow-sm">
              <h3 className="font-heading font-bold text-sm text-[#172B26]">
                Can cash be handed over to the applicant?
              </h3>
              <p className="text-xs text-[#718078] leading-relaxed">
                No. In accordance with our anti-diversion policy, payments for healthcare and education are remitted directly to the registered accounts of hospitals, pharmacies, or schools. Livelihood assistance is provided as tangible tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
