/*
 * Updated: Fixed background to use the correct new image (image copy copy.png)
 * - Removed purple gradient fallback that was causing the issue
 * - Updated to use the new background image provided by user
 * - Maintained all existing functionality and layout structure
 * - Fixed loading states and error handling for new image
 */

"use client"

import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
    img.src = '/image copy copy.png';
  }, []);

  const handleSuhasClick = () => {
    onNavigate('home');
  };

  return (
    <main 
      className="w-full min-h-screen relative overflow-hidden bg-black"
      style={{
        backgroundImage: imageLoaded && !imageError ? 'url(/image copy copy.png)' : 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)',
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
        className="frame-2 absolute top-[276px] left-[166px] sm:top-[200px] sm:left-[100px] md:top-[276px] md:left-[166px]" 
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

      {/* Additional page content */}
      {children}
    </main>
  );
};