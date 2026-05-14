'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-16">
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, var(--accent-warm) 0%, transparent 70%)' }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-8 flex items-center gap-2 px-4 py-2 rounded-full border border-subtle bg-card/60 backdrop-blur-sm text-xs font-medium text-secondary"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'var(--accent)' }} />
          <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--accent)' }} />
        </span>
        Open to Frontend Developer &amp; UI Engineer roles
        <Sparkles size={12} style={{ color: 'var(--accent-warm)' }} />
      </motion.div>

      {/* Main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl relative z-10"
      >
        <motion.p variants={item} className="text-sm font-mono text-tertiary tracking-widest uppercase mb-4 font-medium">
          Eekshitha Gujjala
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-primary mb-6"
        >
          Frontend
          <span className="block" style={{ color: 'var(--accent)' }}>Developer</span>
          <span className="block text-4xl md:text-5xl lg:text-6xl font-body font-light text-secondary mt-2">
            &amp; UI Engineer
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-base md:text-lg text-secondary leading-relaxed max-w-xl mx-auto mb-10"
        >
          Crafting intuitive, high-performance web experiences with React, Next.js, and modern design systems.
          Turning complex problems into elegant, accessible interfaces.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            View Projects
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm border transition-all duration-300 hover:bg-secondary hover:-translate-y-0.5 text-primary"
            style={{ borderColor: 'var(--border)' }}
          >
            Contact Me
          </a>
        </motion.div>

        {/* Tech stack pills */}
        <motion.div
          variants={item}
          className="mt-12 flex flex-wrap justify-center gap-2"
        >
          {['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Adobe XD'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-mono border text-tertiary hover:text-secondary hover:border-current transition-colors cursor-default"
              style={{ borderColor: 'var(--border-subtle)' }}
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-tertiary"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-24 right-8 md:right-16 opacity-20 rotate-12 font-mono text-xs text-tertiary leading-relaxed hidden lg:block">
        <div>React Developer</div>
        <div>UI Engineer</div>
        <div>UX Thinker</div>
      </div>
      <div className="absolute bottom-24 left-8 md:left-16 opacity-20 -rotate-6 font-mono text-xs text-tertiary leading-relaxed hidden lg:block">
        <div>TypeScript</div>
        <div>Framer Motion</div>
        <div>Tailwind CSS</div>
      </div>
    </section>
  )
}
