import { 
  loadContent, 
  getContentForLanguage, 
  getSectionContent, 
  getContentError,
  clearContentCache,
  isUsingFallback
} from '@/utils/contentLoader';

// Mock fetch globally
global.fetch = jest.fn();

// Mock console.error to suppress error messages in tests
const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});

// Sample valid content for testing
const mockValidContent = {
  ja: {
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
      siteName: 'こども学園 Kodomo Gakuen'
    },
    hero: {
      homepage: {
        title: 'Test Title',
        subtitle: 'Test Subtitle',
        buttonText: 'Test Button',
        buttonLink: '/test'
      },
      pages: {
        about: { title: 'About', subtitle: 'About Subtitle' },
        fees: { title: 'Fees', subtitle: 'Fees Subtitle' },
        privacy: { title: 'Privacy', subtitle: 'Privacy Subtitle' },
        menu: { title: 'Menu', subtitle: 'Menu Subtitle' },
        programs: { title: 'Programs', subtitle: 'Programs Subtitle' },
        enrolment: { title: 'Enrolment', subtitle: 'Enrolment Subtitle' },
        forms: { title: 'Forms', subtitle: 'Forms Subtitle' },
        nyuuji: { title: 'Nyuuji', subtitle: 'Nyuuji Subtitle' },
        youji: { title: 'Youji', subtitle: 'Youji Subtitle' },
        star: { title: 'Star', subtitle: 'Star Subtitle' },
        activities: { title: 'Activities', subtitle: 'Activities Subtitle' }
      }
    },
    ageGroups: {
      sectionTitle: 'Age Groups',
      nyuuji: {
        name: 'Test Nyuuji',
        ageRange: '0-2',
        description: 'Test Description',
        image: '/test.jpg'
      },
      youji: {
        name: 'Test Youji',
        ageRange: '3-5',
        description: 'Test Description',
        image: '/test.jpg'
      },
      star: {
        name: 'Test Star',
        ageRange: '3-5',
        description: 'Test Description',
        image: '/test.jpg'
      }
    },
    about: {
      sectionTitle: 'About',
      description: 'Test Description',
      philosophy: 'Test Philosophy'
    },
    blog: {
      sectionTitle: 'Blog',
      viewAllText: 'View All'
    },
    footer: {
      quickLinks: {
        title: 'Quick Links',
        links: {
          home: 'Home',
          about: 'About',
          programs: 'Programs',
          contact: 'Contact'
        }
      },
      contact: {
        title: 'Contact',
        phone: '123-456-7890',
        email: 'test@example.com',
        address: 'Test Address'
      },
      social: {
        title: 'Social'
      },
      location: {
        title: 'Location'
      }
    }
  },
  en: {
    navigation: {
      home: 'Home',
      information: 'Information',
      informationSubmenu: {
        about: 'About',
        fees: 'Fees',
        privacy: 'Privacy',
        menu: 'Menu',
        programs: 'Programs',
        enrolment: 'Enrolment'
      },
      forms: 'Forms',
      classes: 'Classes',
      classesSubmenu: {
        nyuuji: 'Infants',
        youji: 'Toddlers',
        star: 'International'
      },
      activities: 'Activities'
    },
    header: {
      email: 'info@kodomogakuen.com',
      languageToggle: '日本語',
      siteName: 'Kodomo Gakuen'
    },
    hero: {
      homepage: {
        title: 'Test Title EN',
        subtitle: 'Test Subtitle EN',
        buttonText: 'Test Button EN',
        buttonLink: '/test'
      },
      pages: {
        about: { title: 'About EN', subtitle: 'About Subtitle EN' },
        fees: { title: 'Fees EN', subtitle: 'Fees Subtitle EN' },
        privacy: { title: 'Privacy EN', subtitle: 'Privacy Subtitle EN' },
        menu: { title: 'Menu EN', subtitle: 'Menu Subtitle EN' },
        programs: { title: 'Programs EN', subtitle: 'Programs Subtitle EN' },
        enrolment: { title: 'Enrolment EN', subtitle: 'Enrolment Subtitle EN' },
        forms: { title: 'Forms EN', subtitle: 'Forms Subtitle EN' },
        nyuuji: { title: 'Nyuuji EN', subtitle: 'Nyuuji Subtitle EN' },
        youji: { title: 'Youji EN', subtitle: 'Youji Subtitle EN' },
        star: { title: 'Star EN', subtitle: 'Star Subtitle EN' },
        activities: { title: 'Activities EN', subtitle: 'Activities Subtitle EN' }
      }
    },
    ageGroups: {
      sectionTitle: 'Age Groups EN',
      nyuuji: {
        name: 'Test Nyuuji EN',
        ageRange: '0-2',
        description: 'Test Description EN',
        image: '/test.jpg'
      },
      youji: {
        name: 'Test Youji EN',
        ageRange: '3-5',
        description: 'Test Description EN',
        image: '/test.jpg'
      },
      star: {
        name: 'Test Star EN',
        ageRange: '3-5',
        description: 'Test Description EN',
        image: '/test.jpg'
      }
    },
    about: {
      sectionTitle: 'About EN',
      description: 'Test Description EN',
      philosophy: 'Test Philosophy EN'
    },
    blog: {
      sectionTitle: 'Blog EN',
      viewAllText: 'View All EN'
    },
    footer: {
      quickLinks: {
        title: 'Quick Links EN',
        links: {
          home: 'Home EN',
          about: 'About EN',
          programs: 'Programs EN',
          contact: 'Contact EN'
        }
      },
      contact: {
        title: 'Contact EN',
        phone: '123-456-7890',
        email: 'test@example.com',
        address: 'Test Address EN'
      },
      social: {
        title: 'Social EN'
      },
      location: {
        title: 'Location EN'
      }
    }
  }
};

