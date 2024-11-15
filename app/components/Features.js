// components/Features.js
'use client'

import { motion } from 'framer-motion'
import { Scan, Activity, MessageSquare, Share2 } from 'lucide-react'

export default function Features() {
  const features = [
    { icon: <Scan className="w-12 h-12 text-purple-600" />, title: 'Instant Analysis', description: 'Scan meals for real-time nutritional insights' },
    { icon: <Activity className="w-12 h-12 text-pink-600" />, title: 'Health Tracking', description: 'Monitor progress with detailed breakdowns' },
    { icon: <MessageSquare className="w-12 h-12 text-orange-600" />, title: 'AI Recommendations', description: 'Get personalized diet suggestions' },
    { icon: <Share2 className="w-12 h-12 text-indigo-600" />, title: 'Community Sharing', description: 'Connect with health enthusiasts' },
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-purple-100 to-pink-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Supercharge Your Nutrition
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
