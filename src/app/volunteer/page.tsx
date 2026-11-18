"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  CheckCircle2,
  Heart,
  ArrowRight,
  ShieldCheck,
  Award,
  Calendar,
  Sparkles,
  Mail,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { ORGANIZATION } from "@/data/organization";

const VOLUNTEER_AREAS = [
  {
    title: "Education & Mentorship",
    description: "Tutor students supported by our scholarships and conduct literacy workshops.",
  },
  {
    title: "Medical Awareness & Triage",
    description: "Assist coordinators during healthcare screenings and hospital verification liaisons.",
  },
  {
    title: "Community Support",
    description: "Visit applicant communities for respectful on-ground family assessment.",
  },
  {
    title: "Food Distribution Logistics",
    description: "Assemble and organize monthly nutrition packages at our Lahore coordination center.",
  },
  {
    title: "Digital & Technical Assistance",
    description: "Contribute software development, graphic design, and content creation skills.",
  },
  {
    title: "Communication & Outreach",
    description: "Share verified foundation announcements and educational humanitarian material.",
  },
  {
    title: "Event Organization",
    description: "Coordinate community blood drives, health camps, and seasonal winter supply drives.",
  },
  {
    title: "Fundraising Support",
    description: "Introduce the foundation to prospective community supporters once authorized.",
  },
];

