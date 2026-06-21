"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SkillRing from "./SkillRing";
import { PROFILE } from "@/lib/profileData";

const SKILL_RINGS = [
  { name: "React.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Next.js", level: 92 },
  { name: "Redux", level: 88 },
  { name: "Tailwind", level: 93 },
  { name: "GraphQL", level: 82 },
  { name: "Testing", level: 85 },
  { name: "Figma", level: 87 },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="section-divider" />
          <p className="text-xs font-mono text-accent tracking-widest mb-2">01 / ABOUT</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-primary">
            Where engineering rigor
            <br />
            <span className="text-gradient">meets UX instinct.</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* Story — large card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 lg:col-span-3 p-8 rounded-3xl bg-surface border border-subtle spotlight"
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
              e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
            }}
          >
            <div className="relative z-10 space-y-4 text-secondary leading-relaxed font-body">
              <p className="text-lg">
                I'm a <strong className="text-primary font-semibold">Design Engineer</strong> with{" "}
                {PROFILE.yearsExperience} years of enterprise experience sitting at the intersection of frontend
                engineering and UX — building highly interactive, state-heavy React/TypeScript interfaces and
                component systems used at scale. I hold a{" "}
                <strong className="text-primary font-semibold">Master's in Computer Science</strong> from the
                University of Central Missouri, building on a Bachelor's in Electronics & Communication Engineering.
              </p>
              <p>
                I'm comfortable working with ambiguity and evolving requirements — known for proactively identifying
                rough edges and shaping UX rather than just implementing it. I obsess over the right hover state,
                typography that breathes, and animation that doesn't overstay its welcome. Great UI isn't decoration
                — it's communication.
              </p>
              <p>
                I'm also a daily, active user of AI-assisted development tools — Claude, GitHub Copilot, and Cursor —
                to move fast without sacrificing craft.
              </p>
              <p className="text-sm text-muted">
                📍 {PROFILE.location} — {PROFILE.relocate} &nbsp;|&nbsp; Currently @ ETS
              </p>
            </div>
          </motion.div>

          {/* Education — tall card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="lg:col-span-1 md:col-span-1 p-7 rounded-3xl bg-primary text-main border border-primary/20"
          >
            <p className="text-xs font-mono tracking-widest opacity-60 mb-5">EDUCATION</p>
            <div className="space-y-4">
              {PROFILE.education.map((edu, i) => (
                <div key={edu.degree}>
                  <p className="text-sm font-semibold leading-snug">{edu.degree}</p>
                  <p className="text-xs opacity-60 mt-0.5">{edu.institution}</p>
                  <p className="text-xs opacity-50">{edu.period}</p>
                  {i < PROFILE.education.length - 1 && <div className="w-full h-px bg-white/10 mt-4" />}
                </div>
              ))}
            </div>
            <div className="w-full h-px bg-white/10 my-4" />
            <p className="text-xs font-mono tracking-widest opacity-60 mb-3">CERTIFICATIONS</p>
            <ul className="space-y-1.5">
              {PROFILE.certifications.map((c) => (
                <li key={c} className="text-xs opacity-75 leading-relaxed">
                  • {c}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Skill rings — wide card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="md:col-span-3 lg:col-span-3 p-8 rounded-3xl bg-surface border border-subtle"
          >
            <p className="text-xs font-mono text-muted tracking-widest mb-6">CORE PROFICIENCY</p>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
              {SKILL_RINGS.map((skill, i) => (
                <SkillRing key={skill.name} label={skill.name} level={skill.level} delay={0.3 + i * 0.06} />
              ))}
            </div>
          </motion.div>

          {/* Tools — tall card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="md:col-span-3 lg:col-span-1 p-7 rounded-3xl bg-surface-2 border border-subtle"
          >
            <p className="text-xs font-mono text-muted tracking-widest mb-4">FULL TOOLBELT</p>
            <div className="flex flex-wrap gap-2">
              {[...PROFILE.skills.stateApis.slice(0, 4), ...PROFILE.skills.testing.slice(0, 2), ...PROFILE.skills.dataViz.slice(0, 3), ...PROFILE.skills.aiTools].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-main border border-subtle text-secondary hover:border-accent hover:text-accent transition-all duration-200 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
