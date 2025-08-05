'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface HeroProps {
  title?: string
  subtitle?: string
  showButton?: boolean
  backgroundImage?: string
  isHomepage?: boolean
}

export default function Hero({
  title,
  subtitle,
  showButton = false,
  backgroundImage = '/images/hero-image.jpg',
  isHomepage = false,
}: HeroProps) {
  const coloredTitle = isHomepage ? (
    <h1 className="text-5xl lg:text-6xl mb-8 bg-black/10 rounded-lg p-4">
      <span className="text-primary">E</span>
      <span className="text-secondary">n</span>
      <span className="text-tertiary">j</span>
      <span className="text-quaternary">o</span>
      <span className="text-primary">y</span> Learning With Us
    </h1>
  ) : (
    <h1 className="text-4xl lg:text-5xl mb-8 bg-black/10 rounded-lg p-4">
      {title}
    </h1>
  )

  return (
    <section
      className={cn(
        'relative flex items-center justify-center text-center text-white overflow-hidden',
        isHomepage ? 'h-screen' : 'h-[40vh]'
      )}
    >
      {/* Background image using img tag */}
      <img
        src={backgroundImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 max-w-4xl px-8 pt-32"
      >
        <div className="mb-8">
          {coloredTitle}
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl mb-8 bg-black/10 rounded-lg p-6 font-kosugi"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/about"
              className="inline-flex items-center btn text-lg px-8 py-4 hover:scale-105 transition-transform"
            >
              <i className="fas fa-chevron-right mr-2"></i>
              こども学園での保育活動
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}