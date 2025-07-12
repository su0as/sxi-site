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
      <div className="absolute top-[50px] left-[500px] right-[50px] bottom-[50px] overflow-y-auto">
        <div className="max-w-3xl text-white font-['Gilroy-SemiBold',sans-serif]">
          <div className="text-center">
            <h1 className="text-4xl font-semibold mb-12" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
              In Progress...
            </h1>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};