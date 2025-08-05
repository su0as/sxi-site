/*
 * Projects page component with detailed projects and works content
 * - Uses PageLayout for consistent structure
 * - Shows "Projects" as active in navigation
 * - Displays categorized projects with proper typography
 * - Inter font with semi-bold headings and regular descriptions
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
      {/* Desktop Content */}
      <div className="absolute top-[50px] left-[500px] right-[50px] bottom-[50px] overflow-y-auto hidden md:block">
        <div className="max-w-3xl text-white font-['Gilroy-SemiBold',sans-serif]">
          {/* Main Title */}
          <h1 className="text-4xl font-semibold mb-12 text-center" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
            Projects & Works
          </h1>

          {/* AI Ecosystem & Open-Source */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>AI Ecosystem & Open-Source</h2>
            
            <div className="mb-6 ml-6">
              <a 
                href="https://superhub.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl font-semibold mb-2 block hover:underline transition-all duration-200" 
                style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
              >
                Superhub.ai
              </a>
              <p className="text-base font-normal leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                AI prompts, projects, and reports to stay ahead.
              </p>
            </div>

            <div className="mb-6 ml-6">
              <a 
                href="https://github.com/su0as/LLM-chat-interface" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl font-semibold mb-2 block hover:underline transition-all duration-200" 
                style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
              >
                Open Source Perplexity
              </a>
              <p className="text-base font-normal leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                Custom AI chat interfaces for unique experiences.
              </p>
            </div>

            <div className="mb-6 ml-6">
              <a 
                href="https://github.com/su0as/LLMs-Web" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl font-semibold mb-2 block hover:underline transition-all duration-200" 
                style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
              >
                LLMs Web
              </a>
              <p className="text-base font-normal leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                Local AI model testing in-browser.
              </p>
            </div>
          </section>

          {/* AI-Powered Creative & Marketing */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>AI-Powered Creative & Marketing</h2>
            
            <div className="mb-6 ml-6">
              <a 
                href="https://crea-ai-labs.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl font-semibold mb-2 block hover:underline transition-all duration-200" 
                style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
              >
                Crea Labs
              </a>
              <p className="text-base font-normal leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                AI suite for visuals, designs (logos, posters), and dynamic content (text-to-video, avatars). Boost marketing with AI copywriting and social graphics—cost-effective and impactful.
              </p>
            </div>

            <div className="mb-6 ml-6">
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>LLMs Wrapped</h3>
              <p className="text-base font-normal leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                Spotify Wrapped-style summary of AI tools (ChatGPT, Gemini) to evaluate options fast.
              </p>
            </div>
          </section>

          {/* AI Agents for Automation */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>AI Agents for Automation</h2>
            
            <div className="mb-6 ml-6">
              <a 
                href="https://github.com/su0as/ai-outreach-agent" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl font-semibold mb-2 block hover:underline transition-all duration-200" 
                style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
              >
                AI Outreach Agent
              </a>
              <p className="text-base font-normal leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                Automates customer engagement and deal closures with NLP—scalable and efficient.
              </p>
            </div>

            <div className="mb-6 ml-6">
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>First Principles LLM</h3>
              <p className="text-base font-normal leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                Solves complex problems with actionable insights.
              </p>
            </div>

            <div className="mb-6 ml-6">
              <a 
                href="https://github.com/su0as/ai-chess-agent" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl font-semibold mb-2 block hover:underline transition-all duration-200" 
                style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
              >
                Chess AI Agent
              </a>
              <p className="text-base font-normal leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                Showcases our technical AI expertise.
              </p>
            </div>
          </section>

          {/* Manufacturing Solutions */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>Manufacturing Solutions</h2>
            
            <div className="mb-6 ml-6">
              <a 
                href="https://machina-aihub.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl font-semibold mb-2 block hover:underline transition-all duration-200" 
                style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
              >
                Machina
              </a>
              <p className="text-base font-normal leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                Alibaba alternative for Indian sourcing—competitive and fast.
              </p>
            </div>
          </section>

          {/* Productivity Tools */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>Productivity Tools</h2>
            
            <div className="mb-6 ml-6">
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>Notify</h3>
              <p className="text-base font-normal leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                Real-time keyword tracking via WhatsApp for trends and competitors.
              </p>
            </div>

            <div className="mb-6 ml-6">
              <a 
                href="https://retro-todo.pages.dev/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl font-semibold mb-2 block hover:underline transition-all duration-200" 
                style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
              >
                Retro Todo
              </a>
              <p className="text-base font-normal leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                Simple, auto-sync task management.
              </p>
            </div>

            <div className="mb-6 ml-6">
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>Notes AI</h3>
              <p className="text-base font-normal leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                AI-powered notes for organization and insights.
              </p>
            </div>
          </section>

          {/* Niche Projects */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>Niche Projects</h2>
            
            <div className="mb-6 ml-6">
              <a 
                href="https://kardashevscale.co/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl font-semibold mb-2 block hover:underline transition-all duration-200" 
                style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
              >
                Kardashevscale.co
              </a>
              <p className="text-base font-normal leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                Real-time Kardashev Scale tracker for innovation fans.
              </p>
            </div>

            <div className="mb-6 ml-6">
              <a 
                href="https://crackedaf.co/new" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl font-semibold mb-2 block hover:underline transition-all duration-200" 
                style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
              >
                Crackedaf.co
              </a>
              <p className="text-base font-normal leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                Platform for unconventional, creative ideas.
              </p>
            </div>
          </section>
        </div>
      </div>
      
      {/* Mobile Content */}
      <div className="md:hidden px-6 py-8 overflow-y-auto max-h-screen">
        <div className="max-w-3xl text-white font-['Gilroy-SemiBold',sans-serif]">
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            {/* Main Title */}
            <h1 className="text-3xl font-semibold mb-8 text-center" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
              Projects & Works
            </h1>

            {/* AI Ecosystem & Open-Source */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-white/20" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>AI Ecosystem & Open-Source</h2>
            
              <div className="space-y-4 ml-4">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <a 
                    href="https://superhub.ai/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-2 block hover:underline transition-all duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    Superhub.ai
                  </a>
                  <p className="text-sm font-normal leading-relaxed text-gray-300" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    AI prompts, projects, and reports to stay ahead.
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <a 
                    href="https://github.com/su0as/LLM-chat-interface" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-2 block hover:underline transition-all duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    Open Source Perplexity
                  </a>
                  <p className="text-sm font-normal leading-relaxed text-gray-300" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Custom AI chat interfaces for unique experiences.
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <a 
                    href="https://github.com/su0as/LLMs-Web" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-2 block hover:underline transition-all duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    LLMs Web
                  </a>
                  <p className="text-sm font-normal leading-relaxed text-gray-300" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Local AI model testing in-browser.
                  </p>
                </div>
              </div>
            </section>

            {/* AI-Powered Creative & Marketing */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-white/20" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>AI-Powered Creative & Marketing</h2>
            
              <div className="space-y-4 ml-4">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <a 
                    href="https://crea-ai-labs.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-2 block hover:underline transition-all duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    Crea Labs
                  </a>
                  <p className="text-sm font-normal leading-relaxed text-gray-300" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    AI suite for visuals, designs (logos, posters), and dynamic content (text-to-video, avatars). Boost marketing with AI copywriting and social graphics—cost-effective and impactful.
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>LLMs Wrapped</h3>
                  <p className="text-sm font-normal leading-relaxed text-gray-300" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Spotify Wrapped-style summary of AI tools (ChatGPT, Gemini) to evaluate options fast.
                  </p>
                </div>
              </div>
            </section>

            {/* AI Agents for Automation */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-white/20" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>AI Agents for Automation</h2>
            
              <div className="space-y-4 ml-4">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <a 
                    href="https://github.com/su0as/ai-outreach-agent" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-2 block hover:underline transition-all duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    AI Outreach Agent
                  </a>
                  <p className="text-sm font-normal leading-relaxed text-gray-300" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Automates customer engagement and deal closures with NLP—scalable and efficient.
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>First Principles LLM</h3>
                  <p className="text-sm font-normal leading-relaxed text-gray-300" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Solves complex problems with actionable insights.
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <a 
                    href="https://github.com/su0as/ai-chess-agent" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-2 block hover:underline transition-all duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    Chess AI Agent
                  </a>
                  <p className="text-sm font-normal leading-relaxed text-gray-300" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Showcases our technical AI expertise.
                  </p>
                </div>
              </div>
            </section>

            {/* Manufacturing Solutions */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-white/20" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>Manufacturing Solutions</h2>
            
              <div className="space-y-4 ml-4">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <a 
                    href="https://machina-aihub.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-2 block hover:underline transition-all duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    Machina
                  </a>
                  <p className="text-sm font-normal leading-relaxed text-gray-300" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Alibaba alternative for Indian sourcing—competitive and fast.
                  </p>
                </div>
              </div>
            </section>

            {/* Productivity Tools */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-white/20" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>Productivity Tools</h2>
            
              <div className="space-y-4 ml-4">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>Notify</h3>
                  <p className="text-sm font-normal leading-relaxed text-gray-300" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Real-time keyword tracking via WhatsApp for trends and competitors.
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <a 
                    href="https://retro-todo.pages.dev/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-2 block hover:underline transition-all duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    Retro Todo
                  </a>
                  <p className="text-sm font-normal leading-relaxed text-gray-300" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Simple, auto-sync task management.
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>Notes AI</h3>
                  <p className="text-sm font-normal leading-relaxed text-gray-300" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    AI-powered notes for organization and insights.
                  </p>
                </div>
              </div>
            </section>

            {/* Niche Projects */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-white/20" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>Niche Projects</h2>
            
              <div className="space-y-4 ml-4">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <a 
                    href="https://kardashevscale.co/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-2 block hover:underline transition-all duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    Kardashevscale.co
                  </a>
                  <p className="text-sm font-normal leading-relaxed text-gray-300" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Real-time Kardashev Scale tracker for innovation fans.
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <a 
                    href="https://crackedaf.co/new" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-2 block hover:underline transition-all duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    Crackedaf.co
                  </a>
                  <p className="text-sm font-normal leading-relaxed text-gray-300" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Platform for unconventional, creative ideas.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};