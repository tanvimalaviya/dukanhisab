import CTASection from '@/components/CTASection'
import FeaturesSection from '@/components/FeatureSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import ReminderSection from '@/components/ReminderSection'
import FeaturesSections from '@/components/ReminderSection'
import Security from '@/components/SecuritySection'
import Testimonials from '@/components/Testimonial'
import WhyOurApp from '@/components/Whyourapp'
import React from 'react'

const page = () => {
  return (
    <div>
     <Navbar/>
     <HeroSection/>
     <FeaturesSection/>
     <Security/>
     <WhyOurApp/>
     <ReminderSection/>
     <Testimonials/>
     <CTASection/>
     <Footer/>
    </div>
  )
}

export default page
