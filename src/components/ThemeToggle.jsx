import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, onToggle, className = '' }) {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={onToggle}
      type="button"
      className={`relative p-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400/50 ${
        isDark
          ? 'bg-zinc-900/90 text-amber-300 border border-zinc-800 hover:border-amber-400/50 hover:bg-zinc-800/80 shadow-[0_0_15px_rgba(251,191,36,0.15)]'
          : 'bg-white/90 text-amber-600 border border-zinc-200/90 hover:border-amber-400/70 hover:bg-amber-50/70 shadow-[0_2px_10px_rgba(0,0,0,0.06)]'
      } ${className}`}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {/* Sun Icon */}
        <Sun
          className={`w-5 h-5 transition-all duration-500 transform ${
            isDark
              ? 'rotate-90 scale-0 opacity-0 absolute'
              : 'rotate-0 scale-100 opacity-100'
          } text-amber-500`}
        />
        {/* Moon Icon */}
        <Moon
          className={`w-5 h-5 transition-all duration-500 transform ${
            isDark
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-0 opacity-0 absolute'
          } text-amber-400`}
        />
      </div>
    </button>
  );
}
