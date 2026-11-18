"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Sparkles, ShieldCheck, Compass } from "lucide-react";
import { ORGANIZATION } from "@/data/organization";
import { DONATIONS_ENABLED } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-[#EAF3ED]/35 to-[#FFF9EE] pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-28">
      {/* Futuristic Ambient Lighting Orbs */}
      <div className="absolute top-0 right-0 -mr-28 -mt-28 w-[420px] h-[420px] rounded-full bg-[#EAF3ED] blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-28 -mb-28 w-[380px] h-[380px] rounded-full bg-[#F7E7C4] blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Supporting Message & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Humanitarian Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#064B35]/15 text-[#064B35] text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#D6A943] animate-pulse" />
              <span>AasraLife Foundation — Humanitarian Platform</span>
            </div>

            {/* Editorial Headline */}
            <div className="space-y-3">
              <h1 className="font-heading font-extrabold text-[#172B26] tracking-tight">
                Connecting <span className="text-[#064B35]">Humanity.</span>
                <br />
                Creating{" "}
                <span className="text-[#D6A943] font-editorial italic font-normal">
                  Opportunities.
                </span>
              </h1>
              <p className="font-editorial italic text-lg sm:text-xl text-[#064B35] font-semibold pt-1">
                &ldquo;{ORGANIZATION.supportingStatement}&rdquo;
              </p>
            </div>

            {/* High-Contrast Description */}
            <p className="text-base sm:text-lg leading-relaxed text-[#2D433B] max-w-2xl mx-auto lg:mx-0">
              AasraLife Foundation is committed to supporting vulnerable
              communities through dignified healthcare access, transparent food
              security, women&apos;s empowerment, education assistance, and
              sustainable livelihood tooling.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href="/mission-vision"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#064B35] text-white font-bold text-sm sm:text-base hover:bg-[#043526] shadow-lg shadow-[#064B35]/20 hover:shadow-xl transition-all duration-300 active:scale-[0.98] border border-[#D6A943]/30 group"
              >
                <span>Explore Our Mission</span>
                <ArrowRight className="w-4 h-4 text-[#D6A943] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/programs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-[#064B35] border border-[#064B35]/20 font-bold text-sm sm:text-base hover:bg-[#EAF3ED] hover:border-[#064B35]/40 transition-all shadow-sm"
              >
                <Compass className="w-4 h-4 text-[#064B35]" />
                <span>Discover Programs</span>
              </Link>

              <Link
                href="/donate"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-transparent hover:bg-[#EAF3ED]/70 text-[#064B35] font-bold text-sm sm:text-base transition-colors"
              >
                <Heart className="w-4 h-4 text-[#D6A943] fill-[#D6A943]" />
                <span>{DONATIONS_ENABLED ? "Donate" : "Support Us"}</span>
              </Link>
            </div>

            {/* Sub-credibility Tokens */}
            <div className="pt-6 border-t border-[#064B35]/12 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A5B53] block">
                  Core Guiding Principle
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#064B35] mt-0.5 block">
                  Every Life Deserves Dignity
                </span>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A5B53] block">
                  Initial Scope
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#064B35] mt-0.5 block">
                  Lahore, Pakistan
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A5B53] block">
                  Ethical Governance
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#064B35] mt-0.5 flex items-center justify-center lg:justify-start gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D6A943]" />
                  <span>100% Pre-Disbursement Verification</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Cinematic Photography with Glassmorphic Overlays */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gradient frame */}
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-[#064B35]/20 via-[#D6A943]/20 to-transparent blur-sm" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] bg-[#043526]">
                <Image
                  src="/images/hero/hero-humanitarian.jpg"
                  alt="AasraLife humanitarian volunteers assisting community members in Pakistan with care and dignity"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center"
                />

                {/* Gentle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#043526]/85 via-transparent to-black/20" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold">
                  <Sparkles className="w-3 h-3 text-[#D6A943]" />
                  <span>Verified Field Mission</span>
                </div>

                {/* Bottom Floating Glass Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#064B35]/15 shadow-xl">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-[#EAF3ED] flex items-center justify-center text-[#064B35] shrink-0">
                        <Heart className="w-5 h-5 text-[#D6A943] fill-[#D6A943]" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold text-[#172B26] truncate">
                          Humanitarian Welfare
                        </div>
                        <div className="text-[11px] text-[#4A5B53] truncate">
                          Dignified Community Care
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/programs"
                      className="px-4 py-2 rounded-xl bg-[#064B35] text-white text-xs font-bold hover:bg-[#043526] transition-colors shrink-0 shadow-sm"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
