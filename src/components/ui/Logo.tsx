import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "default" | "white";
  showTagline?: boolean;
  className?: string;
}

export default function Logo({ variant = "default", showTagline = true, className = "" }: LogoProps) {
  const isWhite = variant === "white";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A943] rounded-xl transition-transform hover:scale-[1.01] ${className}`}
      aria-label="AasraLife Foundation — Return to Homepage"
    >
      {/* Emblem */}
      <div
        className={`relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center p-0.5 shadow-sm transition-transform group-hover:scale-105 shrink-0 overflow-hidden ${
          isWhite
            ? "bg-white/10 border border-white/20"
            : "bg-white border border-[#D6A943]/40"
        }`}
      >
        <Image
          src="/images/brand/aasralife-emblem.png"
          alt="AasraLife Foundation Emblem"
          width={48}
          height={48}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <span
          className={`font-heading font-extrabold text-lg sm:text-xl tracking-tight leading-none ${
            isWhite ? "text-white" : "text-[#064B35]"
          }`}
        >
          Aasra<span className="text-[#D6A943]">Life</span>
        </span>
        {showTagline && (
          <span
            className={`text-[9.5px] sm:text-[10px] font-semibold tracking-[0.22em] uppercase mt-1 ${
              isWhite ? "text-[#EAF3ED]/80" : "text-[#718078]"
            }`}
          >
            FOUNDATION
          </span>
        )}
      </div>
    </Link>
  );
}
