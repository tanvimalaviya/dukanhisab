import HeroSection from "@/components/CommonHero";
import Mission from "@/components/Mission";
import ThinkingBehind from "@/components/ThinkingBehind";
import Image from "next/image";



export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="About Dukanhisab"
        subtitle="Simplifying store management for small & medium businesses."
        imageSrc="/herobg.png"
      />

      {/* Mission Section */}
     <Mission/>
     <ThinkingBehind/>
    </div>
  );
}
