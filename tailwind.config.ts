import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: "#5DE7FF",
          purple: "#9F7CFF",
          pink: "#FF65D4"
        }
      },
      boxShadow: {
        glow: "0 0 30px rgba(93, 231, 255, 0.25)"
      },
      backdropBlur: {
        xs: "2px"
      }
    }
  },
  plugins: []
};

export default config;
