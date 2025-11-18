# SEO Validation Checklist for Kodomo Gakuen Website

## Purpose
This checklist ensures all SEO implementations remain functional after code changes, content updates, or deployments. Use this for pre-deployment validation and periodic SEO health checks.

---

## Local Validation (Can be done on localhost)

### 1. HTML Source Validation

#### Meta Tags
- [ ] `<title>` tag present and follows format: "こども学園 - 東大和市の幼稚園・保育園 | Kodomo Gakuen"
- [ ] `<meta name="description">` present and ≤160 characters (~50 Japanese full-width characters)
- [ ] `<meta name="keywords">` includes Japanese variations (hiragana, katakana, kanji)
- [ ] `<meta name="robots" content="index, follow">` present on public pages
- [ ] `<meta name="googlebot">` includes max-image-preview, max-snippet, max-video-preview
- [ ] `<link rel="canonical">` points to correct HTTPS URL

#### Hreflang Tags
- [ ] `<link rel="alternate" hreflang="ja-JP">` present
- [ ] `<link rel="alternate" hreflang="en-JP">` present
- [ ] `<link rel="alternate" hreflang="x-default">` present
- [ ] All hreflang URLs use HTTPS protocol
- [ ] All hreflang URLs point to correct page equivalents

#### Open Graph Metadata
- [ ] `og:title` matches page title
- [ ] `og:description` matches meta description
- [ ] `og:url` uses HTTPS and correct page URL
- [ ] `og:site_name` is "こども学園 Kodomo Gakuen"
- [ ] `og:locale` is "ja_JP"
- [ ] `og:locale:alternate` is "en_JP"
- [ ] `og:type` is "website" for homepage, appropriate type for other pages
- [ ] `og:image` URL is absolute and uses HTTPS
- [ ] `og:image:width` is 1200
- [ ] `og:image:height` is 630
- [ ] `og:image:alt` has descriptive bilingual text

#### Twitter Card Metadata
- [ ] `twitter:card` is "summary_large_image"
- [ ] `twitter:site` is "@kodomogakuen"
- [ ] `twitter:creator` is "@kodomogakuen"
- [ ] `twitter:title` matches page title
- [ ] `twitter:description` matches meta description
- [ ] `twitter:image` URL is absolute and uses HTTPS

### 2. Structured Data (JSON-LD) Validation

#### ChildCare Schema
- [ ] `@context` is "https://schema.org"
- [ ] `@type` is "ChildCare"
- [ ] `name` includes both Japanese and English: "こども学園 / Kodomo Gakuen"
- [ ] `url` is "https://www.kodomogakuen.com"
- [ ] `telephone` is "+81-42-590-3715" (international format)
- [ ] `email` is "info@kodomogakuen.com"
- [ ] `address.streetAddress` is "2-409 Narahashi" (NAP consistency)
- [ ] `address.addressLocality` is "Higashiyamato"
- [ ] `address.addressRegion` is "Tokyo"
- [ ] `address.postalCode` is "207-0031"
- [ ] `address.addressCountry` is "JP"
- [ ] `geo.latitude` is "35.754746"
- [ ] `geo.longitude` is "139.424596"
- [ ] `openingHoursSpecification` includes Mon-Fri 07:30-18:30
- [ ] `openingHoursSpecification` includes Sat 07:30-18:00
- [ ] `priceRange` is "¥¥"
- [ ] JSON-LD is valid JSON (no syntax errors)

#### EducationalOrganization Schema
- [ ] `@context` is "https://schema.org"
- [ ] `@type` is "EducationalOrganization"
- [ ] `name` includes both Japanese and English
- [ ] `url` is "https://www.kodomogakuen.com"
- [ ] `logo` URL is absolute and uses HTTPS
- [ ] `contactPoint.telephone` is "+81-42-590-3715"
- [ ] `contactPoint.availableLanguage` includes ["Japanese", "English"]
- [ ] `areaServed` includes all target areas (Higashi Yamato, Yokota Air Base, etc.)
- [ ] JSON-LD is valid JSON (no syntax errors)

### 3. NAP (Name, Address, Phone) Consistency Check

Verify NAP is IDENTICAL across all locations:

**Expected NAP:**
- **Name:** こども学園 / Kodomo Gakuen
- **Address (Japanese):** 〒207-0031 東京都東大和市奈良橋2丁目409番地
- **Address (English):** 2-409 Narahashi, Higashiyamato, Tokyo 207-0031, Japan
- **Phone (Domestic):** 042-590-3715
- **Phone (International):** +81-42-590-3715
- **Email:** info@kodomogakuen.com

**Check NAP in:**
- [ ] JSON-LD ChildCare schema
- [ ] JSON-LD EducationalOrganization schema
- [ ] Footer component
- [ ] Contact page
- [ ] Any other location displaying business info

