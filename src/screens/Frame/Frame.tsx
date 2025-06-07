/*
 * Updated: Fixed deployment issues while preserving original design
 * - Kept original positioning and layout exactly as before
 * - Only added production optimizations without changing visual design
 * - S: Alegreya Medium Italic, 64px, uppercase
 * - u: SwearDisplay Italic, 48px
 * - h: Marcellus Regular, 48px
 * - a: Marcellus Regular, 48px
 * - s: Silkscreen Regular, 40px
 * - Original space background image (imgbg.png)
 * - Optimized for production with proper SEO and accessibility
 */

import React from "react";
import "../../styles/fonts.css";

export const Frame = (): JSX.Element => {
  return (
    <main 
      className="w-full min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url(/imgbg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      role="main"
      aria-label="Suhas Portfolio"
    >
      {/* Content section with original positioning */}
      <section className="frame-2 absolute top-[276px] left-[166px]" aria-label="Portfolio content">
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