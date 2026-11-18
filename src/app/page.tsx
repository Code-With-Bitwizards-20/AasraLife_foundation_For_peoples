import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import MissionPillars from "@/components/home/MissionPillars";
import ProgramsOverview from "@/components/home/ProgramsOverview";
import DonationImpactGuide from "@/components/home/DonationImpactGuide";
import OurApproach from "@/components/home/OurApproach";
import ImpactStatementSection from "@/components/home/ImpactStatementSection";
import VolunteerCallout from "@/components/home/VolunteerCallout";
import TransparencyCommitment from "@/components/home/TransparencyCommitment";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Introduction */}
      <Introduction />

      {/* Section 3: Our Mission */}
      <MissionPillars />

      {/* Section 4: Our Programs */}
      <ProgramsOverview />

      {/* Section 5: How Donations Make a Difference */}
      <DonationImpactGuide />

      {/* Section 6: Our Approach */}
      <OurApproach />

      {/* Section 7: Our Impact */}
      <ImpactStatementSection />

      {/* Section 8: Volunteer Section */}
      <VolunteerCallout />

      {/* Section 9: Transparency */}
      <TransparencyCommitment />

      {/* Section 10: Final CTA */}
      <FinalCTA />
    </>
  );
}
