import { cn } from '@/utils/cn'
import Image from 'next/image'

interface DocumentCardProps {
  title: string
  fileName: string
  downloadName: string
  description?: string
  language: 'ja' | 'en'
  className?: string
}

export function DocumentCard({ title, fileName, downloadName, description, language, className }: DocumentCardProps) {
  return (
    <div className={cn(
      "bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300",
      "md:p-6 p-10 flex items-center justify-between md:flex-row flex-col md:space-y-0 space-y-4",
      className
    )}>
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <Image 
            src="/images/pdf-icon-png-2056.png" 
            alt="PDF"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-[1.8rem] font-semibold text-gray-900 mb-1">
            {title}
          </h3>
          {description && (
            <p className="text-[1.6rem] text-gray-600 mb-2 leading-relaxed">
              {description}
            </p>
          )}
          <p className="text-[1.6rem] text-gray-500">
            {language === 'ja' ? 'PDF形式' : 'PDF Format'}
          </p>
        </div>
      </div>
      
      <div className="flex-shrink-0">
        <a
          href={`/documents/${fileName}`}
          download={downloadName}
          className="btn text-[1.6rem]"
        >
          <svg 
            className="download-icon" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
            />
          </svg>
          {language === 'ja' ? 'ダウンロード' : 'Download'}
        </a>
      </div>
    </div>
  )
}