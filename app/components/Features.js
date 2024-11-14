'use client';

export default function Features() {
  const features = [
    { title: "Real-Time Food Analysis", description: "Capture food images to get instant nutrition information." },
    { title: "Calorie Estimation", description: "Estimate calorie content to help manage your diet effectively." },
    { title: "Health Suggestions", description: "Get recommendations on food choices based on your dietary needs." },
    { title: "Offline Mode", description: "Access previously analyzed data even without an internet connection." }
  ];

  return (
    <section id="features" className="container mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6 border border-gray-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
