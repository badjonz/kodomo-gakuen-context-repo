# Components Directory Documentation

This directory contains all reusable React components for the Kodomo Gakuen website, organized by functionality and scope.

## Architecture Overview

The components are structured using a hierarchical approach:
- **Layout Components**: Global UI elements that appear on multiple pages
- **Section Components**: Page-specific sections that can be reused across different pages
- **UI Components**: Smaller, reusable interface elements

## Directory Structure

### Layout Components (`/layout/`)

#### `Header.tsx`
**Purpose**: Main site navigation and branding
**Entry Points**:
- `Header()` - Main component export
- `navLinkClass()` - Utility function for active link styling

**Key Features**:
- Bilingual navigation (Japanese primary, English secondary)
- Fixed positioning with blue info bar and main navigation
- Dropdown menus for Information and Classes sections
- Active link highlighting using Next.js pathname
- Mobile-responsive design considerations

**Dependencies**: 
- `next/navigation` for `usePathname`
- `next/link` for client-side routing

**Props**: None (stateless component using hooks)

#### `Header-backup.tsx`
**Purpose**: Backup version of the header component
**Status**: Legacy/backup file for reference

#### `Footer.tsx`
**Purpose**: Site footer with contact information and navigation
**Entry Points**:
- `Footer()` - Main component export

**Key Features**:
- Four-column layout: Quick Links, Contact Info, Social Media, Location
- Embedded Google Maps iframe for location
- External social media links with proper targeting
- Contact information display with clickable phone/email

**Data Structures**:
- `quickLinks` - Array of internal navigation links
- `socialLinks` - Array of social media platform links

### Section Components (`/sections/`)

#### `Hero.tsx`
**Purpose**: Primary hero section for homepage and internal pages
**Entry Points**:
- `Hero(props: HeroProps)` - Main component with configurable options

**Interface**:
```typescript
interface HeroProps {
  title?: string
  subtitle?: string
  showButton?: boolean
  backgroundImage?: string
  isHomepage?: boolean
}
```

**Key Features**:
- Conditional rendering for homepage vs. internal pages
- Framer Motion animations with staggered timing
- Dynamic background image support
- Responsive typography scaling
- Call-to-action button integration

**Animation Details**:
- Initial opacity/transform animations
- Staggered delays (0.2s, 0.4s, 0.6s)
- Scale transform on button hover

#### `Hero-simple.tsx`
**Purpose**: Simplified version of hero component
**Status**: Alternative hero implementation

#### `AgeGroups.tsx`
**Purpose**: Display different age group classes offered by the school
**Entry Points**:
- `AgeGroups()` - Main component export

**Functionality**: Renders age-based class information and navigation

#### `AboutInfo.tsx`
**Purpose**: About section information display
**Entry Points**:
- `AboutInfo()` - Main component export

**Functionality**: Displays school philosophy and key information

#### `BlogSection.tsx`
**Purpose**: Blog/news section for homepage
**Entry Points**:
- `BlogSection()` - Main component export

**Functionality**: Displays recent blog posts or announcements

### UI Components (`/ui/`)

#### `AnnouncementModal.tsx`
**Purpose**: Modal component for displaying site announcements
**Entry Points**:
- `AnnouncementModal(props)` - Main component export

**Functionality**: Handles modal display logic for announcements and notifications

## Component Development Guidelines

### Styling Conventions
- Use Tailwind CSS utility classes for styling
- Leverage the `cn()` utility from `/utils/cn.ts` for conditional classes
- Follow mobile-first responsive design principles
- Use semantic HTML elements where appropriate

### Animation Standards
- Framer Motion is the standard animation library
- Use consistent timing (0.8s duration, ease-out transitions)
- Implement staggered animations for multiple elements
- Consider reduced motion preferences

### TypeScript Usage
- Define interfaces for all component props
- Use proper typing for event handlers and refs
- Leverage Next.js built-in types where applicable

### State Management
- Use React hooks for local component state
- Prefer `usePathname` for navigation state
- Implement proper cleanup for effects and subscriptions

## Integration Notes

### With Next.js App Router
- All components use `'use client'` directive when needed
- Proper integration with Next.js `Link` component
- Metadata and SEO considerations in layout components

### With Tailwind CSS
- Components utilize custom Tailwind configuration
- Color scheme follows defined design system
- Responsive breakpoints align with mobile-first approach

### With Framer Motion
- Animation variants follow consistent patterns
- Performance optimizations for layout animations
- Proper handling of animation cleanup