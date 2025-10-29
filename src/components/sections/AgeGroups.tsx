'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/utils/cn'
import { useLanguage } from '@/context/LanguageContext'
import { useSectionContent } from '@/hooks/useContent'
import { useFontClass } from '@/hooks/useFontClass'

interface AgeGroupData {
  id: number
  name: string
  ageRange: string
  description: string
  image: string
  href: string
  color: string
}

// Static configuration for age group styling and routing
const ageGroupConfig = [
  { id: 1, key: 'nyuuji', href: '/nyuuji', color: 'primary' },
  { id: 2, key: 'youji', href: '/youji', color: 'secondary' },
  { id: 3, key: 'star', href: '/star', color: 'quaternary' }
]

export default function AgeGroups() {
  const { language } = useLanguage()
  const { content: ageGroupsContent, loading } = useSectionContent('ageGroups')
  const fontClass = useFontClass()
  const [activeTab, setActiveTab] = useState(1)
  const [mounted, setMounted] = useState(false)

  const ageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Transform content data into component format
  const getAgeGroupData = (): AgeGroupData[] => {
    if (!ageGroupsContent) return []
    
    return ageGroupConfig.map(config => {
      const groupData = ageGroupsContent[config.key as keyof typeof ageGroupsContent]
      
      // Type guard to ensure we have an object with the expected properties
      const groupInfo = typeof groupData === 'object' && groupData !== null && 'name' in groupData 
        ? groupData 
        : { name: '', ageRange: '', description: '', image: '' }

      return {
        id: config.id,
        name: groupInfo.name || '',
        ageRange: groupInfo.ageRange || '',
        description: groupInfo.description || '',
        image: groupInfo.image || '',
        href: config.href,
        color: config.color
      }
    })
  }

  const ageGroups = getAgeGroupData()

  if (!mounted || loading) {
    return (
      <div className="py-16 mb-12">
        <div className="container">
          <div className="section-header mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-center mb-4">
              {ageGroupsContent?.sectionTitle || '学年の紹介'}
            </h2>
            <hr className="heading-hr border-secondary" />
          </div>
        </div>
      </div>
    )
  }


  return (
    <section className="py-16 mb-12">
      <motion.div 
        ref={ageRef} 
        className="container md:px-8 animate-on-scroll" 
        initial={{ visibility: 'hidden', opacity: 0, y: 200 }} 
        whileInView={{ visibility: 'visible', opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Header */}
        <div className="text-center mb-16" key={`${language}-header`}>
          <h2 className={cn("text-[3.4rem] lg:text-[4.4rem] font-light mb-4", fontClass)}>
            {ageGroupsContent?.sectionTitle || '学年の紹介'}
          </h2>
          <hr className="w-[14rem] h-[3px] bg-secondary mx-auto border-0" />
        </div>

        {/* Tab Container */}
        <div className="relative w-full lg:w-[90%] md:w-full mx-auto h-[70rem] md:h-[54rem]">
          {/* Tabs */}
          <div className="flex gap-0 mb-0 md:static absolute top-[-8px]">
            {ageGroups.map((group) => {
              const isActive = activeTab === group.id
              const tabColors = {
                1: isActive ? 'bg-primary text-white' : 'bg-primary/80 text-white hover:bg-primary',
                2: isActive ? 'bg-secondary text-white' : 'bg-secondary/80 text-white hover:bg-secondary', 
                3: isActive ? 'bg-quaternary text-white' : 'bg-quaternary/80 text-white hover:bg-quaternary'
              }
              
              return (
                <motion.button
                  key={`${group.id}-${language}`}
                  onClick={() => setActiveTab(group.id)}
                  className={cn(
                    'tabbed-btn',
                    'rounded-md',
                    tabColors[group.id as keyof typeof tabColors],
                    fontClass,
                    isActive ? 'transform -translate-y-[6px] z-10' : ''
                  )}
                  whileHover={{ y: isActive ? -6 : -4 }}
                  whileTap={{ y: isActive ? -5 : -4 }}
                  animate={{ y: isActive ? -6 : 0 }}
                >
                  {group.name}
                </motion.button>
              )
            })}
          </div>

          {/* Content Container */}
         
            {ageGroups.map((group) => {
              if (activeTab !== group.id) return null
              
              const contentColors = {
                1: 'bg-primary',
                2: 'bg-secondary', 
                3: 'bg-quaternary'
              }

              return (
                <div
                  key={`${group.id}-${language}`}
                  className={cn(
                    'rounded-lg rounded-tl-none p-[3rem] md:p-[4.8rem] lg:p-[6rem] h-[60rem] md:h-[48rem] absolute top-[5rem]',
                    contentColors[group.id as keyof typeof contentColors]
                  )}
                >
                  <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 h-full">
                    <div className="flex md:flex-row flex-col items-center justify-between h-full gap-8">
                      {/* Image */}
                      <div className="flex-1 order-2 md:order-1 relative h-80">
                        <Image
                          src={group.image}
                          alt={`${group.name} - ${group.ageRange} クラスの子どもたち | ${group.name} Class Children`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover rounded-lg shadow-lg"
                          loading={activeTab === group.id ? "eager" : "lazy"}
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-center order-1 md:order-2">
                        <h2 className={cn("text-[2.4rem] md:text-[2.6rem] lg:text-[3rem] font-light text-gray-800 mb-6", fontClass)}>
                          {group.name} － {group.ageRange}
                        </h2>

                        <p className={cn("text-[1.6rem] text-gray-700 mb-4 leading-relaxed", fontClass)}>
                          {group.description}
                        </p>

                        <div className="mt-8">
                          <Link
                            href={group.href}
                            className={cn('btn', fontClass)}
                          >
                            More Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          
        </div>
      </motion.div>
    </section>
  )
}