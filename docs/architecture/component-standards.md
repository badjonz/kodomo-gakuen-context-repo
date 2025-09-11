# Component Standards

### Component Template

```typescript
import React from 'react'
import { cn } from '@/utils/cn'

interface ComponentNameProps {
  children?: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

export function ComponentName({ 
  children,
  className,
  variant = 'primary',
  size = 'md',
  disabled = false,
  ...props 
}: ComponentNameProps) {
  return (
    <div 
      className={cn(
        // Base styles
        'inline-flex items-center justify-center rounded-md font-medium transition-colors',
        // Variant styles
        {
          'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
          'bg-gray-200 text-gray-900 hover:bg-gray-300': variant === 'secondary',
          'border border-gray-300 bg-transparent hover:bg-gray-50': variant === 'outline',
        },
        // Size styles
        {
          'h-8 px-3 text-sm': size === 'sm',
          'h-10 px-4 text-base': size === 'md',
          'h-12 px-6 text-lg': size === 'lg',
        },
        // State styles
        {
          'opacity-50 cursor-not-allowed': disabled,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
```

### Naming Conventions

**Files and Components:**
- **Components**: PascalCase - `Header.tsx`, `AnnouncementModal.tsx`
- **Hooks**: camelCase with "use" prefix - `useLocalStorage.ts`, `useMediaQuery.ts`
- **Utilities**: camelCase - `cn.ts`, `helpers.ts`
- **Types**: PascalCase interfaces - `ComponentProps`, `UserData`
- **Constants**: SCREAMING_SNAKE_CASE - `API_BASE_URL`, `DEFAULT_TIMEOUT`

**Directories:**
- **Lowercase with hyphens**: `age-groups/`, `contact-forms/`
- **Singular names**: `component/`, `hook/`, `util/` (except when plural makes sense)

**Props and Variables:**
- **camelCase**: `backgroundColor`, `isVisible`, `onButtonClick`
- **Boolean props**: prefix with "is", "has", "can", "should" - `isOpen`, `hasError`, `canEdit`
- **Event handlers**: prefix with "on" - `onClick`, `onSubmit`, `onValueChange`

**CSS Classes (Tailwind):**
- **Mobile-first**: `text-sm md:text-base lg:text-lg`
- **Logical grouping**: spacing, then layout, then appearance
- **Consistent patterns**: `bg-blue-600 hover:bg-blue-700 active:bg-blue-800`
