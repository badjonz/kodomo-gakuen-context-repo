'use client'

import React, { useRef, useState, useEffect } from 'react';
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newIsScrolled = scrollPosition > 100;
      
      if (newIsScrolled !== isScrolled) {
        setIsScrolled(newIsScrolled);
        setAnimationKey(prev => prev + 1); // Force re-animation
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && headerRef.current && !(headerRef.current as HTMLElement).contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Type-safe active link styling
  const navLinkClass = (path: string): string => 
    `nav-menu-link ${
      pathname === path ? 'bg-[#32cd32]' : ''
    }`;

   return <div className="flex flex-col">
    <motion.div 
      className="flex justify-between h-[30px] px-[60px] text-[11px] items-center fixed w-full z-50"
      initial={{
        backgroundColor: 'rgba(0,174,255,0.85)',
        color: 'rgba(255,255,255,1)'
      }}
      animate={{
        backgroundColor: isScrolled ? 'rgba(255,255,255,0.85)' : 'rgba(0,174,255,0.85)',
        color: isScrolled ? 'rgba(0,174,255,1)' : 'rgba(255,255,255,1)'
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <a href=""> info@kodomogakuen.com</a>
      <a href="">English</a>
    </motion.div>
    <motion.div 
      ref={headerRef}
      className="fixed top-[30px] w-full z-50 h-[75px]"
      initial={{
        backgroundColor: 'rgba(0,0,0,0.1)',
        y: 0
      }}
      animate={{
        backgroundColor: isScrolled ? 'rgba(243, 85, 136, 0.85)' : 'rgba(0,0,0,0.1)',
        y: isScrolled ? [0,-30,0] : 0,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      
      <motion.nav 
        key={animationKey}
        className="flex justify-between items-center h-full px-[30px]"
        animate={{scale: isScrolled ? 1 : 1.01}}
        transition={{
          delay: 0.2, 
          duration: 0.4,
          ease: "easeOut"
        }}
      >
        {/* Mobile Hamburger Menu - Left side on mobile */}
        <button
          className="md:hidden flex flex-col gap-1 p-2 order-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <motion.span
            className="w-6 h-0.5 bg-white block"
            animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white block"
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white block"
            animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>

        {/* Logo - Centered on mobile, left on desktop */}
        <div className="pl-6 md:order-1 order-2 md:flex-none flex-1 md:text-left text-center">
          <a href="" className="text-[28px] md:text-[28px] text-[20px] text-white">
            <span className="text-[#32CD32]"></span>こども学園 Kodomo Gakuen
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-[5px] text-white order-3">
          {/* Home */}
          <li>
            <Link href="/" className={navLinkClass('/')}>
              <span>ホーム</span>
            </Link>
          </li>

          {/* Information */}
          <li className="dropdown-container">
            <Link 
              href="" 
              className="nav-menu-link"
              data-nav="1"
            >
              インフォメーション
            </Link>
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

          {/* Forms */}
          <li>
            <Link 
              href="/forms" 
              className={navLinkClass('/forms')}
              data-nav="2"
            >
              書類
            </Link>
          </li>

          {/* Classes */}
          <li className="dropdown-container">
            <Link 
              href="" 
              className="nav-menu-link"
              data-nav="3"
            >
              クラス
            </Link>
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

          {/* Activities */}
          <li>
            <Link 
              href="/activities" 
              className={navLinkClass('/activities')}
            >
              課外教室
            </Link>
          </li>
        </ul>

        {/* Empty div to balance layout on mobile */}
        <div className="md:hidden order-3 w-10"></div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <motion.div
        className="md:hidden fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-green-500 to-green-600 z-50 shadow-xl"
        initial={{ x: '-100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          ×
        </button>

        {/* Mobile Menu Items */}
        <nav className="pt-16 px-6">
          <ul className="space-y-2 text-white">
            <li>
              <Link 
                href="/" 
                className="block py-3 px-4 text-lg hover:bg-white hover:bg-opacity-20 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ホーム
              </Link>
            </li>
            
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

            <li>
              <Link 
                href="/forms" 
                className="block py-3 px-4 text-lg hover:bg-white hover:bg-opacity-20 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                書類
              </Link>
            </li>

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
    </motion.div>
  </div>;
};
