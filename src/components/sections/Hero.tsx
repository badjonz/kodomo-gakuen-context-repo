'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { useLanguage } from '@/context/LanguageContext'
import { useSectionContent } from '@/hooks/useContent'
import { useFontClass } from '@/hooks/useFontClass'

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
  const fontClass = useFontClass()

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
  const displayButtonText: string | undefined = (currentHeroContent && 'buttonText' in currentHeroContent) ? currentHeroContent.buttonText as string : undefined
  const displayButtonLink: string = (currentHeroContent && 'buttonLink' in currentHeroContent) ? currentHeroContent.buttonLink as string : "/about"

  // Homepage gets special colored title treatment
  const coloredTitle = isHomepage ? (
    <h1 className={cn("mb-8 bg-black/10 rounded-lg p-4", fontClass)} style={{ fontSize: '4.2rem' }} key={language}>
      <span className="text-primary">E</span>
      <span className="text-secondary">n</span>
      <span className="text-tertiary">j</span>
      <span className="text-quaternary">o</span>
      <span className="text-primary">y</span> Learning With Us
    </h1>
  ) : (
    // Standardized non-homepage title: consistent 4xl responsive sizing
    <h1 className={cn("text-[3rem] md:text-[3.4rem] lg:text-[3.6rem] font-bold mb-8 bg-black/10 rounded-lg p-4", fontClass)} key={language}>
      {displayTitle}
    </h1>
  )

  return (
    <section
      className={cn(
        'relative flex items-center justify-center text-center text-white overflow-hidden',
        // Homepage: full screen, Non-homepage: standardized 40vh with consistent header offset
        isHomepage ? 'h-screen pt-[105px]' : 'h-[40vh] pt-[105px]'
      )}
    >
      {/* Background image - unified animation approach */}
      <motion.img
        src={backgroundImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
      />

      {/* Overlay - consistent across all pages */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content - standardized positioning and animations */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={cn(
          'relative z-10 max-w-4xl px-8',
          // Non-homepage pages get consistent top padding for proper centering with header offset
          isHomepage ? '' : 'pt-8'
        )}
      >
        <div className="mb-8">
          {coloredTitle}
          
          {displaySubtitle && isHomepage && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={cn(
                'mb-8 bg-black/10 rounded-lg p-6',
                fontClass,
                // Standardized subtitle sizing for non-homepage
                isHomepage ? 'text-[2rem]' : 'text-lg md:text-xl lg:text-2xl'
              )}
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
              className={cn('btn text-[1.6rem] px-8 py-4 hover:scale-105 transition-transform', fontClass)}
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