/*
 * Navigation component with exact positioning and hover effects
 * - Maintains original text positioning and alignment specifications
 * - Adds hover underline effects for individual navigation items
 * - Preserves exact CSS structure and layout
 */

"use client"

import React from "react";

interface NavigationProps {
  onNavigate: (page: string) => void;
  currentPage?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ onNavigate, currentPage }) => {
  const handleNavClick = (page: string, event: React.MouseEvent) => {
    event.preventDefault();
    onNavigate(page);
  };

  const handleKeyDown = (page: string, event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onNavigate(page);
    }
  };

  return (
    <div className="about-projects-writings-curator-s-corner" aria-label="Main navigation">
      <span 
        className={`nav-item ${currentPage === 'about' ? 'active' : ''}`}
        onClick={(e) => handleNavClick('about', e)}
        onKeyDown={(e) => handleKeyDown('about', e)}
        tabIndex={0}
        role="button"
        aria-label="Navigate to About page"
      >
        About
      </span>
      <br />
      <span 
        className={`nav-item ${currentPage === 'projects' ? 'active' : ''}`}
        onClick={(e) => handleNavClick('projects', e)}
        onKeyDown={(e) => handleKeyDown('projects', e)}
        tabIndex={0}
        role="button"
        aria-label="Navigate to Projects page"
      >
        Projects
      </span>
      <br />
      <span 
        className={`nav-item ${currentPage === 'writings' ? 'active' : ''}`}
        onClick={(e) => handleNavClick('writings', e)}
        onKeyDown={(e) => handleKeyDown('writings', e)}
        tabIndex={0}
        role="button"
        aria-label="Navigate to Writings page"
      >
        Writings
      </span>
      <br />
      <span 
        className={`nav-item ${currentPage === 'curators-corner' ? 'active' : ''}`}
        onClick={(e) => handleNavClick('curators-corner', e)}
        onKeyDown={(e) => handleKeyDown('curators-corner', e)}
        tabIndex={0}
        role="button"
        aria-label="Navigate to Curator's Corner page"
      >
        Curator's Corner
      </span>
    </div>
  );
};