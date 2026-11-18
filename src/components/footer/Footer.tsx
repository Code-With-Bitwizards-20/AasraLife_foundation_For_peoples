"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Logo from "@/components/ui/Logo";
import { ORGANIZATION } from "@/data/organization";
import { FOOTER_LINKS } from "@/data/navigation";
import { DONATIONS_ENABLED } from "@/lib/constants";

export default function Footer() {
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes("@")) return;

    if (ORGANIZATION.contact.hasConfiguredEmail) {
      window.location.href = `mailto:${ORGANIZATION.contact.email}?subject=Newsletter%20Subscription&body=Please%20add%20my%20email%20(${encodeURIComponent(
        emailInput
      )})%20to%20the%20verified%20AasraLife%20Foundation%20announcements%20list.`;
    } else {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmailInput("");
    }
  };

  return (
    <footer className="bg-[#022319] text-[#FFF9EE] border-t border-[#064B35]/80 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/3 w-96 h-96 rounded-full bg-[#064B35]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Organization & Identity */}
          <div className="lg:col-span-5 space-y-5">
            <Logo variant="white" />

            <p className="text-sm text-[#E2ECE6] leading-relaxed max-w-sm">
              <strong className="text-white">{ORGANIZATION.primaryTagline}</strong>{" "}
              {ORGANIZATION.supportingStatement} AasraLife Foundation works
              to support vulnerable communities through healthcare, education, essential food provisions,
              women&apos;s empowerment, and sustainable livelihood opportunities.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#D6A943] font-semibold">
              <ShieldCheck className="w-4 h-4 shrink-0 text-[#D6A943]" />
              <span>Dignity, Integrity & Transparency Charter</span>
            </div>

            {/* Newsletter Subscription Box */}
            <div className="pt-2 max-w-sm">
              <span className="block text-xs font-bold uppercase tracking-wider text-[#D6A943] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Verified Foundation Announcements
              </span>
              <form onSubmit={handleNewsletter} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 text-xs focus:outline-none focus:ring-2 focus:ring-[#D6A943]"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-[#D6A943] text-[#172B26] font-bold text-xs hover:bg-[#E5B854] transition-colors flex items-center justify-center shrink-0 shadow-md"
                    aria-label="Subscribe to verified foundation announcements"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                {subscribed && (
                  <p className="text-xs text-emerald-400 flex items-center gap-1.5 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Thank you. You will be notified of verified foundation announcements.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Column 2: Welfare Programs */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#D6A943]">
              Welfare Programs
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#E2ECE6]">
              {FOOTER_LINKS.programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#D6A943] transition-colors inline-block focus-visible:ring-1 focus-visible:ring-[#D6A943]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Institutional Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#D6A943]">
              Governance & Impact
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#E2ECE6]">
              {FOOTER_LINKS.organization.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#D6A943] transition-colors inline-block focus-visible:ring-1 focus-visible:ring-[#D6A943]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Coordination Desk */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#D6A943]">
              Foundation Coordination
            </h4>
            <div className="space-y-2.5 text-xs text-[#E2ECE6]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D6A943] shrink-0 mt-0.5" />
                <span>{ORGANIZATION.contact.addressPlaceholder}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D6A943] shrink-0" />
                <span>{ORGANIZATION.contact.email}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D6A943] shrink-0 mt-0.5" />
                <span>{ORGANIZATION.contact.officeHours}</span>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/donate"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#064B35] text-white text-xs font-bold hover:bg-[#085e43] border border-[#D6A943]/40 transition-all shadow-md"
              >
                <Heart className="w-3.5 h-3.5 text-[#D6A943] fill-[#D6A943]" />
                <span>{DONATIONS_ENABLED ? "Support Our Cause" : "Donation Information"}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Attribution & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#E2ECE6]/80">
          <div className="text-center md:text-left space-y-1">
            <p>© {new Date().getFullYear()} {ORGANIZATION.name}. All rights reserved.</p>
            <p className="text-[11px] text-[#FFF9EE]/70">
              Founder: {ORGANIZATION.founder.name} ({ORGANIZATION.founder.academicStatus}). Initial scope: {ORGANIZATION.initialCountry}.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5 text-xs">
            {FOOTER_LINKS.legal.map((link, idx) => (
              <span key={link.href} className="inline-flex items-center gap-3.5">
                <Link
                  href={link.href}
                  className="hover:text-[#D6A943] transition-colors"
                >
                  {link.label}
                </Link>
                {idx < FOOTER_LINKS.legal.length - 1 && (
                  <span className="text-white/30">•</span>
                )}
              </span>
            ))}
            <span className="text-white/30">•</span>
            <Link
              href="/transparency"
              className="hover:text-[#D6A943] transition-colors"
            >
              Transparency Charter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
