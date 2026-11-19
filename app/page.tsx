import Scene from "./Scene";
import CopyButton from "./CopyButton";
import Reveal from "./Reveal";
import Rotator from "./Rotator";
import HeroBg from "./HeroBg";
import Folders from "./Folders";
import { websites } from "./data";

const SITE = "https://abdulhayee.vercel.app";
const MCP_URL = SITE + "/api/mcp";

const ticker = [
  "Software engineer / Manchester, UK",
  "WordPress + WooCommerce",
  "AI agents + RAG",
  "React + TypeScript",
  "Agent-ready / connect via MCP",
];

const stats = [
  ["50,000+", "products in one WooCommerce store"],
  ["6+", "years building for the web"],
  ["12", "live MCP tools you can call"],
  ["2", "computer science degrees"],
];

const projects = [
  {
    n: "01",
    name: "WooCommerce store",
    text: "A store with more than 50,000 products, with a custom theme and custom plugins built around the catalogue.",
    tags: ["WooCommerce", "PHP", "Custom theme"],
  },
  {
    n: "02",
    name: "WordPress AI chatbot",
    text: "A chatbot plugin for WordPress that answers customer questions directly on the site.",
    tags: ["WordPress", "PHP", "LLM"],
  },
  {
    n: "03",
    name: "Rag-based-Chatbot",
    text: "A retrieval-augmented chatbot that answers from your own documents instead of guessing.",
    tags: ["Python", "RAG", "AI"],
    href: "https://github.com/abdulhayeedev/Rag-based-Chatbot",
  },
  {
    n: "04",
    name: "Timesheet app",
    text: "Check-in and check-out tracking on Supabase, with row-level security so each person only sees what they should.",
    tags: ["Supabase", "PostgreSQL", "Vercel"],
  },
  {
    n: "05",
    name: "POS systems",
    text: "Browser-based point-of-sale tools for small businesses, built for fast day-to-day use.",
    tags: ["React", "Supabase", "TypeScript"],
  },
  {
    n: "06",
    name: "Client websites",
    text: "React and TanStack front ends for small business clients, from layout to launch.",
    tags: ["React", "TanStack", "Tailwind"],
  },
];

const jobs = [
  ["2025 - present", "Ecommerce Web Developer", "Arrow Engineering Components, Manchester", "Runs the technical stack of an industrial components e-commerce site on WordPress and WooCommerce: custom themes and plugins, payment and checkout flows, performance and SEO."],
  ["2024 - 2025", "Software Engineer", "VulcanTech UK", "Python and Flask web applications, REST APIs and back-end services, with responsive front ends."],
  ["2023 - 2024", "IT Support Engineer", "Techlio Pvt", "Hardware, software and network support, plus installing and maintaining systems."],
  ["2021 - 2023", "Business Development Executive", "Gigalabs Ltd", "Lead generation, digital outreach and CRM-based relationship management."],
];

const skills = [
  ["Languages", ["PHP", "JavaScript", "TypeScript", "Python", "HTML / CSS"]],
  ["Frameworks", ["React", "Next.js", "TanStack", "Flask", "Tailwind", "Bootstrap"]],
  ["Ecommerce / CMS", ["WordPress", "WooCommerce", "Shopify", "Elementor"]],
  ["Backend / data", ["Supabase", "PostgreSQL", "MySQL", "REST APIs", "GraphQL"]],
  ["AI", ["LLM integration", "RAG", "AI agents", "MCP servers"]],
  ["Tools", ["Git", "GitHub", "Docker", "Vercel", "Figma"]],
];

const tools = [
  ["get_profile", "Who I am, my headline and education."],
  ["get_experience", "My work history, newest first."],
  ["get_skills", "Languages, frameworks, e-commerce, backend and AI skills."],
  ["get_projects", "Selected projects, with an optional keyword filter."],
  ["get_links", "GitHub, LinkedIn and portfolio links."],
  ["get_cv", "A download link to my CV (PDF)."],
  ["get_education", "My degrees and where I studied."],
  ["get_websites", "Websites I have worked on."],
  ["get_current_focus", "What I am working on right now."],
  ["get_work_style", "How I like to work."],
  ["get_faq", "Common questions about me and this server."],
  ["search_profile", "Search everything about me by keyword."],
];

const faq = [
  ["What do you build?", "Online stores, WordPress and WooCommerce plugins, React front ends and small AI tools. Mostly practical things that run in production."],
  ["Where are you based?", "Manchester, UK."],
  ["What is the MCP server on this site?", "A small read-only server. Connect it to Claude, ChatGPT or Cursor and the assistant can answer questions about my experience, skills and projects from my real details. It can't read or change anything on your accounts."],
  ["Is the MCP server safe to connect?", "Yes. It only returns fixed information about me, needs no login and doesn't store what you ask."],
];

