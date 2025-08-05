import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
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
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
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
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  )
}