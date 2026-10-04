import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalDocHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = totalDocHeight > 0 ? (currentScrollY / totalDocHeight) * 100 : 0;
      setScrollPercentage(Math.min(100, Math.max(0, Math.round(pct))));

      // Only show when page is scrolled down past 150px
      if (currentScrollY > 150) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }

      // Clear any existing timer to debounce the stop event
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Hide the button with animation when scrolling stops (after 1100ms of inactivity)
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      id="back-to-top-btn"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to Top"
      style={{ borderRadius: '9999px' }}
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 rounded-full w-12 h-12 md:w-auto md:h-12 aspect-square md:aspect-auto flex items-center justify-center p-0 md:px-5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:via-yellow-300 hover:to-amber-400 text-zinc-950 font-bold border border-amber-300/80 dark:border-amber-400/90 shadow-[0_8px_25px_rgba(251,191,36,0.5)] hover:shadow-[0_0_35px_rgba(251,191,36,0.7)] hover:-translate-y-1 active:translate-y-0.5 transition-all duration-300 cursor-pointer overflow-hidden outline-none ring-0 focus:outline-none ${
        isScrolling
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-6 scale-75 pointer-events-none'
      }`}
    >
      {/* Subtle shimmer sweep effect */}
      <span
        style={{ borderRadius: '9999px' }}
        className="absolute inset-0 -translate-x-full hover:translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 pointer-events-none"
      />

      {/* Upward arrow icon: On mobile devices, this is the only element */}
      <ArrowUp className="w-5 h-5 md:w-4 md:h-4 stroke-[2.75] transition-transform duration-300 hover:-translate-y-0.5 shrink-0" />

      {/* Desktop-only text and percentage indicator; Mobile only shows upward arrow */}
      <span className="hidden md:inline-block ml-2 text-xs font-mono font-extrabold uppercase tracking-widest text-zinc-950">
        Top
      </span>

      <span className="hidden md:inline-flex items-center justify-center ml-2 px-1.5 py-0.5 text-[10px] font-mono font-extrabold rounded-full bg-black/15 text-zinc-950">
        {scrollPercentage}%
      </span>
    </button>
  );
}
