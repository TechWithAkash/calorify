// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="text-5xl flex justify-center items-center p-10 font-bold">
//       Welcome to calorify 
//     </div>
//   );
// }
// "use server"
'use client';

import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import FAQ from './components/FAQ';
// import Newsletter from '../components/Newsletter';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Testimonials from './components/Testimonials';
import Newsletter from './components/NewsLetter';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'faq', 'testimonials'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        return element && element.getBoundingClientRect().top <= 100;
      });
      setActiveSection(currentSection || 'home');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>

  
      <Header activeSection={activeSection} scrollTo={scrollTo} />
      <HeroSection scrollTo={scrollTo} />
      <Features/>
      <FAQ />
      <Testimonials/>
      <Newsletter/>
      
      
     <Footer/>
     
    </>
  );
}
