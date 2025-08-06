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