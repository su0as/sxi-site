"use client"

import React from "react";
import { createPortal } from "react-dom";
import { Home, User, FolderKanban, PenLine, Sparkles } from "lucide-react";

interface MobileTabBarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const TABS = [
  { key: "home", label: "Home", icon: Home },
  { key: "about", label: "About", icon: User },
  { key: "projects", label: "Projects", icon: FolderKanban },
  { key: "writings", label: "Writings", icon: PenLine },
  { key: "curators-corner", label: "Curator", icon: Sparkles },
] as const;

export const MobileTabBar: React.FC<MobileTabBarProps> = ({ currentPage, onNavigate }) => {
  // Rendered via portal directly under <body> so `position: fixed` stays pinned
  // to the viewport even though an ancestor (PageTransition) applies a CSS
  // `transform`, which would otherwise create a new containing block for
  // fixed-position descendants and break the bottom-pinned layout.
  return createPortal(
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/70 backdrop-blur-xl border-t border-white/10"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Section navigation"
    >
      <div className="flex items-stretch justify-around max-w-lg mx-auto">
        {TABS.map(({ key, label, icon: Icon }) => {
          const isActive = currentPage === key;
          return (
            <button
              key={key}
              onClick={() => onNavigate(key)}
              className={`flex flex-col items-center justify-center gap-1 flex-1 min-h-[56px] py-2 transition-colors duration-200 ${
                isActive ? "text-white" : "text-white/50"
              }`}
              aria-current={isActive ? "page" : undefined}
              aria-label={label}
            >
              <Icon size={20} strokeWidth={isActive ? 2.4 : 2} />
              <span className="text-[10px] font-['Gilroy-SemiBold',sans-serif] leading-none">
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>,
    document.body
  );
};
