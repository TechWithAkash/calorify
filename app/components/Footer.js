'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} FoodAnalyzer. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
        <div className="mt-6">
          <a href="#" className="text-white mx-2 hover:underline">Facebook</a>
          <a href="#" className="text-white mx-2 hover:underline">Twitter</a>
          <a href="#" className="text-white mx-2 hover:underline">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
