'use client'

import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface AboutCardProps {
  title: string
  content: string
  color: string
  delay: number
}

function AboutCard({ title, content, color, delay }: AboutCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Function to truncate text to approximately 25 words
  const truncateText = (text: string, wordLimit: number = 10) => {
    // For Japanese text, use character limit instead of word limit
    // Approximate 10 words = 50-80 characters in Japanese
    const charLimit = wordLimit * 7; // Roughly 7 characters per "word" in Japanese
    
    if (text.length <= charLimit) {
      return text
    }
    return text.slice(0, charLimit) + '...'
  }

  const getColorClasses = (colorName: string) => {
    const colorMap = {
      school: 'bg-secondary border-l-4 border-secondary',
      nurture: 'bg-primary border-l-4 border-primary', 
      vision: 'bg-quaternary border-l-4 border-quaternary'
    }
    return colorMap[colorName as keyof typeof colorMap] || 'bg-primary/10 border-l-4 border-primary'
  }

  const getButtonClasses = (colorName: string) => {
    const buttonMap = {
      school: 'hover:text-secondary',
      nurture: 'hover:text-primary',
      vision: 'hover:text-quaternary'
    }
    return buttonMap[colorName as keyof typeof buttonMap] || 'border-primary text-primary hover:bg-primary hover:text-white'
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, visibility: 'hidden' }}
      animate={isVisible ? { opacity: 1, visibility: 'visible' } : { opacity: 0, visibility: 'hidden' }}
      transition={{ duration: 1, delay }}
      className={cn(
        'py-[5rem] px-[3rem] rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl',
        getColorClasses(color),
        isVisible ? 'opacity-100' : 'opacity-0'
      )}
    >
      {/* Card Content Container */}
      <div className="space-y-6 text-center">
        {/* Card Title */}
        <h3 className="text-[3rem] font-bold font-kosugi text-white">{title}</h3>
        
        {/* Card Description */}
        <p className="text-[1.6rem] leading-relaxed text-white font-kosugi">
          {truncateText(content)}
        </p>
        
        {/* Call to Action Button */}
        <Link
          href="/about"
          className={cn(
            'btn-transparent',
            getButtonClasses(color)
          )}
        >
          <i className="fas fa-chevron-right"></i> もっと詳しく知る
        </Link>
      </div>
    </motion.div>
  )
}

export default function AboutInfo() {
  // About section data configuration
  const aboutData = [
    {
      title: 'こども学園',
      content: '当園は2,000坪の敷地で、園内は森に囲まれ、50坪の恵まれた自然環境にあります スタッフが一人一人丁寧に、優しく個性を大切にし、気持ちよくお子様のお世話をいたします 提供できるものがたくさんあります。オーストラリア、英国、ケニア、スリランカ、トリノバゴ、米国の市民権を持つ外国人。',
      color: 'school'
    },
    {
      title: 'はぐくみ',
      content: '明るく伸びやかな子どもたちへ。親を敬い、誰とでも仲良くなれる子に世の中の優しさを忘れません。やっと大人になった時 目立たない存在でも なんとなく頼ってた 一部の人に、困ったときに相談したい人、そんな人になるために基材を目指そう。',
      color: 'nurture'
    },
    {
      title: 'ビジョン',
      content: '幼児は小さな植物がついに芽を出したようなものです。つぼみが大きくなる ご不明な点がございましたら、お気軽にお問い合わせください。ご不明な点がございましたら、お気軽にお問い合わせください。',
      color: 'vision'
    }
  ]

  return (
    <section id="about-info" className="py-20 bg-light-2">
      {/* Container for centered content */}
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <header className="text-center mb-16">
          {/* Main Section Title */}
          <h2 className="text-5xl md:text-6xl font-bold font-kosugi text-dark-1 mb-6">
            なんで<span className="text-tertiary">こども</span>がくえん？
          </h2>
          {/* Decorative underline */}
          <div className="w-24 h-1 bg-tertiary mx-auto rounded-full"></div>
        </header>

        {/* About Cards Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutData.map((item, index) => (
            <AboutCard
              key={index}
              title={item.title}
              content={item.content}
              color={item.color}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  )
}