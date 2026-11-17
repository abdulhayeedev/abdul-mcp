import Scene from "./Scene";
import CopyButton from "./CopyButton";

const MCP_URL = "https://abdul-mcp.vercel.app/api/mcp";

const tools = [
  ["get_profile", "Who I am, my headline and education."],
  ["get_experience", "My work history, newest first."],
  ["get_skills", "Languages, frameworks, e-commerce, backend and AI skills."],
  ["get_projects", "Selected projects. Optional keyword filter, e.g. \"ai\" or \"woocommerce\"."],
  ["get_links", "GitHub, LinkedIn and portfolio links."],
];

const asks = [
  "What has Abdul built?",
  "Does he have WooCommerce experience?",
  "What AI projects has he worked on?",
  "Summarise his work history.",
  "Which languages and frameworks does he use?",
];

export default function Home() {
  return (
    <>
      <Scene />
      <div className="veil" />
      <main className="page">
        <div className="top">
          <span>abdulhayeedev / abdul-mcp</span>
          <a href="https://github.com/abdulhayeedev/abdul-mcp">source on github</a>
        </div>

        <header className="hero">
          <div className="eyebrow">Model Context Protocol server</div>
          <h1>Ask my profile.</h1>
          <p className="lead">
            I&apos;m Abdul Hayee, a software engineer in Manchester. Connect this server to your AI
            assistant and ask about my experience, skills and projects. It answers from my real details.
          </p>
          <div className="urlbox">
            <code>{MCP_URL}</code>
            <CopyButton text={MCP_URL} />
          </div>
          <p className="note">Streamable HTTP. Read-only. No login needed.</p>
        </header>

        <section>
          <h2>How to connect</h2>
          <div className="grid3">
            <div className="card">
              <div className="n">01</div>
              <h3>Claude</h3>
              <ol>
                <li>Open Settings, then Connectors.</li>
                <li>Click Add custom connector.</li>
                <li>Name it abdulhayee and paste the URL above.</li>
                <li>Ask: &quot;What has Abdul built?&quot;</li>
              </ol>
            </div>
            <div className="card">
              <div className="n">02</div>
              <h3>ChatGPT</h3>
              <ol>
                <li>Open Settings, then Apps &amp; Connectors.</li>
                <li>Turn on developer mode and click Create.</li>
                <li>Paste the URL and save.</li>
                <li>Ask it to call get_profile.</li>
              </ol>
            </div>
            <div className="card">
              <div className="n">03</div>
              <h3>Cursor or any client</h3>
              <ol>
                <li>Add a streamable-HTTP MCP server.</li>
                <li>Paste the URL above.</li>
                <li>Run tools/list to see the five tools.</li>
              </ol>
            </div>
          </div>
        </section>

        <section>
          <h2>Tools</h2>
          <div className="tools">
            {tools.map(([name, desc]) => (
              <div className="tool" key={name}>
                <code>{name}</code>
                <span>{desc}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Try asking</h2>
          <div className="chips">
            {asks.map((a) => (
              <div className="chip" key={a}>{a}</div>
            ))}
          </div>
        </section>

        <section>
          <h2>About</h2>
          <div className="about">
            <div>
              <p>
                I build online stores, WordPress and WooCommerce plugins and small AI tools. Most of my
                work is practical: things that run in production and that people actually use.
              </p>
              <p>
                This server is a small project in the same spirit. It returns fixed information about me,
                it can&apos;t read or change anything on your accounts, and it doesn&apos;t store what you ask.
              </p>
              <div className="stack">Next.js / TypeScript / mcp-handler / Three.js / Vercel</div>
            </div>
            <div className="links">
              <a href="https://github.com/abdulhayeedev">GitHub <span>abdulhayeedev</span></a>
              <a href="https://www.linkedin.com/in/abdul-hayee1">LinkedIn <span>abdul-hayee1</span></a>
              <a href="https://v0-shopify-portfolio-page.vercel.app/">Portfolio <span>view</span></a>
            </div>
          </div>
        </section>

        <footer>
          <span>Abdul Hayee, Manchester UK</span>
          <span>{MCP_URL}</span>
        </footer>
      </main>
    </>
  );
}
