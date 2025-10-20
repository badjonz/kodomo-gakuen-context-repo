'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import { useLanguage } from '@/context/LanguageContext';
import { useSectionContent } from '@/hooks/useContent';

export default function Menu() {
  const { language } = useLanguage();
  const { content: menuContent } = useSectionContent('menu');

  // Fallback content for loading states
  const fallbackContent = {
    page: {
      introduction: "こども学園では、栄養士が考えた栄養バランスのとれた給食を提供しています。地元の新鮮な食材を使用し、子どもたちの健康と成長を第一に考えた献立作りを心がけています。",
      menuImage: {
        src: "/images/lunch-menu.jpg",
        alt: "給食メニュー",
        title: "今月の給食メニュー"
      },
      features: [],
      allergyNotice: "食物アレルギーをお持ちのお子様には、個別に対応いたします。事前にご相談ください。"
    }
  };

  const content = menuContent?.page || fallbackContent.page;

  return (
    <div className="min-h-screen bg-[var(--color-light-2)]">
      {/* Hero Section */}
      <Hero
        title={language === 'ja' ? "給食" : "School Lunch"}
        backgroundImage="/images/page-banner.jpeg"
        isHomepage={false}
        showButton={false}
      />

      {/* Main Content */}
      <main className="py-[8rem]">
        <section>
          <div className="container">
            <motion.header 
              key={`menu-header-${language}`}
              className="text-center mb-[6rem]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[3.6rem] md:text-[4.8rem] font-bold mb-4">
                {language === 'ja' ? (
                  <>給<span className="text-quaternary">食</span></>
                ) : (
                  <>School <span className="text-quaternary">Lunch</span></>
                )}
              </h2>
              <hr className="w-[8rem] h-[4px] bg-quaternary mx-auto border-none rounded" />
            </motion.header>

            {/* Introduction */}
            <motion.div 
              key={`menu-intro-${language}`}
              className="max-w-5xl mx-auto text-center mb-12"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-[1.6rem] md:text-[1.8rem] leading-relaxed text-dark-1">
                {content.introduction}
              </p>
            </motion.div>

            {/* Lunch Menu Image */}
            <motion.div 
              key={`menu-image-${language}`}
              className="max-w-5xl mx-auto text-center mb-12"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[2.4rem] md:text-[3rem] font-bold mb-6 text-quaternary">
                {content.menuImage.title}
              </h3>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-xl shadow-2xl"
              >
                <Image
                  src={content.menuImage.src}
                  alt={content.menuImage.alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Features */}
            {content.features && content.features.length > 0 && (
              <motion.div 
                key={`menu-features-${language}`}
                className="max-w-4xl mx-auto mb-12"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[2.4rem] md:text-[3rem] font-bold mb-8 text-center text-quaternary">
                  {language === 'ja' ? '給食の特徴' : 'Lunch Features'}
                </h3>
                <ul className="space-y-4">
                  {content.features.map((feature: string, index: number) => (
                    <motion.li
                      key={`feature-${index}-${language}`}
                      className="flex items-start text-[1.6rem] md:text-[1.8rem] leading-relaxed text-dark-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.15 * index }}
                      viewport={{ once: true }}
                    >
                      <span className="text-quaternary text-[2rem] mr-4 flex-shrink-0">•</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Allergy Notice */}
            <motion.div 
              key={`menu-allergy-${language}`}
              className="max-w-4xl mx-auto bg-light-1 rounded-xl p-8 border border-quaternary/20"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-[1.6rem] md:text-[1.8rem] leading-relaxed text-dark-1 text-center">
                <span className="font-semibold text-quaternary">
                  {language === 'ja' ? 'アレルギー対応について：' : 'About Allergy Accommodations: '}
                </span>
                {content.allergyNotice}
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}