export default function VolunteerPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Lahore");
  const [profession, setProfession] = useState("");
  const [selectedArea, setSelectedArea] = useState("Food Distribution Logistics");
  const [notes, setNotes] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleVolunteerInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      setErrorMsg("Please provide your name and phone number.");
      return;
    }

    if (ORGANIZATION.contact.hasConfiguredEmail) {
      const subject = encodeURIComponent(`Volunteer Inquiry: ${selectedArea} - ${fullName} (${city})`);
      const body = encodeURIComponent(
        `Dear AasraLife Foundation Volunteer Coordination Desk,\n\nI wish to register my interest as a volunteer:\n\n` +
          `Full Name: ${fullName}\n` +
          `Contact Phone: ${phone}\n` +
          `Email: ${email || "Not provided"}\n` +
          `City: ${city}\n` +
          `Profession / Field: ${profession || "Not specified"}\n` +
          `Preferred Area: ${selectedArea}\n\n` +
          `Notes / Availability:\n${notes}\n\n` +
          `I look forward to attending orientation once volunteer cohorts are scheduled.`
      );
      window.location.href = `mailto:${ORGANIZATION.contact.email}?subject=${subject}&body=${body}`;
    } else {
      setErrorMsg(
        "Official organizational email is currently in pre-launch configuration. Please consult the contact details below."
      );
    }
  };

  return (
    <div className="bg-[#FFF9EE] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#064B35] bg-[#EAF3ED] px-3.5 py-1.5 rounded-full border border-[#064B35]/15 inline-block">
              Community Mobilization
            </span>
            <h1 className="font-heading font-extrabold text-[#172B26] tracking-tight">
              Become a <span className="text-[#064B35]">Volunteer.</span>
            </h1>
            <p className="p-body text-base sm:text-lg leading-relaxed">
              Your time, skills, and compassion can help create opportunities for communities in need.
              Join a dedicated group of students, professionals, and citizens committed to compassionate,
              transparent service across Pakistan.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-[#064B35]">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D6A943]" />
                <span>Meaningful Community Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#D6A943]" />
                <span>Flexible Weekend Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D6A943]" />
                <span>Respectful & Safe Environment</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-white bg-[#043526]">
            <Image
              src="/images/volunteers/volunteer-action.jpg"
              alt="Volunteers actively packing and organizing humanitarian aid boxes"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* 1. Why Volunteer With Us? */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#064B35]/15 shadow-md space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D6A943] block">
            Impact Culture
          </span>
          <h2 className="font-heading font-extrabold text-2xl text-[#172B26]">
            Why Volunteer With AasraLife Foundation?
          </h2>
          <p className="p-body text-sm sm:text-base leading-relaxed">
            At AasraLife, volunteers are not passive spectators; they are the core driving force of our grassroots mission.
            You will participate in structured, transparent welfare operations where every effort directly benefits a verified
            family. We value your intellectual contribution, encourage leadership, and ensure an ethical environment that
            strictly protects beneficiary dignity.
          </p>
        </div>

        {/* 2. Areas Where Volunteers Can Help (8 Areas) */}
        <div className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#064B35]">
              Opportunity Roster
            </span>
            <h2 className="font-heading font-extrabold text-2xl text-[#172B26]">
              Areas Where Volunteers Can Help
            </h2>
            <p className="text-xs sm:text-sm text-[#718078]">
              We match volunteer passions with meaningful grassroots welfare tasks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VOLUNTEER_AREAS.map((area) => (
              <div
                key={area.title}
                className="p-6 rounded-2xl bg-white border border-[#064B35]/10 shadow-sm space-y-2 hover:border-[#064B35]/30 transition-colors"
              >
                <h3 className="font-heading font-bold text-base text-[#172B26]">
                  {area.title}
                </h3>
                <p className="text-xs text-[#718078] leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Volunteer Guidelines & Responsibilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-[#064B35]/15 shadow-md space-y-4">
            <h3 className="font-heading font-bold text-xl text-[#172B26] border-b border-[#064B35]/10 pb-3">
              Volunteer Responsibilities
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#172B26]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#064B35] shrink-0 mt-0.5" />
                <span>Punctuality and reliability during committed volunteer shifts and packing drives</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#064B35] shrink-0 mt-0.5" />
                <span>Respectful, courteous communication when interacting with community members</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#064B35] shrink-0 mt-0.5" />
                <span>Honest reporting of field assessment findings without personal bias</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#064B35]/15 shadow-md space-y-4">
            <h3 className="font-heading font-bold text-xl text-[#172B26] border-b border-[#064B35]/10 pb-3">
              Ethical Volunteer Guidelines
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#172B26]">
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#D6A943] shrink-0 mt-0.5" />
                <span><strong>No Unauthorized Photography:</strong> Never take or post photos of beneficiaries on personal social media</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#D6A943] shrink-0 mt-0.5" />
                <span><strong>Strict Confidentiality:</strong> Personal beneficiary data and medical files must remain completely private</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#D6A943] shrink-0 mt-0.5" />
                <span><strong>Zero Solicitation:</strong> Do not solicit personal funds or gifts in the foundation&apos;s name</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4. Frontend-Only Volunteer Inquiry Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#064B35]/15 shadow-xl max-w-3xl mx-auto space-y-6">
          <div className="border-b border-[#064B35]/10 pb-4">
            <h2 className="font-heading font-extrabold text-xl text-[#172B26]">
              Volunteer Expression of Interest
            </h2>
            <p className="text-xs text-[#718078]">
              Frontend-only form. Drafts a pre-addressed email message to our volunteer coordinator. No database storage.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-50 text-rose-800 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleVolunteerInquiry} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#172B26]">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
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
                  City of Residence
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Lahore, Faisalabad"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#064B35]/20 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064B35]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#172B26]">
                  Profession / Degree Program
                </label>
                <input
                  type="text"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  placeholder="e.g. Student (LLB / CS / MBBS) or Professional"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#064B35]/20 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064B35]"
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#172B26]">
                  Preferred Volunteer Area
                </label>
                <select
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#064B35]/20 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#064B35]"
                >
                  {VOLUNTEER_AREAS.map((a) => (
                    <option key={a.title} value={a.title}>
                      {a.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#172B26]">
                  Brief Motivation or Availability Notes
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share days of the week you are available or specific skills you would like to offer..."
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
                <span className="font-bold block">Volunteer Desk Contact:</span>
                <p>
                  Volunteer applications will be invited via email once formal cohort registrations open.
                  Contact our coordination desk at: <strong>{ORGANIZATION.contact.email}</strong>
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
