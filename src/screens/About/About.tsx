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
      <div className="absolute top-1/2 left-[500px] right-[50px] transform -translate-y-1/2 hidden md:block">
        <div className="max-w-3xl text-white font-['Gilroy-SemiBold',sans-serif]">
          <div className="text-lg font-normal leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
            <p className="mb-6">
              I like to <span className="font-semibold" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif', fontWeight: 600 }}>ask questions</span>. Basically <span className="font-semibold" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif', fontWeight: 600 }}>ask "why?"</span> about everything, <span className="font-semibold" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif', fontWeight: 600 }}>breaking it down to first principles</span>. I <span className="font-semibold" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif', fontWeight: 600 }}>read</span> widely, from <span className="font-semibold" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif', fontWeight: 600 }}>philosophy to physics</span>, and simplify complex ideas. I enjoy video games for <span className="font-semibold" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif', fontWeight: 600 }}>strategy, systems, and RPG elements.</span>
            </p>
            
            <p className="mb-6">
              I'm all-in on <span className="font-semibold" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif', fontWeight: 600 }}>AI/automation and massive-scale robotics. Zero-energy sustainable systems and the next frontier of flight & space travel</span> excite me.
            </p>
            
            <p>
              Lmk if you wanna geek out or building something epic.
            </p>
          </div>
        </div>
      </div>
      
      {/* Mobile Content */}
      <div className="md:hidden px-6 py-16 min-h-screen flex items-center">
        <div className="max-w-3xl text-white font-['Gilroy-SemiBold',sans-serif]">
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h1 className="text-3xl font-semibold mb-8 text-center" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
              About
            </h1>
            
            <div className="text-lg font-normal leading-relaxed space-y-6" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
            <p className="mb-6">
              I like to <span className="font-semibold" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif', fontWeight: 600 }}>ask questions</span>. Basically <span className="font-semibold" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif', fontWeight: 600 }}>ask "why?"</span> about everything, <span className="font-semibold" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif', fontWeight: 600 }}>breaking it down to first principles</span>. I <span className="font-semibold" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif', fontWeight: 600 }}>read</span> widely, from <span className="font-semibold" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif', fontWeight: 600 }}>philosophy to physics</span>, and simplify complex ideas. I enjoy video games for <span className="font-semibold" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif', fontWeight: 600 }}>strategy, systems, and RPG elements.</span>
            </p>
            
            <p className="mb-6">
              I'm all-in on <span className="font-semibold" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif', fontWeight: 600 }}>AI/automation and massive-scale robotics. Zero-energy sustainable systems and the next frontier of flight & space travel</span> excite me.
            </p>
            
            <p>
              Lmk if you wanna geek out or building something epic.
            </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};