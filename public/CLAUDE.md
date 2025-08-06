# Public Assets Directory Documentation

This directory contains all static assets served directly by the Next.js application, including images, documents, and other files accessible via URL paths.

## Directory Structure and Organization

### Images Directory (`/images/`)

The images directory contains all visual assets organized by category and usage context.

#### Hero and Background Images
**Primary Images**:
- `hero-image.jpg` - Main homepage hero background image
- `page-banner.jpeg` - Standard page banner background
- `page-banner 2.jpg` - Alternative page banner background

**Usage**: Referenced in Hero components and page headers

#### Class and Age Group Images
**Age-Specific Images**:
- `nyuuji-pic.JPG` - Infant class (乳児) representative image
- `nensho-pic.JPG` - 3-year-old class (年少) image  
- `nenchu-pic.JPG` - 4-year-old class (年中) image
- `nencho-pic.JPG` - 5-year-old class (年長) image
- `tamago.JPG` - Tamago (egg/youngest) class image
- `hiyoko.JPG` - Hiyoko (chick) class image

**Usage**: Class information pages and age group sections

#### Staff and Program Images
**Staff Photos**:
- `english-staff.jpg` - English teaching staff
- `heshani.jpg` - Individual staff member photo
- `jon.jpg` - Individual staff member photo
- `testimonialPic.jpg` - Testimonial section image

**Program Images**:
- `star-pic.JPG`, `star-pic-1.jpg`, `star-pic-2.jpg`, `star-pic-3.jpg` - Star (International) program images
- `Star-class-testimonials.jpg` - Star class testimonials

#### Activity and Event Images
**Sports Activities**:
- `soccer-club-1.jpg`, `soccer-club-2.jpg` - Soccer club activities
- `gymnastics-club.jpg` - Gymnastics program
- `music-club.jpg` - Music activities

**Special Events**:
- `christmas.JPG` - Christmas celebration
- `Setsubun.jpg` - Setsubun (bean-throwing) festival
- `new-year-assembly.jpg` - New Year assembly
- `Graduation.jpg` - Graduation ceremony
- `birthday party.jpg` - Birthday celebrations
- `sleepover.JPG` - Overnight activities

**Educational Activities**:
- `planetarium.jpg` - Educational trips
- `lunch-menu.jpg` - Meal time activities

#### About and Information Images
**School Information**:
- `about-1.jpg`, `about-2.jpg`, `about-3.jpg` - General school information
- `about-11.JPG`, `about-12.JPG`, `about-22.jpg`, `about-23.jpg` - Additional school scenes
- `school-1.jpg` - School building/environment
- `nakayoshi.jpg` - Student interaction/friendship

**Announcements and Communication**:
- `announcement.jpg`, `annoucementImg7.PNG` - Announcement section images
- `welcome.JPG`, `welcomecollage.png`, `welcometext.png` - Welcome messages

#### Seasonal and Cultural Images
**Seasonal Elements**:
- `cherry-blossom.png` - Spring/sakura theme
- `8gatu-moji.png` - August-related Japanese text/design

#### Forms and Documents Visuals
**Form-Related Images**:
- `ikensho.jpg` - Opinion/feedback form visual
- `toentodoke.jpg` - Enrollment notification form
- `yoyaku.jpg` - Reservation/appointment booking
- `pdf-icon-png-2056.png` - PDF document icon

#### Special Programs
**Saturday Care**:
- `saturdayuse.jpg`, `saturdaywork.jpg` - Saturday care program visuals

#### SVG Icons (`/images/SVG/`)
**Navigation and UI Icons**:
- `home.svg` - Home/house icon
- `child.svg`, `child_care.svg` - Child care related icons
- `earth.svg`, `earth1.svg` - Global/international icons
- `star.svg`, `star-o.svg`, `stars.svg` - Rating/quality indicators
- `asterisk.svg` - Special notation icon

**Functional Icons**:
- `circle-up.svg` - Up/scroll to top indicator
- `coin-yen.svg` - Financial/pricing icon
- `files-empty.svg` - Document/forms icon
- `import_contacts.svg` - Contact/communication icon
- `lock.svg` - Security/privacy icon

**Activity Icons**:
- `lunch_dining.svg`, `spoon-knife.svg` - Meal/dining related
- `newspaper.svg` - News/announcements
- `soccer.svg` - Sports activities

**Sprite Files**:
- `sprite.svg`, `sprite1.svg` - Icon sprite collections for performance optimization

#### Legacy/Reference Images (`/images/default images/`)
**Stock/Reference Photos**:
- `adult-attractive-beautiful-beauty-415829.jpg` - Sample adult image
- `adult-beard-boy-casual-220453.jpg` - Sample casual image  
- `man-wearing-blue-crew-neck-t-shirt-2379005.jpg` - Sample staff image
- `nyuuji.png` - Default infant class image
- `showcase.jpg`, `slide4.jpg` - Sample showcase/presentation images

#### Development Files
**HTML Demos**:
- `demo.html`, `demo1.html` - Image gallery demonstrations

### Documents Directory (`/documents/`)
**Purpose**: Storage for PDF forms and official documents
**Current Status**: Empty directory prepared for future document uploads
**Planned Contents**:
- Enrollment forms
- Policy documents
- Fee schedules
- Parent handbooks
- Application materials

## Asset Optimization Guidelines

### Image Standards
**File Formats**:
- JPG/JPEG: Primary format for photographs and complex images
- PNG: Used for images requiring transparency or sharp edges
- SVG: Vector icons and simple graphics for scalability

**Naming Conventions**:
- Descriptive filenames in English
- Lowercase with hyphens for multi-word names
- Class/age-specific prefixes (nyuuji-, nencho-, etc.)
- Activity-specific descriptors (soccer-club-, christmas-, etc.)

### Performance Considerations
**Optimization Recommendations**:
- Implement Next.js Image component for automatic optimization
- Consider WebP format conversion for modern browser support
- Use appropriate sizing and compression for different use cases
- Implement lazy loading for below-the-fold images

### Accessibility
**Alt Text Requirements**:
- All images should have descriptive alt text in Japanese and/or English
- Consider bilingual descriptions for international families
- Ensure decorative images are marked appropriately

## Usage Patterns

### Component Integration
**Hero Sections**: Background images referenced via props
**Class Pages**: Age-specific images for each class level
**Activity Sections**: Program and event photos for visual storytelling
**Navigation**: SVG icons integrated into header and footer components

### Direct URL Access
All assets in `/public/` are accessible via direct URL:
- `/images/hero-image.jpg` - Homepage hero background
- `/images/SVG/home.svg` - Home icon
- `/documents/enrollment-form.pdf` (when added)

## Maintenance Notes

### Regular Updates Required
- Event photos should be updated seasonally
- Staff photos need periodic refresh
- Activity images should reflect current programs
- Announcement images require regular updates

### File Management
- Remove unused legacy images periodically
- Maintain organized directory structure
- Document new image additions in this file
- Consider implementing automated optimization pipeline

### Future Enhancements
- Implement responsive image serving
- Add support for multiple image formats
- Consider CDN integration for performance
- Implement automated image optimization pipeline