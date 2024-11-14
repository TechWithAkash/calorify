'use client'; // Ensures this component is treated as a client-side component

import { useState } from 'react';

export default function FAQ() {
  // Declare a state variable to track which FAQ is open
  const [faqOpen, setFaqOpen] = useState(null);

  // FAQ data
  const faqs = [
    { question: "How does the app analyze food?", answer: "The app uses advanced image recognition and machine learning to provide insights on the food you upload or capture." },
    { question: "Can I use the app offline?", answer: "Yes, the app offers an offline mode where you can access previously analyzed data without an internet connection." },
    { question: "Is the calorie estimate accurate?", answer: "While estimates are generally accurate, they are based on visual cues and may vary slightly from lab-tested values." },
    { question: "How is my data handled?", answer: "We value your privacy and ensure all data is processed securely in compliance with privacy regulations." }
  ];

  return (
    <section id="faq" className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg shadow-md">
            <button
              onClick={() => setFaqOpen(faqOpen === index ? null : index)} // Toggle visibility
              className="flex justify-between w-full text-left"
            >
              <span className="font-semibold">{faq.question}</span>
            </button>
            <p className={`mt-2 text-gray-600 ${faqOpen === index ? 'block' : 'hidden'}`}>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
