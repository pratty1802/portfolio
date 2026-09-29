"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Sticker = {
  id: string;
  className: string;
  label: string;
  labelColor: string;
  accent: string;
  body: ReactNode;
};

const stickers: Sticker[] = [
  {
    id: "html",
    className:
      "hidden w-[168px] -rotate-6 md:top-[17%] md:right-[34%] md:block lg:right-[38%]",
    label: "HTML",
    labelColor: "text-[#FF7A59]",
    accent: "border-[#FF7A59]/35 bg-[#FF7A59]/08",
    body: (
      <>
        <div>
          <span className="text-[#FF7A59]">&lt;main&gt;</span>
        </div>
        <div>
          {"  "}
          <span className="text-[#5B9CFF]">&lt;h1 /&gt;</span>
        </div>
        <div>
          <span className="text-[#FF7A59]">&lt;/main&gt;</span>
        </div>
      </>
    ),
  },
  {
    id: "css",
    className:
      "top-[17%] right-[4%] w-[158px] rotate-[4deg] sm:right-[5%] sm:w-[172px] lg:top-[15%] lg:right-[3%]",
    label: "CSS",
    labelColor: "text-[#7DD3FC]",
    accent: "border-[#7DD3FC]/35 bg-[#7DD3FC]/08",
    body: (
      <>
        <div>
          <span className="text-[#F9E2AF]">.grid</span>{" "}
          <span className="text-mist/80">{"{"}</span>
        </div>
        <div>
          {"  "}
          <span className="text-[#C4B5FD]">gap</span>
          <span className="text-mist/70">:</span>{" "}
          <span className="text-[#86EFAC]">1rem</span>
          <span className="text-mist/70">;</span>
        </div>
        <div>
          <span className="text-mist/80">{"}"}</span>
        </div>
      </>
    ),
  },
  {
    id: "node",
    className:
      "top-[42%] right-[4%] w-[178px] -rotate-[3deg] sm:right-[6%] sm:w-[200px] lg:top-[38%] lg:right-[5%]",
    label: "Node.js",
    labelColor: "text-[#86EFAC]",
    accent: "border-[#86EFAC]/35 bg-[#86EFAC]/08",
    body: (
      <>
        <div>
          <span className="text-[#C4B5FD]">import</span>{" "}
          <span className="text-[#F9E2AF]">express</span>
        </div>
        <div>
          <span className="text-[#7DD3FC]">app</span>
          <span className="text-mist/80">.</span>
          <span className="text-[#86EFAC]">listen</span>
          <span className="text-mist/80">(</span>
          <span className="text-[#F9E2AF]">3000</span>
          <span className="text-mist/80">)</span>
        </div>
      </>
    ),
  },
  {
    id: "aws",
    className:
      "bottom-[15%] right-[4%] w-[158px] rotate-[3deg] sm:bottom-[17%] sm:right-[7%] sm:w-[180px] lg:right-[12%]",
    label: "AWS",
    labelColor: "text-[#FBBF24]",
    accent: "border-[#FBBF24]/35 bg-[#FBBF24]/08",
    body: (
      <>
        <div>
          <span className="text-[#FBBF24]">λ</span>{" "}
          <span className="text-paper/90">Lambda</span>
        </div>
        <div>
          <span className="text-[#86EFAC]">▣</span>{" "}
          <span className="text-paper/90">S3 · EC2</span>
        </div>
        <div>
          <span className="text-[#7DD3FC]">⇉</span>{" "}
          <span className="text-paper/90">SQS</span>
        </div>
      </>
    ),
  },
  {
    id: "js",
    className:
      "hidden w-[168px] -rotate-[5deg] md:bottom-[18%] md:right-[32%] md:block lg:right-[34%]",
    label: "JS",
    labelColor: "text-[#FDE047]",
    accent: "border-[#FDE047]/35 bg-[#FDE047]/08",
    body: (
      <>
        <div>
          <span className="text-[#C4B5FD]">const</span>{" "}
          <span className="text-[#7DD3FC]">run</span>{" "}
          <span className="text-mist/80">=</span>{" "}
          <span className="text-[#C4B5FD]">async</span>{" "}
          <span className="text-mist/80">() =&gt; {"{"}</span>
        </div>
        <div>
          {"  "}
          <span className="text-[#C4B5FD]">await</span>{" "}
          <span className="text-[#86EFAC]">api</span>
          <span className="text-mist/80">()</span>
        </div>
        <div>
          <span className="text-mist/80">{"}"}</span>
        </div>
      </>
    ),
  },
];

export function HeroStickers() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[5] overflow-hidden"
    >
      {stickers.map((sticker, index) => (
        <motion.div
          key={sticker.id}
          className={`absolute rounded-md border px-3.5 py-3 font-mono shadow-[0_12px_36px_rgba(0,0,0,0.45)] backdrop-blur-sm ${sticker.accent} ${sticker.className}`}
          initial={reduce ? false : { opacity: 0, y: 12, scale: 0.95 }}
          animate={
            reduce
              ? { opacity: 1 }
              : {
                  opacity: 1,
                  y: [0, -6, 0],
                  scale: 1,
                }
          }
          transition={
            reduce
              ? { duration: 0 }
              : {
                  opacity: { duration: 0.45, delay: 0.2 + index * 0.06 },
                  scale: { duration: 0.45, delay: 0.2 + index * 0.06 },
                  y: {
                    duration: 5 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5 + index * 0.12,
                  },
                }
          }
        >
          <div
            className={`mb-2 text-[9px] font-medium tracking-[0.18em] uppercase ${sticker.labelColor}`}
          >
            {sticker.label}
          </div>
          <div className="space-y-0.5 text-[10px] leading-relaxed sm:text-[11px]">
            {sticker.body}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
