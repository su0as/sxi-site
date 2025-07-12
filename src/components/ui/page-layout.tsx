/*
 * Updated: Added mobile responsive design with dropdown navigation
 * - Fixed mobile view content positioning to avoid overlap
 * - Added dropdown menu for mobile navigation only
 * - Maintained exact desktop layout without changes
 * - Responsive content positioning for different screen sizes
 * - Fixed loading states and error handling for new image
 */

"use client"

import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Navigation } from "./navigation";
import "../../styles/fonts.css";

interface PageLayoutProps {
  children?: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  currentPage, 
  onNavigate 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
    img.src = '/image copy copy.png';
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMobileNavigate = (page: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(page);
  };

  const handleSuhasClick = () => {
    onNavigate('home');
  };

  return (
    <main 
      className="w-full min-h-screen relative overflow-hidden bg-black"
      style={{
        backgroundImage: imageLoaded && !imageError ? 'url(/background-alt.png)' : 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
      role="main"
      aria-label="Suhas Portfolio"
    >
      {/* Loading state */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
        </div>
      )}

      {/* Content section with exact positioning */}
      <div 
        className="frame-2 absolute top-[276px] left-[166px] hidden md:block" 
        aria-label="Portfolio content"
        style={{ opacity: imageLoaded || imageError ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
      >
        {/* Social media text */}
        <a 
          href="https://x.com/suhasxi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="you-can-find-me-on-x hover:scale-105 transition-transform duration-200"
          aria-label="Find Suhas on X (formerly Twitter)"
        >
          You can find me on X
        </a>
        
        {/* Name with mixed typography - clickable to go home */}
        <div 
          className="suhas cursor-pointer" 
          aria-label="Suhas - Click to go home"
          onClick={handleSuhasClick}
        >
          <span>
            <span className="suhas-span">S</span>
            <span className="suhas-span2">u</span>
            <span className="suhas-span3">h</span>
            <span className="suhas-span3">a</span>
            <span className="suhas-span4">s</span>
          </span>
        </div>
        
        {/* Navigation menu */}
        <Navigation currentPage={currentPage} onNavigate={onNavigate} />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden" ref={menuRef}>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-4 right-4 z-50 p-2 bg-black/50 backdrop-blur-sm rounded-lg border border-white/20"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="fixed top-16 right-4 z-40 bg-black/90 backdrop-blur-md rounded-lg border border-white/20 p-4 min-w-[200px]">
            {/* Suhas Name */}
            <button
              onClick={() => handleMobileNavigate('home')}
              className="block w-full text-left mb-4 pb-3 border-b border-white/20"
            >
              <div className="suhas-mobile text-white text-2xl">
                <span className="font-['Alegreya',serif] font-medium italic text-3xl">S</span>
                <span className="font-['SwearDisplay',serif] italic text-2xl">u</span>
                <span className="font-['Marcellus',serif] text-2xl">h</span>
                <span className="font-['Marcellus',serif] text-2xl">a</span>
                <span className="font-['Silkscreen',monospace] text-xl">s</span>
              </div>
            </button>

            {/* Navigation Items */}
            <div className="space-y-3">
              <button
                onClick={() => handleMobileNavigate('about')}
                className={`block w-full text-left text-white font-['Gilroy-SemiBold',sans-serif] text-lg hover:text-gray-300 transition-colors ${
                  currentPage === 'about' ? 'underline underline-offset-4' : ''
                }`}
              >
                About
              </button>
              <button
                onClick={() => handleMobileNavigate('projects')}
                className={`block w-full text-left text-white font-['Gilroy-SemiBold',sans-serif] text-lg hover:text-gray-300 transition-colors ${
                  currentPage === 'projects' ? 'underline underline-offset-4' : ''
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => handleMobileNavigate('writings')}
                className={`block w-full text-left text-white font-['Gilroy-SemiBold',sans-serif] text-lg hover:text-gray-300 transition-colors ${
                  currentPage === 'writings' ? 'underline underline-offset-4' : ''
                }`}
              >
                Writings
              </button>
              <button
                onClick={() => handleMobileNavigate('curators-corner')}
                className={`block w-full text-left text-white font-['Gilroy-SemiBold',sans-serif] text-lg hover:text-gray-300 transition-colors ${
                  currentPage === 'curators-corner' ? 'underline underline-offset-4' : ''
                }`}
              >
                Curator's Corner
              </button>
              
              {/* Social Link */}
              <div className="pt-3 border-t border-white/20">
                <a
                  href="https://x.com/suhasxi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white font-['Gilroy-SemiBold',sans-serif] text-lg hover:text-gray-300 transition-colors"
                >
                  You can find me on X
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Additional page content */}
      {children}
    </main>
  );
};