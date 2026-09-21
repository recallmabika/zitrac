'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark'); // 'light', 'system', 'dark'
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('zitrac-theme');
    if (saved === 'light' || saved === 'dark' || saved === 'system') {
      setTheme(saved);
      applyTheme(saved);
    } else {
      // Default to dark
      applyTheme('dark');
    }

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = () => {
      const currentSaved = localStorage.getItem('zitrac-theme');
      if (currentSaved === 'system') {
        applyTheme('system');
      }
    };
    mql.addEventListener('change', handleSystemChange);
    return () => mql.removeEventListener('change', handleSystemChange);
  }, []);

  const applyTheme = (mode) => {
    const root = document.documentElement;
    if (mode === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else if (mode === 'dark') {
      root.classList.remove('light');
      root.classList.add('dark');
    } else {
      // system
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        root.classList.remove('light');
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
        root.classList.add('light');
      }
    }
  };

  const handleSelect = (mode) => {
    setTheme(mode);
    localStorage.setItem('zitrac-theme', mode);
    applyTheme(mode);
  };

  if (!mounted) {
    return (
      <div className="inline-flex items-center rounded-full border border-white/10 bg-black/60 p-1">
        <div className="w-7 h-7 rounded-full"></div>
        <div className="w-7 h-7 rounded-full bg-white/10"></div>
        <div className="w-7 h-7 rounded-full"></div>
      </div>
    );
  }

  return (
    <div
      role="group"
      aria-label="Theme selection"
      className="theme-toggle-segmented inline-flex items-center rounded-full border border-white/10 bg-black/70 p-1 backdrop-blur-md shadow-inner transition-colors duration-300"
    >
      {/* Light Mode */}
      <button
        type="button"
        onClick={() => handleSelect('light')}
        aria-label="Switch to light theme"
        aria-pressed={theme === 'light'}
        title="Light mode"
        className={`relative flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${
          theme === 'light'
            ? 'bg-white text-black shadow-md scale-105'
            : 'text-slate-400 hover:text-white hover:bg-white/5'
        }`}
      >
        <svg
          className="h-3.5 w-3.5 stroke-[1.8]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      </button>

      {/* System Mode */}
      <button
        type="button"
        onClick={() => handleSelect('system')}
        aria-label="Switch to system theme"
        aria-pressed={theme === 'system'}
        title="System default theme"
        className={`relative flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${
          theme === 'system'
            ? 'bg-white text-black shadow-md scale-105'
            : 'text-slate-400 hover:text-white hover:bg-white/5'
        }`}
      >
        <svg
          className="h-3.5 w-3.5 stroke-[1.8]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3"
          />
        </svg>
      </button>

      {/* Dark Mode */}
      <button
        type="button"
        onClick={() => handleSelect('dark')}
        aria-label="Switch to dark theme"
        aria-pressed={theme === 'dark'}
        title="Dark mode"
        className={`relative flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-white text-black shadow-md scale-105'
            : 'text-slate-400 hover:text-white hover:bg-white/5'
        }`}
      >
        <svg
          className="h-3.5 w-3.5 stroke-[1.8]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </button>
    </div>
  );
}
