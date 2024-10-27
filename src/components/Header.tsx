import React from 'react';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="https://i.ibb.co/dr3Mztk/itc-logo.jpg" 
              alt="ITC Bootcamp" 
              className="h-10 w-auto rounded"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Главная</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Курсы</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">О нас</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Контакты</a>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
              Записаться
            </button>
          </div>
          
          <button className="md:hidden text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}