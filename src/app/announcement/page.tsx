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
      title1: 'さあ、2学期の開幕！',
      title2:'新たな挑戦の始まりです',
      paragraphs: [
        '子どもたちの元気な声が園に戻り、園内が一気ににぎやかになりました。夏休みの思い出を楽しそうに話す姿や、日焼けしたお顔から、たくさんの楽しい体験をしたことが伝わってきます。夏の経験が、子どもたちをひと回り大きくしてくれたように感じます。',
        '今年の夏は猛暑のため各クラスではスライムづくりや色水あそびや感触あそび、しゃぼん玉、水鉄砲など、さまざまな工夫で楽しい時間を過ごしました。新しい遊びや発見も多く、子どもたちは驚きや喜びを感じながら充実した夏を過ごしていました。',
        '先日は保育公開にご参加いただき、ありがとうございました。日頃の子どもたちの様子はいかがだったでしょうか？おうちの方の前で張り切る姿も見られ、私たち職員もとても嬉しく思いました。今月は、「ゆりーと君と遊ぼう！」「とうもろこし狩り」「すいか割り」、「水あそび」、そして年長児の「お泊まり保育」など、楽しい行事が盛りだくさんです。',
        'いよいよ、楽しい夏の扉が開かれます！子どもたちと一緒に、たくさんの思い出を作っていきたいと思います。1学期間たくさんのご協力、ご理解をありがとうございました。'
      ]
    },
    en: {
      pageTitle: 'Message from the School',
      title1: 'The second semester has begun!',
      title2: ' A new challenge begins!',
      paragraphs: [
        'The cheerful voices of children have returned to the kindergarten, making it lively again all at once. From their joyful sharing of summer vacation memories and their sun-tanned faces, we can see they had many wonderful experiences. The summer experience seems to have helped the children grow significantly.',
        'This summer was extremely hot, so each class enjoyed various creative activities such as making slime, colored water play, sensory play, bubbles, and water guns. With many new games and discoveries, the children spent a fulfilling summer filled with surprise and joy.',
        'Thank you for participating in the recent open house. How did you find the children\'s daily activities? We were delighted to see them being enthusiastic in front of their families. This month is packed with fun events such as "Let\'s play with Yurito-kun!", "Corn picking", "Watermelon splitting", "Water play", and "Overnight stay" for the older children.',
        'Finally, the door to an exciting summer is opening! We look forward to creating many wonderful memories together with the children. Thank you for your cooperation and understanding throughout the first semester.'
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
        <div className="container mx-auto px-4 max-w-[78vw]">
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