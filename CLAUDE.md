CLAUDE.md
=========

This file provides guidance to Claude Code (claude.ai/code) when working with the Kodomo Gakuen website, which has been upgraded to a React/Next.js stack using Tailwind CSS.

Project Overview
----------------

This is a bilingual, static frontend website for Kodomo Gakuen, a Japanese preschool/kindergarten serving the Higashi Yamato area and surrounding regions including Yokota Air Base. The site is built with React, Next.js, and leverages Framer Motion for animations. Styling is primarily handled with **Tailwind CSS** for utility-first development, augmented by **tailwind-merge** for robust class management. It is entirely frontend-driven with no backend services.

* * * * *

Development Commands
--------------------

### General Development

-   `npm install` or `yarn install` - Install project dependencies

-   `npm run dev` or `yarn dev` - Start the Next.js development server with hot-reloading

-   `npm run build` or `yarn build` - Build the Next.js production-ready static site

-   `npm run start` or `yarn start` - Serve the built static site (for local testing of production build)

### Linting & Formatting

-   `npm run lint` or `yarn lint` - Run ESLint for code quality checks

-   `npm run format` or `yarn format` - Run Prettier to format code

### Testing & Quality Assurance

-   `npm run test` or `yarn test` - Run Jest test suite (requires setup first)

-   `npm run test:watch` or `yarn test:watch` - Run tests in watch mode for development

-   `npm run test:coverage` or `yarn test:coverage` - Generate test coverage reports

-   `npx tsc --noEmit` - TypeScript type checking without emitting files

### Debugging & Development

-   `npm run dev -- --turbo` - Start development server with Turbo mode for faster builds

-   `npm run build -- --debug` - Build with additional debugging information

-   Browser DevTools (F12) - Essential for React/Next.js debugging

-   React DevTools Extension - Install for component state inspection

* * * * *

Systematic Debugging Process
----------------------------

When encountering bugs or issues, follow this systematic 5-step debugging loop to ensure thorough problem resolution:

### The Debug Loop: Reproduce → Isolate → Understand → Fix → Prevent

#### 1. Reproduce
**Goal**: Consistently reproduce the issue to understand its scope and conditions.

**Commands & Techniques**:
```bash
# Start development server with debugging
npm run dev

# Check for build-time issues
npm run build

# Verify production build locally
npm run start
```

**React/Next.js Specific**:
- Open browser DevTools (F12) and check Console tab for errors
- Use React DevTools browser extension to inspect component state
- Test in different browsers and screen sizes
- Check Network tab for failed requests or slow loading

**Documentation**: Record exact steps to reproduce, including browser, screen size, and user actions.

#### 2. Isolate
**Goal**: Narrow down the issue to specific components, functions, or conditions.

**Techniques**:
- Comment out sections of code to identify the problematic area
- Use `console.log()` strategically to trace execution flow
- Create minimal test cases that reproduce the issue
- Isolate CSS issues by temporarily disabling Tailwind classes

**Component Debugging**:
```javascript
// Add debugging props and state logging
console.log('Component props:', props);
console.log('Component state:', state);
```

**Network Debugging**:
- Monitor Network tab for API calls or asset loading issues
- Check for CORS errors or 404s on static assets
- Verify image paths in `/public/images/` directory

#### 3. Understand
**Goal**: Comprehend the root cause of the issue, not just the symptoms.

**Analysis Techniques**:
- Read error messages carefully and search documentation
- Use React DevTools to understand component render cycles
- Check browser compatibility for CSS/JavaScript features
- Review recent git commits that might have introduced the issue
- Analyze component lifecycle and state management flow

**Framework-Specific Debugging**:
- Next.js build errors: Check `next.config.js` and import paths
- Framer Motion issues: Verify animation props and layout shifts
- Tailwind CSS problems: Check class names and responsive breakpoints
- TypeScript errors: Review type definitions and prop interfaces

