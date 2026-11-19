"use client";
import { useLayoutEffect, useRef, useState } from "react";

type Item = { name: string; href?: string; img?: string; text?: string; tags?: string[] };
type Stack = { id: string; label: string; code: string; items: Item[] };

const site = (name: string, href: string, img: string, tags: string[]): Item => ({ name, href, img, tags });

const myeq = site("shop.myeq.com", "https://shop.myeq.com", "/site-myeq.jpg", ["Shopify"]);
const fybelle = site("fybellebeauty.com", "https://fybellebeauty.com", "/site-fybelle.jpg", ["Shopify"]);
const cookie = site("cookiechips.com", "https://cookiechips.com", "/site-cookiechips.jpg", ["Shopify"]);
const hop = site("active-hop.com", "https://www.active-hop.com", "/site-activehop.jpg", ["Shopify"]);
const chipsa = site("chipsa.design", "https://chipsa.design", "/site-chipsa.jpg", ["Next.js", "React"]);
const madera = site("maderaresidential.com", "https://maderaresidential.com", "/site-madera.jpg", ["React", "Next.js"]);
const vof = site("vofspace.com", "https://vofspace.com", "/site-vofspace.jpg", ["HTML", "CSS", "JavaScript"]);
const fmd = site("fundmydeductible.com", "https://fundmydeductible.com", "/site-fundmydeductible.jpg", ["WordPress"]);

const woo: Item = { name: "WooCommerce store", text: "Store with 50,000+ products, including a custom theme and plugins.", tags: ["WooCommerce", "PHP"] };
const wpbot: Item = { name: "WordPress AI chatbot plugin", text: "Chatbot plugin that answers customer questions on the site.", tags: ["WordPress", "PHP", "AI"] };
const rag: Item = { name: "Rag-based-Chatbot", text: "Retrieval-augmented chatbot over your own documents.", href: "https://github.com/abdulhayeedev/Rag-based-Chatbot", tags: ["Python", "RAG"] };
const mcp: Item = { name: "Personal MCP server", text: "This site is also an MCP server that AI assistants can query about me.", href: "https://github.com/abdulhayeedev/abdul-mcp", tags: ["TypeScript", "MCP"] };
const timesheet: Item = { name: "Timesheet app", text: "Check-in and check-out tracker on Supabase with row-level security.", tags: ["React", "Supabase"] };
const pos: Item = { name: "POS systems", text: "Browser-based point-of-sale tools for small businesses.", tags: ["React", "TypeScript"] };
const clients: Item = { name: "Client websites", text: "React and TanStack front ends for small business clients.", tags: ["React", "TanStack"] };

const STACKS: Stack[] = [
  { id: "shopify", label: "Shopify", code: "SHOP", items: [myeq, fybelle, cookie, hop] },
  { id: "wordpress", label: "WordPress", code: "WP", items: [fmd, woo, wpbot] },
  { id: "react", label: "React", code: "REACT", items: [chipsa, madera, pos, timesheet, clients] },
  { id: "php", label: "PHP", code: "PHP", items: [woo, wpbot] },
  { id: "python", label: "Python", code: "PY", items: [rag] },
  { id: "ai-agents", label: "AI agents", code: "AI", items: [rag, wpbot, mcp] },
  { id: "html-js", label: "HTML / JS", code: "JS", items: [vof] },
];

export default function Folders() {
  const [open, setOpen] = useState<string | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const cur = STACKS.find((s) => s.id === open) || null;

  useLayoutEffect(() => {
    if (!open || !root.current) return;
    const folder = root.current.querySelector<HTMLElement>(`[data-folder="${open}"]`);
    if (!folder) return;
    const f = folder.getBoundingClientRect();
    root.current.querySelectorAll<HTMLElement>(".fcard").forEach((c) => {
      const r = c.getBoundingClientRect();
      c.style.setProperty("--fx", `${f.left + f.width / 2 - (r.left + r.width / 2)}px`);
      c.style.setProperty("--fy", `${f.top + f.height / 2 - (r.top + r.height / 2)}px`);
    });
  }, [open]);

  const toggle = (id: string) => {
    if (open === id) {
      setOpen(null);
      return;
    }
    setOpen(id);
    window.setTimeout(() => {
      root.current?.querySelector(".fpanel")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 120);
  };

  return (
    <div className="reveal" ref={root}>
      <div className="folders">
        {STACKS.map((s) => {
          const isOpen = open === s.id;
          const peek = s.items.find((i) => i.img)?.img;
          return (
            <button
              key={s.id}
              type="button"
              className="fbtn"
              data-folder={s.id}
              aria-expanded={isOpen}
              aria-controls="fpanel"
              onClick={() => toggle(s.id)}
            >
              <span className="folder" aria-hidden="true">
                <span className="f-back" />
                <span className="f-peek" style={peek ? { backgroundImage: `url(${peek})` } : undefined} />
                <span className="f-front"><em>{s.code}</em></span>
              </span>
              <span className="f-label">{s.label}</span>
              <span className="f-count">{s.items.length} {s.items.length === 1 ? "project" : "projects"}</span>
            </button>
          );
        })}
      </div>

      {cur && (
        <div className="fpanel" id="fpanel" key={cur.id}>
          <div className="fhead">
            <span>~/{cur.id}/</span>
            <span>{cur.items.length} {cur.items.length === 1 ? "item" : "items"}</span>
            <button type="button" className="fclose" onClick={() => setOpen(null)} aria-label="Close folder">×</button>
          </div>
          <div className="fgrid">
            {cur.items.map((it, i) => {
              const body = (
                <>
                  {it.img && <img src={it.img} alt={`Homepage of ${it.name}`} loading="lazy" />}
                  <span className="fbody">
                    <span className="fname"><b>{it.name}</b>{it.href && <i>↗</i>}</span>
                    {it.text && <span className="ftxt">{it.text}</span>}
                    {it.tags && <span className="ftags">{it.tags.map((t) => <span key={t}>{t}</span>)}</span>}
                  </span>
                </>
              );
              const style = { ["--d" as string]: `${i * 80}ms` } as React.CSSProperties;
              return it.href ? (
                <a className="fcard" style={style} href={it.href} target="_blank" rel="noopener noreferrer" key={it.name}>{body}</a>
              ) : (
                <div className="fcard" style={style} key={it.name}>{body}</div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
