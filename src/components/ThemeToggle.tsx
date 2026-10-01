"use client";

import { useState, useEffect } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

export default function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(true);

  // Check initial theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="relative inline-flex h-7 w-14 items-center rounded-full bg-white/20 transition-colors duration-300 focus:outline-none cursor-pointer"
    >
      <span
        className={`inline-flex h-5 w-5 transform items-center justify-center rounded-full bg-white text-sba-dark-red shadow-md transition-transform duration-300 ${
          darkMode ? "translate-x-8" : "translate-x-1"
        }`}
      >
        {darkMode ? <IoMdMoon size={12} /> : <IoMdSunny size={12} />}
      </span>
    </button>
  );
}