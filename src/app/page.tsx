import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Footer from '@/components/layout/Footer'
import AgeGroups from '@/components/sections/AgeGroups'
import AboutInfo from '@/components/sections/AboutInfo'
// import BlogSection from '@/components/sections/BlogSection'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero
          isHomepage={true}
          subtitle="ふれあい保育・感謝・思いやり"
          showButton={true}
          backgroundImage="/images/hero-image.jpg"
        />
        <AgeGroups />
        <AboutInfo />
        {/* <BlogSection /> */}
      </main>
      <Footer />
    </>
  )
}