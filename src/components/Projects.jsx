import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import ProjectModal from './ProjectModal'; // Modal Import Kiya

// Extended Project Data with Deep Details
const projectsData = [
  {
    title: 'Local Service Pro',
    description: 'A full-stack service marketplace connecting users with local providers with real-time bookings.',
    detailedDescription: 'Local Service Pro is a comprehensive MERN stack platform designed to bridge the gap between customers and local service professionals (plumbers, electricians, etc.). It features a robust backend architecture ensuring secure transactions, role-based dashboards for providers to manage their business, and a seamless booking experience for users.',
    features: [
      'Secure Role-Based Authentication (User & Provider)',
      'Real-time Service Booking & Availability Management',
      'Razorpay Payment Gateway Integration for secure checkouts',
      'Firebase Storage for high-speed image uploads',
      'Interactive Review and Rating System post-service completion'
    ],
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Tailwind', 'Razorpay'],
    image: 'https://placehold.co/800x600/e0e7ff/4f46e5?text=Local+Service+Pro',
    screenshots: [], // Baad me screenshots ke URL yahan array me daal sakte hain: ['image1.png', 'image2.png']
    liveUrl: 'https://local-service-frontend-phi.vercel.app/', 
    githubUrl: 'https://github.com/palv67322/local-service-frontend',
  },
  {
    title: 'Secure Ghost Vault',
    description: 'A highly secure, privacy-focused notes application with end-to-end encryption.',
    detailedDescription: 'Built with Flutter, Secure Ghost Vault is designed for ultimate privacy. It acts as a secure container for sensitive text and notes. It implements advanced mobile security features to prevent data leakage and includes a unique decoy system to protect users under duress.',
    features: [
      'Military-grade End-to-End Encryption for all stored notes',
      'OS-level Screenshot and Screen-recording blocking',
      'Unique "Duress Password" system that opens a fake vault with decoy data',
      'Biometric authentication fallback',
      'Local-only storage architecture ensuring data never leaves the device'
    ],
    tags: ['Flutter', 'Dart', 'Security', 'Cryptography', 'SQLite'],
    image: 'https://placehold.co/800x600/e0e7ff/4f46e5?text=Ghost+Vault',
    screenshots: [],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'LightSpeedSMS API',
    description: 'A lightning-fast Android utility engineered to read incoming OTPs and forward them instantly.',
    detailedDescription: 'LightSpeedSMS is a specialized Android background service application. It was built to solve the problem of manual OTP entry by automatically detecting specific incoming messages and forwarding them to a local server API in milliseconds, all while maintaining strict battery efficiency.',
    features: [
      'Background Broadcast Receiver for instant SMS detection',
      'Regex-based intelligent OTP parsing',
      'Ultra-fast HTTP POST forwarding to local server endpoints',
      'Highly optimized for zero battery drain in the background',
      'Custom Python backend script integration for data reception'
    ],
    tags: ['Android', 'Java', 'Python', 'REST API', 'Background Services'],
    image: 'https://placehold.co/800x600/e0e7ff/4f46e5?text=LightSpeedSMS',
    screenshots: [],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Mumbai Local Timetable',
    description: 'A reliable and fast transit application for Mumbai commuters with offline scheduling.',
    detailedDescription: 'Navigating the Mumbai local train network can be chaotic. This Flutter application provides a clean, lightning-fast interface to find train schedules across the Central, Western, and Harbour lines. It stores data locally, ensuring commuters can check train times even in network dead zones.',
    features: [
      'Complete offline database of all train routes and timings',
      'Smart search with auto-complete for station names',
      'Time-based filtering (Show trains in the next 1 hour)',
      'Fast vs Slow train visual indicators',
      'Clean, intuitive UI designed for one-handed use during commutes'
    ],
    tags: ['Flutter', 'Dart', 'UI/UX', 'Local Database'],
    image: 'https://placehold.co/800x600/e0e7ff/4f46e5?text=Mumbai+Local+App',
    screenshots: [],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Advanced Video Player',
    description: 'A custom-built desktop media player focusing on performance and segment looping.',
    detailedDescription: 'Developed entirely in Python, this desktop application goes beyond standard video playback. It was designed specifically for users who need to study or analyze specific video segments. It features custom UI controls and a built-in download manager for streaming content.',
    features: [
      'A-B Segment Looping (Select start and end points to loop a specific part)',
      'Built-in Download Manager with progress tracking',
      'Real-time bandwidth and resource usage monitoring',
      'Customizable keyboard shortcuts for playback control',
      'Optimized rendering engine for high-resolution videos'
    ],
    tags: ['Python', 'Media Processing', 'Desktop GUI', 'Automation'],
    image: 'https://placehold.co/800x600/e0e7ff/4f46e5?text=Python+Video+Player',
    screenshots: ['/projects/Advanced Video Player/image1.png',
    '/projects/Advanced Video Player/image2.png',
    '/projects/Advanced Video Player/image3.png'
    ],
    liveUrl: '#',
    githubUrl: '#',
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Wait for transition before clearing data
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          My <span className="text-indigo-600">Projects</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Here are some of the major projects I've built. Click on any project to view its complete details, features, and source code.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group border border-gray-100 hover:border-indigo-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(project)} // Card par click karne par modal khulega
            >
              
              {/* Project Image Box */}
              <div className="relative overflow-hidden h-52">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white p-4 rounded-full text-indigo-600 mb-2 shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <FaEye size={24} />
                  </div>
                  <span className="text-white font-bold tracking-wider">View Details</span>
                </div>
              </div>

              {/* Project Details (Card View) */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack Tags (Show only top 3 on card to keep it clean) */}
                <div className="flex flex-wrap gap-2 mt-auto border-t border-gray-100 pt-4">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-md text-xs font-bold tracking-wide border border-indigo-100">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                     <span className="text-gray-400 text-xs font-bold px-1 py-1">+{project.tags.length - 3} more</span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Pop-up Modal Component Rendered Here */}
      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        project={selectedProject} 
      />

    </section>
  );
}

export default Projects;