"use client";

import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Get initial theme
    const savedTheme = localStorage.getItem("color-scheme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

    setTheme(initialTheme);
    setMounted(true);

    // 2. Add listener for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("color-scheme")) {
        const newTheme = e.matches ? "dark" : "light";
        setTheme(newTheme);
        updateDOMTheme(newTheme);
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, []);

  const updateDOMTheme = (newTheme: "light" | "dark") => {
    document.documentElement.setAttribute("data-theme", newTheme);
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) {
      meta.setAttribute("content", newTheme);
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("color-scheme", nextTheme);
    updateDOMTheme(nextTheme);
  };

  // Prevent layout shift/mismatch by rendering a clean placeholder button during SSR
  if (!mounted) {
    return (
      <button 
        className={styles.toggleButton} 
        aria-label="Toggle light or dark theme"
        disabled
      >
        <span className={styles.iconPlaceholder} />
      </button>
    );
  }

  return (
    <button
      className={`${styles.toggleButton} ${theme === "dark" ? styles.dark : ""}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div className={styles.iconContainer}>
        {/* Sun Icon */}
        <svg
          className={`${styles.icon} ${styles.sun}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="M4.93 4.93l1.41 1.41"></path>
          <path d="M17.66 17.66l1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="M6.34 17.66l-1.41 1.41"></path>
          <path d="M19.07 4.93l-1.41 1.41"></path>
        </svg>

        {/* Moon Icon */}
        <svg
          className={`${styles.icon} ${styles.moon}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
      </div>
    </button>
  );
}
