export const metadata = { title: "Abdul Hayee MCP", description: "MCP server for Abdul Hayee's profile" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body style={{ fontFamily: "system-ui", background: "#0d1b24", color: "#e6f1f5", padding: "48px" }}>{children}</body></html>);
}
