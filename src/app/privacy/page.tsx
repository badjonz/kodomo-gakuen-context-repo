'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import { useLanguage } from '@/context/LanguageContext';
import { useSectionContent } from '@/hooks/useContent';
import { useFontClass } from '@/hooks/useFontClass';
import { cn } from '@/utils/cn';

export default function Privacy() {
  const { language } = useLanguage();
  const { content: privacyContent } = useSectionContent('privacy');
  const fontClass = useFontClass();

  // Fallback content for loading states
  const fallbackContent = {
    page: {
      introduction: "認定こども園こども学園（以下当園と言います）では、個人情報の正確と重要性を十分認識し、園児ならびに保護者・家庭に関わる個人情報の取り扱いについては、関係法令及び厚生労働省が定めたガイドラインを遵守するとともに、個人情報の適切な保護に万全を尽くし、保護者のみならず地域から信頼される認定こども園を目指します。",
      sections: []
    }
  };

  const content = privacyContent?.page || fallbackContent.page;

  return (
    <div className="min-h-screen bg-[var(--color-light-2)]">
      {/* Hero Section */}
      <Hero
        title={language === 'ja' ? "プライバシーポリシー" : "Privacy Policy"}
        backgroundImage="/images/page-banner.jpeg"
        isHomepage={false}
        showButton={false}
      />

      {/* Main Content */}
      <main className="py-[8rem]">
        <section>
          <div className="container">
            <motion.header 
              key={`privacy-header-${language}`}
              className="text-center mb-[6rem]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[3.6rem] md:text-[4.8rem] font-bold mb-4">
                {language === 'ja' ? (
                  <>プライバシー<span className="text-primary">ポリシー</span></>
                ) : (
                  <>Privacy <span className="text-primary">Policy</span></>
                )}
              </h2>
              <hr className="w-[8rem] h-[4px] bg-primary mx-auto border-none rounded" />
            </motion.header>

            <motion.div 
              key={`privacy-content-${language}`}
              className="max-w-5xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p 
                className="text-[1.6rem] md:text-[1.8rem] leading-relaxed text-dark-1 mb-8"
              >
                {content.introduction}
              </p>

              {/* Privacy Policy List */}
              <motion.ol 
                key={`privacy-sections-${language}`}
                className="space-y-8 text-[1.6rem] md:text-[1.8rem] text-dark-1"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {content.sections.map((section, index) => (
                  <motion.li 
                    key={`section-${index}-${language}`}
                    className="mb-6"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="font-semibold mb-4 text-[1.8rem] md:text-[2rem]">
                      {section.title}
                    </div>
                    <ol className="space-y-4 ml-8 list-decimal">
                      {section.items.map((item, itemIndex) => (
                        <li 
                          key={`item-${index}-${itemIndex}-${language}`}
                          className="leading-relaxed"
                        >
                          {item}
                        </li>
                      ))}
                    </ol>
                  </motion.li>
                ))}
              </motion.ol>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}