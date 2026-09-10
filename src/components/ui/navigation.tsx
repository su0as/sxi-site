/*
 * Navigation component with vertical stacking layout
 * - Items displayed one below the other as separate clickable elements
 * - Maintains exact positioning and spacing from original design
 * - Added hover effects and active state highlighting
 * - Proper vertical alignment and spacing between navigation items
 */

"use client"

import React from "react";

interface NavigationProps {
  onNavigate: (page: string) => void;
  currentPage?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ onNavigate, currentPage = 'home' }) => {
  const navigationItems = [
    { key: 'about', label: 'About' },
    { key: 'projects', label: 'Projects' },
    { key: 'writings', label: 'Writings' }
  ];

  return (
    <div className="about-projects-writings-curator-s-corner">
      {navigationItems.map((item, index) => (
        <div key={item.key}>
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
          {index < navigationItems.length - 1 && <br />}
        </div>
      ))}
    </div>
  );
};