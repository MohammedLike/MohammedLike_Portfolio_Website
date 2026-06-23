import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeBanner from './components/MarqueeBanner'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="grain relative min-h-screen bg-[var(--color-cream)] text-[var(--color-ink)] antialiased">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
