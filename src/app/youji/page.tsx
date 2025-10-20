'use client'

import Hero from '@/components/sections/Hero'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { useSectionContent } from '@/hooks/useContent'
import { useFontClass } from '@/hooks/useFontClass'
import { cn } from '@/utils/cn'

export default function YoujiPage() {
  const { language } = useLanguage();
  const { content: youjiContent } = useSectionContent('youji');
  const fontClass = useFontClass();

  // Fallback content in case loading fails
  const fallbackContent = {
    page: {
      introduction: {
        title: language === 'en' ? 'Toddler Classes' : '幼児クラス',
        subtitle: language === 'en' ? 'Ages 3-5 years old' : '3歳から5歳までのお子様',
        description: language === 'en' ? 'Loading...' : '読み込み中...'
      },
      classes: [
        {
          name: language === 'en' ? 'Nensho Class' : '年少クラス',
          titleParts: language === 'en' ? ['Nen', 'sho'] : ['年', '少'],
          colorClass: 'text-primary',
          bgColorClass: 'bg-primary',
          description: language === 'en' ? 'Loading...' : '読み込み中...',
          image: '/images/nensho-pic.JPG',
          alt: language === 'en' ? 'Nensho Class Children' : '年少クラスの子どもたち'
        },
        {
          name: language === 'en' ? 'Nenchu Class' : '年中クラス',
          titleParts: language === 'en' ? ['Nen', 'chu'] : ['年', '中'],
          colorClass: 'text-secondary',
          bgColorClass: 'bg-secondary',
          description: language === 'en' ? 'Loading...' : '読み込み中...',
          image: '/images/nenchu-pic.JPG',
          alt: language === 'en' ? 'Nenchu Class Children' : '年中クラスの子どもたち'
        },
        {
          name: language === 'en' ? 'Nencho Class' : '年長クラス',
          titleParts: language === 'en' ? ['Nen', 'cho'] : ['年', '長'],
          colorClass: 'text-quaternary',
          bgColorClass: 'bg-quaternary',
          description: language === 'en' ? 'Loading...' : '読み込み中...',
          image: '/images/nencho-pic.JPG',
          alt: language === 'en' ? 'Nencho Class Children' : '年長クラスの子どもたち'
        }
      ]
    }
  };

  const content = youjiContent?.page || fallbackContent.page;

  return (
    <main className="min-h-screen">
      <Hero 
        pageKey="youji"
        backgroundImage="/images/page-banner.jpeg"
        isHomepage={false}
      />
      
      <section className="py-16 bg-gray-50">
        {/* Introduction Section */}
        <motion.div 
          className="container mx-auto px-4 mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          key={`intro-${language}`}
        >
          <h1 className="text-[2.6rem] md:text-6xl font-bold mb-4 text-gray-800">
            {content.introduction.title}
          </h1>
          <p className={cn("text-[1.6rem] md:text-2xl text-gray-600 mb-6", fontClass)}>
            {content.introduction.subtitle}
          </p>
          <p className={cn("text-[1.6rem] text-gray-700 max-w-3xl mx-auto", fontClass)}>
            {content.introduction.description}
          </p>
        </motion.div>

        <article className="container mx-auto md:max-w-[78vw] max-w-[82vw] md:px-[7rem] md:py-[8rem] px-[3rem] py-[4rem] [background-image:linear-gradient(to_bottom,#32cd32_0%,#32cd32_20%,#f35588_40%,#f35588_60%,#00aeff_85%,#00aeff_100%)] rounded-[4rem]">
          {content.classes.map((classInfo, index) => (
            <div key={`${index}-${language}`} className="mb-16 last:mb-0 bg-white bg-opacity-70 rounded-[6px]">
              {/* Age Group Header */}
              <motion.header 
                className="text-center mb-12 pt-[3rem]"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[2.6rem] md:text-[4.4rem] font-bold mb-[2rem]">
                  {classInfo.titleParts.map((part, partIndex) => (
                    <span key={partIndex} className={partIndex === 1 ? classInfo.colorClass : ''}>
                      {part}
                    </span>
                  ))}
                </h2>
                <hr className={`w-32 h-1 ${classInfo.bgColorClass} mx-auto border-none rounded`} />
              </motion.header>

              {/* Age Group Content */}
              <motion.div 
                className="grid md:grid-cols-2 gap-8 items-center p-[3rem] pb-[4rem]"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Text Content */}
                <div className={`${index % 2 === 0 ? 'order-1' : 'order-2 md:order-1'} h-full flex items-center`}>
                  <p className={cn("text-[1.6rem] leading-relaxed text-gray-700", fontClass)}>
                    {classInfo.description}
                  </p>
                </div>

                {/* Image Content */}
                <div className={`${index % 2 === 0 ? 'order-2' : 'order-1 md:order-2'} h-full flex items-center`}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                    <Image 
                      src={classInfo.image}
                      alt={classInfo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </article>
      </section>
    </main>
  )
}