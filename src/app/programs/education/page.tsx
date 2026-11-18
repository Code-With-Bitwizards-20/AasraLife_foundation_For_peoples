import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgramDetailView from "@/components/programs/ProgramDetailView";
import { PROGRAMS } from "@/data/programs";

export const metadata: Metadata = {
  title: "Aasra Education Support — Books, Supplies & School Retention",
  description:
    "Educational assistance, textbooks, uniforms, and fee support for students from underprivileged backgrounds across Pakistan.",
};

export default function EducationPage() {
  const program = PROGRAMS.find((p) => p.slug === "education");
  if (!program) return notFound();
  return <ProgramDetailView program={program} />;
}