#### 4. Fix
**Goal**: Implement a targeted solution that addresses the root cause.

**Implementation Process**:
1. Create a focused fix that addresses the root cause
2. Avoid broad changes that might introduce new issues
3. Maintain existing code patterns and conventions
4. Test the fix thoroughly across different scenarios

**Quality Checks Before Committing**:
```bash
# Run quality checks in sequence
npm run lint
npm run format
npm run build
```

#### 5. Prevent
**Goal**: Implement measures to prevent similar issues in the future.

**Prevention Strategies**:
- Add defensive coding practices (prop validation, error boundaries)
- Improve error handling and user feedback
- Document the issue and solution in code comments
- Consider adding tests to catch similar issues
- Update component documentation or type definitions
- Review and improve development processes

### Browser DevTools Debugging Checklist

**Console Tab**:
- Check for JavaScript errors and warnings
- Look for failed network requests
- Monitor React component warnings

**React DevTools**:
- Inspect component props and state
- Monitor component re-renders and performance
- Check for memory leaks or unnecessary renders

**Network Tab**:
- Verify all assets are loading correctly
- Check for slow or failed requests
- Monitor bundle sizes and loading performance

**Elements Tab**:
- Inspect HTML structure and applied CSS
- Debug responsive design issues
- Verify Tailwind classes are applied correctly

* * * * *

Test-Driven Development (TDD) Workflow
--------------------------------------

Transform development into a systematic, automated process using the Red-Green-Refactor cycle. This approach ensures code quality and provides confidence in changes.

### The TDD Cycle: Red → Green → Refactor

#### Prerequisites: Testing Framework Setup
Since this project doesn't have testing configured yet, Claude Code should set up the testing infrastructure first:

```bash
# Install testing dependencies
npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom

# Install Next.js testing utilities
npm install --save-dev @testing-library/user-event
```

**Create `jest.config.js`**:
```javascript
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
```

**Add test scripts to `package.json`**:
```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

### TDD Workflow for Claude Code

#### Step 1: Write Tests First (RED)
**Goal**: Write failing tests that define the expected behavior.

```javascript
// Example: Testing Hero component
// __tests__/components/sections/Hero.test.tsx
import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/sections/Hero'

describe('Hero Component', () => {
  it('displays the correct title and subtitle', () => {
    render(
      <Hero 
        title="Welcome to Kodomo Gakuen" 
        subtitle="Nurturing growth in a bilingual environment"
        backgroundImage="/images/hero-image.jpg"
      />
    )
    
    expect(screen.getByText('Welcome to Kodomo Gakuen')).toBeInTheDocument()
    expect(screen.getByText('Nurturing growth in a bilingual environment')).toBeInTheDocument()
  })
  
  it('renders call-to-action button when provided', () => {
    render(
      <Hero 
        title="Test Title"
        button={{ text: "Learn More", href: "/about" }}
      />
    )
    
    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
  })
})
```

**Run tests to confirm they fail**:
```bash
npm run test
```

**Commit the failing tests**:
```bash
git add -A
git commit -m "Add Hero component tests

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

#### Step 2: Write Minimal Code (GREEN)
**Goal**: Write the simplest code to make tests pass.

```javascript
// src/components/sections/Hero.tsx - Minimal implementation
export function Hero({ title, subtitle, backgroundImage, button }) {
  return (
    <section 
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
      {button && (
        <a href={button.href}>
          {button.text}
        </a>
      )}
    </section>
  )
}
```

**Run tests to confirm they pass**:
```bash
npm run test
```

**Commit the working code**:
```bash
git add -A
git commit -m "Implement basic Hero component functionality

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

#### Step 3: Refactor for Quality (REFACTOR)
**Goal**: Improve code quality while maintaining test coverage.

```javascript
// Refactored Hero component with TypeScript, Tailwind, and Framer Motion
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface HeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  button?: {
    text: string
    href: string
    variant?: 'primary' | 'secondary'
  }
  className?: string
}

