const fs = require('fs');
const path = require('path');

/**
 * Content validation script for build process
 * Validates JSON content structure and completeness
 */

const CONTENT_PATH = path.join(process.cwd(), 'content', 'content.json');

// Required sections for each language
const REQUIRED_SECTIONS = [
  'navigation',
  'header',
  'hero',
  'ageGroups',
  'about',
  'blog',
  'footer'
];

// Required navigation submenu items
const REQUIRED_NAV_SUBMENU = {
  informationSubmenu: ['about', 'fees', 'privacy', 'menu', 'programs', 'enrolment'],
  classesSubmenu: ['nyuuji', 'youji', 'star']
};

// Required hero page entries
const REQUIRED_HERO_PAGES = [
  'about', 'fees', 'privacy', 'menu', 'programs', 'enrolment',
  'forms', 'nyuuji', 'youji', 'star', 'activities'
];

// Required age group entries
const REQUIRED_AGE_GROUPS = ['nyuuji', 'youji', 'star'];

function validateContent() {
  console.log('🔍 Validating content structure...');
  
  try {
    // Check if content file exists
    if (!fs.existsSync(CONTENT_PATH)) {
      throw new Error(`Content file not found: ${CONTENT_PATH}`);
    }

    // Load and parse JSON
    const contentRaw = fs.readFileSync(CONTENT_PATH, 'utf8');
    let content;
    
    try {
      content = JSON.parse(contentRaw);
    } catch (parseError) {
      throw new Error(`Invalid JSON in content file: ${parseError.message}`);
    }

    // Validate top-level structure
    if (!content || typeof content !== 'object') {
      throw new Error('Content must be an object');
    }

    // Check language keys
    const languages = ['ja', 'en'];
    for (const lang of languages) {
      if (!content[lang]) {
        throw new Error(`Missing language section: ${lang}`);
      }
      
      console.log(`✅ Validating ${lang} content...`);
      validateLanguageContent(content[lang], lang);
    }

    console.log('✅ Content validation passed!');
    return true;

  } catch (error) {
    console.error('❌ Content validation failed:', error.message);
    process.exit(1);
  }
}

function validateLanguageContent(langContent, language) {
  // Check required sections
  for (const section of REQUIRED_SECTIONS) {
    if (!langContent[section]) {
      throw new Error(`Missing section "${section}" in ${language} content`);
    }
  }

  // Validate navigation structure
  validateNavigation(langContent.navigation, language);
  
  // Validate header structure
  validateHeader(langContent.header, language);
  
  // Validate hero structure
  validateHero(langContent.hero, language);
  
  // Validate age groups structure
  validateAgeGroups(langContent.ageGroups, language);
  
  // Validate about structure
  validateAbout(langContent.about, language);
  
  // Validate blog structure
  validateBlog(langContent.blog, language);
  
  // Validate footer structure
  validateFooter(langContent.footer, language);
}

function validateNavigation(navigation, language) {
  const required = ['home', 'information', 'informationSubmenu', 'forms', 'classes', 'classesSubmenu', 'activities'];
  
  for (const field of required) {
    if (!navigation[field]) {
      throw new Error(`Missing navigation field "${field}" in ${language}`);
    }
  }

  // Validate submenu structures
  for (const [submenuKey, requiredItems] of Object.entries(REQUIRED_NAV_SUBMENU)) {
    const submenu = navigation[submenuKey];
    if (!submenu) {
      throw new Error(`Missing navigation submenu "${submenuKey}" in ${language}`);
    }
    
    for (const item of requiredItems) {
      if (!submenu[item]) {
        throw new Error(`Missing navigation submenu item "${item}" in ${submenuKey} for ${language}`);
      }
    }
  }
}

function validateHeader(header, language) {
  const required = ['email', 'languageToggle', 'siteName'];
  
  for (const field of required) {
    if (!header[field]) {
      throw new Error(`Missing header field "${field}" in ${language}`);
    }
  }
}

function validateHero(hero, language) {
  // Validate homepage hero
  if (!hero.homepage) {
    throw new Error(`Missing hero.homepage in ${language}`);
  }
  
  const homepageRequired = ['title', 'subtitle', 'buttonText', 'buttonLink'];
  for (const field of homepageRequired) {
    if (!hero.homepage[field]) {
      throw new Error(`Missing hero.homepage.${field} in ${language}`);
    }
  }

  // Validate pages hero
  if (!hero.pages) {
    throw new Error(`Missing hero.pages in ${language}`);
  }
  
  for (const page of REQUIRED_HERO_PAGES) {
    if (!hero.pages[page]) {
      throw new Error(`Missing hero.pages.${page} in ${language}`);
    }

    const pageHero = hero.pages[page];
    if (!pageHero.title) {
      throw new Error(`Missing title for hero.pages.${page} in ${language}`);
    }
  }
}

function validateAgeGroups(ageGroups, language) {
  if (!ageGroups.sectionTitle) {
    throw new Error(`Missing ageGroups.sectionTitle in ${language}`);
  }
  
  for (const group of REQUIRED_AGE_GROUPS) {
    if (!ageGroups[group]) {
      throw new Error(`Missing age group "${group}" in ${language}`);
    }
    
    const groupData = ageGroups[group];
    const required = ['name', 'ageRange', 'description', 'image'];
    
    for (const field of required) {
      if (!groupData[field]) {
        throw new Error(`Missing ageGroups.${group}.${field} in ${language}`);
      }
    }
  }
}

function validateAbout(about, language) {
  const required = ['sectionTitle', 'description', 'philosophy'];
  
  for (const field of required) {
    if (!about[field]) {
      throw new Error(`Missing about.${field} in ${language}`);
    }
  }
}

function validateBlog(blog, language) {
  const required = ['sectionTitle', 'viewAllText'];
  
  for (const field of required) {
    if (!blog[field]) {
      throw new Error(`Missing blog.${field} in ${language}`);
    }
  }
}

function validateFooter(footer, language) {
  const required = ['quickLinks', 'contact', 'social', 'location'];
  
  for (const field of required) {
    if (!footer[field]) {
      throw new Error(`Missing footer.${field} in ${language}`);
    }
  }

  // Validate quick links structure
  if (!footer.quickLinks.title || !footer.quickLinks.links) {
    throw new Error(`Invalid footer.quickLinks structure in ${language}`);
  }

  // Validate contact structure
  const contactRequired = ['title', 'phone', 'email', 'address'];
  for (const field of contactRequired) {
    if (!footer.contact[field]) {
      throw new Error(`Missing footer.contact.${field} in ${language}`);
    }
  }
}

// Run validation if called directly
if (require.main === module) {
  validateContent();
}

module.exports = { validateContent };