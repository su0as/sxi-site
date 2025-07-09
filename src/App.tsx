/*
 * Main App component with routing system
 * - Manages navigation between different pages
 * - Maintains consistent layout and theming across all pages
 * - Handles page state and routing logic
 */

"use client"

import React, { useState } from "react";
import { Frame } from "./screens/Frame";
import { About } from "./screens/About";
import { Projects } from "./screens/Projects";
import { Writings } from "./screens/Writings";
import { CuratorsCorner } from "./screens/CuratorsCorner";

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
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

  return renderCurrentPage();
};