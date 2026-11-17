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
  portfolio: "https://abdulhayee.vercel.app",
};

export const websites = [
  { name: "shop.myeq.com", url: "https://shop.myeq.com" },
  { name: "fybellebeauty.com", url: "https://fybellebeauty.com" },
  { name: "cookiechips.com", url: "https://cookiechips.com" },
  { name: "active-hop.com", url: "https://www.active-hop.com" },
  { name: "chipsa.design", url: "https://chipsa.design" },
  { name: "vofspace.com", url: "https://vofspace.com" },
  { name: "fundmydeductible.com", url: "https://fundmydeductible.com" },
  { name: "maderaresidential.com", url: "https://maderaresidential.com" },
];

export const currently = [
  "Running the technical side of an industrial components e-commerce site on WordPress and WooCommerce: custom themes and plugins, checkout and payment flows, performance and SEO.",
  "Building small AI tools: chatbots, retrieval-augmented (RAG) assistants and MCP servers.",
  "Shipping React, TanStack and Supabase apps such as timesheets and point-of-sale tools.",
];

export const workStyle = [
  "Practical first: I build things that run in production and that people actually use.",
  "Comfortable across the stack, from PHP and WordPress themes to React, TypeScript and Supabase.",
  "I care about performance, SEO and clean checkout flows on e-commerce sites.",
  "I document and test what I ship, and keep source public where I can.",
];

export const faq = [
  { q: "What kind of work does Abdul do?", a: "E-commerce and WordPress/WooCommerce development, React front ends, and small AI tools such as chatbots, RAG assistants and MCP servers." },
  { q: "What is Abdul's strongest area?", a: "WordPress and WooCommerce: custom themes and plugins, large catalogues (50,000+ products), checkout flows, performance and SEO." },
  { q: "Does Abdul work with AI?", a: "Yes. He has built a WordPress AI chatbot plugin and a RAG-based chatbot, and this very MCP server." },
  { q: "Where is Abdul based?", a: "Manchester, UK." },
  { q: "How can I see Abdul's code?", a: "On GitHub at github.com/abdulhayeedev. The source of this MCP server is at github.com/abdulhayeedev/abdul-mcp." },
  { q: "How do I connect to this MCP server?", a: "Add https://abdulhayee.vercel.app/api/mcp as a custom connector in Claude, an MCP server in ChatGPT developer mode, or a streamable-HTTP server in Cursor. No login is needed." },
];

export const cv = {
  fileName: "Abdul_Hayee_CV.pdf",
  url: "https://abdulhayee.vercel.app/Abdul_Hayee_CV.pdf",
  summary:
    "Two-page CV covering my professional summary, experience (Arrow Engineering Components, VulcanTech UK, Techlio, Gigalabs), education (MSc and BSc Computer Science), skills and key projects.",
};
