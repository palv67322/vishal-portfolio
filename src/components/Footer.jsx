import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-2xl font-bold mb-4">Vishal<span className="text-indigo-500">.Dev</span></p>
        <p className="text-gray-400 text-sm mb-2">
          © {new Date().getFullYear()} Vishal Pal. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs">
          Designed & Built with React.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;