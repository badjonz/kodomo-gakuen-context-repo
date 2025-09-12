'use client'

import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { useLanguage } from '@/context/LanguageContext'
import { useSectionContent } from '@/hooks/useContent'

/**
 * Props interface for individual AboutCard component
 * Used to define the structure and styling of each information card
 */
interface AboutCardProps {
  title: string    // Card title (e.g., "こども学園", "はぐくみ", "ビジョン")
  content: string  // Main description text content
  color: string    // Theme color identifier for styling
  delay: number    // Animation delay for staggered entrance effects
  language: string // Current language for key prop
}
/**
 * Individual AboutCard Component
 * Renders an animated card with intersection observer for scroll-triggered animations
 * Features truncated text, themed colors, and hover effects
 */
function AboutCard({ title, content, color, delay, language }: AboutCardProps) {
  // State to track if the card is visible in viewport
  const [isVisible, setIsVisible] = useState(false)
  // Reference to the card element for intersection observer
  const cardRef = useRef<HTMLDivElement>(null)
  // Set up intersection observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true) // Trigger animation when card comes into view
        }
      },
      { threshold: 0.25 } // Trigger when 25% of the card is visible
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    // Cleanup observer on component unmount
    return () => observer.disconnect()
  }, [])

  /**
   * Truncates Japanese text content for consistent card heights
   * Uses character-based truncation since Japanese doesn't use spaces between words
   * @param text - The original text content
   * @param wordLimit - Approximate number of "words" (converted to character limit)
   * @returns Truncated text with ellipsis if needed
   */
  const truncateText = (text: string, wordLimit: number = 10) => {
    // For Japanese text, use character limit instead of word limit
    // Approximate 10 words = 50 characters in Japanese
    const charLimit = wordLimit * 5; // Roughly 5 characters per "word" in Japanese
    
    if (text.length <= charLimit) {
      return text
    }
    return text.slice(0, charLimit) + '...'
  }

  /**
   * Returns appropriate background and border color classes based on card theme
   * @param colorName - Theme identifier ('school', 'nurture', 'vision')
   * @returns CSS class string for background and border styling
   */
  const getColorClasses = (colorName: string) => {
    const colorMap = {
      school: 'bg-secondary border-l-4 border-secondary',    // Blue theme for school info
      nurture: 'bg-primary border-l-4 border-primary',      // Primary theme for nurturing
      vision: 'bg-quaternary border-l-4 border-quaternary'  // Quaternary theme for vision
    }
    return colorMap[colorName as keyof typeof colorMap] || 'bg-primary/10 border-l-4 border-primary'
  }

// In the AboutCard component, replace the current animation logic:

const getInitialPosition = (colorName: string) => {
  const positionMap = {
    school: { opacity: 0, x: -200 },    // Come from left
    nurture: { opacity: 0, y: 200 },    // Come from bottom  
    vision: { opacity: 0, x: 200 }      // Come from right
  }
  return positionMap[colorName as keyof typeof positionMap] || { opacity: 0 }
}

