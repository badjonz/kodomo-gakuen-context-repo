# App Directory Documentation

This directory contains the Next.js App Router configuration files and pages for the Kodomo Gakuen website.

## Architecture Overview

The app directory follows Next.js 13+ App Router conventions with TypeScript, providing:
- Server and client component separation
- Built-in SEO and metadata management
- Global layout and styling configuration
- Route-based organization

## File Structure and Entry Points

### `layout.tsx` - Root Layout Component
**Purpose**: Global application wrapper and configuration
**Entry Points**:
- `metadata` - Export for global SEO metadata
- `RootLayout({ children })` - Main layout component

**Key Features**:
- **SEO Configuration**: Comprehensive metadata including Japanese/English descriptions and keywords
- **Global Styling**: Integration with globals.css and external CSS dependencies
- **External Dependencies**: 
  - Font Awesome 5.13.0 for icons
  - Flag Icon CSS 2.9.0 for country flags
- **Language Configuration**: Sets Japanese (`ja`) as primary language
- **Typography**: Uses `font-kosugi` class for Japanese typography

**Metadata Structure**:
- Title: Bilingual preschool/kindergarten identification
- Description: Comprehensive service area description (Higashi Yamato, surrounding areas, Yokota Air Base)
- Keywords: Japanese and English SEO terms for early childhood education

**Dependencies**:
- `next` for Metadata type
- Custom globals.css for Tailwind and global styles

### `page.tsx` - Homepage Component
**Purpose**: Main homepage composition and layout
**Entry Points**:
- `HomePage()` - Default export homepage component

**Component Structure**:
1. **Header** - Site navigation and branding
2. **Hero Section** - Homepage-specific hero with:
   - `isHomepage={true}` for special homepage styling
   - Japanese subtitle: "ふれあい保育・感謝・思いやり"
   - CTA button enabled
   - Hero background image: `/images/hero-image.jpg`
3. **AgeGroups** - Class/age group information section
4. **AboutInfo** - School information and philosophy
5. **BlogSection** - Recent news/blog content
6. **Footer** - Site footer with contact and links

**Layout Pattern**: Header → Main → Footer structure with semantic HTML

**Dependencies**:
- All layout and section components from `/components/`
- Next.js built-in components and hooks

### `globals.css` - Global Styles
**Purpose**: Global CSS definitions and Tailwind configuration
**Key Features**:
- Tailwind CSS directives (@tailwind base, components, utilities)
- Global typography and spacing rules
- Custom CSS properties for theming
- Component-specific global styles

### `test/page.tsx` - Development Test Page
**Purpose**: Test environment for component development
**Entry Points**:
- Test page component for development purposes
**Usage**: Development and debugging of components in isolation

## Route Configuration

### Current Routes
- `/` - Homepage (mapped to `page.tsx`)
- `/test` - Development test page (mapped to `test/page.tsx`)

### Future Route Structure
Based on Header.tsx navigation, planned routes include:
- `/about` - School policy and information
- `/fees` - Tuition and fee information
- `/privacy` - Privacy policy
- `/menu` - Lunch menu information
- `/forms` - Application and registration forms
- `/nyuuji` - Infant class information
- `/youji` - Toddler class information
- `/star` - International/Star class information
- `/activities` - After-school activities

## Development Guidelines

### Page Component Standards
- Use semantic HTML structure (header, main, footer)
- Import all dependencies from centralized component locations
- Follow consistent component composition patterns
- Implement proper TypeScript typing

### Layout Considerations
- Maintain global layout consistency through root layout
- Ensure proper mobile responsiveness across all pages
- Consider Japanese typography requirements
- Implement proper SEO metadata for each page

### Performance Optimizations
- Leverage Next.js built-in optimizations (Image, Link components)
- Consider code splitting for larger components
- Implement proper loading states and error boundaries
- Use Server Components where appropriate

## Integration Notes

### With Components Directory
- Pages import and compose components from `/components/`
- Layout components (Header, Footer) are consistent across all pages
- Section components are reusable across multiple pages

### With Public Assets
- Static assets referenced from `/public/` directory
- Images optimized through Next.js Image component (when implemented)
- Documents and PDFs served directly from `/public/documents/`

### With Internationalization
- Currently Japanese-focused with some English elements
- Prepared for future i18n implementation
- Metadata includes both languages for SEO

## Configuration Files

### Metadata Configuration
Global metadata is centralized in `layout.tsx` and can be extended per-page:
- Canonical URL: http://www.kodomogakuen.com/
- Language: Japanese primary
- Keywords: Bilingual SEO terms
- Description: Comprehensive service area and educational focus

### External Dependencies
- Font Awesome: Icon library for UI elements
- Flag Icon CSS: Country flag display capability
- Google Fonts: Japanese typography support (configured in Tailwind)

## Best Practices

### SEO Implementation
- Use proper semantic HTML structure
- Include relevant meta tags in each page
- Implement structured data where appropriate
- Ensure proper heading hierarchy

### Accessibility
- Include proper ARIA labels and roles
- Ensure keyboard navigation support
- Implement proper color contrast ratios
- Consider screen reader compatibility for bilingual content

### Performance
- Optimize images and assets
- Implement proper caching strategies
- Use Next.js built-in performance features
- Monitor Core Web Vitals metrics