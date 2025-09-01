'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';

// Star bullet icon component
const StarBullet = () => (
  <svg className="w-6 h-6 text-yellow-500 inline-block" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

export default function Fees() {
  return (
    <div className="min-h-screen bg-[var(--color-light-2)]">
      {/* Hero Section */}
      <Hero
        title="保育料"
        backgroundImage="/images/page-banner.jpeg"
        isHomepage={false}
        showButton={false}
      />

      {/* Main Content */}
      <article className="py-[8rem]">
        {/* Section 1: 保育料の納付について */}
        <section className="mb-[8rem]">
          <div className="container">
            <motion.header 
              className="text-center mb-[6rem]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[3.6rem] md:text-[4.8rem] font-bold mb-4">
                保育料<span className="text-primary">の納付に</span>ついて
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
              <h3 className="text-[2rem] md:text-[2.4rem] font-semibold mb-6 text-dark-1">
                保育料につきましては、毎月「ゆうちょ銀行（郵便局）」の保護者様口座より自動引き落としにさせていただきます。
              </h3>

              {/* Payment Details Table */}
              <div className="space-y-4 mb-8">
                <motion.div 
                  className="flex gap-4"
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 pt-1">
                    <StarBullet />
                  </div>
                  <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1">
                    引き落とし日は、毎月１０日に設定させていただきましたので、その日までに必ずご入金下さいますようお願い致します。１０日に引き落とせない場合は、その月の２０日に再度引き落としとなります。
                  </p>
                </motion.div>

                <motion.div 
                  className="flex gap-4"
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 pt-1">
                    <StarBullet />
                  </div>
                  <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1">
                    ご兄弟で在園されます方は、お二人分の合算額をご入金下さいますようお願いします。
                  </p>
                </motion.div>

                <motion.div 
                  className="flex gap-4"
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 pt-1">
                    <StarBullet />
                  </div>
                  <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1">
                    保育料は、毎月１０日までに必ずお納め下さいますようお願いします。
                  </p>
                </motion.div>

                <motion.div 
                  className="flex gap-4"
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 pt-1">
                    <StarBullet />
                  </div>
                  <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1">
                    雑費袋は、バス通園の方はバスに乗車しております当番の先生にお渡し下さい。
                  </p>
                </motion.div>
              </div>

              <motion.p 
                className="text-[1.6rem] md:text-[1.8rem] font-semibold text-dark-1 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <strong>バス利用されない方は、お手数ですが、事務所へお持ち下さい。</strong>
              </motion.p>

              {/* 全ての保護者の皆様へ */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[2.4rem] md:text-[2.8rem] font-bold mb-6 text-dark-1">
                  全ての保護者の皆様へ
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <StarBullet />
                    </div>
                    <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1">
                      保育料は、出欠に関わらず在籍中は納入していただく事になっておりますので、何卒ご了承下さいますようお願い申し上げます。（保育料は毎月園を運営していく関係上、給食費・バス代金の方も欠席の日数に関係なく所定の金額を納めていただきます。）。
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <StarBullet />
                    </div>
                    <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1">
                      午前保育時も、全園児におやつをお出し致します。また、乳児のたまご組・ひよこ組は一年を通して１０時００分のおやつがでます。
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <StarBullet />
                    </div>
                    <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1">
                      今年度は、４月１４日（木）より給食が始まります。その間にもおやつ・果物・飲み物など園に慣れてくださるまでお出し致しますので誠に申し訳ございませんが、給食費よりまかないますので、４月分も給食費を含めた保育料をお納め下さいますようお願い致します。
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <StarBullet />
                    </div>
                    <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1">
                      保育料の金額は「保育料決定通知」を配布しますので、該当される金額を保育料納付期日までにご入金または、お納め下さいますようお願い申し上げます。
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 保育料多子軽減制度について */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h3 className="text-[2.4rem] md:text-[2.8rem] font-bold mb-4 text-dark-1">
                  保育料多子軽減制度について
                </h3>
                <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1">
                  令和元年１０月より在園児にきょうだいがいる世帯については生計を一緒にする兄姉から数え第２子の保育料は半額、第３子以降の保育料は無料になります。（延長保育はのぞきます）幼児保育・保育の無償化の対象とならない０～２歳児クラスは、ご家庭の状況にに応じて保育料が軽減されます。
                </p>
              </motion.div>

              {/* 認定変更について */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[2.4rem] md:text-[2.8rem] font-bold mb-4 text-dark-1">
                  認定変更について
                </h3>
                <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1">
                  年度途中でお引越しや認定変更された場合は園まで必ずご連絡下さい。
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: 保育料の内容について */}
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
                保育料<span className="text-secondary">の内容に</span>ついて
              </h2>
              <hr className="w-[8rem] h-[4px] bg-secondary mx-auto border-none rounded" />
            </motion.header>

            <motion.div 
              className="max-w-5xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1 mb-8">
                「子ども・子育て支援新制度」がスタートし、当園もお陰様で認定こども園を取得したため、保護者様の保育料は各ご家庭の所得に応じ、市町村が定める事となりました。（年少以上は無償化）その市役所が定めた保育料に毎月上乗せ徴収を加算させていただきます。
              </p>

              {/* 上乗せ徴収項目 */}
              <h3 className="text-[2.4rem] md:text-[2.8rem] font-bold mb-6 text-dark-1">
                上乗せ徴収項目
              </h3>

              <motion.div 
                className="space-y-6 mb-8"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div>
                  <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1 mb-2">
                    <strong>乳児・年少児加算・・・</strong>
                    0歳児は5000円　１歳児は4000円　２歳児は3000円　３歳児は2000円です。クラス又は学年ごとに保育助手が手伝いに入るための人件費になりますのでご理解下さい。
                  </p>
                </div>

                {/* Fee Details Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 pr-6 text-[1.6rem] md:text-[1.8rem] font-bold align-top whitespace-nowrap">
                          施設維持費・・・
                        </th>
                        <td className="py-4 text-[1.6rem] md:text-[1.8rem] text-dark-1">
                          施設の修繕費及びメンテナンス・園庭補修費にあてる費用になります。全園児から徴収させていただきます。月額２０００円です。
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 pr-6 text-[1.6rem] md:text-[1.8rem] font-bold align-top whitespace-nowrap">
                          給食費・・・
                        </th>
                        <td className="py-4 text-[1.6rem] md:text-[1.8rem] text-dark-1">
                          １号認定の方は、月額６０００円を徴収させていただきます。
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 pr-6">&nbsp;</td>
                        <td className="py-4 text-[1.6rem] md:text-[1.8rem] text-dark-1">
                          ２号認定の方は月額７５００円を徴収させて頂きます。
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 pr-6">&nbsp;</td>
                        <td className="py-4 text-[1.6rem] md:text-[1.8rem] text-dark-1">
                          ３号認定該当者は市役所で示した保育料に含まれているため徴収はありません。
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-4">
                  <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1">
                    <strong>※減額徴収について・・・</strong>
                    １号認定の方は、８月分のみ給食費を２０００円の減額とさせていただきます。これは８月２５日から始まる夏期保育中の給食費になります。夏期保育に欠席された場合もこの加算は徴収させて頂きますのでご理解下さい。また、８月中に通常保育以外（夏休み）での保育をご利用された場合には、２５００円の利用料金に給食費３００円を加算させていただきます。給食費６０００円を２０００円へ減額し、差額の４０００円は１２月にご請求します暖房費に充当致します。２号・３号認定の方で８月に夏期保育以外で保育を利用されない場合、減額徴収に応じますので７月１５日（金）の１学期終業式までに事務所までお申込み下さい。
                    <br />
                    <strong>スタークラスの英語指導料・・・</strong>
                    毎月２５０００円の英語指導料を加算させて頂きます。
                  </p>

                  <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1">
                    <strong>送迎バス利用料・・・・・</strong>
                    送迎バスをご利用される方は、１ヶ月５０００円を加算させて頂きます。朝はバスを利用し、帰りはお迎えの方。帰りのみバス利用される方は、片道料金の２５００円になります。基本的にバス利用されない方が、時々利用される場合にはバス運行のルート上に停車できる方のみ対応をいたしますので、ご相談ください。１乗車３００円をご請求させていただきます。バス運行のルート上にない方はご利用できませんのでご了解ください。
                  </p>
                </div>

                {/* Bus Usage Rules */}
                <div className="space-y-4 mt-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <StarBullet />
                    </div>
                    <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1">
                      １号認定の方は、幼稚園としての保育利用のため、夏・冬・春休み期間中バスの利用はできません。
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <StarBullet />
                    </div>
                    <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1">
                      ２号・３号認定の方は通常バス利用の方のみ「夏・冬・春期間特別バスコース」を設定いたします。
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <StarBullet />
                    </div>
                    <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1">
                      送迎バス利用料金は、バスのガソリン代・車検・点検・運転業務の人件費等、年間にかかる費用を１２カ月で算出した金額ですので、ご利用される、されない月に関わらずお納め下さい。
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <StarBullet />
                    </div>
                    <p className="text-[1.6rem] md:text-[1.8rem] text-dark-1">
                      各保育室にはエアコンを設置しています。冷暖房費を１ヶ月１０００円徴収させて頂きます。夏は冷房費を７月から１０月分の合計４０００円を７月に雑費袋でお納めください。冬は暖房費を１２月から３月分の合計４０００円を１２月に雑費袋でご請求させて頂きます。よろしくお願い申し上げます。
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </article>
    </div>
  );
}