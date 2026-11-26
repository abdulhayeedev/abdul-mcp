import "./globals.css";
import MobileMenu from "./MobileMenu";
import MusicPlayer from "./MusicPlayer";

export const metadata = {
  title: "Abdul Hayee | Software Engineer, Manchester UK / Remote Worldwide",
  description:
    "Portfolio of Abdul Hayee, a software engineer in Manchester, working remotely worldwide, building WooCommerce stores, WordPress plugins and AI tools. Agent-ready: connect via MCP.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Gabarito:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.className+=' js'" }} />
      </head>
      <body>
        {children}
        <MobileMenu />
        <MusicPlayer />
      </body>
    </html>
  );
}
