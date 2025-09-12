'use client'

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import { useLanguage } from '@/context/LanguageContext';
import { useSectionContent } from '@/hooks/useContent';

// Download icon component
const DownloadIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

// Table row component for capacity/availability data
const TableRow = ({ certification, ages, language }: {
  certification: string;
  ages: string[];
  language: 'ja' | 'en';
}) => (
  <tr className="border-b hover:bg-gray-50">
    <td className="px-4 py-4 font-semibold text-dark-1">{certification}</td>
    {ages.map((age, index) => (
      <td key={`age-${index}-${language}`} className="px-4 py-4 text-center font-semibold">
        {age === '-' ? (
          <span className="text-gray-400">-</span>
        ) : age === '×' ? (
          <span className="font-bold text-red-600">×</span>
        ) : age === '△' ? (
          <span className="font-bold text-yellow-600">△</span>
        ) : age === '◎' ? (
          <span className="font-bold text-blue-600">◎</span>
        ) : (
          age
        )}
      </td>
    ))}
  </tr>
);

// Fallback content for loading states - moved outside component to prevent recreation
const fallbackContent = {
  page: {
    introduction: "こども学園への入園をお考えの保護者の皆様に、入園に必要な情報をご提供いたします。定員、空き状況、願書受付期間などをご確認ください。",
    capacityTable: {
      title: "令和7年度 利用定員",
      headers: ["", "0歳児", "1歳児", "2歳児", "3歳児", "4歳児", "5歳児"],
      rows: [
        { certification: "1号認定", ages: ["-", "-", "-", "13名", "14名", "-"] },
        { certification: "2号認定", ages: ["-", "-", "-", "29名", "30名", "30名"] },
        { certification: "3号認定", ages: ["5名", "14名", "22名", "-", "-", "-"] }
      ]
    },
    availabilityTable: {
      title: "令和7年度 空き状況",
      legend: "（◎…十分あり 〇…若干あり △…ほぼ満員 ✕…満員）",
      lastUpdated: "※令和7年８月１日更新",
      headers: ["", "0歳児", "1歳児", "2歳児", "3歳児", "4歳児", "5歳児"],
      rows: [
        { certification: "1号認定", ages: ["-", "-", "-", "△", "△", "×"] },
        { certification: "2号認定", ages: ["-", "-", "-", "×", "◎", "-"] },
        { certification: "3号認定", ages: ["×", "△", "◎", "-", "-", "-"] }
      ]
    },
    applicationInfo: {
      title: "令和8年度願書受け付け 令和7年9月1日 (月) 開始",
      infoSessions: {
        description: "入園説明会 (予約不要) こども学園ホールにて １０：００開始",
        dates: "9月 6日 (土) １０月１８日 (土)"
      },
      downloadLink: {
        href: "/documents/informationposter.pdf",
        downloadName: "令和８年度 入園説明会",
        buttonText: "チラシをダウンロード"
      }
    },
    intakeTable: {
      title: "令和8年度 4月受け入れ人数",
      lastUpdated: "※令和7年８月１日更新",
      headers: ["", "0歳児", "1歳児", "2歳児", "3歳児", "4歳児", "5歳児"],
      rows: [
        { certification: "1号認定", ages: ["-", "-", "-", "13名", "8名", "6名"] },
        { certification: "2号認定", ages: ["-", "-", "-", "16名", "8名", "12名"] },
        { certification: "3号認定", ages: ["3名", "9名", "10名", "-", "-", "-"] }
      ]
    },
    internationalClassTable: {
      title: "令和8年度 国際クラス 4月受け入れ人数",
      lastUpdated: "※令和7年８月１日更新",
      headers: ["0歳児 1歳児 2歳児", "3歳児", "4歳児", "5歳児"],
      description: "号認定限定\nありません\n3歳児以上",
      numbers: ["8名", "1名", "3名"]
    }
  }
};

