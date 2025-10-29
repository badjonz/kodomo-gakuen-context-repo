/**
 * Metadata Utility for Dynamic Per-Page SEO
 *
 * Provides consistent metadata generation across all pages with:
 * - Japanese character limit optimization
 * - Location-specific keywords
 * - Open Graph and Twitter Card support
 * - Bilingual hreflang configuration
 *
 * Usage:
 * ```typescript
 * export async function generateMetadata(): Promise<Metadata> {
 *   return generatePageMetadata({
 *     title: '保育方針',
 *     description: '...',
 *     keywords: ['保育方針', '教育理念', ...]
 *   })
 * }
 * ```
 */

import type { Metadata } from 'next'

/**
 * Base configuration for all pages
 */
const BASE_CONFIG = {
  siteName: 'こども学園 Kodomo Gakuen',
  siteUrl: 'https://www.kodomogakuen.com',
  defaultImage: '/images/hero-image.jpg',
  twitterHandle: '@kodomogakuen',
  locale: 'ja_JP',
  alternateLocale: 'en_JP',
} as const

/**
 * Page metadata configuration interface
 */
export interface PageMetadataConfig {
  /**
   * Page title in Japanese (will be appended with site name)
   * Keep under 25 full-width characters for optimal display
   */
  title: string

  /**
   * Page description in Japanese
   * Keep around 50-60 full-width characters for mobile optimization
   */
  description: string

  /**
   * Page-specific keywords (will be merged with base keywords)
   */
  keywords?: string[]

  /**
   * Relative page path (e.g., '/about', '/activities')
   */
  path: string

  /**
   * Optional custom Open Graph image
   * Defaults to hero-image.jpg if not specified
   */
  ogImage?: string

  /**
   * Open Graph type (defaults to 'website')
   */
  ogType?: 'website' | 'article'

  /**
   * Whether this is the homepage (skips title suffix)
   */
  isHomepage?: boolean
}

/**
 * Base keywords common to all pages
 */
const BASE_KEYWORDS = [
  'こども学園',
  'Kodomo Gakuen',
  '幼稚園',
  '保育園',
  'ようちえん',
  'ほいくえん',
  '東大和市',
  'ひがしやまと',
  '東やまと',
  '奈良橋',
  '横田基地',
  '横田基地近く',
  'Yokota Air Base',
  'バイリンガル',
  'bilingual',
  'プレスクール',
  'preschool',
  '幼児教育',
]

/**
 * Generates complete metadata object for a page
 *
 * @param config - Page metadata configuration
 * @returns Next.js Metadata object
 */
export function generatePageMetadata(config: PageMetadataConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    path,
    ogImage = BASE_CONFIG.defaultImage,
    ogType = 'website',
    isHomepage = false,
  } = config

  // Construct full title with site name
  const fullTitle = isHomepage
    ? `${title} | ${BASE_CONFIG.siteName}`
    : `${title} | ${BASE_CONFIG.siteName}`

  // Merge page keywords with base keywords
  const allKeywords = [...BASE_KEYWORDS, ...keywords].join(', ')

  // Construct full URL
  const fullUrl = `${BASE_CONFIG.siteUrl}${path}`

  // Construct image URL (handle both relative and absolute paths)
  const imageUrl = ogImage.startsWith('http')
    ? ogImage
    : `${BASE_CONFIG.siteUrl}${ogImage}`

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
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
      canonical: fullUrl,
      languages: {
        'ja-JP': fullUrl,
        'en-JP': fullUrl,
        'x-default': fullUrl,
      },
    },
    openGraph: {
      type: ogType,
      locale: BASE_CONFIG.locale,
      alternateLocale: [BASE_CONFIG.alternateLocale],
      url: fullUrl,
      siteName: BASE_CONFIG.siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - ${BASE_CONFIG.siteName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: BASE_CONFIG.twitterHandle,
      creator: BASE_CONFIG.twitterHandle,
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  }
}

/**
 * Predefined metadata configurations for common pages
 * These can be imported directly for convenience
 */
export const METADATA_CONFIGS = {
  about: {
    title: '保育方針',
    description: 'こども学園の保育方針と教育理念。ふれあい保育・感謝・思いやりを基本に、子どもたちの個性を大切にした保育を行います。',
    keywords: ['保育方針', '教育理念', 'ふれあい保育', '感謝', '思いやり', '個性'],
    path: '/about',
  },
  activities: {
    title: '課外教室',
    description: 'サッカー、体操、音楽など多彩な課外教室。子どもたちの興味と才能を伸ばす楽しい活動を提供しています。',
    keywords: ['課外教室', 'サッカー', '体操', '音楽', '習い事', '放課後'],
    path: '/activities',
  },
  programs: {
    title: '活動内容',
    description: '日々の保育活動、年間行事、イベントなど。季節の行事や遠足、お誕生日会など子どもたちが楽しめるプログラムが充実。',
    keywords: ['活動内容', '年間行事', 'イベント', '遠足', 'お誕生日会', '季節の行事'],
    path: '/programs',
  },
  nyuuji: {
    title: '乳児クラス（0-2歳）',
    description: '0歳から2歳までの乳児クラス。少人数制で一人ひとりに寄り添った丁寧な保育を行います。',
    keywords: ['乳児', '0歳', '1歳', '2歳', '少人数制', '乳児保育'],
    path: '/nyuuji',
  },
  youji: {
    title: '幼児クラス（3-5歳）',
    description: '3歳から5歳までの幼児クラス。年齢に応じた学びと遊びで、社会性と自立心を育みます。',
    keywords: ['幼児', '3歳', '4歳', '5歳', '年少', '年中', '年長'],
    path: '/youji',
  },
  star: {
    title: '国際クラス（Starクラス）',
    description: '英語を使った国際的な保育プログラム。バイリンガル教育で異文化理解と英語力を育みます。',
    keywords: ['国際クラス', 'Star', 'スター', '英語', 'インターナショナル', 'バイリンガル教育'],
    path: '/star',
  },
  menu: {
    title: '給食',
    description: '栄養バランスを考えた手作り給食。アレルギー対応も行い、子どもたちの健康な成長をサポートします。',
    keywords: ['給食', '手作り給食', '栄養', 'アレルギー対応', '食育'],
    path: '/menu',
  },
  fees: {
    title: '保育料',
    description: 'こども学園の保育料金のご案内。各クラスの月謝、入園料、その他費用について詳しくご説明します。',
    keywords: ['保育料', '月謝', '入園料', '費用', '料金'],
    path: '/fees',
  },
  forms: {
    title: '書類ダウンロード',
    description: '入園申込書、意見書、登園届など各種書類のダウンロード。入園手続きに必要な書類がこちらからダウンロードできます。',
    keywords: ['書類', 'ダウンロード', '入園申込書', '意見書', '登園届'],
    path: '/forms',
  },
  enrolment: {
    title: '入園について',
    description: '入園の流れ、申込方法、必要書類などのご案内。見学も随時受付中です。お気軽にお問い合わせください。',
    keywords: ['入園', '申込', '見学', '入園手続き', '募集要項'],
    path: '/enrolment',
  },
  privacy: {
    title: 'プライバシーポリシー',
    description: 'こども学園の個人情報保護方針。お預かりする個人情報の取り扱いについて説明します。',
    keywords: ['プライバシーポリシー', '個人情報保護', '情報セキュリティ'],
    path: '/privacy',
  },
} as const
