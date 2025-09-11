# Epic 1: Kodomo Gakuen Bilingual Implementation

**Epic Goal**: Implement seamless client-side bilingual functionality for the Kodomo Gakuen website enabling Japanese-primary content with English toggle capability, increasing international family enrollment by 30% while maintaining existing performance and user experience through React Context API integration and single JSON content source management.

**Integration Requirements**: React Context Provider integration with existing App Router layout, component prop interface extensions for bilingual content objects, JSON content structure supporting existing component hierarchy, and preservation of current Tailwind CSS styling and Framer Motion animation patterns throughout language switching functionality.

### Story 1.1: Implement Core Language Infrastructure and Content Foundation

As a **developer**,  
I want **to establish React Context API for language state management and create comprehensive JSON content structure**,  
so that **bilingual functionality has a solid technical foundation supporting all existing components without breaking current functionality**.

#### Acceptance Criteria

1. **Language Context Provider** is created and wraps the main App Router layout component, providing language state and toggle function to all child components
2. **Content JSON structure** is established in `/content/content.json` with nested Japanese/English objects for all existing page content (Hero, About, Age Groups, Navigation)
3. **Content loading utilities** are implemented in `/src/utils/contentLoader.ts` with TypeScript interfaces defining bilingual content structure
4. **Default language state** is set to Japanese maintaining current user experience for existing visitors
5. **Error boundaries** are implemented to handle JSON loading failures with graceful fallback to hardcoded Japanese content
6. **Build process integration** validates JSON content structure and completeness during Next.js build phase

#### Integration Verification

**IV1: Existing Functionality Verification** - All current pages render identically to pre-implementation state when language context is set to Japanese, with no visual or performance changes detectable
**IV2: Integration Point Verification** - React Context Provider successfully provides language state to Header, Hero, Footer, and Age Groups components without prop drilling or component modification conflicts  
**IV3: Performance Impact Verification** - Page load times remain within current performance benchmarks (<200ms additional overhead) and bundle size increase stays under 1MB limit

### Story 1.2: Enable Bilingual Header Component with Language Toggle

As an **international family visiting the website**,  
I want **to see a language toggle button in the header that instantly switches all content to English**,  
so that **I can access school information in my preferred language without page reloads or navigation disruption**.

#### Acceptance Criteria

1. **Language toggle button** is integrated into Header component using existing Tailwind button styling patterns, positioned alongside current contact information without layout disruption
2. **Navigation menu items** display in selected language (Japanese/English) including dropdown categories, maintaining current hover effects and mobile responsiveness
3. **Contact information** in header renders in appropriate language while preserving existing layout and styling
4. **Mobile hamburger menu** includes language toggle functionality with equivalent user experience to desktop version
5. **Toggle state persistence** maintains language selection throughout user session via React Context state management
6. **Immediate content switching** occurs without page reload, loading states, or visual flickering using existing animation patterns

#### Integration Verification

**IV1: Existing Functionality Verification** - All current header functionality (navigation, dropdowns, mobile menu, contact links) operates identically in both language states with no regression in user experience
**IV2: Integration Point Verification** - Language toggle successfully triggers context state changes that propagate to all consuming components without causing re-render performance issues
**IV3: Performance Impact Verification** - Language switching completes in <200ms with no detectable impact on existing navigation responsiveness or animation smoothness

### Story 1.3: Implement Bilingual Content for Core Page Sections

As an **international family researching preschool options**,  
I want **all critical school information (Hero, About, Age Groups, Footer) to display in English when I select English language**,  
so that **I can understand the school's programs, philosophy, and contact information to make an informed enrollment decision**.

#### Acceptance Criteria

1. **Hero section** renders bilingual titles, subtitles, and button text from JSON content source while preserving existing Framer Motion animations and responsive design
2. **Age Groups section** displays translated program descriptions (乳児, 年少, 年中, 年長) and class information maintaining current card layouts and image associations
3. **About Information section** presents school philosophy, educational approach, and facility details in selected language with identical visual hierarchy and spacing
4. **Footer component** renders contact details, quick links, social media labels, and map information bilingually without breaking existing grid layout or external integrations
5. **Content synchronization** ensures Japanese and English versions display equivalent information with consistent messaging and cultural appropriateness
6. **Fallback handling** displays Japanese content if English translation is missing, preventing broken or empty content areas

#### Integration Verification

**IV1: Existing Functionality Verification** - All sections maintain current visual design, spacing, animations, and interactive elements when rendering in either language, with no layout shifts or style conflicts
**IV2: Integration Point Verification** - Content JSON structure successfully supports all component content needs without requiring additional API calls or external content loading
**IV3: Performance Impact Verification** - Full page language switching across all sections completes within performance targets while maintaining current Lighthouse scores and mobile responsiveness

---

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>