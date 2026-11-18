import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgramDetailView from "@/components/programs/ProgramDetailView";
import { PROGRAMS } from "@/data/programs";

export const metadata: Metadata = {
  title: "Aasra Food Support — Monthly Staple Nutrition Packages",
  description:
    "Providing 30-day standardized staple nutrition packages to destitute families, elderly citizens, and daily wage earners facing acute crisis in Pakistan.",
};

export default function FoodSupportPage() {
  const program = PROGRAMS.find((p) => p.slug === "food-support");
  if (!program) return notFound();
  return <ProgramDetailView program={program} />;
}
