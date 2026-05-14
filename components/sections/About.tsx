'use client'

import { AnimateIn, StaggerContainer, staggerChild } from '@/components/ui/AnimateIn'
import { motion } from 'framer-motion'

const skills = [
  { category: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
  { category: 'Styling', items: ['Tailwind CSS', 'CSS Modules', 'Responsive Design', 'Animations'] },
  { category: 'Design', items: ['Figma', 'Adobe XD', 'UI/UX Design', 'Design Systems', 'Prototyping'] },
  { category: 'Workflow', items: ['Git & GitHub', 'Vercel', 'Component Libraries', 'REST APIs'] },
]

const stats = [
  { value: '3.4', label: 'CGPA (Masters in ComputerScience)' },
  { value: '2+', label: 'Years of practice' },
  { value: '5+', label: 'Projects shipped' },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <AnimateIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-xs font-mono text-tertiary tracking-widest uppercase">01 / About</span>
            <div className="h-px flex-1 max-w-24" style={{ background: 'var(--border)' }} />
          </div>
        </AnimateIn>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Story */}
          <div>
            <AnimateIn delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight mb-8">
                Engineering intuition,<br />
                <span style={{ color: 'var(--accent)' }}>designing experience.</span>
              </h2>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <p className="text-secondary leading-relaxed mb-6">
                I'm a Frontend Developer with a foundation in Electronics & Communication Engineering,
                which gave me a systems-thinking mindset I now apply to user interface architecture.
                I bridge the gap between engineering precision and design aesthetics.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.25}>
              <p className="text-secondary leading-relaxed mb-6">
                My work lives at the intersection of clean code and thoughtful UX. I care deeply about
                the details — micro-interactions, loading states, accessibility, and the moments
                that make a product feel <em className="text-primary not-italic font-medium">alive</em>.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <p className="text-secondary leading-relaxed mb-10">
                Outside work, I channel creativity through photography, travel, and cooking —
                each discipline training my eye for composition, context, and craft.
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
                    <div className="font-display text-3xl text-primary mb-1">{stat.value}</div>
                    <div className="text-xs text-tertiary font-mono">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Skills */}
          <div>
            <AnimateIn delay={0.15}>
              <h3 className="text-sm font-mono text-tertiary tracking-widest uppercase mb-8">
                Skills & Tools
              </h3>
            </AnimateIn>

            <StaggerContainer className="space-y-6" staggerDelay={0.07}>
              {skills.map((group) => (
                <motion.div key={group.category} variants={staggerChild}>
                  <div className="text-xs font-mono text-tertiary mb-3 tracking-wider">{group.category}</div>
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

            {/* Education */}
            <AnimateIn delay={0.4}>
              <div
                className="mt-8 p-5 rounded-xl border bg-card"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                <div className="text-xs font-mono text-tertiary mb-4 tracking-widest uppercase">Education</div>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium text-sm text-primary">B.Tech, Electronics & Communication Engineering</div>
                    <div className="text-xs text-tertiary mt-1">CGPA: 8.6 / 10</div>
                  </div>
                  <div
                    className="h-px"
                    style={{ background: 'var(--border-subtle)' }}
                  />
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-secondary text-xs">High School</div>
                      <div className="font-medium text-primary">9.0 / 10</div>
                    </div>
                    <div>
                      <div className="text-secondary text-xs">Intermediate</div>
                      <div className="font-medium text-primary">8.8 / 10</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  )
}
