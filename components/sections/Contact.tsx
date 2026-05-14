'use client'

import { motion } from 'framer-motion'
import { AnimateIn, StaggerContainer, staggerChild } from '@/components/ui/AnimateIn'
import { Mail, Github, Linkedin, ExternalLink, Download, ArrowUpRight, MapPin } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'eekshithaofficial25@gmail.com',
    href: 'mailto:eekshithaofficial25@gmail.com',
    description: 'Best for opportunities',
    color: '#c17f3e',
    colorBg: 'rgba(193,127,62,0.08)',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/eekshitha',
    href: 'https://github.com/Eekshitha25',
    description: 'See my code',
    color: 'var(--text-primary)',
    colorBg: 'var(--bg-secondary)',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/eekshitha',
    href: 'https://www.linkedin.com/in/eekshitha-gujjala-6614442b5',
    description: 'Let\'s connect',
    color: '#0077b5',
    colorBg: 'rgba(0,119,181,0.08)',
  },
]

const liveProjects = [
  {
    name: 'FocusFlow',
    description: 'Productivity task manager',
    url: 'https://focusflow-nu-mauve.vercel.app',
    color: 'var(--accent)',
    colorBg: 'rgba(84,112,80,0.08)',
  },
  {
    name: 'Planora',
    description: 'AI travel itinerary planner',
    url: 'https://planora-five-xi.vercel.app',
    color: '#c17f3e',
    colorBg: 'rgba(193,127,62,0.08)',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <AnimateIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-xs font-mono text-tertiary tracking-widest uppercase">04 / Contact</span>
            <div className="h-px flex-1 max-w-24" style={{ background: 'var(--border)' }} />
          </div>
        </AnimateIn>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: CTA */}
          <div>
            <AnimateIn delay={0.1}>
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={14} className="text-tertiary" />
                <span className="text-xs font-mono text-tertiary">United States · Remote-Ready</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight mb-6">
                Let's build<br />
                <span style={{ color: 'var(--accent)' }}>something great.</span>
              </h2>
              <p className="text-secondary leading-relaxed mb-8 max-w-md">
                I'm actively seeking Frontend Developer and UI Engineer roles.
                If you're building something interesting, I'd love to be part of it.
                Open to full-time, contract, and remote opportunities.
              </p>
            </AnimateIn>

            {/* Status badge */}
            <AnimateIn delay={0.2}>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium mb-8"
                style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-card)' }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'var(--accent)' }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--accent)' }} />
                </span>
                <span className="text-secondary">Available for new opportunities</span>
              </div>
            </AnimateIn>

            {/* Primary CTA */}
            <AnimateIn delay={0.25}>
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a
                  href="mailto:eekshithaofficial25@gmail.com"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300"
                  style={{ background: 'var(--accent)', color: '#fff' }}
                >
                  <Mail size={15} />
                  Send me an email
                </motion.a>
                <motion.a
                  href="https://raw.githubusercontent.com/Eekshitha25/resume/main/Eekshitha_Gujjala_Resume.pdf"
                  download
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm border transition-all duration-300 text-primary hover:bg-card"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <Download size={15} />
                  Download Resume
                </motion.a>
              </div>
            </AnimateIn>

            {/* Live projects */}
            <AnimateIn delay={0.3}>
              <div className="mt-10">
                <div className="text-xs font-mono text-tertiary mb-4 tracking-widest uppercase">Live Projects</div>
                <div className="flex flex-col gap-3">
                  {liveProjects.map((project) => (
                    <motion.a
                      key={project.name}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className="group flex items-center justify-between p-4 rounded-xl border bg-card transition-all duration-200 hover:shadow-card"
                      style={{ borderColor: 'var(--border-subtle)' }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ background: project.color }}
                        />
                        <div>
                          <div className="font-medium text-sm text-primary">{project.name}</div>
                          <div className="text-xs text-tertiary">{project.description}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-tertiary group-hover:text-secondary transition-colors">
                        <span className="font-mono">vercel.app</span>
                        <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* Right: Contact cards */}
          <div>
            <AnimateIn delay={0.15}>
              <div className="text-xs font-mono text-tertiary mb-6 tracking-widest uppercase">Get in touch</div>
            </AnimateIn>

            <StaggerContainer className="space-y-3" staggerDelay={0.08}>
              {contactLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  variants={staggerChild}
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-4 p-5 rounded-2xl border bg-card transition-all duration-300 hover:shadow-card cursor-pointer"
                  style={{ borderColor: 'var(--border-subtle)' }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{ background: link.colorBg }}
                  >
                    <link.icon size={20} style={{ color: link.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-mono text-tertiary mb-0.5">{link.label}</div>
                    <div className="font-medium text-sm text-primary truncate">{link.value}</div>
                    <div className="text-xs text-tertiary mt-0.5">{link.description}</div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-tertiary group-hover:text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  />
                </motion.a>
              ))}
            </StaggerContainer>

            {/* Keywords for ATS */}
            <AnimateIn delay={0.4}>
              <div
                className="mt-8 p-5 rounded-2xl border"
                style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-card)' }}
              >
                <div className="text-xs font-mono text-tertiary mb-3 tracking-widest uppercase">Roles I'm targeting</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Frontend Developer',
                    'React Developer',
                    'UI Engineer',
                    'UX Engineer',
                    'Next.js Developer',
                    'Frontend Engineer',
                    'Junior Frontend Developer',
                  ].map((role) => (
                    <span
                      key={role}
                      className="px-2.5 py-1 rounded-full text-xs font-medium text-secondary border"
                      style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-secondary)' }}
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  )
}
