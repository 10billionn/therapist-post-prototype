import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07111F",
        night: "#091728",
        panel: "#0D1E31",
        line: "#1D344D",
        mist: "#90A7BC",
        glow: "#55D6D2",
        glowSoft: "#17343D",
        rose: "#D28AA2"
      },
      boxShadow: {
        luxe: "0 24px 60px rgba(0, 0, 0, 0.28)"
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(circle at top, rgba(85, 214, 210, 0.18), transparent 28%), radial-gradient(circle at 80% 0%, rgba(210, 138, 162, 0.12), transparent 18%), linear-gradient(180deg, #08111f 0%, #091728 45%, #060d18 100%)"
      },
      fontFamily: {
        sans: ["'Noto Sans JP'", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
