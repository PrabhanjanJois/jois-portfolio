import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: { center: true, padding: "1.25rem", screens: { "2xl": "1200px" } },
    extend: {
      colors: {
        bg: "#07090C",
        surface: "#0D1117",
        "surface-2": "#131A22",
        border: "#1F2A36",
        text: "#E6EDF3",
        muted: "#8B98A5",
        accent: "#B6FF3B",
        "accent-2": "#22D3EE",
        loss: "#FF4D6D",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        marquee: { to: { transform: "translateX(-50%)" } },
        blink: { "50%": { opacity: "0" } },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
export default config;
