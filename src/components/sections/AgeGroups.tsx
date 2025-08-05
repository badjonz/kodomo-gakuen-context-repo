'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
    image: '/images/tamago.JPG',
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
    title: 'スター',
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

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="py-16 mb-12"><div className="container"><div className="section-header mb-16"><h2 className="text-4xl lg:text-5xl font-light text-center mb-4">学年の<span className="text-secondary">紹介</span></h2><hr className="heading-hr border-secondary" /></div></div></div>
  }

  const getColorClasses = (color: string, isActive: boolean = false) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary',
        hover: 'hover:bg-primary-dark',
        active: isActive ? '-translate-y-2' : '',
        content: 'bg-primary',
        button: 'bg-primary hover:bg-primary-dark'
      },
      secondary: {
        bg: 'bg-secondary',
        hover: 'hover:bg-pink-600',
        active: isActive ? '-translate-y-2' : '',
        content: 'bg-secondary',
        button: 'bg-secondary hover:bg-pink-600'
      },
      quaternary: {
        bg: 'bg-quaternary',
        hover: 'hover:bg-blue-600',
        active: isActive ? '-translate-y-2' : '',
        content: 'bg-quaternary',
        button: 'bg-quaternary hover:bg-blue-600'
      }
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.primary
  }

  return (
    <section id="class-info" className="flex-items section-mb-3 class-info">
      <div className="container">
        {/* Section Header */}
        <header id="age-group-header" className="age-group-header section-header">
          <h2 style={{ fontSize: '4.4rem' }}>
            学年の<span className="text-color-2">紹介</span>
          </h2>
          <hr className="heading-hr text-color-2" />
        </header>

        {/* Age Group Container */}
        <div className="age-group">
          
          {/* Tab Container */}
          <div className="age-group__tab-container">
            {ageGroups.map((group) => {
              const isActive = activeTab === group.id
              return (
                <button
                  key={group.id}
                  onClick={() => setActiveTab(group.id)}
                  className={cn(
                    'age-group__tab',
                    `age-group__tab--${group.id}`,
                    isActive ? 'age-group__tab--active' : ''
                  )}
                  data-tab={group.id}
                  style={{ fontSize: '2rem' }}
                >
                  {group.title}
                </button>
              )
            })}
          </div>

          {/* Content Container */}
          <AnimatePresence mode="wait">
            {ageGroups.map((group) => {
              if (activeTab !== group.id) return null

              return (
                <motion.div
                  key={group.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    'age-group__content',
                    `age-group__content--${group.id}`,
                    'age-group__content--active'
                  )}
                >
                  <div className={cn(
                    'age-group__content-container',
                    `age-group__content-container--${group.id}`
                  )}>
                    {/* Conditional layout for group 2 (reversed) */}
                    {group.id === 2 ? (
                      <>
                        {/* Info first, then image for group 2 */}
                        <div className="age-group__info">
                          <h2 className="age-group__header" style={{ fontSize: '3rem' }}>
                            {group.title} &ndash; {group.subtitle}
                          </h2>
                          
                          {group.description.map((desc, index) => (
                            <p key={index} className="age-group__text" style={{ fontSize: '1.6rem' }}>
                              {desc}
                            </p>
                          ))}

                          <div className="age-group__button-box">
                            <Link
                              href={group.href}
                              className={cn(
                                'btn age-group__button',
                                `age-group__button--${group.id}`,
                                `btn--${group.color}`
                              )}
                              style={{ fontSize: '1.6rem' }}
                            >
                              {group.buttonText}
                            </Link>
                          </div>
                        </div>
                        <div className="age-group__pic-container">
                          <img
                            src={group.image}
                            alt={group.title}
                            className="age-group__pic"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Image first, then info for groups 1 and 3 */}
                        <div className="age-group__pic-container">
                          <img
                            src={group.image}
                            alt={group.title}
                            className="age-group__pic"
                          />
                        </div>
                        <div className="age-group__info">
                          <h2 className="age-group__header" style={{ fontSize: '3rem' }}>
                            {group.title} &ndash; {group.subtitle}
                          </h2>
                          
                          {group.description.map((desc, index) => (
                            <p key={index} className="age-group__text" style={{ fontSize: '1.6rem' }}>
                              {desc}
                            </p>
                          ))}

                          <div>
                            <Link
                              href={group.href}
                              className={cn(
                                'btn age-group__button',
                                `age-group__button--${group.id}`,
                                `btn--${group.color}`
                              )}
                              style={{ fontSize: '1.6rem' }}
                            >
                              {group.buttonText}
                            </Link>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}