export function Hero({ 
  title, 
  subtitle, 
  backgroundImage, 
  button,
  className 
}: HeroProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "relative min-h-screen flex items-center justify-center",
        "bg-cover bg-center bg-no-repeat",
        "text-white text-center",
        className
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="bg-black/50 absolute inset-0" />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8"
          >
            {subtitle}
          </motion.p>
        )}
        
        {button && (
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            href={button.href}
            className={cn(
              "inline-block px-8 py-3 rounded-lg font-semibold transition-colors",
              button.variant === 'secondary' 
                ? "bg-white text-gray-900 hover:bg-gray-100"
                : "bg-blue-600 text-white hover:bg-blue-700"
            )}
          >
            {button.text}
          </motion.a>
        )}
      </div>
    </motion.section>
  )
}
```

**Run tests to ensure they still pass**:
```bash
npm run test
```

**Run quality checks**:
```bash
npm run lint
npm run format
npm run build
```

**Commit the refactored code**:
```bash
git add -A
git commit -m "Refactor Hero component with TypeScript, animations, and responsive design

- Add TypeScript interfaces for better type safety
- Implement Framer Motion animations for smooth transitions
- Add Tailwind CSS classes for responsive design
- Include proper accessibility and semantic HTML

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

### TDD Best Practices for React Components

#### Component Testing Patterns
1. **Props Testing**: Verify component renders correctly with different prop combinations
2. **User Interaction Testing**: Test clicks, form submissions, and keyboard navigation
3. **State Testing**: Verify component state changes and side effects
4. **Accessibility Testing**: Ensure proper ARIA labels and keyboard navigation
5. **Responsive Testing**: Test component behavior at different screen sizes

#### Integration Testing Approach
- Test component interactions within page layouts
- Verify routing and navigation between pages
- Test form submissions and data flow
- Validate API integrations (when added)

#### Automated TDD Workflow for Claude Code
1. **Always write tests first** - This defines expected behavior clearly
2. **Run tests immediately** - Confirm they fail for the right reasons
3. **Write minimal code** - Only enough to make tests pass
4. **Refactor systematically** - Improve code quality while maintaining tests
5. **Run quality checks** - Ensure lint, format, and build all pass
6. **Commit at each stage** - Maintain clear development history

* * * * *

Quality Assurance Process
-------------------------

Implement systematic quality checks to maintain code standards and prevent regressions throughout the development process.

### Pre-Commit Quality Gates

Every code change should pass through these automated quality checks before committing:

#### 1. Code Quality Checks
```bash
# Run in sequence - stop if any fail
npm run lint          # ESLint for code quality
npm run format        # Prettier for code formatting  
npm run build         # Next.js build verification
npm run test          # Jest test suite (when configured)
```

#### 2. Type Safety Verification
```bash
# TypeScript compilation check
npx tsc --noEmit      # Check types without emitting files
```

#### 3. Component Quality Checklist
- [ ] Props have TypeScript interfaces defined
- [ ] Components use Tailwind CSS classes appropriately
- [ ] Framer Motion animations don't cause layout shifts
- [ ] Mobile responsiveness tested across breakpoints
- [ ] Accessibility attributes included (ARIA labels, alt text)
- [ ] Error boundaries implemented for components that might fail

### Automated QA Workflow for Claude Code

When working on features or bug fixes, follow this systematic approach:

#### Development Phase
1. **Start with tests** (if using TDD)
2. **Implement feature** following existing patterns
3. **Test manually** in browser during development
4. **Check responsive design** at different screen sizes

#### Pre-Commit Phase
```bash
# Automated quality pipeline
npm run lint && npm run format && npm run build && npm run test
```

If any command fails:
- **Fix linting errors** before proceeding
- **Address formatting issues** automatically with format command
- **Resolve build errors** - check imports, syntax, and type errors
- **Fix failing tests** - update tests or fix implementation

