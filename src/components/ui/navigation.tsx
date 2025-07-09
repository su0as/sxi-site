/*
 * Navigation component with hover effects and active page highlighting
 * - Individual clickable navigation items with underline hover effects
 * - Active page highlighting with underline
 * - Consistent styling with the main portfolio design
 */

"use client"

import React from "react";

interface NavigationProps {
  currentPage?: string;
  onNavigate: (page: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { key: 'about', label: 'About' },
    { key: 'projects', label: 'Projects' },
    { key: 'writings', label: 'Writings' },
    { key: 'curators-corner', label: "Curator's Corner" }
  ];

  return (
    <div className="about-projects-writings-curator-s-corner" aria-label="Main navigation">
      {navItems.map((item, index) => (
        <React.Fragment key={item.key}>
          <span
            className={`nav-item ${currentPage === item.key ? 'active' : ''}`}
            onClick={() => onNavigate(item.key)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onNavigate(item.key);
              }
            }}
            aria-label={`Navigate to ${item.label}`}
          >
            {item.label}
          </span>
          {index < navItems.length - 1 && <br />}
        </React.Fragment>
      ))}
    </div>
  );
};