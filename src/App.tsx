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
import { PostPage } from "./screens/Writings/PostPage";
import { CuratorsCorner } from "./screens/CuratorsCorner";
import { PageTransition } from "./components/ui/page-transition";

const POST_PATH_RE = /^\/writings\/([^/]+)\/?$/;

const HASH_TO_PAGE: Record<string, string> = {
  about: 'about',
  projects: 'projects',
  writings: 'writings',
  curator: 'curators-corner',
};

const PAGE_TO_HASH: Record<string, string> = {
  about: '#about',
  projects: '#projects',
  writings: '#writings',
  'curators-corner': '#curator',
};

const pageFromHash = (hash: string): string => {
  const key = hash.replace(/^#/, '');
  return HASH_TO_PAGE[key] ?? 'home';
};

export const App: React.FC = () => {
  const postSlug = window.location.pathname.match(POST_PATH_RE)?.[1];
  const [currentPage, setCurrentPage] = useState<string>(() => pageFromHash(window.location.hash));
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(pageFromHash(window.location.hash));
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    if (page === currentPage) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);

      const newHash = PAGE_TO_HASH[page] ?? '';
      const currentPath = window.location.pathname + window.location.search;
      history.replaceState(null, '', newHash ? `${currentPath}${newHash}` : currentPath);
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

  if (postSlug) {
    return <PostPage slug={postSlug} />;
  }

  return (
    <PageTransition isVisible={!isTransitioning}>
      {renderCurrentPage()}
    </PageTransition>
  );
};