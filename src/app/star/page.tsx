'use client'

import Hero from '@/components/sections/Hero'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { useSectionContent } from '@/hooks/useContent'

export default function StarPage() {
  const { language } = useLanguage();
  const { content: starContent } = useSectionContent('star');
  const infoRef = useRef<HTMLElement>(null)
  const teachersRef = useRef<HTMLElement>(null)
  const curriculumRef = useRef<HTMLElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Fallback content for when JSON is loading
  const fallbackContent = {
    information: [
      {
        text: language === 'en' ? 'Loading...' : '読み込み中...',
        image: "/images/star-pic-1.jpg",
        alt: language === 'en' ? 'Star Class Activities' : 'スタークラスの活動風景'
      }
    ],
    teachers: [
      {
        name: language === 'en' ? 'Loading...' : '読み込み中...',
        englishName: 'Loading...',
        image: "/images/heshani.jpg",
        description: [language === 'en' ? 'Loading...' : '読み込み中...']
      }
    ],
    curriculum: [
      {
        title: language === 'en' ? 'Loading...' : '読み込み中...',
        description: language === 'en' ? 'Loading...' : '読み込み中...'
      }
    ]
  };

  const navButtons = [
    { label: language === 'en' ? 'Info' : '情報', ref: infoRef },
    { label: language === 'en' ? 'Teachers' : '先生', ref: teachersRef },
    { label: language === 'en' ? 'Curriculum' : 'カリキュラム', ref: curriculumRef }
  ]

  const content = starContent?.page || {
    introduction: {
      title: language === 'en' ? 'International Class' : '国際クラス',
      subtitle: language === 'en' ? 'Bilingual Education Program' : 'バイリンガル教育プログラム',
      description: language === 'en' ? 'Loading...' : '読み込み中...'
    },
    information: fallbackContent.information,
    teachers: fallbackContent.teachers,
    curriculum: fallbackContent.curriculum
  };

  return (
    <main className="min-h-screen">
      <Hero 
        pageKey="star"
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
            {content.introduction.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            {content.introduction.subtitle}
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {content.introduction.description}
          </p>
        </motion.div>
      
        <article className="container mx-auto px-4 max-w-[78vw] px-[7rem] py-[8rem] bg-gradient-to-b from-secondary via-primary to-quaternary rounded-[4rem]">
          
          {/* Navigation Buttons */}
          <motion.nav 
            className="flex justify-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex bg-white/20 rounded-full p-2">
              {navButtons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(button.ref)}
                  className="px-6 py-3 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300"
                >
                  {button.label}
                </button>
              ))}
            </div>
          </motion.nav>

          {/* Information Section */}
          <motion.section
            ref={infoRef}
            className="bg-white bg-opacity-70 rounded-[6px] p-[3rem] mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.header 
              className="text-center mb-12"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-[4.4rem] font-bold mb-[2rem]">
                {language === 'en' ? 
                  <>Infor<span className="text-blue-500">mation</span></> : 
                  <>情<span className="text-blue-500">報</span></>
                }
              </h2>
              <hr className="w-32 h-1 bg-blue-500 mx-auto border-none rounded" />
            </motion.header>

            {(content.information || fallbackContent.information).map((info, index) => (
              <motion.div 
                key={`${index}-${language}`}
                className={`grid md:grid-cols-2 gap-8 items-center mb-8 ${
                  index % 2 === 0 ? '' : 'md:grid-flow-col-dense'
                }`}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`h-full flex flex-col justify-center ${
                  index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                }`}>
                  <p className="text-lg md:text-[1.4rem] leading-relaxed text-gray-700 mb-4">
                    {info.text}
                  </p>
                  {info.text2 && (
                    <p className="text-lg md:text-[1.4rem] leading-relaxed text-gray-700">
                      {info.text2}
                    </p>
                  )}
                </div>

                {info.image && (
                  <div className={`h-full flex items-center ${
                    index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                  }`}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                      <Image 
                        src={info.image}
                        alt={info.alt || (language === 'en' ? 'Star Class Activities' : 'スタークラスの様子')}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.section>

          {/* Teachers Section */}
          <motion.section
            ref={teachersRef}
            className="bg-white bg-opacity-70 rounded-[6px] p-[3rem] mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.header 
              className="text-center mb-12"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-[4.4rem] font-bold mb-[2rem]">
                {language === 'en' ? 
                  <>Star Class <span className="text-teal-500">Teachers</span></> : 
                  <>スター<span className="text-teal-500">クラス</span>の先生</>
                }
              </h2>
              <hr className="w-32 h-1 bg-teal-500 mx-auto border-none rounded" />
            </motion.header>

            {(content.teachers || fallbackContent.teachers).map((teacher, index) => (
              <motion.div 
                key={`${index}-${language}`}
                className={`grid md:grid-cols-2 gap-8 items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? '' : 'md:grid-flow-col-dense'
                }`}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`h-full flex flex-col justify-center ${
                  index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                }`}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                    {teacher.name} ({teacher.englishName})
                  </h3>
                  {teacher.description.map((desc, descIndex) => (
                    <p key={descIndex} className="text-lg md:text-[1.4rem] leading-relaxed text-gray-700 mb-3">
                      {desc}
                    </p>
                  ))}
                </div>

                <div className={`h-full flex items-center ${
                  index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                }`}>
                  <div className="relative aspect-[3/4] w-full max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg">
                    <Image 
                      src={teacher.image}
                      alt={`${teacher.name}${language === 'en' ? ' photo' : 'の写真'}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.section>

          {/* Curriculum Section */}
          <motion.section
            ref={curriculumRef}
            className="bg-white bg-opacity-70 rounded-[6px] p-[3rem]"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.header 
              className="text-center mb-12"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-[4.4rem] font-bold mb-[2rem]">
                {language === 'en' ? 
                  <>Curri<span className="text-purple-500">culum</span></> : 
                  <>カリ<span className="text-purple-500">キュラム</span></>
                }
              </h2>
              <hr className="w-32 h-1 bg-purple-500 mx-auto border-none rounded" />
            </motion.header>

            <div className="grid gap-8">
              {(content.curriculum || fallbackContent.curriculum).map((item, index) => (
                <motion.div 
                  key={`${index}-${language}`}
                  className="bg-white bg-opacity-50 rounded-lg p-6"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-lg md:text-[1.4rem] leading-relaxed text-gray-700 mb-4">
                    {item.description}
                  </p>
                  {item.special && (
                    <p className="text-lg md:text-[1.4rem] leading-relaxed text-gray-700 bg-yellow-100 p-4 rounded-md">
                      {item.special}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

        </article>
      </section>
    </main>
  )
}