import React from 'react';
import { Toaster } from 'react-hot-toast'; // Naya Import
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen antialiased bg-gray-50">
      <Toaster position="bottom-right" reverseOrder={false} /> {/* Notification Container */}
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;