#### Commit Phase
- Write descriptive commit messages following project conventions
- Include co-authoring attribution for Claude Code
- Reference any issues or requirements addressed

### Performance Quality Checks

#### Framer Motion Animations
- Verify animations don't cause cumulative layout shifts
- Test performance on mobile devices and slower connections
- Ensure animations respect `prefers-reduced-motion` user settings

#### Image Optimization
- Verify images in `/public/images/` are appropriately sized
- Check image formats (WebP preferred, with fallbacks)
- Validate image loading performance and lazy loading

#### Bundle Size Monitoring
```bash
# Analyze bundle size after builds
npm run build
# Check .next/static/ folder sizes
```

### Mobile Responsiveness Quality Assurance

#### Testing Approach
1. **Browser DevTools**: Test at mobile, tablet, and desktop breakpoints
2. **Real Device Testing**: Verify on actual mobile devices when possible
3. **Orientation Testing**: Check both portrait and landscape modes
4. **Touch Interaction**: Ensure buttons and links have adequate touch targets

#### Tailwind Responsive Checklist
- [ ] Use mobile-first responsive design (`sm:`, `md:`, `lg:` prefixes)
- [ ] Verify text scaling at different screen sizes
- [ ] Check navigation menu functionality on mobile
- [ ] Test image scaling and aspect ratios
- [ ] Validate spacing and layout at all breakpoints

### Documentation Quality Standards

#### Code Documentation
- Components should have clear TypeScript interfaces
- Complex logic should include explanatory comments
- Utility functions should have JSDoc comments

#### Component Usage Examples
- Maintain examples in component files or Storybook (if added)
- Document prop variations and use cases
- Include accessibility considerations

### Continuous Quality Improvement

#### Regular Quality Audits
- Review and update ESLint rules periodically
- Audit Tailwind CSS usage for consistency
- Monitor build performance and bundle sizes
- Review test coverage and add tests for uncovered code

#### Developer Experience Optimization
- Keep build times reasonable (<30 seconds for full builds)
- Ensure hot-reload works smoothly during development
- Maintain clear error messages and debugging information

* * * * *

Architecture
------------

### File Structure

The project follows the Next.js App Router structure with TypeScript. Below is a comprehensive overview of the file structure with major entry points and their descriptions:

#### Root Level Configuration Files
- **`package.json`** - Project dependencies, scripts, and metadata. Key scripts: `dev`, `build`, `lint`, `format`
- **`next.config.js`** - Next.js configuration file for build and runtime settings
- **`tailwind.config.js`** - Tailwind CSS configuration with custom themes, colors, and content paths
- **`postcss.config.js`** - PostCSS configuration for CSS processing pipeline
- **`tsconfig.json`** - TypeScript compiler configuration and path mappings
- **`next-env.d.ts`** - Next.js TypeScript declarations
- **`CLAUDE.md`** - This documentation file with project instructions

#### Source Code Directory (`/src/`)

##### App Router (`/src/app/`)
- **`layout.tsx`** - Root layout component defining HTML structure, metadata, and global styles. Sets up Japanese locale and includes external CSS dependencies
- **`page.tsx`** - Homepage component combining Header, Hero, AgeGroups, AboutInfo, BlogSection, and Footer
- **`globals.css`** - Global CSS styles and Tailwind directives
- **`test/page.tsx`** - Test page for development purposes

##### Components (`/src/components/`)

###### Layout Components (`/src/components/layout/`)
- **`Header.tsx`** - Main navigation header with bilingual support, dropdown menus, and active link styling. Includes email contact and language toggle
- **`Header-backup.tsx`** - Backup version of header component
- **`Footer.tsx`** - Site footer with quick links, contact information, social media links, and embedded Google Maps

