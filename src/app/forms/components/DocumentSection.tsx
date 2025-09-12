'use client'

import { cn } from '@/utils/cn'
import { motion } from 'framer-motion'
import { DocumentCard } from './DocumentCard'

interface Document {
  title: string
  fileName: string
  downloadName: string
  description?: string
}

interface DocumentSectionProps {
  titlePart1: string
  titlePart2: string
  subtitle: string
  documents: Document[]
  language: 'ja' | 'en'
  className?: string
}

export function DocumentSection({ 
  titlePart1,
  titlePart2, 
  subtitle, 
  documents, 
  language,
  className 
}: DocumentSectionProps) {
  return (
    <section className={cn("", className)}>
      <motion.header 
        key={`section-header-${titlePart1}-${language}`}
        className="text-center mb-[6rem]"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-[3.6rem] md:text-[4.8rem] font-bold mb-4">
          {titlePart1}<span className="text-primary">{titlePart2}</span>
        </h2>
        <hr className="w-[8rem] h-[4px] bg-primary mx-auto border-none rounded" />
      </motion.header>

      <motion.p 
        key={`section-subtitle-${titlePart1}-${language}`}
        className="text-[1.6rem] md:text-[1.8rem] leading-relaxed text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {subtitle}
      </motion.p>
      
      <motion.div 
        key={`section-documents-${titlePart1}-${language}`}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 max-w-4xl mx-auto"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {documents.map((document, index) => (
          <DocumentCard
            key={`document-${titlePart1}-${index}-${language}`}
            title={document.title}
            fileName={document.fileName}
            downloadName={document.downloadName}
            description={document.description}
            language={language}
          />
        ))}
      </motion.div>
    </section>
  )
}