export default function Home() {
  
  return (
    <>
      <Scene />
      <div className="veil" />
      <Reveal />
      <div className="wrap">
        <div className="ticker" aria-hidden="true">
          <div className="track">
            {[0, 1].map((k) => (
              <span key={k}>
                {ticker.map((t) => (
                  <span key={t + k}>{t} <span>+</span></span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <header className="header">
          <div className="inner">
            <a className="logo" href="#top">abdulhayee</a>
            <nav className="nav">
              <a href="#work">Work</a>
              <a href="#experience">Experience</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
              <a className="mcp" href="#mcp">MCP</a>
            </nav>
          </div>
        </header>

        <main id="top">
          <section className="hero">
            <HeroBg />
            <div className="inner">
              <p className="hello reveal">Hello, I&apos;m <b>Abdul Hayee</b></p>
              <h1 className="reveal">You bring the idea. I take it from sketch to live site.</h1>
              <p className="tag reveal">I build <Rotator /></p>
              <p className="lead reveal">
                Software engineer in Manchester. I do it all: e-commerce stores, WordPress themes and plugins,
                React web apps, POS systems, AI agents and MCP servers, from the first design to a live site.
              </p>
              <div className="cta reveal">
                <a className="btn solid" href="#work">See my work</a>
                <a className="btn" href="#mcp">Ask my profile</a>
                <a className="badge" href="#mcp"><span className="dot" />AGENT-READY / connect via MCP</a>
              </div>
            </div>
          </section>

          <section className="s">
            <div className="inner">
              <div className="eyebrow reveal">By the numbers</div>
              <h2 className="reveal">Shipped, measured.</h2>
              <div className="grid g4">
                {stats.map(([b, t]) => (
                  <div className="card stat reveal" key={t}>
                    <b>{b}</b>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="s" id="work">
            <div className="inner">
              <div className="eyebrow reveal">Work by stack</div>
              <h2 className="reveal">Things I&apos;ve built and shipped.</h2>
              <Folders />
            </div>
          </section>

          <section className="s" id="experience">
            <div className="inner">
              <div className="eyebrow reveal">Experience</div>
              <h2 className="reveal">Where I&apos;ve worked.</h2>
              <div className="tl">
                {jobs.map(([when, role, co, text]) => (
                  <div className="row reveal" key={role + co}>
                    <div className="when">{when}</div>
                    <div>
                      <h3>{role}</h3>
                      <div className="co">{co}</div>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
                <div className="row reveal">
                  <div className="when">Education</div>
                  <div>
                    <h3>MSc Computer Science and Technology</h3>
                    <div className="co">Ulster University, UK (2025) / BSc, The Superior University (2020 - 2024)</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="s" id="skills">
            <div className="inner">
              <div className="eyebrow reveal">Skills</div>
              <h2 className="reveal">Tools I ship with, daily.</h2>
              <div className="tl">
                {skills.map(([k, list]) => (
                  <div className="skillrow reveal" key={k as string}>
                    <div className="k">{k as string}</div>
                    <div className="chips">
                      {(list as string[]).map((s) => (<span className="chip" key={s}>{s}</span>))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="s" id="mcp">
            <div className="inner">
              <div className="eyebrow reveal">Agent-ready</div>
              <h2 className="reveal">Ask my profile from your agent.</h2>
              <div className="urlbox reveal">
                <code>{MCP_URL}</code>
                <CopyButton text={MCP_URL} />
              </div>
              <p className="note reveal">Streamable HTTP. Read-only. No login needed.</p>

              <div className="grid g3" style={{ marginTop: 40 }}>
                <div className="card reveal">
                  <div className="n">01</div>
                  <h3>Claude</h3>
                  <ol>
                    <li>Open Settings, then Connectors.</li>
                    <li>Click Add custom connector.</li>
                    <li>Name it abdulhayee and paste the URL above.</li>
                    <li>Ask: &quot;What has Abdul built?&quot;</li>
                  </ol>
                </div>
                <div className="card reveal">
                  <div className="n">02</div>
                  <h3>ChatGPT</h3>
                  <ol>
                    <li>Open Settings, then Apps &amp; Connectors.</li>
                    <li>Turn on developer mode and click Create.</li>
                    <li>Paste the URL and save.</li>
                    <li>Ask it to call get_profile.</li>
                  </ol>
                </div>
                <div className="card reveal">
                  <div className="n">03</div>
                  <h3>Cursor or any client</h3>
                  <ol>
                    <li>Add a streamable-HTTP MCP server.</li>
                    <li>Paste the URL above.</li>
                    <li>Run tools/list to see all twelve tools.</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <section className="s">
            <div className="inner">
              <div className="eyebrow reveal">FAQ</div>
              <h2 className="reveal">What people usually ask.</h2>
              <div className="reveal">
                {faq.map(([q, a]) => (
                  <details key={q}>
                    <summary>{q}</summary>
                    <p>{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="s" id="contact">
            <div className="inner">
              <div className="eyebrow reveal">Contact</div>
              <h2 className="big reveal">Contact me directly. Let&apos;s make your plan work in real life.</h2>
              <div className="cta reveal">
                <a className="btn ico" href="https://www.linkedin.com/in/abdul-hayee1" aria-label="LinkedIn" title="LinkedIn">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a className="btn ico" href="https://github.com/abdulhayeedev" aria-label="GitHub" title="GitHub">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#F5F1EA" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                </a>
                <a className="btn ico" href="/Abdul_Hayee_CV.pdf" aria-label="Download CV" title="Download CV">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#F5F1EA" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM8 13h8v1.5H8V13zm0 3h8v1.5H8V16z" /></svg>
                </a>
                <a className="btn ico" href="https://wa.me/447310679346?text=Hi%20Abdul%2C%20I%20found%20your%20portfolio%20and%20wanted%20to%20get%20in%20touch." aria-label="WhatsApp" title="WhatsApp" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                </a>
                <a className="btn ico" href="mailto:inputabdul@gmail.com?subject=Hello%20Abdul" aria-label="Email" title="Email">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" /></svg>
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div className="inner">
            <span>Abdul Hayee / Manchester, UK</span>
            <span>Next.js / TypeScript / Three.js / Vercel</span>
          </div>
        </footer>
      </div>
    </>
  );
}
