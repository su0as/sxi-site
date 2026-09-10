/*
 * Projects page component with detailed projects and works content
 * - Uses PageLayout for consistent structure
 * - Shows "Projects" as active in navigation
 * - Three tiers: Shipped Products, Applied AI Engineering, Experiments & Open Source
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

          {/* Tier 1: Shipped Products */}
          <section className="mb-14">
            <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>Shipped Products</h3>

            <div className="mb-8 ml-6">
              <a
                href="https://shotaiapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-semibold mb-1 block hover:underline transition-all duration-200"
                style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
              >
                Shot AI
              </a>
              <p className="text-sm text-white/50 mb-3" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                Real-time sports biomechanics, iOS · live on the App Store · 250+ paying subscribers · 4.8/5 rating
              </p>
              <p className="text-base font-normal leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                Closed-loop perception pipeline: camera capture → skeletal pose estimation → CoreML inference → corrective feedback, at under 100ms end-to-end, entirely on-device with no cloud dependency. Tuned inference to 30–50ms on 2017-generation hardware through model quantisation, pruning and thermal-throttling mitigation. 600+ sessions/month.
              </p>
            </div>

            <div className="mb-8 ml-6">
              <a
                href="https://answercareai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-semibold mb-1 block hover:underline transition-all duration-200"
                style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
              >
                AnswerCare AI
              </a>
              <p className="text-sm text-white/50 mb-3" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                AI voice receptionist for small businesses
              </p>
              <p className="text-base font-normal leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                Live telephony agent handling inbound calls at sub-2-second response latency: speech recognition → LLM reasoning → speech synthesis, with interruption handling and multi-turn conversation state. Qualification logic, calendar integration and fallback escalation paths. Deployed for US service businesses.
              </p>
            </div>

            <div className="mb-2 ml-6">
              <a
                href="https://rydertextiles.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-semibold mb-1 block hover:underline transition-all duration-200"
                style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}
              >
                RyderTex
              </a>
              <p className="text-sm text-white/50 mb-3" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                Corporate site for a Chinese knitted-fabric mill
              </p>
              <p className="text-base font-normal leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                Designed and shipped end to end, from information architecture through build and deployment. Now the company's primary customer-facing channel.
              </p>
            </div>
          </section>

          {/* Tier 2: Applied AI Engineering */}
          <section className="mb-14">
            <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>Applied AI Engineering</h3>

            <div className="ml-6 space-y-4">
              <p className="text-base font-normal leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                Production AI systems for 8+ SME clients across retail, professional services and e-commerce. Multi-turn LLM agent systems reaching 85% autonomous task resolution. RAG pipelines over vector databases, with inference cost cut ~40% through prompt caching, request batching and model-tier routing.
              </p>
              <p className="text-base font-normal leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                Shop-floor digitalisation for a 200+ person manufacturing facility in Hangzhou, China — operational dashboards across production status, inventory handoff and outbound logistics.
              </p>
            </div>
          </section>

          {/* Tier 3: Experiments & Open Source */}
          <section>
            <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>Experiments & Open Source</h3>

            {/* AI Ecosystem & Open-Source */}
            <div className="mb-10 ml-6">
              <h4 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>AI Ecosystem & Open-Source</h4>

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
            </div>

            {/* AI-Powered Creative & Marketing */}
            <div className="mb-10 ml-6">
              <h4 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>AI-Powered Creative & Marketing</h4>

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
                <h5 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>LLMs Wrapped</h5>
                <p className="text-base font-normal leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                  Spotify Wrapped-style summary of AI tools (ChatGPT, Gemini) to evaluate options fast.
                </p>
              </div>
            </div>

            {/* AI Agents for Automation */}
            <div className="mb-10 ml-6">
              <h4 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>AI Agents for Automation</h4>

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
                <h5 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>First Principles LLM</h5>
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
            </div>

            {/* Manufacturing Solutions */}
            <div className="mb-10 ml-6">
              <h4 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>Manufacturing Solutions</h4>

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
            </div>

            {/* Productivity Tools */}
            <div className="mb-10 ml-6">
              <h4 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>Productivity Tools</h4>

              <div className="mb-6 ml-6">
                <h5 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>Notify</h5>
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
                <h5 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>Notes AI</h5>
                <p className="text-base font-normal leading-relaxed" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                  AI-powered notes for organization and insights.
                </p>
              </div>
            </div>

            {/* Niche Projects */}
            <div className="ml-6">
              <h4 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>Niche Projects</h4>

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
            </div>
          </section>
        </div>
      </div>

      {/* Mobile Content */}
      <div className="md:hidden px-4 pt-6">
        <div className="max-w-sm mx-auto text-white">
          <h2 className="text-2xl font-semibold tracking-tight mb-6 px-2" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
            Projects & Works
          </h2>

          {/* Tier 1: Shipped Products */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3 px-2" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
              Shipped Products
            </h3>
            <div className="space-y-3">
              <a
                href="https://shotaiapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/8 active:bg-white/15 rounded-2xl p-4 border border-white/15 transition-colors duration-150"
              >
                <span className="text-base font-semibold mb-1 block" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                  Shot AI
                </span>
                <span className="text-[11px] leading-relaxed text-white/50 block mb-2" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                  iOS · 250+ paying subscribers · 4.8/5 rating
                </span>
                <span className="text-xs leading-relaxed text-white/70 block" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                  Real-time sports biomechanics — on-device pose estimation and CoreML inference at 30–50ms, no cloud dependency.
                </span>
              </a>

              <a
                href="https://answercareai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/8 active:bg-white/15 rounded-2xl p-4 border border-white/15 transition-colors duration-150"
              >
                <span className="text-base font-semibold mb-1 block" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                  AnswerCare AI
                </span>
                <span className="text-[11px] leading-relaxed text-white/50 block mb-2" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                  AI voice receptionist for small businesses
                </span>
                <span className="text-xs leading-relaxed text-white/70 block" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                  Live calls at sub-2-second response latency: speech recognition → LLM reasoning → speech synthesis, with interruption handling.
                </span>
              </a>

              <a
                href="https://rydertextiles.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/8 active:bg-white/15 rounded-2xl p-4 border border-white/15 transition-colors duration-150"
              >
                <span className="text-base font-semibold mb-1 block" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                  RyderTex
                </span>
                <span className="text-[11px] leading-relaxed text-white/50 block mb-2" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                  Corporate site for a Chinese knitted-fabric mill
                </span>
                <span className="text-xs leading-relaxed text-white/70 block" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                  Designed and shipped end to end — now the company's primary customer-facing channel.
                </span>
              </a>
            </div>
          </div>

          {/* Tier 2: Applied AI Engineering */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3 px-2" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
              Applied AI Engineering
            </h3>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-3">
              <p className="text-xs leading-relaxed text-white/70" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                Production AI systems for 8+ SME clients. Multi-turn LLM agents reaching 85% autonomous task resolution; RAG pipelines with inference cost cut ~40% via caching, batching and model-tier routing.
              </p>
              <p className="text-xs leading-relaxed text-white/70" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                Shop-floor digitalisation for a 200+ person manufacturing facility in Hangzhou, China.
              </p>
            </div>
          </div>

          {/* Tier 3: Experiments & Open Source */}
          <div className="mb-2">
            <h3 className="text-lg font-semibold mb-3 px-2" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
              Experiments & Open Source
            </h3>

            <div className="space-y-6">
              {/* AI Ecosystem & Open-Source */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wide mb-3 px-1" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                  AI Ecosystem &amp; Open-Source
                </h4>

                <div className="space-y-2">
                  <a
                    href="https://superhub.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/5 active:bg-white/15 rounded-xl p-4 border border-white/10 transition-colors duration-150"
                  >
                    <span className="text-base font-semibold mb-1 block" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                      Superhub.ai
                    </span>
                    <span className="text-xs leading-relaxed text-white/70 block" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      AI prompts, projects, and reports to stay ahead.
                    </span>
                  </a>

                  <a
                    href="https://svaraai.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/5 active:bg-white/15 rounded-xl p-4 border border-white/10 transition-colors duration-150"
                  >
                    <span className="text-base font-semibold mb-1 block" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                      Svara - AI Notes App
                    </span>
                    <span className="text-xs leading-relaxed text-white/70 block" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      Minimalist writing and reflection app designed to help users capture their thoughts through timed freewriting. It then provides AI-powered insights and pattern recognition to deepen understanding and foster clarity.
                    </span>
                  </a>

                  <a
                    href="https://github.com/su0as/LLM-chat-interface"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/5 active:bg-white/15 rounded-xl p-4 border border-white/10 transition-colors duration-150"
                  >
                    <span className="text-base font-semibold mb-1 block" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                      Open Source Perplexity
                    </span>
                    <span className="text-xs leading-relaxed text-white/70 block" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      Custom AI chat interfaces for unique experiences.
                    </span>
                  </a>

                  <a
                    href="https://github.com/su0as/LLMs-Web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/5 active:bg-white/15 rounded-xl p-4 border border-white/10 transition-colors duration-150"
                  >
                    <span className="text-base font-semibold mb-1 block" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                      LLMs Web
                    </span>
                    <span className="text-xs leading-relaxed text-white/70 block" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      Local AI model testing in-browser.
                    </span>
                  </a>
                </div>
              </div>

              {/* AI-Powered Creative & Marketing */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wide mb-3 px-1" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                  AI-Powered Creative &amp; Marketing
                </h4>

                <div className="space-y-2">
                  <a
                    href="https://crea-ai-labs.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/5 active:bg-white/15 rounded-xl p-4 border border-white/10 transition-colors duration-150"
                  >
                    <span className="text-base font-semibold mb-1 block" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                      Crea Labs
                    </span>
                    <span className="text-xs leading-relaxed text-white/70 block" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      AI suite for visuals, designs (logos, posters), and dynamic content (text-to-video, avatars). Boost marketing with AI copywriting and social graphics—cost-effective and impactful.
                    </span>
                  </a>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h5 className="text-base font-semibold mb-1 text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                      LLMs Wrapped
                    </h5>
                    <p className="text-xs leading-relaxed text-white/70" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      Spotify Wrapped-style summary of AI tools (ChatGPT, Gemini) to evaluate options fast.
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Agents for Automation */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wide mb-3 px-1" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                  AI Agents for Automation
                </h4>

                <div className="space-y-2">
                  <a
                    href="https://github.com/su0as/ai-outreach-agent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/5 active:bg-white/15 rounded-xl p-4 border border-white/10 transition-colors duration-150"
                  >
                    <span className="text-base font-semibold mb-1 block" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                      AI Outreach Agent
                    </span>
                    <span className="text-xs leading-relaxed text-white/70 block" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      Automates customer engagement and deal closures with NLP—scalable and efficient.
                    </span>
                  </a>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h5 className="text-base font-semibold mb-1 text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                      First Principles LLM
                    </h5>
                    <p className="text-xs leading-relaxed text-white/70" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      Solves complex problems with actionable insights.
                    </p>
                  </div>

                  <a
                    href="https://github.com/su0as/ai-chess-agent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/5 active:bg-white/15 rounded-xl p-4 border border-white/10 transition-colors duration-150"
                  >
                    <span className="text-base font-semibold mb-1 block" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                      Chess AI Agent
                    </span>
                    <span className="text-xs leading-relaxed text-white/70 block" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      Showcases our technical AI expertise.
                    </span>
                  </a>
                </div>
              </div>

              {/* Manufacturing Solutions */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wide mb-3 px-1" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                  Manufacturing Solutions
                </h4>

                <div className="space-y-2">
                  <a
                    href="https://machina-aihub.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/5 active:bg-white/15 rounded-xl p-4 border border-white/10 transition-colors duration-150"
                  >
                    <span className="text-base font-semibold mb-1 block" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                      Machina
                    </span>
                    <span className="text-xs leading-relaxed text-white/70 block" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      Alibaba alternative for Indian sourcing—competitive and fast.
                    </span>
                  </a>
                </div>
              </div>

              {/* Productivity Tools */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wide mb-3 px-1" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                  Productivity Tools
                </h4>

                <div className="space-y-2">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h5 className="text-base font-semibold mb-1 text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                      Notify
                    </h5>
                    <p className="text-xs leading-relaxed text-white/70" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      Real-time keyword tracking via WhatsApp for trends and competitors.
                    </p>
                  </div>

                  <a
                    href="https://retro-todo.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/5 active:bg-white/15 rounded-xl p-4 border border-white/10 transition-colors duration-150"
                  >
                    <span className="text-base font-semibold mb-1 block" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                      Retro Todo
                    </span>
                    <span className="text-xs leading-relaxed text-white/70 block" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      Simple, auto-sync task management.
                    </span>
                  </a>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h5 className="text-base font-semibold mb-1 text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                      Notes AI
                    </h5>
                    <p className="text-xs leading-relaxed text-white/70" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      AI-powered notes for organization and insights.
                    </p>
                  </div>
                </div>
              </div>

              {/* Niche Projects */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wide mb-3 px-1" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                  Niche Projects
                </h4>

                <div className="space-y-2">
                  <a
                    href="https://kardashevscale.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/5 active:bg-white/15 rounded-xl p-4 border border-white/10 transition-colors duration-150"
                  >
                    <span className="text-base font-semibold mb-1 block" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                      Kardashevscale.co
                    </span>
                    <span className="text-xs leading-relaxed text-white/70 block" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      Real-time Kardashev Scale tracker for innovation fans.
                    </span>
                  </a>

                  <a
                    href="https://crackedaf.co/new"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/5 active:bg-white/15 rounded-xl p-4 border border-white/10 transition-colors duration-150"
                  >
                    <span className="text-base font-semibold mb-1 block" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                      Crackedaf.co
                    </span>
                    <span className="text-xs leading-relaxed text-white/70 block" style={{ fontFamily: 'Gilroy-Regular, sans-serif', fontWeight: 400 }}>
                      Platform for unconventional, creative ideas.
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
