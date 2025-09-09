'use client'

import Hero from '@/components/sections/Hero'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen">
      <Hero 
        title="課外教室"
        backgroundImage="/images/page-banner.jpeg"
        isHomepage={false}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[78vw]">
          
          {/* Page Title Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl md:text-[4.4rem] font-bold mb-[2rem] text-gray-800">
              英語クラブ
            </h1>
            <hr className="w-32 h-1 bg-primary mx-auto border-none rounded" />
          </motion.div>

          {/* Main Content Article */}
          <article className="p-8 md:p-12 mb-12">
            
            {/* English Conversation Class Information */}
            <motion.section
              className="mb-12"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">
                英会話教室のご案内
              </h2>
              
              <div className="space-y-6 text-lg md:text-[1.6rem] leading-relaxed text-gray-700">
                <p>
                  「日本人は読めるが話せない」「中学校、高校で6年間も英語を勉強しているのに会話が出来ない」とよく言われます。
                </p>
                
                <p>
                  私たちは、お子様に歌やゲーム・お遊びを通して楽しく、ごく自然に英会話を習得して頂こうと英語クラブをスタートします。
                </p>
                
                <p>
                  目的は、「外国の文化や習慣を外国人の講師から学ぶ事」「両親とは違う肌の人が存在することを知る事」これが子供達にとっての国際化の第一歩になると考えています。単に英会話を学ぶことでなく、講師とのふれあいを通して各国の習慣や文化の違いを知り、子供達の心を広げ、英会話に対する興味と面白さを体験し、そして国際化に対応できる「心の基礎づくり」を目指しています。
                </p>
              </div>
            </motion.section>

            {/* Adult Classes Information */}
            <motion.section
              className="mb-12"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">
                大人クラスについて
              </h2>
              
              <div className="grid md:grid-cols-1 gap-8 items-center">
                <div className="space-y-6 text-lg md:text-[1.6rem] leading-relaxed text-gray-700">
                  <p>
                    英会話を学習したことがある方で、ゆっくりならネイティブ・スピーカーの話すことが理解できるが、話すことに困難を感じている方が対象です。日常生活や、また海外旅行で役立つ実用的な英語を使う会話を勉強します。英会話練習を通して話す機会を多く持つことにより恥ずかしさや怖いという気持ちを解消していきます。単に言葉の勉強だけでなく、英語圏と日本との文化の違い等についても勉強します。ネイティブ英語を話せる講師が丁寧に、楽しく授業を進めていきます。ゼロからでもOKです！
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <div className="relative w-full max-w-[58rem] overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="/images/english-staff.jpg"
                      alt="英語クラブの様子"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.section>

            {/* PDF Download Section */}
            <motion.section
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
                      R7 Flier
                    </h3>
                    <p className="text-gray-600 text-[1.4rem]">
                      英語クラブの詳細情報をご覧いただけます
                    </p>
                  </div>
                </div>
                
                <a
                  href="/documents/R7-Flier.pdf"
                  className="btn hover:scale-105 transition-transform duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-download mr-2"></i>
                  ダウンロード
                </a>
              </div>
            </motion.section>

          </article>
          
        </div>
      </section>
    </main>
  )
}