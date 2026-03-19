import React from 'react';
import { FaGraduationCap, FaLaptopCode, FaBriefcase, FaPython } from 'react-icons/fa';

const timelineData = [
  {
    id: 1,
    type: 'experience',
    date: '2025 - Present',
    title: 'Full Stack Web Developer',
    subtitle: 'Freelance / Personal Projects',
    description: 'Designed and developed "Local Service Pro", a comprehensive MERN stack marketplace. Built real-time appointment scheduling, secure role-based dashboards, and integrated Razorpay for seamless transactions.',
    icon: <FaLaptopCode />,
  },
  {
    id: 2,
    type: 'experience',
    date: '2024 - 2025',
    title: 'Android & Python Developer',
    subtitle: 'Self-Directed Projects',
    description: 'Developed "LightSpeedSMS" for instant OTP reading and API forwarding. Leveraged Python for backend scripting, data processing, and seamless API integrations to enhance overall application functionality.',
    icon: <FaPython />,
  },
  {
    id: 3,
    type: 'education',
    date: 'Completed',
    title: 'BSc Computer Science',
    subtitle: 'Mumbai University, India',
    description: 'Successfully completed my Bachelor\'s degree with a strong focus on Data Science, Python programming, advanced networking concepts, and full-stack web development.',
    icon: <FaGraduationCap />,
  },
  {
    id: 4,
    type: 'education',
    date: '2021 - 2023',
    title: 'Higher Secondary Certificate (HSC)',
    subtitle: 'Mumbai, Maharashtra',
    description: 'Completed 12th grade in Science stream, building a strong foundation in mathematics and logic, which sparked my interest in software development.',
    icon: <FaBriefcase />,
  }
];

function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          My <span className="text-indigo-600">Journey</span>
        </h2>

        {/* Timeline Wrapper */}
        <div className="relative">
          {/* Vertical Center Line (Hidden on mobile, visible on desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-100 rounded-full"></div>

          {/* Vertical Left Line (Visible only on mobile) */}
          <div className="block md:hidden absolute left-6 w-1 h-full bg-indigo-100 rounded-full"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div 
                key={item.id} 
                className={`relative flex flex-col md:flex-row items-center justify-between w-full ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Spacer for empty side on desktop */}
                <div className="hidden md:block w-5/12"></div>

                {/* Timeline Icon */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white border-4 border-white shadow-lg z-10 text-xl">
                  {item.icon}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 pl-20 pr-4 md:pl-0 md:pr-0 ${
                  index % 2 === 0 ? 'md:pl-10 text-left' : 'md:pr-10 md:text-right'
                }`}>
                  <div className="bg-indigo-50 p-6 rounded-2xl shadow-sm border border-indigo-100 hover:shadow-md transition-shadow duration-300">
                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold mb-3 tracking-wider">
                      {item.date}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{item.title}</h3>
                    <h4 className="text-md font-semibold text-indigo-500 mb-3">{item.subtitle}</h4>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;