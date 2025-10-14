import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: "#FDFBF8",
        primary: {
          DEFAULT: "#86A382",
          dark: "#6c8668",
        },
        secondary: {
          DEFAULT: "#A39182",
          light: "#BFB2A3",
          lighter: "#D4C7B8",
        },
      },
    },
  },
  plugins: [],
};

export default config;
