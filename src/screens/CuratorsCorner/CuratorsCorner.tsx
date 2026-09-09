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
            <h2 className="text-4xl font-semibold mb-12" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
              In Progress...
            </h2>
          </div>
        </div>
      </div>
      
      {/* Mobile Content */}
      <div className="md:hidden px-6 pt-8">
        <div className="max-w-lg mx-auto text-white">
          <h2 className="text-2xl font-semibold tracking-tight mb-6" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
            Curator's Corner
          </h2>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
            <h3 className="text-xl font-semibold mb-2 text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
              In Progress...
            </h3>
            <p className="text-white/60 text-sm" style={{ fontFamily: 'Gilroy-Regular, sans-serif' }}>
              Curating amazing content for you.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};