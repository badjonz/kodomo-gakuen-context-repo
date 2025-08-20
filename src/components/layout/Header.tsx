'use client'

import React, { useRef, useState, useEffect } from 'react';
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function Header() {
  // Get current route pathname for active link styling
  const pathname = usePathname();
  
  // Reference to header element for click outside detection
  const headerRef = useRef(null);
  
  // Reference to hamburger button for click outside detection
  const hamburgerRef = useRef(null);
  
  // Track if user has scrolled past threshold (100px)
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Key to force re-animation of nav when scroll state changes
  const [animationKey, setAnimationKey] = useState(0);
  
  // Control mobile menu open/close state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      if (isMobileMenuOpen && 
          headerRef.current && 
          hamburgerRef.current &&
          !(headerRef.current as HTMLElement).contains(event.target as Node) &&
          !(hamburgerRef.current as HTMLElement).contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
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

  // Helper: Generate className for navigation links with active state
  const navLinkClass = (path: string): string => 
    `nav-menu-link ${
      pathname === path ? 'bg-[#32cd32]' : '' // Green background for active link
    }`;

   return <div className="flex flex-col">
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
      <a href=""> info@kodomogakuen.com</a>
      <a href="">English</a>
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
       <span className={`absolute top-[25%] left-[50%] transform -translate-x-[52%] -translate-y-[-50%] w-[2.2rem] h-[2px] ${isMobileMenuOpen ? 'bg-primary' : 'bg-white'} transition-all duration-300 
        ${isMobileMenuOpen ? 'bg-primary rotate-45 translate-y-[7px]' : 'bg-white'} 
        before:content-[""] before:absolute before:top-[6px] before:left-0 before:w-full before:h-[2px] before:bg-white before:transition-all before:duration-300 
        ${isMobileMenuOpen ? 'before:opacity-0' : ''} 
        after:content-[""] after:absolute after:top-[12px] after:left-0 after:w-full after:h-[2px] after:bg-white after:transition-all after:duration-300 
        ${isMobileMenuOpen ? 'after:rotate-90 after:translate-y-[-12px] after:bg-primary ' : 'bg-white'}`}>
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
          <a href="" className="text-[20px] md:text-[28px] text-white">
            <span className="text-[#32CD32]"></span>こども学園 Kodomo Gakuen
          </a>
        </div>

        {/* Desktop Navigation Menu - Hidden on mobile */}
        <ul className="hidden md:flex gap-[5px] text-white order-3">
          {/* Home Link */}
          <li>
            <Link href="/" className={navLinkClass('/')}>
              <span>ホーム</span>
            </Link>
          </li>

          {/* Information Dropdown */}
          <li className="dropdown-container">
            <Link 
              href="" 
              className="nav-menu-link"
              data-nav="1"
            >
              インフォメーション
            </Link>
            {/* Dropdown submenu */}
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link href="/about" className="dropdown-link">
                  <span>保育方針</span>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link href="/fees" className="dropdown-link">
                  <span>保育料</span>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link href="/privacy" className="dropdown-link">
                  <span>プライバシーポリシー</span>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link href="/menu" className="dropdown-link">
                  <span>給食</span>
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
              書類
            </Link>
          </li>

          {/* Classes Dropdown */}
          <li className="dropdown-container">
            <Link 
              href="" 
              className="nav-menu-link"
              data-nav="3"
            >
              クラス
            </Link>
            {/* Dropdown submenu */}
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link href="/nyuuji" className="dropdown-link">
                  <span>乳児</span>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link href="/youji" className="dropdown-link">
                  <span>幼児</span>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link href="/star" className="dropdown-link">
                  <span>国際クラス</span>
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
              課外教室
            </Link>
          </li>
        </ul>
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
      onClick={() => setIsMobileMenuOpen(false)} // Close menu on overlay click
    />

    {/* Mobile Menu Sliding Panel - Slides in from left */}
    <motion.div
      className="md:hidden fixed left-0 top-0 h-full w-[60%] bg-[#333] opacity-85 z-[90] shadow-xl"
      initial={{ x: '-100%' }} // Start off-screen to the left
      animate={{ x: isMobileMenuOpen ? 0 : '-100%' }} // Slide in/out
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >

      {/* Mobile Menu Navigation Items */}
      <nav className="pt-16 px-6 h-full flex flex-col items-center justify-center">
        <ul className="space-y-2 text-white">
          {/* Home */}
          <li>
            <Link 
              href="/" 
              className="block py-3 px-4 text-lg hover:bg-white hover:bg-opacity-20 rounded"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
            >
              ホーム
            </Link>
          </li>
          
          {/* Information Section with Submenu */}
          <li>
            <div className="py-3 px-4 text-lg font-semibold">インフォメーション</div>
            <ul className="ml-4 space-y-1">
              <li>
                <Link 
                  href="/about" 
                  className="block py-2 px-4 hover:bg-white hover:bg-opacity-20 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  保育方針
                </Link>
              </li>
              <li>
                <Link 
                  href="/fees" 
                  className="block py-2 px-4 hover:bg-white hover:bg-opacity-20 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  保育料
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy" 
                  className="block py-2 px-4 hover:bg-white hover:bg-opacity-20 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link 
                  href="/menu" 
                  className="block py-2 px-4 hover:bg-white hover:bg-opacity-20 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  給食
                </Link>
              </li>
            </ul>
          </li>

          {/* Forms */}
          <li>
            <Link 
              href="/forms" 
              className="block py-3 px-4 text-lg hover:bg-white hover:bg-opacity-20 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              書類
            </Link>
          </li>

          {/* Classes Section with Submenu */}
          <li>
            <div className="py-3 px-4 text-lg font-semibold">クラス</div>
            <ul className="ml-4 space-y-1">
              <li>
                <Link 
                  href="/nyuuji" 
                  className="block py-2 px-4 hover:bg-white hover:bg-opacity-20 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  乳児
                </Link>
              </li>
              <li>
                <Link 
                  href="/youji" 
                  className="block py-2 px-4 hover:bg-white hover:bg-opacity-20 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  幼児
                </Link>
              </li>
              <li>
                <Link 
                  href="/star" 
                  className="block py-2 px-4 hover:bg-white hover:bg-opacity-20 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  国際クラス
                </Link>
              </li>
            </ul>
          </li>

          {/* Activities */}
          <li>
            <Link 
              href="/activities" 
              className="block py-3 px-4 text-lg hover:bg-white hover:bg-opacity-20 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              課外教室
            </Link>
          </li>
        </ul>
      </nav>
    </motion.div>
  </div>;
};