'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Language, LanguageContextType } from '@/types/language';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  // Always initialize to 'ja' to avoid hydration mismatch
  const [language, setLanguageState] = useState<Language>('ja');
  const [mounted, setMounted] = useState(false);

  // Load saved language preference after hydration
  useEffect(() => {
    setMounted(true);

    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('kodomo-language') as Language | null;
      if (savedLanguage && savedLanguage !== language) {
        setLanguageState(savedLanguage);
      }
    }
  }, []);

  // Persist language changes to localStorage
  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      localStorage.setItem('kodomo-language', language);
    }
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguageState(prev => prev === 'ja' ? 'en' : 'ja');
  };

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
  };

  const value: LanguageContextType = {
    language,
    toggleLanguage,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
}