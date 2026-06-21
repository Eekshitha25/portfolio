"use client";

import Marquee from "./Marquee";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-subtle">
      <div className="py-6 border-b border-subtle">
        <Marquee
          items={["LET'S CONNECT", "OPEN TO WORK", "FRONTEND DEVELOPER", "UI ENGINEER"]}
          itemClassName="font-display text-xl md:text-2xl text-accent/50 mx-8 select-none"
          speed={24}
        />
      </div>
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display text-lg font-semibold text-primary">EG</span>
          <span className="text-accent">.</span>
          <span className="text-xs text-muted ml-2">Eekshitha Gujjala</span>
        </div>
        <p className="text-xs text-muted text-center">© {year} · Built with Next.js, Tailwind CSS & Framer Motion</p>
        <p className="text-xs text-muted">Frontend Developer · UI Engineer · Remote</p>
      </div>
    </footer>
  );
}
