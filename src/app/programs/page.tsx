'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';

// Download icon component
const DownloadIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

// Document card component
const DocumentCard = ({ title, href, downloadName, delay = 0 }: {
  title: string;
  href: string;
  downloadName: string;
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
          ダウンロード
        </motion.a>
      </div>
    </div>
  </motion.div>
);

export default function Programs() {
  return (
    <div className="min-h-screen bg-[var(--color-light-2)]">
      {/* Hero Section */}
      <Hero
        title="活動内容"
        backgroundImage="/images/page-banner.jpeg"
        isHomepage={false}
        showButton={false}
      />

      {/* Main Content */}
      <main className="py-[8rem]">
        <section>
          <div className="container">
            {/* Enrollment Information Section */}
            <motion.div
              className="max-w-5xl mx-auto mb-[8rem]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <DocumentCard
                title="令和８年度 入園説明会"
                href="/documents/informationposter.pdf"
                downloadName="令和８年度 入園説明会"
                delay={0.2}
              />
            </motion.div>

            {/* Tokyo Sukuwaku Program Section */}
            <motion.header 
              className="text-center mb-[6rem]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[3.6rem] md:text-[4.8rem] font-bold mb-4">
                とうきょうすくわくプログラム<span className="text-quaternary">地域支援</span>
              </h2>
              <hr className="w-[8rem] h-[4px] bg-quaternary mx-auto border-none rounded" />
            </motion.header>

            {/* Documents Grid */}
            <div className="max-w-5xl mx-auto space-y-6">
              <DocumentCard
                title="実施報告書食育"
                href="/documents/実施報告書　食育.pdf"
                downloadName="実施報告書　食育"
                delay={0.2}
              />
              
              <DocumentCard
                title="なかよしひろば"
                href="/documents/オープンプレスクール.pdf"
                downloadName="オープンプレスクール"
                delay={0.3}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}