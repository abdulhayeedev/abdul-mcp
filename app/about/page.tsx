import Scene from "../Scene";
import Reveal from "../Reveal";
import Ticker from "../Ticker";

export const metadata = {
  title: "About | Abdul Hayee",
  description:
    "About Abdul Hayee, a software engineer in Manchester, UK, working remotely worldwide: experience, skills and education.",
};

const jobs = [
  {
    year: "2025",
    when: "2025 - present",
    role: "Ecommerce Web Developer",
    co: "Arrow Engineering Components",
    where: "Manchester, UK",
    points: [
      "Runs the technical stack of an industrial components e-commerce site on WordPress and WooCommerce.",
      "Custom themes and plugins built around a catalogue of 50,000+ products.",
      "Payment and checkout flows, performance work and SEO.",
    ],
    tags: ["WordPress", "WooCommerce", "PHP", "SEO"],
  },
  {
    year: "2024",
    when: "2024 - 2025",
    role: "Software Engineer",
    co: "VulcanTech UK",
    where: "UK",
    points: [
      "Built Python and Flask web applications.",
      "REST APIs and back-end services.",
      "Responsive front ends for the same products.",
    ],
    tags: ["Python", "Flask", "REST APIs"],
  },
  {
    year: "2023",
    when: "2023 - 2024",
    role: "IT Support Engineer",
    co: "Techlio Pvt",
    where: "",
    points: ["Hardware, software and network support.", "Installing and maintaining systems."],
    tags: ["Support", "Networking"],
  },
  {
    year: "2021",
    when: "2021 - 2023",
    role: "Business Development Executive",
    co: "Gigalabs Ltd",
    where: "",
    points: ["Lead generation and digital outreach.", "CRM-based relationship management."],
    tags: ["CRM", "Outreach"],
  },
];

const skills = [
  ["Languages", ["PHP", "JavaScript", "TypeScript", "Python", "HTML / CSS"]],
  ["Frameworks", ["React", "Next.js", "TanStack", "Flask", "Tailwind", "Bootstrap"]],
  ["Ecommerce / CMS", ["WordPress", "WooCommerce", "Shopify", "Elementor"]],
  ["Backend / data", ["Supabase", "PostgreSQL", "MySQL", "REST APIs", "GraphQL"]],
  ["AI", ["LLM integration", "RAG", "AI agents", "MCP servers"]],
  ["Infra / tools", ["Git", "GitHub", "Docker", "Vercel"]],
  ["Design", ["Figma", "Adobe XD", "Three.js", "Graphic design"]],
  ["Analytics / ads", ["Google Analytics", "Search Console", "Google Ads", "Meta Ads"]],
] as const;

const glance = [
  ["Full name", "Abdul Hayee"],
  ["Based", "Manchester, UK / Remote worldwide"],
  ["Role", "Software Engineer"],
  ["Years", "6+ years shipping software"],
];

