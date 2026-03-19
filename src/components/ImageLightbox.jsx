import React, { useState, useEffect } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function ImageLightbox({ isOpen, onClose, currentImageUrl, project }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allImages, setAllImages] = useState([]);

  // Main logic to combine images and find initial index
  useEffect(() => {
    if (isOpen && project) {
      // Piche project image aur screenshots ko ek single array me combine karein
      const images = [project.image, ...(project.screenshots || [])];
      setAllImages(images);
      
      // Check karein ki user ne kaunsi image click ki hai, uska index set karein
      const initialIndex = images.findIndex(imgUrl => imgUrl === currentImageUrl);
      setCurrentIndex(initialIndex !== -1 ? initialIndex : 0);
    }
  }, [isOpen, project, currentImageUrl]);

  // Handle keyboard events (Escape, Left, Right arrows)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && allImages.length > 1) handleNext();
      if (e.key === 'ArrowLeft' && allImages.length > 1) handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, allImages, currentIndex]); // currentIndex, allImages needed for next/prev logic

  const handleNext = () => {
    if (currentIndex < allImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (!isOpen || allImages.length === 0) return null;

  return (
    // Fixed inset-0 to be full screen, z-[110] to be above the project modal
    <div className="fixed inset-0 z-[110] flex justify-center items-center p-4 transition-all duration-300">
      {/* Background Overlay (Click outside to close) */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-90 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Image Container with zoom animation */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full max-w-[95vw] max-h-[95vh] transition-all transform animate-zoom-in">
        
        {/* Close Button (Top right) */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-300 hover:text-white transition-colors text-3xl"
        >
          <FaTimes />
        </button>

        {/* Previous Button */}
        {allImages.length > 1 && currentIndex > 0 && (
          <button 
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white transition-colors text-4xl p-2 rounded-full bg-black bg-opacity-20 hover:bg-opacity-50"
          >
            <FaChevronLeft />
          </button>
        )}

        {/* Next Button */}
        {allImages.length > 1 && currentIndex < allImages.length - 1 && (
          <button 
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white transition-colors text-4xl p-2 rounded-full bg-black bg-opacity-20 hover:bg-opacity-50"
          >
            <FaChevronRight />
          </button>
        )}

        {/* The Big Image */}
        <img 
          src={allImages[currentIndex]} 
          alt={`${project.title} detailed view ${currentIndex + 1}`} 
          className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl object-contain border border-gray-800"
        />

        {/* Image Counter */}
        {allImages.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-300 bg-black bg-opacity-60 px-4 py-2 rounded-full font-medium">
            Image {currentIndex + 1} of {allImages.length}
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageLightbox;