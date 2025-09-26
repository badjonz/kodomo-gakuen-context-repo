'use client'

import React, { useRef, useState, useEffect } from 'react';
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useSectionContent } from '@/hooks/useContent';
import { useFontClass } from '@/hooks/useFontClass';

export default function Header() {
  // Language context integration
  const { language, toggleLanguage } = useLanguage();
  const { content: navigationContent } = useSectionContent('navigation');
  const { content: headerContent } = useSectionContent('header');
  const fontClass = useFontClass();
  
  // Get current route pathname for active link styling
  const pathname = usePathname();
  
  // Normalize pathname by removing trailing slashes (except root "/")
  const normalizedPathname = pathname.endsWith('/') && pathname.length > 1 
    ? pathname.slice(0, -1) 
    : pathname;
  
  // Reference to header element for click outside detection
  const headerRef = useRef(null);
  
  // Reference to hamburger button for click outside detection
  const hamburgerRef = useRef(null);
  
  // References to submenu toggle divs to prevent menu closing
  const informationToggleRef = useRef(null);
  const classesToggleRef = useRef(null);
  
  // Track if user has scrolled past threshold (100px)
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Key to force re-animation of nav when scroll state changes
  const [animationKey, setAnimationKey] = useState(0);
  
  // Control mobile menu open/close state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Control mobile submenu states
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  // Effect: Monitor scroll position and update header appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newIsScrolled = scrollPosition > 100; // Threshold for style change
      
      // Only update if scroll state actually changed
      if (newIsScrolled !== isScrolled) {
        setIsScrolled(newIsScrolled);
        setAnimationKey(prev => prev + 1); // Force nav re-animation
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  // Effect: Close mobile menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Only respond to left-clicks (button 0), ignore right-clicks and middle-clicks
      if (event.button !== 0) return;
      
      // Check if click is outside header and hamburger button and menu is open
      // Also exclude submenu toggle divs from closing the menu
      if (isMobileMenuOpen && 
          headerRef.current && 
          hamburgerRef.current &&
          informationToggleRef.current &&
          classesToggleRef.current &&
          !(headerRef.current as HTMLElement).contains(event.target as Node) &&
          !(hamburgerRef.current as HTMLElement).contains(event.target as Node) &&
          !(informationToggleRef.current as HTMLElement).contains(event.target as Node) &&
          !(classesToggleRef.current as HTMLElement).contains(event.target as Node)) {
        closeMobileMenuAndResetSubmenus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Effect: Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
      document.body.style.overflow = 'unset'; // Re-enable scroll
    }
    
    // Cleanup: ensure scroll is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Effect: Reset submenu state when navigating to a new page
  useEffect(() => {
    setActiveSubmenu(null); // Close all submenus when route changes
  }, [pathname]);

  // Helper: Generate className for navigation links with active state
  const navLinkClass = (path: string): string => 
    `nav-menu-link ${
      normalizedPathname === path ? 'nav-menu-link-active' : '' // Use specific active class
    }`;

  // Helper: Generate className for mobile navigation links with active state
  const mobileNavLinkClass = (path: string): string => 
    normalizedPathname === path ? 'mobile-nav-link-active' : 'mobile-nav-link';

  const mobileNavSubLinkClass = (path: string): string => 
    `mobile-nav-sub-link ${
      normalizedPathname === path ? 'mobile-nav-sub-link-active' : '' // Use specific active class for mobile sub-links
    }`;

  // Define route groups for dropdown menus
  const informationRoutes = ['/about', '/fees', '/privacy', '/menu', '/programs', '/enrolment'];
  const classRoutes = ['/nyuuji', '/youji', '/star'];

  // Helper: Check if a dropdown parent should be active
  const isDropdownActive = (childRoutes: string[]): boolean => 
    childRoutes.includes(normalizedPathname);

  // Helper: Generate className for dropdown parents
  const dropdownParentClass = (childRoutes: string[]): string => 
    `nav-menu-link ${isDropdownActive(childRoutes) ? 'nav-menu-link-active' : ''}`;

  // Helper: Generate className for dropdown child links
  const dropdownChildClass = (path: string): string => 
    `dropdown-link ${normalizedPathname === path ? 'dropdown-link-active' : ''}`;

  // Helper: Generate className for mobile dropdown toggle divs
  const mobileDropdownToggleClass = (childRoutes: string[]): string => 
    `mobile-nav-link text-center cursor-pointer ${isDropdownActive(childRoutes) ? 'bg-primary text-white' : ''}`;

  // Handle mobile submenu toggle
  const handleSubmenuToggle = (submenuName: string) => {
    setActiveSubmenu(activeSubmenu === submenuName ? null : submenuName);
  };

  // Helper function to close mobile menu and reset submenu state
  const closeMobileMenuAndResetSubmenus = () => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

   return <div className={`flex flex-col ${fontClass}`}>
    {/* Top info bar - changes color on scroll */}
    <motion.div 
      className="flex justify-between h-[30px] px-[60px] text-[11px] items-center fixed w-full z-50"
      initial={{
        backgroundColor: 'rgba(0,174,255,0.85)', // Initial blue background
        color: 'rgba(255,255,255,1)' // Initial white text
      }}
      animate={{
        // Switch colors based on scroll state
        backgroundColor: isScrolled ? 'rgba(255,255,255,0.85)' : 'rgba(0,174,255,0.85)',
        color: isScrolled ? 'rgba(0,174,255,1)' : 'rgba(255,255,255,1)'
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <a href=""> {headerContent?.email || 'info@kodomogakuen.com'}</a>
      <button 
        onClick={toggleLanguage}
        className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 transition-all duration-200 cursor-pointer border border-white/20 hover:border-white/40"
        type="button"
        aria-label={`Switch to ${language === 'ja' ? 'English' : 'Japanese'}`}
      >
        {headerContent?.languageToggle || 'English'}
      </button>
    </motion.div>

    {/* Mobile Hamburger Menu Button - Outside header for proper z-index stacking */}
     
    <motion.button
      
      ref={hamburgerRef}
      className={`group md:hidden flex flex-col gap-1 p-2 h-[3.8rem] w-[3.8rem] bg-primary rounded-full fixed left-[3rem] top-[6.5rem] z-[9999] ${isMobileMenuOpen ? 'bg-white' : ''}`}
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      aria-label="Toggle mobile menu"
      initial={{
        y: 0
      }}
      animate={{
        y: isScrolled ? [0,-30,0] : 0,
      }}
      transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
    >
      {/* Hamburger icon with animation to X when open */}
       <span className={`absolute top-[25%] left-[50%] transform -translate-x-[52%] -translate-y-[-50%] w-[2.2rem] h-[2px] transition-all duration-300 
        ${isMobileMenuOpen ? 'bg-primary rotate-45 translate-y-[7px]' : 'bg-white'} 
        before:content-[""] before:absolute before:top-[6px] before:left-0 before:w-full before:h-[2px] before:bg-white before:transition-all before:duration-300 
        ${isMobileMenuOpen ? 'before:opacity-0' : ''} 
        after:content-[""] after:absolute after:top-[12px] after:left-0 after:w-full after:h-[2px] after:transition-all after:duration-300 
        ${isMobileMenuOpen ? 'after:rotate-90 after:translate-y-[-12px] after:bg-primary ' : 'after:bg-white'}`}>
      </span>
    </motion.button> 
    

    

    {/* Main header container - changes background on scroll */}
    <motion.div 
      ref={headerRef}
      className="fixed top-[30px] w-full z-50 h-[75px]"
      initial={{
        backgroundColor: 'rgba(0,0,0,0.1)', // Transparent black initially
        y: 0
      }}
      animate={{
        // Pink background when scrolled, transparent when at top
        backgroundColor: isScrolled ? 'rgba(243, 85, 136, 0.85)' : 'rgba(0,0,0,0.1)',
        // Bounce animation when scroll state changes
        y: isScrolled ? [0,-30,0] : 0,
      }}
      transition={{ delay: 0.2, 
          duration: 0.4,ease: "easeOut" }}
    >
      
      {/* Navigation container with scale animation */}
      <motion.nav 
        key={animationKey} // Force re-animation when key changes
        className="flex justify-between items-center h-full px-[30px]"
        animate={{scale: isScrolled ? 1 : 1.01}} // Slight scale change
        transition={{
          delay: 0.2, 
          duration: 0.4,
          ease: "easeOut"
        }}
      >
        {/* Logo - Centered on mobile, left-aligned on desktop */}
        <div className="pl-6 md:pl-0 flex-1 md:flex-none md:text-left text-center">
          <Link href="/" className="text-[2rem] lg:text-[2.8rem] md:text-[2.6rem] text-white">
            <span className="text-[#32CD32]"></span>{headerContent?.siteName || 'こども学園 Kodomo Gakuen'}
          </Link>
        </div>

        {/* Desktop Navigation Menu - Hidden on mobile */}
        <motion.ul 
          className="hidden md:flex gap-[5px] text-white order-3 items-center"
          key={language} // Force re-render on language change
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Home Link */}
          <li className=''>
            <Link href="/" className={navLinkClass('/')}>
              <span>{navigationContent?.home || 'ホーム'}</span>
            </Link>
          </li>

          {/* Information Dropdown */}
          <li className="dropdown-container">
            <div 
              className={dropdownParentClass(informationRoutes)}
              data-nav="1"
              style={{ cursor: 'pointer' }}
            >
              {navigationContent?.information || 'インフォメーション'}
            </div>
            {/* Dropdown submenu */}
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link href="/about" className={dropdownChildClass('/about')}>
                  <span>{navigationContent?.informationSubmenu?.about || '保育方針'}</span>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link href="/fees" className={dropdownChildClass('/fees')}>
                  <span>{navigationContent?.informationSubmenu?.fees || '保育料'}</span>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link href="/privacy" className={dropdownChildClass('/privacy')}>
                  <span>{navigationContent?.informationSubmenu?.privacy || 'プライバシーポリシー'}</span>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link href="/menu" className={dropdownChildClass('/menu')}>
                  <span>{navigationContent?.informationSubmenu?.menu || '給食'}</span>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link href="/programs" className={dropdownChildClass('/programs')}>
                  <span>{navigationContent?.informationSubmenu?.programs || '活動内容'}</span>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link href="/enrolment" className={dropdownChildClass('/enrolment')}>
                  <span>{navigationContent?.informationSubmenu?.enrolment || '入園について'}</span>
                </Link>
              </li>
            </ul>
          </li>

          {/* Forms Link */}
          <li>
            <Link 
              href="/forms" 
              className={navLinkClass('/forms')}
              data-nav="2"
            >
              {navigationContent?.forms || '書類'}
            </Link>
          </li>

          {/* Classes Dropdown */}
          <li className="dropdown-container">
            <div 
              className={dropdownParentClass(classRoutes)}
              data-nav="3"
              style={{ cursor: 'pointer' }}
            >
              {navigationContent?.classes || 'クラス'}
            </div>
            {/* Dropdown submenu */}
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link href="/nyuuji" className={dropdownChildClass('/nyuuji')}>
                  <span>{navigationContent?.classesSubmenu?.nyuuji || '乳児'}</span>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link href="/youji" className={dropdownChildClass('/youji')}>
                  <span>{navigationContent?.classesSubmenu?.youji || '幼児'}</span>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link href="/star" className={dropdownChildClass('/star')}>
                  <span>{navigationContent?.classesSubmenu?.star || '国際クラス'}</span>
                </Link>
              </li>
            </ul>
          </li>

          {/* Activities Link */}
          <li>
            <Link 
              href="/activities" 
              className={navLinkClass('/activities')}
            >
              {navigationContent?.activities || '課外教室'}
            </Link>
          </li>
        </motion.ul>
      </motion.nav>
    </motion.div>

    {/* Mobile Menu Dark Overlay - Appears behind menu when open */}
    <motion.div
      className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-[90]"
      initial={{ opacity: 0 }}
      animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      // Only capture clicks when menu is open
      style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
      onClick={closeMobileMenuAndResetSubmenus} // Close menu and reset submenus on overlay click
    />

    {/* Mobile Menu Sliding Panel - Slides in from left */}
    <motion.div
      className="md:hidden fixed left-0 top-0 h-full w-[60%] bg-[#333] opacity-85 z-[90] shadow-xl"
      initial={{ x: '-100%' }} // Start off-screen to the left
      animate={{ x: isMobileMenuOpen ? 0 : '-100%' }} // Slide in/out
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >

      {/* Mobile Menu Navigation Items */}
      <nav className="pt-16 h-full flex flex-col items-center justify-center">
        <motion.ul 
          className=" text-white w-full"
          key={language} // Force re-render on language change
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
        >
          {/* Home */}
          <li className='text-center '>
            <Link 
              href="/" 
              className={mobileNavLinkClass('/') }
            >
              {navigationContent?.home || 'ホーム'}
            </Link>
          </li>
          
          {/* Information Section with Submenu */}
          <li>
            <div 
              ref={informationToggleRef}
              className={mobileDropdownToggleClass(informationRoutes)}
              onClick={() => handleSubmenuToggle('information')}
            >
              {navigationContent?.information || 'インフォメーション'}
            </div>
            <AnimatePresence>
              {activeSubmenu === 'information' && (
                <motion.ul 
                  className="w-full text-center bg-dark-1 overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <li className=''>
                    <Link 
                      href="/about" 
                      className={mobileNavSubLinkClass('/about')}
                    >
                      {navigationContent?.informationSubmenu?.about || '保育方針'}
                    </Link>
                  </li>
                  <li className=''>
                    <Link 
                      href="/fees" 
                      className={mobileNavSubLinkClass('/fees')}
                    >
                      {navigationContent?.informationSubmenu?.fees || '保育料'}
                    </Link>
                  </li>
                  <li className=''>
                    <Link 
                      href="/privacy" 
                      className={mobileNavSubLinkClass('/privacy')}
                    >
                      {navigationContent?.informationSubmenu?.privacy || 'プライバシーポリシー'}
                    </Link>
                  </li>
                  <li className=''>
                    <Link 
                      href="/menu" 
                      className={mobileNavSubLinkClass('/menu')}
                    >
                      {navigationContent?.informationSubmenu?.menu || '給食'}
                    </Link>
                  </li>
                  <li className=''>
                    <Link 
                      href="/programs" 
                      className={mobileNavSubLinkClass('/programs')}
                    >
                      {navigationContent?.informationSubmenu?.programs || '活動内容'}
                    </Link>
                  </li>
                  <li className=''>
                    <Link 
                      href="/enrolment" 
                      className={mobileNavSubLinkClass('/enrolment')}
                    >
                      {navigationContent?.informationSubmenu?.enrolment || '入園について'}
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          {/* Forms */}
          <li className='text-center'>
            <Link 
              href="/forms" 
              className={mobileNavLinkClass('/forms')}
            >
              {navigationContent?.forms || '書類'}
            </Link>
          </li>

          {/* Classes Section with Submenu */}
          <li>
            <div 
              ref={classesToggleRef}
              className={mobileDropdownToggleClass(classRoutes)}
              onClick={() => handleSubmenuToggle('classes')}
            >
              {navigationContent?.classes || 'クラス'}
            </div>
            <AnimatePresence>
              {activeSubmenu === 'classes' && (
                <motion.ul 
                  className="w-full text-center bg-dark-1 overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <li>
                    <Link 
                      href="/nyuuji" 
                      className={mobileNavSubLinkClass('/nyuuji')}
                    >
                      {navigationContent?.classesSubmenu?.nyuuji || '乳児'}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/youji" 
                      className={mobileNavSubLinkClass('/youji')}
                    >
                      {navigationContent?.classesSubmenu?.youji || '幼児'}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/star" 
                      className={mobileNavSubLinkClass('/star')}
                    >
                      {navigationContent?.classesSubmenu?.star || '国際クラス'}
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          {/* Activities */}
          <li className='text-center'>
            <Link 
              href="/activities" 
              className={mobileNavLinkClass('/activities')}
            >
              {navigationContent?.activities || '課外教室'}
            </Link>
          </li>

        </motion.ul>
      </nav>
    </motion.div>
  </div>;
};