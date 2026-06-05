'use client'

import { AnimateIn, StaggerContainer, staggerChild } from '@/components/ui/AnimateIn'
import { motion } from 'framer-motion'

const skills = [
  { category: 'Core Stack', items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
  { category: 'Styling & Design', items: ['Tailwind CSS', 'SCSS', 'Responsive Design', 'Figma', 'Design Systems'] },
  { category: 'State & APIs', items: ['Redux', 'Context API', 'RESTful APIs', 'GraphQL', 'React Query'] },
  { category: 'CMS & Tools', items: ['AEM (Adobe Experience Manager)', 'Git & GitHub', 'CI/CD', 'Jest', 'Webpack'] },
]

const stats = [
  { value: '3+', label: 'Years enterprise experience' },
  { value: '35%', label: 'Page load improvement at ETS' },
  { value: '40%', label: 'UI inconsistency reduction at Accenture' },
]

const experience = [
  {
    role: 'Frontend Engineer',
    company: 'ETS (Educational Testing Service)',
    period: 'Dec 2025 – Present',
    highlights: [
      'Reduced page load times by 35% via code-splitting, lazy loading & API optimization',
      'Architected reusable component library — cut dev time by 30%',
      'Led WCAG 2.1 AA accessibility compliance serving millions of users',
      'Improved user engagement by 25%, reduced drop-offs by 20%',
    ],
  },
  {
    role: 'Software Engineer (UX Focus)',
    company: 'Accenture',
    period: 'Aug 2024 – Dec 2025',
    highlights: [
      'Built AEM components & templates for Fortune 500 enterprise clients',
      'Eliminated 40% of UI inconsistencies via centralized React + TypeScript design system',
      'Improved mobile usability by 30%, 95%+ cross-browser compatibility',
      'Delivered 10+ features — 100% on-time across Agile sprint cycles',
    ],
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-xs font-mono text-tertiary tracking-widest uppercase">01 / About</span>
            <div className="h-px flex-1 max-w-24" style={{ background: 'var(--border)' }} />
          </div>
        </AnimateIn>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <AnimateIn delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight mb-8">
                Engineering impact,<br />
                <span style={{ color: 'var(--accent)' }}>designing experience.</span>
              </h2>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <p className="text-secondary leading-relaxed mb-6">
                I'm a Frontend Engineer with 3+ years of enterprise experience at Accenture and ETS —
                two of the largest technology and assessment organizations in the world. I build fast,
                accessible, and scalable interfaces where clean component design meets measurable business outcomes.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.25}>
              <p className="text-secondary leading-relaxed mb-6">
                My work sits at the intersection of UI architecture and user experience.
                I care deeply about the details — performance budgets, accessibility, loading states,
                and the micro-interactions that make a product feel <em className="text-primary not-italic font-medium">alive</em>.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <p className="text-secondary leading-relaxed mb-10">
                I also have hands-on AEM (Adobe Experience Manager) experience from Accenture —
                building CMS-driven component architectures for enterprise clients. This combination
                of React engineering and AEM expertise is genuinely rare.
              </p>
            </AnimateIn>

            {/* Stats */}
            <AnimateIn delay={0.35}>
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl border bg-card transition-all duration-300 hover:shadow-card"
                    style={{ borderColor: 'var(--border-subtle)' }}
                  >
                    <div className="font-display text-3xl text-primary mb-1" style={{ color: 'var(--accent)' }}>{stat.value}</div>
                    <div className="text-xs text-tertiary font-mono">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          <div>
            {/* Experience */}
            <AnimateIn delay={0.15}>
              <h3 className="text-sm font-mono text-tertiary tracking-widest uppercase mb-6">
                Experience
              </h3>
            </AnimateIn>

            <div className="space-y-6 mb-10">
              {experience.map((exp, i) => (
                <AnimateIn key={exp.company} delay={0.2 + i * 0.1}>
                  <div
                    className="p-5 rounded-xl border bg-card"
                    style={{ borderColor: 'var(--border-subtle)' }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="font-medium text-sm text-primary">{exp.role}</div>
                        <div className="text-xs font-mono text-tertiary mt-0.5">{exp.company}</div>
                      </div>
                      <div className="text-xs text-tertiary font-mono shrink-0 ml-2">{exp.period}</div>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h) => (
                        <li key={h} className="text-xs text-secondary flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateIn>
              ))}
            </div>

            {/* Skills */}
            <AnimateIn delay={0.15}>
              <h3 className="text-sm font-mono text-tertiary tracking-widest uppercase mb-6">
                Skills & Tools
              </h3>
            </AnimateIn>

            <StaggerContainer className="space-y-4" staggerDelay={0.07}>
              {skills.map((group) => (
                <motion.div key={group.category} variants={staggerChild}>
                  <div className="text-xs font-mono text-tertiary mb-2 tracking-wider">{group.category}</div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.04, y: -1 }}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-secondary text-secondary border transition-all duration-200 cursor-default hover:border-current"
                        style={{ borderColor: 'var(--border-subtle)' }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
