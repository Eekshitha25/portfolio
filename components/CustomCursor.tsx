"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState("");
  const [variant, setVariant] = useState<"default" | "view" | "link">("default");

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const ringX = useSpring(mx, { stiffness: 350, damping: 30, mass: 0.4 });
  const ringY = useSpring(my, { stiffness: 350, damping: 30, mass: 0.4 });
  const dotX = useSpring(mx, { stiffness: 900, damping: 40 });
  const dotY = useSpring(my, { stiffness: 900, damping: 40 });

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFine);
    if (!isFine) return;

    document.body.classList.add("cursor-enabled");

    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      const target = e.target as HTMLElement;
      const cursorAttr = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorAttr) {
        const v = cursorAttr.getAttribute("data-cursor") || "default";
        setVariant(v as "view" | "link" | "default");
        setLabel(cursorAttr.getAttribute("data-cursor-label") || "");
      } else {
        setVariant("default");
        setLabel("");
      }
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("cursor-enabled");
    };
  }, [mx, my]);

  if (!enabled) return null;

  const isView = variant === "view";
  const isLink = variant === "link";

  return (
    <>
      {/* Outer ring */}
      <motion.div
        style={{ left: ringX, top: ringY }}
        className="fixed z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full mix-blend-difference"
        animate={{
          width: isView ? 88 : isLink ? 52 : 34,
          height: isView ? 88 : isLink ? 52 : 34,
          backgroundColor: isView ? "#fff" : "transparent",
          borderWidth: isView ? 0 : 1.5,
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="absolute inset-0 rounded-full border-white"
          style={{ borderWidth: isView ? 0 : 1.5, borderStyle: "solid" }}
        />
        {isView && (
          <span className="text-[10px] font-mono font-semibold tracking-wider text-black">
            {label || "VIEW"}
          </span>
        )}
      </motion.div>
      {/* Center dot */}
      {!isView && (
        <motion.div
          style={{ left: dotX, top: dotY }}
          className="fixed z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference"
          animate={{ width: isLink ? 0 : 6, height: isLink ? 0 : 6 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </>
  );
}
