# Kodomo Gakuen Frontend Architecture Document

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|---------|
| 2025-09-10 | 1.0 | Initial frontend architecture documentation | Winston (Architect) |

## Template and Framework Selection

Based on analysis of the current project structure and CLAUDE.md documentation, Kodomo Gakuen is already using a well-established React/Next.js frontend stack.

**Current Framework Analysis:**
- **Framework:** Next.js with React (App Router structure)
- **Styling:** Tailwind CSS with tailwind-merge utility
- **Animation:** Framer Motion for declarative animations  
- **Type Safety:** TypeScript (recommended, currently JavaScript-based)
- **Build Tool:** Next.js built-in (Webpack/Turbo under the hood)
- **Development:** Hot reloading via `npm run dev`

**Project Structure Already Established:**
```
/src/app/          # Next.js App Router
/src/components/   # React components organized by type
/src/utils/        # Utility functions (cn.ts for class merging)
/public/images/    # Static assets
```

**Key Dependencies in Use:**
- `framer-motion` - Advanced animations
- `tailwind-merge` - Intelligent CSS class merging
- `clsx` - Conditional class utility

This is brownfield development with an existing, well-structured codebase that follows Next.js best practices.

## Frontend Tech Stack

### Technology Stack Table

| Category | Technology | Version | Purpose | Rationale |
|----------|------------|---------|---------|-----------|
| Framework | Next.js | Latest | Static site generation, routing, optimization | Industry standard for React static sites, excellent performance, SEO-friendly |
| UI Library | React | 18+ | Component-based UI development | Mature ecosystem, excellent for interactive components |
| State Management | React Context API | Built-in | Local component state, simple global state | Lightweight, sufficient for static site needs, no over-engineering |
| Routing | Next.js App Router | Built-in | File-based routing system | Automatic routing, better performance than Pages Router |
| Build Tool | Next.js/Webpack | Built-in | Bundling, optimization, hot reload | Zero-config, optimized for React/Next.js |
| Styling | Tailwind CSS | Latest | Utility-first CSS framework | Rapid development, consistent design, smaller bundle sizes |
| Class Management | tailwind-merge + clsx | Latest | Intelligent CSS class merging | Prevents Tailwind class conflicts, conditional styling |
| Animation | Framer Motion | Latest | Declarative animations, transitions | React-optimized animations, excellent performance |
| Testing | Jest + Testing Library | TBD | Unit and integration testing | Industry standard React testing (planned) |
| Component Library | Custom | N/A | Project-specific UI components | Tailored to brand requirements, full control |
| Form Handling | Native HTML5 | Built-in | Simple contact/enrollment forms | Minimal complexity for static site needs |
| Dev Tools | React DevTools | Latest | Component debugging, performance | Essential for React development |

## Project Structure

Based on the existing Next.js App Router setup and current organization, here's the detailed project structure optimized for AI development tools and following Next.js best practices:

