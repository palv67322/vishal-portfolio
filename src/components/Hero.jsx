import React from 'react';

function Hero() {
  return (
    <section id="home" className="bg-indigo-50 py-20 md:py-32 min-h-[80vh] flex items-center relative overflow-hidden">
      {/* Background Decor Elements (Modern look ke liye) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <p className="text-indigo-600 font-bold text-lg md:text-xl mb-4 tracking-wide uppercase">Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
          Vishal <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Pal</span>
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
          Full Stack Web Developer
        </p>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          I build modern, scalable, and user-friendly web applications using the MERN stack. Passionate about coding, problem-solving, and continuous learning.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="#projects" className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-indigo-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto">
            View My Work
          </a>
          {/* CV Download Button (public folder me apna resume.pdf daal dena) */}
          <a href="/Vishal_Pal_Resume.pdf" download className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-indigo-50 transition shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;