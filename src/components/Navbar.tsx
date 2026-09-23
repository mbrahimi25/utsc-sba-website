"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-white/10 bg-sba-red relative z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo and Title */}
        <div className="flex gap-4 md:gap-6 items-center">
          <Image
            src="/sba_logo.png"
            alt="UTSC Sports Business Association Navbar Logo"
            height={60}
            width={60}
            className="md:h-[75px] md:w-[75px]"
          />
          <h2 className="text-lg md:text-xl font-bold text-white">
            UTSC Sports Business Association
          </h2>
        </div>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex gap-6 text-white/70 font-sans">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="/articles" className="hover:text-white transition-colors">
            Articles
          </Link>
          <Link href="/events" className="hover:text-white transition-colors">
            Events
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? (
              // X (Close) Icon
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu with Slide & Fade Animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-sba-red border-white/10 text-white/80 font-sans shadow-lg ${
          isOpen
            ? "max-h-60 opacity-100 border-t py-6 px-6"
            : "max-h-0 opacity-0 border-t-0 py-0 px-6"
        }`}
      >
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="hover:text-white transition-colors py-1"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-white transition-colors py-1"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/articles"
            className="hover:text-white transition-colors py-1"
            onClick={() => setIsOpen(false)}
          >
            Articles
          </Link>
          <Link
            href="/events"
            className="hover:text-white transition-colors py-1"
            onClick={() => setIsOpen(false)}
          >
            Events
          </Link>
        </div>
      </div>
    </nav>
  );
}