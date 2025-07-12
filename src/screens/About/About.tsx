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
      <div className="absolute top-[50px] left-[500px] right-[50px] bottom-[50px] overflow-y-auto">
        <div className="max-w-3xl text-white font-['Gilroy-SemiBold',sans-serif]">
          <div className="text-lg font-normal leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
            <p className="mb-6">
              I like to ask questions. Basically ask "why?" about everything, breaking it down to first principles. I read widely, from philosophy to physics, and simplify complex ideas. I enjoy video games for strategy, systems, and RPG elements.
            </p>
            
            <p className="mb-6">
              I'm all-in on AI/automation and massive-scale robotics. Zero-energy sustainable systems and the next frontier of flight & space travel excite me.
            </p>
            
            <p>
              Lmk if you wanna geek out or building something epic.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};