'use client'

import Hero from '@/components/sections/Hero'
import { DocumentSection } from './components/DocumentSection'
import { DocumentData, healthManagementForms, saturdayCare } from './data/documents'

// Metadata handled by layout.tsx for client components

export default function FormsPage() {
  return (
    <main className="min-h-screen">
      <Hero 
        title="健康管理票"
        
        backgroundImage="/images/page-banner.jpeg"
        isHomepage={false}
      />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <DocumentSection 
            titlePart1="健康管"
            titlePart2="理票"
            subtitle="お子様の健康管理に関する書類"
            documents={healthManagementForms}
          />
          
          <DocumentSection 
            titlePart1="土曜保"
            titlePart2="育利用"
            subtitle="土曜保育をご利用される方の申込書類"
            documents={saturdayCare}
            className="mt-16"
          />
        </div>
      </section>
    </main>
  )
}