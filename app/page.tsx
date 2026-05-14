import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Achievements from '@/components/sections/Achievements'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="grain-overlay relative min-h-screen bg-page">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}
