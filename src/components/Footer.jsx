import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons.jsx';

export default function Footer({ theme }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-zinc-100/90 dark:bg-[#060608] border-t border-zinc-200 dark:border-zinc-900 py-16 overflow-hidden transition-colors">
      {/* Top linear gradient border highlight */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent pointer-events-none" />

      {/* Bottom ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-t from-amber-400/10 via-yellow-400/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-zinc-200 dark:border-zinc-900/80 transition-colors">
          
          {/* Brand Logo & Tagline */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white transition-all duration-300 hover:text-amber-500">
              Ranjeet<span className="text-amber-500 dark:text-amber-400">.</span>
            </a>
            <p className="text-xs font-mono text-zinc-500 mt-2 tracking-wider font-semibold">
              FULL_STACK_DEVELOPER // UI_ENGINEER
            </p>
          </div>

          {/* Social Links & Back To Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Ranjit2002/Web_Projects.git"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-400/60 hover:bg-amber-50/60 dark:hover:bg-zinc-800 shadow-sm hover:shadow-[0_0_20px_rgba(251,191,36,0.35)] hover:-translate-y-1 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://linkedin.com/in/ranjeet-vishwakarma-5008262a5"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-400/60 hover:bg-amber-50/60 dark:hover:bg-zinc-800 shadow-sm hover:shadow-[0_0_20px_rgba(251,191,36,0.35)] hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href="mailto:vishwakarmaranjit8109@gmail.com"
              className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-400/60 hover:bg-amber-50/60 dark:hover:bg-zinc-800 shadow-sm hover:shadow-[0_0_20px_rgba(251,191,36,0.35)] hover:-translate-y-1 transition-all duration-300"
              aria-label="Email Me"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group p-2.5 rounded-full bg-gradient-to-r from-amber-500/15 via-yellow-400/15 to-amber-500/15 hover:from-amber-400 hover:via-yellow-300 hover:to-amber-400 text-amber-600 dark:text-amber-400 hover:text-zinc-950 dark:hover:text-zinc-950 border border-amber-500/40 dark:border-amber-400/40 transition-all duration-300 ml-2 shadow-sm hover:shadow-[0_0_25px_rgba(251,191,36,0.45)] hover:-translate-y-1 cursor-pointer"
              aria-label="Back to Top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="flex items-center justify-center pt-8 text-xs font-mono text-zinc-500 text-center">
          <p>© {new Date().getFullYear()} Ranjeet Vishwakarma. Engineered with high-performance modern web standards.</p>
        </div>

      </div>
    </footer>
  );
}