describe('contentLoader', () => {
  beforeEach(() => {
    // Clear cache before each test
    clearContentCache();
    
    // Reset mocks
    jest.clearAllMocks();
    (fetch as jest.Mock).mockClear();
  });

  afterAll(() => {
    // Restore console methods
    consoleErrorSpy.mockRestore();
    consoleWarnSpy.mockRestore();
  });

  describe('loadContent', () => {
    it('should load content successfully from JSON', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockValidContent
      });

      const content = await loadContent();

      expect(fetch).toHaveBeenCalledWith('/content/content.json');
      expect(content).toEqual(mockValidContent);
      expect(getContentError()).toBeNull();
    });

    it('should return cached content on subsequent calls', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockValidContent
      });

      // First call
      const content1 = await loadContent();
      
      // Second call - should use cache
      const content2 = await loadContent();

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(content1).toEqual(content2);
    });

    it('should handle fetch errors and return fallback content', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: 'Not Found'
      });

      const content = await loadContent();

      expect(content).toBeDefined();
      expect(content.ja).toBeDefined();
      expect(content.en).toBeDefined();
      expect(getContentError()).toMatchObject({
        message: expect.stringContaining('Failed to load content'),
        fallbackUsed: true
      });
    });

    it('should handle JSON parsing errors', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => {
          throw new Error('Invalid JSON');
        }
      });

      const content = await loadContent();

      expect(content).toBeDefined();
      expect(getContentError()).toMatchObject({
        message: 'Invalid JSON',
        fallbackUsed: true
      });
    });

    it('should handle invalid content structure', async () => {
      const invalidContent = { invalid: 'structure' };
      
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => invalidContent
      });

      const content = await loadContent();

      expect(content).toBeDefined();
      expect(getContentError()).toMatchObject({
        message: 'Invalid content structure',
        fallbackUsed: true
      });
    });
  });

  describe('getContentForLanguage', () => {
    it('should return Japanese content correctly', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockValidContent
      });

      const jaContent = await getContentForLanguage('ja');

      expect(jaContent).toEqual(mockValidContent.ja);
      expect(jaContent.navigation.home).toBe('ホーム');
    });

    it('should return English content correctly', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockValidContent
      });

      const enContent = await getContentForLanguage('en');

      expect(enContent).toEqual(mockValidContent.en);
      expect(enContent.navigation.home).toBe('Home');
    });
  });

  describe('getSectionContent', () => {
    it('should return specific section content for Japanese', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockValidContent
      });

      const navigationContent = await getSectionContent('navigation', 'ja');

      expect(navigationContent).toEqual(mockValidContent.ja.navigation);
      expect(navigationContent.home).toBe('ホーム');
    });

    it('should return specific section content for English', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockValidContent
      });

      const heroContent = await getSectionContent('hero', 'en');

      expect(heroContent).toEqual(mockValidContent.en.hero);
      expect(heroContent.homepage.title).toBe('Test Title EN');
    });
  });

  describe('error handling utilities', () => {
    it('should track and return content errors', async () => {
      (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

      await loadContent();

      const error = getContentError();
      expect(error).toMatchObject({
        message: 'Network error',
        fallbackUsed: true
      });
    });

    it('should indicate when using fallback content', async () => {
      (fetch as jest.Mock).mockRejectedValueOnce(new Error('Test error'));

      await loadContent();

      expect(isUsingFallback()).toBe(true);
    });

    it('should clear error state after successful load', async () => {
      // First, cause an error
      (fetch as jest.Mock).mockRejectedValueOnce(new Error('Test error'));
      await loadContent();
      expect(getContentError()).toBeTruthy();

      // Clear cache and load successfully
      clearContentCache();
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockValidContent
      });

      await loadContent();
      expect(getContentError()).toBeNull();
      expect(isUsingFallback()).toBe(false);
    });
  });

  describe('cache management', () => {
    it('should clear cache correctly', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockValidContent
      });

      // Load content
      await loadContent();
      expect(fetch).toHaveBeenCalledTimes(1);

      // Clear cache
      clearContentCache();

      // Load again - should fetch again
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockValidContent
      });

      await loadContent();
      expect(fetch).toHaveBeenCalledTimes(2);
    });
  });
});