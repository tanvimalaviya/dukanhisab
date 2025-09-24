import HeroSection from '@/components/CommonHero'
import ContactCard from '@/components/Contactcard'
import ContactForm from '@/components/Contactform'
import FAQSection from '@/components/FAQ'
import React from 'react'

const page = () => {
  return (
    <div>
       <HeroSection
        title="Contact us"
        subtitle="We’re here to answer your questions and support your business journey."
        imageSrc="/herobg.png"
      />
     
      <ContactForm/>
       {/* <ContactCard/> */}
      <FAQSection/>
      
    </div>
  )
}

export default page
