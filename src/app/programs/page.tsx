'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import { useLanguage } from '@/context/LanguageContext';
import { useSectionContent } from '@/hooks/useContent';
import { useFontClass } from '@/hooks/useFontClass';

// Download icon component
const DownloadIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

// Document card component
const DocumentCard = ({ title, href, downloadName, description, language, delay = 0 }: {
  title: string;
  href: string;
  downloadName: string;
  description?: string;
  language: 'ja' | 'en';
  delay?: number;
}) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <h3 className="text-[1.8rem] md:text-[2rem] font-semibold text-dark-1 mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-[1.4rem] md:text-[1.6rem] text-gray-600 mb-2">
            {description}
          </p>
        )}
      </div>
      <div className="flex-shrink-0 ml-4">
        <motion.a
          href={href}
          download={downloadName}
          className="btn inline-flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <DownloadIcon />
          {language === 'ja' ? 'ダウンロード' : 'Download'}
        </motion.a>
      </div>
    </div>
  </motion.div>
);

export default function Programs() {
  const { language } = useLanguage();
  const { content: programsContent } = useSectionContent('programs');

  // Fallback content for loading states
  const fallbackContent = {
    page: {
      introduction: "こども学園では、子どもたちの多様な学びと成長を支援するため、様々な教育プログラムや地域支援活動を実施しています。各種活動の詳細や関連資料をご覧いただけます。",
      enrollmentSection: {
        title: "入園案内",
        documents: [
          {
            title: "令和８年度 入園説明会",
            href: "/documents/informationposter.pdf",
            downloadName: "令和８年度 入園説明会",
            description: "来年度の入園に関する説明会の資料です。"
          }
        ]
      },
      tokyoSukuwakuSection: {
        title: "とうきょうすくわくプログラム地域支援",
        description: "東京都の地域子育て支援事業として、様々なプログラムを実施しています。",
        documents: [
          {
            title: "実施報告書食育",
            href: "/documents/実施報告書　食育.pdf",
            downloadName: "実施報告書　食育",
            description: "食育プログラムの実施報告書です。"
          },
          {
            title: "なかよしひろば", 
            href: "/documents/オープンプレスクール.pdf",
            downloadName: "オープンプレスクール",
            description: "オープンプレスクール「なかよしひろば」の資料です。"
          }
        ]
      }
    }
  };

  const content = programsContent?.page || fallbackContent.page;

  return (
    <div className="min-h-screen bg-[var(--color-light-2)]">
      {/* Hero Section */}
      <Hero
        title={language === 'ja' ? "活動内容" : "Educational Programs"}
        backgroundImage="/images/page-banner.jpeg"
        isHomepage={false}
        showButton={false}
      />

      {/* Main Content */}
      <main className="py-[8rem]">
        <section>
          <div className="container">
            {/* Introduction */}
            <motion.div 
              key={`programs-intro-${language}`}
              className="max-w-5xl mx-auto text-center mb-[8rem]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[1.6rem] md:text-[1.8rem] leading-relaxed text-dark-1">
                {content.introduction}
              </p>
            </motion.div>

            {/* Enrollment Information Section */}
            <motion.div
              key={`programs-enrollment-${language}`}
              className="max-w-5xl mx-auto mb-[8rem]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[2.4rem] md:text-[3rem] font-bold text-center mb-8 text-quaternary">
                {content.enrollmentSection.title}
              </h3>
              <div className="space-y-6">
                {content.enrollmentSection.documents.map((doc: any, index: number) => (
                  <DocumentCard
                    key={`enrollment-doc-${index}-${language}`}
                    title={doc.title}
                    href={doc.href}
                    downloadName={doc.downloadName}
                    description={doc.description}
                    language={language}
                    delay={0.1 * index}
                  />
                ))}
              </div>
            </motion.div>

            {/* Tokyo Sukuwaku Program Section */}
            <motion.header 
              key={`programs-sukuwaku-header-${language}`}
              className="text-center mb-[6rem]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[2.6rem] md:text-[3.2rem] font-bold mb-4">
                {language === 'ja' ? (
                  <>とうきょうすくわくプログラム<span className="text-quaternary">地域支援</span></>
                ) : (
                  <>Tokyo Sukuwaku Program <span className="text-quaternary">Community Support</span></>
                )}
              </h2>
              <hr className="w-[8rem] h-[4px] bg-quaternary mx-auto border-none rounded" />
              {content.tokyoSukuwakuSection.description && (
                <p className="text-[1.6rem] md:text-[1.8rem] leading-relaxed text-dark-1 mt-6 max-w-4xl mx-auto">
                  {content.tokyoSukuwakuSection.description}
                </p>
              )}
            </motion.header>

            {/* Documents Grid */}
            <div className="max-w-5xl mx-auto space-y-6">
              {content.tokyoSukuwakuSection.documents.map((doc: any, index: number) => (
                <DocumentCard
                  key={`sukuwaku-doc-${index}-${language}`}
                  title={doc.title}
                  href={doc.href}
                  downloadName={doc.downloadName}
                  description={doc.description}
                  language={language}
                  delay={0.2 + (0.1 * index)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}