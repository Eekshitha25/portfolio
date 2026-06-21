"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  strength = 0.35,
  cursorVariant,
  cursorLabel,
  target,
  rel,
  download,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
  cursorVariant?: string;
  cursorLabel?: string;
  target?: string;
  rel?: string;
  download?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({ x: relX * strength, y: relY * strength });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const Comp = motion.a;

  return (
    <Comp
      ref={ref}
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      download={download}
      data-cursor={cursorVariant}
      data-cursor-label={cursorLabel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.3 }}
      className={className}
    >
      {children}
    </Comp>
  );
}
