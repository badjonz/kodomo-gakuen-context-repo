import React from 'react'
import Hero from '@/components/sections/Hero'
import AgeGroups from '@/components/sections/AgeGroups'
import AboutInfo from '@/components/sections/AboutInfo'
import BlogSection from '@/components/sections/BlogSection'
import AnnouncementModal from '@/components/ui/AnnouncementModal'

export default function HomePage() {
  return (
    <>
      {/* Announcement Modal */}
      <AnnouncementModal />
      
      {/* Hero Section */}
      <Hero
        isHomepage={true}
        subtitle="ふれあい保育・感謝・思いやり"
        showButton={true}
        backgroundImage="/images/hero-image.jpg"
      />
      
      {/* Age Groups Section */}
      <AgeGroups />
      
      {/* About Information Section */}
      <AboutInfo />
      
      {/* Blog Section */}
      <BlogSection />
    </>
  )
}