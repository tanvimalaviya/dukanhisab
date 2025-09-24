import HeroSection from '@/components/CommonHero'
import FAQSection from '@/components/FAQ'
import React from 'react'

const page = () => {
  return (
    <div className=''>
            {/* Hero Section */}
      <HeroSection
        title="Have Questions?"
        subtitle="“Find answers to the most common questions about DukanHisab.”"
        imageSrc="/herobg.png"
      />

      <FAQSection/>
    </div>
  )
}

export default page
