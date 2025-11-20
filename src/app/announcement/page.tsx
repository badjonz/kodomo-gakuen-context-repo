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
      title1: '園庭の木々も冬の訪れを感じ始めたようで、葉が緑から黄色へと色づき、',
      title2:'秋の深まりを感じる季節となりました。',
      paragraphs: [
        '子どもたちは、運動会に向けて日々の練習に励み、気持ちもどんどん高まり、お友達とのつながりも深め、自信へとつながってきています。当日は、温かいご声援をどうぞよろしくお願いいたします。詳細はプログラムをご確認ください。',
        '一年の時が過ぎる早さを感じるとともに、子どもたちの成長には目を見張るものがあります。ルールを守り、お友だちと協力しながら、毎日元気に楽しく遊ぶ姿に日々嬉しさを感じています。',
        '今月は、さつまいもほりや運動会、ごほうび遠足、勤労感謝訪問（年少児以上）などの園外活動があります。四季を肌で感じながら五感に沢山の刺激をうけ、自分たちの周りの大人のお仕事にも関心が高められる月となることでしょう。'
      ]
    },
    en: {
      pageTitle: 'Message from the School',
      title1: 'The trees in our playground are beginning to sense winter\'s approach, their leaves changing from green to yellow,',
      title2: ' marking the deepening of autumn.',
      paragraphs: [
        'The children are working hard in their daily practice for Sports Day, their excitement growing, deepening their friendships, and building confidence. We look forward to your warm support and cheering on the day of the event. Please check the program for details.',
        'While feeling how quickly a year passes, we are amazed by the children\'s growth. We feel joy every day seeing them playing energetically and happily, following rules and cooperating with friends.',
        'This month, we have outdoor activities such as sweet potato digging, Sports Day, reward excursion, and Thanksgiving visits (for 3-year-olds and older). It will be a month where children can feel the four seasons with their skin, receive lots of stimulation to their five senses, and develop interest in the work of the adults around them.'
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