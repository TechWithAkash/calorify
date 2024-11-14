'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

export default function HeroSection({ scrollTo }) {
  return (
    <section id="home" className="container mx-auto px-6 py-16 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Analyze Your Food, Optimize Your Health
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-xl text-gray-600 mb-8"
      >
        Get real-time insights into your nutrition with our advanced food analysis app.
      </motion.p>
      <div className="flex justify-center space-x-4">
        <Button onClick={() => scrollTo('features')}>Get Started</Button>
        <Button variant="outline" onClick={() => scrollTo('about')}>Learn More</Button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16"
      >
        <img src="/images/food-analysis-illustration.svg" alt="Food Analysis Illustration" className="mx-auto" />
      </motion.div>
    </section>
  );
}
