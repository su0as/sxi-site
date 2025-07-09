/*
 * Writings page component
 * - Uses PageLayout for consistent structure
 * - Shows "Writings" as active in navigation
 * - Placeholder content for writings information
 */

"use client"

import React from "react";
import { PageLayout } from "../../components/ui/page-layout";

interface WritingsProps {
  onNavigate: (page: string) => void;
}

export const Writings: React.FC<WritingsProps> = ({ onNavigate }) => {
  return (
    <PageLayout currentPage="writings" onNavigate={onNavigate}>
      {/* Additional content specific to Writings page can be added here */}
    </PageLayout>
  );
};