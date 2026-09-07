import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import TechStack from './components/TechStack.jsx';
import DeepDives from './components/DeepDives.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'dark';
    }
    return 'dark';
  });

  const [activeSection, setActiveSection] = useState('home');
  const [deepDiveTab, setDeepDiveTab] = useState('github');
  const [toastMessage, setToastMessage] = useState('');

  // Apply theme to <html> element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // ScrollSpy to update active navigation item
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'deep-dives', 'projects', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  const handleDeepDiveSelect = (tabKey) => {
    setDeepDiveTab(tabKey);
    const element = document.getElementById('deep-dives');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#fafafc] dark:bg-[#08080a] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 overflow-x-hidden font-['Outfit',sans-serif]">
      {/* Dynamic Ambient Glows for Dark and Light Mode */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.14),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.12),transparent_70%)] transition-opacity duration-500" />
        
        {/* Bottom ambient glow */}
        <div className="absolute bottom-0 right-0 w-[650px] h-[650px] bg-[radial-gradient(circle,rgba(245,158,11,0.08),transparent_70%)] dark:bg-[radial-gradient(circle,rgba(245,158,11,0.06),transparent_70%)] transition-opacity duration-500" />
      </div>

      {/* Main Navigation with Theme Toggle */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Content Sections */}
      <main className="relative z-10">
        <Hero theme={theme} />
        <About onSelectDeepDive={handleDeepDiveSelect} theme={theme} />
        <TechStack theme={theme} />
        <DeepDives selectedTab={deepDiveTab} setSelectedTab={setDeepDiveTab} theme={theme} />
        <Projects theme={theme} />
        <Contact onShowToast={showToast} theme={theme} />
      </main>

      <Footer theme={theme} />

      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce transition-all duration-300">
          <div className="flex items-center gap-3 px-5 py-3.5 bg-white/95 dark:bg-zinc-950/95 border border-amber-400/70 rounded-2xl shadow-[0_10px_35px_rgba(251,191,36,0.25)] dark:shadow-[0_0_30px_rgba(251,191,36,0.3)] backdrop-blur-2xl text-zinc-900 dark:text-white transition-colors duration-300">
            <CheckCircle2 className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0" />
            <span className="text-sm font-medium">{toastMessage}</span>
            <button
              onClick={() => setToastMessage('')}
              className="p-1 hover:text-amber-500 dark:hover:text-amber-400 text-zinc-400 transition-colors ml-1"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
