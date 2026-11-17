import { createMcpHandler } from "mcp-handler";
import { z } from "zod";
import { profile, experience, education, skills, projects, links, websites, currently, workStyle, faq } from "../../data";

const text = (t: string) => ({ content: [{ type: "text" as const, text: t }] });

const handler = createMcpHandler(
  (server) => {
    server.tool("get_profile", "Short summary of who Abdul Hayee is and his education", {}, async () =>
      text(`${profile.name}\n${profile.headline}\n\n${profile.summary}\n\nEducation:\n- ${education.join("\n- ")}`));

    server.tool("get_experience", "Abdul Hayee's work history, most recent first", {}, async () =>
      text(experience.map((e) => `${e.role} at ${e.company} (${e.period})\n  ${e.detail}`).join("\n\n")));

    server.tool("get_skills", "Abdul Hayee's technical skills grouped by area", {}, async () =>
      text(Object.entries(skills).map(([k, v]) => `${k}: ${v.join(", ")}`).join("\n")));

    server.tool(
      "get_projects",
      "Selected projects. Optionally filter by a keyword such as 'woocommerce', 'ai' or 'react'.",
      { keyword: z.string().optional().describe("Optional keyword to filter projects") },
      async ({ keyword }) => {
        const k = keyword?.toLowerCase();
        const hits = k
          ? projects.filter((p) => p.tags.some((t) => t.includes(k)) || p.name.toLowerCase().includes(k) || p.description.toLowerCase().includes(k))
          : projects;
        if (!hits.length) return text(`No projects matched "${keyword}".`);
        return text(hits.map((p) => `${p.name}: ${p.description}${"url" in p && p.url ? `\n  ${p.url}` : ""}`).join("\n\n"));
      }
    );

    server.tool("get_links", "Public profile links for Abdul Hayee", {}, async () =>
      text(Object.entries(links).map(([k, v]) => `${k}: ${v}`).join("\n")));

    server.tool("get_education", "Abdul Hayee's education", {}, async () =>
      text(education.map((e) => `- ${e}`).join("\n")));

    server.tool("get_websites", "Websites Abdul has worked on", {}, async () =>
      text(websites.map((w) => `${w.name}: ${w.url}`).join("\n")));

    server.tool("get_current_focus", "What Abdul is working on right now", {}, async () =>
      text(currently.map((c) => `- ${c}`).join("\n")));

    server.tool("get_work_style", "How Abdul likes to work and what he cares about", {}, async () =>
      text(workStyle.map((c) => `- ${c}`).join("\n")));

    server.tool("get_faq", "Frequently asked questions about Abdul and this server", {}, async () =>
      text(faq.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")));

    server.tool(
      "search_profile",
      "Search everything about Abdul (profile, experience, skills, projects, websites, FAQ) for a keyword.",
      { query: z.string().describe("Keyword or phrase to search for") },
      async ({ query }) => {
        const q = query.toLowerCase();
        const pool: string[] = [
          `${profile.name}: ${profile.headline}. ${profile.summary}`,
          ...experience.map((e) => `${e.role} at ${e.company} (${e.period}): ${e.detail}`),
          ...education,
          ...Object.entries(skills).map(([k, v]) => `${k}: ${v.join(", ")}`),
          ...projects.map((p) => `${p.name}: ${p.description}`),
          ...websites.map((w) => `${w.name} ${w.url}`),
          ...currently,
          ...workStyle,
          ...faq.map((f) => `${f.q} ${f.a}`),
        ];
        const hits = pool.filter((x) => x.toLowerCase().includes(q));
        return text(hits.length ? hits.slice(0, 12).map((h) => `- ${h}`).join("\n") : `Nothing matched "${query}".`);
      }
    );

    server.prompt("introduce_abdul", "A short introduction to Abdul Hayee for a recruiter or client", {}, async () => ({
      messages: [{ role: "user" as const, content: { type: "text" as const, text: "Using the tools on this server (get_profile, get_experience, get_projects, get_skills), write a friendly 120-word introduction to Abdul Hayee." } }],
    }));
  },
  {},
  { basePath: "/api" }
);

export { handler as GET, handler as POST, handler as DELETE };
