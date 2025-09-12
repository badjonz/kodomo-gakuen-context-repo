'use client'

import Hero from '@/components/sections/Hero'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { useSectionContent } from '@/hooks/useContent'
import { useMemo } from 'react'

// Fallback content for loading states - moved outside component to prevent recreation
const fallbackContent = {
  page: {
    introduction: "英語クラブを中心とした課外教室で、楽しく学びながら国際感覚を身につけていただけます。",
    mainTitle: "英語クラブ",
    englishClassSection: {
      title: "英会話教室のご案内",
      description: [
        "「日本人は読めるが話せない」「中学校、高校で6年間も英語を勉強しているのに会話が出来ない」とよく言われます。",
        "私たちは、お子様に歌やゲーム・お遊びを通して楽しく、ごく自然に英会話を習得して頂こうと英語クラブをスタートします。",
        "目的は、「外国の文化や習慣を外国人の講師から学ぶ事」「両親とは違う肌の人が存在することを知る事」これが子供達にとっての国際化の第一歩になると考えています。単に英会話を学ぶことでなく、講師とのふれあいを通して各国の習慣や文化の違いを知り、子供達の心を広げ、英会話に対する興味と面白さを体験し、そして国際化に対応できる「心の基礎づくり」を目指しています。"
      ]
    },
    adultClassSection: {
      title: "大人クラスについて",
      description: "英会話を学習したことがある方で、ゆっくりならネイティブ・スピーカーの話すことが理解できるが、話すことに困難を感じている方が対象です。日常生活や、また海外旅行で役立つ実用的な英語を使う会話を勉強します。英会話練習を通して話す機会を多く持つことにより恥ずかしさや怖いという気持ちを解消していきます。単に言葉の勉強だけでなく、英語圈と日本との文化の違い等についても勉強します。ネイティブ英語を話せる講師が丁寧に、楽しく授業を進めていきます。ゼロからでもOKです！",
      image: "/images/english-staff.jpg",
      imageAlt: "英語クラブの様子"
    },
    downloadSection: {
      title: "R7 Flier",
      description: "英語クラブの詳細情報をご覧いただけます",
      fileName: "R7-Flier.pdf",
      downloadText: "ダウンロード"
    }
  }
};

export default function ActivitiesPage() {
  const { language } = useLanguage();
  const { content: activitiesContent } = useSectionContent('activities');

  const content = useMemo(() => 
    activitiesContent?.page || fallbackContent.page,
    [activitiesContent]
  );

  return (
    <main className="min-h-screen">
      <Hero 
        title={language === 'ja' ? "課外教室" : "After-school Activities"}
        backgroundImage="/images/page-banner.jpeg"
        isHomepage={false}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[78vw]">
          
          {/* Introduction */}
          <motion.div 
            key={`activities-intro-${language}`}
            className="max-w-5xl mx-auto text-center mb-[6rem]"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-[1.6rem] md:text-[1.8rem] leading-relaxed text-dark-1">
              {content.introduction}
            </p>
          </motion.div>

          {/* Page Title Section */}
          <motion.div
            key={`activities-title-${language}`}
            className="text-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl md:text-[4.4rem] font-bold mb-[2rem] text-gray-800">
              {content.mainTitle}
            </h1>
            <hr className="w-32 h-1 bg-primary mx-auto border-none rounded" />
          </motion.div>

          {/* Main Content Article */}
          <article className="p-8 md:p-12 mb-12">
            
            {/* English Conversation Class Information */}
            <motion.section
              key={`activities-english-class-${language}`}
              className="mb-12"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">
                {content.englishClassSection.title}
              </h2>
              
              <div className="space-y-6 text-lg md:text-[1.6rem] leading-relaxed text-gray-700">
                {content.englishClassSection.description.map((paragraph, index) => (
                  <p key={`english-desc-${index}-${language}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.section>

            {/* Adult Classes Information */}
            <motion.section
              key={`activities-adult-class-${language}`}
              className="mb-12"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">
                {content.adultClassSection.title}
              </h2>
              
              <div className="grid md:grid-cols-1 gap-8 items-center">
                <div className="space-y-6 text-lg md:text-[1.6rem] leading-relaxed text-gray-700">
                  <p>
                    {content.adultClassSection.description}
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <div className="relative w-full max-w-[58rem] overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src={content.adultClassSection.image}
                      alt={content.adultClassSection.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.section>

            {/* PDF Download Section */}
            <motion.section
              key={`activities-download-${language}`}
              className="bg-gray-50 rounded-lg p-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow">
                <div className="flex items-center">
                  
                    {/* <i className="fas fa-file-pdf text-white text-2xl"></i> */}
                    <Image 
                                src="/images/pdf-icon-png-2056.png" 
                                alt="PDF"
                                width={48}
                                height={48}
                                className="object-contain"
                              />
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {content.downloadSection.title}
                    </h3>
                    <p className="text-gray-600 text-[1.4rem]">
                      {content.downloadSection.description}
                    </p>
                  </div>
                </div>
                
                <a
                  href={`/documents/${content.downloadSection.fileName}`}
                  className="btn hover:scale-105 transition-transform duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-download mr-2"></i>
                  {content.downloadSection.downloadText}
                </a>
              </div>
            </motion.section>

          </article>
          
        </div>
      </section>
    </main>
  )
}