# Project Brief: Kodomo Gakuen Complete Bilingual Content Implementation

## Executive Summary

Complete the bilingual implementation for Kodomo Gakuen preschool website by extending existing Japanese/English language infrastructure to all remaining pages and content sections. Building on the successful Epic 1 foundation (language context, homepage sections, navigation), this project will systematically implement bilingual content for all secondary pages, forms, and detailed program information to serve international families seeking comprehensive school information in English.

**Primary Problem:** International families cannot access detailed school information (programs, enrollment, schedules, policies) in English, limiting enrollment from military families and expat communities despite having bilingual infrastructure in place.

**Target Market:** English-speaking families in Higashi Yamato area, particularly Yokota Air Base military families and international expat families seeking quality bilingual preschool education.

**Key Value Proposition:** Complete website accessibility in English using established technical patterns, enabling informed enrollment decisions for international families without requiring Japanese language proficiency.

## Problem Statement

**Current State:** Epic 1 successfully implemented bilingual infrastructure and core homepage functionality, but critical enrollment-decision content remains Japanese-only:
- Individual program pages (乳児, 年少, 年中, 年長 classes) lack English descriptions
- Enrollment forms and fee schedules are Japanese-only 
- Daily schedules, menu information, and policies are not translated
- Special programs (Saturday Care, Star Program) lack English content
- About page detailed content remains untranslated

**Impact:** International families report difficulty understanding program details, enrollment processes, and daily operations, resulting in reduced inquiries and enrollment from English-speaking families despite strong interest in bilingual education programs.

**Why Existing Solutions Fall Short:** Generic translation tools produce inaccurate educational terminology and cultural context. Manual page-by-page translation lacks consistency and maintainability.

**Urgency:** With established infrastructure from Epic 1, rapid completion of content translation can immediately unlock international enrollment opportunities for upcoming academic year enrollment periods.

## Proposed Solution

Leverage Epic 1's proven React Context API and content.json structure to systematically extend bilingual functionality to all remaining pages using established patterns. The solution focuses on content implementation rather than technical infrastructure development.

**Core Approach:**
- Extend existing content.json structure with comprehensive page content
- Apply proven component integration patterns from Epic 1 stories
- Implement bilingual content for all secondary pages using established hooks and context
- Maintain existing visual design and responsive behavior across languages

**Key Differentiators:**
- Builds on proven technical foundation rather than creating new infrastructure
- Uses culturally-appropriate translations tailored to international families
- Maintains Japanese-primary approach with English as comprehensive alternative
- Preserves all existing animations, layouts, and user experience patterns

**Why This Will Succeed:**
- Technical patterns proven in Epic 1 implementation
- Clear content structure and component integration approach established
- Existing development team familiar with codebase and patterns
- Focused scope eliminates technical unknowns

## Target Users

### Primary User Segment: English-Speaking Families with Preschool-Age Children

**Demographic Profile:**
- Military families stationed at Yokota Air Base
- International expat families working in Tokyo area
- Bilingual Japanese families preferring English-language information
- Household income supporting private preschool education

**Current Behaviors:**
- Research multiple preschool options online before visiting
- Require detailed program information to make enrollment decisions
- Need clear understanding of fees, schedules, and enrollment processes
- Value bilingual education opportunities for their children

**Specific Needs:**
- Comprehensive program descriptions in English
- Clear enrollment procedures and required documentation
- Detailed daily schedules and educational approach information
- Transparent fee structure and payment options

**Goals:**
- Find quality preschool that offers bilingual education
- Understand cultural integration and educational philosophy
- Complete enrollment process efficiently
- Ensure child will thrive in program environment

### Secondary User Segment: Japanese Families Seeking International Environment

**Profile:** Japanese families specifically seeking international preschool environment with strong English components, often requiring English-language materials for reference and family discussions.

## Goals & Success Metrics

### Business Objectives
- **Increase international enrollment by 25%** within 6 months of implementation
- **Reduce inquiry abandonment rate by 40%** for non-Japanese speaking families
- **Complete 100% bilingual content coverage** across all public-facing pages
- **Maintain current Japanese user experience** with no performance degradation

### User Success Metrics
- **95% of page content accessible** in English for enrollment decision-making
- **<3 second page load times** maintained across language switching
- **Zero broken content areas** when switching between languages
- **90% user satisfaction** with English content quality and cultural appropriateness

### Key Performance Indicators (KPIs)
- **English Content Coverage:** 100% of essential enrollment pages translated
- **Language Toggle Usage:** Track adoption of English language option
- **International Inquiry Rate:** Measure increase in English-language contact form submissions
- **Enrollment Conversion:** Monitor enrollment rate from international families

## MVP Scope

### Core Features (Must Have)

