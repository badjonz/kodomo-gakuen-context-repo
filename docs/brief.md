# Project Brief: Bilingual Font Implementation

## Executive Summary

Implement dynamic font switching across the Kodomo Gakuen website to display Japanese content using Kosugi font and English content using Montserrat font. This enhancement will improve readability and cultural authenticity by applying typography that's optimized for each language's reading patterns and visual expectations. The existing `useFontClass` hook and language context system provide the foundation for this implementation.

## Problem Statement

Currently, the Kodomo Gakuen website uses inconsistent typography across Japanese and English content, potentially impacting readability and user experience. While the infrastructure exists (useFontClass hook, language context, and configured font families), the font switching is not implemented across components, meaning:

- Japanese text may appear in fonts not optimized for Japanese characters
- English text may not benefit from Latin-optimized typography
- Brand consistency and cultural appropriateness are compromised
- The existing language switching infrastructure is underutilized
- Users may experience suboptimal reading experiences based on their language preference

The impact affects both Japanese families seeking culturally appropriate presentation and English-speaking families (particularly from Yokota Air Base community) who need clear, readable Latin typography.

## Proposed Solution

Systematically implement the existing `useFontClass` hook across all text-displaying components to enable automatic font switching based on the user's selected language. The solution leverages:

- **Existing Hook**: `useFontClass()` returns `font-montserrat` for English, `font-kosugi` for Japanese
- **Tailwind Integration**: Configured font families ready for use
- **Language Context**: Established language switching system
- **Google Fonts**: Add font loading to ensure proper font availability

The implementation will be applied consistently across headers, navigation, content sections, footers, and modal components to ensure seamless typography switching throughout the user experience.

## Target Users

### Primary User Segment: Japanese Families
- **Profile**: Japanese-speaking parents and guardians in the Higashi Yamato area
- **Current Behavior**: Navigate website primarily in Japanese, expect culturally appropriate typography
- **Pain Points**: May encounter text that's difficult to read due to inappropriate font choices for Japanese characters
- **Goals**: Easily access school information in properly formatted Japanese text

### Secondary User Segment: English-Speaking Families
- **Profile**: International families, particularly from Yokota Air Base community
- **Current Behavior**: Switch to English language mode for navigation and information gathering
- **Pain Points**: Need clear, readable English typography for effective communication
- **Goals**: Access school information with familiar, easily readable English fonts

## Goals & Success Metrics

### Business Objectives
- Improve user experience consistency across both languages
- Enhance brand professionalism and cultural sensitivity
- Increase user engagement time on site through improved readability
- Support the bilingual positioning of Kodomo Gakuen

### User Success Metrics
- Improved text readability scores for both languages
- Consistent typography experience across all pages and components
- Seamless font switching when toggling between languages
- No loading delays or font rendering issues

### Key Performance Indicators (KPIs)
- **Implementation Coverage**: 100% of text-displaying components use `useFontClass`
- **Font Loading Performance**: No additional load time impact
- **User Experience**: No font flash or rendering issues during language switches
- **Code Quality**: No TypeScript errors, passes all linting checks

## MVP Scope

### Core Features (Must Have)
- **Component Font Integration**: Apply `useFontClass` to all major components (Header, Hero, AboutInfo, AgeGroups, Footer, etc.)
- **Google Fonts Loading**: Add Kosugi and Montserrat font imports to layout.tsx
- **Dynamic Class Application**: Ensure font classes are applied correctly based on language context
- **Cross-Component Consistency**: Uniform font application across navigation, content, and UI elements

### Out of Scope for MVP
- Custom font hosting or CDN optimization
- Additional font variants (bold, italic) beyond what's already configured
- Font size optimization per language
- Performance optimization beyond basic implementation
- A/B testing different font combinations

### MVP Success Criteria
The MVP is successful when users can switch between Japanese and English languages and observe immediate, consistent font changes across all text elements without any rendering issues or performance degradation.

## Post-MVP Vision

### Phase 2 Features
- Performance optimization and font loading strategies
- Additional font weights and styles for enhanced typography hierarchy
- Custom font configurations for specific content types (headlines vs body text)

### Long-term Vision
Advanced typography system supporting multiple languages and sophisticated font loading strategies with performance monitoring and user preference persistence.

### Expansion Opportunities
- Font accessibility options for users with visual impairments
- Integration with content management systems for dynamic font selection
- Typography analytics to understand user preferences

## Technical Considerations

### Platform Requirements
- **Target Platforms**: Web browsers (Chrome, Firefox, Safari, Edge)
- **Browser/OS Support**: Modern browsers supporting Google Fonts and CSS font-family switching
- **Performance Requirements**: No noticeable delay in font loading or switching

### Technology Preferences
- **Frontend**: React/Next.js with existing Tailwind CSS configuration
- **Font Loading**: Google Fonts CDN integration
- **State Management**: Existing React Context for language switching
- **Styling**: Tailwind utility classes for font application

### Architecture Considerations
- **Repository Structure**: Work within existing Next.js app structure
- **Component Architecture**: Apply font classes at component level using existing hook
- **Integration Requirements**: Seamless integration with existing language context
- **Performance**: Ensure font loading doesn't impact Core Web Vitals

## Constraints & Assumptions

### Constraints
- **Budget**: No additional cost (using free Google Fonts)
- **Timeline**: Implementation should be completed efficiently given existing infrastructure
- **Resources**: Single developer implementation using existing code patterns
- **Technical**: Must work within current Tailwind and Next.js setup

### Key Assumptions
- Google Fonts will remain available and performant
- Current Tailwind configuration supports the required font families
- Existing language context system functions correctly
- Component structure allows for consistent font class application
- Users have browsers that support modern CSS font loading

## Risks & Open Questions

### Key Risks
- **Font Loading Performance**: Potential impact on page load times if fonts aren't optimized
- **Component Coverage**: Risk of missing components that display text
- **Language Detection**: Potential issues with mixed-language content within single components

### Open Questions
- Should mixed-language content (Japanese + English in same component) default to one font?
- Are there specific components where font switching should be disabled?
- What fallback fonts should be used if Google Fonts fail to load?

### Areas Needing Further Research
- Component inventory to ensure complete coverage
- Performance impact assessment of Google Fonts loading
- User testing with actual Japanese and English content

## Appendices

### A. Research Summary
**Current State Analysis:**
- `useFontClass` hook exists and returns correct font classes
- Tailwind configuration includes both required font families
- Language context system is functional across the application
- Components currently do not implement font switching

**Technical Foundation:**
- React Context API for language state management
- Tailwind CSS utility-first approach for styling
- Next.js for font optimization and loading strategies

### B. Stakeholder Input
Captain has requested bilingual font implementation to improve user experience for both Japanese and English-speaking families in the Kodomo Gakuen community.

### C. References
- Existing `useFontClass` hook: `/src/hooks/useFontClass.ts`
- Language Context: `/src/context/LanguageContext.tsx`
- Tailwind Configuration: `/tailwind.config.js`
- Main Layout: `/src/app/layout.tsx`

## Next Steps

### Immediate Actions
1. Add Google Fonts links for Kosugi and Montserrat to layout.tsx
2. Inventory all text-displaying components requiring font class implementation
3. Systematically apply `useFontClass` hook to each component
4. Test font switching functionality across all language contexts
5. Verify performance impact and loading behavior
6. Run quality assurance checks (lint, type check, build)

### PM Handoff
This Project Brief provides the full context for the Bilingual Font Implementation. The developer agent should start implementation by first adding Google Fonts to the layout, then systematically applying the `useFontClass` hook to all text-displaying components, ensuring consistent typography switching across the entire application.