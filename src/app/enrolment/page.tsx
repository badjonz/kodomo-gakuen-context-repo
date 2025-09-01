'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';

// Download icon component
const DownloadIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

export default function Enrolment() {
  return (
    <div className="min-h-screen bg-[var(--color-light-2)]">
      {/* Hero Section */}
      <Hero
        title="入園について"
        backgroundImage="/images/page-banner.jpeg"
        isHomepage={false}
        showButton={false}
      />

      {/* Main Content */}
      <main className="py-[8rem]">
        <section>
          <div className="container">
            <motion.header 
              className="text-center mb-[6rem]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[3.6rem] md:text-[4.8rem] font-bold mb-4">
                入園に<span className="text-primary">ついて</span>
              </h2>
              <hr className="w-[8rem] h-[4px] bg-primary mx-auto border-none rounded" />
            </motion.header>

            <div className="max-w-[78rem] mx-auto space-y-[6rem]">
              {/* 令和7年度 利用定員 */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[2.8rem] md:text-[3.2rem] font-bold mb-6 text-center">
                  令和7年度 利用定員
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                    <thead className="bg-gradient-to-r from-primary to-secondary text-white">
                      <tr>
                        <th className="px-4 py-4 text-left font-semibold text-[1.6rem]"></th>
                        <th className="px-4 py-4 text-center font-semibold text-[1.6rem]">0歳児</th>
                        <th className="px-4 py-4 text-center font-semibold text-[1.6rem]">1歳児</th>
                        <th className="px-4 py-4 text-center font-semibold text-[1.6rem]">2歳児</th>
                        <th className="px-4 py-4 text-center font-semibold text-[1.6rem]">3歳児</th>
                        <th className="px-4 py-4 text-center font-semibold text-[1.6rem]">4歳児</th>
                        <th className="px-4 py-4 text-center font-semibold text-[1.6rem]">5歳児</th>
                      </tr>
                    </thead>
                    <tbody className="text-[1.6rem]">
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-4 font-semibold text-dark-1">1号認定</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                        <td className="px-4 py-4 text-center font-semibold">13名</td>
                        <td className="px-4 py-4 text-center font-semibold">14名</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-4 font-semibold text-dark-1">2号認定</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                        <td className="px-4 py-4 text-center font-semibold">29名</td>
                        <td className="px-4 py-4 text-center font-semibold">30名</td>
                        <td className="px-4 py-4 text-center font-semibold">30名</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-4 font-semibold text-dark-1">3号認定</td>
                        <td className="px-4 py-4 text-center font-semibold">5名</td>
                        <td className="px-4 py-4 text-center font-semibold">14名</td>
                        <td className="px-4 py-4 text-center font-semibold">22名</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* 令和7年度 空き状況 */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[2.8rem] md:text-[3.2rem] font-bold mb-6 text-center">
                  令和7年度 空き状況
                </h3>
                
                <p className="text-center text-[1.6rem] mb-6 text-dark-2">
                  （◎…十分あり 〇…若干あり △…ほぼ満員 ✕…満員）
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                    <thead className="bg-gradient-to-r from-quaternary to-primary text-white">
                      <tr>
                        <th className="px-4 py-4 text-left font-semibold text-[1.6rem]"></th>
                        <th className="px-4 py-4 text-center font-semibold text-[1.6rem]">0歳児</th>
                        <th className="px-4 py-4 text-center font-semibold text-[1.6rem]">1歳児</th>
                        <th className="px-4 py-4 text-center font-semibold text-[1.6rem]">2歳児</th>
                        <th className="px-4 py-4 text-center font-semibold text-[1.6rem]">3歳児</th>
                        <th className="px-4 py-4 text-center font-semibold text-[1.6rem]">4歳児</th>
                        <th className="px-4 py-4 text-center font-semibold text-[1.6rem]">5歳児</th>
                      </tr>
                    </thead>
                    <tbody className="text-[2rem]">
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-4 font-semibold text-dark-1">1号認定</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                        <td className="px-4 py-4 text-center font-bold text-yellow-600">△</td>
                        <td className="px-4 py-4 text-center font-bold text-yellow-600">△</td>
                        <td className="px-4 py-4 text-center font-bold text-red-600">×</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-4 font-semibold text-dark-1">2号認定</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                        <td className="px-4 py-4 text-center font-bold text-red-600">×</td>
                        <td className="px-4 py-4 text-center font-bold text-blue-600">◎</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-4 font-semibold text-dark-1">3号認定</td>
                        <td className="px-4 py-4 text-center font-bold text-red-600">×</td>
                        <td className="px-4 py-4 text-center font-bold text-yellow-600">△</td>
                        <td className="px-4 py-4 text-center font-bold text-blue-600">◎</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-center text-[1.4rem] text-gray-600 mt-4">
                  ※令和7年８月１日更新
                </p>
              </motion.div>

              {/* 令和8年度願書受け付け */}
              <motion.div
                className="bg-white rounded-xl shadow-lg p-8 text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[2.8rem] md:text-[3.2rem] font-bold mb-6 text-dark-1">
                  令和8年度願書受け付け 令和7年9月1日 (月) 開始
                </h2>
                
                <div className="space-y-4 mb-6">
                  <p className="text-[1.8rem] text-dark-1">
                    入園説明会 (予約不要) こども学園ホールにて １０：００開始
                  </p>
                  <p className="text-[1.8rem] font-semibold text-primary">
                    9月 6日 (土) １０月１８日 (土)
                  </p>
                </div>
                
                <motion.a
                  href="/documents/informationposter.pdf"
                  download="令和８年度 入園説明会"
                  className="btn inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <DownloadIcon />
                  チラシをダウンロード
                </motion.a>
              </motion.div>

              {/* 令和8年度 4月受け入れ人数 */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[2.8rem] md:text-[3.2rem] font-bold mb-6 text-center">
                  令和8年度 4月受け入れ人数
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                    <thead className="bg-gradient-to-r from-secondary to-quaternary text-white">
                      <tr>
                        <th className="px-4 py-4 text-left font-semibold text-[1.6rem]"></th>
                        <th className="px-4 py-4 text-center font-semibold text-[1.6rem]">0歳児</th>
                        <th className="px-4 py-4 text-center font-semibold text-[1.6rem]">1歳児</th>
                        <th className="px-4 py-4 text-center font-semibold text-[1.6rem]">2歳児</th>
                        <th className="px-4 py-4 text-center font-semibold text-[1.6rem]">3歳児</th>
                        <th className="px-4 py-4 text-center font-semibold text-[1.6rem]">4歳児</th>
                        <th className="px-4 py-4 text-center font-semibold text-[1.6rem]">5歳児</th>
                      </tr>
                    </thead>
                    <tbody className="text-[1.6rem]">
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-4 font-semibold text-dark-1">1号認定</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                        <td className="px-4 py-4 text-center font-semibold">13名</td>
                        <td className="px-4 py-4 text-center font-semibold">8名</td>
                        <td className="px-4 py-4 text-center font-semibold">6名</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-4 font-semibold text-dark-1">2号認定</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                        <td className="px-4 py-4 text-center font-semibold">16名</td>
                        <td className="px-4 py-4 text-center font-semibold">8名</td>
                        <td className="px-4 py-4 text-center font-semibold">12名</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-4 font-semibold text-dark-1">3号認定</td>
                        <td className="px-4 py-4 text-center font-semibold">3名</td>
                        <td className="px-4 py-4 text-center font-semibold">9名</td>
                        <td className="px-4 py-4 text-center font-semibold">10名</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-center text-[1.4rem] text-gray-600 mt-4">
                  ※令和7年８月１日更新
                </p>
              </motion.div>

              {/* 令和8年度 国際クラス */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[2.8rem] md:text-[3.2rem] font-bold mb-6 text-center">
                  令和8年度 国際クラス 4月受け入れ人数
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                    <thead className="bg-gradient-to-r from-primary to-quaternary text-white">
                      <tr>
                        <th className="px-4 py-4 text-center font-semibold text-[1.6rem]">0歳児 1歳児 2歳児</th>
                        <th className="px-4 py-4 text-center font-semibold text-[1.6rem]">3歳児</th>
                        <th className="px-4 py-4 text-center font-semibold text-[1.6rem]">4歳児</th>
                        <th className="px-4 py-4 text-center font-semibold text-[1.6rem]">5歳児</th>
                      </tr>
                    </thead>
                    <tbody className="text-[1.6rem]">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-4 text-center font-semibold text-dark-1">
                          号認定限定<br />
                          ありません<br />
                          3歳児以上
                        </td>
                        <td className="px-4 py-4 text-center font-semibold">8名</td>
                        <td className="px-4 py-4 text-center font-semibold">1名</td>
                        <td className="px-4 py-4 text-center font-semibold">3名</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-center text-[1.4rem] text-gray-600 mt-4">
                  ※令和7年８月１日更新
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}