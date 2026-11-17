// Edit this file to change what the MCP server says about you.
export const profile = {
  name: "Abdul Hayee",
  headline: "Software Engineer and Ecommerce Web Developer based in Manchester, UK",
  summary:
    "I build online stores, WordPress/WooCommerce plugins and small AI tools. Most of my work is practical: things that run in production and that people actually use.",
};

export const experience = [
  { role: "Ecommerce Web Developer", company: "Arrow Engineering Components, Manchester", period: "2025 - present",
    detail: "Runs the technical stack of an industrial components e-commerce site (WordPress/WooCommerce)." },
  { role: "Software Engineer", company: "VulcanTech UK", period: "2024 - 2025", detail: "Python / Flask development." },
  { role: "IT Support Engineer", company: "Techlio Pvt", period: "2023 - 2024", detail: "IT support and troubleshooting." },
  { role: "Business Development Executive", company: "Gigalabs Ltd", period: "2021 - 2023", detail: "Business development." },
];

export const education = [
  "MSc Computer Science and Technology, Ulster University (2025)",
  "BSc Computer Science and Technology, The Superior University (2020 - 2024)",
];

export const skills: Record<string, string[]> = {
  "Languages": ["PHP", "JavaScript", "TypeScript", "Python", "HTML/CSS"],
  "Frameworks": ["React", "TanStack", "Flask", "Tailwind", "Bootstrap"],
  "Ecommerce / CMS": ["WordPress", "WooCommerce", "Shopify", "Elementor"],
  "Backend / tools": ["Supabase", "PostgreSQL", "REST APIs", "Git/GitHub", "Vercel"],
  "AI": ["Chatbots", "RAG", "AI agents"],
};

export const projects = [
  { name: "WooCommerce store", tags: ["woocommerce", "wordpress", "php", "ecommerce"],
    description: "Store with 50,000+ products, including a custom theme and plugins." },
  { name: "WordPress AI chatbot plugin", tags: ["wordpress", "ai", "chatbot", "php"],
    description: "Chatbot plugin that answers customer questions on-site." },
  { name: "Rag-based-Chatbot", tags: ["ai", "rag", "python", "chatbot"],
    description: "Retrieval-augmented chatbot over your own documents.", url: "https://github.com/abdulhayeedev/Rag-based-Chatbot" },
  { name: "Timesheet app", tags: ["supabase", "postgresql", "javascript", "vercel"],
    description: "Supabase-backed check-in/out tracker with row-level security." },
  { name: "POS systems", tags: ["react", "supabase", "typescript"],
    description: "Browser-based point-of-sale tools for small businesses." },
  { name: "Client websites", tags: ["react", "tanstack", "typescript"],
    description: "React / TanStack front ends for small business clients." },
];

export const links = {
  github: "https://github.com/abdulhayeedev",
  linkedin: "https://www.linkedin.com/in/abdul-hayee1",
  portfolio: "https://v0-shopify-portfolio-page.vercel.app/",
};
