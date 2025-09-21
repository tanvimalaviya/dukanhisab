import FeaturesSection from '@/components/FeatureSection'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import WhyOurApp from '@/components/Whyourapp'
import React from 'react'

const page = () => {
  return (
    <div>
     <Navbar/>
     <HeroSection/>
     <FeaturesSection/>
     <WhyOurApp/>
    </div>
  )
}

export default page
