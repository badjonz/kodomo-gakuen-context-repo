'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const quickLinks = [
    { label: 'ホーム', href: '/', icon: 'fas fa-home' },
    { label: '保育方針', href: '/about', icon: 'fas fa-address-card' },
    { label: 'クラス', href: '/youji', icon: 'fas fa-graduation-cap' },
    { label: '課外教室', href: '/activities', icon: 'fas fa-soccer-ball-o' },
  ]

  const socialLinks = [
    { label: 'フェイスブック', href: '#', icon: 'fab fa-facebook' },
    { label: 'ユーチューブ', href: '#', icon: 'fab fa-youtube' },
    { label: 'ツイッター', href: 'https://twitter.com/kodomogakuen', icon: 'fab fa-twitter' },
    { label: 'インスタグラム', href: 'https://www.instagram.com/tokyokodomogakuen?igsh=MXR6cHhkMjRheTllcg==', icon: 'fab fa-instagram' },
  ]

  return (
    <footer id="main-footer" className="home-footer">
      <div className="container footer-container">
        
        {/* Quick Links */}
        <div className="column">
          <h3 style={{ fontSize: '2.2rem' }}>クイックリンク</h3>
          <hr className="footer-hr heading-hr text-color-1" />
          <ul className="footer__list">
            {quickLinks.map((link, index) => (
              <li key={index} className="footer__item">
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
        <div className="column">
          <h3 style={{ fontSize: '2.2rem' }}>お問い合わせ</h3>
          <hr className="footer-hr heading-hr text-color-1" />
          <ul className="footer__list">
            <li className="footer__item">
              <table>
                <tbody>
                  <tr>
                    <td><i className="fas fa-home"></i></td>
                    <td>
                      <span>こども学園、〒207-0031 Tokyo, Higashiyamato, Narahashi, 2 Chome-409</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">
              <i className="fas fa-phone-alt"></i>
              <span className="footer__text">
                <Link href="tel:+810425643549" className="footer__link">
                  +81 042 564 3549
                </Link>
              </span>
            </li>
            <li className="footer__item">
              <i className="fas fa-envelope"></i>
              <span className="footer__text">
                <Link href="mailto:info@kodomogakuen.com" className="footer__link">
                  info@kodomogakuen.com
                </Link>
              </span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="column">
          <h3 style={{ fontSize: '2.2rem' }}>ソーシャルメディア</h3>
          <hr className="footer-hr heading-hr text-color-1" />
          <ul className="footer__list">
            {socialLinks.map((link, index) => (
              <li key={index} className="footer__item">
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
        <div className="column">
          <h3 style={{ fontSize: '2.2rem' }}>位置</h3>
          <hr className="footer-hr heading-hr text-color-1" />
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
        <div className="copyright">
          <hr />
          <p>Kodomo Gakuen &copy; 2020, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}