export default function Enrolment() {
  const { language } = useLanguage();
  const { content: enrolmentContent } = useSectionContent('enrolment');

  const content = useMemo(() => 
    enrolmentContent?.page || fallbackContent.page,
    [enrolmentContent]
  );

  return (
    <div className="min-h-screen bg-[var(--color-light-2)]">
      {/* Hero Section */}
      <Hero
        title={language === 'ja' ? "入園について" : "Enrollment"}
        backgroundImage="/images/page-banner.jpeg"
        isHomepage={false}
        showButton={false}
      />

      {/* Main Content */}
      <main className="py-[8rem]">
        <section>
          <div className="container">
            <motion.header 
              key={`enrolment-header-${language}`}
              className="text-center mb-[6rem]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[3.6rem] md:text-[4.8rem] font-bold mb-4">
                {language === 'ja' ? (
                  <>入園に<span className="text-primary">ついて</span></>
                ) : (
                  <>About <span className="text-primary">Enrollment</span></>
                )}
              </h2>
              <hr className="w-[8rem] h-[4px] bg-primary mx-auto border-none rounded" />
            </motion.header>

            {/* Introduction */}
            <motion.div 
              key={`enrolment-intro-${language}`}
              className="max-w-5xl mx-auto text-center mb-[8rem]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-[1.6rem] md:text-[1.8rem] leading-relaxed text-dark-1">
                {content.introduction}
              </p>
            </motion.div>

            <div className="max-w-[78rem] mx-auto space-y-[6rem]">
              {/* Capacity Table */}
              <motion.div
                key={`enrolment-capacity-${language}`}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[2.8rem] md:text-[3.2rem] font-bold mb-6 text-center">
                  {content.capacityTable.title}
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                    <thead className="bg-gradient-to-r from-primary to-secondary text-white">
                      <tr>
                        {content.capacityTable.headers.map((header, index) => (
                          <th key={`capacity-header-${index}-${language}`} className={`px-4 py-4 font-semibold text-[1.6rem] ${
                            index === 0 ? 'text-left' : 'text-center'
                          }`}>
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="text-[1.6rem]">
                      {content.capacityTable.rows.map((row, index) => (
                        <TableRow 
                          key={`capacity-row-${index}-${language}`}
                          certification={row.certification}
                          ages={row.ages}
                          language={language}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Availability Table */}
              <motion.div
                key={`enrolment-availability-${language}`}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[2.8rem] md:text-[3.2rem] font-bold mb-6 text-center">
                  {content.availabilityTable.title}
                </h3>
                
                <p className="text-center text-[1.6rem] mb-6 text-dark-2">
                  {content.availabilityTable.legend}
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                    <thead className="bg-gradient-to-r from-quaternary to-primary text-white">
                      <tr>
                        {content.availabilityTable.headers.map((header, index) => (
                          <th key={`availability-header-${index}-${language}`} className={`px-4 py-4 font-semibold text-[1.6rem] ${
                            index === 0 ? 'text-left' : 'text-center'
                          }`}>
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="text-[2rem]">
                      {content.availabilityTable.rows.map((row, index) => (
                        <TableRow 
                          key={`availability-row-${index}-${language}`}
                          certification={row.certification}
                          ages={row.ages}
                          language={language}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <p className="text-center text-[1.4rem] text-gray-600 mt-4">
                  {content.availabilityTable.lastUpdated}
                </p>
              </motion.div>

              {/* Application Information */}
              <motion.div
                key={`enrolment-application-${language}`}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[2.8rem] md:text-[3.2rem] font-bold mb-6 text-dark-1">
                  {content.applicationInfo.title}
                </h2>
                
                <div className="space-y-4 mb-6">
                  <p className="text-[1.8rem] text-dark-1">
                    {content.applicationInfo.infoSessions.description}
                  </p>
                  <p className="text-[1.8rem] font-semibold text-primary">
                    {content.applicationInfo.infoSessions.dates}
                  </p>
                </div>
                
                <motion.a
                  href={content.applicationInfo.downloadLink.href}
                  download={content.applicationInfo.downloadLink.downloadName}
                  className="btn inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <DownloadIcon />
                  {content.applicationInfo.downloadLink.buttonText}
                </motion.a>
              </motion.div>

              {/* Intake Table */}
              <motion.div
                key={`enrolment-intake-${language}`}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[2.8rem] md:text-[3.2rem] font-bold mb-6 text-center">
                  {content.intakeTable.title}
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                    <thead className="bg-gradient-to-r from-secondary to-quaternary text-white">
                      <tr>
                        {content.intakeTable.headers.map((header, index) => (
                          <th key={`intake-header-${index}-${language}`} className={`px-4 py-4 font-semibold text-[1.6rem] ${
                            index === 0 ? 'text-left' : 'text-center'
                          }`}>
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="text-[1.6rem]">
                      {content.intakeTable.rows.map((row, index) => (
                        <TableRow 
                          key={`intake-row-${index}-${language}`}
                          certification={row.certification}
                          ages={row.ages}
                          language={language}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <p className="text-center text-[1.4rem] text-gray-600 mt-4">
                  {content.intakeTable.lastUpdated}
                </p>
              </motion.div>

              {/* International Class Table */}
              <motion.div
                key={`enrolment-international-${language}`}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[2.8rem] md:text-[3.2rem] font-bold mb-6 text-center">
                  {content.internationalClassTable.title}
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                    <thead className="bg-gradient-to-r from-primary to-quaternary text-white">
                      <tr>
                        {content.internationalClassTable.headers.map((header, index) => (
                          <th key={`international-header-${index}-${language}`} className="px-4 py-4 text-center font-semibold text-[1.6rem]">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="text-[1.6rem]">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-4 text-center font-semibold text-dark-1">
                          {content.internationalClassTable.description.split('\n').map((line, index) => (
                            <span key={`description-line-${index}-${language}`}>
                              {line}
                              {index < content.internationalClassTable.description.split('\n').length - 1 && <br />}
                            </span>
                          ))}
                        </td>
                        {content.internationalClassTable.numbers.map((number, index) => (
                          <td key={`international-number-${index}-${language}`} className="px-4 py-4 text-center font-semibold">
                            {number}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-center text-[1.4rem] text-gray-600 mt-4">
                  {content.internationalClassTable.lastUpdated}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}