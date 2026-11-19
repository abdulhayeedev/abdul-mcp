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
  ["Tools", ["Git", "GitHub", "Docker", "Vercel", "Figma"]],
] as const;

const glance = [
  ["Full name", "Abdul Hayee"],
  ["Based", "Manchester, UK / Remote worldwide"],
  ["Role", "Software Engineer"],
  ["Years", "6+ building for the web"],
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
            <a className="logo" href="/">abdulhayee</a>
            <nav className="nav">
              <a href="/#work">Work</a>
              <a href="/about" aria-current="page">About</a>
              <a href="/#skills">Skills</a>
              <a href="/contact">Contact</a>
              <a className="mcp" href="/#mcp">MCP</a>
            </nav>
          </div>
        </header>

        <main>
          <section className="s ab">
            <div className="inner">
              <div className="ab-hero">
                <div className="ab-text">
                  <div className="eyebrow reveal">About</div>
                  <h1 className="ab-title reveal">Software engineer, Manchester-based. Building for the web since 2019.</h1>
                  <p className="reveal">
                    I&apos;m a Software Engineer and Ecommerce Web Developer in Manchester, UK, working remotely with
                    clients worldwide. I do it all: e-commerce stores, WordPress themes and plugins, React front ends,
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
              <div className="ab-label reveal">01 / TIMELINE</div>
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
              <div className="ab-label reveal">02 / SKILLS</div>
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
              <div className="ab-label reveal">03 / EDUCATION</div>
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
            <span>Abdul Hayee / Manchester, UK / Remote worldwide</span>
            <span>Next.js / TypeScript / Three.js / Vercel</span>
          </div>
        </footer>
      </div>
    </>
  );
}
