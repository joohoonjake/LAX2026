import type { Config } from "tailwindcss";

// Note: This project uses Tailwind CSS v4.
// In v4, theme configuration is done via CSS @theme blocks in globals.css.
// This file is kept for reference — the active config lives in app/globals.css.
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F6E56",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
      },
      letterSpacing: {
        tight: "-0.02em",
      },
    },
  },
  plugins: [],
};

export default config;
