"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Phone, ExternalLink, Download, ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { PROFILE } from "@/lib/profileData";

const LINKS = [
  { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}`, description: "Best for project inquiries", featured: true },
  { icon: Phone, label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/[^\d+]/g, "")}`, description: "Direct line", featured: false },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/eekshitha-gujjala", href: PROFILE.linkedin, description: "Professional network", featured: false },
  { icon: Github, label: "GitHub", value: "github.com/Eekshitha25", href: PROFILE.github, description: "Open source & project code", featured: false },
];

const PROJECTS_LINKS = PROFILE.projects.map((p) => ({ name: p.name, description: p.tagline, url: p.url, color: p.name === "Planora" ? "#7C9E8E" : "#C8A96E" }));

function spotlightHandler(e: React.MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" ref={ref} className="py-28 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
          <div className="section-divider" />
          <p className="text-xs font-mono text-accent tracking-widest mb-2">06 / CONTACT</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-primary">
            Let's build something
            <br />
            <span className="text-gradient">remarkable.</span>
          </h2>
          <p className="mt-4 text-secondary max-w-md">
            Open to Design Engineer, Frontend Engineer, and UX-focused engineering roles. Reach out anytime — I typically respond within a day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="space-y-4">
            {LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") || link.href.startsWith("tel") ? undefined : "_blank"}
                rel="noopener noreferrer"
                data-cursor="link"
                onMouseMove={spotlightHandler}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className={`spotlight group flex items-center justify-between p-5 rounded-2xl border transition-colors duration-300 hover:-translate-y-0.5 ${
                  link.featured ? "border-accent/40 bg-accent/5 hover:border-accent" : "border-subtle bg-main hover:border-accent/30"
                }`}
              >
                <div className="relative z-10 flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${link.featured ? "bg-accent text-ink-900" : "bg-surface border border-subtle text-muted group-hover:text-accent transition-colors"}`}>
                    <link.icon size={17} />
                  </div>
                  <div>
                    <p className="text-xs text-muted mb-0.5">{link.description}</p>
                    <p className="font-semibold text-primary text-sm">{link.label}</p>
                    <p className="text-xs text-muted mt-0.5 truncate max-w-[200px]">{link.value}</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="relative z-10 text-muted group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </motion.a>
            ))}

            <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.55 }}>
              <MagneticButton
                href={PROFILE.resumeUrl}
                download
                cursorVariant="link"
                strength={0.2}
                className="group flex items-center justify-between p-5 rounded-2xl border border-primary/20 bg-primary text-main hover:bg-accent hover:border-accent hover:text-ink-900 transition-colors duration-300 w-full"
              >
                <span className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Download size={17} />
                  </span>
                  <span>
                    <span className="block text-xs opacity-70 mb-0.5">One-click download</span>
                    <span className="block font-semibold text-sm">Download Resume</span>
                    <span className="block text-xs opacity-60 mt-0.5">PDF · Full work history</span>
                  </span>
                </span>
                <Download size={16} className="opacity-60 group-hover:translate-y-0.5 transition-transform" />
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-6">
            <div className="p-6 rounded-2xl border border-subtle bg-main">
              <p className="text-xs font-mono text-muted tracking-widest mb-4">LIVE PROJECTS</p>
              <div className="space-y-3">
                {PROJECTS_LINKS.map((project) => (
                  <a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="view"
                    data-cursor-label="OPEN"
                    onMouseMove={spotlightHandler}
                    className="spotlight group flex items-center justify-between p-4 rounded-xl bg-surface border border-subtle hover:border-accent/40 transition-colors duration-200"
                  >
                    <div className="relative z-10 flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: project.color }} />
                      <div>
                        <p className="text-sm font-semibold text-primary">{project.name}</p>
                        <p className="text-xs text-muted">{project.description}</p>
                      </div>
                    </div>
                    <ExternalLink size={14} className="relative z-10 text-muted group-hover:text-accent transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-accent/30 bg-accent/5">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-mono text-accent tracking-widest">OPEN TO OPPORTUNITIES</span>
              </div>
              <p className="text-secondary text-sm leading-relaxed mb-4">
                Currently a <strong className="text-primary">Frontend Engineer at ETS</strong>, open to exploring{" "}
                <strong className="text-primary">Design Engineer</strong> and <strong className="text-primary">Frontend/UX Hybrid</strong> roles. Based in{" "}
                <strong className="text-primary">{PROFILE.location}</strong> — {PROFILE.relocate.toLowerCase()}.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Full-time", "Relocation OK", "Remote", "Hybrid"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full text-xs border border-accent/30 text-accent">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-subtle bg-main">
              <p className="text-xs font-mono text-muted tracking-widest mb-3">ROLES SHE FITS</p>
              <div className="flex flex-wrap gap-2">
                {["Design Engineer", "Frontend Engineer", "React Developer", "UI Engineer", "UX Engineer", "Next.js Developer"].map((role) => (
                  <span key={role} className="px-3 py-1.5 rounded-full text-xs bg-surface border border-subtle text-secondary">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
