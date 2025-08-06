import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
  title: 'こども学園[Kodomo Gakuen] - 幼稚園/保育園',
  description: 'こども学園は東大和市を中心に東村山市、武蔵村山市、小平市、所沢市、立川市、横田基地など周辺地域の幼稚園/保育園で、子供たちの成長をサポートします。東大和周辺の子育て支援、幼児教育に特化したプレスクールです。Kodomo Gakuen is a preschool/daycare located in and around Higashi Yamato, serving the surrounding areas including Higashi Murayama, Musashi Murayama, Kodaira, Tokorozawa, Tachikawa, and Yokota Air Base. We are dedicated to supporting children\'s growth, offering specialized services for parenting support and early childhood education.',
  keywords: 'こども学園, 幼稚園, 保育園, 子供, 成長, 東大和市, 東村山市, 武蔵村山市, 小平市, 所沢市, 立川市, 横田基地, プレスクール, 子育て支援, 幼児教育, Kodomo Gakuen, preschool, daycare, children, growth, Higashi Yamato, Higashi Murayama, Musashi Murayama, Kodaira, Tokorozawa, Tachikawa, Yokota Air Base, preschool, parenting support, early childhood education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="canonical" href="http://www.kodomogakuen.com/" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.9.0/css/flag-icon.css"
          rel="stylesheet"
        />
      </head>
      <body className="font-kosugi bg-light-2 text-dark-1">
        {children}
      </body>
    </html>
  )
}