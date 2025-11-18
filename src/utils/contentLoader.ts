import type { BilingualContent, LanguageContent, ContentError } from '@/types/content';
import type { Language } from '@/types/language';

// Fallback content for when JSON loading fails
const fallbackContent: LanguageContent = {
  navigation: {
    home: 'ホーム',
    information: 'インフォメーション',
    informationSubmenu: {
      about: '保育方針',
      fees: '保育料',
      privacy: 'プライバシーポリシー',
      menu: '給食',
      programs: '活動内容',
      enrolment: '入園について'
    },
    forms: '書類',
    classes: 'クラス',
    classesSubmenu: {
      nyuuji: '乳児',
      youji: '幼児',
      star: '国際クラス'
    },
    activities: '課外教室'
  },
  header: {
    email: 'info@kodomogakuen.com',
    languageToggle: 'English',
    siteName: 'こども学園 Kodomo Gakuen',
    contactButton: 'お問合せ',
    mailtoSubject: 'お問合せ',
    mailtoBody: 'ご希望内容: 　 見学　入園の相談\nご希望日程： 　 \nお子様生年月日：'
  },
  announcement: {
    title: 'さあ、2学期の開幕！新たな挑戦の始まりです',
    content: '子どもたちの元気な声が園に戻り、園内が一気ににぎやかになりました。夏休みの思い出を楽しそうに話す姿や、日焼けしたお顔から、たくさんの楽しい体験をしたことが伝わってきます',
    readMoreText: '続き',
    readMoreLink: '/announcement',
    minimizedText: '園長からのあいさつ'
  },
  hero: {
    homepage: {
      title: 'Enjoy Learning With Us',
      subtitle: 'ふれあい保育・感謝・思いやり',
      buttonText: 'こども学園での保育活動',
      buttonLink: '/about'
    },
    pages: {
      about: { title: '保育方針', subtitle: 'Our Education Philosophy' },
      fees: { title: '保育料', subtitle: 'Tuition and Fees' },
      privacy: { title: 'プライバシーポリシー', subtitle: 'Privacy Policy' },
      menu: { title: '給食', subtitle: 'School Lunch Menu' },
      programs: { title: '活動内容', subtitle: 'Educational Programs' },
      enrolment: { title: '入園について', subtitle: 'Enrollment Information' },
      forms: { title: '書類', subtitle: 'Application Forms' },
      nyuuji: { title: '乳児クラス', subtitle: 'Infant Class' },
      youji: { title: '幼児クラス', subtitle: 'Toddler Class' },
      star: { title: '国際クラス', subtitle: 'International Class' },
      activities: { title: '課外教室', subtitle: 'After-school Activities' }
    }
  },
  ageGroups: {
    sectionTitle: '年齢別クラス',
    nyuuji: {
      name: '乳児クラス',
      ageRange: '0歳 - 2歳',
      description: '愛情豊かな環境で、個々の発達に合わせたケアを提供します。',
      image: '/images/nyuuji-pic.JPG'
    },
    youji: {
      name: '幼児クラス',
      ageRange: '3歳 - 5歳',
      description: '遊びを通じて学び、社会性と創造性を育みます。',
      image: '/images/nensho-pic.JPG'
    },
    star: {
      name: '国際クラス',
      ageRange: '3歳 - 5歳',
      description: '英語と日本語のバイリンガル教育で国際感覚を養います。',
      image: '/images/star-pic.JPG'
    }
  },
  about: {
    sectionTitle: 'こども学園について',
    description: 'こども学園は、子どもたち一人一人の個性を大切にし、健やかな成長をサポートする幼稚園・保育園です。',
    philosophy: 'ふれあい保育・感謝・思いやりを基本理念とし、愛情豊かな環境の中で子どもたちの可能性を最大限に引き出します。'
  },
  blog: {
    sectionTitle: 'お知らせ・ブログ',
    viewAllText: 'すべて見る'
  },
  footer: {
    quickLinks: {
      title: 'クイックリンク',
      links: {
        home: 'ホーム',
        about: '保育方針',
        programs: '活動内容',
        contact: 'お問い合わせ'
      }
    },
    contact: {
      title: 'お問い合わせ',
      phone: '042-590-3715',
      email: 'info@kodomogakuen.com',
      address: '東京都東大和市奈良橋２－４０９'
    },
    social: {
      title: 'ソーシャルメディア'
    },
    location: {
      title: '所在地'
    }
  }
};

let cachedContent: BilingualContent | null = null;
let contentError: ContentError | null = null;

/**
 * Load bilingual content from JSON file
 * Returns cached content if available, otherwise loads from file
 */
export async function loadContent(): Promise<BilingualContent> {
  // Return cached content if available and no previous errors
  if (cachedContent && !contentError) {
    return cachedContent;
  }

  try {
    // In Next.js, we need to load content dynamically
    const response = await fetch('/content/content.json');
    
    if (!response.ok) {
      throw new Error(`Failed to load content: ${response.status} ${response.statusText}`);
    }
    
    const loadedContent: BilingualContent = await response.json();
    
    // Validate content structure
    if (!validateContentStructure(loadedContent)) {
      throw new Error('Invalid content structure');
    }
    
    // Cache successful load
    cachedContent = loadedContent;
    contentError = null;
    
    return loadedContent;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown content loading error';
    
    // Create error object
    contentError = {
      message: errorMessage,
      fallbackUsed: true
    };
    
    // Log error for debugging
    console.error('Content loading failed, using fallback:', errorMessage);
    
    // Return fallback content structure
    const fallbackBilingualContent: BilingualContent = {
      ja: fallbackContent,
      en: fallbackContent // Using Japanese content as English fallback for now
    };
    
    return fallbackBilingualContent;
  }
}

/**
 * Get content for specific language
 */
export async function getContentForLanguage(language: Language): Promise<LanguageContent> {
  const content = await loadContent();
  return content[language];
}

/**
 * Get content for specific section and language
 */
export async function getSectionContent<K extends keyof LanguageContent>(
  section: K,
  language: Language
): Promise<LanguageContent[K]> {
  const content = await getContentForLanguage(language);
  return content[section];
}

/**
 * Validate content structure to ensure all required fields are present
 */
function validateContentStructure(content: any): content is BilingualContent {
  try {
    // Check top level structure
    if (!content || typeof content !== 'object') {
      return false;
    }
    
    // Check language keys exist
    if (!content.ja || !content.en) {
      return false;
    }
    
    // Check required sections exist for both languages
    const requiredSections = ['navigation', 'header', 'announcement', 'hero', 'ageGroups', 'about', 'blog', 'footer'];
    
    for (const lang of ['ja', 'en']) {
      const langContent = content[lang];
      if (!langContent || typeof langContent !== 'object') {
        return false;
      }
      
      for (const section of requiredSections) {
        if (!langContent[section]) {
          console.warn(`Missing section: ${section} in language: ${lang}`);
          return false;
        }
      }
    }
    
    return true;
  } catch (error) {
    console.error('Content validation error:', error);
    return false;
  }
}

/**
 * Get current content loading error if any
 */
export function getContentError(): ContentError | null {
  return contentError;
}

/**
 * Clear cached content (useful for development/testing)
 */
export function clearContentCache(): void {
  cachedContent = null;
  contentError = null;
}

/**
 * Check if content is currently using fallback
 */
export function isUsingFallback(): boolean {
  return contentError?.fallbackUsed ?? false;
}