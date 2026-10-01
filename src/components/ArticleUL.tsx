import React, { ReactNode } from "react";

interface ArticleULProps {
  children: ReactNode;
  className?: string; // Optional: lets you override classes if needed on specific paragraphs
}

export default function ArticleUL({ children, className = "" }: ArticleULProps) {
  return (
    <ul
      className={`list-disc ml-6 mb-6 space-y-2 text-black/90 dark:text-white/90 transition-color duration-300 text-base sm:text-lg leading-relaxed font-sans ${className}`}
    >
      {children}
    </ul>
  );
}