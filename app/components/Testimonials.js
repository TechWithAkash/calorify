// components/Testimonials.js
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    { name: 'Sarah L.', comment: 'This app has revolutionized my approach to nutrition. The real-time analysis is truly a game-changer!', avatar: '/placeholder.svg?height=100&width=100' },
    { name: 'Mike T.', comment: 'I love how easy it is to track my nutrient intake. It\'s helped me make much healthier food choices and feel more energized.', avatar: '/placeholder.svg?height=100&width=100' },
    { name: 'Emily R.', comment: 'The personalized AI recommendations have been spot-on. I feel healthier and more confident in my food choices than ever before!', avatar: '/placeholder.svg?height=100&width=100' },
  ]

  return (
    <section id="testimonials" className="bg-gradient-to-b from-pink-100 to-orange-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center mb-6">
                <Image src={"/hero2.jpg"} height={800} width={800} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 border-4 border-purple-300" />
                <h3 className="font-bold text-lg text-gray-800">{testimonial.name}</h3>
              </div>
              <p className="text-gray-600 italic">&ldquo;{testimonial.comment}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
