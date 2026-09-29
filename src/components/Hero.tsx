"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroStickers } from "@/components/HeroStickers";
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
      className="relative flex min-h-0 flex-col justify-start overflow-hidden px-5 pb-12 pt-20 sm:min-h-[100svh] sm:px-8 sm:pb-24 sm:pt-28"
    >
      <div className="hero-wash" aria-hidden />
      <div className="grid-atmosphere" aria-hidden />
      <HeroStickers />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="mb-3 font-mono text-[10px] tracking-[0.22em] text-mint uppercase sm:mb-5 sm:text-xs"
        >
          Portfolio
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-[clamp(2rem,9.5vw,7.5rem)] leading-[0.95] font-bold tracking-tight text-balance text-paper sm:leading-[0.9]"
        >
          {site.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-3 max-w-xl text-sm leading-snug text-fog sm:mt-6 sm:text-lg sm:leading-relaxed"
        >
          <span className="sm:hidden">
            Senior Backend Engineer — Node.js, AWS & serverless
          </span>
          <span className="hidden sm:inline">{site.roleLine}</span>
        </motion.p>

        <motion.div
          variants={item}
          className="mt-6 flex flex-wrap gap-3 sm:mt-10 sm:gap-4"
        >
          <a
            href="#work"
            className="inline-flex items-center bg-mint px-4 py-2.5 font-mono text-[11px] tracking-[0.16em] text-ink uppercase transition hover:brightness-110 sm:px-5 sm:py-3 sm:text-xs"
          >
            View work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center border border-line-strong px-4 py-2.5 font-mono text-[11px] tracking-[0.16em] text-mist uppercase transition hover:border-mint hover:text-mint sm:px-5 sm:py-3 sm:text-xs"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
