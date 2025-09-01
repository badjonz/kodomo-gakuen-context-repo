'use client'

import Hero from '@/components/sections/Hero'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function NyuujiPage() {
  // Inline age group content data
  const ageGroups = [
    {
      titlePart1: "た",
      titlePart2: "ま", 
      titlePart3: "ご",
      colorClass: "text-green-600",
      bgColorClass: "bg-green-600", 
      description: "四季折々の自然を感じられる中でのびのびと駆け回り笑顔のあふれる保育をしています。",
      image: "/images/tamago.JPG",
      alt: "たまごクラスの子どもたち"
    },
    {
      titlePart1: "ひ",
      titlePart2: "よ",
      titlePart3: "こ", 
      colorClass: "text-yellow-600",
      bgColorClass: "bg-yellow-600",
      description: "四季折々の自然を感じられる中でのびのびと駆け回り笑顔のあふれる保育をしています。",
      image: "/images/hiyoko.JPG",
      alt: "ひよこクラスの子どもたち"
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
        <article className="container mx-auto px-4 max-w-[78vw] px-[7rem] py-[8rem] [background-image:linear-gradient(to_bottom,#f688ab_0%,#f688ab_40%,#ffca3a_70%,#ffca3a_100%)] rounded-[4rem]">
          {ageGroups.map((group, index) => (
            <div key={index} className="mb-16 last:mb-0 bg-white bg-opacity-70 rounded-[6px]">
              {/* Age Group Header */}
              <motion.header 
                className="text-center mb-12"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-6xl font-bold mb-4">
                  {group.titlePart1}<span className={group.colorClass}>{group.titlePart2}</span>{group.titlePart3}
                </h2>
                <hr className={`w-32 h-1 ${group.bgColorClass} mx-auto border-none rounded`} />
              </motion.header>

              {/* Age Group Content */}
              <motion.div 
                className="grid md:grid-cols-2 gap-8 items-center"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Text Content */}
                <div className="order-2 md:order-1">
                  <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                    {group.description}
                  </p>
                </div>

                {/* Image Content */}
                <div className="order-1 md:order-2">
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

              {/* Section Break - only show if not last item */}
              {index < ageGroups.length - 1 && (
                <hr className="my-16 border-t-2 border-gray-300 max-w-4xl mx-auto" />
              )}
            </div>
          ))}
        </article>
      </section>
    </main>
  )
}