import HeroSection from "@/components/CommonHero";
import Compareplan from "@/components/Compareplan";
import CTAabout from "@/components/CTAabout";
import FAQSection from "@/components/FAQ";
import PricingPage from "@/components/PricingCard";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection
        title="Affordable Pricing for Every Business"
        subtitle="          Simple, transparent plans designed to help your store grow.
"
        imageSrc="/herobg.png"
      />
      <PricingPage />
      <Compareplan />
      <FAQSection/>
      <CTAabout />
    </div>
  );
};

export default page;
