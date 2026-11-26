"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function MusicPlayer() {
  const router = useRouter();
  const audio = useRef<HTMLAudioElement>(null);
  const [on, setOn] = useState(false);
  const [missing, setMissing] = useState(false);

  // keep the same page (and the same <audio>) alive when following internal links
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || a.target === "_blank" || a.hasAttribute("download")) return;
      if (/\.(pdf|zip|png|jpe?g|mp4|webm|mp3)$/i.test(href)) return;
      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search) return;
      e.preventDefault();
      router.push(url.pathname + url.search + url.hash);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [router]);

  // paused by default: music only plays after the visitor presses the button
  useEffect(() => {
    const a = audio.current;
    if (a) a.volume = 0.5;
  }, []);

  const toggle = () => {
    const a = audio.current;
    if (!a) return;
    if (a.paused) {
      a.play().then(() => setOn(true)).catch(() => {});
    } else {
      a.pause();
      setOn(false);
    }
  };

  return (
    <>
      <audio ref={audio} src="/music.mp3" loop preload="none" onError={() => setMissing(true)} />
      {!missing && (
        <button
          type="button"
          className={"music" + (on ? " on" : "")}
          onClick={toggle}
          aria-label={on ? "Pause music" : "Play music"}
          aria-pressed={on}
          title={on ? "Pause music" : "Play music"}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 18V6l11-2v12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="6.5" cy="18" r="2.5" fill="currentColor" />
            <circle cx="17.5" cy="16" r="2.5" fill="currentColor" />
            {!on && <path d="M3 3l18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />}
          </svg>
        </button>
      )}
      {!missing && !on && (
        <span className="musichint" aria-hidden="true">
          <span className="musicarrow">&larr;</span> Enjoy some music
        </span>
      )}
    </>
  );
}
