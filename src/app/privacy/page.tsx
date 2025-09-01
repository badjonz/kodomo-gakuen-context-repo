'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[var(--color-light-2)]">
      {/* Hero Section */}
      <Hero
        title="プライバシーポリシー"
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
                プライバシー<span className="text-primary">ポリシー</span>
              </h2>
              <hr className="w-[8rem] h-[4px] bg-primary mx-auto border-none rounded" />
            </motion.header>

            <motion.div 
              className="max-w-5xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p 
                className="text-[1.6rem] md:text-[1.8rem] leading-relaxed text-dark-1 mb-8"
                
              >
                認定こども園こども学園（以下当園と言います）では、個人情報の正確と重要性を十分認識し、園児ならびに保護者・家庭に関わる個人情報の取り扱いについては、関係法令及び厚生労働省が定めたガイドラインを遵守するとともに、個人情報の適切な保護に万全を尽くし、保護者のみならず地域から信頼される認定こども園を目指します。
              </p>

              {/* Privacy Policy List */}
              <motion.ol 
                className="space-y-8 text-[1.6rem] md:text-[1.8rem] text-dark-1"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {/* 1. 個人情報の取得、及び、利用目的 */}
                <li 
                  className="mb-6"
                  
                >
                  <div className="font-semibold mb-4 text-[1.8rem] md:text-[2rem]">
                    個人情報の取得、及び、利用目的
                  </div>
                  <ol className="space-y-4 ml-8 list-decimal">
                    <li 
                      className="leading-relaxed"
                      
                    >
                      当園では、お問い合わせ頂きました回答を行うために必要な範囲で保護者様の個人情報をご提供いただいております。保護者様ご自身の判断により個人情報のご提供を拒否することができますが、この場合個人情報が必要不可欠なサービスがご利用できなくなります。
                    </li>
                    <li 
                      className="leading-relaxed"
                     
                    >
                      当園では、保育情報公開のために『ホームページ』を開設し公開しております。それには園児等の氏名・生年月日や住所等の個人情報は記載しませんが、保育中の写真を使用します。しかし、事前に保護者から写真使用拒否等の申し出があった場合には配慮いたします。
                    </li>
                    <li 
                      className="leading-relaxed"
                      
                    
                    >
                      個人情報は、その使用目的の範囲内で適切に利用し、外部に提供する場合は、本人の同意を得ることとします。
                    </li>
                  </ol>
                </li>

                {/* 2. 個人情報の管理、及び、第三者開示 */}
                <motion.li 
                  className="mb-6"
                  initial ={{y:30,opacity:0}}
                  whileInView={{y:0,opacity:1}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="font-semibold mb-4 text-[1.8rem] md:text-[2rem]">
                    個人情報の管理、及び、第三者開示
                  </div>
                  <ol className="space-y-4 ml-8 list-decimal">
                    <li 
                      className="leading-relaxed"
                      
                    >
                      保護者様から取得しました個人情報については、情報の管理責任者および各ウェブサイトの管理責任者が厳重に管理しており、漏洩、流用、改ざん等の防止に努めます。
                    </li>
                    <li 
                      className="leading-relaxed"
                      
                    >
                      当園では、保育情報公開のために『ホームページ』を開設し公開しております。それには園児等の氏名・生年月日や住所等の個人情報は記載しませんが、保育中の写真を使用します。しかし、事前に保護者から写真使用拒否等の申し出があった場合には配慮いたします。
                    </li>
                    <li 
                      className="leading-relaxed"
                      
                    >
                      当園が収集した個人情報を無関係な第三者に提供することはありません。但し、個人情報保護の体制を整備した協力企業との間で厳格な個人情報保護の契約を結び、利用者様の情報を処理するためにその情報を預託することがあります。また、警察、児童相談所、行政、税務署、弁護士会、消費者センター及びこれに準する機関より個人情報の照会があったときは、当園が適法・適正であると判断した場合に限り、これらの機関にこれらの情報を開示することをご了承ください。
                    </li>
                  </ol>
                </motion.li>

                {/* 3. 個人情報の開示・訂正・利用停止 */}
                <motion.li 
                  className="mb-6"
                  initial ={{y:30,opacity:0}}
                  whileInView={{y:0,opacity:1}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="font-semibold mb-4 text-[1.8rem] md:text-[2rem]">
                    個人情報の開示・訂正・利用停止
                  </div>
                  <ol className="space-y-4 ml-8 list-decimal">
                    <li 
                      className="leading-relaxed"
                      
                    >
                      当園は、本人から個人情報について開示、訂正、利用停止の請求があったときは、内容を確認し、速やかに対応します。希望される場合は、【コドモン】アプリ経由または当園までご連絡ください。ご連絡が保護者様ご本人からのものであることが確認でき次第対応させていただきます。
                    </li>
                  </ol>
                </motion.li>

                {/* 4. 個人情報に関するお問い合わせ */}
                <motion.li 
                  className="mb-6"
                  initial ={{y:30,opacity:0}}
                  whileInView={{y:0,opacity:1}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="font-semibold mb-4 text-[1.8rem] md:text-[2rem]">
                    個人情報に関するお問い合わせ
                  </div>
                  <ol className="space-y-4 ml-8 list-decimal">
                    <li 
                      className="leading-relaxed"
                      
                    >
                      当園は、保護者様の個人情報等の取り扱いにつき、十分なご理解をいただくことは大変重要であると考えております。本プライバシー・ポリシーについてのご意見、ご質問がございましたら【コドモン】アプリ経由または園までご連絡くださいますようお願いいたします。
                    </li>
                  </ol>
                </motion.li>
              </motion.ol>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}