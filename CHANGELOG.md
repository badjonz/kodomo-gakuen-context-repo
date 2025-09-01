# Changelog

All notable changes to the Kodomo Gakuen website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed

#### Navigation Active State Bug - 2025-08-27

**Issue**: Navigation active states (green highlighting) were not working correctly on pages with trailing slashes, specifically affecting the About page and other internal pages.

**Root Cause**: 
- Next.js App Router serves routes with trailing slashes (e.g., `/about/`)
- Header component route arrays contained paths without trailing slashes (e.g., `/about`)
- Route matching logic failed: `childRoutes.includes('/about/')` returned `false` when checking against `['/about', '/fees'...]`
- Both dropdown parent ("インフォメーション") and child links ("保育方針") lost active styling

**Technical Details**:
- **URL Pattern**: `http://localhost:3002/about/` (trailing slash added by Next.js)
- **Route Arrays**: 
  - `informationRoutes = ['/about', '/fees', '/privacy', '/menu', '/programs', '/enrolment']`
  - `classRoutes = ['/nyuuji', '/youji', '/star']`
- **Failed Comparisons**:
  - `pathname === '/about'` → `false` (when pathname is `/about/`)
  - `childRoutes.includes('/about/')` → `false`

**Solution Applied**:
1. **Added pathname normalization** in Header component after `usePathname()` call:
   ```javascript
   const normalizedPathname = pathname.endsWith('/') && pathname.length > 1 
     ? pathname.slice(0, -1) 
     : pathname;
   ```
   
2. **Updated 6 helper functions** to use `normalizedPathname` instead of `pathname`:
   - `navLinkClass()` - Desktop navigation links
   - `mobileNavLinkClass()` - Mobile navigation links  
   - `mobileNavSubLinkClass()` - Mobile submenu links
   - `isDropdownActive()` - Dropdown parent active detection
   - `dropdownChildClass()` - Dropdown child links
   - `mobileDropdownToggleClass()` - Mobile dropdown toggles

**Files Modified**:
- `src/components/layout/Header.tsx` (lines 13-15, and 6 helper functions)

**Impact**: 
- ✅ "インフォメーション" dropdown parent shows green active background when on any information page
- ✅ Individual dropdown items (e.g., "保育方針") show green active styling on their respective pages
- ✅ Consistent active state behavior across desktop and mobile navigation
- ✅ All existing functionality preserved for homepage and other routes

**Testing**: Verified on `/about/` page where both parent dropdown and child link now correctly display persistent active styling.

**Edge Case Handling**: Root path `/` is preserved as-is (no normalization applied to prevent `/` becoming empty string).
