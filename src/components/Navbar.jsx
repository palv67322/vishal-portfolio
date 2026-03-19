import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Name */}
        <a href="#home" className="text-2xl font-bold text-gray-900">
          Vishal<span className="text-indigo-600">.Dev</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Home</a>
          <a href="#about" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">About</a>
          <a href="#timeline" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Journey</a> {/* Naya Link */}
          <a href="#projects" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Projects</a>
          <a href="#contact" className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition-colors">
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-3">
          <a href="#home" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-indigo-600 font-medium">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-indigo-600 font-medium">About</a>
          <a href="#timeline" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-indigo-600 font-medium">Journey</a> {/* Naya Link */}
          <a href="#projects" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-indigo-600 font-medium">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-indigo-600 font-medium">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;