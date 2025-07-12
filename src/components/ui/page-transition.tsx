/*
 * Page transition wrapper component
 * - Smooth fade in/out transitions
 * - Consistent timing across all pages
 * - Prevents layout shift during transitions
 */

"use client"

import React, { useState, useEffect } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  isVisible: boolean;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children, isVisible }) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    } else {
      const timeout = setTimeout(() => {
        setShouldRender(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div 
      className={`transition-all duration-300 ease-in-out ${
        isVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-4'
      }`}
    >
      {children}
    </div>
  );
};