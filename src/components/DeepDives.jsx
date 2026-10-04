import React, { useState } from 'react';
import { GitBranch, GitPullRequest, GitMerge, Search, Play, Bug, Smartphone, LayoutGrid, Gauge, CheckCircle2, Terminal, Code, Sparkles } from 'lucide-react';

export default function DeepDives({ selectedTab = 'github', setSelectedTab, theme }) {
  const [internalTab, setInternalTab] = useState('github');
  const currentTab = setSelectedTab ? selectedTab : internalTab;
  const changeTab = setSelectedTab ? setSelectedTab : setInternalTab;

  const topics = {
    github: {
      badge: 'VERSION_CONTROL_SYSTEM',
      title: 'Git & GitHub Workflows',
      subtitle: 'Mastering distributed version control, collaborative team workflows, and automated CI/CD pipelines.',
      terminalSnippet: 'git checkout -b feature/modern-ui && git commit -m "feat: implement dual theme & reactive layout"',
      cards: [
        {
          tag: 'INIT',
          icon: <GitBranch className="w-8 h-8 text-amber-500 dark:text-amber-400 group-hover:scale-115 transition-transform duration-300" />,
          title: 'Atomic Version Control',
          desc: 'Structuring granular, well-documented atomic commits, logical feature branching, and meticulous staging isolation.',
          bullets: ['Granular commits with conventional messages', 'Feature, bugfix, and release branch strategies', 'Local rebasing for clean linearized history'],
          accent: 'from-amber-500 via-yellow-400 to-amber-600',
        },
        {
          tag: 'PUSH',
          icon: <GitPullRequest className="w-8 h-8 text-amber-500 dark:text-amber-400 group-hover:scale-115 transition-transform duration-300" />,
          title: 'Seamless Collaboration',
          desc: 'Collaborating effectively via GitHub Pull Requests, constructive peer reviews, and zero-loss merge conflict resolution.',
          bullets: ['Peer reviews with actionable feedback', 'Squash & merge vs rebase workflows', 'Protection rules for main and staging branches'],
          accent: 'from-yellow-400 via-orange-400 to-amber-500',
        },
        {
          tag: 'MRGE',
          icon: <GitMerge className="w-8 h-8 text-amber-500 dark:text-amber-400 group-hover:scale-115 transition-transform duration-300" />,
          title: 'CI / CD & Integrity',
          desc: 'Integrating automated linter checks, test suites, and continuous delivery pipelines to guarantee deploy stability.',
          bullets: ['GitHub Actions continuous integration', 'Automated linting and test validation', 'Instant static & preview deployments'],
          accent: 'from-amber-600 via-yellow-500 to-orange-500',
        },
      ],
    },
    problem: {
      badge: 'LOGIC_ARCHITECTURE',
      title: 'Algorithmic Problem Solving',
      subtitle: 'Combining hardware fault-finding diagnostics with structured algorithmic decomposition to write robust code.',
      terminalSnippet: 'profile(algorithm) -> Time: O(N log N) | Space: O(1) | Hardware Interrupt: ZERO_FAULT',
      cards: [
        {
          tag: '01',
          icon: <Search className="w-8 h-8 text-amber-500 dark:text-amber-400 group-hover:scale-115 transition-transform duration-300" />,
          title: 'Analyze & Deconstruct',
          desc: 'Dissecting convoluted product requirements into clear state graphs, data flow pipelines, and edge-case definitions.',
          bullets: ['Input/output boundary mapping', 'Time and space complexity profiling', 'Modularity and boundary decoupling'],
          accent: 'from-amber-500 via-yellow-400 to-amber-600',
        },
        {
          tag: '02',
          icon: <Play className="w-8 h-8 text-amber-500 dark:text-amber-400 group-hover:scale-115 transition-transform duration-300" />,
          title: 'Execute & Implement',
          desc: 'Writing clean, idiomatic algorithms using modern JavaScript, Python, or Java to build fast, reliable systems.',
          bullets: ['Optimized data structures selection', 'Declarative, maintainable logic flows', 'Defensive programming and input validation'],
          accent: 'from-yellow-400 via-orange-400 to-amber-500',
        },
        {
          tag: '03',
          icon: <Bug className="w-8 h-8 text-amber-500 dark:text-amber-400 group-hover:scale-115 transition-transform duration-300" />,
          title: 'Diagnostic Debugging',
          desc: 'Applying oscilloscope-level hardware isolation methodology to rapidly locate memory leaks, race conditions, and bottlenecks.',
          bullets: ['Binary search style fault isolation', 'Chrome DevTools profiling & heap audits', 'Fast root-cause triage under pressure'],
          accent: 'from-amber-600 via-yellow-500 to-orange-500',
        },
      ],
    },
    responsive: {
      badge: 'UI_ENGINEERING',
      title: 'Responsive UI Engineering',
      subtitle: 'Ensuring pixel-perfect aesthetics, fluid layouts, and 60fps rendering across all modern mobile and desktop devices.',
      terminalSnippet: 'CSS Grid Auto-Fit: minmax(320px, 1fr) | Viewport: clamp(16px, 1.2vw + 12px, 24px)',
      cards: [
        {
          tag: '01',
          icon: <Smartphone className="w-8 h-8 text-amber-500 dark:text-amber-400 group-hover:scale-115 transition-transform duration-300" />,
          title: 'Mobile-First Philosophy',
          desc: 'Designing core ergonomics for smaller touch screens first, guaranteeing instantaneous initial paints and rapid interactions.',
          bullets: ['Touch-friendly hit targets (minimum 44px)', 'Critical CSS rendering path priority', 'Adaptive typography scaling with clamp()'],
          accent: 'from-amber-500 via-yellow-400 to-amber-600',
        },
        {
          tag: '02',
          icon: <LayoutGrid className="w-8 h-8 text-amber-500 dark:text-amber-400 group-hover:scale-115 transition-transform duration-300" />,
          title: 'Fluid Grid Systems',
          desc: 'Harnessing dynamic CSS Grid and Flexbox mechanics to let layouts naturally reshape without visual fragmentation.',
          bullets: ['Tailwind CSS responsive breakpoint modifiers', 'Intrinsic grid auto-fit and minmax layouts', 'Consistent spacing tokens and rhythm'],
          accent: 'from-yellow-400 via-orange-400 to-amber-500',
        },
        {
          tag: '03',
          icon: <Gauge className="w-8 h-8 text-amber-500 dark:text-amber-400 group-hover:scale-115 transition-transform duration-300" />,
          title: '60 FPS Performance',
          desc: 'Hardware-accelerated CSS transforms, lightweight DOM trees, and zero layout shift (CLS) for silky smooth experiences.',
          bullets: ['Composite-only GPU animations (transform, opacity)', 'Lazy loading and responsive image sources', 'Lighthouse 95+ performance scores'],
          accent: 'from-amber-600 via-yellow-500 to-orange-500',
        },
      ],
    },
  };

  const activeTopic = topics[currentTab] || topics.github;

  return (
    <section id="deep-dives" className="relative py-24 md:py-32 overflow-hidden border-t border-zinc-200/80 dark:border-zinc-900/60 transition-colors">
      {/* Background ambient lighting with linear gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-amber-400/15 via-yellow-300/10 to-orange-500/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="reveal-on-scroll text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-amber-500/15 to-yellow-400/10 border border-amber-500/30 dark:border-amber-400/30 text-amber-700 dark:text-amber-300 font-mono text-xs rounded-full uppercase tracking-widest mb-4 transition-all duration-300 hover:scale-105 cursor-default">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
            <span>{activeTopic.badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-4 transition-colors">
            Engineering{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 drop-shadow-[0_2px_20px_rgba(251,191,36,0.3)]">
              Deep Dives
            </span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg font-light leading-relaxed transition-colors">
            {activeTopic.subtitle}
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 rounded-full mt-6 mx-auto shadow-[0_0_15px_rgba(251,191,36,0.6)]" />
        </div>

        {/* Interactive Topic Tab Selector */}
        <div className="reveal-on-scroll delay-100 flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-white/90 dark:bg-zinc-950/80 border border-zinc-200/90 dark:border-zinc-800 rounded-2xl md:rounded-full backdrop-blur-xl flex-wrap justify-center gap-1.5 shadow-md transition-colors">
            <button
              onClick={() => changeTab('github')}
              className={`btn-shimmer px-6 py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                currentTab === 'github'
                  ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-zinc-950 shadow-lg shadow-amber-400/35 font-extrabold scale-105'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900/60 border border-transparent hover:border-amber-400/50'
              }`}
            >
              Git &amp; GitHub
            </button>
            <button
              onClick={() => changeTab('problem')}
              className={`btn-shimmer px-6 py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                currentTab === 'problem'
                  ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-zinc-950 shadow-lg shadow-amber-400/35 font-extrabold scale-105'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900/60 border border-transparent hover:border-amber-400/50'
              }`}
            >
              Problem Solving
            </button>
            <button
              onClick={() => changeTab('responsive')}
              className={`btn-shimmer px-6 py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                currentTab === 'responsive'
                  ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-zinc-950 shadow-lg shadow-amber-400/35 font-extrabold scale-105'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900/60 border border-transparent hover:border-amber-400/50'
              }`}
            >
              Responsive UI
            </button>
          </div>
        </div>

        {/* Live Topic Command Preview Bar */}
        <div className="reveal-on-scroll delay-150 max-w-2xl mx-auto mb-12 p-3.5 rounded-2xl bg-zinc-900 dark:bg-zinc-950 border border-zinc-700/60 dark:border-zinc-800 text-zinc-300 font-mono text-xs flex items-center gap-3 shadow-inner">
          <div className="flex gap-1.5 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 shadow-[0_0_6px_rgba(239,68,68,0.6)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 shadow-[0_0_6px_rgba(234,179,8,0.6)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
          </div>
          <span className="text-amber-400 shrink-0 font-bold">$</span>
          <span className="truncate text-zinc-200">{activeTopic.terminalSnippet}</span>
        </div>

        {/* 3 Pillar Cards with Scroll Animations and Stagger */}
        <div className="reveal-on-scroll delay-150 grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeTopic.cards.map((card) => {
            return (
              <div
                key={card.title}
                className="group relative rounded-[2.5rem] bg-white/85 dark:bg-zinc-950/75 border border-zinc-200/90 dark:border-zinc-800/80 hover:border-amber-400/80 backdrop-blur-xl shadow-xl hover:shadow-[0_20px_45px_-10px_rgba(251,191,36,0.25)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden cursor-default p-8 md:p-10"
              >
                {/* Top linear gradient accent strip */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                
                {/* Big Watermark Tag in Corner */}
                <span className="absolute -bottom-6 -right-2 text-7xl md:text-8xl font-black text-zinc-200/50 dark:text-zinc-900/40 select-none pointer-events-none group-hover:scale-115 group-hover:text-amber-500/10 dark:group-hover:text-amber-400/10 transition-all duration-300 font-mono uppercase tracking-tighter">
                  {card.tag}
                </span>

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl flex items-center justify-center mb-8 group-hover:border-amber-400/70 group-hover:bg-amber-400/10 group-hover:shadow-[0_0_25px_rgba(251,191,36,0.3)] transition-all duration-300">
                    {card.icon}
                  </div>

                  {/* Card Title */}
                  <h3 className="text-2xl font-black text-zinc-900 dark:text-white uppercase tracking-tight mb-4 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light mb-6 text-sm md:text-base transition-colors duration-300">
                    {card.desc}
                  </p>

                  {/* Key Bullet Points */}
                  <ul className="space-y-2.5 pt-4 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
                    {card.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400 transition-colors duration-300 group-hover:text-zinc-800 dark:group-hover:text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5 group-hover:scale-115 transition-transform duration-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
