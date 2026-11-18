"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  ShieldCheck,
  Copy,
  Check,
  Info,
  Building2,
  Lock,
  ArrowRight,
  Clock,
} from "lucide-react";
import {
  DONATIONS_ENABLED,
  SADAPAY_ACCOUNT_NAME,
  SADAPAY_ACCOUNT_NUMBER,
  SADAPAY_IBAN,
  SADAPAY_INSTRUCTIONS,
  BANK_TRANSFER_DETAILS,
} from "@/lib/constants";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

export default function DonatePage() {
  const [copiedSada, setCopiedSada] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);

  const copyToClipboard = (text: string, type: "sada" | "bank") => {
    navigator.clipboard.writeText(text);
    if (type === "sada") {
      setCopiedSada(true);
      setTimeout(() => setCopiedSada(false), 2000);
    } else {
      setCopiedBank(true);
      setTimeout(() => setCopiedBank(false), 2000);
    }
  };

  return (
    <div className="bg-[#FFF9EE] space-y-16 sm:space-y-24">
      {/* 1. Page Hero with Breadcrumbs */}
      <PageHero
        badge="Humanitarian Contributions"
        badgeIcon={<Heart className="w-4 h-4 text-[#D6A943] fill-[#D6A943]" />}
        title="Be the Reason Someone"
        highlight="Finds"
        italicWord="Hope."
        description="Your generosity can help provide essential support and create opportunities for individuals and families facing hardship across Pakistan."
        breadcrumbs={[{ label: "Donation Guidelines" }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* ============================================================== */}
        {/* CRITICAL AUTHORIZATION GATE (DONATIONS_ENABLED)                */}
        {/* ============================================================== */}
        {!DONATIONS_ENABLED ? (
          /* AUTHORIZATION PENDING SCREEN */
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#064B35]/12 shadow-xl text-center space-y-6">
            <div className="w-20 h-20 rounded-3xl bg-[#EAF3ED] text-[#064B35] flex items-center justify-center mx-auto shadow-sm">
              <ShieldCheck className="w-10 h-10 text-[#064B35]" />
            </div>

            <div className="space-y-3 max-w-xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-900 border border-amber-600/25">
                <Clock className="w-3.5 h-3.5 text-amber-700" />
                <span>Statutory Compliance Notice</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#172B26]">
                Donations Authorization in Progress
              </h2>
              <div className="p-4 rounded-2xl bg-[#FFFDF8] border-l-4 border-[#064B35] border-y border-r border-[#064B35]/10 text-left">
                <p className="text-sm sm:text-base font-bold text-[#064B35] leading-relaxed">
                  &ldquo;Donation facilities will be available once the foundation has completed the necessary regulatory registration and authorization requirements.&rdquo;
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFDF8] border border-[#064B35]/12 text-xs sm:text-sm text-[#3D5A50] max-w-lg mx-auto text-left space-y-2 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-[#064B35]">
                <Info className="w-4 h-4 text-[#D6A943]" />
                <span>Our Legal & Regulatory Commitment:</span>
              </div>
              <p className="leading-relaxed">
                AasraLife Foundation firmly believes in uncompromising compliance with applicable Pakistani
                charity laws and banking regulations. In compliance with these principles, verified SadaPay
                and organizational bank account details will only be published once all formal approvals are in place.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/programs"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#064B35] text-white font-bold text-xs sm:text-sm hover:bg-[#043526] transition-all shadow-md group"
              >
                <span>Explore Planned Programs</span>
                <ArrowRight className="w-4 h-4 inline-block ml-1 group-hover:translate-x-1 transition-transform text-[#D6A943]" />
              </Link>
              <Link
                href="/volunteer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#064B35] border border-[#064B35]/20 font-bold text-xs sm:text-sm hover:bg-[#EAF3ED] transition-all"
              >
                Get Involved As A Volunteer
              </Link>
            </div>
          </div>
        ) : (
          /* ACTIVE DONATION DETAILS & SADAPAY CARD (WHEN ENABLED) */
          <div className="space-y-10">
            {/* SadaPay Manual Transfer Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#064B35]/15 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-[#064B35]/10 pb-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D6A943] block">
                    Verified Method
                  </span>
                  <h2 className="font-heading font-extrabold text-2xl text-[#172B26]">
                    SadaPay Manual Transfer
                  </h2>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#EAF3ED] text-[#064B35] text-xs font-bold">
                  Official Account
                </span>
              </div>

              {/* Account Details */}
              <div className="p-6 rounded-2xl bg-[#FFFDF8] border border-[#064B35]/15 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#064B35]/10 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4A5B53]">
                    Account Title:
                  </span>
                  <span className="font-heading font-bold text-base text-[#064B35]">
                    {SADAPAY_ACCOUNT_NAME}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#064B35]/10 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4A5B53]">
                    SadaPay Account Number:
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-base text-[#172B26]">
                      {SADAPAY_ACCOUNT_NUMBER}
                    </span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(SADAPAY_ACCOUNT_NUMBER, "sada")}
                      className="px-2.5 py-1 rounded-lg bg-white border border-[#064B35]/20 text-xs font-bold text-[#064B35] hover:bg-[#EAF3ED] flex items-center gap-1"
                    >
                      {copiedSada ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedSada ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                </div>

                {SADAPAY_IBAN && (
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4A5B53]">
                      IBAN (If Applicable):
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-xs sm:text-sm text-[#172B26]">
                        {SADAPAY_IBAN}
                      </span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(SADAPAY_IBAN, "sada")}
                        className="px-2.5 py-1 rounded-lg bg-white border border-[#064B35]/20 text-xs font-bold text-[#064B35] hover:bg-[#EAF3ED] flex items-center gap-1"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Step by Step Transfer Instructions */}
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-base text-[#172B26]">
                  How to Complete Your Contribution:
                </h3>
                <ol className="space-y-2 text-xs sm:text-sm text-[#172B26]">
                  {SADAPAY_INSTRUCTIONS.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#064B35] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Direct Bank Account Card */}
            <div className="bg-white rounded-3xl p-8 border border-[#064B35]/15 shadow-md space-y-4">
              <h3 className="font-heading font-bold text-lg text-[#172B26] border-b border-[#064B35]/10 pb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#064B35]" />
                Direct Bank Transfer
              </h3>
              <div className="p-4 rounded-xl bg-[#FFFDF8] text-xs font-mono space-y-2">
                <div>Bank: <span className="font-bold">{BANK_TRANSFER_DETAILS.bankName}</span></div>
                <div>Title: <span className="font-bold">{BANK_TRANSFER_DETAILS.accountTitle}</span></div>
                <div>Account: <span className="font-bold">{BANK_TRANSFER_DETAILS.accountNumber}</span></div>
                <div>IBAN: <span className="font-bold">{BANK_TRANSFER_DETAILS.iban}</span></div>
              </div>
            </div>
          </div>
        )}

        {/* 3. Donation Transparency & Responsible Use Statement */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#064B35]/12 shadow-sm space-y-4">
          <h2 className="font-heading font-extrabold text-xl text-[#172B26] flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#064B35]" />
            Donation Transparency & Responsible Use
          </h2>
          <p className="text-sm sm:text-base text-[#2D433B] leading-relaxed">
            All future contributions are intended exclusively for humanitarian and welfare purposes in accordance
            with the foundation&apos;s authorized activities and regulatory requirements.
          </p>
          <p className="text-sm sm:text-base text-[#2D433B] leading-relaxed">
            We make no unsupported claims that every single rupee is already being distributed through established
            infrastructure prior to formal operations. We pledge responsible stewardship, documented financial recordkeeping,
            and future public reporting of all charitable receipts and verified expenditures.
          </p>
        </div>

        {/* Security Disclosure */}
        <div className="p-5 rounded-2xl bg-[#EAF3ED] border border-[#064B35]/15 flex items-center gap-3 text-xs sm:text-sm text-[#064B35]">
          <Lock className="w-4 h-4 text-[#D6A943] shrink-0" />
          <span>
            <strong>Security Guarantee:</strong> AasraLife Foundation never requests credit card PINs, banking passwords, or OTPs. All manual transfers take place directly within your personal banking app.
          </span>
        </div>
      </div>

      {/* CTA */}
      <CTASection
        title="Support Humanitarian Dignity."
        subtitle="Uncompromising Standards"
        description="Learn how our welfare portfolios are structured to ensure every rupee achieves maximum verified impact."
        primaryBtnText="Discover Programs"
        primaryBtnHref="/programs"
        secondaryBtnText="Review Impact Standards"
        secondaryBtnHref="/impact"
      />
    </div>
  );
}