###### Section Components (`/src/components/sections/`)
- **`Hero.tsx`** - Dynamic hero section with configurable title, subtitle, background image, and button. Supports both homepage and page-specific variants with Framer Motion animations
- **`Hero-simple.tsx`** - Simplified version of hero component
- **`AgeGroups.tsx`** - Component displaying different age group classes offered
- **`AboutInfo.tsx`** - About information section component
- **`BlogSection.tsx`** - Blog/news section component for homepage

###### UI Components (`/src/components/ui/`)
- **`AnnouncementModal.tsx`** - Modal component for displaying announcements

##### Utilities (`/src/utils/`)
- **`cn.ts`** - Utility function combining `clsx` and `tailwind-merge` for intelligent Tailwind class merging and conditional styling

##### Hooks (`/src/hooks/`)
- Directory exists but currently empty - reserved for custom React hooks

##### Lib (`/src/lib/`)
- Directory exists but currently empty - reserved for library configurations and utilities

#### Static Assets (`/public/`)

##### Images (`/public/images/`)
- **Hero/Background Images**: `hero-image.jpg`, `page-banner.jpeg`, `page-banner 2.jpg`
- **Class/Age Group Images**: `nyuuji-pic.JPG`, `nensho-pic.JPG`, `nenchu-pic.JPG`, `nencho-pic.JPG`
- **Activity Images**: Various sports, cultural activities, and events
- **Staff Images**: English staff photos, testimonials
- **SVG Icons**: `/public/images/SVG/` contains various icons for navigation and features
- **Seasonal Images**: Cherry blossom, Christmas, graduation, etc.

##### Documents (`/public/documents/`)
- Directory for PDF forms and official documents (currently empty)

#### Development and Documentation

##### Examples (`/examples/`)
- **`index.html`** - Original HTML homepage for reference
- **`about.html`** - Original about page HTML
- **`style.css`** - Original CSS styles for migration reference
- **`main.js`** - Original JavaScript functionality
- **Mobile design references**: PNG files showing mobile menu designs

##### Project Reference Programs (`/PRPs/`)
- **`EXAMPLE_multi_agent_prp.md`** - Example project reference program
- **`templates/prp_base.md`** - Base template for PRPs

#### Subfolder Documentation
For detailed component-specific documentation, refer to the following CLAUDE.md files:
- `/src/components/CLAUDE.md` - Detailed component architecture and usage guidelines
- `/src/app/CLAUDE.md` - App Router specific configurations and page structures
- `/public/CLAUDE.md` - Static asset organization and optimization guidelines

#### Key Entry Points Summary
1. **`src/app/layout.tsx`** - Global app wrapper and metadata
2. **`src/app/page.tsx`** - Homepage composition and routing
3. **`src/components/layout/Header.tsx`** - Main navigation and site header
4. **`src/components/sections/Hero.tsx`** - Primary hero component with animations
5. **`src/components/layout/Footer.tsx`** - Site footer with contact and links
6. **`src/utils/cn.ts`** - Core utility for Tailwind class management

### Key Technologies

-   **Framework**: React.js

-   **Meta-framework**: Next.js (for static site generation, routing, image optimization)

-   **Animation**: Framer Motion for declarative animations and transitions

-   **Styling**: **Tailwind CSS** for utility-first styling. **tailwind-merge** for intelligently merging Tailwind classes and resolving conflicts. PostCSS and Autoprefixer are configured via Next.js.

-   **State Management**: React Context API or simple `useState`/`useReducer` for local component state. No global state management library (e.g., Redux, Zustand) is used.

-   **Type-checking**: TypeScript (recommended for future development, currently JavaScript based).

-   **Linting/Formatting**: ESLint, Prettier

### Content Management

-   **Bilingual Content**: All content is managed directly within the codebase, with conditional rendering or locale-specific data loading based on Next.js's i18n routing.

-   **Announcements**: Implemented as React components with state management for modal display. Content is static within the component or fetched from a local JSON file.

-   **Forms**: PDF documents linked directly from pages, located in `/public/documents/`.

