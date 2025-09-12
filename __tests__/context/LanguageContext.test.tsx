import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';

// Test component that uses the language context
function TestComponent() {
  const { language, toggleLanguage, setLanguage } = useLanguage();
  
  return (
    <div>
      <span data-testid="current-language">{language}</span>
      <button data-testid="toggle-button" onClick={toggleLanguage}>
        Toggle Language
      </button>
      <button data-testid="set-english" onClick={() => setLanguage('en')}>
        Set English
      </button>
      <button data-testid="set-japanese" onClick={() => setLanguage('ja')}>
        Set Japanese
      </button>
    </div>
  );
}

// Component to test error handling when used outside provider
function ComponentWithoutProvider() {
  try {
    const { language } = useLanguage();
    return <div data-testid="language">{language}</div>;
  } catch (error) {
    return <div data-testid="error">{error instanceof Error ? error.message : 'Unknown error'}</div>;
  }
}

describe('LanguageContext', () => {
  describe('LanguageProvider', () => {
    it('should provide default Japanese language', () => {
      render(
        <LanguageProvider>
          <TestComponent />
        </LanguageProvider>
      );

      expect(screen.getByTestId('current-language')).toHaveTextContent('ja');
    });

    it('should toggle between Japanese and English', async () => {
      render(
        <LanguageProvider>
          <TestComponent />
        </LanguageProvider>
      );

      const toggleButton = screen.getByTestId('toggle-button');
      const languageDisplay = screen.getByTestId('current-language');

      // Initial state should be Japanese
      expect(languageDisplay).toHaveTextContent('ja');

      // Toggle to English
      fireEvent.click(toggleButton);
      await waitFor(() => {
        expect(languageDisplay).toHaveTextContent('en');
      });

      // Toggle back to Japanese
      fireEvent.click(toggleButton);
      await waitFor(() => {
        expect(languageDisplay).toHaveTextContent('ja');
      });
    });

    it('should set language directly', async () => {
      render(
        <LanguageProvider>
          <TestComponent />
        </LanguageProvider>
      );

      const setEnglishButton = screen.getByTestId('set-english');
      const setJapaneseButton = screen.getByTestId('set-japanese');
      const languageDisplay = screen.getByTestId('current-language');

      // Set to English
      fireEvent.click(setEnglishButton);
      await waitFor(() => {
        expect(languageDisplay).toHaveTextContent('en');
      });

      // Set to Japanese
      fireEvent.click(setJapaneseButton);
      await waitFor(() => {
        expect(languageDisplay).toHaveTextContent('ja');
      });
    });

    it('should maintain state across multiple children', () => {
      function MultipleChildren() {
        const { language } = useLanguage();
        return (
          <div>
            <span data-testid="child1">{language}</span>
            <span data-testid="child2">{language}</span>
          </div>
        );
      }

      render(
        <LanguageProvider>
          <MultipleChildren />
        </LanguageProvider>
      );

      expect(screen.getByTestId('child1')).toHaveTextContent('ja');
      expect(screen.getByTestId('child2')).toHaveTextContent('ja');
    });
  });

  describe('useLanguage hook', () => {
    it('should throw error when used outside provider', () => {
      // Suppress console.error for this test
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      // Test by attempting to render without provider and checking error state
      const { getByTestId } = render(<ComponentWithoutProvider />);
      expect(getByTestId('error')).toHaveTextContent('useLanguage must be used within a LanguageProvider');

      consoleSpy.mockRestore();
    });

    it('should return correct context value types', () => {
      let contextValue: any;

      function TypeTestComponent() {
        contextValue = useLanguage();
        return <div />;
      }

      render(
        <LanguageProvider>
          <TypeTestComponent />
        </LanguageProvider>
      );

      expect(contextValue).toHaveProperty('language');
      expect(contextValue).toHaveProperty('toggleLanguage');
      expect(contextValue).toHaveProperty('setLanguage');
      expect(typeof contextValue.language).toBe('string');
      expect(typeof contextValue.toggleLanguage).toBe('function');
      expect(typeof contextValue.setLanguage).toBe('function');
    });
  });

  describe('Language state persistence', () => {
    it('should maintain language state when component re-renders', async () => {
      function RerenderTestComponent() {
        const { language, setLanguage } = useLanguage();
        const [renderCount, setRenderCount] = React.useState(0);

        return (
          <div>
            <span data-testid="language">{language}</span>
            <span data-testid="render-count">{renderCount}</span>
            <button 
              data-testid="set-english" 
              onClick={() => setLanguage('en')}
            >
              Set English
            </button>
            <button 
              data-testid="force-rerender" 
              onClick={() => setRenderCount(c => c + 1)}
            >
              Force Rerender
            </button>
          </div>
        );
      }

      render(
        <LanguageProvider>
          <RerenderTestComponent />
        </LanguageProvider>
      );

      const setEnglishButton = screen.getByTestId('set-english');
      const forceRerenderButton = screen.getByTestId('force-rerender');
      const languageDisplay = screen.getByTestId('language');

      // Set to English
      fireEvent.click(setEnglishButton);
      await waitFor(() => {
        expect(languageDisplay).toHaveTextContent('en');
      });

      // Force re-render
      fireEvent.click(forceRerenderButton);
      
      // Language should still be English after re-render
      expect(languageDisplay).toHaveTextContent('en');
    });
  });
});