'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/utils/cn'

interface AgeGroupData {
  id: number
  title: string
  subtitle: string
  description: string[]
  image: string
  buttonText: string
  href: string
  color: string
}

const ageGroups: AgeGroupData[] = [
  {
    id: 1,
    title: '乳児',
    subtitle: '0〜2歳',
    description: [
      '四季折々の自然を感じられる中でのびのびと駆け回り笑顔のあふれる保育をしています。'
    ],
    image: '/images/nyuuji-pic.JPG',
    buttonText: 'More Details',
    href: '/nyuuji',
    color: 'primary'
  },
  {
    id: 2,
    title: '幼児',
    subtitle: '3〜6歳',
    description: [
      'たくさんの行事を通してみんなの成長がお互いを刺激しあい認め合う環境作りをしています。',
      '「おはよう」のご挨拶「ありがとう」の感謝の言葉・素直な心を養います。'
    ],
    image: '/images/nensho-pic.JPG',
    buttonText: 'More Details',
    href: '/youji',
    color: 'secondary'
  },
  {
    id: 3,
    title: '国際クラス',
    subtitle: '3〜6歳',
    description: [
      'スタークラスの目標言葉は「Reach for the Stars」＝「高望みする」という意味です。スタークラスの子ども達はお互いに、どんな事にでも一生懸命頑張れる様に、一人一人に声をかけながら応援しています。'
    ],
    image: '/images/star-pic.JPG',
    buttonText: 'More Details',
    href: '/star',
    color: 'quaternary'
  }
]

export default function AgeGroups() {
  const [activeTab, setActiveTab] = useState(1)
  const [mounted, setMounted] = useState(false)

  const ageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="py-16 mb-12"><div className="container"><div className="section-header mb-16"><h2 className="text-4xl lg:text-5xl font-light text-center mb-4">学年の<span className="text-secondary">紹介</span></h2><hr className="heading-hr border-secondary" /></div></div></div>
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
        <div className="text-center mb-16">
          <h2 className="text-[3.4rem] lg:text-[4.4rem] font-light mb-4">
            学年の<span className="text-secondary">紹介</span>
          </h2>
          <hr className="w-[14rem] h-[3px] bg-secondary mx-auto border-0" />
        </div>

        {/* Tab Container */}
        <div className="relative w-full md:w-[90%] mx-auto h-[70rem] md:h-[54rem]">
          {/* Tabs */}
          <div className="flex gap-0 mb-0">
            {ageGroups.map((group) => {
              const isActive = activeTab === group.id
              const tabColors = {
                1: isActive ? 'bg-primary text-white' : 'bg-primary/80 text-white hover:bg-primary',
                2: isActive ? 'bg-secondary text-white' : 'bg-secondary/80 text-white hover:bg-secondary', 
                3: isActive ? 'bg-quaternary text-white' : 'bg-quaternary/80 text-white hover:bg-quaternary'
              }
              
              return (
                <motion.button
                  key={group.id}
                  onClick={() => setActiveTab(group.id)}
                  className={cn(
                    'tabbed-btn',
                    'rounded-md',
                    tabColors[group.id as keyof typeof tabColors],
                    isActive ? 'transform -translate-y-[6px] z-10' : ''
                  )}
                  whileHover={{ y: isActive ? -6 : -4 }}
                  whileTap={{ y: isActive ? -5 : -4 }}
                  animate={{ y: isActive ? -6 : 0 }}
                >
                  {group.title}
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
                  key={group.id}
                  
                  className={cn(
                    'rounded-lg rounded-tl-none p-[3rem] md:p-[6rem] h-[60rem] md:h-[48rem] absolute top-[5rem]',
                    contentColors[group.id as keyof typeof contentColors]
                  )}
                >
                  <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 h-full">
                    <div className="flex md:flex-row flex-col items-center justify-between h-full gap-8">
                      {/* Image */}
                      <div className="flex-1 order-2 md:order-1">
                        <img
                          src={group.image}
                          alt={group.title}
                          className="w-full h-80 object-cover rounded-lg shadow-lg"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-center order-1 md:order-2">
                        <h2 className="text-[3rem] md:text-[3.4rem] font-light text-gray-800 mb-6">
                          {group.title} － {group.subtitle}
                        </h2>
                        
                        {group.description.map((desc, index) => (
                          <p key={index} className="text-[1.6rem] text-gray-700 mb-4 leading-relaxed">
                            {desc}
                          </p>
                        ))}

                        <div className="mt-8">
                          <Link
                            href={group.href}
                            className='btn'
                          >
                            {group.buttonText}
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