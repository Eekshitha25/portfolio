"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    index: "01",
    name: "Planora",
    tagline: "AI Travel Planning Platform",
    category: "Full-Stack AI Platform · Next.js · OpenAI API",
    description:
      "A full-stack AI platform integrating the OpenAI API — featuring a real-time streaming dashboard, interactive data visualizations, and complex multi-step planning workflows.",
    problem:
      "Travel planning is fragmented across tabs and tools, with no single interface offering structured, AI-assisted itinerary generation with real-time feedback.",
    solution:
      "Built a real-time streaming dashboard powered by the OpenAI API, with Redux state management handling optimistic updates across multi-step planning workflows, deployed via CI/CD on Vercel.",
    stack: ["Next.js", "React.js", "TypeScript", "OpenAI API", "Redux", "Tailwind CSS", "Webpack"],
    outcomes: [
      "Real-time streaming AI responses",
      "Multi-step workflow state managed via Redux",
      "Optimistic UI updates for instant feedback",
    ],
    liveUrl: "https://planora-five-xi.vercel.app",
    accent: "#7C9E8E",
    mockupBg: "from-emerald-50/80 to-teal-50/80 dark:from-emerald-950/50 dark:to-teal-950/50",
  },
  {
    index: "02",
    name: "FocusFlow",
    tagline: "Productivity Platform",
    category: "Component Architecture · WCAG 2.1 · React",
    description:
      "A modular component library built to showcase cross-team reusable UI architecture patterns, with full WCAG 2.1 compliance and pixel-perfect Figma-to-code execution.",
    problem:
      "Teams duplicating UI logic across products leads to inconsistent UX and slower delivery — without a shared, accessible component foundation.",
    solution:
      "Built a modular, reusable component library using Context API for state, with performance optimization and pixel-perfect Figma-to-code translation, demonstrating patterns reusable across product teams.",
    stack: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "Context API"],
    outcomes: [
      "Full WCAG 2.1 accessibility compliance",
      "Pixel-perfect Figma-to-code implementation",
      "Reusable component architecture",
    ],
    liveUrl: "https://focusflow-nu-mauve.vercel.app",
    accent: "#C8A96E",
    mockupBg: "from-amber-50/80 to-stone-100/80 dark:from-stone-900/80 dark:to-stone-800/80",
  },
];

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 200, damping: 22 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 200, damping: 22 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };
  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative rounded-3xl border border-subtle bg-surface overflow-hidden hover:border-accent/40 transition-colors duration-500 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40 spotlight"
      >
        <div
          data-cursor="view"
          data-cursor-label="VIEW"
          className={`relative h-60 md:h-72 bg-gradient-to-br ${project.mockupBg} flex items-center justify-center overflow-hidden cursor-pointer`}
          onClick={() => window.open(project.liveUrl, "_blank")}
        >
          <div className="w-full h-full flex items-center justify-center p-8 relative" style={{ transform: "translateZ(40px)" }}>
            <div className="w-full max-w-md bg-main/80 backdrop-blur rounded-xl border border-subtle shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-subtle bg-surface/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                </div>
                <div className="flex-1 h-4 bg-border/60 rounded-full mx-4" />
              </div>
              <div className="p-4 space-y-3">
                <div className="flex gap-3 mb-4">
                  <div className="w-16 h-6 rounded-full" style={{ background: `${project.accent}40` }} />
                  <div className="w-12 h-6 rounded-full bg-border/40" />
                  <div className="w-14 h-6 rounded-full bg-border/40" />
                </div>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-surface/80 border border-subtle">
                    <div className="w-3 h-3 rounded-full" style={{ background: i === 1 ? project.accent : "#ccc" }} />
                    <div className="flex-1 h-2.5 bg-border/60 rounded-full" />
                    <div className="w-12 h-4 rounded-full" style={{ background: `${project.accent}30` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute top-4 left-4 font-mono text-xs text-muted/70">{project.index}</div>
        </div>

        <div className="p-8 relative z-10">
          <p className="text-xs font-mono text-muted tracking-wider mb-2">{project.category}</p>

          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="font-display text-2xl font-semibold text-primary">{project.name}</h3>
              <p className="text-sm text-accent font-medium">{project.tagline}</p>
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="mt-1 flex-shrink-0 p-2 rounded-full border border-subtle hover:border-accent hover:text-accent text-muted transition-all duration-200"
            >
              <ExternalLink size={15} />
            </a>
          </div>

          <p className="text-secondary text-sm leading-relaxed mb-6">{project.description}</p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-main border border-subtle">
              <p className="text-xs font-mono text-muted tracking-wider mb-2">PROBLEM</p>
              <p className="text-xs text-secondary leading-relaxed">{project.problem}</p>
            </div>
            <div className="p-4 rounded-xl bg-main border border-subtle">
              <p className="text-xs font-mono text-muted tracking-wider mb-2">SOLUTION</p>
              <p className="text-xs text-secondary leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-xs font-mono text-muted tracking-wider mb-3">OUTCOMES</p>
            <ul className="space-y-1.5">
              {project.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-center gap-2 text-xs text-secondary">
                  <span className="text-accent">→</span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-mono bg-main border border-subtle text-muted">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="py-28 px-6 bg-surface-2">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
          <div className="section-divider" />
          <p className="text-xs font-mono text-accent tracking-widest mb-2">03 / PROJECTS</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-primary">Case Studies</h2>
            <p className="text-secondary text-sm max-w-xs">Selected work — from problem discovery through shipped UI</p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }} className="mt-10 text-center">
          <p className="text-muted text-sm">
            More projects coming soon —{" "}
            <a href="#contact" data-cursor="link" className="text-accent hover:underline">
              let's build something together
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