export default function AboutPage() {
  return (
    <>
      <Scene />
      <div className="veil" />
      <Reveal />
      <div className="wrap">
        <Ticker />
        <header className="header">
          <div className="inner">
            <a className="logo" href="/">abdulhayeebuilds</a>
            <nav className="nav">
              <a href="/#work">Work</a>
              <a href="/about" aria-current="page">About</a>
              <a href="/#skills">Skills</a>
              <a href="/contact">Contact</a>
              <a className="mcp" href="/mcp">MCP</a>
            </nav>
            <div className="hsoc">
              <a href="https://github.com/abdulhayeedev" target="_blank" rel="noreferrer" aria-label="GitHub"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
              <a href="https://www.linkedin.com/in/abdul-hayee1" target="_blank" rel="noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
              <a href="https://wa.me/447310679346" target="_blank" rel="noreferrer" aria-label="WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg></a>
              <a href="mailto:inputabdul@gmail.com" target="_blank" rel="noreferrer" aria-label="Email"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg></a>
              <a href="/Abdul_Hayee_CV.pdf" target="_blank" rel="noreferrer" aria-label="Download CV" title="Download CV"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM8 13h8v1.5H8V13zm0 3h8v1.5H8V16z" /></svg></a>
            </div>
          </div>
        </header>

        <main>
          <section className="s ab">
            <div className="inner">
              <div className="ab-hero">
                <div className="ab-text">
                  <div className="eyebrow reveal">About</div>
                  <h1 className="ab-title reveal">Software engineer, Manchester-based. Shipping software for 6+ years.</h1>
                  <p className="reveal">
                    I&apos;m a Software Engineer in Manchester, UK, working remotely with clients worldwide. I&apos;ve been
                    shipping software since 2019: e-commerce platforms, Python and PHP back ends, React front ends,
                    and AI tools.
                  </p>
                  <p className="reveal">
                    At my day job I run the technical stack of an industrial components store with <b>50,000+ products</b>{" "}
                    on WordPress and WooCommerce: custom theme and plugins, checkout, performance and SEO. Outside it
                    I&apos;ve built Shopify stores, React and TanStack sites, POS systems and a timesheet app on Supabase.
                  </p>
                  <p className="reveal">
                    On the AI side I build RAG chatbots, a WordPress AI chatbot plugin, and the <b>MCP server</b> on this
                    site, so an AI assistant can answer questions about my work from real details.
                  </p>
                  <p className="reveal">
                    I care about shipping things that run in production and being easy to work with. Open to freelance
                    contracts, remote worldwide.
                  </p>
                </div>

                <aside className="ab-card reveal">
                  <div className="ab-photo" role="img" aria-label="Portrait of Abdul Hayee" />
                  <div className="ab-glance">
                    <div className="ab-k">AT A GLANCE</div>
                    {glance.map(([k, v]) => (
                      <div className="ab-row" key={k}>
                        <span>{k}</span>
                        <b>{v}</b>
                      </div>
                    ))}
                    <div className="ab-row">
                      <span>CV</span>
                      <b><a href="/Abdul_Hayee_CV.pdf">Download PDF &#8595;</a></b>
                    </div>
                    <div className="ab-row">
                      <span>Phone</span>
                      <b><a href="https://wa.me/447310679346" target="_blank" rel="noopener noreferrer">+44 7310 679346</a></b>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section className="s ab-sec">
            <div className="inner">
              <div className="ab-label reveal"><i>01</i> / TIMELINE</div>
              <div className="ab-tl">
                {jobs.map((j) => (
                  <article className="ab-job reveal" key={j.role + j.co}>
                    <div className="ab-when">
                      <div className="ab-year">{j.year}</div>
                      <div className="ab-sub">{j.when}</div>
                      {j.where && <div className="ab-sub">{j.where}</div>}
                    </div>
                    <div className="ab-body">
                      <h3>
                        {j.role} <em>{j.co}</em>
                      </h3>
                      <ul>
                        {j.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                      <div className="ab-tags">
                        {j.tags.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="s ab-sec" id="skills">
            <div className="inner">
              <div className="ab-label reveal"><i>02</i> / SKILLS</div>
              <div className="ab-skills">
                {skills.map(([title, items]) => (
                  <div className="ab-skill reveal" key={title}>
                    <div className="ab-k">{title.toUpperCase()}</div>
                    <ul>
                      {items.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="s ab-sec">
            <div className="inner">
              <div className="ab-label reveal"><i>03</i> / EDUCATION</div>
              <div className="ab-edu reveal">
                <div className="ab-edu-row">
                  <b>Ulster University, UK</b>
                  <span>MSc Computer Science and Technology</span>
                  <i>2025</i>
                </div>
                <div className="ab-edu-row">
                  <b>The Superior University</b>
                  <span>BSc Computer Science and Technology</span>
                  <i>2020 - 2024</i>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div className="inner">
            <span>© 2026 Abdul Hayee / Manchester, UK / Remote worldwide</span>
            <span>Next.js / TypeScript / Three.js / Vercel</span>
          </div>
        </footer>
      </div>
    </>
  );
}
