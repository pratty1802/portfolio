"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/content";

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : 0.12,
        delayChildren: reduce ? 0 : 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-start overflow-hidden px-5 pb-16 pt-24 sm:px-8 sm:pb-24 sm:pt-28"
    >
      <div className="hero-wash" aria-hidden />
      <div className="grid-atmosphere" aria-hidden />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="mb-5 font-mono text-[11px] tracking-[0.22em] text-mint uppercase sm:text-xs"
        >
          Portfolio
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-[clamp(2.75rem,12vw,7.5rem)] leading-[0.9] font-bold tracking-tight text-paper"
        >
          {site.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base leading-relaxed text-fog sm:text-lg"
        >
          {site.roleLine}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="inline-flex items-center bg-mint px-5 py-3 font-mono text-xs tracking-[0.16em] text-ink uppercase transition hover:brightness-110"
          >
            View work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center border border-line-strong px-5 py-3 font-mono text-xs tracking-[0.16em] text-mist uppercase transition hover:border-mint hover:text-mint"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
