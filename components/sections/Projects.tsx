'use client'

import { motion } from 'framer-motion'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { ExternalLink, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: '01',
    name: 'FocusFlow',
    tagline: 'Productivity Redefined',
    url: 'https://focusflow-nu-mauve.vercel.app',
    type: 'Productivity App',
    year: '2024',
    color: 'var(--accent)',
    colorLight: 'rgba(84,112,80,0.06)',
    problem:
      'Modern productivity tools overwhelm users with features, creating friction instead of focus. People need a distraction-free system that makes task management feel effortless.',
    solution:
      'Designed a minimalist task management interface with three intuitive states — Todo, In-Progress, and Done — using a clean dashboard system that respects users\' cognitive load and keeps the focus on execution, not the tool.',
    outcomes: [
      'Sub-100ms task state transitions',
      'Intuitive kanban-inspired UX flow',
      'Zero-clutter dashboard architecture',
      'Mobile-first responsive experience',
    ],
    stack: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    highlights: ['Dashboard UI', 'Task Management', 'State Design', 'Clean UX'],
  },
  {
    id: '02',
    name: 'Planora',
    tagline: 'AI-Powered Travel Planning',
    url: 'https://planora-five-xi.vercel.app',
    type: 'AI Travel Planner',
    year: '2024',
    color: '#c17f3e',
    colorLight: 'rgba(193,127,62,0.06)',
    problem:
      'Planning travel itineraries is fragmented across dozens of apps. Travelers switch between booking sites, maps, and note apps — losing time and context in the process.',
    solution:
      'Built an AI-inspired itinerary builder that consolidates destination discovery, day-by-day planning, and smart trip organization into a single, Notion-meets-Airbnb interface with a modern dashboard-based design system.',
    outcomes: [
      'Unified trip planning dashboard',
      'Destination selection UX with context',
      'Day-by-day itinerary builder',
      'AI-ready data architecture',
    ],
    stack: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'UI/UX Design'],
    highlights: ['AI Integration', 'Travel UX', 'Dashboard Design', 'Notion-inspired'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <AnimateIn>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono text-tertiary tracking-widest uppercase">02 / Projects</span>
            <div className="h-px flex-1 max-w-24" style={{ background: 'var(--border)' }} />
          </div>
        </AnimateIn>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <AnimateIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">
              Selected<br />
              <span style={{ color: 'var(--accent)' }}>Case Studies</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="text-secondary text-sm max-w-xs leading-relaxed">
              Each project is a story of a problem identified, a design decision made, and an experience shipped.
            </p>
          </AnimateIn>
        </div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <AnimateIn key={project.id} delay={idx * 0.1}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group relative rounded-2xl border bg-card overflow-hidden transition-all duration-300 hover:shadow-hover-card"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                {/* Color accent stripe */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
                />

                <div className="p-8 md:p-10">
                  {/* Header row */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-xs text-tertiary">{project.id}</span>
                        <span
                          className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                          style={{ background: project.colorLight, color: project.color }}
                        >
                          {project.type}
                        </span>
                        <span className="text-xs text-tertiary font-mono">{project.year}</span>
                      </div>
                      <h3 className="font-display text-3xl md:text-4xl text-primary mb-1">
                        {project.name}
                      </h3>
                      <p className="text-sm text-secondary font-medium">{project.tagline}</p>
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 self-start shrink-0"
                      style={{
                        background: project.color,
                        color: '#fff',
                      }}
                    >
                      Live Demo
                      <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                  {/* Case study grid */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="p-5 rounded-xl" style={{ background: 'var(--bg-secondary)' }}>
                      <div className="text-xs font-mono text-tertiary mb-2 tracking-wider uppercase">Problem</div>
                      <p className="text-sm text-secondary leading-relaxed">{project.problem}</p>
                    </div>
                    <div className="p-5 rounded-xl" style={{ background: 'var(--bg-secondary)' }}>
                      <div className="text-xs font-mono text-tertiary mb-2 tracking-wider uppercase">Solution</div>
                      <p className="text-sm text-secondary leading-relaxed">{project.solution}</p>
                    </div>
                    <div className="p-5 rounded-xl" style={{ background: 'var(--bg-secondary)' }}>
                      <div className="text-xs font-mono text-tertiary mb-2 tracking-wider uppercase">Outcomes</div>
                      <ul className="space-y-2">
                        {project.outcomes.map((o) => (
                          <li key={o} className="text-sm text-secondary flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: project.color }} />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom row */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-subtle">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono text-tertiary border"
                          style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg)' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-2.5 py-1 rounded-full text-xs font-medium"
                          style={{ background: project.colorLight, color: project.color }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
