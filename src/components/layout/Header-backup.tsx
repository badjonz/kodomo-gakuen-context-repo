'use client'

import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between h-[30px] bg-blue-500 px-[60px] text-white text-[11px] items-center fixed w-full z-50">
        <a className="" href="">info@kodomogakuen.com</a>
        <a href="">English</a>
      </div>
      <div className="fixed top-[30px] w-full z-50 bg-black bg-opacity-10 h-[75px]">
        <nav className="flex justify-between items-center h-full px-[30px]">
          <div className="pl-6">
            <a href="" className="text-[28px] text-white">
              <span className="text-green-500"></span>こども学園 Kodomo Gakuen
            </a>
          </div>
          <ul className="flex gap-[5px] text-white">
            <li>
              <Link href="/" className="px-5 py-3 w-full rounded transition-colors duration-200 hover:bg-green-500">
                <span>ホーム</span>
              </Link>
            </li>
            <li className="dropdown-container">
              <Link 
                href="" 
                className="px-[20px] py-[13px] w-full rounded-[3px] hover:bg-green-500 transition-colors duration-200"
              >
                インフォメーション
              </Link>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <Link href="/about" className="dropdown-link">
                    <span>保育方針</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link 
                href="/forms" 
                className="px-5 py-3 w-full rounded transition-colors duration-200 hover:bg-green-500"
              >
                書類
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}