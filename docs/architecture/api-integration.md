# API Integration

Define API service patterns based on Next.js and React patterns for future backend integration:

### Service Template

```typescript
// API service template for future backend integration
import { NextRequest, NextResponse } from 'next/server'

// Types for API responses
interface ApiResponse<T> {
  data: T | null
  error: string | null
  status: 'success' | 'error' | 'loading'
}

interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
  language: 'en' | 'ja'
}

interface EnrollmentFormData extends ContactFormData {
  childName: string
  childAge: number
  preferredStartDate: string
  ageGroup: 'nyuuji' | 'nensho' | 'nenchu' | 'nencho'
}

// API service class for form submissions
export class ApiService {
  private baseUrl: string

  constructor(baseUrl = '/api') {
    this.baseUrl = baseUrl
  }

  async submitContactForm(data: ContactFormData): Promise<ApiResponse<{ id: string }>> {
    try {
      const response = await fetch(`${this.baseUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      return { data: result, error: null, status: 'success' }
    } catch (error) {
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
        status: 'error',
      }
    }
  }

  async submitEnrollmentForm(data: EnrollmentFormData): Promise<ApiResponse<{ id: string }>> {
    try {
      const response = await fetch(`${this.baseUrl}/enrollment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      return { data: result, error: null, status: 'success' }
    } catch (error) {
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
        status: 'error',
      }
    }
  }
}

// Singleton instance
export const apiService = new ApiService()
```

### API Client Configuration

```typescript
// Custom hook for API calls with loading states
import { useState, useCallback } from 'react'

interface UseApiOptions<T> {
  onSuccess?: (data: T) => void
  onError?: (error: string) => void
}

export function useApi<T>() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<T | null>(null)

  const execute = useCallback(async (
    apiCall: () => Promise<ApiResponse<T>>,
    options?: UseApiOptions<T>
  ) => {
    setLoading(true)
    setError(null)

    try {
      const result = await apiCall()
      
      if (result.status === 'success' && result.data) {
        setData(result.data)
        options?.onSuccess?.(result.data)
      } else {
        setError(result.error || 'Unknown error')
        options?.onError?.(result.error || 'Unknown error')
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error'
      setError(errorMessage)
      options?.onError?.(errorMessage)
    } finally {
      setLoading(false)
    }
  }, [])

  const reset = useCallback(() => {
    setData(null)
    setError(null)
    setLoading(false)
  }, [])

  return { loading, error, data, execute, reset }
}
```
