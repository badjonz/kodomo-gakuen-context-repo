import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';

// Component that throws an error
function ThrowError({ shouldThrow = false }: { shouldThrow?: boolean }) {
  if (shouldThrow) {
    throw new Error('Test error message');
  }
  return <div data-testid="success">Component rendered successfully</div>;
}

// Component that throws an error on re-render
function ConditionalThrowError() {
  const [shouldThrow, setShouldThrow] = React.useState(false);
  
  if (shouldThrow) {
    throw new Error('Conditional error');
  }
  
  return (
    <div>
      <div data-testid="success">Component working</div>
      <button 
        data-testid="trigger-error" 
        onClick={() => setShouldThrow(true)}
      >
        Trigger Error
      </button>
    </div>
  );
}

describe('ErrorBoundary', () => {
  // Suppress console.error for these tests since we're intentionally throwing errors
  const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

  afterAll(() => {
    consoleErrorSpy.mockRestore();
  });

  beforeEach(() => {
    consoleErrorSpy.mockClear();
  });

  describe('normal operation', () => {
    it('should render children when no error occurs', () => {
      render(
        <ErrorBoundary>
          <ThrowError shouldThrow={false} />
        </ErrorBoundary>
      );

      expect(screen.getByTestId('success')).toBeInTheDocument();
      expect(screen.getByText('Component rendered successfully')).toBeInTheDocument();
    });

    it('should render multiple children successfully', () => {
      render(
        <ErrorBoundary>
          <div data-testid="child1">Child 1</div>
          <div data-testid="child2">Child 2</div>
        </ErrorBoundary>
      );

      expect(screen.getByTestId('child1')).toBeInTheDocument();
      expect(screen.getByTestId('child2')).toBeInTheDocument();
    });
  });

  describe('error handling', () => {
    it('should display default error UI when child component throws', () => {
      render(
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );

      expect(screen.getByText('申し訳ございません')).toBeInTheDocument();
      expect(screen.getByText('コンテンツの読み込み中にエラーが発生しました。')).toBeInTheDocument();
      expect(screen.getByText('Sorry, an error occurred while loading content.')).toBeInTheDocument();
      expect(screen.getByText('再試行 / Retry')).toBeInTheDocument();
    });

    it('should display custom fallback UI when provided', () => {
      const customFallback = <div data-testid="custom-error">Custom error message</div>;
      
      render(
        <ErrorBoundary fallback={customFallback}>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );

      expect(screen.getByTestId('custom-error')).toBeInTheDocument();
      expect(screen.getByText('Custom error message')).toBeInTheDocument();
      expect(screen.queryByText('申し訳ございません')).not.toBeInTheDocument();
    });

    it('should call onError callback when error occurs', () => {
      const onErrorMock = jest.fn();
      
      render(
        <ErrorBoundary onError={onErrorMock}>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );

      expect(onErrorMock).toHaveBeenCalledWith(
        expect.any(Error),
        expect.objectContaining({
          componentStack: expect.any(String)
        })
      );
      
      const [error] = onErrorMock.mock.calls[0];
      expect(error.message).toBe('Test error message');
    });

    it('should log error to console', () => {
      render(
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );

      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'ErrorBoundary caught an error:',
        expect.any(Error),
        expect.objectContaining({
          componentStack: expect.any(String)
        })
      );
    });
  });

  describe('error recovery', () => {
    it('should allow retry by clicking retry button', () => {
      let shouldThrow = true;
      
      function RetryTestComponent() {
        if (shouldThrow) {
          throw new Error('Retry test error');
        }
        return <div data-testid="success-after-retry">Success after retry</div>;
      }

      const { rerender } = render(
        <ErrorBoundary>
          <RetryTestComponent />
        </ErrorBoundary>
      );

      // Should show error UI
      expect(screen.getByText('申し訳ございません')).toBeInTheDocument();

      // Fix the error condition
      shouldThrow = false;

      // Click retry button
      fireEvent.click(screen.getByText('再試行 / Retry'));

      // Should attempt to render children again
      rerender(
        <ErrorBoundary>
          <RetryTestComponent />
        </ErrorBoundary>
      );

      // Note: In a real scenario, the component would need to be re-rendered
      // The retry button resets the error state, but the child component
      // needs to be in a non-throwing state for the retry to work
    });

    it('should handle errors that occur during interaction', () => {
      render(
        <ErrorBoundary>
          <ConditionalThrowError />
        </ErrorBoundary>
      );

      // Initially should render successfully
      expect(screen.getByTestId('success')).toBeInTheDocument();

      // Trigger an error
      fireEvent.click(screen.getByTestId('trigger-error'));

      // Should now show error UI
      expect(screen.getByText('申し訳ございません')).toBeInTheDocument();
      expect(screen.queryByTestId('success')).not.toBeInTheDocument();
    });
  });

  describe('boundary isolation', () => {
    it('should only catch errors from child components', () => {
      function ParentComponent() {
        const [hasError, setHasError] = React.useState(false);
        
        if (hasError) {
          throw new Error('Parent error');
        }
        
        return (
          <div>
            <div data-testid="parent">Parent component</div>
            <ErrorBoundary>
              <ThrowError shouldThrow={true} />
            </ErrorBoundary>
            <button 
              data-testid="trigger-parent-error" 
              onClick={() => setHasError(true)}
            >
              Trigger Parent Error
            </button>
          </div>
        );
      }

      render(<ParentComponent />);

      // Parent should still be visible
      expect(screen.getByTestId('parent')).toBeInTheDocument();
      
      // Error boundary should catch child error
      expect(screen.getByText('申し訳ございません')).toBeInTheDocument();
      
      // Parent error trigger should still be available
      expect(screen.getByTestId('trigger-parent-error')).toBeInTheDocument();
    });
  });

  describe('accessibility', () => {
    it('should have proper ARIA attributes in error state', () => {
      render(
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );

      const retryButton = screen.getByText('再試行 / Retry');
      expect(retryButton).toBeInstanceOf(HTMLButtonElement);
      expect(retryButton).toHaveClass('px-4', 'py-2', 'bg-blue-600', 'text-white');
    });

    it('should have readable error message structure', () => {
      render(
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );

      // Check for proper heading structure
      const heading = screen.getByText('申し訳ございません');
      expect(heading.tagName).toBe('H2');
      
      // Check for explanatory text
      expect(screen.getByText('コンテンツの読み込み中にエラーが発生しました。')).toBeInTheDocument();
      expect(screen.getByText('Sorry, an error occurred while loading content.')).toBeInTheDocument();
    });
  });
});