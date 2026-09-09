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
      <div className="md:hidden min-h-screen bg-gradient-to-br from-black/40 via-black/60 to-black/80 backdrop-blur-md">
        <div className="px-6 py-8 overflow-y-auto max-h-screen">
          <div className="max-w-lg mx-auto text-white">
            {/* Enhanced Header */}
            <div className="text-center mb-10 pt-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl mb-4 border border-white/10">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg"></div>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight mb-2" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                Curator's Corner
              </h2>
              <p className="text-sm text-white/60" style={{ fontFamily: 'Gilroy-Regular, sans-serif' }}>
                Curated discoveries and insights
              </p>
              <div className="w-16 h-0.5 bg-white/30 mx-auto mt-4"></div>
            </div>

            {/* Content Card */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-xl mb-6 border border-white/10">
                  <div className="w-6 h-6 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-md"></div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                  In Progress...
                </h3>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'Gilroy-Regular, sans-serif' }}>
                  Curating amazing content for you
                </p>
              </div>
            </div>

            {/* Bottom spacing */}
            <div className="h-8"></div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};