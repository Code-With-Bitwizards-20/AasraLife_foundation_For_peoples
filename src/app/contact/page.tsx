"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  AlertCircle,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { ORGANIZATION } from "@/data/organization";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !message.trim()) {
      setErrorMsg("Please provide your name and message.");
      return;
    }

    if (ORGANIZATION.contact.hasConfiguredEmail) {
      const emailSubject = encodeURIComponent(
        `Contact Inquiry: ${subject || "General Inquiry"} - ${fullName}`
      );
      const emailBody = encodeURIComponent(
        `Dear AasraLife Foundation Team,\n\nName: ${fullName}\nEmail: ${
          email || "Not specified"
        }\n\nMessage:\n${message}`
      );
      window.location.href = `mailto:${ORGANIZATION.contact.email}?subject=${emailSubject}&body=${emailBody}`;
    } else {
      setIsSuccess(true);
      setErrorMsg("");
    }
  };

  return (
    <div className="bg-[#FFF9EE] space-y-16 sm:space-y-24">
      {/* 1. Page Hero with Breadcrumbs */}
      <PageHero
        badge="Coordination Desk"
        badgeIcon={<Mail className="w-4 h-4 text-[#D6A943]" />}
        title="Contact"
        highlight="AasraLife"
        italicWord="Foundation."
        description="Have questions regarding our planned welfare initiatives, volunteer registration, or transparency guidelines? Our coordination team in Lahore is here to assist."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-7 rounded-3xl bg-white border border-[#064B35]/12 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-11 h-11 rounded-2xl bg-[#EAF3ED] text-[#064B35] flex items-center justify-center shadow-sm">
                <Mail className="w-5 h-5 text-[#064B35]" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#172B26]">
                Email Coordination
              </h3>
              <p className="text-xs text-[#3D5A50] leading-relaxed">
                Direct inquiries for welfare & volunteering:
              </p>
            </div>
            <span className="font-mono font-bold text-xs text-[#064B35] block pt-2 border-t border-[#064B35]/8">
              {ORGANIZATION.contact.email}
            </span>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#064B35]/12 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-11 h-11 rounded-2xl bg-[#EAF3ED] text-[#064B35] flex items-center justify-center shadow-sm">
                <MapPin className="w-5 h-5 text-[#064B35]" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#172B26]">
                Regional Desk
              </h3>
              <p className="text-xs text-[#3D5A50] leading-relaxed">
                Foundational location:
              </p>
            </div>
            <span className="text-xs font-semibold text-[#172B26] block pt-2 border-t border-[#064B35]/8">
              {ORGANIZATION.contact.addressPlaceholder}
            </span>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#064B35]/12 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-11 h-11 rounded-2xl bg-[#EAF3ED] text-[#064B35] flex items-center justify-center shadow-sm">
                <Clock className="w-5 h-5 text-[#064B35]" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#172B26]">
                Office Schedule
              </h3>
              <p className="text-xs text-[#3D5A50] leading-relaxed">
                Coordination hours:
              </p>
            </div>
            <span className="text-xs font-semibold text-[#172B26] block pt-2 border-t border-[#064B35]/8">
              {ORGANIZATION.contact.officeHours}
            </span>
          </div>
        </div>

        {/* Frontend-Only Contact Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#064B35]/15 shadow-xl space-y-6">
          <div className="border-b border-[#064B35]/10 pb-4">
            <h2 className="font-heading font-extrabold text-2xl text-[#172B26]">
              Send a Message to Our Coordination Desk
            </h2>
            <p className="text-xs sm:text-sm text-[#3D5A50] mt-1">
              Frontend application. Drafts an email message directly to our regional desk.
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
                Message Prepared Locally
              </span>
              <p>
                Thank you, {fullName}. Direct inquiries may also be communicated to our coordinator at: <strong>{ORGANIZATION.contact.email}</strong>
              </p>
            </div>
          )}

          <form onSubmit={handleContactSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#172B26]">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-[#064B35]/20 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064B35]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#172B26]">
                  Your Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-[#064B35]/20 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064B35]"
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#172B26]">
                  Subject of Inquiry
                </label>
                <input
                  type="text"
                  placeholder="e.g. Program Partnership / Volunteering / General Question"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-[#064B35]/20 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064B35]"
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#172B26]">
                  Your Message *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-[#064B35]/20 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064B35]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#064B35] text-white font-bold text-xs sm:text-sm hover:bg-[#043526] transition-all shadow-md flex items-center justify-center gap-2 border border-[#D6A943]/30"
            >
              <Send className="w-4 h-4 text-[#D6A943]" />
              <span>Send Message to Coordination Desk</span>
            </button>
          </form>
        </div>
      </div>

      {/* CTA */}
      <CTASection
        title="Together, We Can Create Meaningful Change."
        subtitle="Contact Coordination"
        description="Whether connecting as an academic volunteer, healthcare professional, or community advocate, our doors in Lahore are open."
        primaryBtnText="Discover Our Programs"
        primaryBtnHref="/programs"
        secondaryBtnText="Review Impact Standards"
        secondaryBtnHref="/impact"
      />
    </div>
  );
}
