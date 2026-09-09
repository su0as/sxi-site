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
          <h2 className="text-4xl font-semibold mb-12 text-center" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
            Projects & Works
          </h2>

          {/* AI Ecosystem & Open-Source */}
          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>AI Ecosystem & Open-Source</h3>
            
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
            <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>AI-Powered Creative & Marketing</h3>
            
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
              <h4 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>LLMs Wrapped</h4>
              <p className="text-base font-normal leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                Spotify Wrapped-style summary of AI tools (ChatGPT, Gemini) to evaluate options fast.
              </p>
            </div>
          </section>

          {/* AI Agents for Automation */}
          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>AI Agents for Automation</h3>
            
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
              <h4 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>First Principles LLM</h4>
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
            <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>Manufacturing Solutions</h3>
            
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
            <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>Productivity Tools</h3>
            
            <div className="mb-6 ml-6">
              <h4 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>Notify</h4>
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
              <h4 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>Notes AI</h4>
              <p className="text-base font-normal leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                AI-powered notes for organization and insights.
              </p>
            </div>
          </section>

          {/* Niche Projects */}
          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>Niche Projects</h3>
            
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
      <div className="md:hidden min-h-screen bg-gradient-to-br from-black/40 via-black/60 to-black/80 backdrop-blur-md">
        <div className="px-4 py-6 overflow-y-auto max-h-screen">
          <div className="max-w-sm mx-auto text-white">
            {/* Enhanced Header */}
            <div className="text-center mb-8 pt-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl mb-4 border border-white/10">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg"></div>
              </div>
              <h2 className="text-2xl font-semibold tracking-tight mb-2" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                Projects & Works
              </h2>
              <p className="text-sm text-white/60" style={{ fontFamily: 'Gilroy-Regular, sans-serif' }}>
                Explore my latest innovations
              </p>
            </div>

            {/* Enhanced Categories */}
            <div className="space-y-8">
              {/* AI Ecosystem & Open-Source */}
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 shadow-xl">
                <div className="flex items-center mb-5">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3"></div>
                  <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                    AI Ecosystem & Open-Source
                  </h3>
                </div>
              
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <a 
                      href="https://superhub.ai/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-base font-semibold mb-2 block hover:text-blue-300 transition-colors duration-200" 
                      style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                    >
                      Superhub.ai
                    </a>
                    <p className="text-xs leading-relaxed text-white/70" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      AI prompts, projects, and reports to stay ahead.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <a 
                      href="https://svaraai.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-base font-semibold mb-2 block hover:text-blue-300 transition-colors duration-200" 
                      style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                    >
                      Svara - AI Notes App
                    </a>
                    <p className="text-xs leading-relaxed text-white/70" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      Minimalist writing and reflection app designed to help users capture their thoughts through timed freewriting. It then provides AI-powered insights and pattern recognition to deepen understanding and foster clarity.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <a 
                      href="https://github.com/su0as/LLM-chat-interface" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-base font-semibold mb-2 block hover:text-blue-300 transition-colors duration-200" 
                      style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                    >
                      Open Source Perplexity
                    </a>
                    <p className="text-xs leading-relaxed text-white/70" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      Custom AI chat interfaces for unique experiences.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <a 
                      href="https://github.com/su0as/LLMs-Web" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-base font-semibold mb-2 block hover:text-blue-300 transition-colors duration-200" 
                      style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                    >
                      LLMs Web
                    </a>
                    <p className="text-xs leading-relaxed text-white/70" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      Local AI model testing in-browser.
                    </p>
                  </div>
                </div>
              </div>

              {/* AI-Powered Creative & Marketing */}
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 shadow-xl">
                <div className="flex items-center mb-5">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-3"></div>
                  <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                    AI-Powered Creative & Marketing
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <a 
                      href="https://crea-ai-labs.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-base font-semibold mb-2 block hover:text-blue-300 transition-colors duration-200" 
                      style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                    >
                      Crea Labs
                    </a>
                    <p className="text-xs leading-relaxed text-white/70" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      AI suite for visuals, designs (logos, posters), and dynamic content (text-to-video, avatars). Boost marketing with AI copywriting and social graphics—cost-effective and impactful.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <h4 className="text-base font-semibold mb-2 text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                      LLMs Wrapped
                    </h4>
                    <p className="text-xs leading-relaxed text-white/70" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      Spotify Wrapped-style summary of AI tools (ChatGPT, Gemini) to evaluate options fast.
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Agents for Automation */}
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 shadow-xl">
                <div className="flex items-center mb-5">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mr-3"></div>
                  <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                    AI Agents for Automation
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <a 
                      href="https://github.com/su0as/ai-outreach-agent" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-base font-semibold mb-2 block hover:text-blue-300 transition-colors duration-200" 
                      style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                    >
                      AI Outreach Agent
                    </a>
                    <p className="text-xs leading-relaxed text-white/70" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      Automates customer engagement and deal closures with NLP—scalable and efficient.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <h4 className="text-base font-semibold mb-2 text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                      First Principles LLM
                    </h4>
                    <p className="text-xs leading-relaxed text-white/70" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      Solves complex problems with actionable insights.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <a 
                      href="https://github.com/su0as/ai-chess-agent" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-base font-semibold mb-2 block hover:text-blue-300 transition-colors duration-200" 
                      style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                    >
                      Chess AI Agent
                    </a>
                    <p className="text-xs leading-relaxed text-white/70" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      Showcases our technical AI expertise.
                    </p>
                  </div>
                </div>
              </div>

              {/* Manufacturing Solutions */}
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 shadow-xl">
                <div className="flex items-center mb-5">
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3"></div>
                  <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                    Manufacturing Solutions
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <a 
                      href="https://machina-aihub.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-base font-semibold mb-2 block hover:text-blue-300 transition-colors duration-200" 
                      style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                    >
                      Machina
                    </a>
                    <p className="text-xs leading-relaxed text-white/70" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      Alibaba alternative for Indian sourcing—competitive and fast.
                    </p>
                  </div>
                </div>
              </div>

              {/* Productivity Tools */}
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 shadow-xl">
                <div className="flex items-center mb-5">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></div>
                  <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                    Productivity Tools
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <h4 className="text-base font-semibold mb-2 text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                      Notify
                    </h4>
                    <p className="text-xs leading-relaxed text-white/70" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      Real-time keyword tracking via WhatsApp for trends and competitors.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <a 
                      href="https://retro-todo.pages.dev/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-base font-semibold mb-2 block hover:text-blue-300 transition-colors duration-200" 
                      style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                    >
                      Retro Todo
                    </a>
                    <p className="text-xs leading-relaxed text-white/70" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      Simple, auto-sync task management.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <h4 className="text-base font-semibold mb-2 text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                      Notes AI
                    </h4>
                    <p className="text-xs leading-relaxed text-white/70" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      AI-powered notes for organization and insights.
                    </p>
                  </div>
                </div>
              </div>

              {/* Niche Projects */}
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 shadow-xl">
                <div className="flex items-center mb-5">
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full mr-3"></div>
                  <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                    Niche Projects
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <a 
                      href="https://kardashevscale.co/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-base font-semibold mb-2 block hover:text-blue-300 transition-colors duration-200" 
                      style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                    >
                      Kardashevscale.co
                    </a>
                    <p className="text-xs leading-relaxed text-white/70" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      Real-time Kardashev Scale tracker for innovation fans.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <a 
                      href="https://crackedaf.co/new" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-base font-semibold mb-2 block hover:text-blue-300 transition-colors duration-200" 
                      style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                    >
                      Crackedaf.co
                    </a>
                    <p className="text-xs leading-relaxed text-white/70" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      Platform for unconventional, creative ideas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom spacing for scroll comfort */}
            <div className="h-6"></div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};