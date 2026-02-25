import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#FF4F00",
        teal: "#00688B",
        offwhite: "#F5F5F5",
        carbon: "#1A1A1A",
        "carbon-soft": "#2A2A2A",
        "carbon-mid": "#3A3A3A",
        "grey-dim": "#888888",
        "grey-subtle": "#444444",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["var(--font-space-mono)", "Courier New", "monospace"],
        body: ["var(--font-inter)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "9xl":  ["8rem",  { lineHeight: "0.9", letterSpacing: "-0.04em" }],
      },
      animation: {
        "flip-in": "flipIn 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards",
      },
      keyframes: {
        flipIn: {
          "0%":   { transform: "rotateY(-90deg)", opacity: "0" },
          "100%": { transform: "rotateY(0deg)",   opacity: "1" },
        },
      },
      gridTemplateColumns: {
        swiss: "repeat(4, 1fr)",
      },
    },
  },
  plugins: [],
};

export default config;
