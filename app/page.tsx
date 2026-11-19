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
              <h2 className="big reveal">Find me on LinkedIn and GitHub.</h2>
              <div className="cta reveal">
                <a className="btn solid" href="https://www.linkedin.com/in/abdul-hayee1">LinkedIn</a>
                <a className="btn" href="https://github.com/abdulhayeedev">GitHub</a>
                <a className="btn" href="/Abdul_Hayee_CV.pdf">Download CV</a>
                <a className="btn" href="https://wa.me/447310679346?text=Hi%20Abdul%2C%20I%20found%20your%20portfolio%20and%20wanted%20to%20get%20in%20touch." target="_blank" rel="noopener noreferrer">WhatsApp</a>
                <a className="btn" href="mailto:inputabdul@gmail.com?subject=Hello%20Abdul">Email</a>
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