```
KodomoGakuen-react/
├── src/
│   ├── app/                          # Next.js App Router (13+)
│   │   ├── layout.tsx                # Root layout with HTML structure
│   │   ├── page.tsx                  # Homepage component
│   │   ├── globals.css               # Global styles and Tailwind directives
│   │   ├── about/
│   │   │   └── page.tsx              # About page
│   │   ├── programs/
│   │   │   ├── page.tsx              # Programs overview
│   │   │   └── [ageGroup]/
│   │   │       └── page.tsx          # Dynamic age group pages
│   │   ├── activities/
│   │   │   └── page.tsx              # Activities page
│   │   └── contact/
│   │       └── page.tsx              # Contact page
│   │
│   ├── components/
│   │   ├── layout/                   # Layout components
│   │   │   ├── Header.tsx            # Main navigation
│   │   │   ├── Footer.tsx            # Site footer
│   │   │   └── Navigation.tsx        # Mobile navigation
│   │   ├── sections/                 # Page sections
│   │   │   ├── Hero.tsx              # Hero section component
│   │   │   ├── AgeGroups.tsx         # Age groups display
│   │   │   ├── AboutInfo.tsx         # About information
│   │   │   └── BlogSection.tsx       # Blog/news section
│   │   ├── ui/                       # Reusable UI components
│   │   │   ├── Button.tsx            # Button variations
│   │   │   ├── Card.tsx              # Card component
│   │   │   ├── Modal.tsx             # Modal dialogs
│   │   │   └── AnnouncementModal.tsx # Announcement modal
│   │   └── forms/                    # Form components
│   │       ├── ContactForm.tsx       # Contact form
│   │       └── EnrollmentForm.tsx    # Enrollment form
│   │
│   ├── hooks/                        # Custom React hooks
│   │   ├── useLocalStorage.ts        # localStorage management
│   │   ├── useMediaQuery.ts          # Responsive breakpoint detection
│   │   └── useScrollPosition.ts      # Scroll position tracking
│   │
│   ├── utils/                        # Utility functions
│   │   ├── cn.ts                     # Tailwind class merging utility
│   │   ├── constants.ts              # App constants
│   │   └── helpers.ts                # General helper functions
│   │
│   ├── lib/                          # Library configurations
│   │   ├── fonts.ts                  # Font loading configuration
│   │   └── motion.ts                 # Framer Motion presets
│   │
│   ├── types/                        # TypeScript type definitions
│   │   ├── global.ts                 # Global types
│   │   └── components.ts             # Component prop types
│   │
│   └── data/                         # Static data files
│       ├── navigation.ts             # Navigation menu data
│       ├── ageGroups.ts              # Age group information
│       └── announcements.ts          # Announcement content
│
├── public/
│   ├── images/                       # Static images
│   │   ├── hero/                     # Hero section images
│   │   ├── activities/               # Activity photos
│   │   ├── staff/                    # Staff photos
│   │   └── facilities/               # Facility photos
│   ├── documents/                    # PDF forms and documents
│   └── icons/                        # Favicon and app icons
│
├── docs/                             # Architecture documentation
│   ├── ui-architecture.md           # This document
│   ├── component-library.md         # Component documentation
│   └── development-guide.md         # Development guidelines
│
├── __tests__/                        # Test files (future)
│   ├── components/                   # Component tests
│   ├── pages/                        # Page tests
│   └── utils/                        # Utility tests
│
├── .claude/                          # Claude Code configuration
├── CLAUDE.md                         # Development instructions
├── package.json                      # Dependencies and scripts
├── next.config.js                    # Next.js configuration
├── tailwind.config.js               # Tailwind CSS configuration
└── tsconfig.json                     # TypeScript configuration
```

## Component Standards

### Component Template

```typescript
import React from 'react'
import { cn } from '@/utils/cn'

interface ComponentNameProps {
  children?: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

export function ComponentName({ 
  children,
  className,
  variant = 'primary',
  size = 'md',
  disabled = false,
  ...props 
}: ComponentNameProps) {
  return (
    <div 
      className={cn(
        // Base styles
        'inline-flex items-center justify-center rounded-md font-medium transition-colors',
        // Variant styles
        {
          'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
          'bg-gray-200 text-gray-900 hover:bg-gray-300': variant === 'secondary',
          'border border-gray-300 bg-transparent hover:bg-gray-50': variant === 'outline',
        },
        // Size styles
        {
          'h-8 px-3 text-sm': size === 'sm',
          'h-10 px-4 text-base': size === 'md',
          'h-12 px-6 text-lg': size === 'lg',
        },
        // State styles
        {
          'opacity-50 cursor-not-allowed': disabled,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
```

### Naming Conventions

**Files and Components:**
- **Components**: PascalCase - `Header.tsx`, `AnnouncementModal.tsx`
- **Hooks**: camelCase with "use" prefix - `useLocalStorage.ts`, `useMediaQuery.ts`
- **Utilities**: camelCase - `cn.ts`, `helpers.ts`
- **Types**: PascalCase interfaces - `ComponentProps`, `UserData`
- **Constants**: SCREAMING_SNAKE_CASE - `API_BASE_URL`, `DEFAULT_TIMEOUT`

