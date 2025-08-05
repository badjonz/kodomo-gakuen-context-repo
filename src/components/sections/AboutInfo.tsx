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

  const getColorClasses = (colorName: string) => {
    const colorMap = {
      school: 'bg-color-2',
      nurture: 'bg-color-1', 
      vision: 'bg-color-4'
    }
    return colorMap[colorName as keyof typeof colorMap] || 'bg-color-1'
  }

  const getButtonClasses = (colorName: string) => {
    const buttonMap = {
      school: 'btn-color-2',
      nurture: 'btn-color-1',
      vision: 'btn-color-4'
    }
    return buttonMap[colorName as keyof typeof buttonMap] || 'btn-color-1'
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, visibility: 'hidden' }}
      animate={isVisible ? { opacity: 1, visibility: 'visible' } : { opacity: 0, visibility: 'hidden' }}
      transition={{ duration: 1, delay }}
      className={cn(
        'about-col column',
        getColorClasses(color),
        isVisible ? 'show' : ''
      )}
    >
      <div>
        <h3 style={{ fontSize: '3rem' }}>{title}</h3>
        <p style={{ fontSize: '1.6rem' }}>
          {content}
        </p>
        <Link
          href="/about"
          className={cn(
            'btn btn-outline',
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
    <section id="about-info" className="about-info col-3 section-margin">
      <div className="container">
        {/* Section Header */}
        <header id="about-header" className="about-header section-header">
          <h2 style={{ fontSize: '4.4rem' }}>
            なんで<span className="text-color-3">こども</span>がくえん？
          </h2>
          <hr className="heading-hr text-color-3" />
        </header>

        {/* About Cards */}
        <div className="row">
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