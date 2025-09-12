'use client'

import Hero from '@/components/sections/Hero'
import { DocumentSection } from './components/DocumentSection'
import { useLanguage } from '@/context/LanguageContext'
import { useSectionContent } from '@/hooks/useContent'
import { motion } from 'framer-motion'

// Metadata handled by layout.tsx for client components

export default function FormsPage() {
  const { language } = useLanguage();
  const { content: formsContent } = useSectionContent('forms');

  // Fallback content for loading states
  const fallbackContent = {
    page: {
      introduction: "お子様の健康管理や特別な保育サービスをご利用いただくために必要な書類をご用意しています。下記よりダウンロードしてご利用ください。",
      healthManagementSection: {
        titlePart1: "健康管",
        titlePart2: "理票",
        subtitle: "お子様の健康管理に関する書類",
        documents: []
      },
      saturdayCareSection: {
        titlePart1: "土曜保",
        titlePart2: "育利用",
        subtitle: "土曜保育をご利用される方の申込書類",
        documents: []
      }
    }
  };

  const content = formsContent?.page || fallbackContent.page;

  return (
    <main className="min-h-screen">
      <Hero 
        title={language === 'ja' ? "書類" : "Forms"}
        backgroundImage="/images/page-banner.jpeg"
        isHomepage={false}
      />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <motion.div 
            key={`forms-intro-${language}`}
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

          <DocumentSection 
            key={`forms-health-${language}`}
            titlePart1={content.healthManagementSection.titlePart1}
            titlePart2={content.healthManagementSection.titlePart2}
            subtitle={content.healthManagementSection.subtitle}
            documents={content.healthManagementSection.documents}
            language={language}
          />
          
          <DocumentSection 
            key={`forms-saturday-${language}`}
            titlePart1={content.saturdayCareSection.titlePart1}
            titlePart2={content.saturdayCareSection.titlePart2}
            subtitle={content.saturdayCareSection.subtitle}
            documents={content.saturdayCareSection.documents}
            language={language}
            className="mt-16"
          />
        </div>
      </section>
    </main>
  )
}