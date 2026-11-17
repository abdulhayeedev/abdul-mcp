"use client";
import { useEffect, useRef } from "react";

export default function HeroBg() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (still) {
      v.pause();
      return;
    }
    v.play().catch(() => {});
  }, []);

  return (
    <div className="herobg" aria-hidden="true">
      <video
        ref={ref}
        className="herovid"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
      >
        <source src="/hero.webm" type="video/webm" />
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="heroshade" />
      <div className="scan" />
      <span className="corner tl" />
      <span className="corner tr" />
      <span className="corner bl" />
      <span className="corner br" />
      <span className="status"><i /> SYSTEM ONLINE / AGENT-READY</span>
    </div>
  );
}
