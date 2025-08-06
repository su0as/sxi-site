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
                href="https://svaraai.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl font-semibold mb-2 block hover:underline transition-all duration-200" 
                style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
              >
                Svara - AI Notes App
              </a>
              <p className="text-base font-normal leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                Minimalist writing and reflection app designed to help users capture their thoughts through timed freewriting. It then provides AI-powered insights and pattern recognition to deepen understanding and foster clarity.
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

      <div className="md:hidden min-h-screen bg-gradient-to-b from-black/40 via-black/20 to-black/40 backdrop-blur-sm">
        <div className="px-5 py-8 overflow-y-auto max-h-screen">
          <div className="max-w-sm mx-auto">
            {/* Main Title with enhanced styling */}
            <div className="text-center mb-12 pt-6">
              <h1 className="text-3xl font-semibold tracking-tight text-white mb-4" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                Projects & Works
              </h1>
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto"></div>
            </div>

            {/* AI Ecosystem & Open-Source */}
            <div className="mb-12">
              <div className="flex items-center mb-8">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                <h2 className="text-lg font-semibold text-white/95" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                  AI Ecosystem & Open-Source
                </h2>
              </div>
              
              <div className="space-y-5">
                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <a 
                    href="https://superhub.ai/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-3 block text-white group-hover:text-blue-300 transition-colors duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    Superhub.ai
                  </a>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    AI prompts, projects, and reports to stay ahead.
                  </p>
                </div>

                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <a 
                    href="https://svaraai.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-3 block text-white group-hover:text-blue-300 transition-colors duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    Svara - AI Notes App
                  </a>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Minimalist writing and reflection app designed to help users capture their thoughts through timed freewriting. It then provides AI-powered insights and pattern recognition to deepen understanding and foster clarity.
                  </p>
                </div>

                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <a 
                    href="https://github.com/su0as/LLM-chat-interface" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-3 block text-white group-hover:text-blue-300 transition-colors duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    Open Source Perplexity
                  </a>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Custom AI chat interfaces for unique experiences.
                  </p>
                </div>

                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <a 
                    href="https://github.com/su0as/LLMs-Web" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-3 block text-white group-hover:text-blue-300 transition-colors duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    LLMs Web
                  </a>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Local AI model testing in-browser.
                  </p>
                </div>
              </div>
            </div>

            {/* AI-Powered Creative & Marketing */}
            <div className="mb-12">
              <div className="flex items-center mb-8">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                <h2 className="text-lg font-semibold text-white/95" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                  AI-Powered Creative & Marketing
                </h2>
              </div>
              
              <div className="space-y-5">
                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <a 
                    href="https://crea-ai-labs.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-3 block text-white group-hover:text-blue-300 transition-colors duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    Crea Labs
                  </a>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    AI suite for visuals, designs (logos, posters), and dynamic content (text-to-video, avatars). Boost marketing with AI copywriting and social graphics—cost-effective and impactful.
                  </p>
                </div>

                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-white/95 transition-colors duration-200" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                    LLMs Wrapped
                  </h3>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Spotify Wrapped-style summary of AI tools (ChatGPT, Gemini) to evaluate options fast.
                  </p>
                </div>
              </div>
            </div>

            {/* AI Agents for Automation */}
            <div className="mb-12">
              <div className="flex items-center mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <h2 className="text-lg font-semibold text-white/95" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                  AI Agents for Automation
                </h2>
              </div>
              
              <div className="space-y-5">
                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <a 
                    href="https://github.com/su0as/ai-outreach-agent" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-3 block text-white group-hover:text-blue-300 transition-colors duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    AI Outreach Agent
                  </a>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Automates customer engagement and deal closures with NLP—scalable and efficient.
                  </p>
                </div>

                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-white/95 transition-colors duration-200" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                    First Principles LLM
                  </h3>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Solves complex problems with actionable insights.
                  </p>
                </div>

                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <a 
                    href="https://github.com/su0as/ai-chess-agent" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-3 block text-white group-hover:text-blue-300 transition-colors duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    Chess AI Agent
                  </a>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Showcases our technical AI expertise.
                  </p>
                </div>
              </div>
            </div>

            {/* Manufacturing Solutions */}
            <div className="mb-12">
              <div className="flex items-center mb-8">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 animate-pulse"></div>
                <h2 className="text-lg font-semibold text-white/95" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                  Manufacturing Solutions
                </h2>
              </div>
              
              <div className="space-y-5">
                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <a 
                    href="https://machina-aihub.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-3 block text-white group-hover:text-blue-300 transition-colors duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    Machina
                  </a>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Alibaba alternative for Indian sourcing—competitive and fast.
                  </p>
                </div>
              </div>
            </div>

            {/* Productivity Tools */}
            <div className="mb-12">
              <div className="flex items-center mb-8">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                <h2 className="text-lg font-semibold text-white/95" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                  Productivity Tools
                </h2>
              </div>
              
              <div className="space-y-5">
                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-white/95 transition-colors duration-200" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                    Notify
                  </h3>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Real-time keyword tracking via WhatsApp for trends and competitors.
                  </p>
                </div>

                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <a 
                    href="https://retro-todo.pages.dev/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-3 block text-white group-hover:text-blue-300 transition-colors duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    Retro Todo
                  </a>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Simple, auto-sync task management.
                  </p>
                </div>

                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-white/95 transition-colors duration-200" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                    Notes AI
                  </h3>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    AI-powered notes for organization and insights.
                  </p>
                </div>
              </div>
            </div>

            {/* Niche Projects */}
            <div className="mb-12">
              <div className="flex items-center mb-8">
                <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 animate-pulse"></div>
                <h2 className="text-lg font-semibold text-white/95" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                  Niche Projects
                </h2>
              </div>
              
              <div className="space-y-5">
                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <a 
                    href="https://kardashevscale.co/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-3 block text-white group-hover:text-blue-300 transition-colors duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    Kardashevscale.co
                  </a>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Real-time Kardashev Scale tracker for innovation fans.
                  </p>
                </div>

                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <a 
                    href="https://crackedaf.co/new" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-3 block text-white group-hover:text-blue-300 transition-colors duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    Crackedaf.co
                  </a>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Platform for unconventional, creative ideas.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom spacing for scroll comfort */}
            <div className="h-12"></div>
          </div>
        </div>
      </div>

      {/* Mobile Content */}
      <div className="md:hidden min-h-screen bg-gradient-to-b from-black/40 via-black/20 to-black/40 backdrop-blur-sm">
        <div className="px-5 py-8 overflow-y-auto max-h-screen">
          <div className="max-w-sm mx-auto">
            {/* Main Title with enhanced styling */}
            <div className="text-center mb-12 pt-6">
              <h1 className="text-3xl font-semibold tracking-tight text-white mb-4" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                Projects & Works
              </h1>
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto"></div>
            </div>

            {/* AI Ecosystem & Open-Source */}
            <div className="mb-12">
              <div className="flex items-center mb-8">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                <h2 className="text-lg font-semibold text-white/95" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                  AI Ecosystem & Open-Source
                </h2>
              </div>
              
              <div className="space-y-5">
                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <a 
                    href="https://superhub.ai/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-3 block text-white group-hover:text-blue-300 transition-colors duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    Superhub.ai
                  </a>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    AI prompts, projects, and reports to stay ahead.
                  </p>
                </div>

                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <a 
                    href="https://svaraai.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-3 block text-white group-hover:text-blue-300 transition-colors duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    Svara - AI Notes App
                  </a>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Minimalist writing and reflection app designed to help users capture their thoughts through timed freewriting. It then provides AI-powered insights and pattern recognition to deepen understanding and foster clarity.
                  </p>
                </div>

                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <a 
                    href="https://github.com/su0as/LLM-chat-interface" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-3 block text-white group-hover:text-blue-300 transition-colors duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    Open Source Perplexity
                  </a>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Custom AI chat interfaces for unique experiences.
                  </p>
                </div>

                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <a 
                    href="https://github.com/su0as/LLMs-Web" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-3 block text-white group-hover:text-blue-300 transition-colors duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    LLMs Web
                  </a>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Local AI model testing in-browser.
                  </p>
                </div>
              </div>
            </div>

            {/* AI-Powered Creative & Marketing */}
            <div className="mb-12">
              <div className="flex items-center mb-8">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                <h2 className="text-lg font-semibold text-white/95" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                  AI-Powered Creative & Marketing
                </h2>
              </div>
              
              <div className="space-y-5">
                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <a 
                    href="https://crea-ai-labs.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-3 block text-white group-hover:text-blue-300 transition-colors duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    Crea Labs
                  </a>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    AI suite for visuals, designs (logos, posters), and dynamic content (text-to-video, avatars). Boost marketing with AI copywriting and social graphics—cost-effective and impactful.
                  </p>
                </div>

                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-white/95 transition-colors duration-200" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                    LLMs Wrapped
                  </h3>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Spotify Wrapped-style summary of AI tools (ChatGPT, Gemini) to evaluate options fast.
                  </p>
                </div>
              </div>
            </div>

            {/* AI Agents for Automation */}
            <div className="mb-12">
              <div className="flex items-center mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <h2 className="text-lg font-semibold text-white/95" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                  AI Agents for Automation
                </h2>
              </div>
              
              <div className="space-y-5">
                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <a 
                    href="https://github.com/su0as/ai-outreach-agent" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-3 block text-white group-hover:text-blue-300 transition-colors duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    AI Outreach Agent
                  </a>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Automates customer engagement and deal closures with NLP—scalable and efficient.
                  </p>
                </div>

                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-white/95 transition-colors duration-200" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                    First Principles LLM
                  </h3>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Solves complex problems with actionable insights.
                  </p>
                </div>

                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <a 
                    href="https://github.com/su0as/ai-chess-agent" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-3 block text-white group-hover:text-blue-300 transition-colors duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    Chess AI Agent
                  </a>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Showcases our technical AI expertise.
                  </p>
                </div>
              </div>
            </div>

            {/* Manufacturing Solutions */}
            <div className="mb-12">
              <div className="flex items-center mb-8">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 animate-pulse"></div>
                <h2 className="text-lg font-semibold text-white/95" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                  Manufacturing Solutions
                </h2>
              </div>
              
              <div className="space-y-5">
                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <a 
                    href="https://machina-aihub.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-3 block text-white group-hover:text-blue-300 transition-colors duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    Machina
                  </a>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Alibaba alternative for Indian sourcing—competitive and fast.
                  </p>
                </div>
              </div>
            </div>

            {/* Productivity Tools */}
            <div className="mb-12">
              <div className="flex items-center mb-8">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                <h2 className="text-lg font-semibold text-white/95" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                  Productivity Tools
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-white/95 transition-colors duration-200" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                    Notify
                  </h3>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Real-time keyword tracking via WhatsApp for trends and competitors.
                  </p>
                </div>

                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <a 
                    href="https://retro-todo.pages.dev/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-3 block text-white group-hover:text-blue-300 transition-colors duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    Retro Todo
                  </a>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Simple, auto-sync task management.
                  </p>
                </div>

                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-white/95 transition-colors duration-200" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                    Notes AI
                  </h3>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    AI-powered notes for organization and insights.
                  </p>
                </div>
              </div>
            </div>

            {/* Niche Projects */}
            <div className="mb-12">
              <div className="flex items-center mb-8">
                <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 animate-pulse"></div>
                <h2 className="text-lg font-semibold text-white/95" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                  Niche Projects
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <a 
                    href="https://kardashevscale.co/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-3 block text-white group-hover:text-blue-300 transition-colors duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    Kardashevscale.co
                  </a>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Real-time Kardashev Scale tracker for innovation fans.
                  </p>
                </div>

                <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <a 
                    href="https://crackedaf.co/new" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold mb-3 block text-white group-hover:text-blue-300 transition-colors duration-200" 
                    style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                  >
                    Crackedaf.co
                  </a>
                  <p className="text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-200" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                    Platform for unconventional, creative ideas.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom spacing */}
            <div className="h-8"></div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
  );
};
  )
}