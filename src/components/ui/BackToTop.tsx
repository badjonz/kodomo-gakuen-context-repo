'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function BackToTop() {
  const pathname = usePathname()
  const isHomepage = pathname === '/'
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed ${isHomepage ? 'bottom-20' : 'bottom-6'} right-6 z-50 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg border-4 border-[#32cd32] hover:bg-[#32cd32] hover:scale-110 transition-all duration-300 flex items-center justify-center group`}
      aria-label="Back to top"
    >
      <i className="fas fa-chevron-up text-2xl md:text-3xl text-[#32cd32] group-hover:text-white transition-colors duration-300" />
    </button>
  )
}