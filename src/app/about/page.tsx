'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import { useLanguage } from '@/context/LanguageContext';
import { useSectionContent } from '@/hooks/useContent';
import { useFontClass } from '@/hooks/useFontClass';
import { cn } from '@/utils/cn';

export default function About() {
  const { language } = useLanguage();
  const { content: aboutContent } = useSectionContent('about');
  const fontClass = useFontClass();
  
  // Fallback content in case loading fails
  const fallbackContent = {
    page: {
      mainContent: {
        title: language === 'en' ? 'Kodomo Gakuen' : 'こども学園',
        paragraphs: [
          language === 'en' 
            ? 'Loading content...' 
            : 'コンテンツを読み込んでいます...'
        ]
      },
      nurturing: {
        title: language === 'en' ? 'Nurturing' : 'はぐくみ',
        subtitle: language === 'en' ? 'For bright and spirited children.' : '明るく伸びやかな子どもたちへ。',
        content: 'Loading...'
      },
      vision: {
        title: language === 'en' ? 'Vis' : 'ビジ',
        title2: language === 'en' ? 'ion' : 'ョン',
        paragraphs: ['Loading...']
      },
      callToAction: {
        title: language === 'en' ? 'Join Us in Nurturing Children\'s Future' : '一緒に子どもたちの未来を育みませんか？',
        description: language === 'en' ? 'Loading...' : '読み込み中...',
        buttonText: language === 'en' ? 'Contact Us' : 'お問い合わせ'
      }
    }
  };

  const content = aboutContent?.page || fallbackContent.page;

  return (
    <div className="min-h-screen bg-[var(--color-light-2)]">
      <Hero
        pageKey="about"
        backgroundImage="/images/page-banner.jpeg"
        isHomepage={false}
        showButton={false}
      />

      {/* Main Content */}
      <section className="py-[8rem]">
        <div className="container">
          {/* About Section Header */}
          <motion.header 
            className="text-center mb-[6rem]"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            key={`about-header-${language}`}
          >
            <h2 className={cn("text-[3.6rem] md:text-[4.8rem] font-bold mb-4", fontClass)}>
              {language === 'en' ? (
                <>Kodomo <span className="text-quaternary">Gakuen</span></>
              ) : (
                <>こども<span className="text-quaternary">学園</span></>
              )}
            </h2>
            <hr className="w-[8rem] h-[4px] bg-quaternary mx-auto border-none rounded" />
          </motion.header>

          {/* Main About Content */}
          <motion.div 
            className="grid md:grid-cols-2 gap-[4rem] items-center mb-[8rem]"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            key={`about-main-${language}`}
          >
            <div className="space-y-6">
              {content.mainContent.paragraphs.map((paragraph, index) => (
                <motion.p 
                  key={`paragraph-${index}-${language}`}
                  className={cn("text-[1.6rem] md:text-[1.8rem] leading-relaxed text-dark-1", fontClass)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/about-1.jpg"
                  alt="Kodomo Gakuen - Bubbles"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl w-full h-auto"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Mission Content - Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-[6rem]">
            
            {/* Nurturing Section */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              key={`nurturing-${language}`}
            >
              <header className="text-center mb-[4rem]">
                <h2 className={cn("text-[3.2rem] md:text-[4rem] font-bold mb-4", fontClass)}>
                  <span className="text-primary">{content.nurturing.title}</span>
                </h2>
                <hr className="w-[6rem] h-[3px] bg-primary mx-auto border-none rounded" />
              </header>
              
              <div className="space-y-6 mb-8">
                <p className={cn("text-[1.8rem] md:text-[2rem] font-semibold text-primary text-center", fontClass)}>
                  {content.nurturing.subtitle}
                </p>
                <p className={cn("text-[1.6rem] md:text-[1.8rem] leading-relaxed text-dark-1", fontClass)}>
                  {content.nurturing.content}
                </p>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <Image
                  src="/images/about-2.JPG"
                  alt="Kodomo Gakuen - Nurturing"
                  width={500}
                  height={350}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </motion.div>

            {/* Vision Section */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              key={`vision-${language}`}
            >
              <header className="text-center mb-[4rem]">
                <h2 className={cn("text-[3.2rem] md:text-[4rem] font-bold mb-4", fontClass)}>
                  {content.vision.title}<span className="text-secondary"> {content.vision.title2}</span>
                </h2>
                <hr className="w-[6rem] h-[3px] bg-secondary mx-auto border-none rounded" />
              </header>
              
              <div className="space-y-6 mb-8">
                {content.vision.paragraphs.map((paragraph, index) => (
                  <motion.p 
                    key={`vision-paragraph-${index}-${language}`}
                    className={cn("text-[1.6rem] md:text-[1.8rem] leading-relaxed text-dark-1", fontClass)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <Image
                  src="/images/about-3.JPG"
                  alt="Kodomo Gakuen - Tanabata Festival"
                  width={500}
                  height={350}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </motion.div>
          </div>

          
        </div>
      </section>
    </div>
  );
}
