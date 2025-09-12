'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { 
  loadContent, 
  getContentForLanguage, 
  getSectionContent, 
  getContentError, 
  isUsingFallback 
} from '@/utils/contentLoader';
import type { LanguageContent, ContentError } from '@/types/content';

interface UseContentReturn {
  content: LanguageContent | null;
  loading: boolean;
  error: ContentError | null;
  usingFallback: boolean;
  refetch: () => Promise<void>;
}

/**
 * Hook to load and manage content for the current language
 */
export function useContent(): UseContentReturn {
  const { language } = useLanguage();
  const [content, setContent] = useState<LanguageContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ContentError | null>(null);

  const fetchContent = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const languageContent = await getContentForLanguage(language);
      setContent(languageContent);
      
      // Check if we're using fallback content
      const contentError = getContentError();
      if (contentError) {
        setError(contentError);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error loading content';
      setError({
        message: errorMessage,
        fallbackUsed: false
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, [language]);

  const refetch = async () => {
    await fetchContent();
  };

  return {
    content,
    loading,
    error,
    usingFallback: isUsingFallback(),
    refetch
  };
}

/**
 * Hook to load specific section content for the current language
 */
export function useSectionContent<K extends keyof LanguageContent>(
  section: K
): {
  content: LanguageContent[K] | null;
  loading: boolean;
  error: ContentError | null;
  refetch: () => Promise<void>;
} {
  const { language } = useLanguage();
  const [content, setContent] = useState<LanguageContent[K] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ContentError | null>(null);

  const fetchSectionContent = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const sectionContent = await getSectionContent(section, language);
      setContent(sectionContent);
      
      // Check if we're using fallback content
      const contentError = getContentError();
      if (contentError) {
        setError({
          ...contentError,
          section
        });
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error loading section content';
      setError({
        message: errorMessage,
        section,
        fallbackUsed: false
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSectionContent();
  }, [language, section]);

  const refetch = async () => {
    await fetchSectionContent();
  };

  return {
    content,
    loading,
    error,
    refetch
  };
}