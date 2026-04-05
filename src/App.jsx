import { useEffect } from 'react'
import Navbar from './components/Navbar'
import TickerTape from './components/TickerTape'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white text-black antialiased">
      <Navbar />
      <Hero />
      <TickerTape />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
