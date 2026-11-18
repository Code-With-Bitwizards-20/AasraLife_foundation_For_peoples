import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgramDetailView from "@/components/programs/ProgramDetailView";
import { PROGRAMS } from "@/data/programs";

export const metadata: Metadata = {
  title: "Aasra Livelihood Program — Small Business & Vocational Grants",
  description:
    "Empowering hardworking breadwinners with industrial sewing machines, pushcarts, tools, and inventory grants to establish sustainable daily income.",
};

export default function LivelihoodPage() {
  const program = PROGRAMS.find((p) => p.slug === "livelihood");
  if (!program) return notFound();
  return <ProgramDetailView program={program} />;
}
