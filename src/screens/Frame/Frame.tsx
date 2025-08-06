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
      <div className="md:hidden min-h-screen bg-gradient-to-br from-black/40 via-black/60 to-black/80 backdrop-blur-md">
        <div className="px-6 py-8 overflow-y-auto max-h-screen">
          <div className="max-w-lg mx-auto text-white">
            <div className={`transition-all duration-500 ease-out ${showContent || imageError ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
              
              {/* Enhanced Header with Icon */}
              <div className="text-center mb-12 pt-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl mb-6 border border-white/10 shadow-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl"></div>
                </div>
                
                {/* Mobile Suhas Name with enhanced styling */}
                <div className="suhas-mobile mb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
                    <span className="text-white">
                      <span className="font-['Alegreya',serif] font-medium italic text-5xl">S</span>
                      <span className="font-['SwearDisplay',serif] italic text-4xl">u</span>
                      <span className="font-['Marcellus',serif] text-4xl">h</span>
                      <span className="font-['Marcellus',serif] text-4xl">a</span>
                      <span className="font-['Silkscreen',monospace] text-3xl">s</span>
                    </span>
                  </div>
                </div>
                
                <p className="text-white/60 text-sm mb-2" style={{ fontFamily: 'Gilroy-Regular, sans-serif' }}>
                  Portfolio & Creative Works
                </p>
                <div className="w-16 h-0.5 bg-white/30 mx-auto"></div>
              </div>

              {/* Enhanced Navigation Cards */}
              <div className="space-y-4 mb-10">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-1 border border-white/20 shadow-xl">
                  <button
                    onClick={() => onNavigate('about')}
                    className="w-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 rounded-xl p-4 text-white font-['Gilroy-SemiBold',sans-serif] text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-white/10 hover:border-white/30"
                  >
                    <div className="flex items-center justify-between">
                      <span>About</span>
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                    </div>
                  </button>
                </div>
                
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-1 border border-white/20 shadow-xl">
                  <button
                    onClick={() => onNavigate('projects')}
                    className="w-full bg-gradient-to-r from-green-500/10 to-teal-500/10 hover:from-green-500/20 hover:to-teal-500/20 rounded-xl p-4 text-white font-['Gilroy-SemiBold',sans-serif] text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-white/10 hover:border-white/30"
                  >
                    <div className="flex items-center justify-between">
                      <span>Projects</span>
                      <div className="w-2 h-2 bg-gradient-to-r from-green-100 to-teal-100 rounded-full"></div>
                    </div>
                  </button>
                </div>
                
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-1 border border-white/20 shadow-xl">
                  <button
                    onClick={() => onNavigate('writings')}
                    className="w-full bg-gradient-to-r from-orange-500/10 to-red-500/10 hover:from-orange-500/20 hover:to-red-500/20 rounded-xl p-4 text-white font-['Gilroy-SemiBold',sans-serif] text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-white/10 hover:border-white/30"
                  >
                    <div className="flex items-center justify-between">
                      <span>Writings</span>
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
                    </div>
                  </button>
                </div>
                
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-1 border border-white/20 shadow-xl">
                  <button
                    onClick={() => onNavigate('curators-corner')}
                    className="w-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 rounded-xl p-4 text-white font-['Gilroy-SemiBold',sans-serif] text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-white/10 hover:border-white/30"
                  >
                    <div className="flex items-center justify-between">
                      <span>Curator's Corner</span>
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Enhanced Social Link Card */}
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl mb-4 border border-white/10">
                    <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-md"></div>
                  </div>
                  <a 
                    href="https://x.com/suhasxi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white font-['Gilroy-SemiBold',sans-serif] text-lg hover:text-blue-300 transition-colors duration-300 block"
                  >
                    You can find me on X
                  </a>
                  <p className="text-white/60 text-sm mt-2" style={{ fontFamily: 'Gilroy-Regular, sans-serif' }}>
                    Connect with me on social media
                  </p>
                </div>
              </div>

              {/* Bottom spacing */}
              <div className="h-8"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};