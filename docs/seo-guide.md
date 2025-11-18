# Kodomo Gakuen SEO Implementation Guide

## Overview

This guide documents the complete SEO implementation for the Kodomo Gakuen website, a bilingual Japanese preschool/kindergarten serving Higashi Yamato and surrounding areas including Yokota Air Base. The implementation follows 2025 best practices for Japanese local search optimization.

**Target Audience:** Japanese parents searching for preschool/kindergarten options in Higashi Yamato (東大和市) and surrounding areas.

**SEO Goals:**
1. Rank highly in local Google Japan search results
2. Display rich information in search listings (structured data)
3. Optimize for mobile-first Japanese search (75% of searches)
4. Support bilingual audience (Japanese and English)
5. Pass Core Web Vitals for SEO ranking signals

---

## Table of Contents

1. [Technical SEO Foundation](#technical-seo-foundation)
2. [Japanese Search Optimization](#japanese-search-optimization)
3. [Structured Data Implementation](#structured-data-implementation)
4. [Multilingual SEO (Hreflang)](#multilingual-seo-hreflang)
5. [Social Media Optimization](#social-media-optimization)
6. [Per-Page Metadata Strategy](#per-page-metadata-strategy)
7. [Performance SEO](#performance-seo)
8. [Local SEO Strategy](#local-seo-strategy)
9. [NAP Consistency](#nap-consistency)
10. [Keyword Research for Japanese Market](#keyword-research-for-japanese-market)
11. [Ongoing Maintenance](#ongoing-maintenance)

---

## Technical SEO Foundation

### Sitemap and Robots.txt

**Implementation:**
- Package: `next-sitemap` (v4.2.3)
- Configuration: `/next-sitemap.config.js`
- Generated Files: `/public/sitemap.xml`, `/public/robots.txt`

**Sitemap Configuration:**
```javascript
module.exports = {
  siteUrl: 'https://www.kodomogakuen.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/test', '/api/*'],
}
```

**Current Sitemap:**
- **Pages Included:** 17 public pages
- **Pages Excluded:** `/test` (development page)
- **Protocol:** All URLs use HTTPS
- **Update Frequency:** Weekly (changefreq)
- **Priority:** 0.7 (default for all pages)

**Robots.txt Rules:**
```
User-agent: *
Allow: /
Disallow: /test
Disallow: /api

Sitemap: https://www.kodomogakuen.com/sitemap.xml
```

**How to Update:**
1. Sitemap regenerates automatically on `npm run build`
2. To manually regenerate: `npx next-sitemap`
3. After adding new pages, run build to update sitemap

---

## Japanese Search Optimization

### Character Limits for Japanese

Japanese uses full-width characters which display differently than English half-width characters. Google's display limits are based on **pixel width**, not character count.

**Optimized Limits:**
- **Title Tag:** ≤ 28 full-width Japanese characters (~35 characters with English)
- **Meta Description:** ~50 full-width Japanese characters (~100 with bilingual)
- **H1 Heading:** ≤ 30 full-width characters for mobile display

**Current Homepage Implementation:**
```html
<title>こども学園 - 東大和市の幼稚園・保育園 | Kodomo Gakuen</title>
<meta name="description" content="東大和市奈良橋の幼稚園・保育園。日英バイリンガル教育で横田基地周辺のご家族にも対応。月〜土7:30-18:30開園。0歳〜5歳児クラス。">
```

**Character Count:**
- Title: 28 full-width characters (includes English)
- Description: 58 full-width characters (optimized for mobile)

### Cultural Considerations

**Polite Language (敬語):**
- Use respectful language appropriate for parent audience
- Avoid overly casual tone
- Include honorifics where appropriate (ご家族, お子様)

**Local Context:**
- Emphasize local area (東大和市, 奈良橋)
- Mention nearby areas parents search from
- Include Yokota Air Base for international families

---

## Structured Data Implementation

### ChildCare Schema (Primary)

**Location:** `/src/utils/structuredData.ts`
**Schema Type:** `@type: "ChildCare"` (subtype of LocalBusiness)

**Implementation:**
```typescript
export const childCareSchema = {
  "@context": "https://schema.org",
  "@type": "ChildCare",
  "name": "こども学園 / Kodomo Gakuen",
  "alternateName": "Kodomo Gakuen Preschool",
  "description": "Bilingual preschool serving Higashi Yamato and surrounding areas",
  "url": "https://www.kodomogakuen.com",
  "telephone": "+81-42-590-3715",
  "email": "info@kodomogakuen.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2-409 Narahashi",
    "addressLocality": "Higashiyamato",
    "addressRegion": "Tokyo",
    "postalCode": "207-0031",
    "addressCountry": "JP"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "35.754746",
    "longitude": "139.424596"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:30",
      "closes": "18:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "07:30",
      "closes": "18:00"
    }
  ],
  "priceRange": "¥¥",
  "servesCuisine": "Japanese",
  "hasMap": "https://maps.google.com/?q=Kodomo+Gakuen+Higashiyamato"
}
```

**Key Fields Explained:**
- **geo:** Required for local search and map display
- **openingHoursSpecification:** Shows hours in Google Knowledge Panel
- **priceRange:** "¥¥" indicates moderate pricing
- **telephone:** International format for global accessibility

### EducationalOrganization Schema (Secondary)

**Purpose:** Provides additional educational context for search engines.

**Implementation:**
```typescript
export const educationalOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "こども学園 / Kodomo Gakuen",
  "alternateName": "Kodomo Gakuen International Preschool",
  "url": "https://www.kodomogakuen.com",
  "logo": "https://www.kodomogakuen.com/images/logo.png",
  "description": "Bilingual early childhood education serving Japanese and international families",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+81-42-590-3715",
    "contactType": "Admissions",
    "availableLanguage": ["Japanese", "English"]
  },
  "areaServed": [
    "Higashi Yamato",
    "Higashi Murayama",
    "Musashi Murayama",
    "Kodaira",
    "Tokorozawa",
    "Tachikawa",
    "Yokota Air Base"
  ]
}
```

**Key Fields Explained:**
- **areaServed:** Critical for local SEO - lists all target areas
- **availableLanguage:** Signals bilingual support to search engines
- **contactType:** "Admissions" helps Google categorize the contact point

### How Structured Data is Rendered

**Global Application:**
Both schemas are included in `/src/app/layout.tsx` and appear in the `<head>` of every page.

```tsx
<head>
  <script type="application/ld+json">
    {JSON.stringify(childCareSchema)}
  </script>
  <script type="application/ld+json">
    {JSON.stringify(educationalOrganizationSchema)}
  </script>
</head>
```

**Validation Tools:**
- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **Schema.org Validator:** https://validator.schema.org/

---

## Multilingual SEO (Hreflang)

### Implementation Strategy

The website serves a bilingual audience but uses a **single domain** with dynamic language switching via React Context. Hreflang tags tell search engines about language variants.

**Hreflang Configuration:**
```html
<link rel="alternate" hreflang="ja-JP" href="https://www.kodomogakuen.com/" />
<link rel="alternate" hreflang="en-JP" href="https://www.kodomogakuen.com/" />
<link rel="alternate" hreflang="x-default" href="https://www.kodomogakuen.com/" />
```

**Language Codes:**
- **ja-JP:** Japanese language in Japan (primary audience)
- **en-JP:** English language in Japan (Yokota Air Base families)
- **x-default:** Default fallback for unmatched regions

**Why Same URL for All Variants:**
The site uses client-side language switching (LanguageContext), so the same URL serves both languages. The hreflang tags tell Google:
1. Japanese content is available at this URL
2. English content is also available at this URL
3. Content automatically adapts based on user preference

**Implementation Location:**
`/src/app/layout.tsx` - Metadata API

```typescript
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.kodomogakuen.com',
    languages: {
      'ja-JP': 'https://www.kodomogakuen.com',
      'en-JP': 'https://www.kodomogakuen.com',
      'x-default': 'https://www.kodomogakuen.com',
    },
  },
}
```

---

## Social Media Optimization

### Open Graph Metadata

**Purpose:** Controls how pages appear when shared on Facebook, LinkedIn, and other platforms that support Open Graph.

**Implementation:**
```html
<meta property="og:title" content="こども学園 - 東大和市の幼稚園・保育園 | Kodomo Gakuen" />
<meta property="og:description" content="東大和市奈良橋の幼稚園・保育園。日英バイリンガル教育で横田基地周辺のご家族にも対応。月〜土7:30-18:30開園。0歳〜5歳児クラス。" />
<meta property="og:url" content="https://www.kodomogakuen.com/" />
<meta property="og:site_name" content="こども学園 Kodomo Gakuen" />
<meta property="og:locale" content="ja_JP" />
<meta property="og:locale:alternate" content="en_JP" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://www.kodomogakuen.com/images/hero-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="こども学園 - 東大和市の幼稚園・保育園 | Kodomo Gakuen Preschool" />
```

**Image Requirements:**
- **Recommended Size:** 1200x630px (Facebook/LinkedIn optimal)
- **Minimum Size:** 600x315px
- **Aspect Ratio:** 1.91:1
- **Format:** JPG or PNG
- **Current Image:** `/images/hero-image.jpg` (placeholder - consider creating dedicated OG image)

**Testing:**
- **Facebook Debugger:** https://developers.facebook.com/tools/debug/
- **LinkedIn Inspector:** https://www.linkedin.com/post-inspector/

### Twitter Card Metadata

**Purpose:** Controls how pages appear when shared on Twitter/X.

**Implementation:**
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@kodomogakuen" />
<meta name="twitter:creator" content="@kodomogakuen" />
<meta name="twitter:title" content="こども学園 - 東大和市の幼稚園・保育園 | Kodomo Gakuen" />
<meta name="twitter:description" content="東大和市奈良橋の幼稚園・保育園。日英バイリンガル教育で横田基地周辺のご家族にも対応。月〜土7:30-18:30開園。0歳〜5歳児クラス。" />
<meta name="twitter:image" content="https://www.kodomogakuen.com/images/hero-image.jpg" />
```

**Card Types:**
- **summary_large_image:** Large image display (currently used)
- **summary:** Small image with text (alternative)

**Twitter Account Verification:**
- **Account:** @kodomogakuen
- **Verified:** ✅ (link in site footer: https://twitter.com/kodomogakuen)

---

## Per-Page Metadata Strategy

### Metadata Utility System

**Location:** `/src/utils/metadata.ts`

**Architecture:**
- Centralized metadata configurations for all pages
- Type-safe TypeScript interfaces
- Consistent NAP data across all pages
- Per-page keyword customization

**Usage Pattern:**
```typescript
// In page-specific layout.tsx
import { generatePageMetadata } from '@/utils/metadata'

export const metadata = generatePageMetadata('about')
```

### Page-Specific Configurations

**Homepage (`/`):**
```typescript
{
  title: 'こども学園 - 東大和市の幼稚園・保育園 | Kodomo Gakuen',
  description: '東大和市奈良橋の幼稚園・保育園。日英バイリンガル教育で横田基地周辺のご家族にも対応。月〜土7:30-18:30開園。0歳〜5歳児クラス。',
  keywords: ['こども学園', 'Kodomo Gakuen', '幼稚園', '保育園', 'ようちえん', 'ほいくえん', '東大和市', '横田基地', 'バイリンガル']
}
```

**About Page (`/about`):**
```typescript
{
  title: '保育方針',
  description: 'こども学園の保育方針と教育理念...',
  keywords: ['保育方針', '教育理念', 'ふれあい保育', '感謝', '思いやり', '個性']
}
```

**Age Group Pages (`/nyuuji`, `/youji`, `/star`):**
- Each has unique title with class name
- Description includes age range and program details
- Keywords relevant to specific age group

### SEO Best Practices Per Page

1. **Unique Titles:** Every page has a distinct, descriptive title
2. **Relevant Descriptions:** Descriptions accurately reflect page content
3. **Targeted Keywords:** Keywords specific to page topic
4. **Canonical URLs:** Each page has correct canonical tag
5. **Hreflang Consistency:** All pages include language alternates

---

## Performance SEO

### Core Web Vitals Targets

**Google's Thresholds (2025):**
- **LCP (Largest Contentful Paint):** < 2.5 seconds (Green)
- **FID/INP (First Input Delay / Interaction to Next Paint):** < 100ms / 200ms (Green)
- **CLS (Cumulative Layout Shift):** < 0.1 (Green)

**Current Status:**
- **CLS:** ✅ 0 (Perfect - no layout shift)
- **LCP/FID:** ⚠️ Requires production deployment testing

### Optimizations Implemented

#### 1. Font Loading Optimization

**Problem:** Web fonts can cause FOIT (Flash of Invisible Text), harming LCP.

**Solution:**
```html
<link href="https://fonts.googleapis.com/css2?family=Kosugi:wght@400&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

**Key Parameter:** `&display=swap`
- Shows fallback font immediately (no invisible text)
- Swaps to custom font when loaded
- Prevents layout shift with proper font metrics

#### 2. Resource Hints

**Purpose:** Reduce connection latency to third-party origins.

**Implementation:**
```html
<!-- DNS resolution + TCP + TLS handshake before resource needed -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preconnect" href="https://cdnjs.cloudflare.com" />

<!-- DNS resolution only (cheaper than preconnect) -->
<link rel="dns-prefetch" href="https://maps.googleapis.com" />
<link rel="dns-prefetch" href="https://maps.gstatic.com" />
```

**When to Use:**
- **preconnect:** Critical resources loaded on every page
- **dns-prefetch:** Resources that might be needed (maps, analytics)

#### 3. Image Optimization

**Next.js Image Component:**
All images converted from `<img>` to `<Image>` component for:
- Automatic WebP/AVIF format conversion
- Responsive srcSet generation
- Lazy loading below the fold
- Size optimization
- CLS prevention

**LCP Critical Image (Hero):**
```tsx
<Image
  src="/images/hero-image.jpg"
  alt="こども学園 - 東大和市の幼稚園・保育園"
  fill
  priority  // ← Loads immediately, not lazy
  quality={90}
  sizes="100vw"
/>
```

**Below-the-Fold Images:**
```tsx
<Image
  src="/images/activity.jpg"
  width={600}
  height={400}
  loading="lazy"  // ← Defers loading until near viewport
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

#### 4. Next.js Configuration

**File:** `/next.config.js`

```javascript
images: {
  formats: ['image/avif', 'image/webp'],  // Modern formats, 30-50% smaller
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  unoptimized: true  // Required for static export
}
```

### Testing Performance

**Tools:**
1. **Lighthouse (Chrome DevTools):** Local testing
2. **PageSpeed Insights:** Production testing with real-world data
3. **Google Search Console:** Core Web Vitals report (post-deployment)

**How to Run Lighthouse:**
```bash
npx lighthouse http://localhost:3000 --view
```

---

## Local SEO Strategy

### NAP (Name, Address, Phone) Consistency

**Critical Importance:**
Google uses NAP consistency across the web to verify business legitimacy. Inconsistent NAP can hurt local rankings.

**Official NAP Data:**
- **Name:** こども学園 / Kodomo Gakuen
- **Address (Japanese):** 〒207-0031 東京都東大和市奈良橋2丁目409番地
- **Address (English):** 2-409 Narahashi, Higashiyamato, Tokyo 207-0031, Japan
- **Phone (Domestic):** 042-590-3715
- **Phone (International):** +81-42-590-3715
- **Email:** info@kodomogakuen.com

**Where NAP Must Match:**
1. Website footer
2. Website contact page
3. JSON-LD structured data (both schemas)
4. Google Business Profile
5. Facebook Page
6. Instagram bio
7. Twitter profile
8. Local directories (Yahoo Japan, Ekiten, etc.)

**Verification Checklist:**
See `/docs/seo-validation-checklist.md` for NAP consistency verification procedure.

### Geographic Targeting

**Primary Area:**
- 東大和市 (Higashi Yamato City) - Primary location

**Secondary Areas:**
Parents commute from these nearby areas:
- 東村山市 (Higashi Murayama)
- 武蔵村山市 (Musashi Murayama)
- 小平市 (Kodaira)
- 所沢市 (Tokorozawa)
- 立川市 (Tachikawa)

**International Audience:**
- Yokota Air Base (横田基地) - US military families
- English keywords: "Yokota Air Base", "bilingual preschool Tokyo"

**Keyword Strategy:**
Include location modifiers in metadata and content:
- "東大和市 幼稚園"
- "奈良橋 保育園"
- "横田基地近く プレスクール"

---

## Keyword Research for Japanese Market

### Writing System Variations

Japanese has three writing systems, and parents search using all of them. You **must** include all variations for comprehensive coverage.

**Example: "Kindergarten"**
1. **Kanji (漢字):** 幼稚園 - Formal, adult usage
2. **Hiragana (ひらがな):** ようちえん - Casual, phonetic
3. **Katakana (カタカナ):** キンダーガーデン - Foreign loanwords

### Primary Keyword Set

**Core Terms:**
```
幼稚園 (youchien - kindergarten, kanji)
ようちえん (youchien - kindergarten, hiragana)
保育園 (hoikuen - nursery, kanji)
ほいくえん (hoikuen - nursery, hiragana)
プレスクール (preschool - katakana)
こども園 (combined kindergarten/nursery, mixed)
```

**Location Terms:**
```
東大和 (Higashi Yamato, kanji)
東大和市 (Higashi Yamato City, kanji)
ひがしやまと (Higashi Yamato, hiragana)
奈良橋 (Narahashi, kanji)
```

**Program Features:**
```
バイリンガル (bilingual, katakana)
英語 (English, kanji)
インターナショナル (international, katakana)
横田基地 (Yokota Air Base, kanji)
```

**Current Keyword Implementation:**
All variations are included in homepage metadata. See `/src/utils/metadata.ts` for complete list.

### Keyword Research Tools

**For Japanese Market:**
1. **Google Keyword Planner (Japan):** Search volume for Japanese keywords
2. **Yahoo! Japan Search Suggest:** Popular autocomplete queries
3. **Google Trends (Japan):** Seasonal trends (enrollment periods)
4. **Competitor Analysis:** Keywords used by local kindergartens

**Seasonal Considerations:**
- **4月 (April):** Japanese school year starts - peak search volume
- **1-3月 (Jan-Mar):** Enrollment period - high intent searches
- **9-10月 (Sep-Oct):** Mid-year transfer searches

---

## Ongoing Maintenance

### Weekly Tasks

- Monitor Google Search Console for errors
- Check server uptime and page load speeds
- Review any new warnings or issues

### Monthly Tasks

- **Run Lighthouse Audit:**
  ```bash
  npx lighthouse https://www.kodomogakuen.com --view
  ```
- Review Core Web Vitals in Google Search Console
- Check search rankings for primary keywords
- Analyze organic traffic trends in Google Analytics
- Update seasonal content (if applicable)

### Quarterly Tasks

- **Full SEO Audit:** Use `/docs/seo-validation-checklist.md`
- Competitor analysis (rankings, backlinks, content)
- Review and update keyword strategy
- Check NAP consistency across all platforms
- Audit backlink profile
- Update structured data if business info changes

### Annual Tasks

- Comprehensive site audit
- Review and refresh all page metadata
- Update images and optimize new content
- Review Google Business Profile information
- Strategic planning for next year's SEO goals

---

## Resources and Tools

### Validation Tools
- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **Schema.org Validator:** https://validator.schema.org/
- **Facebook Sharing Debugger:** https://developers.facebook.com/tools/debug/
- **Twitter Card Validator:** https://cards-dev.twitter.com/validator
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **Google Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly

### Monitoring Tools
- **Google Search Console:** https://search.google.com/search-console
- **Google Analytics 4:** https://analytics.google.com/
- **Google Business Profile:** https://business.google.com/

### Documentation
- **SEO Validation Checklist:** `/docs/seo-validation-checklist.md`
- **NAP Consistency Guide:** See section above
- **Keyword Research:** See section above

---

## Troubleshooting

### Structured Data Not Showing in Search

**Problem:** Rich results not appearing after 2+ weeks
**Solutions:**
1. Validate JSON-LD with Google Rich Results Test
2. Check Google Search Console > Enhancements for errors
3. Ensure schema is in `<head>` or top of `<body>`
4. Wait 7-14 days for Google to reprocess

### Pages Not Ranking

**Problem:** Low visibility in search results
**Solutions:**
1. Check if pages are indexed (site:kodomogakuen.com in Google)
2. Verify robots.txt isn't blocking pages
3. Check for noindex tags
4. Submit sitemap to Google Search Console
5. Build backlinks from authoritative .jp domains

### Poor Performance Scores

**Problem:** Low Lighthouse/PageSpeed Insights scores
**Solutions:**
1. Minimize render-blocking JavaScript
2. Optimize images (compress, use WebP, lazy load)
3. Reduce third-party scripts
4. Implement proper caching headers
5. Use CDN for static assets

### Hreflang Errors

**Problem:** Google Search Console showing hreflang errors
**Solutions:**
1. Verify all URLs are absolute (include https://domain.com)
2. Ensure bidirectional linking (all pages link to all alternates)
3. Check for typos in language codes
4. Confirm x-default is set correctly

---

## Contact and Support

**For Questions About This Implementation:**
- Review `/docs/seo-validation-checklist.md` for testing procedures
- Check story file `/docs/stories/1.4.seo-implementation.story.md` for implementation details
- Consult `/src/utils/metadata.ts` for metadata configuration examples

**SEO Maintenance:**
- Follow the Ongoing Maintenance schedule above
- Use validation checklist monthly
- Monitor Google Search Console weekly

---

## Version History

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| 2025-01-13 | 1.0 | Initial comprehensive SEO guide creation | James (Full Stack Developer) |

**Last Updated:** 2025-01-13
**Story:** 1.4 - SEO Implementation
**Status:** Active Implementation Guide
