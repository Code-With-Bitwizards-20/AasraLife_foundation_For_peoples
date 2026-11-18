"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { ORGANIZATION } from "@/data/organization";
import { DONATIONS_ENABLED } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF9EE] via-[#EAF3ED]/40 to-[#FFF9EE] pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-32">
      {/* Decorative blurred backdrops */}
      <div className="absolute top-0 right-0 -mr-28 -mt-28 w-96 h-96 rounded-full bg-[#EAF3ED] blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-28 -mb-28 w-96 h-96 rounded-full bg-[#F7E7C4] blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3ED] border border-[#064B35]/15 text-[#064B35] text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-[#D6A943]" />
              <span>AasraLife Foundation — Humanitarian Welfare</span>
            </div>

            <div className="space-y-2">
              <h1 className="font-heading font-extrabold text-[#172B26] tracking-tight">
                Connecting <span className="text-[#064B35]">Humanity.</span>
                <br />
                Creating <span className="text-[#D6A943] font-editorial italic font-normal">Opportunities.</span>
              </h1>
              <p className="font-editorial italic text-base sm:text-lg text-[#064B35] font-semibold pt-1">
                {ORGANIZATION.supportingStatement}
              </p>
            </div>

            <p className="p-body max-w-2xl mx-auto lg:mx-0">
              AasraLife Foundation is committed to supporting vulnerable communities through
              humanitarian assistance, education, healthcare, food support, women&apos;s empowerment,
              emergency relief, and sustainable livelihood opportunities.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/mission-vision"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#064B35] text-white font-bold text-sm sm:text-base hover:bg-[#043526] shadow-lg shadow-[#064B35]/15 hover:shadow-xl transition-all active:scale-[0.98]"
              >
                <span>Explore Our Mission</span>
                <ArrowRight className="w-4 h-4 text-[#D6A943]" />
              </Link>

              <Link
                href="/programs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#064B35] border border-[#064B35]/20 font-bold text-sm sm:text-base hover:bg-[#EAF3ED] transition-all"
              >
                <span>Discover Our Programs</span>
              </Link>

              <Link
                href="/donate"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-full bg-transparent hover:bg-[#EAF3ED]/60 text-[#064B35] font-bold text-sm sm:text-base transition-colors"
              >
                <Heart className="w-4 h-4 text-[#D6A943] fill-[#D6A943]" />
                <span>Support Humanity</span>
              </Link>
            </div>

            {/* Subtle Credibility Badges */}
            <div className="pt-6 border-t border-[#064B35]/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#718078] block">
                  Ethical Guiding Principle
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#064B35] mt-0.5 block">
                  Every Life Deserves Dignity
                </span>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#718078] block">
                  Initial Scope
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#064B35] mt-0.5 block">
                  Lahore, Pakistan
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#718078] block">
                  Governance
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#064B35] mt-0.5 flex items-center justify-center lg:justify-start gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D6A943]" />
                  <span>Documented Accountability</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gradient frame */}
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-[#064B35]/20 via-[#D6A943]/20 to-transparent blur-sm" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] bg-[#043526]">
                <Image
                  src="/images/hero/hero-humanitarian.jpg"
                  alt="AasraLife humanitarian volunteers assisting community members in Pakistan with care and dignity"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center"
                />

                {/* Gentle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#043526]/80 via-transparent to-black/20" />

                {/* Bottom Floating Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#064B35]/15 shadow-lg">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#EAF3ED] flex items-center justify-center text-[#064B35]">
                        <Heart className="w-4 h-4 text-[#D6A943] fill-[#D6A943]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#172B26]">Humanitarian Welfare</div>
                        <div className="text-[11px] text-[#718078]">Dignified Community Care</div>
                      </div>
                    </div>
                    <Link
                      href="/programs"
                      className="px-3.5 py-1.5 rounded-full bg-[#064B35] text-white text-xs font-bold hover:bg-[#043526] transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
