import React, { useState } from 'react';
import { ExternalLink, Sparkles, FolderGit2, ArrowUpRight, Code, Laptop, Server, Database } from 'lucide-react';
import { GithubIcon } from './Icons.jsx';

export default function Projects({ theme }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 'fullstack',
      title: 'Full Stack Web Platform',
      category: 'fullstack',
      categoryLabel: 'Full Stack Engineering',
      desc: 'High-performance web applications built with a component-driven frontend and robust REST API services, implementing secure auth and NoSQL database management.',
      tags: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'REST APIs'],
      github: 'https://github.com/Ranjit2002/Web_Projects.git',
      demoUrl: 'https://github.com/Ranjit2002/Web_Projects.git',
      stats: '60 FPS / Lighthouse 98',
      previewGradient: 'from-amber-500/20 via-yellow-500/10 to-amber-600/20',
      slug: 'fullstack-platform.app',
      icon: <Server className="w-5 h-5 text-amber-500" />,
    },
    {
      id: 'ui-system',
      title: 'Interactive UI Systems & Component Suite',
      category: 'frontend',
      categoryLabel: 'UI / UX Engineering',
      desc: 'Precision micro-interactions, dark mode glassmorphism, responsive fluid grids, and accessible components crafted with zero external CSS overhead.',
      tags: ['React 19', 'Tailwind CSS v4', 'Vite', 'Lucide Icons'],
      github: 'https://github.com/Ranjit2002/Web_Projects.git',
      demoUrl: 'https://github.com/Ranjit2002/Web_Projects.git',
      stats: '100% Responsive',
      previewGradient: 'from-blue-500/20 via-indigo-500/10 to-amber-500/20',
      slug: 'ui-design-system.dev',
      icon: <Laptop className="w-5 h-5 text-amber-500" />,
    },
    {
      id: 'algorithms',
      title: 'Algorithmic Logic & Automation Engine',
      category: 'logic',
      categoryLabel: 'Core Logic & Scripting',
      desc: 'Modular problem-solving routines and automation scripts designed in Python and modern JavaScript, solving data flow pipelines and state validations.',
      tags: ['Python', 'JavaScript', 'Data Structures', 'Git Automation'],
      github: 'https://github.com/Ranjit2002/Web_Projects.git',
      demoUrl: 'https://github.com/Ranjit2002/Web_Projects.git',
      stats: 'Optimized O(N log N)',
      previewGradient: 'from-emerald-500/20 via-teal-500/10 to-amber-500/20',
      slug: 'algo-engine.py',
      icon: <Code className="w-5 h-5 text-amber-500" />,
    },
    {
      id: 'devops',
      title: 'Distributed Version Control Workspace',
      category: 'tools',
      categoryLabel: 'DevOps & Tooling',
      desc: 'Standardized multi-repository template featuring automated GitHub Actions, commit linting, branch protection rules, and continuous delivery configuration.',
      tags: ['Git', 'GitHub Actions', 'CI/CD Pipelines', 'Shell'],
      github: 'https://github.com/Ranjit2002/Web_Projects.git',
      demoUrl: 'https://github.com/Ranjit2002/Web_Projects.git',
      stats: 'Automated CI/CD',
      previewGradient: 'from-purple-500/20 via-amber-500/10 to-pink-500/20',
      slug: 'ci-pipeline-config.yml',
      icon: <FolderGit2 className="w-5 h-5 text-amber-500" />,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Creations' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'UI / Frontend' },
    { id: 'logic', label: 'Logic & Python' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden border-t border-zinc-200/80 dark:border-zinc-900/60 transition-colors">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-400/10 dark:bg-amber-500/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/30 dark:border-amber-400/30 text-amber-700 dark:text-amber-300 font-mono text-xs rounded-full uppercase tracking-widest mb-4 transition-colors">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Featured Creations</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter transition-colors">
              Highlighted{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 dark:from-yellow-300 dark:via-amber-400 dark:to-amber-600">
                Projects
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mt-4 shadow-[0_0_12px_rgba(251,191,36,0.6)]" />
          </div>

          <a
            href="https://github.com/Ranjit2002/Web_Projects.git"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-mono text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 transition-colors uppercase tracking-widest"
          >
            <span>View All on GitHub</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-black font-bold shadow-[0_2px_15px_rgba(251,191,36,0.4)]'
                  : 'bg-white/80 dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid with Browser Window Headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-[2.5rem] bg-white/85 dark:bg-zinc-950/70 border border-zinc-200/90 dark:border-zinc-800/80 hover:border-amber-400/50 backdrop-blur-xl shadow-xl dark:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
            >
              {/* Top gradient accent strip */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

              {/* Styled Browser Window Chrome / Mockup Header */}
              <div className="bg-zinc-100/90 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800/80 px-6 py-3.5 flex items-center justify-between transition-colors">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                </div>
                
                {/* Simulated URL Bar */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 dark:bg-zinc-950/80 border border-zinc-200/60 dark:border-zinc-800/60 text-[11px] font-mono text-zinc-500 max-w-[200px] truncate">
                  <span className="text-amber-500 font-bold">https://</span>
                  <span className="truncate">{project.slug}</span>
                </div>

                <div className="text-zinc-400">
                  {project.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 font-semibold px-3 py-1 bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/20 dark:border-amber-400/20 rounded-full transition-colors">
                      {project.categoryLabel}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      {project.stats}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-zinc-900 dark:text-white uppercase tracking-tight mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-6 transition-colors">
                    {project.desc}
                  </p>

                  {/* Tech Chips */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs rounded-full font-mono transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="flex items-center justify-between pt-6 border-t border-zinc-200 dark:border-zinc-900 transition-colors">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors group/link"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-link:translate-x-0.5" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-amber-500/10 dark:bg-amber-400/10 hover:bg-amber-400 hover:text-black dark:hover:bg-amber-400 dark:hover:text-black text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-widest rounded-full border border-amber-500/30 dark:border-amber-400/30 transition-all duration-300 shadow-sm"
                  >
                    Explore Code
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
