"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, ArrowRight, Heart, Calendar, Award, CheckCircle2 } from "lucide-react";

export default function VolunteerCallout() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFF9EE] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#064B35]/15 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3ED] border border-[#064B35]/15 text-[#064B35] text-xs font-semibold">
              <Users className="w-4 h-4 text-[#D6A943]" />
              <span>Community Service & Engagement</span>
            </div>

            <h2 className="font-heading font-extrabold text-[#172B26] tracking-tight">
              Be Part of Something <span className="text-[#064B35]">Meaningful</span>
            </h2>

            <p className="p-body text-base sm:text-lg">
              Your time, skills, and compassion can help create opportunities for communities in need.
              Whether you are an aspiring student, an educator, a healthcare professional, or an empathetic citizen,
              there is a place for your talents in our volunteer community.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#172B26] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#064B35] shrink-0" />
                <span>Field Need Assessments & Vetting</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#172B26] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#064B35] shrink-0" />
                <span>Ration Packaging & Logistics</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#172B26] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#064B35] shrink-0" />
                <span>Student Tutoring & Mentorship</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#172B26] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#064B35] shrink-0" />
                <span>Community Awareness Outreach</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/volunteer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#064B35] text-white font-bold text-xs sm:text-sm hover:bg-[#043526] transition-all shadow-md group"
              >
                <span>Become a Volunteer</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#D6A943]" />
              </Link>

              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#064B35] border border-[#064B35]/20 font-bold text-xs sm:text-sm hover:bg-[#EAF3ED] transition-all"
              >
                <span>Learn About Our Team</span>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-2 border-white bg-[#043526]">
            <Image
              src="/images/volunteers/volunteer-action.jpg"
              alt="AasraLife volunteers actively assembling aid packages with smiles"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
