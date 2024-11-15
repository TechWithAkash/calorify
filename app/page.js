// app/page.js
'use client'

import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import FAQ from './components/FAQ'
import Testimonials from './components/Testimonials'
import Newsletter from './components/NewsLetter'
import Footer from './components/Footer'

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'faq', 'testimonials']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50 text-gray-900">
      {/* <Navbar activeSection={activeSection} /> */}
      <main>
        <Hero />
        <Features />
        <FAQ />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