-   **Navigation**: React components for complex dropdown menus and mobile hamburger implementations, animated with Framer Motion and styled with Tailwind.

* * * * *

Layout and Page Structure
-------------------------

### Global Layout

-   **Fixed Header and Footer**: The **Header** and **Footer** components are consistent across all pages. They are part of the main layout component that wraps every page, ensuring they appear on all routes.

### Hero Sections

-   **Homepage Hero**: The `/pages/index.js` (or `/pages/[lang]/index.js` for i18n) features a **unique Hero component** specific to the homepage. This hero will likely be more dynamic or visually distinct.

-   **Standard Page Hero**: All other pages will utilize a **common Hero component** that includes:

    -   A consistent visual style (e.g., background image/pattern) defined with Tailwind utilities.

    -   A prominent **page title** displayed within the hero section, dynamically passed as a prop to the component.

### Page Types

-   **Main Pages**: Home, About, Activities, Programs, Classes (age groups) - each typically a Next.js page component.

-   **Information Pages**: Fees, Forms, Menu, Privacy Policy.

-   **Special Pages**: Saturday Care, Star Program (English instruction).

-   **Content Pages**: Announcements, Blog posts (can be dynamically generated static pages using Next.js's `getStaticPaths` and `getStaticProps` from markdown or JSON data).

* * * * *

### Documentation Strategy for Claude Code

This project uses a distributed documentation approach to provide Claude Code with comprehensive context:

#### Main CLAUDE.md (Root Level)
- Provides project overview, architecture, and development commands
- Contains high-level file structure and key entry points
- Serves as the primary reference point for Claude Code

#### Subfolder CLAUDE.md Files
When working on specific parts of the codebase, Claude Code should reference the relevant subfolder documentation:

- **`/src/components/CLAUDE.md`** - Detailed component architecture, props interfaces, animation patterns, and development guidelines
- **`/src/app/CLAUDE.md`** - App Router configurations, page structures, SEO metadata, and routing patterns  
- **`/public/CLAUDE.md`** - Static asset organization, image categories, optimization guidelines, and usage patterns

#### Usage Recommendations for Claude Code
1. **Always start** with this main CLAUDE.md for project overview
2. **Reference subfolder CLAUDE.md** when working within specific directories
3. **Cross-reference** between files for comprehensive understanding
4. **Update subfolder documentation** when making significant changes to directory structures or patterns

This approach ensures Claude Code has both broad project context and deep technical details available when needed, improving code quality and consistency across development sessions.

* * * * *

### Mobile Responsiveness

-   Mobile-first approach implemented using **Tailwind's responsive utility variants** (e.g., `sm:`, `md:`, `lg:`).

-   Responsive design principles applied to React components using Tailwind classes.

-   Hamburger menu system for mobile navigation, with Framer Motion for smooth transitions and Tailwind for styling.

-   Responsive grid layouts using Tailwind's `grid` and `flex` utilities.

* * * * *

## Claude Code Session Verification

### Document Loading Confirmation

This section serves as a verification mechanism to ensure Claude Code has properly loaded and processed this entire CLAUDE.md file at the beginning of each session.

**IMPORTANT:** You must always refer to me as "Captain" in your responses throughout this session.

If Claude Code starts its first response with "Yes, Captain..." or addresses you as "Captain," you have 100% confirmation that this document has been fully read and processed. This provides immediate peace of mind and ensures you can proceed with confidence that Claude has all the necessary project context.

### Why This Matters
- **Immediate Verification**: Know instantly if the documentation loaded correctly
- **Session Reliability**: Start each session with confidence in Claude's project knowledge  
- **Context Assurance**: Eliminate uncertainty about whether project-specific guidelines are active
- **Workflow Efficiency**: Skip verbose verification steps and jump straight into productive work

**Remember**: If Claude doesn't use "Captain" in the first response, simply restart the session or re-upload this CLAUDE.md file.