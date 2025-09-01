'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';

export default function About() {
  return (
    <div className="min-h-screen bg-[var(--color-light-2)]">
      {/* Page Banner */}
      {/* <motion.div 
        className="relative h-[40vh] bg-[#333] flex items-center justify-center before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/page-banner.jpeg')] before:opacity-[45%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container text-center text-white">
          <motion.h1 
            className="text-[4.8rem] md:text-[6.4rem] font-bold mb-4 z-10"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            こども<span className="text-quaternary">学園</span>について
          </motion.h1>
          <motion.p 
            className="text-[1.8rem] md:text-[2.4rem] opacity-90"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            私たちの保育方針と教育理念
          </motion.p>
        </div>
      </motion.div> */}

      <Hero
      title='保育方針'
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
          >
            <h2 className="text-[3.6rem] md:text-[4.8rem] font-bold mb-4">
              こども<span className="text-quaternary">学園</span>
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
          >
            <div className="space-y-6">
              <p className="text-[1.6rem] md:text-[1.8rem] leading-relaxed text-dark-1">
                当園は2,000坪の敷地で、園内は森に囲まれ、50坪の恵まれた自然環境にあります。
                スタッフが一人一人丁寧に、優しく個性を大切にし、気持ちよくお子様のお世話をいたします。
                提供できるものがたくさんあります。オーストラリア、英国、ケニア、スリランカ、トリノバゴ、米国の市民権を持つ外国人。
              </p>
              <p className="text-[1.6rem] md:text-[1.8rem] leading-relaxed text-dark-1">
                保育期間中、0歳から5歳までのお子様を英語で遊びます。
                外国籍の子どもたちも多く在籍しており、国際教育にも力を入れています。英語のみで保育を行うインターナショナルクラスもあります。2歳以上、
                お子様から未就園児までの一時保育「なかよしクラップ」があります。
              </p>
              <p className="text-[1.6rem] md:text-[1.8rem] leading-relaxed text-dark-1">
                課外授業は英会話、体操、ピアノ、バイオリン、キッズダンス、フラダンス、
                スポーツ、サッカー、空手もあります。
              </p>
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
            >
              <header className="text-center mb-[4rem]">
                <h2 className="text-[3.2rem] md:text-[4rem] font-bold mb-4">
                  <span className="text-primary">はぐくみ</span>
                </h2>
                <hr className="w-[6rem] h-[3px] bg-primary mx-auto border-none rounded" />
              </header>
              
              <div className="space-y-6 mb-8">
                <p className="text-[1.8rem] md:text-[2rem] font-semibold text-primary text-center">
                  明るく伸びやかな子どもたちへ。
                </p>
                <p className="text-[1.6rem] md:text-[1.8rem] leading-relaxed text-dark-1">
                  親を敬い、誰とでも仲良くなれる子に世の中の優しさを忘れません。
                  やっと大人になった時、目立たない存在でも、なんとなく頼ってた一部の人に、
                  困った時に相談したい、そんな人になるために基材を目指そう。
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
            >
              <header className="text-center mb-[4rem]">
                <h2 className="text-[3.2rem] md:text-[4rem] font-bold mb-4">
                  <span className="text-secondary">ビジョン</span>
                </h2>
                <hr className="w-[6rem] h-[3px] bg-secondary mx-auto border-none rounded" />
              </header>
              
              <div className="space-y-6 mb-8">
                <p className="text-[1.6rem] md:text-[1.8rem] leading-relaxed text-dark-1">
                  幼児は小さな植物がついに芽を出したようなものです。つぼみが大きくなる
                  ご不明な点がございましたら、お気軽にお問い合わせください。ご不明な点がございましたら、お気軽にお問い合わせください。
                  良い家庭生活としっかりとした幼児教育が必要です。
                </p>
                <p className="text-[1.6rem] md:text-[1.8rem] leading-relaxed text-dark-1">
                  単語、数字、学校で教えること、または行き過ぎたことを強制することはできません。
                  やりがいのある人格を持った良い人の芽を育てることが重要です。
                  あなたはそれを行うことができます。
                </p>
                <p className="text-[1.6rem] md:text-[1.8rem] leading-relaxed text-dark-1">
                  子どもはどこまでも子どもらしく、伸びやかで明るく育つことが大切。
                  目先のことだけにとらわれず、将来的に社会に良い影響を与えることができればと思っています。
                </p>
                <p className="text-[1.6rem] md:text-[1.8rem] leading-relaxed text-dark-1 font-medium">
                  やりがいのある人格を持った良い人の芽を育てることが重要です。
                  あなたはそれを行うことができます。
                </p>
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

          {/* Call to Action Section */}
          <motion.div 
            className="text-center mt-[8rem] p-[4rem] bg-gradient-to-r from-primary-light/20 to-quaternary/20 rounded-2xl"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[2.4rem] md:text-[3.2rem] font-bold mb-4 text-dark-1">
              一緒に子どもたちの未来を育みませんか？
            </h3>
            <p className="text-[1.6rem] md:text-[1.8rem] text-dark-2 mb-6">
              ご質問やご見学のご希望がございましたら、お気軽にお問い合わせください。
            </p>
            <motion.button 
              className="btn hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              お問い合わせ
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
