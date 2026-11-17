"use client";
import { useEffect, useRef, useState } from "react";

const WORDS = [
  "Ecommerce sites",
  "Ecommerce apps",
  "WordPress sites",
  "WordPress custom themes",
  "Custom plugins",
  "WooCommerce stores",
  "Shopify stores",
  "AI agents",
  "AI chatbots",
  "MCP servers",
  "POS systems",
  "React web apps",
  "Supabase backends",
  "Checkout flows",
  "Fast, SEO-friendly sites",
];
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&/<>+=";

export default function Rotator() {
  const [text, setText] = useState(WORDS[0]);
  const idx = useRef(0);

  useEffect(() => {
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let timer: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const scrambleTo = (from: string, to: string) => {
      if (still) { setText(to); timer = setTimeout(next, 2600); return; }
      const len = Math.max(from.length, to.length);
      const start = performance.now();
      const per = 38; // ms each letter takes to settle
      const frame = (now: number) => {
        if (cancelled) return;
        const t = now - start;
        let out = "";
        let done = true;
        for (let i = 0; i < len; i++) {
          const target = to[i] ?? "";
          const settleAt = i * per + 260;
          if (t >= settleAt) out += target;
          else {
            done = false;
            if (target === " ") out += " ";
            else out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          }
        }
        setText(out);
        if (done) { setText(to); timer = setTimeout(next, 2200); return; }
        raf = requestAnimationFrame(frame);
      };
      raf = requestAnimationFrame(frame);
    };

    const next = () => {
      const from = WORDS[idx.current];
      idx.current = (idx.current + 1) % WORDS.length;
      scrambleTo(from, WORDS[idx.current]);
    };

    timer = setTimeout(next, 2200);
    return () => { cancelled = true; clearTimeout(timer); cancelAnimationFrame(raf); };
  }, []);

  return (
    <span className="rot" aria-label={WORDS.join(", ")}>
      <span aria-hidden="true">{text}</span>
      <span className="caret" aria-hidden="true" />
    </span>
  );
}
