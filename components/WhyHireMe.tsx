"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Layers, Eye, Globe } from "lucide-react";

const REASONS = [
  {
    icon: Zap,
    title: "Ships fast, ships clean",
    description:
      "From Figma frame to deployed UI in days, not weeks — without cutting corners on code quality or accessibility.",
    color: "#C8A96E",
  },
  {
    icon: Layers,
    title: "Design + engineering, one person",
    description:
      "I don't wait on hand-off. I design the interface, build the component, and ship it — fewer translation losses, faster iteration.",
    color: "#8B9EBE",
  },
  {
    icon: Eye,
    title: "Obsessed with the 1% details",
    description:
      "Hover states, spacing rhythm, motion easing — the details recruiters notice in the first 10 seconds are the ones I sweat over.",
    color: "#7C9E8E",
  },
  {
    icon: Globe,
    title: "Remote-ready, async-friendly",
    description:
      "Comfortable working independently across time zones with clear written communication and proactive updates.",
    color: "#C2776B",
  },
];

export default function WhyHireMe() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-surface-2 border-y border-subtle">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center max-w-2xl mx-auto"
        >
          <p className="text-xs font-mono text-accent tracking-widest mb-2">05 / WHY WORK WITH ME</p>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-primary">
            Built to make hiring me an easy decision.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
              className="p-6 rounded-2xl bg-surface border border-subtle hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${reason.color}20` }}
              >
                <reason.icon size={19} style={{ color: reason.color }} />
              </div>
              <h3 className="font-display text-base font-semibold text-primary mb-2 leading-snug">
                {reason.title}
              </h3>
              <p className="text-xs text-secondary leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
