/*
 * Navigation component with exact original positioning
 * - Maintains original line breaks and spacing
 * - Adds hover effects and click functionality
 * - Preserves exact CSS structure and positioning
 */

"use client"

import React from "react";

interface NavigationProps {
  onNavigate: (page: string) => void;
  currentPage?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ onNavigate, currentPage = 'home' }) => {
  return (
    <div className="about-projects-writings-curator-s-corner" aria-label="Main navigation">
      <span 
        className={`nav-item ${currentPage === 'about' ? 'active' : ''}`}
        onClick={() => onNavigate('about')}
      >
        About
      </span>
      <br />
      <span 
        className={`nav-item ${currentPage === 'projects' ? 'active' : ''}`}
        onClick={() => onNavigate('projects')}
      >
        Projects
      </span>
      <br />
      <span 
        className={`nav-item ${currentPage === 'writings' ? 'active' : ''}`}
        onClick={() => onNavigate('writings')}
      >
        Writings
      </span>
      <br />
      <span 
        className={`nav-item ${currentPage === 'curators-corner' ? 'active' : ''}`}
        onClick={() => onNavigate('curators-corner')}
      >
        Curator's Corner
      </span>
    </div>
  );
};