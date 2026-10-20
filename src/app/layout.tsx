import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", weight: ["500", "700"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const description =
  "Jois Prabhanjan — Full Stack Developer (SDE-2) at MediaTek building AI integrations with MCP, RAG & LangChain. Founder of AlgoTrade (algotrade.co.in), an algorithmic trading platform.";

export const metadata: Metadata = {
  title: "Jois Prabhanjan — Full Stack & AI Engineer | Building AlgoTrade",
  description,
  keywords: ["Jois Prabhanjan", "Full Stack Developer", "Next.js", "AlgoTrade", "algotrade.co.in", "MCP", "LangChain"],
  openGraph: {
    title: "Jois Prabhanjan — Full Stack & AI Engineer",
    description,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Jois Prabhanjan — Full Stack & AI Engineer", description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${mono.variable}`}>
      <body>
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <div className="bg-grid absolute inset-0" />
          <div className="absolute left-1/2 top-[-200px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[120px]" />
        </div>
        {children}
      </body>
    </html>
  );
}
