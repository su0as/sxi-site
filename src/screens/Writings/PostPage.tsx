"use client"

import React, { useEffect, useMemo } from "react";
import { ArrowLeft, ArrowUpRight, Calendar, Tag } from "lucide-react";
import { AppCTA } from "../../components/ui/app-cta";
import type { WritingFrontmatter } from "../../types/writing";
import "../../styles/fonts.css";
import "highlight.js/styles/github-dark.css";

const posts = import.meta.glob<{ frontmatter: WritingFrontmatter; html: string }>(
  "../../content/writings/*.md",
  { eager: true }
);

interface PostPageProps {
  slug: string;
}

function setMeta(property: string, content: string, attr: "property" | "name" = "property") {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export const PostPage: React.FC<PostPageProps> = ({ slug }) => {
  const post = useMemo(() => {
    const entry = Object.values(posts).find((p) => p.frontmatter.slug === slug);
    return entry;
  }, [slug]);

  useEffect(() => {
    if (!post) return;
    const { frontmatter } = post;
    const url = `https://suhasxi.com/writings/${frontmatter.slug}`;

    document.title = `${frontmatter.title} — Suhas Suren`;
    setMeta("description", frontmatter.excerpt, "name");

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    setMeta("og:type", "article");
    setMeta("og:title", frontmatter.title);
    setMeta("og:description", frontmatter.excerpt);
    setMeta("og:url", url);
    setMeta("og:image", "https://suhasxi.com/og.png");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", frontmatter.title);
    setMeta("twitter:description", frontmatter.excerpt);

    let ld = document.querySelector<HTMLScriptElement>('script[data-writing-ld]');
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.setAttribute("data-writing-ld", "true");
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: frontmatter.title,
      description: frontmatter.excerpt,
      datePublished: frontmatter.date,
      author: { "@type": "Person", name: frontmatter.author || "Suhas Suren" },
      url,
    });
  }, [post]);

  if (!post) {
    return (
      <main className="w-full min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-xl mb-4" style={{ fontFamily: "Gilroy-SemiBold, sans-serif" }}>
            Post not found
          </p>
          <a href="/#writings" className="text-white/60 underline underline-offset-4">
            Back to Writings
          </a>
        </div>
      </main>
    );
  }

  const { frontmatter, html } = post;
  const formattedDate = new Date(frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main
      className="w-full min-h-screen relative bg-black text-white"
      style={{
        backgroundImage: "url(/background-alt.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Top bar */}
      <div className="sticky top-0 z-20 bg-black/50 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <a
          href="/#writings"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors duration-200"
          style={{ fontFamily: "Gilroy-SemiBold, sans-serif" }}
        >
          <ArrowLeft size={16} />
          Writings
        </a>
      </div>

      <article className="mx-auto max-w-[700px] px-6 py-12 sm:py-16">
        <div className="bg-black/60 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-white/10">
          <h1
            className="text-3xl sm:text-4xl font-semibold leading-tight mb-3"
            style={{ fontFamily: "Gilroy-SemiBold, sans-serif" }}
          >
            {frontmatter.title}
          </h1>
          {frontmatter.subtitle && (
            <p
              className="text-lg text-white/60 mb-5"
              style={{ fontFamily: "Gilroy-Regular, sans-serif", fontWeight: 400 }}
            >
              {frontmatter.subtitle}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-4 mb-8 text-white/50 text-sm">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} />
              {formattedDate}
            </span>
            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <span className="inline-flex items-center gap-1.5 flex-wrap">
                <Tag size={14} />
                {frontmatter.tags.join(" · ")}
              </span>
            )}
          </div>

          {/* Early, prominent link so a convinced reader doesn't have to scroll to the CTA */}
          <a
            href="https://shotaiapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm mb-10 transition-colors duration-200"
            style={{ fontFamily: "Gilroy-SemiBold, sans-serif" }}
          >
            Try Shot AI
            <ArrowUpRight size={14} />
          </a>

          <div
            className="post-prose"
            // Content is authored by the site owner in local markdown files
            // and rendered to HTML at build time - not user-generated input.
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <AppCTA
            product="Shot AI"
            tagline="Real-time form analysis that runs entirely on your phone. No cloud, no upload, works offline."
            primaryLabel="Try Shot AI"
            primaryHref="https://shotaiapp.com"
            secondaryLabel="Get in touch"
            secondaryHref="mailto:suh.as@icloud.com"
          />

          <p
            className="text-white/50 text-sm leading-relaxed mt-8"
            style={{ fontFamily: "Gilroy-Regular, sans-serif" }}
          >
            I'm currently doing an MSc in Robotics and Intelligent Systems at NTU Singapore, working on
            perception and on-device inference for physical systems. If you're building something in this
            space,{" "}
            <a href="mailto:suh.as@icloud.com" className="underline underline-offset-4 text-white/70 hover:text-white">
              get in touch
            </a>
            .
          </p>
        </div>
      </article>
    </main>
  );
};
