"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

function IconHtml() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M3.5 2.5 5 19.5 12 21.5 19 19.5 20.5 2.5H3.5Zm12.4 5.2-.2 2.1H8.4l.2 2.3h6.9l-.4 4.3L12 17.7l-3.1-.9-.2-2h-2.2l.3 3.5L12 19.8l5.2-1.5.8-8.6H8.1l-.2-2H15.9Z" />
    </svg>
  );
}

function IconCss() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M3.5 2.5 5 19.5 12 21.5 19 19.5 20.5 2.5H3.5Zm12.2 5.3H8.5l.2 2.2h6.8l-.5 5.2L12 16.7l-3-.8-.2-1.9H6.6l.3 3.4L12 19l5.1-1.4.9-9.6Z" />
    </svg>
  );
}

function IconNode() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M12 2.2 3.8 6.9v10.2L12 21.8l8.2-4.7V6.9L12 2.2Zm0 2.3 6.1 3.5v7L12 18.5l-6.1-3.5v-7L12 4.5Zm-.9 3.4v5.3l.9.5.9-.5V7.9h1.8v6.1L12 16.1l-2.7-1.6V7.9h1.8Z" />
    </svg>
  );
}

function IconAws() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M6.8 14.2c.4.3 1 .5 1.6.5.9 0 1.4-.4 1.4-1 0-.6-.4-.9-1.3-1.2l-.7-.2c-1.4-.4-2.3-1.2-2.3-2.5 0-1.5 1.2-2.6 3.1-2.6 1 0 1.8.2 2.5.7l-.7 1.3c-.5-.3-1.1-.5-1.8-.5-.8 0-1.3.4-1.3.9 0 .6.4.8 1.4 1.1l.7.2c1.6.5 2.4 1.2 2.4 2.6 0 1.6-1.2 2.7-3.3 2.7-1.1 0-2.1-.3-2.9-.9l.6-1.3Zm6.3-6.1h1.9l2 7.7h-1.8l-.4-1.5h-2.4l-.4 1.5h-1.8l2.9-7.7Zm1.1 2.1-.8 3.1h1.7l-.9-3.1ZM3 18.2c2.6 1.6 6 2.5 9.3 2.5 3.7 0 7.3-1.1 10.2-3.2.3-.2.1-.5-.2-.4-3 .1-6.2-.3-9.1-1.7-2.2-1-4.3-2.5-5.8-4.3-.2-.2-.4 0-.3.2 1.1 2.4 3.3 4.6 5.9 6.1Z" />
    </svg>
  );
}

function IconJs() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M4 3h16v18H4V3Zm8.4 13.2c0 1.8-1.1 2.6-2.7 2.6-1.4 0-2.3-.7-2.8-1.6l1.4-.9c.3.5.6.9 1.3.9.7 0 1.1-.3 1.1-1.3v-5.6h1.7v5.9Zm4.4 2.6c-1.6 0-2.7-.8-3.2-1.8l1.4-.8c.3.6.8 1.1 1.7 1.1.7 0 1.2-.4 1.2-1 0-.7-.5-1-1.5-1.4l-.6-.2c-1.6-.7-2.6-1.6-2.6-3.3 0-1.7 1.3-2.8 3.1-2.8 1.3 0 2.3.5 3 1.5l-1.3.9c-.3-.5-.7-.8-1.4-.8-.6 0-1 .4-1 10.0.1.3.4.9 1.5 1.3l.6.2c1.9.8 2.8 1.8 2.8 3.5 0 1.9-1.5 3-3.4 3Z" />
    </svg>
  );
}

type Sticker = {
  id: string;
  className: string;
  label: string;
  labelColor: string;
  accent: string;
  icon: ReactNode;
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
    icon: <IconHtml />,
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
    icon: <IconCss />,
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
    icon: <IconNode />,
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
    icon: <IconAws />,
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
    icon: <IconJs />,
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
      className="pointer-events-none absolute inset-0 z-[5] hidden overflow-hidden sm:block"
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
            className={`mb-2 flex items-center gap-1.5 text-[9px] font-medium tracking-[0.18em] uppercase ${sticker.labelColor}`}
          >
            <span className="inline-flex shrink-0 opacity-95">{sticker.icon}</span>
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
