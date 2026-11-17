import { createMcpHandler } from "mcp-handler";
import { z } from "zod";
import { profile, experience, education, skills, projects, links } from "../../data";

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
  },
  {},
  { basePath: "/api" }
);

export { handler as GET, handler as POST, handler as DELETE };
