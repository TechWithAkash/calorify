'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

export default function Header({ activeSection, scrollTo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Home', 'Features', 'FAQ', 'About', 'Contact'];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-gray-800">FoodAnalyzer</a>
        <div className="hidden md:flex space-x-4">
          {menuItems.map(item => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className={`text-gray-600 hover:text-gray-900 ${activeSection === item.toLowerCase() ? 'font-bold' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg">
          <div className="flex flex-col items-center py-4">
            {menuItems.map(item => (
              <button
                key={item}
                onClick={() => {
                  scrollTo(item.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className="w-full text-center py-2 text-gray-600 hover:bg-gray-100"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
