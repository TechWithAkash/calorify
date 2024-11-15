// components/Hero.js
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="container mx-auto px-6 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-transparent bg-clip-text">
          Calorify,Revolutionize Your Diet
        </h1>
        <p className="text-xl md:text-xl text-gray-700 mb-10">
          Unlock the power of AI-driven food analysis for a healthier, more vibrant you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link href={"/analysis"}>
          <Button 
            onClick={() => scrollTo('features')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold p-[30px] text-xl rounded-full shadow-lg transform transition duration-300 hover:scale-105"
          >

            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          </Link>
          <Button 
            variant="outline" 
            onClick={() => scrollTo('about')}
            className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-bold
             p-[30px] rounded-full text-xl shadow-lg transform transition duration-300 hover:scale-105"
          >
            Learn More
            <Sparkles className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-16"
      >
        {/* <Image src="/hero.png" width={800} height={700} alt="Food Analysis Illustration"
         className="mx-auto " /> */}
      </motion.div>
    </section>
  )
}
