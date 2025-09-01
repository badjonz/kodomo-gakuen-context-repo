'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';

export default function Menu() {
  return (
    <div className="min-h-screen bg-[var(--color-light-2)]">
      {/* Hero Section */}
      <Hero
        title="給食"
        backgroundImage="/images/page-banner.jpeg"
        isHomepage={false}
        showButton={false}
      />

      {/* Main Content */}
      <main className="py-[8rem]">
        <section>
          <div className="container">
            <motion.header 
              className="text-center mb-[6rem]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[3.6rem] md:text-[4.8rem] font-bold mb-4">
                給<span className="text-quaternary">食</span>
              </h2>
              <hr className="w-[8rem] h-[4px] bg-quaternary mx-auto border-none rounded" />
            </motion.header>

            {/* Lunch Menu Image */}
            <motion.div 
              className="max-w-5xl mx-auto text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-xl shadow-2xl"
              >
                <Image
                  src="/images/lunch-menu.jpg"
                  alt="給食メニュー - Lunch Menu"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}