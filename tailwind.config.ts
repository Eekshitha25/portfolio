import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["'Fraunces'", "Georgia", "serif"],
        body: ["'DM Sans'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        cream: { 50: "#FDFCF8", 100: "#F9F6EE", 200: "#F1EBD8" },
        ink: { 900: "#0A0A0A", 800: "#161616", 700: "#242424", 600: "#3D3D3D", 400: "#6B6B6B", 200: "#B0B0B0" },
        accent: { DEFAULT: "#C8A96E", light: "#E2C99A", dark: "#A07840" },
        moss: { DEFAULT: "#7C9E8E", light: "#A3C2B3" },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        grain: "grain 8s steps(10) infinite",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        fadeUp: { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        grain: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-2%,-3%)" },
          "20%": { transform: "translate(3%,2%)" },
          "30%": { transform: "translate(-1%,3%)" },
          "40%": { transform: "translate(2%,-2%)" },
          "50%": { transform: "translate(-3%,1%)" },
          "60%": { transform: "translate(1%,-3%)" },
          "70%": { transform: "translate(-2%,2%)" },
          "80%": { transform: "translate(3%,-1%)" },
          "90%": { transform: "translate(-1%,-2%)" },
        },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
    },
  },
  plugins: [],
};
export default config;
