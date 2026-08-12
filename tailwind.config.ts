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
        background: "#1a1410",
        foreground: "#f5f0e8",
        accent: "#c4a35a",
        "accent-hover": "#d4b86a",
        secondary: "#8b7355",
        muted: "#a89880",
        surface: "#241c16",
        "surface-light": "#2e241c",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};

export default config;
