'use client'

import Hero from '@/components/sections/Hero'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function StarPage() {
  const infoRef = useRef<HTMLElement>(null)
  const teachersRef = useRef<HTMLElement>(null)
  const curriculumRef = useRef<HTMLElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Information section content
  const informationContent = [
    {
      text: "当園は、オーストラリア・英国・米国・トリニダードトバゴ・スリランカ・ケニアの国籍を持つ外国人を正規職員として迎え入れ、保育時間内に全学年「英語遊び」を行っています。英語だけで保育するインターナショナルクラスもあります。３歳児から５歳児（年少児・年中児・年長児）までの縦割り保育スタイルで、「スタークラス」と呼んでいます。２０年以上保育園で経験ある外国職員主任を中心とし、担任と相談をしながらスタークラスのカリキュラム作成等を行っています。",
      image: "/images/star-pic-1.jpg",
      alt: "スタークラスの活動風景"
    },
    {
      text: "スタークラスの目標言葉は「Reach for the Stars」＝「高望みする」という意味です。スタークラスの子ども達はお互いに、どんな事にでも一生懸命頑張れる様に、一人一人に声をかけながら応援しています。楽しく遊びながら英語能力を強化し、お子様の成長を見守っています。毎日「行きたい！」と思ってもらえるスタークラスにする様な保育を行っています。",
      text2: "ご父母の皆様の宝物であるお子様に英語を教えていますが、英語はゴールではなく、お子様の世界を広げるツールとして役立てる手段の一つと考えています。毎日英語のシャワーを浴びながら、沢山の楽しい経験を通して社会的な成長をする中で、英語能力の向上はもちろん、自分自身で英語を使ってみたいという気持ちも高まります。"
    },
    {
      text: "スタークラスは一般のクラスと違い、異年齢児（年長児・年中児・年少児）での縦割り保育となります。縦割り保育の良い点として、進級児にリードを頼みながら、下級生の身の回りのお世話などの補助やお手伝いを行う事により、異年齢児同士での気遣いや、理解力の向上につながっているところです。保育中は英語で説明をした後に必ず日本語での説明も行い、理解出来ているかを確認し、覚えた単語やフレーズは一緒に英語で何度もリピートをしています。レベルに合わせられる教育も出来るように、毎週学年毎に分けてお勉強を行っています。",
      image: "/images/star-pic-2.jpg",
      alt: "スタークラスの縦割り保育"
    },
    {
      text: "年長児は下のお友達を手伝う中で、自分の周りのお友達に対する気遣いが出来るようになり、心の成長にも繋がります。進級した年長さんは新入園児のお友達のヘルパーをしてくれています。最初は少し難しいですが、続けるうちにみんな慣れ、担任の声掛けが無くても進んで行ってくれるようになります。年少から年中へ進級し、前年度沢山お手伝をしてもらったお友達も、年中になると自然と下級生を手伝う姿が見られるスタークラスです。",
      text2: "お子様が英語に興味を持ち、英語能力を付けたい・伸ばしたいとお考えであれば、スタークラスの保育スタイルはベストだと思います。ご見学や詳しい説明等ご希望がありましたら、ご遠慮なく電話かメールでお問い合わせください。途中入園も可能です。"
    }
  ]

  // Teachers data
  const teachers = [
    {
      name: "ヘシャーニ先生",
      englishName: "Ms. Heshani",
      image: "/images/heshani.jpg",
      description: [
        "スリランカ出身のヘシャーニ先生（Ms. Heshani）は、東京外国語大学で国際業務の修士号を取得し、語学堪能な真面目で穏やかな先生です。",
        "和也単語を聴覚と視覚の両面から分かりやすく教え、和やかな雰囲気の中で授業を行っています。",
        "社会科学と文学に長けており、何にでも挑戦をするヘシャーニ先生は、スタークラスのお友達の想像力と好奇心を引き出し、高めています。",
        "英語教師や研究者としてのこれまでの様々な功績や経験が、スタークラスの向上につながっています。"
      ]
    },
    {
      name: "ジョン先生",
      englishName: "Mr. Jon",
      image: "/images/jon.jpg",
      description: [
        "トリニダード・トバコ出身のジョン先生（Mr. Jon）はITに長けていて、音楽が大好きなとても明るく元気な先生です。",
        "毎日楽しみながら遊びを通して学ぶレッスンを行うので、スタークラスのお友達は頭と身体でどんどん単語やフレーズを覚えています。",
        "TEFLを取得しており、前職でのインターナショナルのプリスクールでの豊富な経験も持っている先生です。"
      ]
    }
  ]

  // Curriculum data
  const curriculumItems = [
    {
      title: "Language Arts (言葉遊び)",
      description: "月のテーマや季節の行事（こどもの日等）により新しい言葉や表現を紹介し、会話の練習を行います。"
    },
    {
      title: "Active Listening（聴覚練習）",
      description: "動画や音楽、歌を使い、リスニングの力を付ける練習を行います。"
    },
    {
      title: "Craft（製作）",
      description: "紙を切る、折り紙、のりで貼る、塗り絵等で細かい作業をし、精巧な手先の運動能力を成長させています。絵画は思いでファイルで保管をし、年度末にお持ち帰りとなりますので、お子様の成長が見られます。季節の行事の際にも製作を行います。"
    },
    {
      title: "Gross Motor Skills, PE: 総運動技能と体育あそび",
      description: "年齢に合わせて、バランスと体力を向上させる運動を行います。年間行事にも体育遊びが組み込まれています。"
    },
    {
      title: "Music（音楽遊び）",
      description: "動きと指示に会合わせられる様に、カスタネットなどの楽器や踊りを用いながら、リズム感覚を培います。年長児はピアニカも練習します。"
    },
    {
      title: "Numeracy（数字遊び）",
      description: "パターン認識と再生からスタートし、数字の意味・数を視覚と聴覚の両面から理解出来る様な授業を行います。　年長児は時計に興味や関心を示し、時刻を少しずつ理解し始めます。簡単な算数も紹介します。"
    },
    {
      title: "Letters and their Sounds（文字遊び）",
      description: "「Jolly Phonics」を用い、歌とジェスチャーを使いながら英語のアルファベットに興味を持つことにより、英語の文字の音を覚えやすくなります。　少しずつ紹介しながら、英字の大文字と小文字を習い、アルファベットの音と書き方も少しづつ練習します。",
      special: "特別な行事 毎月習っているテーマに応じ、スタークラスでは楽しく特別な行事を行っています。 クッキングクラス、ハロウィンパーティー、クリスマスパーティー等を通し、海外での習慣やや文化の違いを紹介しながら英語への興味を高めるとともに、能力を伸ばします。"
    }
  ]

  const navButtons = [
    { label: 'Info', ref: infoRef },
    { label: 'Teachers', ref: teachersRef },
    { label: 'Curriculum', ref: curriculumRef }
  ]

  return (
    <main className="min-h-screen">
      <Hero 
        title="国際クラス"
        backgroundImage="/images/page-banner.jpeg"
        isHomepage={false}
      />
      
      <section className="py-16 bg-gray-50">
        <article className="container mx-auto px-4 max-w-[78vw] px-[7rem] py-[8rem] bg-gradient-to-b from-secondary via-primary to-quaternary rounded-[4rem]">
          
          {/* Navigation Buttons */}
          <motion.nav 
            className="flex justify-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex bg-white/20 rounded-full p-2">
              {navButtons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(button.ref)}
                  className="px-6 py-3 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300"
                >
                  {button.label}
                </button>
              ))}
            </div>
          </motion.nav>

          {/* Information Section */}
          <motion.section
            ref={infoRef}
            className="bg-white bg-opacity-70 rounded-[6px] p-[3rem] mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.header 
              className="text-center mb-12"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-[4.4rem] font-bold mb-[2rem]">
                Infor<span className="text-blue-500">mation</span>
              </h2>
              <hr className="w-32 h-1 bg-blue-500 mx-auto border-none rounded" />
            </motion.header>

            {informationContent.map((content, index) => (
              <motion.div 
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center mb-8 ${
                  index % 2 === 0 ? '' : 'md:grid-flow-col-dense'
                }`}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`h-full flex flex-col justify-center ${
                  index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                }`}>
                  <p className="text-lg md:text-[1.4rem] leading-relaxed text-gray-700 mb-4">
                    {content.text}
                  </p>
                  {content.text2 && (
                    <p className="text-lg md:text-[1.4rem] leading-relaxed text-gray-700">
                      {content.text2}
                    </p>
                  )}
                </div>

                {content.image && (
                  <div className={`h-full flex items-center ${
                    index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                  }`}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                      <Image 
                        src={content.image}
                        alt={content.alt || "スタークラスの様子"}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.section>

          {/* Teachers Section */}
          <motion.section
            ref={teachersRef}
            className="bg-white bg-opacity-70 rounded-[6px] p-[3rem] mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.header 
              className="text-center mb-12"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-[4.4rem] font-bold mb-[2rem]">
                スター<span className="text-teal-500">クラス</span>の先生
              </h2>
              <hr className="w-32 h-1 bg-teal-500 mx-auto border-none rounded" />
            </motion.header>

            {teachers.map((teacher, index) => (
              <motion.div 
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? '' : 'md:grid-flow-col-dense'
                }`}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`h-full flex flex-col justify-center ${
                  index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                }`}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                    {teacher.name} ({teacher.englishName})
                  </h3>
                  {teacher.description.map((desc, descIndex) => (
                    <p key={descIndex} className="text-lg md:text-[1.4rem] leading-relaxed text-gray-700 mb-3">
                      {desc}
                    </p>
                  ))}
                </div>

                <div className={`h-full flex items-center ${
                  index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                }`}>
                  <div className="relative aspect-[3/4] w-full max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg">
                    <Image 
                      src={teacher.image}
                      alt={`${teacher.name}の写真`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.section>

          {/* Curriculum Section */}
          <motion.section
            ref={curriculumRef}
            className="bg-white bg-opacity-70 rounded-[6px] p-[3rem]"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.header 
              className="text-center mb-12"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-[4.4rem] font-bold mb-[2rem]">
                カリ<span className="text-purple-500">キュラム</span>
              </h2>
              <hr className="w-32 h-1 bg-purple-500 mx-auto border-none rounded" />
            </motion.header>

            <div className="grid gap-8">
              {curriculumItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white bg-opacity-50 rounded-lg p-6"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-lg md:text-[1.4rem] leading-relaxed text-gray-700 mb-4">
                    {item.description}
                  </p>
                  {item.special && (
                    <p className="text-lg md:text-[1.4rem] leading-relaxed text-gray-700 bg-yellow-100 p-4 rounded-md">
                      {item.special}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

        </article>
      </section>
    </main>
  )
}