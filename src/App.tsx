/*
 * Main App component with improved routing and transitions
 * - Smooth page transitions with fade effects
 * - Loading state management
 * - Consistent navigation experience
 * - Optimized performance with proper state handling
 */

"use client"

import React, { useState, useEffect } from "react";
import { Frame } from "./screens/Frame";
import { About } from "./screens/About";
import { Projects } from "./screens/Projects";
import { Writings } from "./screens/Writings";
import { CuratorsCorner } from "./screens/CuratorsCorner";
import { PageTransition } from "./components/ui/page-transition";

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = (page: string) => {
    if (page === currentPage) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 150);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'projects':
        return <Projects onNavigate={handleNavigate} />;
      case 'writings':
        return <Writings onNavigate={handleNavigate} />;
      case 'curators-corner':
        return <CuratorsCorner onNavigate={handleNavigate} />;
      default:
        return <Frame onNavigate={handleNavigate} />;
    }
  };

  return (
    <PageTransition isVisible={!isTransitioning}>
      {renderCurrentPage()}
    </PageTransition>
  );
};