**Directories:**
- **Lowercase with hyphens**: `age-groups/`, `contact-forms/`
- **Singular names**: `component/`, `hook/`, `util/` (except when plural makes sense)

**Props and Variables:**
- **camelCase**: `backgroundColor`, `isVisible`, `onButtonClick`
- **Boolean props**: prefix with "is", "has", "can", "should" - `isOpen`, `hasError`, `canEdit`
- **Event handlers**: prefix with "on" - `onClick`, `onSubmit`, `onValueChange`

**CSS Classes (Tailwind):**
- **Mobile-first**: `text-sm md:text-base lg:text-lg`
- **Logical grouping**: spacing, then layout, then appearance
- **Consistent patterns**: `bg-blue-600 hover:bg-blue-700 active:bg-blue-800`

## State Management

Based on the bilingual static site nature of Kodomo Gakuen, here's the simplified state management architecture focused on actual requirements:

### Store Structure

```
src/
├── context/
│   ├── AppContext.tsx              # Global application state
│   ├── LanguageContext.tsx         # Language preferences  
│   └── AnnouncementContext.tsx     # Announcement modal state
│
├── hooks/
│   ├── useAppContext.ts            # Hook for global app state
│   ├── useLanguage.ts              # Language management
│   ├── useLocalStorage.ts          # Persistent local storage
│   └── useAnnouncements.ts         # Announcement state management
│
└── types/
    ├── context.ts                  # Context state types
    └── global.ts                   # Global state interfaces
```

### State Management Template

```typescript
import React, { createContext, useContext, useReducer, ReactNode } from 'react'

// State interface
interface AppState {
  language: 'en' | 'ja'
  isMenuOpen: boolean
  announcements: Announcement[]
  currentAnnouncement: Announcement | null
}

// Action types
type AppAction =
  | { type: 'SET_LANGUAGE'; payload: 'en' | 'ja' }
  | { type: 'TOGGLE_MENU' }
  | { type: 'CLOSE_MENU' }
  | { type: 'SHOW_ANNOUNCEMENT'; payload: Announcement }
  | { type: 'CLOSE_ANNOUNCEMENT' }

// Initial state
const initialState: AppState = {
  language: 'en',
  isMenuOpen: false,
  announcements: [],
  currentAnnouncement: null,
}

// Reducer function
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload }
    case 'TOGGLE_MENU':
      return { ...state, isMenuOpen: !state.isMenuOpen }
    case 'CLOSE_MENU':
      return { ...state, isMenuOpen: false }
    case 'SHOW_ANNOUNCEMENT':
      return { ...state, currentAnnouncement: action.payload }
    case 'CLOSE_ANNOUNCEMENT':
      return { ...state, currentAnnouncement: null }
    default:
      return state
  }
}

// Context creation
const AppContext = createContext<{
  state: AppState
  dispatch: React.Dispatch<AppAction>
} | null>(null)

// Provider component
export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

// Custom hook for using context
export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider')
  }
  return context
}
```

## API Integration

Define API service patterns based on Next.js and React patterns for future backend integration:

### Service Template

