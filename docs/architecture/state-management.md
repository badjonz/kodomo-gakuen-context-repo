# State Management

Based on the bilingual static site nature of Kodomo Gakuen, here's the simplified state management architecture focused on actual requirements:

### Store Structure

```
src/
├── context/
│   ├── AppContext.tsx              # Global application state
│   ├── LanguageContext.tsx         # Language preferences  
│   └── AnnouncementContext.tsx     # Announcement modal state
│
├── hooks/
│   ├── useAppContext.ts            # Hook for global app state
│   ├── useLanguage.ts              # Language management
│   ├── useLocalStorage.ts          # Persistent local storage
│   └── useAnnouncements.ts         # Announcement state management
│
└── types/
    ├── context.ts                  # Context state types
    └── global.ts                   # Global state interfaces
```

### State Management Template

```typescript
import React, { createContext, useContext, useReducer, ReactNode } from 'react'

// State interface
interface AppState {
  language: 'en' | 'ja'
  isMenuOpen: boolean
  announcements: Announcement[]
  currentAnnouncement: Announcement | null
}

// Action types
type AppAction =
  | { type: 'SET_LANGUAGE'; payload: 'en' | 'ja' }
  | { type: 'TOGGLE_MENU' }
  | { type: 'CLOSE_MENU' }
  | { type: 'SHOW_ANNOUNCEMENT'; payload: Announcement }
  | { type: 'CLOSE_ANNOUNCEMENT' }

// Initial state
const initialState: AppState = {
  language: 'en',
  isMenuOpen: false,
  announcements: [],
  currentAnnouncement: null,
}

// Reducer function
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload }
    case 'TOGGLE_MENU':
      return { ...state, isMenuOpen: !state.isMenuOpen }
    case 'CLOSE_MENU':
      return { ...state, isMenuOpen: false }
    case 'SHOW_ANNOUNCEMENT':
      return { ...state, currentAnnouncement: action.payload }
    case 'CLOSE_ANNOUNCEMENT':
      return { ...state, currentAnnouncement: null }
    default:
      return state
  }
}

// Context creation
const AppContext = createContext<{
  state: AppState
  dispatch: React.Dispatch<AppAction>
} | null>(null)

// Provider component
export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

// Custom hook for using context
export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider')
  }
  return context
}
```
