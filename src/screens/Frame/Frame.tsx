/*
 * Updated: Fixed Suhas name styling with exact font specifications and added space background
 * - S: Alegreya Medium Italic, 64px, uppercase
 * - u: SwearDisplay Italic, 48px
 * - h: Marcellus Regular, 48px
 * - a: Marcellus Regular, 48px
 * - s: Silkscreen Regular, 40px
 * - Added space background image (imgbg.png)
 * - Removed old screenshot and bookmarks images
 */

import React from "react";
import "../../styles/fonts.css";

export const Frame = (): JSX.Element => {
  return (
    <div 
      className="w-full min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url(/imgbg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Content section with responsive positioning */}
      <div className="frame-2 absolute top-[276px] left-[166px]">
            {/* Social media text */}
            <a 
              href="https://x.com/suhasxi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="you-can-find-me-on-x"
            >
              You can find me on X
            </a>
            
            {/* Name with mixed typography - exact letter specifications */}
            <div className="suhas">
              <span className="suhas-span">S</span>
              <span className="suhas-span2">u</span>
              <span className="suhas-span3">h</span>
              <span className="suhas-span3">a</span>
              <span className="suhas-span4">s</span>
            </div>
            
            {/* Navigation menu */}
            <div className="about-projects-writings-curator-s-corner">
              About<br />
              Projects<br />
              Writings<br />
              Curator's Corner
            </div>
          </div>
    </div>
  );
};