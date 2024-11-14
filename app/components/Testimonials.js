'use client';

export default function Testimonials() {
  const testimonials = [
    { name: "Alice M.", review: "This app has transformed how I track my nutrition. I love the real-time analysis!" },
    { name: "John D.", review: "A fantastic app for health enthusiasts. The calorie estimation is very helpful!" },
    { name: "Sarah K.", review: "Accurate and easy to use. I use it every day to keep a tab on my diet." },
  ];

  return (
    <section id="testimonials" className="container mx-auto px-6 py-16 text-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 border border-gray-200 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">{testimonial.review}</p>
            <h3 className="font-semibold">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
