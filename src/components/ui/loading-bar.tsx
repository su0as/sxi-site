/*
 * Modern loading bar component
 * - Smooth progress animation
 * - Clean minimal design
 * - Auto-completes when content is ready
 */

"use client"

import React, { useState, useEffect } from 'react';

interface LoadingBarProps {
  isLoading: boolean;
  onComplete?: () => void;
}

export const LoadingBar: React.FC<LoadingBarProps> = ({ isLoading, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(interval);
            return 90;
          }
          return prev + Math.random() * 15;
        });
      }, 100);

      return () => clearInterval(interval);
    } else {
      // Complete the loading bar
      setProgress(100);
      const timeout = setTimeout(() => {
        onComplete?.();
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isLoading, onComplete]);

  if (progress === 100 && !isLoading) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
      <div 
        className="h-full bg-white transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};