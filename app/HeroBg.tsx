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
    const play = () => {
      if (v.paused && !document.hidden) v.play().catch(() => {});
    };
    play();
    // keep the loop running: browsers can pause it after clicks, overlays or tab switches
    v.addEventListener("pause", play);
    v.addEventListener("stalled", play);
    document.addEventListener("visibilitychange", play);
    document.addEventListener("click", play, true);
    window.addEventListener("scroll", play, { passive: true });
    window.addEventListener("focus", play);
    const t = window.setInterval(play, 1500);
    return () => {
      v.removeEventListener("pause", play);
      v.removeEventListener("stalled", play);
      document.removeEventListener("visibilitychange", play);
      document.removeEventListener("click", play, true);
      window.removeEventListener("scroll", play);
      window.removeEventListener("focus", play);
      window.clearInterval(t);
    };
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
