'use client'

import Hero from '@/components/sections/Hero'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function YoujiPage() {
  // Inline age group content data
  const ageGroups = [
    {
      titlePart1: "年",
      titlePart2: "少", 
      colorClass: "text-primary",
      bgColorClass: "bg-primary",
      textOrder: "order-2 md:order-1",
      imageOrder: "order-1 md:order-2",
      description: "たくさんの行事を通してみんなの成長がお互いを刺激しあい認め合う環境作りをしています。「おはよう」のご挨拶「ありがとう」の感謝の言葉・素直な心を養います。",
      image: "/images/nensho-pic.JPG",
      alt: "年少クラスの子どもたち"
    },
    {
      titlePart1: "年",
      titlePart2: "中",
      colorClass: "text-secondary",
      bgColorClass: "bg-secondary",
      textOrder: "order-2 md:order-2",
      imageOrder: "order-1 md:order-1",
      description: "たくさんの行事を通してみんなの成長がお互いを刺激しあい認め合う環境作りをしています。「おはよう」のご挨拶「ありがとう」の感謝の言葉・素直な心を養います。",
      image: "/images/nenchu-pic2.jpg",
      alt: "年中クラスの子どもたち"
    },
    {
      titlePart1: "年",
      titlePart2: "長",
      colorClass: "text-quaternary",
      bgColorClass: "bg-quaternary",
      textOrder: "order-1 md:order-1",
      imageOrder: "order-2 md:order-2",
      description: "たくさんの行事を通してみんなの成長がお互いを刺激しあい認め合う環境作りをしています。「おはよう」のご挨拶「ありがとう」の感謝の言葉・素直な心を養います。",
      image: "/images/nencho-pic.jpg",
      alt: "年長クラスの子どもたち"
    }
  ]

  return (
    <main className="min-h-screen">
      <Hero 
        title="乳児"
        backgroundImage="/images/page-banner.jpeg"
        isHomepage={false}
      />
      
      <section className="py-16 bg-gray-50">
        <article className="container mx-auto px-4 max-w-[78vw] px-[7rem] py-[8rem] [background-image:linear-gradient(to_bottom,#32cd32_0%,#32cd32_20%,#f35588_40%,#f35588_60%,#00aeff_85%,#00aeff_100%)] rounded-[4rem]">
          {ageGroups.map((group, index) => (
            <div key={index} className="mb-16 last:mb-0 bg-white bg-opacity-70 rounded-[6px]">
              {/* Age Group Header */}
              <motion.header 
                className="text-center mb-12 pt-[3rem]"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-[4.4rem] font-bold mb-[2rem]">
                  {group.titlePart1}<span className={group.colorClass}>{group.titlePart2}</span>
                </h2>
                <hr className={`w-32 h-1 ${group.bgColorClass} mx-auto border-none rounded`} />
              </motion.header>

              {/* Age Group Content */}
              <motion.div 
                className="grid md:grid-cols-2 gap-8 items-center  p-[3rem] pb-[4rem]"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Text Content */}
                <div className={`${group.textOrder} h-full flex items-center`}>
                  <p className="text-lg md:text-[1.6rem] leading-relaxed text-gray-700">
                    {group.description}
                  </p>
                </div>

                {/* Image Content */}
                <div className={`${group.imageOrder} h-full flex items-center`}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                    <Image 
                      src={group.image}
                      alt={group.alt}
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