'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { useLanguage } from '@/context/LanguageContext'
import { useSectionContent } from '@/hooks/useContent'

interface HeroProps {
  title?: string
  subtitle?: string
  showButton?: boolean
  backgroundImage?: string
  isHomepage?: boolean
  pageKey?: string // For page-specific hero content
}

export default function Hero({
  title,
  subtitle,
  showButton = false,
  backgroundImage = '/images/hero-image.jpg',
  isHomepage = false,
  pageKey,
}: HeroProps) {
  const { language } = useLanguage()
  const { content: heroContent, loading } = useSectionContent('hero')

  // Get content based on whether it's homepage or specific page
  const getHeroContent = () => {
    if (!heroContent) return null
    
    if (isHomepage) {
      return heroContent.homepage
    } else if (pageKey && heroContent.pages) {
      return heroContent.pages[pageKey as keyof typeof heroContent.pages] || null
    }
    return null
  }

  const currentHeroContent = getHeroContent()
  
  // Use props as fallback if content is not loaded
  const displayTitle = currentHeroContent?.title || title
  const displaySubtitle = currentHeroContent?.subtitle || subtitle
  const displayButtonText = (currentHeroContent && 'buttonText' in currentHeroContent) ? currentHeroContent.buttonText : undefined
  const displayButtonLink = (currentHeroContent && 'buttonLink' in currentHeroContent) ? currentHeroContent.buttonLink : "/about"

  const coloredTitle = (
    <h1 className="mb-8 bg-black/10 rounded-lg p-4" style={isHomepage ? { fontSize: '4.2rem' } : { fontSize: '4rem' }} key={language}>
      {isHomepage ? (
        <>
          <span className="text-primary">E</span>
          <span className="text-secondary">n</span>
          <span className="text-tertiary">j</span>
          <span className="text-quaternary">o</span>
          <span className="text-primary">y</span> Learning With Us
        </>
      ) : (
        displayTitle
      )}
    </h1>
  )

  return (
    <section
      className={cn(
        'relative flex items-center justify-center text-center text-white overflow-hidden',
        isHomepage ? 'h-screen pt-[105px]' : 'h-[40vh] pt-[105px]'
      )}
    >
      {/* Background image */}
      <motion.img
        src={backgroundImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="relative z-10 max-w-4xl px-8"
      >
        {/* removed the padding top */}
        <div className="mb-8">
          {coloredTitle}
          
          {displaySubtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 bg-black/10 rounded-lg p-6 font-kosugi text-[2rem]"
              key={`${language}-subtitle`}
            >
              {displaySubtitle}
            </motion.p>
          )}
        </div>

        {(showButton && displayButtonText) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            key={`${language}-button`}
          >
            <Link
              href={displayButtonLink}
              className='btn'
              style={{ fontSize: '1.6rem' }}
            >
              <i className="fas fa-chevron-right mr-2"></i>
              {displayButtonText}
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}