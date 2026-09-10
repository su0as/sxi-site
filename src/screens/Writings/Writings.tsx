/*
 * Writings index - lists posts from src/content/writings/*.md, newest first.
 * Uses PageLayout for consistent structure; individual posts are real
 * /writings/:slug routes (see PostPage.tsx), not accordion state.
 */

"use client"

import React from "react";
import { Calendar } from "lucide-react";
import { PageLayout } from "../../components/ui/page-layout";
import type { WritingFrontmatter } from "../../types/writing";

interface WritingsProps {
  onNavigate: (page: string) => void;
}

const modules = import.meta.glob<{ frontmatter: WritingFrontmatter; html: string }>(
  "../../content/writings/*.md",
  { eager: true }
);

const posts = Object.values(modules)
  .map((m) => m.frontmatter)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const PostCard: React.FC<{ post: WritingFrontmatter; compact?: boolean }> = ({ post, compact }) => (
  <a
    href={`/writings/${post.slug}`}
    className={`block bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 active:bg-white/10 transition-colors duration-150 ${compact ? "p-4" : "p-6"}`}
  >
    <h3
      className={`font-semibold text-white mb-2 ${compact ? "text-base" : "text-xl"}`}
      style={{ fontFamily: "Gilroy-SemiBold, sans-serif" }}
    >
      {post.title}
    </h3>
    <div className="flex items-center gap-1.5 text-white/50 text-xs mb-3">
      <Calendar size={12} />
      {formatDate(post.date)}
    </div>
    <p
      className={`text-white/70 leading-relaxed mb-3 ${compact ? "text-xs" : "text-sm"}`}
      style={{ fontFamily: "Gilroy-Regular, sans-serif", fontWeight: 400 }}
    >
      {post.excerpt}
    </p>
    {post.tags && post.tags.length > 0 && (
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] uppercase tracking-wide text-white/50 bg-white/5 border border-white/10 rounded-full px-2 py-1"
            style={{ fontFamily: "Gilroy-SemiBold, sans-serif" }}
          >
            {tag}
          </span>
        ))}
      </div>
    )}
  </a>
);

export const Writings: React.FC<WritingsProps> = ({ onNavigate }) => {
  return (
    <PageLayout currentPage="writings" onNavigate={onNavigate}>
      {/* Desktop Content */}
      <div className="absolute top-[50px] left-[500px] right-[50px] bottom-[50px] overflow-y-auto hidden md:block">
        <div className="max-w-3xl text-white font-['Gilroy-SemiBold',sans-serif]">
          <h2 className="text-4xl font-semibold mb-10" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
            Writings
          </h2>

          {posts.length === 0 ? (
            <p className="text-white/60" style={{ fontFamily: 'Gilroy-Regular, sans-serif' }}>
              In progress...
            </p>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Content */}
      <div className="md:hidden px-6 pt-8">
        <div className="max-w-lg mx-auto text-white">
          <h2 className="text-2xl font-semibold tracking-tight mb-6" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
            Writings
          </h2>

          {posts.length === 0 ? (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <h3 className="text-xl font-semibold mb-2 text-white" style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
                In Progress...
              </h3>
              <p className="text-white/60 text-sm" style={{ fontFamily: 'Gilroy-Regular, sans-serif' }}>
                Coming soon with thoughtful content.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} compact />
              ))}
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};