- **Individual Class Pages:** Complete bilingual content for 乳児 (Nyuuji), 年少 (Nensho), 年中 (Nenchu), 年長 (Nencho) program pages including age requirements, curriculum focus, daily schedules, and learning objectives
- **About Page Expansion:** Full school philosophy, teaching approach, facility details, staff qualifications, and educational methodology in English
- **Enrollment Information:** Comprehensive enrollment process, required documentation, application deadlines, and admission criteria
- **Fee Structure:** Complete tuition and fee schedules, payment options, additional costs, and financial policies
- **Daily Operations:** Sample daily schedules, meal programs, pickup/dropoff procedures, and parent communication methods
- **Special Programs:** Saturday Care program details, Star Program (English instruction) curriculum, and seasonal activities

### Out of Scope for MVP
- Real-time content management system (content remains JSON-based)
- Advanced search functionality across translated content
- User account creation or personalized content
- Online enrollment form submission (PDF forms remain primary method)
- Blog/news content translation (existing Japanese content maintained)

### MVP Success Criteria
Complete bilingual website where English-speaking families can make informed enrollment decisions without requiring Japanese language assistance, using proven Epic 1 technical patterns and maintaining current site performance.

## Post-MVP Vision

### Phase 2 Features
- Dynamic content management system for easier content updates
- Online enrollment form submission with bilingual confirmation
- Parent portal with bilingual communication tools
- Advanced search and filtering for program information

### Long-term Vision
Establish Kodomo Gakuen as the premier bilingual preschool choice for international families in the Higashi Yamato area through comprehensive digital accessibility and cultural bridge-building.

### Expansion Opportunities
- Mobile application for parent communication
- Virtual school tours with bilingual narration
- Online learning resource library
- Community event management system

## Technical Considerations

### Platform Requirements
- **Target Platforms:** Next.js web application (existing)
- **Browser Support:** Modern browsers with JavaScript enabled (current support maintained)
- **Performance Requirements:** <200ms additional load time for language switching, maintain Lighthouse scores >90

### Technology Preferences
- **Frontend:** Continue using established React/Next.js, Tailwind CSS, Framer Motion stack
- **Content Management:** Extend existing content.json structure (no new systems)
- **State Management:** Use proven React Context API and hooks from Epic 1
- **Build Process:** Maintain current Next.js static site generation

### Architecture Considerations
- **Repository Structure:** Follow established /src/components, /content patterns from Epic 1
- **Component Architecture:** Apply proven useLanguage and useSectionContent hook patterns
- **Integration Requirements:** Preserve all existing external integrations (Google Maps, email links)
- **Security/Compliance:** No additional requirements beyond current implementation

## Constraints & Assumptions

### Constraints
- **Budget:** Leverage existing development resources and infrastructure investment
- **Timeline:** Target completion within 2-3 development cycles using proven patterns
- **Resources:** Single developer using established Epic 1 codebase and patterns
- **Technical:** Must maintain current site performance and mobile responsiveness

### Key Assumptions
- Epic 1 infrastructure (React Context, content loading, fallback mechanisms) functions reliably
- Content translation can be completed by development team or provided by school staff
- Current hosting and deployment processes support expanded content without changes
- International families will discover and use language toggle functionality
- Japanese content remains primary with English as comprehensive secondary option

## Risks & Open Questions

### Key Risks
- **Content Quality Risk:** English translations may lack cultural nuance or educational terminology accuracy
- **Performance Risk:** Expanded content.json size could impact load times despite infrastructure
- **Maintenance Risk:** Keeping Japanese and English content synchronized as school programs evolve

### Open Questions
- Who will provide English translations for educational content and ensure cultural appropriateness?
- How will content updates be managed between Japanese and English versions going forward?
- Should certain culturally-specific content (traditional events, ceremonies) remain Japanese-only?

### Areas Needing Further Research
- Best practices for preschool educational content translation
- International family preferences for content depth vs. simplicity
- Optimal content organization for non-Japanese speakers navigating Japanese educational concepts

## Next Steps

### Immediate Actions
1. **Inventory existing pages** requiring bilingual implementation using site audit
2. **Expand content.json structure** to accommodate all identified page content
3. **Apply Epic 1 patterns** to remaining page components systematically
4. **Implement content loading** for individual class pages using established hooks
5. **Test language switching** across all new content areas
6. **Validate responsive design** maintains quality across translated content
7. **Performance testing** to ensure expanded content doesn't impact load times

### PM Handoff
This Project Brief provides the full context for Kodomo Gakuen Complete Bilingual Content Implementation. The technical foundation from Epic 1 eliminates infrastructure complexity - this is primarily a content implementation project using proven patterns. Please coordinate directly with the development team to begin systematic implementation of remaining page content using established Epic 1 component integration methods.

---

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>