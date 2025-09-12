'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import { useLanguage } from '@/context/LanguageContext';
import { useSectionContent } from '@/hooks/useContent';

// Star bullet icon component
const StarBullet = () => (
  <svg className="w-6 h-6 text-yellow-500 inline-block" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

export default function Fees() {
  const { language } = useLanguage();
  const { content: feesContent } = useSectionContent('fees');

  // Fallback content in case loading fails
  const fallbackContent = {
    page: {
      paymentSection: {
        title: language === 'en' ? 'Loading...' : '読み込み中...',
        mainText: language === 'en' ? 'Loading content...' : 'コンテンツを読み込んでいます...',
        paymentDetails: ['Loading...'],
        busNote: 'Loading...',
        allParents: {
          title: language === 'en' ? 'Loading...' : '読み込み中...',
          points: ['Loading...']
        },
        multiChildDiscount: {
          title: language === 'en' ? 'Loading...' : '読み込み中...',
          content: 'Loading...'
        },
        certificationChange: {
          title: language === 'en' ? 'Loading...' : '読み込み中...',
          content: 'Loading...'
        }
      },
      contentSection: {
        title: language === 'en' ? 'Loading...' : '読み込み中...',
        introText: 'Loading...',
        additionalFees: {
          title: language === 'en' ? 'Loading...' : '読み込み中...',
          infantFee: 'Loading...',
          facilityFee: {
            title: 'Loading...',
            content: 'Loading...'
          },
          mealFee: {
            title: 'Loading...',
            type1: 'Loading...',
            type2: 'Loading...',
            type3: 'Loading...'
          },
          reductionNote: 'Loading...',
          busFee: 'Loading...'
        },
        busRules: ['Loading...']
      }
    }
  };

  const content = feesContent?.page || fallbackContent.page;

  return (
    <div className="min-h-screen bg-[var(--color-light-2)]">
      {/* Hero Section */}
      <Hero
        pageKey="fees"
        backgroundImage="/images/page-banner.jpeg"
        isHomepage={false}
        showButton={false}
      />

      {/* Main Content */}
      <article className="py-[8rem]">
        {/* Section 1: Payment Information */}
        <section className="mb-[8rem]">
          <div className="container">
            <motion.header 
              className="text-center mb-[6rem]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              key={`payment-header-${language}`}
            >
              <h2 className="text-[3.6rem] md:text-[4.8rem] font-bold mb-4">
                {language === 'en' ? (
                  <>Tuition Fee <span className="text-primary">Payment</span></>
                ) : (
                  <>保育料<span className="text-primary">の納付に</span>ついて</>
                )}
              </h2>
              <hr className="w-[8rem] h-[4px] bg-primary mx-auto border-none rounded" />
            </motion.header>

            <motion.div 
              className="max-w-5xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              key={`payment-content-${language}`}
            >
              <h3 className="text-[2rem] md:text-[2.4rem] font-semibold mb-6 text-dark-1">
                {content.paymentSection.mainText}
              </h3>

              {/* Payment Details */}
              <div className="space-y-4 mb-8">
                {content.paymentSection.paymentDetails.map((detail, index) => (
                  <motion.div 
                    key={`payment-detail-${index}-${language}`}
                    className="flex gap-4"
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 pt-1">
                      <StarBullet />
                    </div>
                    <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1">
                      {detail}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.p 
                className="text-[1.6rem] md:text-[1.8rem] font-semibold text-dark-1 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                key={`bus-note-${language}`}
              >
                <strong>{content.paymentSection.busNote}</strong>
              </motion.p>

              {/* All Parents Section */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                key={`all-parents-${language}`}
              >
                <h3 className="text-[2.4rem] md:text-[2.8rem] font-bold mb-6 text-dark-1">
                  {content.paymentSection.allParents.title}
                </h3>

                <div className="space-y-4 mb-8">
                  {content.paymentSection.allParents.points.map((point, index) => (
                    <div key={`parent-point-${index}-${language}`} className="flex gap-4">
                      <div className="flex-shrink-0 pt-1">
                        <StarBullet />
                      </div>
                      <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Multi-Child Discount */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-8"
                key={`discount-${language}`}
              >
                <h3 className="text-[2.4rem] md:text-[2.8rem] font-bold mb-4 text-dark-1">
                  {content.paymentSection.multiChildDiscount.title}
                </h3>
                <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1">
                  {content.paymentSection.multiChildDiscount.content}
                </p>
              </motion.div>

              {/* Certification Change */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                key={`certification-${language}`}
              >
                <h3 className="text-[2.4rem] md:text-[2.8rem] font-bold mb-4 text-dark-1">
                  {content.paymentSection.certificationChange.title}
                </h3>
                <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1">
                  {content.paymentSection.certificationChange.content}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Fee Content */}
        <section>
          <div className="container">
            <motion.header 
              className="text-center mb-[6rem]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              key={`content-header-${language}`}
            >
              <h2 className="text-[3.6rem] md:text-[4.8rem] font-bold mb-4">
                {language === 'en' ? (
                  <>Tuition Fee <span className="text-secondary">Content</span></>
                ) : (
                  <>保育料<span className="text-secondary">の内容に</span>ついて</>
                )}
              </h2>
              <hr className="w-[8rem] h-[4px] bg-secondary mx-auto border-none rounded" />
            </motion.header>

            <motion.div 
              className="max-w-5xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              key={`content-main-${language}`}
            >
              <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1 mb-8">
                {content.contentSection.introText}
              </p>

              {/* Additional Fees Section */}
              <h3 className="text-[2.4rem] md:text-[2.8rem] font-bold mb-6 text-dark-1">
                {content.contentSection.additionalFees.title}
              </h3>

              <motion.div 
                className="space-y-6 mb-8"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                key={`additional-fees-${language}`}
              >
                <div>
                  <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1 mb-2">
                    <strong>{content.contentSection.additionalFees.infantFee}</strong>
                  </p>
                </div>

                {/* Fee Details Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 pr-6 text-[1.6rem] md:text-[1.8rem] font-bold align-top whitespace-nowrap">
                          {content.contentSection.additionalFees.facilityFee.title}
                        </th>
                        <td className="py-4 text-[1.6rem] md:text-[1.8rem] text-dark-1">
                          {content.contentSection.additionalFees.facilityFee.content}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 pr-6 text-[1.6rem] md:text-[1.8rem] font-bold align-top whitespace-nowrap">
                          {content.contentSection.additionalFees.mealFee.title}
                        </th>
                        <td className="py-4 text-[1.6rem] md:text-[1.8rem] text-dark-1">
                          {content.contentSection.additionalFees.mealFee.type1}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 pr-6">&nbsp;</td>
                        <td className="py-4 text-[1.6rem] md:text-[1.8rem] text-dark-1">
                          {content.contentSection.additionalFees.mealFee.type2}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 pr-6">&nbsp;</td>
                        <td className="py-4 text-[1.6rem] md:text-[1.8rem] text-dark-1">
                          {content.contentSection.additionalFees.mealFee.type3}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-4">
                  <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1">
                    {content.contentSection.additionalFees.reductionNote}
                  </p>

                  <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1">
                    {content.contentSection.additionalFees.busFee}
                  </p>
                </div>

                {/* Bus Usage Rules */}
                <div className="space-y-4 mt-8">
                  {content.contentSection.busRules.map((rule, index) => (
                    <div key={`bus-rule-${index}-${language}`} className="flex gap-4">
                      <div className="flex-shrink-0 pt-1">
                        <StarBullet />
                      </div>
                      <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1">
                        {rule}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </article>
    </div>
  );
}