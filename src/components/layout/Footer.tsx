'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { useSectionContent } from '@/hooks/useContent'
import { useFontClass } from '@/hooks/useFontClass'
import { cn } from '@/utils/cn'

export default function Footer() {
  const { language } = useLanguage()
  const { content: footerContent, loading } = useSectionContent('footer')
  const fontClass = useFontClass()

  // Get quick links from content or fallback
  const getQuickLinks = () => {
    if (!footerContent?.quickLinks?.links) {
      // Fallback quick links
      return language === 'ja' 
        ? [
            { label: 'ホーム', href: '/', icon: 'fas fa-home' },
            { label: '保育方針', href: '/about', icon: 'fas fa-address-card' },
            { label: 'クラス', href: '/youji', icon: 'fas fa-graduation-cap' },
            { label: '課外教室', href: '/activities', icon: 'fas fa-soccer-ball-o' },
          ]
        : [
            { label: 'Home', href: '/', icon: 'fas fa-home' },
            { label: 'About Us', href: '/about', icon: 'fas fa-address-card' },
            { label: 'Classes', href: '/youji', icon: 'fas fa-graduation-cap' },
            { label: 'Activities', href: '/activities', icon: 'fas fa-soccer-ball-o' },
          ]
    }

    // Use content from footerContent
    const links = footerContent.quickLinks.links
    return [
      { label: links.home, href: '/', icon: 'fas fa-home' },
      { label: links.about, href: '/about', icon: 'fas fa-address-card' },
      { label: links.programs, href: '/youji', icon: 'fas fa-graduation-cap' },
      { label: links.contact, href: '/activities', icon: 'fas fa-soccer-ball-o' },
    ]
  }

  const socialLinks = [
    { label: 'Facebook', href: '#', icon: 'fab fa-facebook' },
    { label: 'Youtube', href: '#', icon: 'fab fa-youtube' },
    { label: 'Twitter', href: 'https://twitter.com/kodomogakuen', icon: 'fab fa-twitter' },
    { label: 'Instagram', href: 'https://www.instagram.com/tokyokodomogakuen?igsh=MXR6cHhkMjRheTllcg==', icon: 'fab fa-instagram' },
  ]

  const quickLinks = getQuickLinks()

  return (
    <footer id="main-footer" className={cn("home-footer bg-quaternary text-white pt-[2rem]", fontClass)}>
      <div className="container footer-container grid grid-cols-1 md:grid-cols-4 gap-[1.5rem]">
        
        {/* Quick Links */}
        <div className="column" key={`${language}-quicklinks`}>
          <h3 className='footer-heading'>
            {footerContent?.quickLinks?.title || (language === 'ja' ? 'クイックリンク' : 'Quick Links')}
          </h3>
          <hr className="footer-hr" />
          <ul className="footer__list">
            {quickLinks.map((link, index) => (
              <li key={`${index}-${language}`} className="footer__item">
                <Link
                  href={link.href}
                  className="footer__link"
                >
                  <i className={`${link.icon} mr-2`}></i>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="column" key={`${language}-contact`}>
          <h3 className='footer-heading'>
            {footerContent?.contact?.title || (language === 'ja' ? 'お問い合わせ' : 'Contact Information')}
          </h3>
          <hr className="footer-hr" />
          <ul className="footer__list">
            <li className="footer__item">
              <table className=''>
                <tbody>
                  <tr>
                    <td className='border-r-[6px] border-transparent align-top'><i className="fas fa-home text-[1.6rem] md:text-[1.4rem] mt-[4px]"></i></td>
                    <td>
                      <span className='text-[1.6rem] md:text-[1.4rem]'>
                        {footerContent?.contact?.address || (language === 'ja'
                          ? 'こども学園、〒207-0031 東京都東大和市奈良橋２－４０９'
                          : '2-409 Narahashi, Higashiyamato, Tokyo 207-0031, Japan'
                        )}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item flex gap-[6px] items-center">
              <i className="fas fa-phone-alt text-[1.6rem] md:text-[1.4rem]"></i>
              <span className="footer__text">
                <Link href={`tel:${footerContent?.contact?.phone || '042-590-3715'}`} className="footer__link">
                  {footerContent?.contact?.phone || '042-590-3715'}
                </Link>
              </span>
            </li>
            <li className="footer__item flex gap-[1rem] items-center">
              <span className="text-[1.6rem] md:text-[1.4rem]">
                <Link href={`mailto:${footerContent?.contact?.email || 'info@kodomogakuen.com'}`} className="footer__link">
                <i className="fas fa-envelope mr-[6px]"></i>
                  {footerContent?.contact?.email || 'info@kodomogakuen.com'}
                </Link>
              </span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="column" key={`${language}-social`}>
          <h3 className='footer-heading'>
            {footerContent?.social?.title || (language === 'ja' ? 'ソーシャルメディア' : 'Social Media')}
          </h3>
          <hr className="footer-hr" />
          <ul className="footer__list">
            {socialLinks.map((link, index) => (
              <li key={`${index}-${language}`} className="footer__item">
                <Link
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="footer__link"
                >
                  <i className={`${link.icon} mr-2`}></i>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Location */}
        <div className="column" key={`${language}-location`}>
          <h3 className='footer-heading'>
            {footerContent?.location?.title || (language === 'ja' ? '所在地' : 'Location')}
          </h3>
          <hr className="footer-hr" />
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.8396466980057!2d139.42459591521808!3d35.75474588017728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e0be04eef839%3A0x676af2805051e982!2s2-ch%C5%8Dme-409%20Narahashi%2C%20Higashiyamato%2C%20T%C5%8Dky%C5%8D-to%20207-0031%2C%20Japan!5e0!3m2!1sen!2sus!4v1589112755684!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kodomo Gakuen Location"
            ></iframe>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright col-span-1 md:col-start-1 md:col-span-4 text-center">
          <hr className='h-[1px] border-[0px] bg-white'/>
          <p className='text-[1.6rem] mt-[1rem] mb-[1rem]'>Kodomo Gakuen &copy; 2020, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}