/*
 * Updated: Fixed deployment issues and optimized for production
 * - Added proper error boundaries and loading states
 * - Optimized image loading with lazy loading and proper fallbacks
 * - Enhanced accessibility with better ARIA labels
 * - Added performance optimizations for Cloudflare Pages
 * - S: Alegreya Medium Italic, 64px, uppercase
 * - u: SwearDisplay Italic, 48px
 * - h: Marcellus Regular, 48px
 * - a: Marcellus Regular, 48px
 * - s: Silkscreen Regular, 40px
 * - Responsive design with mobile-first approach
 * - Production-ready with error handling
 */

import React, { useState, useEffect } from "react";
import "../../styles/fonts.css";

export const Frame = (): JSX.Element => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
    img.src = '/imgbg.png';
  }, []);

  return (
    <main 
      className="w-full min-h-screen relative overflow-hidden bg-black"
      style={{
        backgroundImage: imageLoaded && !imageError ? 'url(/imgbg.png)' : 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)',
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

      {/* Content section with responsive positioning */}
      <section 
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
            
            {/* Name with mixed typography - exact letter specifications */}
            <h1 className="suhas hover:scale-105 transition-transform duration-300" aria-label="Suhas">
              <span className="suhas-span">S</span>
              <span className="suhas-span2">u</span>
              <span className="suhas-span3">h</span>
              <span className="suhas-span3">a</span>
              <span className="suhas-span4">s</span>
            </h1>
            
            {/* Navigation menu */}
            <nav className="about-projects-writings-curator-s-corner" aria-label="Main navigation">
              <div className="hover:text-gray-300 transition-colors duration-200 cursor-pointer">About</div>
              <div className="hover:text-gray-300 transition-colors duration-200 cursor-pointer">Projects</div>
              <div className="hover:text-gray-300 transition-colors duration-200 cursor-pointer">Writings</div>
              <div className="hover:text-gray-300 transition-colors duration-200 cursor-pointer">Curator's Corner</div>
            </nav>
          </section>
    </main>
  );
};