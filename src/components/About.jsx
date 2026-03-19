import React from 'react';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const skills = [
  { name: 'Frontend', icon: <FaCode />, techs: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML5'] },
  // Yahan Backend me Python add kar diya hai
  { name: 'Backend', icon: <FaServer />, techs: ['Node.js', 'Express.js', 'Python', 'REST APIs'] }, 
  { name: 'Database', icon: <FaDatabase />, techs: ['MongoDB', 'Mongoose'] },
  { name: 'Tools', icon: <FaTools />, techs: ['Git & GitHub', 'Postman', 'Vite', 'Firebase'] },
];

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          About <span className="text-indigo-600">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Bio Section */}
          <div className="md:col-span-1 space-y-4 text-gray-700 text-lg">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">Who am I?</h3>
            <p>
              Hi, I'm <span className="font-semibold text-indigo-600">Vishal Pal</span>, a passionate Full Stack Web Developer based in Mumbai, India. 
            </p>
            <p>
              I recently graduated with a BSc in Computer Science. I specialize in the MERN stack and Python, and I love turning complex problems into simple, beautiful, and intuitive software solutions.
            </p>
            <p>
              From building "Local Service Pro" with secure real-time bookings to developing Android utility apps, I enjoy building projects that create real-world impact.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-indigo-50 p-6 rounded-xl shadow-sm border border-indigo-100 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-4 text-indigo-600 text-2xl">
                  {skill.icon}
                  <h3 className="text-xl font-bold text-gray-900">{skill.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.techs.map(tech => (
                    <span key={tech} className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;