### 4. Resource Hints Validation
- [ ] `<link rel="preconnect" href="https://fonts.googleapis.com">`
- [ ] `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`
- [ ] `<link rel="preconnect" href="https://cdnjs.cloudflare.com">`
- [ ] `<link rel="dns-prefetch" href="https://maps.googleapis.com">`
- [ ] `<link rel="dns-prefetch" href="https://maps.gstatic.com">`
- [ ] Google Fonts URL includes `&display=swap`

### 5. Sitemap and Robots.txt Validation
- [ ] `/sitemap.xml` is accessible
- [ ] Sitemap includes all public pages
- [ ] Sitemap excludes test pages and admin pages
- [ ] All sitemap URLs use HTTPS protocol
- [ ] `/robots.txt` is accessible
- [ ] robots.txt includes sitemap reference
- [ ] robots.txt disallows test and API routes
- [ ] robots.txt allows all other routes

### 6. Image Optimization Validation
- [ ] All images use Next.js `<Image>` component (not `<img>` tags)
- [ ] All images have bilingual `alt` attributes (Japanese and English)
- [ ] Hero images have `priority` prop (LCP optimization)
- [ ] Below-the-fold images have `loading="lazy"` or default lazy loading
- [ ] Images use responsive `sizes` prop for srcSet generation
- [ ] Images specify `width` and `height` or use `fill` prop (prevent CLS)

### 7. Per-Page Metadata Validation

Test each major page route:

**Homepage (`/`)**
- [ ] Unique title and description
- [ ] Keywords relevant to preschool/kindergarten
- [ ] Location keywords included

**About Page (`/about`)**
- [ ] Unique title: "保育方針"
- [ ] Description focuses on educational philosophy
- [ ] Keywords include "保育方針", "教育理念"

**Classes Pages (`/nyuuji`, `/youji`, `/star`)**
- [ ] Each has unique title with class name
- [ ] Description includes age range and program details
- [ ] Keywords relevant to age group

**Activities Page (`/activities`)**
- [ ] Title includes "課外教室"
- [ ] Description mentions extracurricular programs

**Information Pages (`/fees`, `/menu`, `/forms`, `/enrolment`, `/privacy`)**
- [ ] Each has unique, descriptive title
- [ ] Descriptions accurately reflect page content

---

## Production-Only Validation (Requires live deployment)

### 1. Google Rich Results Test
**URL:** https://search.google.com/test/rich-results

- [ ] Test homepage URL with production domain
- [ ] ChildCare schema validates without errors
- [ ] EducationalOrganization schema validates without errors
- [ ] No warnings about missing recommended fields
- [ ] Rich result preview displays correctly

### 2. Schema.org Validator
**URL:** https://validator.schema.org/

- [ ] Paste JSON-LD from live site
- [ ] ChildCare schema validates without errors
- [ ] EducationalOrganization schema validates without errors

### 3. PageSpeed Insights (Core Web Vitals)
**URL:** https://pagespeed.web.dev/

**Mobile Test:**
- [ ] LCP (Largest Contentful Paint) < 2.5s - Green
- [ ] FID/INP (First Input Delay / Interaction to Next Paint) < 100ms/200ms - Green
- [ ] CLS (Cumulative Layout Shift) < 0.1 - Green
- [ ] Performance score > 90
- [ ] SEO score > 95

**Desktop Test:**
- [ ] LCP < 2.5s - Green
- [ ] FID/INP < 100ms/200ms - Green
- [ ] CLS < 0.1 - Green
- [ ] Performance score > 95
- [ ] SEO score > 95

### 4. Google Mobile-Friendly Test
**URL:** https://search.google.com/test/mobile-friendly

- [ ] Page is mobile-friendly
- [ ] No mobile usability issues
- [ ] Text is readable without zooming
- [ ] Touch targets are appropriately sized
- [ ] Content fits within viewport

### 5. Social Media Sharing Tests

**Facebook Sharing Debugger**
**URL:** https://developers.facebook.com/tools/debug/

- [ ] Test homepage URL
- [ ] Open Graph image loads correctly
- [ ] Title and description display correctly
- [ ] No errors or warnings
- [ ] Preview card looks professional

**Twitter Card Validator**
**URL:** https://cards-dev.twitter.com/validator

- [ ] Test homepage URL
- [ ] Twitter Card displays as "summary_large_image"
- [ ] Image loads correctly (1200x630px)
- [ ] Title and description display correctly
- [ ] Preview card looks professional

### 6. Google Search Console Monitoring

**Sitemap Submission:**
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Verify sitemap is successfully processed
- [ ] Check for sitemap errors
- [ ] Monitor indexing status of all pages

**Hreflang Implementation:**
- [ ] Check International Targeting report
- [ ] Verify no hreflang errors
- [ ] Confirm correct language/region targeting

