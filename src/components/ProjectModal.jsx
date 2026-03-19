import React, { useEffect, useState } from 'react';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCheckCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function ProjectModal({ isOpen, onClose, project }) {
    // -----------------------------------------------------------------
    // Part 1: State for Lightbox Gallery
    // -----------------------------------------------------------------
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Slider array me ab sirf 'screenshots' (Gallery) jayenge.
    const sliderImages = project?.screenshots || [];

    // -----------------------------------------------------------------
    // Part 2: Modal & Body Scroll Lock Logic
    // -----------------------------------------------------------------
    useEffect(() => {
        if (isOpen || isLightboxOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen, isLightboxOpen]);


    // -----------------------------------------------------------------
    // Part 3: Lightbox Navigation Logic
    // -----------------------------------------------------------------
    
    // Lightbox kholne ke liye function
    const openLightbox = (index) => {
        if (sliderImages.length > 0) {
            setCurrentImageIndex(index);
            setIsLightboxOpen(true);
        }
    };

    // Lightbox band karne ke liye function
    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    // Next image par jane ke liye function
    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => 
            (prevIndex + 1) % sliderImages.length
        );
    };

    // Previous image par jane ke liye function
    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => 
            (prevIndex - 1 + sliderImages.length) % sliderImages.length
        );
    };

    // Keyboard support: Escape, Arrows
    useEffect(() => {
        if (!isLightboxOpen) return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage(e);
            if (e.key === 'ArrowLeft') prevImage(e);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isLightboxOpen, sliderImages.length]);


    if (!isOpen || !project) return null;

    return (
        <>
            {/* ----------------------------------------------------------------- */}
            {/* MAIN PROJECT DETAILS MODAL */}
            {/* ----------------------------------------------------------------- */}
            <div className="fixed inset-0 z-[100] flex justify-center items-center p-4 sm:p-6 overflow-hidden">
                {/* Background Overlay */}
                <div 
                    className="absolute inset-0 bg-gray-900 bg-opacity-60 backdrop-blur-sm transition-opacity"
                    onClick={onClose}
                ></div>

                {/* Modal Content Box */}
                <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col transform transition-all animate-fade-in-up">
                    
                    {/* Close Button */}
                    <button 
                        onClick={onClose}
                        className="absolute top-4 right-4 z-[110] bg-white bg-opacity-80 text-gray-800 hover:text-red-500 hover:bg-red-50 p-2 rounded-full shadow-md transition-colors"
                    >
                        <FaTimes size={20} />
                    </button>

                    {/* Scrollable Content Area */}
                    <div className="overflow-y-auto flex-grow">
                        {/* MAIN IMAGE */}
                        <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-100 relative">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                            <h2 className="absolute bottom-6 left-6 md:left-10 text-3xl md:text-5xl font-extrabold text-white">
                                {project.title}
                            </h2>
                        </div>

                        {/* Details Section */}
                        <div className="p-6 md:p-10 space-y-8">
                            
                            {/* Tech Stack */}
                            <div>
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-md text-sm font-bold border border-indigo-100">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">About the Project</h3>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    {project.detailedDescription}
                                </p>
                            </div>

                            {/* Key Features */}
                            {project.features && project.features.length > 0 && (
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {project.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start space-x-3 text-gray-700">
                                                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                                <span className="leading-relaxed">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* GALLERY */}
                            {project.screenshots && project.screenshots.length > 0 && (
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Gallery</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {project.screenshots.map((img, idx) => (
                                            <div 
                                                key={idx} 
                                                className="relative group rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition cursor-pointer h-32 w-full"
                                                onClick={() => openLightbox(idx)} 
                                            >
                                                <img 
                                                    src={img} 
                                                    alt={`${project.title} screenshot ${idx+1}`} 
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                    {/* Modal Footer with Action Buttons */}
                    <div className="bg-gray-50 p-6 border-t border-gray-100 flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
                        <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center justify-center space-x-2 bg-white text-gray-800 border-2 border-gray-300 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
                        >
                            <FaGithub size={20} />
                            <span>View Source Code</span>
                        </a>
                        <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center justify-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 shadow-md transition"
                        >
                            <FaExternalLinkAlt size={18} />
                            <span>Visit Live Website</span>
                        </a>
                    </div>

                </div>
            </div>

            {/* ----------------------------------------------------------------- */}
            {/* FULL-SCREEN IMAGE LIGHTBOX GALLERY */}
            {/* ----------------------------------------------------------------- */}
            {isLightboxOpen && sliderImages.length > 0 && (
                <div 
                    className="fixed inset-0 z-[200] flex justify-center items-center bg-gray-950 bg-opacity-95 backdrop-blur-sm p-4 sm:p-8 animate-fade-in-quick"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button 
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[220] bg-black bg-opacity-60 text-white hover:bg-red-500 hover:text-white p-3 rounded-full transition-all"
                        title="Close (Esc)"
                    >
                        <FaTimes size={24} />
                    </button>

                    {/* Previous Button */}
                    {sliderImages.length > 1 && (
                        <button 
                            onClick={prevImage}
                            className="absolute left-2 sm:left-6 z-[220] bg-black bg-opacity-50 text-white hover:bg-indigo-600 p-3 sm:p-4 rounded-full transition-all shadow-lg"
                            title="Previous (<-)"
                        >
                            <FaChevronLeft size={20} className="sm:text-2xl" />
                        </button>
                    )}

                    {/* Main Large Image Container */}
                    <div className="relative flex flex-col items-center justify-center w-full h-full" onClick={(e) => e.stopPropagation()}>
                        {/* === MAIN FIX IS HERE: max-h-[85vh] aur object-contain === */}
                        <img 
                            src={sliderImages[currentImageIndex]} 
                            alt={`${project.title} detailed screenshot`} 
                            className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                        />
                        
                        {/* Image Counter */}
                        <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 bg-opacity-80 text-white text-sm px-5 py-2 rounded-full font-bold tracking-widest">
                            {currentImageIndex + 1} / {sliderImages.length}
                        </div>
                    </div>

                    {/* Next Button */}
                    {sliderImages.length > 1 && (
                        <button 
                            onClick={nextImage}
                            className="absolute right-2 sm:right-6 z-[220] bg-black bg-opacity-50 text-white hover:bg-indigo-600 p-3 sm:p-4 rounded-full transition-all shadow-lg"
                            title="Next (->)"
                        >
                            <FaChevronRight size={20} className="sm:text-2xl" />
                        </button>
                    )}
                </div>
            )}
        </>
    );
}

export default ProjectModal;