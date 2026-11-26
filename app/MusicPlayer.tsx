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
      {!missing && !on && (
        <div className="musicring" aria-hidden="true">
          <svg viewBox="0 0 100 100">
            <defs>
              <path id="musicpath" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
            </defs>
            <text>
              <textPath href="#musicpath" textLength="230" lengthAdjust="spacing">
                ENJOY SOME MUSIC • ENJOY SOME MUSIC •
              </textPath>
            </text>
          </svg>
        </div>
      )}
      {!missing && (
        <button
          type="button"
          className={"music" + (on ? " on" : "")}
          onClick={toggle}
          aria-label={on ? "Pause music" : "Play music"}
          aria-pressed={on}
          title={on ? "Pause music" : "Play music"}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
            <ellipse cx="8" cy="18" rx="3.6" ry="3" transform="rotate(-20 8 18)" />
            <rect x="10.6" y="3" width="2.2" height="15" rx="1" />
            <path d="M12.8 3 C14.5 6.2 19 6.6 19 11.5 C17.8 9.2 15.3 8.8 12.8 8.8 Z" />
          </svg>
        </button>
      )}
    </>
  );
}
