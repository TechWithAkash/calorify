// components/Newsletter.js
'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section id="newsletter" className="container mx-auto px-6 py-20 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">Stay Ahead in Health</h2>
      <p className="text-xl text-gray-600 mb-10">Join our community for exclusive health tips and app updates.</p>
      <form className="max-w-md mx-auto flex gap-4">
        <Input 
          type="email" 
          placeholder="Enter your email" 
          className="flex-grow border-2 border-purple-300 focus:border-purple-500 rounded-full py-3 px-6" 
        />
        <Button 
          type="submit" 
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
        >
          Subscribe
        </Button>
      </form>
    </section>
  )
}