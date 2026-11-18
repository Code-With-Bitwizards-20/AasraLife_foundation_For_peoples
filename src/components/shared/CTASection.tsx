import Link from "next/link";
import { ArrowRight, Heart, ShieldCheck, Sparkles } from "lucide-react";
import { DONATIONS_ENABLED } from "@/lib/constants";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
  showVolunteerLink?: boolean;
}

export default function CTASection({
  title = "Together, We Can Create Meaningful Change.",
  subtitle = "Foundational Humanitarian Action",
  description = "Join our mission to bridge compassion and sustainable dignity. Whether as a field volunteer, health partner, or supporter, your presence makes enduring impact possible.",
  primaryBtnText = "Explore Our Programs",
  primaryBtnHref = "/programs",
  secondaryBtnText,
  secondaryBtnHref = "/volunteer",
  showVolunteerLink = true,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#043526] via-[#064B35] to-[#022319] py-16 sm:py-24 text-white">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D6A943]/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#D6A943]/40 text-[#D6A943] text-xs font-bold tracking-widest uppercase backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{subtitle}</span>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="font-heading font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#FFF9EE]/85 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href={primaryBtnHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#D6A943] text-[#172B26] font-bold text-sm sm:text-base hover:bg-[#E5B854] shadow-xl hover:shadow-2xl transition-all active:scale-[0.98]"
          >
            <span>{primaryBtnText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {showVolunteerLink && (
            <Link
              href={secondaryBtnHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white border border-white/25 font-bold text-sm sm:text-base hover:bg-white/20 transition-all backdrop-blur-md"
            >
              <span>{secondaryBtnText || "Become a Volunteer"}</span>
            </Link>
          )}

          <Link
            href="/donate"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-transparent hover:bg-white/10 text-[#FFF9EE] font-bold text-sm sm:text-base transition-colors"
          >
            <Heart className="w-4 h-4 text-[#D6A943] fill-[#D6A943]" />
            <span>{DONATIONS_ENABLED ? "Donate Now" : "Donation Guidelines"}</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#FFF9EE]/75">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#D6A943]" />
            Strict Anti-Humiliation Dignity Protocol
          </span>
          <span className="text-white/30">•</span>
          <span>100% Pre-Disbursement Verification Standard</span>
          <span className="text-white/30">•</span>
          <span>Lahore Regional Coordination Desk</span>
        </div>
      </div>
    </section>
  );
}
