# Routing

Define routing structure and patterns based on Next.js App Router for the bilingual preschool website:

### Route Configuration

```typescript
// Next.js App Router configuration for bilingual preschool site
// Routes are automatically generated from the file structure

// Route structure (Japanese is default):
// /                           - Homepage (Japanese default)
// /en                         - English homepage  
// /class/nyuuji               - Toddler class (Japanese)
// /en/class/nyuuji            - Toddler class (English)
// /class/youji                - Young children class
// /class/star                 - Star program (English instruction)
// /activities                 - Activities and curriculum
// /forms                      - Enrollment forms and documents
// /information/about          - About page
// /information/programs       - Programs overview
// /information/enrolment      - Enrollment information
// /information/fees           - Fee structure
// /information/menu           - Meal menu
// /information/privacy        - Privacy policy
// /announcements              - News and announcements
// /announcements/[slug]       - Individual announcement pages

// Middleware for language routing (middleware.ts)
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = pathname.startsWith('/en')
  
  // Skip if already has locale or is an asset/api route
  if (pathnameHasLocale || 
      pathname.startsWith('/api') ||
      pathname.startsWith('/_next') ||
      pathname.includes('.')) {
    return NextResponse.next()
  }

  // Default to Japanese locale
  request.nextUrl.pathname = pathname
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ]
}

// Route navigation helper
export const routes = {
  home: { ja: '/', en: '/en' },
  class: {
    nyuuji: { ja: '/class/nyuuji', en: '/en/class/nyuuji' },
    youji: { ja: '/class/youji', en: '/en/class/youji' },
    star: { ja: '/class/star', en: '/en/class/star' },
  },
  activities: { ja: '/activities', en: '/en/activities' },
  forms: { ja: '/forms', en: '/en/forms' },
  information: {
    about: { ja: '/information/about', en: '/en/information/about' },
    programs: { ja: '/information/programs', en: '/en/information/programs' },
    enrolment: { ja: '/information/enrolment', en: '/en/information/enrolment' },
    fees: { ja: '/information/fees', en: '/en/information/fees' },
    menu: { ja: '/information/menu', en: '/en/information/menu' },
    privacy: { ja: '/information/privacy', en: '/en/information/privacy' },
  },
  announcements: { ja: '/announcements', en: '/en/announcements' },
} as const

// Navigation helper hook
import { usePathname } from 'next/navigation'

export function useNavigation() {
  const pathname = usePathname()
  const currentLanguage: 'en' | 'ja' = pathname.startsWith('/en') ? 'en' : 'ja'
  
  const getRoute = (routeKey: keyof typeof routes, lang?: 'en' | 'ja') => {
    const route = routes[routeKey]
    const targetLang = lang || currentLanguage
    
    if (typeof route === 'object' && 'ja' in route) {
      return route[targetLang]
    }
    return route
  }

  const switchLanguage = (targetLang: 'en' | 'ja') => {
    if (currentLanguage === targetLang) return pathname
    
    if (targetLang === 'en') {
      return pathname === '/' ? '/en' : `/en${pathname}`
    } else {
      return pathname.replace('/en', '') || '/'
    }
  }

  return { currentLanguage, getRoute, switchLanguage, pathname }
}
```