**Core Web Vitals:**
- [ ] Monitor Core Web Vitals report
- [ ] Verify all pages show green metrics
- [ ] Address any "Needs Improvement" or "Poor" URLs

**Coverage:**
- [ ] Monitor Index Coverage report
- [ ] Verify all public pages are indexed
- [ ] Fix any "Excluded" or "Error" pages

### 7. Manual Search Engine Tests

**Google Japan Search:**
- [ ] Search: "こども学園 東大和" - Verify site appears
- [ ] Search: "幼稚園 東大和市 奈良橋" - Verify site appears
- [ ] Search: "バイリンガル 保育園 横田基地" - Verify site appears
- [ ] Check knowledge panel displays correct business information

**Google Maps:**
- [ ] Search: "Kodomo Gakuen Higashiyamato"
- [ ] Verify business listing appears
- [ ] Check NAP consistency
- [ ] Verify correct location pin

---

## Periodic Maintenance Checks (Monthly)

### Performance Monitoring
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals in Google Search Console
- [ ] Monitor page load times
- [ ] Review any performance regressions

### Content Updates
- [ ] Verify new pages have unique metadata
- [ ] Check that seasonal content updates include keywords
- [ ] Ensure blog posts have structured data
- [ ] Update sitemap if pages added/removed

### Technical Health
- [ ] Check for broken links
- [ ] Verify all images still have alt text
- [ ] Test mobile responsiveness on real devices
- [ ] Review Google Search Console for new issues

### Competitive Analysis
- [ ] Check competitor rankings for target keywords
- [ ] Review competitor metadata strategies
- [ ] Analyze backlink profiles
- [ ] Identify content gaps

---

## Quick Validation Commands

### Extract HTML for validation:
```bash
curl http://localhost:3000 > homepage-source.html
```

### Validate JSON-LD syntax:
```bash
node -e "
const html = require('fs').readFileSync('homepage-source.html', 'utf8');
const jsonLdMatches = html.match(/<script type=\"application\/ld\+json\">([\s\S]*?)<\/script>/g);
jsonLdMatches.forEach((match, idx) => {
  const json = match.replace(/<script type=\"application\/ld\+json\">/, '').replace(/<\/script>/, '');
  try {
    JSON.parse(json);
    console.log('Schema', idx + 1, '- Valid JSON: ✅');
  } catch (e) {
    console.log('Schema', idx + 1, '- Invalid JSON: ❌', e.message);
  }
});
"
```

### Check sitemap accessibility:
```bash
curl http://localhost:3000/sitemap.xml
curl http://localhost:3000/robots.txt
```

### Run Lighthouse SEO audit:
```bash
npx lighthouse http://localhost:3000 --only-categories=seo --output=json --output-path=./lighthouse-seo.json
```

---

## SEO Score Targets

### Lighthouse Scores (Minimum Acceptable)
- **SEO Score:** ≥ 95/100
- **Performance Score:** ≥ 90/100 (mobile), ≥ 95/100 (desktop)
- **Accessibility Score:** ≥ 90/100
- **Best Practices Score:** ≥ 95/100

### Core Web Vitals (Google Thresholds)
- **LCP:** < 2.5 seconds (Green), 2.5-4.0s (Yellow), > 4.0s (Red)
- **FID/INP:** < 100ms/200ms (Green), 100-300ms/200-500ms (Yellow), > 300ms/500ms (Red)
- **CLS:** < 0.1 (Green), 0.1-0.25 (Yellow), > 0.25 (Red)

### Character Limits
- **Japanese Title:** ≤ 28 full-width characters
- **Japanese Description:** ~50 full-width characters (optimal for mobile)
- **English Title:** ≤ 60 characters
- **English Description:** ≤ 160 characters

---

## Troubleshooting Common SEO Issues

### Issue: Structured Data Not Appearing in Search Results
- Verify JSON-LD is valid with Schema.org validator
- Ensure schema is in `<head>` or top of `<body>`
- Wait 2-7 days for Google to reindex
- Check Google Search Console > Enhancements for errors

### Issue: Hreflang Tags Not Working
- Verify all hreflang URLs are absolute (include domain)
- Ensure bidirectional linking (each page links to all alternates)
- Check for typos in language codes (ja-JP, en-JP, x-default)
- Monitor Google Search Console > International Targeting

### Issue: Low Performance Score
- Check for render-blocking resources
- Optimize images (use WebP, compress, lazy load)
- Reduce JavaScript bundle size
- Implement proper caching headers

### Issue: Pages Not Indexed
- Check robots.txt isn't blocking pages
- Verify noindex tag not present
- Submit sitemap to Google Search Console
- Check for canonical tag conflicts

---

## Last Updated
**Date:** 2025-01-13
**Version:** 1.0
**Author:** James (Full Stack Developer)
**Story:** 1.4 - SEO Implementation
