'use client'

import { AnimateIn } from '@/components/ui/AnimateIn'
import { Mail, Linkedin, Github, FileText } from 'lucide-react'

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'eekshithaofficial25@gmail.com',
    href: 'mailto:eekshithaofficial25@gmail.com',
    description: 'Best for opportunities',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/eekshitha-gujjala',
    href: 'https://linkedin.com/in/eekshitha-gujjala-6614442b5',
    description: "Let's connect",
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Eekshitha25',
    href: 'https://github.com/Eekshitha25',
    description: 'See my code',
  },
]

const roles = [
  'Frontend Engineer',
  'React Developer',
  'UI Engineer',
  'AEM Developer',
  'Design Engineer',
  'Frontend Architect',
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <AnimateIn>
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="h-px w-16" style={{ background: 'var(--border)' }} />
            <span className="text-xs font-mono text-tertiary tracking-widest uppercase">04 / Contact</span>
            <div className="h-px w-16" style={{ background: 'var(--border)' }} />
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono mb-6" style={{ background: 'rgba(84,112,80,0.08)', color: 'var(--accent)' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'var(--accent)' }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--accent)' }} />
            </span>
            Available for new opportunities — STEM OPT · 15 months remaining
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <h2 className="font-display text-4xl md:text-6xl text-primary leading-tight mb-6">
            Let&apos;s build<br />
            <span style={{ color: 'var(--accent)' }}>something great.</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className="text-secondary leading-relaxed max-w-lg mx-auto mb-12">
            I&apos;m actively seeking full-time Frontend Engineer roles. Open to relocating anywhere in the US.
            Let&apos;s talk about what you&apos;re building.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.25}>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {links.map(({ icon: Icon, label, value, href, description }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group p-5 rounded-xl border bg-card text-left transition-all duration-300 hover:shadow-card hover:-translate-y-1"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                <Icon size={18} className="mb-3 text-tertiary group-hover:text-primary transition-colors" style={{ color: 'var(--accent)' }} />
                <div className="text-xs font-mono text-tertiary mb-1">{label}</div>
                <div className="text-sm font-medium text-primary mb-1 truncate">{value}</div>
                <div className="text-xs text-tertiary">{description}</div>
              </a>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <div className="mb-10">
            <div className="text-xs font-mono text-tertiary mb-4 tracking-widest uppercase">Open to these roles</div>
            <div className="flex flex-wrap justify-center gap-2">
              {roles.map((role) => (
                <span
                  key={role}
                  className="px-3 py-1.5 rounded-full text-xs font-medium border text-secondary"
                  style={{ borderColor: 'var(--border-subtle)' }}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.35}>
          <blockquote className="text-sm text-tertiary italic max-w-md mx-auto border-l-2 pl-4 text-left" style={{ borderColor: 'var(--accent)' }}>
            &ldquo;Good design is invisible. Great engineering makes it feel inevitable. I aim for both.&rdquo;
          </blockquote>
        </AnimateIn>
      </div>
    </section>
  )
}
