import "./globals.css";

export const metadata = {
  title: "Abdul Hayee | Personal MCP server",
  description:
    "A personal MCP server. Connect it to Claude, ChatGPT or Cursor and ask about Abdul Hayee's experience, skills and projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
