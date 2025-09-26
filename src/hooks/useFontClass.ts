import { useLanguage } from '@/context/LanguageContext'

export function useFontClass(): string {
  const { language } = useLanguage()

  return language === 'en' ? 'font-montserrat' : 'font-kosugi'
}