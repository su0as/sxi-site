/*
 * Updated page layout with smooth transitions
 * - Improved loading states and animations
 * - Smooth content transitions
 * - Better mobile experience
 * - Consistent timing across all interactions
 */

"use client"

import React, { useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { LoadingBar } from "./loading-bar";
import { MobileTabBar } from "./mobile-tab-bar";
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
          Robotics &amp; AI engineer.
          <br />
          MSc Robotics and Intelligent Systems, NTU Singapore.
        </p>

        {/* Navigation menu */}
        <Navigation currentPage={currentPage} onNavigate={onNavigate} />

        {/* Social / contact links */}
        <div className="contact-links">
          <a
            href="https://x.com/suhasxi"
            target="_blank"
            rel="noopener noreferrer"
            className="you-can-find-me-on-x hover:scale-105 transition-transform duration-200"
            aria-label="Find Suhas on X (formerly Twitter)"
          >
            You can find me on X
          </a>
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
          <a
            href="/Suhas_Suren_CV.pdf"
            download
            className="contact-link"
            aria-label="Download Suhas's CV"
          >
            Download CV
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

      {/* Mobile top bar - compact wordmark, tap to go home */}
      <div
        className={`md:hidden sticky top-0 z-30 flex items-center bg-black/40 backdrop-blur-md border-b border-white/10 px-6 py-3 transition-opacity duration-500 ease-out ${showContent || imageError ? 'opacity-100' : 'opacity-0'}`}
      >
        <button
          onClick={handleSuhasClick}
          className="suhas-mobile-compact flex items-baseline gap-px"
          aria-label="Suhas - go to home"
        >
          <span className="font-['Alegreya',serif] font-medium italic text-2xl text-white">S</span>
          <span className="font-['SwearDisplay',serif] italic text-xl text-white">u</span>
          <span className="font-['Marcellus',serif] text-xl text-white">h</span>
          <span className="font-['Marcellus',serif] text-xl text-white">a</span>
          <span className="font-['Silkscreen',monospace] text-lg text-white">s</span>
        </button>
      </div>

      {/* Page Content */}
      <div
        className={`pb-24 md:pb-0 transition-all duration-300 ease-out ${showContent || imageError ? 'opacity-100' : 'opacity-0'}`}
      >
        {children}
      </div>

      <MobileTabBar currentPage={currentPage} onNavigate={onNavigate} />
    </main>
  );
};