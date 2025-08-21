import Hero from '@/components/sections/Hero'
import AgeGroups from '@/components/sections/AgeGroups'
import AboutInfo from '@/components/sections/AboutInfo'
// import BlogSection from '@/components/sections/BlogSection'

export default function HomePage() {
  return (
    <>
      <Hero
        isHomepage={true}
        subtitle="ふれあい保育・感謝・思いやり"
        showButton={true}
        backgroundImage="/images/hero-image.jpg"
      />
      <AgeGroups />
      <AboutInfo />
      {/* <BlogSection /> */}
    </>
  )
}