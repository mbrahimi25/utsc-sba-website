import React, { ReactNode } from "react";

interface ArticlePProps {
  children: ReactNode;
  className?: string; // Optional: lets you override classes if needed on specific paragraphs
}

export default function ArticleP({ children, className = "" }: ArticlePProps) {
  return (
    <p
      className={`text-black/90 dark:text-white/90 transition-color duration-300 text-base sm:text-lg leading-relaxed mb-6 font-sans ${className}`}
    >
      {children}
    </p>
  );
}