"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect } from "react";
import MagneticButton from "./MagneticButton";
import Marquee from "./Marquee";

const NAME_LINE_1 = "Eekshitha";
const NAME_LINE_2 = "Gujjala";

const letterVariants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 0.85, delay: 1.55 + i * 0.035, ease: [0.22, 1, 0.36, 1] },
  }),
};

function KineticWord({ word, baseDelayIndex }: { word: string; baseDelayIndex: number }) {
  return (
    <span className="inline-flex overflow-hidden">
      {word.split("").map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span custom={baseDelayIndex + i} variants={letterVariants} initial="hidden" animate="visible" className="inline-block">
            {char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const blob1X = useSpring(useTransform(mx, [-1, 1], [-30, 30]), { stiffness: 60, damping: 20 });
  const blob1Y = useSpring(useTransform(my, [-1, 1], [-20, 20]), { stiffness: 60, damping: 20 });
  const blob2X = useSpring(useTransform(mx, [-1, 1], [25, -25]), { stiffness: 50, damping: 20 });
  const blob2Y = useSpring(useTransform(my, [-1, 1], [15, -15]), { stiffness: 50, damping: 20 });
  const tiltX = useSpring(useTransform(my, [-1, 1], [3, -3]), { stiffness: 80, damping: 25 });
  const tiltY = useSpring(useTransform(mx, [-1, 1], [-3, 3]), { stiffness: 80, damping: 25 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mx, my]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 overflow-hidden">
      <motion.div style={{ x: blob1X, y: blob1Y }} className="absolute top-1/4 right-[-5%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[110px] pointer-events-none" />
      <motion.div style={{ x: blob2X, y: blob2Y }} className="absolute bottom-0 left-[-5%] w-[420px] h-[420px] bg-moss/10 rounded-full blur-[100px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full z-10">
        <div className="max-w-4xl" style={{ perspective: 1200 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.35 }} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium font-mono tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Open to new opportunities
            </span>
          </motion.div>

          <motion.div style={{ rotateX: tiltX, rotateY: tiltY }}>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-medium leading-[0.95] tracking-tight mb-1 text-primary">
              <KineticWord word={NAME_LINE_1} baseDelayIndex={0} />
            </h1>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-medium leading-[0.95] tracking-tight mb-7">
              <span className="text-gradient">
                <KineticWord word={NAME_LINE_2} baseDelayIndex={9} />
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.5 }}
            className="text-lg sm:text-xl md:text-2xl font-body text-secondary font-light mb-4 max-w-2xl leading-relaxed"
          >
            Design Engineer building <em className="font-display not-italic text-primary">interactive</em>, high-performance
            React/TypeScript products — where design meets engineering precision.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.65 }}
            className="text-sm text-muted font-body mb-10 max-w-xl"
          >
            React.js · Next.js · TypeScript · Redux · GraphQL · Figma — 3+ years, enterprise scale
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 2.8 }} className="flex flex-wrap items-center gap-4">
            <MagneticButton href="#projects" cursorVariant="link" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-main text-sm font-semibold hover:bg-accent hover:text-ink-900 transition-colors duration-300">
              View Projects
              <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
            </MagneticButton>
            <MagneticButton href="#contact" cursorVariant="link" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-subtle text-secondary text-sm font-semibold hover:border-accent hover:text-accent transition-colors duration-300">
              Contact Me
            </MagneticButton>
          </motion.div>
        </div>

        {/* Quantified impact stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.95 }}
          className="mt-14 pt-8 border-t border-subtle grid grid-cols-3 sm:grid-cols-4 gap-6 max-w-2xl"
        >
          {[
            { num: "3+", label: "Years Experience" },
            { num: "35%", label: "Page Load ↓" },
            { num: "40%", label: "UI Inconsistency ↓" },
            { num: "25%", label: "Engagement ↑" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl md:text-3xl font-bold text-primary mb-1">{stat.num}</div>
              <div className="text-xs text-muted font-body">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.1, duration: 0.6 }} className="relative z-10 mt-12 border-y border-subtle py-4">
        <Marquee
          items={["React.js", "Next.js", "TypeScript", "Redux", "GraphQL", "Tailwind CSS", "Figma", "D3.js"]}
          itemClassName="font-display text-2xl md:text-3xl text-muted/40 mx-8 select-none"
          speed={32}
        />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.3 }} className="relative z-10 flex flex-col items-center gap-2 mt-6">
        <span className="text-xs text-muted font-mono tracking-widest">SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
          <ArrowDown size={14} className="text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
