import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgramDetailView from "@/components/programs/ProgramDetailView";
import { PROGRAMS } from "@/data/programs";

export const metadata: Metadata = {
  title: "Aasra Women's Empowerment — Vocational Skills & Enterprise",
  description:
    "Empowering widowed mothers and vulnerable female heads of households through sewing equipment, handicraft training, and dignified home-based earning opportunities.",
};

export default function WomensEmpowermentPage() {
  const program = PROGRAMS.find((p) => p.slug === "womens-empowerment");
  if (!program) return notFound();
  return <ProgramDetailView program={program} />;
}
