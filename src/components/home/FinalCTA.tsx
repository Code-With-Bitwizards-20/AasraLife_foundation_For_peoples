"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import { DONATIONS_ENABLED } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-[#064B35] text-white relative overflow-hidden">
      {/* Decorative background glow circles */}
      <div className="absolute top-0 right-1/4 -mt-20 w-80 h-80 rounded-full bg-[#043526] blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -mb-20 w-80 h-80 rounded-full bg-[#D6A943]/20 blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#D6A943] text-xs font-semibold">
          <Sparkles className="w-4 h-4" />
          <span>A Collective Humanitarian Effort</span>
        </div>

        <div className="space-y-4">
          <h2 className="font-heading font-extrabold text-white text-title-1 tracking-tight">
            Together, We Can Create a Better Tomorrow.
          </h2>
          <p className="font-editorial italic text-lg sm:text-xl text-[#F7E7C4] max-w-xl mx-auto">
            Humanity grows stronger when we stand together.
          </p>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Every life deserves dignity, every child deserves schooling, and every family deserves
            the opportunity to thrive. Discover our initiatives or contribute your time and talents.
          </p>
        </div>

        {/* Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/programs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#D6A943] text-[#172B26] font-bold text-sm sm:text-base hover:bg-[#b88f34] transition-all shadow-xl active:scale-95"
          >
            <span>Explore Our Programs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/volunteer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base transition-all border border-white/25"
          >
            <span>Get Involved</span>
          </Link>

          <Link
            href="/donate"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-4 rounded-full bg-transparent hover:bg-white/5 text-[#F7E7C4] font-semibold text-sm sm:text-base transition-colors"
          >
            <Heart className="w-4 h-4 text-[#D6A943] fill-[#D6A943]" />
            <span>{DONATIONS_ENABLED ? "Donate" : "Donation Info"}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
