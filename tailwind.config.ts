import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "current-bg": "rgb(var(--color-current-bg) / <alpha-value>)",
        "current-text": "rgb(var(--color-current-text) / <alpha-value>)",
        "current-accent": "rgb(var(--color-current-accent) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        serif: ["var(--font-bitter)"],
      },
    },
  },
  plugins: [],
};

export default config;
