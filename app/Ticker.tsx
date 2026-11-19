const items = [
  "Open to freelance contracts",
  "Software engineer / Manchester, UK",
  "WordPress + WooCommerce",
  "AI agents + RAG",
  "React + TypeScript",
  "Agent-ready / connect via MCP",
];

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="track">
        {[0, 1].map((k) => (
          <span key={k}>
            {items.map((t) => (
              <span key={t + k}>{t} <span>+</span></span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
