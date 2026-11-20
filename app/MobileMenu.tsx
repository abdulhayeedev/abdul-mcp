"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

const links = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/contact" },
  { label: "MCP", href: "/mcp" },
  { label: "Download CV", href: "/Abdul_Hayee_CV.pdf" },
];

export default function MobileMenu() {
  const path = usePathname();
  const [host, setHost] = useState<Element | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setHost(document.querySelector(".header .inner"));
  }, [path]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!host) return null;
  return createPortal(
    <>
      <button
        type="button"
        className={"burger" + (open ? " on" : "")}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
      </button>
      {open && (
        <nav className="mmenu" aria-label="Menu">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </>,
    host
  );
}
