'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

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
  return (
    <section id="blog-info" className="blog-info col-3 section-margin">
      <div className="container">
        {/* Section Header */}
        <header id="blog-header" className="blog-header section-header">
          <h2 style={{ fontSize: '4.4rem' }}>
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
              <img
                src={post.image}
                alt={post.title}
              />
              
              {/* Blog Content */}
              <h3 className="blog-title">
                <span className="text-color-4">{post.title}</span>
              </h3>
              
              <h4 className="blog-date" style={{ fontSize: '1.8rem' }}>
                {post.date}
              </h4>
              
              <Link
                href={`/blog/${post.slug}`}
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