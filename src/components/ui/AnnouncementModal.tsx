'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/utils/cn'
import { useLanguage } from '@/context/LanguageContext'
import { useSectionContent } from '@/hooks/useContent'
import { useFontClass } from '@/hooks/useFontClass'

interface AnnouncementModalProps {
  title?: string
  content?: string
  readMoreLink?: string
}

// Fallback content for loading states - moved outside component to prevent recreation
const fallbackContent = {
  title: 'さあ、2学期の開幕！新たな挑戦の始まりです',
  content: '子どもたちの元気な声が園に戻り、園内が一気ににぎやかになりました。夏休みの思い出を楽しそうに話す姿や、日焼けしたお顔から、たくさんの楽しい体験をしたことが伝わってきます。',
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
  const fontClass = useFontClass();

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [mounted, setMounted] = useState(false)

  const announcementData = useMemo(() =>
    announcementContent || fallbackContent,
    [announcementContent]
  );

  useEffect(() => {
    setMounted(true)

    // Check if user has already seen the modal in this session
    const hasSeenModal = sessionStorage.getItem('kodomo-announcement-seen');
    if (hasSeenModal === 'true') {
      // Already seen - show minimized bar
      setIsModalOpen(false)
      setIsMinimized(true)
    } else {
      // First time - show modal
      setIsModalOpen(true)
      setIsMinimized(false)
    }
  }, [])

  if (!mounted) {
    return null
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setIsMinimized(true)
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('kodomo-announcement-seen', 'true');
    }
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
                'fixed top-1/2 left-1/2 md:w-1/2 w-3/4 max-w-[60rem] bg-white rounded-lg shadow-2xl z-[10001] p-24',
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
                <h1 className={cn("text-[2.2rem] md:text-[2.4rem] font-medium mb-6 text-gray-800", fontClass)}>
                  {title || announcementData.title}
                </h1>
                <p className={cn("text-[1.4rem] md:text-[1.6rem] text-gray-700 leading-relaxed mb-6", fontClass)}>
                  {content || announcementData.content}
                  {(readMoreLink || announcementData.readMoreLink) && (
                    <Link
                      href={readMoreLink || announcementData.readMoreLink}
                      className={cn("text-primary hover:text-primary-dark ml-2 underline", fontClass)}
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
            className={cn("fixed bottom-0 left-0 w-full bg-yellow-300 h-16 flex items-center justify-center z-[10002] cursor-pointer text-quaternary", fontClass)}
            onClick={openModal}
          >
            <h2 className={cn("text-xl font-medium", fontClass)}>{announcementData.minimizedText}</h2>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}