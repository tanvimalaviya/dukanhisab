import HeroSection from "@/components/CommonHero";
import CTAabout from "@/components/CTAabout";
import Mission from "@/components/Mission";
import OurStory from "@/components/Ourstory";
import CoreValues from "@/components/OurValuesAbout";
import ThinkingBehind from "@/components/ThinkingBehind";
import WhyOurApp from "@/components/Whyourapp";
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
     <CoreValues/>
     <ThinkingBehind/>
     {/* <OurStory/> */}
     <WhyOurApp/>
     <CTAabout/>
    </div>
  );
}
