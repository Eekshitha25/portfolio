"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
    }, 1900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#0A0A0A] overflow-hidden"
        >
          {/* Curtain panels */}
          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: [0.76, 0, 0.24, 1] }}
            style={{ originY: 0 }}
            className="absolute top-0 left-0 w-1/2 h-full bg-[#0A0A0A]"
          />
          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: [0.76, 0, 0.24, 1] }}
            style={{ originY: 1 }}
            className="absolute top-0 right-0 w-1/2 h-full bg-[#0A0A0A]"
          />

          <div className="relative overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-3xl md:text-5xl font-medium text-[#F5F0E8] tracking-tight"
            >
              Eekshitha Gujjala
            </motion.h1>
          </div>

          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
            className="absolute bottom-[38%] left-1/2 -translate-x-1/2 h-px bg-[#C8A96E] max-w-[180px]"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="absolute bottom-[34%] left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-[0.3em] text-[#8A8A8A]"
          >
            FRONTEND DEVELOPER
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