```typescript
// API service template for future backend integration
import { NextRequest, NextResponse } from 'next/server'

// Types for API responses
interface ApiResponse<T> {
  data: T | null
  error: string | null
  status: 'success' | 'error' | 'loading'
}

interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
  language: 'en' | 'ja'
}

interface EnrollmentFormData extends ContactFormData {
  childName: string
  childAge: number
  preferredStartDate: string
  ageGroup: 'nyuuji' | 'nensho' | 'nenchu' | 'nencho'
}

// API service class for form submissions
export class ApiService {
  private baseUrl: string

  constructor(baseUrl = '/api') {
    this.baseUrl = baseUrl
  }

  async submitContactForm(data: ContactFormData): Promise<ApiResponse<{ id: string }>> {
    try {
      const response = await fetch(`${this.baseUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      return { data: result, error: null, status: 'success' }
    } catch (error) {
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
        status: 'error',
      }
    }
  }

  async submitEnrollmentForm(data: EnrollmentFormData): Promise<ApiResponse<{ id: string }>> {
    try {
      const response = await fetch(`${this.baseUrl}/enrollment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      return { data: result, error: null, status: 'success' }
    } catch (error) {
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
        status: 'error',
      }
    }
  }
}

// Singleton instance
export const apiService = new ApiService()
```

### API Client Configuration

```typescript
// Custom hook for API calls with loading states
import { useState, useCallback } from 'react'

interface UseApiOptions<T> {
  onSuccess?: (data: T) => void
  onError?: (error: string) => void
}

export function useApi<T>() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<T | null>(null)

  const execute = useCallback(async (
    apiCall: () => Promise<ApiResponse<T>>,
    options?: UseApiOptions<T>
  ) => {
    setLoading(true)
    setError(null)

    try {
      const result = await apiCall()
      
      if (result.status === 'success' && result.data) {
        setData(result.data)
        options?.onSuccess?.(result.data)
      } else {
        setError(result.error || 'Unknown error')
        options?.onError?.(result.error || 'Unknown error')
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error'
      setError(errorMessage)
      options?.onError?.(errorMessage)
    } finally {
      setLoading(false)
    }
  }, [])

  const reset = useCallback(() => {
    setData(null)
    setError(null)
    setLoading(false)
  }, [])

  return { loading, error, data, execute, reset }
}
```

## Routing

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

## Styling Guidelines

Define styling approach based on Tailwind CSS framework for consistent design across the preschool website:

### Styling Approach

The Kodomo Gakuen website uses a **utility-first CSS approach** with Tailwind CSS, enhanced by intelligent class merging for maintainable and performant styling.

**Core Styling Strategy:**
- **Tailwind CSS**: Primary styling framework for utility-first development
- **tailwind-merge + clsx**: Intelligent class conflict resolution and conditional styling
- **Mobile-first responsive design**: Progressive enhancement from mobile to desktop
- **Component-based styling**: Reusable style patterns within React components
- **Consistent design tokens**: Standardized spacing, colors, typography, and shadows

**Key Styling Patterns:**
```typescript
// Using cn utility for intelligent class merging
className={cn(
  // Base styles (always applied)
  'flex items-center justify-center rounded-lg transition-colors',
  // Conditional styles (based on props/state)
  {
    'bg-blue-600 text-white': variant === 'primary',
    'bg-gray-100 text-gray-900': variant === 'secondary',
    'opacity-50 cursor-not-allowed': disabled,
  },
  // Responsive styles (mobile-first)
  'text-sm md:text-base lg:text-lg',
  'px-4 py-2 md:px-6 md:py-3',
  // Override styles (passed from parent)
  className
)}
```

### Global Theme Variables

```css
/* Global CSS custom properties for consistent theming */
:root {
  /* Colors - Preschool Brand Palette */
  --color-primary: #3b82f6;          /* Blue - trust, learning */
  --color-primary-dark: #1d4ed8;     /* Darker blue for hover states */
  --color-secondary: #10b981;        /* Green - growth, nature */
  --color-secondary-dark: #059669;   /* Darker green for hover states */
  --color-accent: #f59e0b;           /* Orange - warmth, energy */
  --color-accent-dark: #d97706;      /* Darker orange for hover states */
  
  /* Neutral Colors */
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;
  
  /* Background Colors */
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --bg-accent: #fef3c7;             /* Warm yellow for highlights */
  
  /* Text Colors */
  --text-primary: #111827;          /* Dark gray for main text */
  --text-secondary: #6b7280;        /* Medium gray for secondary text */
  --text-muted: #9ca3af;            /* Light gray for muted text */
  
  /* Spacing Scale */
  --spacing-xs: 0.25rem;            /* 4px */
  --spacing-sm: 0.5rem;             /* 8px */
  --spacing-md: 1rem;               /* 16px */
  --spacing-lg: 1.5rem;             /* 24px */
  --spacing-xl: 2rem;               /* 32px */
  --spacing-2xl: 3rem;              /* 48px */
  --spacing-3xl: 4rem;              /* 64px */
  
  /* Typography Scale */
  --font-size-xs: 0.75rem;          /* 12px */
  --font-size-sm: 0.875rem;         /* 14px */
  --font-size-base: 1rem;           /* 16px */
  --font-size-lg: 1.125rem;         /* 18px */
  --font-size-xl: 1.25rem;          /* 20px */
  --font-size-2xl: 1.5rem;          /* 24px */
  --font-size-3xl: 1.875rem;        /* 30px */
  --font-size-4xl: 2.25rem;         /* 36px */
  
  /* Font Weights */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Border Radius */
  --radius-sm: 0.25rem;             /* 4px */
  --radius-md: 0.375rem;            /* 6px */
  --radius-lg: 0.5rem;              /* 8px */
  --radius-xl: 0.75rem;             /* 12px */
  --radius-2xl: 1rem;               /* 16px */
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  
  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 250ms ease-in-out;
  --transition-slow: 350ms ease-in-out;
  
  /* Z-Index Scale */
  --z-dropdown: 10;
  --z-modal: 50;
  --z-notification: 100;
  --z-tooltip: 200;
}

/* Global Typography Styles */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: var(--text-primary);
  background-color: var(--bg-primary);
}

/* Japanese Typography Support */
.font-japanese {
  font-family: 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', 
    'Yu Gothic', 'Meiryo', sans-serif;
}

/* Responsive Typography */
h1 { font-size: clamp(1.875rem, 4vw, 3rem); }      /* 30px - 48px */
h2 { font-size: clamp(1.5rem, 3vw, 2.25rem); }     /* 24px - 36px */
h3 { font-size: clamp(1.25rem, 2.5vw, 1.875rem); } /* 20px - 30px */
h4 { font-size: clamp(1.125rem, 2vw, 1.5rem); }    /* 18px - 24px */

/* Focus States for Accessibility */
.focus-ring {
  @apply focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2;
}

/* Animation Utilities */
.animate-fade-in {
  animation: fadeIn var(--transition-normal) ease-in-out;
}

.animate-slide-up {
  animation: slideUp var(--transition-normal) ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0; 
    transform: translateY(1rem); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}
```

## Testing Requirements

Define minimal testing requirements based on Next.js and React testing best practices for the preschool website:

### Component Test Template

```typescript
// Component test template using React Testing Library and Jest
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from '@/components/sections/Hero'

// Mock Framer Motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
  },
}))

describe('Hero Component', () => {
  const defaultProps = {
    title: 'Welcome to Kodomo Gakuen',
    subtitle: 'Nurturing growth in a bilingual environment',
    backgroundImage: '/images/hero-image.jpg',
  }

  beforeEach(() => {
    // Reset any mocks before each test
    jest.clearAllMocks()
  })

  describe('Rendering', () => {
    it('displays the correct title and subtitle', () => {
      render(<Hero {...defaultProps} />)
      
      expect(screen.getByText('Welcome to Kodomo Gakuen')).toBeInTheDocument()
      expect(screen.getByText('Nurturing growth in a bilingual environment')).toBeInTheDocument()
    })

    it('renders call-to-action button when provided', () => {
      const propsWithButton = {
        ...defaultProps,
        button: { text: 'Learn More', href: '/information/about' },
      }
      
      render(<Hero {...propsWithButton} />)
      
      const button = screen.getByRole('link', { name: /learn more/i })
      expect(button).toBeInTheDocument()
      expect(button).toHaveAttribute('href', '/information/about')
    })
  })

  describe('Language Context', () => {
    it('provides default Japanese language state', () => {
      render(
        <LanguageProvider>
          <TestComponent />
        </LanguageProvider>
      )
      
      expect(screen.getByTestId('current-language')).toHaveTextContent('ja')
    })
  })
})
```

### Testing Best Practices

1. **Unit Tests**: Test individual components in isolation
2. **Integration Tests**: Test component interactions  
3. **E2E Tests**: Test critical user flows (using Cypress/Playwright)
4. **Coverage Goals**: Aim for 80% code coverage
5. **Test Structure**: Arrange-Act-Assert pattern
6. **Mock External Dependencies**: API calls, routing, state management
