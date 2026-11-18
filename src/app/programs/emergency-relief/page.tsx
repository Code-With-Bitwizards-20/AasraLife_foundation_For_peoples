import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgramDetailView from "@/components/programs/ProgramDetailView";
import { PROGRAMS } from "@/data/programs";

export const metadata: Metadata = {
  title: "Aasra Emergency Relief — Disaster Response & Survival Kits",
  description:
    "Humanitarian interventions providing clean drinking water, temporary shelter tarpaulins, winter blankets, and food survival rations during natural disasters in Pakistan.",
};

export default function EmergencyReliefPage() {
  const program = PROGRAMS.find((p) => p.slug === "emergency-relief");
  if (!program) return notFound();
  return <ProgramDetailView program={program} />;
}