const getAnimatePosition = (colorName: string, isVisible: boolean) => {
  if (!isVisible) {
    return getInitialPosition(colorName)
  }
  
  return { opacity: 1, x: 0, y: 0 } // End position for all cards
}


  /**
   * Returns appropriate button hover color classes based on card theme
   * @param colorName - Theme identifier ('school', 'nurture', 'vision')
   * @returns CSS class string for button hover effects
   */
  const getButtonClasses = (colorName: string) => {
    const buttonMap = {
      school: 'hover:text-secondary',    // Blue hover for school cards
      nurture: 'hover:text-primary',     // Primary hover for nurture cards
      vision: 'hover:text-quaternary'    // Quaternary hover for vision cards
    }
    return buttonMap[colorName as keyof typeof buttonMap] || 'border-primary text-primary hover:bg-primary hover:text-white'
  }

  return (
    <motion.div
  ref={cardRef}
  initial={getInitialPosition(color)}
  animate={getAnimatePosition(color, isVisible)}
  transition={{ duration: .5, delay }}
  key={`${color}-${language}`}
  className={cn(
    'py-[5rem] px-[3rem] rounded-lg shadow-lg hover:shadow-xl shadow-[3px_3px_5px_1px_rgba(0,0,0,0.3)] transition-shadow duration-300',
    getColorClasses(color)
  )}
>
      {/* Card Content Container - Centers content and provides spacing */}
      <div className="text-center">
        {/* Card Title - Large, bold heading */}
        <h3 className="text-[3rem] font-bold font-kosugi text-white mb-[2rem]">{title}</h3>
        
        {/* Card Description - Truncated content with consistent spacing */}
        <p className="text-[1.6rem] leading-relaxed text-white font-kosugi mb-[4rem]">
          {truncateText(content)}
        </p>
        
        {/* Call to Action Button - Links to detailed about page */}
        <Link
          href="/about"
          className={cn(
            'btn-transparent', // Base transparent button styling
            getButtonClasses(color) // Theme-specific hover colors
          )}
        >
          <i className="fas fa-chevron-right"></i> もっと詳しく知る
        </Link>
      </div>
    </motion.div>
  )
}

/**
 * Main AboutInfo Component
 * Displays three informational cards about the kindergarten's philosophy and approach
 * Features staggered animations and responsive grid layout
 * 
 * Cards cover:
 * - こども学園 (School Information)
 * - はぐくみ (Nurturing Philosophy) 
 * - ビジョン (Vision & Goals)
 */
export default function AboutInfo() {
  const { language } = useLanguage()
  const { content: aboutContent, loading } = useSectionContent('about')

  // Create card data using content or fallback
  const getAboutData = () => {
    if (!aboutContent) {
      // Fallback data
      return [
        {
          title: 'こども学園',
          content: '当園は愛情豊かな環境で、子どもたち一人一人の個性を大切にしています。',
          color: 'school'
        },
        {
          title: 'はぐくみ',
          content: 'ふれあい保育・感謝・思いやりを基本理念として、子どもたちの成長をサポートします。',
          color: 'nurture'
        },
        {
          title: 'ビジョン',
          content: '子どもたちの可能性を最大限に引き出し、健やかな成長を見守ります。',
          color: 'vision'
        }
      ]
    }

    // Use dynamic content - simplified version using description and philosophy
    return [
      {
        title: aboutContent.sectionTitle || (language === 'ja' ? 'こども学園について' : 'About Kodomo Gakuen'),
        content: aboutContent.description || '',
        color: 'school'
      },
      {
        title: language === 'ja' ? 'はぐくみ' : 'Nurturing',
        content: aboutContent.philosophy || '',
        color: 'nurture'
      },
      {
        title: language === 'ja' ? 'ビジョン' : 'Vision',
        content: aboutContent.description || '', // Re-use description for now
        color: 'vision'
      }
    ]
  }

  const aboutData = getAboutData()

  return (
    <section id="about-info" className="py-20 pb-[10rem] bg-light-2">
      {/* Container for centered content with responsive padding */}
      <div className="container mx-auto px-6 overflow-hidden pb-[4rem]">
        {/* Section Header - Centered title with decorative underline */}
        <header className="text-center mb-16" key={`${language}-header`}>
          {/* Main Section Title - Large Japanese text with colored accent */}
          <h2 className="text-5xl md:text-6xl font-bold font-kosugi text-dark-1 mb-6">
            {language === 'ja' ? (
              <>なんで<span className="text-tertiary">こども</span>がくえん？</>
            ) : (
              <>Why <span className="text-tertiary">Kodomo</span> Gakuen?</>
            )}
          </h2>
          {/* Decorative underline - Small accent bar below title */}
          <div className="w-24 h-1 bg-tertiary mx-auto rounded-full"></div>
        </header>

        {/* About Cards Grid Container - Responsive grid that stacks on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutData.map((item, index) => (
            <AboutCard
              key={`${index}-${language}`}
              title={item.title}
              content={item.content}
              color={item.color}
              delay={0} // Staggered animation delays (0s, 0.2s, 0.4s)
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  )
}