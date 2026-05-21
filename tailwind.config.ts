import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        champagne: "#E8D8C8",
        porcelain: "#F7F3EE",
        coffee: "#4B352A",
        terracotta: "#C46E4E",
        gold: "#C8A46B",
        ink: "#221A17",
        clay: "#8F5C49"
      },
      fontFamily: {
        sans: ["Inter", "Avenir Next", "Helvetica Neue", "Arial", "system-ui", "sans-serif"],
        display: ["Didot", "Bodoni 72", "Playfair Display", "Georgia", "serif"]
      },
      boxShadow: {
        luxe: "0 30px 90px rgba(75, 53, 42, 0.14)",
        soft: "0 18px 50px rgba(75, 53, 42, 0.10)"
      },
      borderRadius: {
        luxe: "8px"
      }
    }
  },
  plugins: []
};

export default config;
