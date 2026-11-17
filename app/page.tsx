export default function Home() {
  return (
    <main style={{ maxWidth: 640 }}>
      <h1>Abdul Hayee: MCP server</h1>
      <p>This is a Model Context Protocol server. Add this URL as a custom connector in Claude, ChatGPT or Cursor:</p>
      <pre style={{ background: "#12303b", padding: 16, borderRadius: 8 }}>/api/mcp</pre>
      <p>Tools: get_profile, get_experience, get_skills, get_projects, get_links.</p>
    </main>
  );
}
