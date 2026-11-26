"use client";
import { useLayoutEffect, useRef, useState } from "react";

type Item = { name: string; href?: string; img?: string; text?: string; tags?: string[] };
type Stack = { id: string; label: string; icon: string; fill: string; bg?: boolean; items: Item[] };

const site = (name: string, href: string, img: string, tags: string[]): Item => ({ name, href, img, tags });

const myeq = site("shop.myeq.com", "https://shop.myeq.com", "/site-myeq.jpg", ["Shopify"]);
const fybelle = site("fybellebeauty.com", "https://fybellebeauty.com", "/site-fybelle.jpg", ["Shopify"]);
const cookie = site("cookiechips.com", "https://cookiechips.com", "/site-cookiechips.jpg", ["Shopify"]);
const hop = site("active-hop.com", "https://www.active-hop.com", "/site-activehop.jpg", ["Shopify"]);
const chipsa = site("chipsa.design", "https://chipsa.design", "/site-chipsa.jpg", ["Next.js", "React"]);
const skillwise = site("skillwisedriving.co.uk", "https://skillwisedriving.co.uk", "/site-skillwise.jpg", ["React 19", "TanStack Start", "TypeScript", "Tailwind"]);
const madera = site("maderaresidential.com", "https://maderaresidential.com", "/site-madera.jpg", ["React", "Next.js"]);
const vof = site("vofspace.com", "https://vofspace.com", "/site-vofspace.jpg", ["HTML", "CSS", "JavaScript"]);
const fmd = site("fundmydeductible.com", "https://fundmydeductible.com", "/site-fundmydeductible.jpg", ["WordPress"]);
const lapptops = site("lapptops.net", "https://lapptops.net", "/site-lapptops.jpg", ["WordPress", "PHP"]);
const soapstones = site("soapstones.com", "https://www.soapstones.com", "/site-soapstones.jpg", ["WordPress", "PHP"]);
const sheds = site("shedsunlimited.net", "https://shedsunlimited.net", "/site-sheds.jpg", ["WordPress", "PHP"]);
const dieckmann = site("raumausstatter-dieckmann.de", "https://raumausstatter-dieckmann.de", "/site-dieckmann.jpg", ["WordPress", "PHP"]);

const woo: Item = { name: "WooCommerce store", text: "Store with 50,000+ products, including a custom theme and plugins.", tags: ["WooCommerce", "PHP"] };
const wpbot: Item = { name: "WordPress AI chatbot plugin", text: "Chatbot plugin that answers customer questions on the site.", tags: ["WordPress", "PHP", "AI"] };
const rag: Item = { name: "Rag-based-Chatbot", text: "Retrieval-augmented chatbot over your own documents.", href: "https://github.com/abdulhayeedev/Rag-based-Chatbot", tags: ["Python", "RAG"] };
const mcp: Item = { name: "Personal MCP server", text: "This site is also an MCP server that AI assistants can query about me.", href: "https://github.com/abdulhayeedev/abdul-mcp", tags: ["TypeScript", "MCP"] };
const timesheet: Item = { name: "Timesheet app", text: "Check-in and check-out tracker on Supabase with row-level security.", tags: ["React", "Supabase"] };
const pos: Item = { name: "POS systems", text: "Browser-based point-of-sale tools for small businesses.", tags: ["React", "TypeScript"] };
const clients: Item = { name: "Client websites", text: "React and TanStack front ends for small business clients.", tags: ["React", "TanStack"] };

const humanizer: Item = { name: "My Humanizer", text: "Browser tool that cleans up AI-sounding text: stock phrases, em dashes and long sentences. Runs fully client-side.", img: "/site-humanizer.jpg", tags: ["HTML", "CSS", "JavaScript"] };

const STACKS: Stack[] = [
  { id: "shopify", label: "Shopify", icon: "M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z", fill: "#95BF47", items: [myeq, fybelle, cookie, hop] },
  { id: "wordpress", label: "WordPress", icon: "M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0", fill: "#21759B", items: [soapstones, sheds, dieckmann, lapptops, fmd, woo, wpbot] },
  { id: "react", label: "React", icon: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z", fill: "#61DAFB", items: [chipsa, madera, skillwise, pos, timesheet, clients] },
  { id: "php", label: "PHP", icon: "M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z", fill: "#777BB4", items: [woo, wpbot] },
  { id: "python", label: "Python", icon: "M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z", fill: "url(#g-py)", items: [rag] },
  { id: "ai-agents", label: "AI agents", icon: "M10 3c.6 5.2 2.8 7.4 8 8-5.2.6-7.4 2.8-8 8-.6-5.2-2.8-7.4-8-8 5.2-.6 7.4-2.8 8-8zM19 1c.2 1.9 1.1 2.8 3 3-1.9.2-2.8 1.1-3 3-.2-1.9-1.1-2.8-3-3 1.9-.2 2.8-1.1 3-3z", fill: "url(#g-ai)", items: [rag, wpbot, mcp] },
  { id: "html-js", label: "HTML / JS", icon: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z", fill: "#F7DF1E", bg: true, items: [vof, humanizer] },
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
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <linearGradient id="g-py" x1="0" y1="0" x2="1" y2="1"><stop offset=".5" stopColor="#3776AB" /><stop offset=".5" stopColor="#FFD43B" /></linearGradient>
          <linearGradient id="g-ai" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#7c5cff" /><stop offset="1" stopColor="#22c3f0" /></linearGradient>
        </defs>
      </svg>
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
                <span className="f-front"><svg className="f-icon" viewBox="0 0 24 24" aria-hidden="true">{s.bg && <rect width="24" height="24" fill="#000" />}<path d={s.icon} fill={s.fill} /></svg></span>
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
