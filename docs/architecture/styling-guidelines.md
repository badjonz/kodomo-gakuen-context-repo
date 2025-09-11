# Styling Guidelines

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
