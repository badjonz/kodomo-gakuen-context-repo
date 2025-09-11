# Project Structure

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
