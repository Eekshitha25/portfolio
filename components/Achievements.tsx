"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TrendingDown, Layers, TrendingUp, Trophy, Camera, Plane, ChefHat } from "lucide-react";

function Counter({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  const mv = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 1.4, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setVal(v) });
    return () => controls.stop();
  }, [inView, to, mv]);

  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const ACHIEVEMENTS = [
  {
    icon: TrendingDown,
    title: "35% Page Load Reduction",
    subtitle: "ETS — performance engineering",
    description:
      "Drove bundle optimization, code-splitting, and lazy loading, verified via Lighthouse Core Web Vitals audits and performance profiling.",
    color: "#C8A96E",
    span: "lg:col-span-2",
  },
  {
    icon: Layers,
    title: "40% UI Inconsistency ↓",
    subtitle: "Accenture — design systems",
    description:
      "Built a centralized React + TypeScript design system adopted by 4 product teams across a Fortune 500 enterprise platform.",
    color: "#8B9EBE",
    span: "lg:col-span-1",
  },
  {
    icon: TrendingUp,
    title: "25% Engagement Lift",
    subtitle: "UX-driven refinements",
    description:
      "Delivered measurable engagement improvements through proactive UX problem-solving, not just ticket implementation.",
    color: "#7C9E8E",
    span: "lg:col-span-1",
  },
];

const INTERESTS = [
  { icon: Trophy, label: "Chess — Gold Medalist", note: "Strategic thinking under pressure" },
  { icon: Camera, label: "Photography", note: "Composing frames trains the design eye" },
  { icon: Plane, label: "Travel", note: "Cultural UX patterns absorbed firsthand" },
];

export default function Achievements() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="achievements" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-14">
          <div className="section-divider" />
          <p className="text-xs font-mono text-accent tracking-widest mb-2">04 / IMPACT</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-primary">Measurable results, not buzzwords.</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.05 }} className="grid grid-cols-3 gap-5 mb-8">
          {[
            { to: 35, suffix: "%", label: "Page Load Reduction" },
            { to: 40, suffix: "%", label: "UI Inconsistency Eliminated" },
            { to: 30, suffix: "%", label: "Cross-Team Dev Time Saved" },
          ].map((s) => (
            <div key={s.label} className="p-6 rounded-3xl bg-surface border border-subtle text-center">
              <p className="font-display text-4xl md:text-5xl font-semibold text-gradient mb-1">
                <Counter to={s.to} suffix={s.suffix} />
              </p>
              <p className="text-xs text-muted font-mono tracking-wide">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-6 mb-16">
          {ACHIEVEMENTS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className={`group p-7 rounded-3xl border border-subtle bg-surface hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 ${item.span}`}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: `${item.color}20` }}>
                <item.icon size={20} style={{ color: item.color }} />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary mb-1">{item.title}</h3>
              <p className="text-xs font-mono text-muted mb-3">{item.subtitle}</p>
              <p className="text-sm text-secondary leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }} className="p-8 rounded-3xl bg-surface border border-subtle">
          <p className="text-xs font-mono text-muted tracking-widest mb-6">BEYOND THE WORK</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {INTERESTS.map((interest) => (
              <div key={interest.label} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <interest.icon size={16} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm">{interest.label}</p>
                  <p className="text-xs text-muted mt-0.5">{interest.note}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
