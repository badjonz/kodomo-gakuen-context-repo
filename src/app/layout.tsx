import type { Metadata } from 'next'
import './globals.scss'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BackToTop from '@/components/ui/BackToTop'
import BodyWrapper from '@/components/layout/BodyWrapper'
import { LanguageProvider } from '@/context/LanguageContext'
import { ErrorBoundary } from '@/components/ui/ErrorBoundary'
import { generateAllStructuredData, schemaToJsonLd } from '@/utils/structuredData'

export const metadata: Metadata = {
  title: 'こども学園 - 東大和市の幼稚園・保育園 | Kodomo Gakuen',
  description: '東大和市奈良橋の幼稚園・保育園。日英バイリンガル教育で横田基地周辺のご家族にも対応。月〜土7:30-18:30開園。0歳〜5歳児クラス。',
  keywords: 'こども学園, Kodomo Gakuen, 幼稚園, 保育園, ようちえん, ほいくえん, 東大和市, ひがしやまと, 東やまと, 奈良橋, 横田基地, 横田基地近く, Yokota Air Base, バイリンガル, bilingual, プレスクール, preschool, 子育て支援, 幼児教育, 東村山市, 武蔵村山市, 小平市, 所沢市, 立川市, Higashi Yamato, Higashi Murayama, Musashi Murayama, Kodaira, Tokorozawa, Tachikawa, 保育園東京, 幼稚園東京',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.kodomogakuen.com',
    languages: {
      'ja-JP': 'https://www.kodomogakuen.com',
      'en-JP': 'https://www.kodomogakuen.com',
      'x-default': 'https://www.kodomogakuen.com',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    alternateLocale: ['en_JP'],
    url: 'https://www.kodomogakuen.com',
    siteName: 'こども学園 Kodomo Gakuen',
    title: 'こども学園 - 東大和市の幼稚園・保育園 | Kodomo Gakuen',
    description: '東大和市奈良橋の幼稚園・保育園。日英バイリンガル教育で横田基地周辺のご家族にも対応。月〜土7:30-18:30開園。0歳〜5歳児クラス。',
    images: [
      {
        url: 'https://www.kodomogakuen.com/images/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'こども学園 - 東大和市の幼稚園・保育園 | Kodomo Gakuen Preschool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kodomogakuen',
    creator: '@kodomogakuen',
    title: 'こども学園 - 東大和市の幼稚園・保育園 | Kodomo Gakuen',
    description: '東大和市奈良橋の幼稚園・保育園。日英バイリンガル教育で横田基地周辺のご家族にも対応。月〜土7:30-18:30開園。0歳〜5歳児クラス。',
    images: ['https://www.kodomogakuen.com/images/hero-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Generate structured data schemas for SEO
  const [localBusinessSchema, educationalOrgSchema] = generateAllStructuredData()

  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kosugi:wght@400&family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.9.0/css/flag-icon.css"
          rel="stylesheet"
        />

        {/* Structured Data for Rich Search Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaToJsonLd(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaToJsonLd(educationalOrgSchema) }}
        />
      </head>
      <body>
        <LanguageProvider>
          <BodyWrapper>
            <ErrorBoundary>
              <Header />
              <main>
                {children}
              </main>
              <Footer />
              <BackToTop />
            </ErrorBoundary>
          </BodyWrapper>
        </LanguageProvider>
      </body>
    </html>
  )
}