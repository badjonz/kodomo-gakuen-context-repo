'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Hero from '@/components/sections/Hero'
import { useLanguage } from '@/context/LanguageContext'
import { useFontClass } from '@/hooks/useFontClass'
import { cn } from '@/utils/cn'

export default function AnnouncementPage() {
  const { language } = useLanguage()
  const fontClass = useFontClass()

  const content = {
    ja: {
      pageTitle: '園からのあいさつ',
      title1: '７月の',
      title2:'あいさつ',
      paragraphs: [
        '春の進級・入園から3ヶ月が経ち、子どもたち一人ひとり、少しずつ落ち着きが感じられるようになってきました。新しいクラスでの生活リズムにも、だんだんと慣れてきたようです。日々の生活の中で基本的な生活習慣を身につけながら、自分を表現する楽しさを感じたり、お友だちとの関わりを通して「我慢」や「譲り合い」といった大切な気持ちも少しずつ育んでいます。',
        'とはいえ、まだまだ体力や抵抗力が十分ではない子どもたち。夕方や週末が近づくと、少しお疲れ気味になったり、寝不足の様子が見られることもあります。そんな時は、早めの就寝や、親子でゆったりと過ごす時間を持つことで、心と体の回復につながると思います。',
        '先日は保育公開にご参加いただき、ありがとうございました。日頃の子どもたちの様子はいかがだったでしょうか？おうちの方の前で張り切る姿も見られ、私たち職員もとても嬉しく思いました。今月は、「ゆりーと君と遊ぼう！」「とうもろこし狩り」「すいか割り」、「水あそび」、そして年長児の「お泊まり保育」など、楽しい行事が盛りだくさんです。',
        'いよいよ、楽しい夏の扉が開かれます！子どもたちと一緒に、たくさんの思い出を作っていきたいと思います。1学期間たくさんのご協力、ご理解をありがとうございました。'
      ]
    },
    en: {
      pageTitle: 'Message from the School',
      title1: 'July',
      title2: 'Greeting',
      paragraphs: [
        'Three months have passed since the spring advancement and enrollment, and we can gradually feel a sense of calm in each child. They seem to be getting used to the rhythm of life in their new classes. While learning basic daily habits in their daily lives, they are feeling the joy of expressing themselves and gradually nurturing important feelings such as "patience" and "giving way" through interactions with their friends.',
        'However, children still do not have sufficient physical strength and resistance. As evening or weekends approach, they may seem a little tired or show signs of lack of sleep. At such times, we believe that early bedtime and taking time to spend relaxed time with parents and children will help restore the mind and body.',
        'Thank you for participating in the recent childcare open day. How were the children doing on a daily basis? We were very happy to see them being enthusiastic in front of their families. This month is full of fun events such as "Let\'s play with Yurito-kun!", "Corn picking", "Watermelon splitting", "Water play", and "Overnight childcare" for the older children.',
        'Finally, the door to a fun summer is opening! We would like to create many memories together with the children. Thank you for your cooperation and understanding during the first semester.'
      ]
    }
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={currentContent.pageTitle}
        backgroundImage="/images/page-banner.jpeg"
        isHomepage={false}
      />

      {/* Main Content Section */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.header 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-[4rem] md:text-[4.8rem] font-bold text-gray-800 mb-4">
              {currentContent.title1}
              <span className='text-primary'>{language === 'en' ? ' ':''}{currentContent.title2}</span>
            </h2>
            <div className="w-[8rem] h-1 bg-primary mx-auto"></div>
          </motion.header>

          <motion.div 
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {currentContent.paragraphs.map((paragraph, index) => (
              <motion.p 
                key={index}
                className={cn("text-gray-700 leading-relaxed mb-6 text-[1.6rem]", fontClass)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* Back to Home Button */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              href="/"
              className="btn text-[1.6rem] px-8 py-4 hover:scale-105 transition-transform"
            >
              {language === 'ja' ? 'ホームに戻る' : 'Back to Home'}
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}