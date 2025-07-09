/*
 * Curator's Corner page component
 * - Uses PageLayout for consistent structure
 * - Shows "Curator's Corner" as active in navigation
 * - Placeholder content for curator's corner information
 */

"use client"

import React from "react";
import { PageLayout } from "../../components/ui/page-layout";

interface CuratorsCornerProps {
  onNavigate: (page: string) => void;
}

export const CuratorsCorner: React.FC<CuratorsCornerProps> = ({ onNavigate }) => {
  return (
    <PageLayout currentPage="curators-corner" onNavigate={onNavigate}>
      {/* Additional content specific to Curator's Corner page can be added here */}
    </PageLayout>
  );
};