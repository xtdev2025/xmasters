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
        background: "#FFFFFF",
        globo: {
          red: "#C4170C",
          darkred: "#9D1309",
          gray: {
            50: "#F8F9FA",
            100: "#F1F3F5",
            200: "#E9ECEF",
            300: "#DEE2E6",
            400: "#CED4DA",
            500: "#ADB5BD",
            600: "#6C757D",
            700: "#495057",
            800: "#343A40",
            900: "#212529",
          }
        },
        primary: {
          DEFAULT: "#C4170C",
          dark: "#9D1309",
          light: "#E6463E",
        },
        secondary: {
          DEFAULT: "#6C757D",
          light: "#ADB5BD",
          lighter: "#DEE2E6",
        },
      },
    },
  },
  plugins: [],
};

export default config;
