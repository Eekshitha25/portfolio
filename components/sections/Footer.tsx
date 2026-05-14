'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-10 px-6 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-tertiary">
          <span className="font-display text-lg text-primary">EG<span style={{ color: 'var(--accent)' }}>.</span></span>
          <span className="text-tertiary">·</span>
          <span>Eekshitha Gujjala</span>
          <span className="text-tertiary">·</span>
          <span>Frontend Developer</span>
        </div>

        <div className="text-xs font-mono text-tertiary">
          © {year} · Built with Next.js & Tailwind CSS
        </div>

        <div className="flex items-center gap-4 text-xs text-tertiary">
          <a href="#about" className="hover:text-secondary transition-colors">About</a>
          <a href="#projects" className="hover:text-secondary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
