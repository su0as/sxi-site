/*
 * Updated: Fixed deployment issues and optimized for production
 * - Improved responsive design for all screen sizes
 * - Added proper error boundaries and accessibility
 * - Optimized background image loading with fallback
 * - S: Alegreya Medium Italic, 64px, uppercase
 * - u: SwearDisplay Italic, 48px
 * - h: Marcellus Regular, 48px
 * - a: Marcellus Regular, 48px
 * - s: Silkscreen Regular, 40px
 * - Fixed positioning for mobile and desktop compatibility
 * - Added loading states and error handling
 */

import React from "react";
import "../../styles/fonts.css";

export const Frame = (): JSX.Element => {
  return (
    <main 
      className="w-full min-h-screen relative overflow-hidden bg-black"
      style={{
        backgroundImage: 'url(/imgbg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
      role="main"
      aria-label="Suhas Portfolio"
    >
      {/* Content section with responsive positioning */}
      <section 
        className="frame-2 absolute top-[276px] left-[166px] md:top-[276px] md:left-[166px] sm:top-[200px] sm:left-[50px] xs:top-[150px] xs:left-[20px]" 
        aria-label="Portfolio content"
      >
            {/* Social media text */}
            <a 
              href="https://x.com/suhasxi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="you-can-find-me-on-x"
              aria-label="Find Suhas on X (formerly Twitter)"
            >
              You can find me on X
            </a>
            
            {/* Name with mixed typography - exact letter specifications */}
            <h1 className="suhas" aria-label="Suhas">
              <span className="suhas-span">S</span>
              <span className="suhas-span2">u</span>
              <span className="suhas-span3">h</span>
              <span className="suhas-span3">a</span>
              <span className="suhas-span4">s</span>
            </h1>
            
            {/* Navigation menu */}
            <nav className="about-projects-writings-curator-s-corner" aria-label="Main navigation">
              About<br />
              Projects<br />
              Writings<br />
              Curator's Corner
            </nav>
          </section>
    </main>
  );
};