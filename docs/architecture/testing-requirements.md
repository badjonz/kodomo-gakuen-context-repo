# Testing Requirements

Define minimal testing requirements based on Next.js and React testing best practices for the preschool website:

### Component Test Template

```typescript
// Component test template using React Testing Library and Jest
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from '@/components/sections/Hero'

// Mock Framer Motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
  },
}))

describe('Hero Component', () => {
  const defaultProps = {
    title: 'Welcome to Kodomo Gakuen',
    subtitle: 'Nurturing growth in a bilingual environment',
    backgroundImage: '/images/hero-image.jpg',
  }

  beforeEach(() => {
    // Reset any mocks before each test
    jest.clearAllMocks()
  })

  describe('Rendering', () => {
    it('displays the correct title and subtitle', () => {
      render(<Hero {...defaultProps} />)
      
      expect(screen.getByText('Welcome to Kodomo Gakuen')).toBeInTheDocument()
      expect(screen.getByText('Nurturing growth in a bilingual environment')).toBeInTheDocument()
    })

    it('renders call-to-action button when provided', () => {
      const propsWithButton = {
        ...defaultProps,
        button: { text: 'Learn More', href: '/information/about' },
      }
      
      render(<Hero {...propsWithButton} />)
      
      const button = screen.getByRole('link', { name: /learn more/i })
      expect(button).toBeInTheDocument()
      expect(button).toHaveAttribute('href', '/information/about')
    })
  })

  describe('Language Context', () => {
    it('provides default Japanese language state', () => {
      render(
        <LanguageProvider>
          <TestComponent />
        </LanguageProvider>
      )
      
      expect(screen.getByTestId('current-language')).toHaveTextContent('ja')
    })
  })
})
```

### Testing Best Practices

1. **Unit Tests**: Test individual components in isolation
2. **Integration Tests**: Test component interactions  
3. **E2E Tests**: Test critical user flows (using Cypress/Playwright)
4. **Coverage Goals**: Aim for 80% code coverage
5. **Test Structure**: Arrange-Act-Assert pattern
6. **Mock External Dependencies**: API calls, routing, state management
