import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import api from '../api'; // Humara banaya hua axios config
import toast from 'react-hot-toast';

function Contact() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Loading State taaki double click na ho sake
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Input Handle karne ka function
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Submit karne ka function
  const handleSubmit = async (e) => {
    e.preventDefault(); // Page refresh hone se roke
    setIsSubmitting(true);
    const toastId = toast.loading('Sending message...');

    try {
      // Backend ko API call
      const response = await api.post('/contact', formData);
      
      toast.success(response.data.success || 'Message sent successfully!', { id: toastId });
      
      // Form ko wapas khali kar do
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error(error);
      const errorMsg = error.response?.data?.error || 'Failed to send message.';
      toast.error(errorMsg, { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Get In <span className="text-indigo-600">Touch</span>
        </h2>

        <div className="grid md:grid-cols-5 gap-12 bg-indigo-50 rounded-3xl p-8 md:p-12 shadow-sm border border-indigo-100">
          
          {/* Left Side: Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Let's talk!</h3>
              <p className="text-gray-600">I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on.</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-gray-700">
                <div className="bg-white p-3 rounded-full text-indigo-600 shadow-sm"><FaEnvelope size={20} /></div>
                <span className="font-medium">vishalpal5328@gmail.com</span> {/* Apna email daalein */}
              </div>
              <div className="flex items-center space-x-4 text-gray-700">
                <div className="bg-white p-3 rounded-full text-indigo-600 shadow-sm"><FaMapMarkerAlt size={20} /></div>
                <span className="font-medium">Mumbai, India</span>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <a href="#" className="bg-white p-3 rounded-full text-gray-600 hover:text-white hover:bg-indigo-600 transition shadow-sm"><FaLinkedin size={24} /></a>
              <a href="#" className="bg-white p-3 rounded-full text-gray-600 hover:text-white hover:bg-gray-900 transition shadow-sm"><FaGithub size={24} /></a>
            </div>
          </div>

          {/* Right Side: Working Form */}
          <div className="md:col-span-3 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows="4" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="How can I help you?" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md ${
                  isSubmitting ? 'bg-indigo-400 cursor-not-allowed text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;