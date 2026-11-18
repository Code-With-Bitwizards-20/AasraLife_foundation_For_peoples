import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgramDetailView from "@/components/programs/ProgramDetailView";
import { PROGRAMS } from "@/data/programs";

export const metadata: Metadata = {
  title: "Aasra Medical Care — Healthcare & Surgery Assistance",
  description:
    "Direct healthcare and surgical assistance for underprivileged patients requiring life-saving treatment, diagnostic care, and chronic medicines in Pakistan.",
};

export default function MedicalAidPage() {
  const program = PROGRAMS.find((p) => p.slug === "medical-aid");
  if (!program) return notFound();
  return <ProgramDetailView program={program} />;
}
