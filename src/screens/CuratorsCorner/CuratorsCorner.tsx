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
      {/* Desktop Content */}
      <div className="absolute top-1/2 left-[500px] right-[50px] transform -translate-y-1/2 hidden md:block">
        <div className="max-w-3xl text-white font-['Gilroy-SemiBold',sans-serif]">
          <div className="text-center">
            <h1 className="text-4xl font-semibold mb-12" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
              In Progress...
            </h1>
          </div>
        </div>
      </div>
      
      {/* Mobile Content */}
      <div className="md:hidden flex items-center justify-center min-h-screen px-6">
        <div className="max-w-3xl text-white font-['Gilroy-SemiBold',sans-serif]">
          <div className="text-center bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h1 className="text-2xl font-semibold" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
              In Progress...
            </h1>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};