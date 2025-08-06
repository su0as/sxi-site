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
      </div>
      
      {/* Mobile Content */}
      <div className="md:hidden min-h-screen bg-gradient-to-br from-slate-900/95 via-purple-900/20 to-blue-900/30 backdrop-blur-xl">
        <div className="px-5 py-8 overflow-y-auto">
          <div className="max-w-md mx-auto">
            
            {/* Hero Header */}
            <div className="text-center mb-12 pt-6">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
                <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg shadow-lg"></div>
                </div>
              </div>
              <h1 className="text-3xl font-bold tracking-tight mb-3 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                Projects & Works
              </h1>
              <p className="text-sm text-white/60 max-w-xs mx-auto leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif' }}>
                Explore innovative AI solutions and creative projects
              </p>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-4"></div>
            </div>

            {/* Project Categories */}
            <div className="space-y-8">
              
              {/* AI Ecosystem & Open-Source */}
              <div className="group">
                <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                  <div className="relative p-6">
                    <div className="flex items-center mb-6">
                      <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 via-blue-400 to-cyan-400 rounded-full mr-3 shadow-lg"></div>
                      <h2 className="text-lg font-bold text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                        AI Ecosystem & Open-Source
                      </h2>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group/item">
                        <a 
                          href="https://superhub.ai/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-base font-bold mb-2 block text-white group-hover/item:text-blue-300 transition-colors duration-200" 
                          style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                        >
                          Superhub.ai
                        </a>
                        <p className="text-sm leading-relaxed text-white/80" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                          AI prompts, projects, and reports to stay ahead.
                        </p>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group/item">
                        <a 
                          href="https://svaraai.vercel.app/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-base font-bold mb-2 block text-white group-hover/item:text-blue-300 transition-colors duration-200" 
                          style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                        >
                          Svara - AI Notes App
                        </a>
                        <p className="text-sm leading-relaxed text-white/80" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                          Minimalist writing and reflection app designed to help users capture their thoughts through timed freewriting. It then provides AI-powered insights and pattern recognition to deepen understanding and foster clarity.
                        </p>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group/item">
                        <a 
                          href="https://github.com/su0as/LLM-chat-interface" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-base font-bold mb-2 block text-white group-hover/item:text-blue-300 transition-colors duration-200" 
                          style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                        >
                          Open Source Perplexity
                        </a>
                        <p className="text-sm leading-relaxed text-white/80" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                          Custom AI chat interfaces for unique experiences.
                        </p>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group/item">
                        <a 
                          href="https://github.com/su0as/LLMs-Web" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-base font-bold mb-2 block text-white group-hover/item:text-blue-300 transition-colors duration-200" 
                          style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                        >
                          LLMs Web
                        </a>
                        <p className="text-sm leading-relaxed text-white/80" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                          Local AI model testing in-browser.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI-Powered Creative & Marketing */}
              <div className="group">
                <div className="relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-rose-500/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                  <div className="relative p-6">
                    <div className="flex items-center mb-6">
                      <div className="w-4 h-4 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 rounded-full mr-3 shadow-lg"></div>
                      <h2 className="text-lg font-bold text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                        AI-Powered Creative & Marketing
                      </h2>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group/item">
                        <a 
                          href="https://crea-ai-labs.vercel.app/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-base font-bold mb-2 block text-white group-hover/item:text-blue-300 transition-colors duration-200" 
                          style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                        >
                          Crea Labs
                        </a>
                        <p className="text-sm leading-relaxed text-white/80" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                          AI suite for visuals, designs (logos, posters), and dynamic content (text-to-video, avatars). Boost marketing with AI copywriting and social graphics—cost-effective and impactful.
                        </p>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group/item">
                        <h3 className="text-base font-bold mb-2 text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                          LLMs Wrapped
                        </h3>
                        <p className="text-sm leading-relaxed text-white/80" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                          Spotify Wrapped-style summary of AI tools (ChatGPT, Gemini) to evaluate options fast.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Agents for Automation */}
              <div className="group">
                <div className="relative overflow-hidden bg-gradient-to-br from-orange-500/10 via-red-500/10 to-pink-500/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                  <div className="relative p-6">
                    <div className="flex items-center mb-6">
                      <div className="w-4 h-4 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 rounded-full mr-3 shadow-lg"></div>
                      <h2 className="text-lg font-bold text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                        AI Agents for Automation
                      </h2>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group/item">
                        <a 
                          href="https://github.com/su0as/ai-outreach-agent" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-base font-bold mb-2 block text-white group-hover/item:text-blue-300 transition-colors duration-200" 
                          style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                        >
                          AI Outreach Agent
                        </a>
                        <p className="text-sm leading-relaxed text-white/80" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                          Automates customer engagement and deal closures with NLP—scalable and efficient.
                        </p>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group/item">
                        <h3 className="text-base font-bold mb-2 text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                          First Principles LLM
                        </h3>
                        <p className="text-sm leading-relaxed text-white/80" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                          Solves complex problems with actionable insights.
                        </p>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group/item">
                        <a 
                          href="https://github.com/su0as/ai-chess-agent" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-base font-bold mb-2 block text-white group-hover/item:text-blue-300 transition-colors duration-200" 
                          style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                        >
                          Chess AI Agent
                        </a>
                        <p className="text-sm leading-relaxed text-white/80" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                          Showcases our technical AI expertise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Manufacturing Solutions */}
              <div className="group">
                <div className="relative overflow-hidden bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                  <div className="relative p-6">
                    <div className="flex items-center mb-6">
                      <div className="w-4 h-4 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 rounded-full mr-3 shadow-lg"></div>
                      <h2 className="text-lg font-bold text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                        Manufacturing Solutions
                      </h2>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group/item">
                        <a 
                          href="https://machina-aihub.vercel.app/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-base font-bold mb-2 block text-white group-hover/item:text-blue-300 transition-colors duration-200" 
                          style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                        >
                          Machina
                        </a>
                        <p className="text-sm leading-relaxed text-white/80" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                          Alibaba alternative for Indian sourcing—competitive and fast.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Productivity Tools */}
              <div className="group">
                <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                  <div className="relative p-6">
                    <div className="flex items-center mb-6">
                      <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 rounded-full mr-3 shadow-lg"></div>
                      <h2 className="text-lg font-bold text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                        Productivity Tools
                      </h2>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group/item">
                        <h3 className="text-base font-bold mb-2 text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                          Notify
                        </h3>
                        <p className="text-sm leading-relaxed text-white/80" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                          Real-time keyword tracking via WhatsApp for trends and competitors.
                        </p>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group/item">
                        <a 
                          href="https://retro-todo.pages.dev/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-base font-bold mb-2 block text-white group-hover/item:text-blue-300 transition-colors duration-200" 
                          style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                        >
                          Retro Todo
                        </a>
                        <p className="text-sm leading-relaxed text-white/80" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                          Simple, auto-sync task management.
                        </p>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group/item">
                        <h3 className="text-base font-bold mb-2 text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                          Notes AI
                        </h3>
                        <p className="text-sm leading-relaxed text-white/80" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                          AI-powered notes for organization and insights.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Niche Projects */}
              <div className="group">
                <div className="relative overflow-hidden bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-violet-500/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                  <div className="relative p-6">
                    <div className="flex items-center mb-6">
                      <div className="w-4 h-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 rounded-full mr-3 shadow-lg"></div>
                      <h2 className="text-lg font-bold text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                        Niche Projects
                      </h2>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group/item">
                        <a 
                          href="https://kardashevscale.co/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-base font-bold mb-2 block text-white group-hover/item:text-blue-300 transition-colors duration-200" 
                          style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                        >
                          Kardashevscale.co
                        </a>
                        <p className="text-sm leading-relaxed text-white/80" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                          Real-time Kardashev Scale tracker for innovation fans.
                        </p>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group/item">
                        <a 
                          href="https://crackedaf.co/new" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-base font-bold mb-2 block text-white group-hover/item:text-blue-300 transition-colors duration-200" 
                          style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
                        >
                          Crackedaf.co
                        </a>
                        <p className="text-sm leading-relaxed text-white/80" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                          Platform for unconventional, creative ideas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom spacing */}
            <div className="h-12"></div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};