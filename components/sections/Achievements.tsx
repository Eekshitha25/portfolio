'use client'

import { motion } from 'framer-motion'
import { AnimateIn, StaggerContainer, staggerChild } from '@/components/ui/AnimateIn'
import { Trophy, Palette, Camera, Plane, ChefHat } from 'lucide-react'

const achievements = [
  {
    icon: Trophy,
    title: 'Gold Medal — Chess',
    description:
      'Competitive chess has sharpened my strategic thinking, patience, and ability to think multiple moves ahead — skills that directly translate to systems design and debugging.',
    highlight: 'Gold Medalist',
    color: '#c17f3e',
    colorBg: 'rgba(193,127,62,0.07)',
  },
  {
    icon: Palette,
    title: 'UI/UX Design Experience',
    description:
      'Proficient in Figma and Adobe XD with hands-on experience designing end-to-end user flows, component systems, and high-fidelity prototypes that bridge design and code.',
    highlight: 'Design Systems',
    color: 'var(--accent)',
    colorBg: 'rgba(84,112,80,0.07)',
  },
  {
    icon: null,
    title: 'Frontend Engineering Stack',
    description:
      'Shipped multiple production-grade web applications using React.js, Next.js, TypeScript, and Tailwind CSS — with a focus on performance, accessibility, and developer experience.',
    highlight: 'Production Ready',
    color: 'var(--accent)',
    colorBg: 'rgba(84,112,80,0.07)',
  },
]

const passions = [
  { icon: Camera, label: 'Photography', desc: 'Trains compositional thinking' },
  { icon: Plane, label: 'Travel', desc: 'Drives curiosity & context' },
  { icon: ChefHat, label: 'Cooking', desc: 'Builds patience & precision' },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <AnimateIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-xs font-mono text-tertiary tracking-widest uppercase">03 / Achievements</span>
            <div className="h-px flex-1 max-w-24" style={{ background: 'var(--border)' }} />
          </div>
        </AnimateIn>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <AnimateIn delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight mb-12">
                Beyond<br />
                <span style={{ color: 'var(--accent)' }}>the screen.</span>
              </h2>
            </AnimateIn>

            <StaggerContainer className="space-y-4" staggerDelay={0.09}>
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.title}
                  variants={staggerChild}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="group flex gap-4 p-5 rounded-xl border bg-card transition-all duration-300 hover:shadow-card"
                  style={{ borderColor: 'var(--border-subtle)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: achievement.colorBg }}
                  >
                    {achievement.icon && (
                      <achievement.icon size={18} style={{ color: achievement.color }} />
                    )}
                    {!achievement.icon && (
                      <span className="text-sm font-mono font-bold" style={{ color: achievement.color }}>{'</>'}</span>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="font-medium text-sm text-primary">{achievement.title}</h3>
                      <span
                        className="px-2 py-0.5 rounded-full text-xs font-medium"
                        style={{ background: achievement.colorBg, color: achievement.color }}
                      >
                        {achievement.highlight}
                      </span>
                    </div>
                    <p className="text-sm text-secondary leading-relaxed">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>

          <div>
            <AnimateIn delay={0.15}>
              <h3 className="text-sm font-mono text-tertiary tracking-widest uppercase mb-8">
                What I do outside of code
              </h3>
            </AnimateIn>

            <StaggerContainer className="grid gap-4" staggerDelay={0.1}>
              {passions.map((p) => (
                <motion.div
                  key={p.label}
                  variants={staggerChild}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center gap-5 p-6 rounded-2xl border bg-card transition-all duration-300 hover:shadow-card"
                  style={{ borderColor: 'var(--border-subtle)' }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: 'var(--bg-secondary)' }}
                  >
                    <p.icon size={22} className="text-secondary" />
                  </div>
                  <div>
                    <div className="font-medium text-primary">{p.label}</div>
                    <div className="text-xs text-tertiary mt-0.5">{p.desc}</div>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>

            {/* Philosophy quote */}
            <AnimateIn delay={0.35}>
              <div
                className="mt-8 p-6 rounded-2xl border relative overflow-hidden"
                style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-secondary)' }}
              >
                <div
                  className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
                  style={{ background: 'var(--accent)' }}
                />
                <p className="text-sm text-secondary leading-relaxed pl-4 italic">
                  "Good design is invisible. Great engineering makes it feel inevitable.
                  I aim for both — writing code that is as clean as the interface it powers."
                </p>
                <div className="text-xs text-tertiary font-mono mt-3 pl-4">— Eekshitha Gujjala</div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  )
}
