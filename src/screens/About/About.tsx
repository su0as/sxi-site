/*
 * About page component
 * - Uses PageLayout for consistent structure
 * - Shows "About" as active in navigation
 * - Placeholder content for about information
 */

"use client"

import React from "react";
import { PageLayout } from "../../components/ui/page-layout";

interface AboutProps {
  onNavigate: (page: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <PageLayout currentPage="about" onNavigate={onNavigate}>
      {/* Additional content specific to About page can be added here */}
    </PageLayout>
  );
};