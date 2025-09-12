'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/utils/cn'
import { useLanguage } from '@/context/LanguageContext'
import { useSectionContent } from '@/hooks/useContent'

interface AnnouncementModalProps {
  title?: string
  content?: string
  readMoreLink?: string
}

// Fallback content for loading states - moved outside component to prevent recreation
const fallbackContent = {
  title: '７月のあいさつ',
  content: '春の進級・入園から3ヶ月が経ち、子どもたち一人ひとり、少しずつ落ち着きが感じられるようになってきました。',
  readMoreText: '続き',
  readMoreLink: '/announcement',
  minimizedText: '園長からのあいさつ'
};

export default function AnnouncementModal({
  title,
  content,
  readMoreLink
}: AnnouncementModalProps) {
  const { language } = useLanguage();
  const { content: announcementContent } = useSectionContent('announcement');
  
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [isMinimized, setIsMinimized] = useState(false)
  const [mounted, setMounted] = useState(false)

  const announcementData = useMemo(() => 
    announcementContent || fallbackContent,
    [announcementContent]
  );

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setIsMinimized(true)
  }

  const openModal = () => {
    setIsModalOpen(true)
    setIsMinimized(false)
  }

  return (
    <>
      {/* Main Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-[10000]"
              onClick={closeModal}
            />

            {/* Modal Content */}
            <motion.div
              key={`announcement-modal-${language}`}
              initial={{ opacity: 0, scale: 0.7, x: '-50%', y: '-50%' }}
              animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
              exit={{ opacity: 0, scale: 0.7, x: '-50%', y: '-50%' }}
              className={cn(
                'fixed top-1/2 left-1/2 w-1/2 max-w-2xl bg-white rounded-lg shadow-2xl z-[10001] p-24',
                'lg:w-3/4 md:w-4/5 sm:w-4/5 sm:p-14'
              )}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-5 right-8 text-gray-600 hover:text-gray-800 text-5xl font-light leading-none bg-none border-none cursor-pointer"
                aria-label="Close announcement"
              >
                &times;
              </button>

              {/* Modal Content */}
              <div className="text-center">
                <h1 className="text-3xl lg:text-4xl font-medium mb-6 text-gray-800">
                  {title || announcementData.title}
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {content || announcementData.content}
                  {(readMoreLink || announcementData.readMoreLink) && (
                    <Link
                      href={readMoreLink || announcementData.readMoreLink}
                      className="text-primary hover:text-primary-dark ml-2 underline"
                    >
                      {announcementData.readMoreText}
                    </Link>
                  )}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Minimized Announcement Bar */}
      <AnimatePresence>
        {isMinimized && (
          <motion.div
            key={`announcement-bar-${language}`}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 w-full bg-yellow-300 h-16 flex items-center justify-center z-[10002] cursor-pointer text-quaternary"
            onClick={openModal}
          >
            <h2 className="text-xl font-medium">{announcementData.minimizedText}</h2>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}