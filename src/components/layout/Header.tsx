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
        // initial={{ scale: 1.01 }}
        animate={{scale: isScrolled ? 1 : 1.01}}
        transition={{
          delay: 0.2, 
          duration: 0.4,
          ease: "easeOut"
        }}
      >
        <div className="pl-6">
          <a href="" className="text-[28px] text-white"><span className="text-[#32CD32]"></span>こども学園 Kodomo Gakuen</a>
        </div>
        <ul className="flex gap-[5px] text-white">
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
        {/* Dropdown would go here */}
        <ul className="dropdown-menu">
        <li className="dropdown-item">
          <Link href="/about" className="dropdown-link">
            {/* <FaBook className="navbar-icon" /> */}
            <span>保育方針</span>
          </Link>
        </li>
        <li className="dropdown-item">
          <Link href="/fees" className="dropdown-link">
            {/* <FaYenSign className="navbar-icon" /> */}
            <span>保育料</span>
          </Link>
        </li>
        <li className="dropdown-item">
          <Link href="/privacy" className="dropdown-link">
            {/* <FaLock className="navbar-icon" /> */}
            <span>プライバシーポリシー</span>
          </Link>
        </li>
        <li className="dropdown-item">
          <Link href="/menu" className="dropdown-link">
            {/* <FaUtensils className="navbar-icon" /> */}
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
        {/* Dropdown menu - uncomment when ready */}
        {/*
        <ul className="absolute hidden group-hover:block bg-white text-gray-800 min-w-[200px] rounded-md shadow-lg mt-1 z-50">
          <li>
            <Link href="/classes/nyuuji" className="block px-4 py-2 hover:bg-gray-100">
              乳児
            </Link>
          </li>
          <li>
            <Link href="/classes/youji" className="block px-4 py-2 hover:bg-gray-100">
              幼児
            </Link>
          </li>
          <li>
            <Link href="/classes/star" className="block px-4 py-2 hover:bg-gray-100">
              国際クラス
            </Link>
          </li>
        </ul>
        */
        
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
        
        </ul>}
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
          

      </motion.nav>
    </motion.div>
  </div>;
};
