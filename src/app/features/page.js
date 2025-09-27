import AppFlow from '@/components/AppFlow'
import HeroSection from '@/components/CommonHero'
import CTASection from '@/components/CTASection'
import DetailedFeatures from '@/components/DetailedFeature'
import FeatureHighlights from '@/components/FeatureHighlight'
import FeatureHighlight from '@/components/FeatureSection'
import FeatureShowcase from '@/components/FeatureShowcase'
import FeatureWhyChoose from '@/components/FeatureWhychoose'
import Workflow from '@/components/Workflow'
import React from 'react'

const page = () => {
  return (
    <div>
        {/* Hero Section */}
      <HeroSection
        title="Features Of Dukanhisab"
        subtitle="Powerful Features to Simplify Your Store Management"
        imageSrc="/herobg.png"
      />
      
     <FeatureShowcase/>
     {/* <FeatureHighlights/> */}
      <DetailedFeatures/>
      {/* <Workflow/> */}
      <AppFlow/>  
       {/* usinG screenshot */}
      <FeatureWhyChoose/>
      <CTASection/>
    </div>
  )
}

export default page
