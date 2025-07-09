/*
 * Projects page component
 * - Uses PageLayout for consistent structure
 * - Shows "Projects" as active in navigation
 * - Placeholder content for projects information
 */

"use client"

import React from "react";
import { PageLayout } from "../../components/ui/page-layout";

interface ProjectsProps {
  onNavigate: (page: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
  return (
    <PageLayout currentPage="projects" onNavigate={onNavigate}>
      {/* Additional content specific to Projects page can be added here */}
    </PageLayout>
  );
};