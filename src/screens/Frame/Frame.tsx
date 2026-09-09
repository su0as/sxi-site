/*
 * Updated: Improved loading experience and smooth transitions
 * - Modern loading bar instead of spinning loader
 * - Smooth fade-in transitions for content
 * - Better performance with optimized image loading
 * - Maintained exact positioning and typography
 * - Enhanced user experience with professional loading states
 */

import React, { useState, useEffect } from "react";
import { Github, Mail, Linkedin, Download, X as XIcon } from "lucide-react";
import { Navigation } from "../../components/ui/navigation";
import { LoadingBar } from "../../components/ui/loading-bar";
import { MobileTabBar } from "../../components/ui/mobile-tab-bar";
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
        {/* Name with mixed typography - exact structure as specified */}
        <h1 className="suhas" aria-label="Suhas">
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

        {/* Navigation menu with line breaks as specified */}
        <Navigation onNavigate={onNavigate} />

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

      {/* Mobile Content - link-in-bio style hub */}
      <div className="md:hidden min-h-screen bg-gradient-to-b from-black/20 via-black/10 to-black/50 flex flex-col">
        <div
          className={`flex-1 flex flex-col items-center justify-center px-6 pt-16 pb-28 transition-all duration-500 ease-out ${showContent || imageError ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}
        >
          <div className="w-full max-w-sm mx-auto flex flex-col items-center text-center">
            {/* Wordmark */}
            <h1 className="suhas-mobile m-0 mb-4" aria-label="Suhas">
              <span className="text-white">
                <span className="font-['Alegreya',serif] font-medium italic text-6xl">S</span>
                <span className="font-['SwearDisplay',serif] italic text-5xl">u</span>
                <span className="font-['Marcellus',serif] text-5xl">h</span>
                <span className="font-['Marcellus',serif] text-5xl">a</span>
                <span className="font-['Silkscreen',monospace] text-4xl">s</span>
              </span>
            </h1>

            <p
              className="text-white/70 text-base leading-snug mb-7"
              style={{ fontFamily: 'Gilroy-Regular, sans-serif' }}
            >
              Robotics &amp; AI engineer.
              <br />
              MSc Robotics and Intelligent Systems, NTU Singapore.
            </p>

            {/* Social icon row */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <a
                href="https://x.com/suhasxi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suhas on X"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 active:scale-95 backdrop-blur-sm border border-white/15 text-white transition-all duration-200"
              >
                <XIcon size={18} />
              </a>
              <a
                href="https://github.com/su0as"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suhas on GitHub"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 active:scale-95 backdrop-blur-sm border border-white/15 text-white transition-all duration-200"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:suh.as@icloud.com"
                aria-label="Email Suhas"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 active:scale-95 backdrop-blur-sm border border-white/15 text-white transition-all duration-200"
              >
                <Mail size={18} />
              </a>
              <span
                aria-disabled="true"
                title="TODO: add LinkedIn URL"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/40"
              >
                <Linkedin size={18} />
              </span>
            </div>

            {/* Primary CTA */}
            <a
              href="/Suhas_Suren_CV.pdf"
              download
              className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-white text-black font-['Gilroy-SemiBold',sans-serif] text-base active:scale-[0.98] transition-all duration-200 shadow-xl"
            >
              <Download size={18} />
              Download CV
            </a>

            <p
              className="text-white/40 text-xs mt-6"
              style={{ fontFamily: 'Gilroy-Regular, sans-serif' }}
            >
              Tap a tab below to explore About, Projects, Writings &amp; Curator's Corner.
            </p>
          </div>
        </div>
      </div>

      <MobileTabBar currentPage="home" onNavigate={onNavigate} />
    </main>
  );
};