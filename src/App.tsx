import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Capabilities from './components/Capabilities'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Capabilities />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
