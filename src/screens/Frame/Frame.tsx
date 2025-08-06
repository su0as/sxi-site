/*
 * Updated: Improved loading experience and smooth transitions
 * - Modern loading bar instead of spinning loader
 * - Smooth fade-in transitions for content
 * - Better performance with optimized image loading
 * - Maintained exact positioning and typography
 * - Enhanced user experience with professional loading states
 */

import React, { useState, useEffect } from "react";
import { Navigation } from "../../components/ui/navigation";
import { LoadingBar } from "../../components/ui/loading-bar";
import "../../styles/fonts.css";

interface FrameProps {
  onNavigate: (page: string) => void;
}

export const Frame: React.FC<FrameProps> = ({ onNavigate }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
    img.src = '/imgbg.png';
  }, []);

  const handleLoadingComplete = () => {
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

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
      {/* Modern loading bar */}
      <LoadingBar 
        isLoading={!imageLoaded && !imageError} 
        onComplete={handleLoadingComplete}
      />

      {/* Content section with exact positioning */}
      <div 
        className={`frame-2 absolute top-[276px] left-[166px] hidden md:block transition-all duration-500 ease-out ${showContent || imageError ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}
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
        
        {/* Name with mixed typography - exact structure as specified */}
        <div className="suhas" aria-label="Suhas">
          <span>
            <span className="suhas-span">S</span>
            <span className="suhas-span2">u</span>
            <span className="suhas-span3">h</span>
            <span className="suhas-span3">a</span>
            <span className="suhas-span4">s</span>
          </span>
        </div>
        
        {/* Navigation menu with line breaks as specified */}
        <Navigation onNavigate={onNavigate} />
      </div>

      {/* Mobile Content */}
      <div className="md:hidden flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className={`transition-all duration-500 ease-out ${showContent || imageError ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <div className="mobile-content-container">
            {/* Mobile Suhas Name */}
            <div className="mobile-name-container">
              <div className="text-white flex items-baseline justify-center">
                <span className="suhas-span">S</span>
                <span className="suhas-span2">u</span>
                <span className="suhas-span3">h</span>
                <span className="suhas-span3">a</span>
                <span className="suhas-span4">s</span>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="space-y-4 mb-8">
              <button
                onClick={() => onNavigate('about')}
                className="mobile-nav-button"
              >
                About
              </button>
              <button
                onClick={() => onNavigate('projects')}
                className="mobile-nav-button"
              >
                Projects
              </button>
              <button
                onClick={() => onNavigate('writings')}
                className="mobile-nav-button"
              >
                Writings
              </button>
              <button
                onClick={() => onNavigate('curators-corner')}
                className="mobile-nav-button"
              >
                Curator's Corner
              </button>
            </div>
            
            {/* Mobile Social Link */}
            <a 
              href="https://x.com/suhasxi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mobile-social-link"
            >
              You can find me on X
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};