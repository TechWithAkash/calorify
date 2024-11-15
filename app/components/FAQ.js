
// components/FAQ.js
'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  const faqItems = [
    { question: 'How accurate is the food analysis?', answer: 'Our app uses cutting-edge AI and a comprehensive food database to provide highly accurate nutritional information. While results may vary slightly based on factors like food preparation methods, we consistently achieve over 95% accuracy in our analyses.' },
    { question: 'Is my data kept private?', answer: 'Absolutely. Your privacy is our top priority. All personal data is encrypted using industry-standard protocols and stored securely. We never share your information with third parties without your explicit consent, and you have full control over your data at all times.' },
    { question: 'Can I use the app offline?', answer: 'While most features require an internet connection for real-time analysis, you can access your saved meal data and some basic functionalities offline. We\'re constantly working on expanding our offline capabilities to enhance your experience.' },
    { question: 'How often is the food database updated?', answer: 'Our food database is continuously updated to ensure the most accurate and up-to-date nutritional information. We add new foods and refine existing entries on a weekly basis, incorporating the latest research and user feedback to maintain the highest standards of accuracy.' },
  ]

  return (
    <section id="faq" className="container mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-purple-200">
            <AccordionTrigger className="text-lg text-gray-700 hover:text-purple-600">{item.question}</AccordionTrigger>
            <AccordionContent className="text-gray-600">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
