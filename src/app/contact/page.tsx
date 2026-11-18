"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  AlertCircle,
} from "lucide-react";
import { ORGANIZATION } from "@/data/organization";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !message.trim()) {
      setErrorMsg("Please provide your name and message.");
      return;
    }

    if (ORGANIZATION.contact.hasConfiguredEmail) {
      const emailSubject = encodeURIComponent(`Contact Inquiry: ${subject || "General Inquiry"} - ${fullName}`);
      const emailBody = encodeURIComponent(
        `Dear AasraLife Foundation Team,\n\nName: ${fullName}\nEmail: ${email || "Not specified"}\n\nMessage:\n${message}`
      );
      window.location.href = `mailto:${ORGANIZATION.contact.email}?subject=${emailSubject}&body=${emailBody}`;
    } else {
      setErrorMsg(
        "Official organizational email inbox is currently being configured. Please consult the coordination details below."
      );
    }
  };

  return (
    <div className="bg-[#FFF9EE] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3ED] border border-[#064B35]/15 text-[#064B35] text-xs font-semibold">
            <Mail className="w-4 h-4 text-[#D6A943]" />
            <span>Connect with Our Team</span>
          </div>

          <h1 className="font-heading font-extrabold text-[#172B26] tracking-tight">
            Contact <span className="text-[#064B35]">Us</span>
          </h1>

          <p className="p-body text-base sm:text-lg">
            Have questions about our planned welfare programs, volunteer opportunities, or governance?
            Our coordination desk in Lahore is here to assist.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-[#064B35]/15 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#EAF3ED] text-[#064B35] flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-[#172B26]">
              Email Coordination
            </h3>
            <p className="text-xs text-[#718078] leading-relaxed">
              Inquiries regarding programs, volunteering, and governance:
            </p>
            <span className="font-mono font-bold text-xs text-[#064B35] block">
              {ORGANIZATION.contact.email}
            </span>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#064B35]/15 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#EAF3ED] text-[#064B35] flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-[#172B26]">
              Regional Location
            </h3>
            <p className="text-xs text-[#718078] leading-relaxed">
              Official coordination desk:
            </p>
            <span className="text-xs font-semibold text-[#172B26] block">
              {ORGANIZATION.contact.addressPlaceholder}
            </span>
          </div>
        </div>

        {/* Frontend-Only Contact Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#064B35]/15 shadow-xl space-y-6">
          <div className="border-b border-[#064B35]/10 pb-4">
            <h2 className="font-heading font-extrabold text-xl text-[#172B26]">
              Send a Message to Our Desk
            </h2>
            <p className="text-xs text-[#718078]">
              Frontend-only message draft. Opens your device&apos;s email client (Mailto). No database storage.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-50 text-rose-800 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#172B26]">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#064B35]/20 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064B35]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#172B26]">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#064B35]/20 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064B35]"
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#172B26]">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Topic of your inquiry..."
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#064B35]/20 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064B35]"
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
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#064B35]/20 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064B35]"
                />
              </div>
            </div>

            {ORGANIZATION.contact.hasConfiguredEmail ? (
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#064B35] text-white font-bold text-xs sm:text-sm hover:bg-[#043526] transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-[#D6A943]" />
                <span>Open Pre-Addressed Email Draft (Mailto)</span>
              </button>
            ) : (
              <div className="p-4 rounded-xl bg-[#EAF3ED] text-xs text-[#064B35] space-y-1">
                <span className="font-bold block">Contact Coordination Note:</span>
                <p>
                  Official email integration is currently in progress. Direct messages can be sent to:{" "}
                  <strong>{ORGANIZATION.contact.email}</strong>.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
