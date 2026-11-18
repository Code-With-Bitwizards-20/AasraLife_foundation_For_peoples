"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Heart } from "lucide-react";

export default function Introduction() {
  return (
    <section className="py-20 sm:py-28 bg-white border-y border-[#064B35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left: Heading, Description, CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3ED] text-[#064B35] text-xs font-semibold border border-[#064B35]/15">
              <Heart className="w-3.5 h-3.5 text-[#D6A943]" />
              <span>Purpose & Humanitarian Dedication</span>
            </div>

            <div className="space-y-2">
              <h2 className="font-heading font-extrabold text-[#172B26] tracking-tight">
                A Helping Hand. <br />
                <span className="text-[#064B35]">A Better Tomorrow.</span>
              </h2>
              <p className="font-editorial italic text-base sm:text-lg text-[#064B35] font-semibold">
                Bridging human compassion and sustainable dignity.
              </p>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-[#2D433B]">
              AasraLife Foundation was conceived out of a profound commitment to
              human dignity. Across vulnerable communities, sudden medical
              shocks or economic hardship frequently threaten basic survival,
              depriving families of essential healthcare, forcing children out
              of schools, and limiting hardworking people to precarious
              day-to-day existence.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-[#2D433B]">
              We believe that genuine humanitarian action must do more than
              offer temporary relief. By establishing transparent assistance
              systems, supporting small-business opportunities, and ensuring
              compassionate medical aid, we work to build long-term pathways
              toward self-reliance and community resilience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#172B26] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#064B35] shrink-0" />
                <span>Preserving Personal Self-Respect</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#172B26] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#064B35] shrink-0" />
                <span>Practical Livelihood Opportunities</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#172B26] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#064B35] shrink-0" />
                <span>Life-Saving Healthcare Support</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#172B26] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#064B35] shrink-0" />
                <span>Community-Driven Accountability</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#064B35] text-white font-bold text-xs sm:text-sm hover:bg-[#043526] transition-all shadow-md group"
              >
                <span>Read About Our Foundation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#D6A943]" />
              </Link>

              <Link
                href="/mission-vision"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#064B35] hover:text-[#D6A943] transition-colors"
              >
                Our Mission & Vision →
              </Link>
            </div>
          </div>

          {/* Right: Meaningful Humanitarian Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white aspect-[4/3] sm:aspect-[16/11] bg-[#043526]">
              <Image
                src="/images/about/about-hero.jpg"
                alt="AasraLife community team and volunteers standing in unity in Lahore"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white p-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D6A943] block">
                  Community Solidarity
                </span>
                <p className="text-xs text-white/95 mt-0.5">
                  Dedicated volunteers uniting to serve Pakistan&apos;s vulnerable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
