"use client"

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface AppCTAProps {
  product: string;
  tagline: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export const AppCTA: React.FC<AppCTAProps> = ({
  product,
  tagline,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}) => {
  return (
    <div className="not-prose bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl my-10">
      <p
        className="text-xs uppercase tracking-wide text-white/50 mb-2"
        style={{ fontFamily: "Gilroy-SemiBold, sans-serif" }}
      >
        {product}
      </p>
      <p
        className="text-white text-lg leading-relaxed mb-5"
        style={{ fontFamily: "Gilroy-Regular, sans-serif", fontWeight: 400 }}
      >
        {tagline}
      </p>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <a
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-white text-black rounded-xl px-5 py-3 text-base font-semibold hover:bg-white/90 active:scale-[0.98] transition-all duration-200"
          style={{ fontFamily: "Gilroy-SemiBold, sans-serif" }}
        >
          {primaryLabel}
          <ArrowUpRight size={16} />
        </a>
        {secondaryLabel && secondaryHref && (
          <a
            href={secondaryHref}
            className="text-white/70 hover:text-white text-sm underline underline-offset-4 transition-colors duration-200"
            style={{ fontFamily: "Gilroy-Regular, sans-serif" }}
          >
            {secondaryLabel}
          </a>
        )}
      </div>
    </div>
  );
};
