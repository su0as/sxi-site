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
      <div className="absolute top-[100px] left-[50px] right-[50px] bottom-[50px] overflow-y-auto">
        <div className="max-w-4xl mx-auto text-white font-['Inter',sans-serif]">
          {/* Main Title */}
          <h1 className="text-4xl font-semibold mb-12 text-center">
            Projects & Works
          </h1>

          {/* AI Ecosystem & Open-Source */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-6">AI Ecosystem & Open-Source</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Superhub.ai</h3>
              <p className="text-base font-normal leading-relaxed">
                AI prompts, projects, and reports to stay ahead.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Open Source Perplexity</h3>
              <p className="text-base font-normal leading-relaxed">
                Custom AI chat interfaces for unique experiences.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">LLMs Web</h3>
              <p className="text-base font-normal leading-relaxed">
                Local AI model testing in-browser.
              </p>
            </div>
          </section>

          {/* AI-Powered Creative & Marketing */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-6">AI-Powered Creative & Marketing</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Crea Labs</h3>
              <p className="text-base font-normal leading-relaxed">
                AI suite for visuals, designs (logos, posters), and dynamic content (text-to-video, avatars). Boost marketing with AI copywriting and social graphics—cost-effective and impactful.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">LLMs Wrapped</h3>
              <p className="text-base font-normal leading-relaxed">
                Spotify Wrapped-style summary of AI tools (ChatGPT, Gemini) to evaluate options fast.
              </p>
            </div>
          </section>

          {/* AI Agents for Automation */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-6">AI Agents for Automation</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">AI Outreach Agent</h3>
              <p className="text-base font-normal leading-relaxed">
                Automates customer engagement and deal closures with NLP—scalable and efficient.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">First Principles LLM</h3>
              <p className="text-base font-normal leading-relaxed">
                Solves complex problems with actionable insights.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Chess AI Agent</h3>
              <p className="text-base font-normal leading-relaxed">
                Showcases our technical AI expertise.
              </p>
            </div>
          </section>

          {/* Manufacturing Solutions */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-6">Manufacturing Solutions</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Machina</h3>
              <p className="text-base font-normal leading-relaxed">
                Alibaba alternative for Indian sourcing—competitive and fast.
              </p>
            </div>
          </section>

          {/* Productivity Tools */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-6">Productivity Tools</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Notify</h3>
              <p className="text-base font-normal leading-relaxed">
                Real-time keyword tracking via WhatsApp for trends and competitors.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Retro Todo</h3>
              <p className="text-base font-normal leading-relaxed">
                Simple, auto-sync task management.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Notes AI</h3>
              <p className="text-base font-normal leading-relaxed">
                AI-powered notes for organization and insights.
              </p>
            </div>
          </section>

          {/* Niche Projects */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-6">Niche Projects</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Kardashevscale.co</h3>
              <p className="text-base font-normal leading-relaxed">
                Real-time Kardashev Scale tracker for innovation fans.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Cracekdaf.co</h3>
              <p className="text-base font-normal leading-relaxed">
                Platform for unconventional, creative ideas.
              </p>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};