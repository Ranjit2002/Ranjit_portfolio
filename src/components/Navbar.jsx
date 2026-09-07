import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle.jsx';

export default function Navbar({ activeSection, setActiveSection, theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Deep Dives', href: '#deep-dives', id: 'deep-dives' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-[#08080a]/85 backdrop-blur-xl border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick('home')}
          className="group text-2xl md:text-3xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white flex items-center gap-1 transition-colors"
        >
          <span className="relative">
            Ranjeet
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
          </span>
          <span className="text-amber-500 dark:text-amber-400 inline-block group-hover:animate-bounce">.</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1 bg-white/80 dark:bg-zinc-950/60 border border-zinc-200/90 dark:border-zinc-800/60 rounded-full px-4 py-1.5 backdrop-blur-md shadow-sm dark:shadow-none transition-colors">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? 'text-black font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 shadow-[0_0_15px_rgba(251,191,36,0.45)]'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100/90 dark:hover:bg-zinc-900/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Desktop Action Buttons: Theme Toggle + Resume */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <ThemeToggle theme={theme} onToggle={toggleTheme} />

          {/* Resume Download CTA */}
          <a
            href={`${import.meta.env.BASE_URL}PDF/My Resume.pdf`}
            download="Ranjeet_Vishwakarma_Resume.pdf"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-300 bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/30 dark:border-amber-400/40 rounded-full hover:bg-amber-400 hover:text-black dark:hover:bg-amber-400 dark:hover:text-black transition-all duration-300 shadow-[0_2px_10px_rgba(245,158,11,0.12)] hover:shadow-[0_0_20px_rgba(251,191,36,0.35)]"
          >
            <FileDown className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Actions: Theme Toggle + Hamburger Button */}
        <div className="lg:hidden flex items-center gap-2.5">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-zinc-700 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen
            ? 'max-h-[450px] opacity-100 border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-[#08080a]/95 backdrop-blur-2xl shadow-xl'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 space-y-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black shadow-lg shadow-amber-400/20'
                    : 'text-zinc-700 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-zinc-100 dark:hover:bg-zinc-900/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col gap-3">
            <a
              href={`${import.meta.env.BASE_URL}PDF/My Resume.pdf`}
              download="Ranjeet_Vishwakarma_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 py-3 bg-amber-400 text-black font-bold uppercase tracking-wider rounded-xl text-sm shadow-md hover:bg-amber-300 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
