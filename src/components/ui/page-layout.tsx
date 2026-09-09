/*
 * Updated page layout with smooth transitions
 * - Improved loading states and animations
 * - Smooth content transitions
 * - Better mobile experience
 * - Consistent timing across all interactions
 */

"use client"

import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Navigation } from "./navigation";
import { LoadingBar } from "./loading-bar";
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
  const [showContent, setShowContent] = useState(false);
  const [contentReady, setContentReady] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
    img.src = '/image copy copy.png';
  }, []);

  useEffect(() => {
    setContentReady(true);
  }, []);

  const handleLoadingComplete = () => {
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  const isLoading = (!imageLoaded && !imageError) || !contentReady;

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
      {/* Modern loading bar */}
      <LoadingBar 
        isLoading={isLoading} 
        onComplete={handleLoadingComplete}
      />

      {/* Content section with exact positioning */}
      <div
        className={`frame-2 absolute top-[276px] left-[166px] hidden md:block transition-all duration-500 ease-out ${showContent || imageError ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}
        aria-label="Portfolio content"
      >
        {/* Name with mixed typography - clickable to go home */}
        <h1
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
        </h1>

        {/* Professional identity line */}
        <p className="identity-line">
          Robotics &amp; AI engineer. MSc Robotics and Intelligent Systems, NTU Singapore.
        </p>

        {/* Navigation menu */}
        <Navigation currentPage={currentPage} onNavigate={onNavigate} />

        {/* Social / contact links */}
        <div className="contact-links">
          <div className="contact-links-row">
            <a
              href="https://x.com/suhasxi"
              target="_blank"
              rel="noopener noreferrer"
              className="you-can-find-me-on-x hover:scale-105 transition-transform duration-200"
              aria-label="Find Suhas on X (formerly Twitter)"
            >
              You can find me on X
            </a>
            <a
              href="/Suhas_Suren_CV.pdf"
              download
              className="contact-link"
              aria-label="Download Suhas's CV"
            >
              Download CV
            </a>
          </div>
          <a href="mailto:suh.as@icloud.com" className="contact-link" aria-label="Email Suhas">
            Email
          </a>
          <a
            href="https://github.com/su0as"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="Suhas on GitHub"
          >
            GitHub
          </a>
          <span
            className="contact-link is-placeholder"
            title="TODO: add LinkedIn URL"
            aria-disabled="true"
          >
            LinkedIn (link coming soon)
          </span>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden relative z-50 transition-all duration-500 ease-out ${showContent || imageError ? 'opacity-100' : 'opacity-0'}`} ref={menuRef}>
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
              
              {/* Social / contact links */}
              <div className="pt-3 border-t border-white/20 space-y-3">
                <a
                  href="https://x.com/suhasxi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white font-['Gilroy-SemiBold',sans-serif] text-lg hover:text-gray-300 transition-colors"
                >
                  You can find me on X
                </a>
                <a
                  href="/Suhas_Suren_CV.pdf"
                  download
                  className="block text-white font-['Gilroy-SemiBold',sans-serif] text-base hover:text-gray-300 transition-colors"
                >
                  Download CV
                </a>
                <a
                  href="mailto:suh.as@icloud.com"
                  className="block text-white font-['Gilroy-SemiBold',sans-serif] text-base hover:text-gray-300 transition-colors"
                >
                  Email
                </a>
                <a
                  href="https://github.com/su0as"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white font-['Gilroy-SemiBold',sans-serif] text-base hover:text-gray-300 transition-colors"
                >
                  GitHub
                </a>
                <span
                  className="block text-white/40 font-['Gilroy-SemiBold',sans-serif] text-base"
                  title="TODO: add LinkedIn URL"
                  aria-disabled="true"
                >
                  LinkedIn (link coming soon)
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Page Content */}
      <div className={`transition-all duration-300 ease-out ${showContent || imageError ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </main>
  );
};