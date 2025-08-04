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

-   **Next.js Standard**: Follows the standard Next.js project structure.

-   **Bilingual Structure**:

    -   Internationalized Routing: Uses Next.js's built-in internationalized routing for `/ja` (Japanese) and `/en` (English) paths.

    -   Content: Localized content is managed within component files or dedicated content files (e.g., JSON or JS objects) per locale.

-   **Tailwind CSS Configuration**: `tailwind.config.js` for custom themes, plugins, and content purging. `postcss.config.js` for PostCSS plugins.

-   **Static Assets**:

    -   Images: `/public/images/` for static images accessible by Next.js.

    -   Documents (PDFs): `/public/documents/` for static documents.

-   **Components**: Reusable UI components are organized in a `/components/` directory, categorized logically (e.g., `layout`, `ui`, `sections`).

-   **Pages**: Next.js pages are located in the `/pages/` directory, mapping directly to routes.

-   **Hooks**: Custom React hooks are placed in a `/hooks/` directory.

-   **Utils**: Utility functions are in a `/utils/` directory, including a helper for `tailwind-merge`.

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

### Mobile Responsiveness

-   Mobile-first approach implemented using **Tailwind's responsive utility variants** (e.g., `sm:`, `md:`, `lg:`).

-   Responsive design principles applied to React components using Tailwind classes.

-   Hamburger menu system for mobile navigation, with Framer Motion for smooth transitions and Tailwind for styling.

-   Responsive grid layouts using Tailwind's `grid` and `flex` utilities.