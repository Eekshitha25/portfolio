"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { PROFILE } from "@/lib/profileData";

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="py-28 px-6 bg-surface border-y border-subtle">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="section-divider" />
          <p className="text-xs font-mono text-accent tracking-widest mb-2">02 / EXPERIENCE</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-primary">
            {PROFILE.yearsExperience} years, enterprise scale.
          </h2>
        </motion.div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="space-y-10">
            {PROFILE.experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
                className="relative sm:pl-14"
              >
                {/* timeline dot */}
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-main border-2 border-accent items-center justify-center hidden sm:flex">
                  <Briefcase size={16} className="text-accent" />
                </div>

                <div className="p-7 rounded-3xl bg-main border border-subtle hover:border-accent/40 transition-colors duration-300">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-display text-xl font-semibold text-primary">
                      {job.title} <span className="text-accent">· {job.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-muted">{job.period}</span>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-secondary leading-relaxed">
                        <span className="text-accent mt-1.5 flex-shrink-0">→</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {job.stack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-mono bg-surface border border-subtle text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
