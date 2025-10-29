'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { useFontClass } from '@/hooks/useFontClass'
import { cn } from '@/utils/cn'

interface BlogPost {
  title: string
  date: string
  image: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    title: 'お泊まり保育 2023',
    date: '2022年 06月 22日',
    image: '/images/sleepover.JPG',
    slug: 'sleepover-2023'
  },
  {
    title: 'プラネタリウム 2023',
    date: '2023年 05月 17日',
    image: '/images/planetarium.jpg',
    slug: 'planetarium-2023'
  },
  {
    title: '新年集会 2023',
    date: '2023年 04月 03日',
    image: '/images/new-year-assembly.jpg',
    slug: 'new-year-assembly-2023'
  }
]

export default function BlogSection() {
  const { language } = useLanguage()
  const fontClass = useFontClass()

  return (
    <section id="blog-info" className={cn("blog-info col-3 section-margin", fontClass)}>
      <div className="container">
        {/* Section Header */}
        <header id="blog-header" className="blog-header section-header" key={`${language}-header`}>
          <h2 className={fontClass} style={{ fontSize: '4.4rem' }}>
            学校の<span className="text-color-4">ブログ</span>とニュース
          </h2>
          <hr className="heading-hr text-color-4" />
        </header>

        {/* Blog Posts Grid */}
        <div className="row">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="column"
            >
              {/* Blog Image */}
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={post.image}
                  alt={`${post.title} - こども学園のイベント | Kodomo Gakuen Event`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-lg"
                  loading="lazy"
                />
              </div>

              {/* Blog Content */}
              <h3 className={cn("blog-title", fontClass)}>
                <span className="text-color-4">{post.title}</span>
              </h3>

              <h4 className={cn("blog-date", fontClass)} style={{ fontSize: '1.8rem' }}>
                {post.date}
              </h4>

              <Link
                href={`/blog/${post.slug}`}
                className={fontClass}
                style={{ fontSize: '1.6rem' }}
              >
                続きを読む <i className="fas fa-chevron-right"></i>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}