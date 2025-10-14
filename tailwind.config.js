/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#FDFBF8',
        primary: {
          DEFAULT: '#86A382',
          dark: '#6C8668',
          light: '#A3B89A',
        },
        neutralBrown: {
          DEFAULT: '#A39182',
        },
        beige: {
          light: '#D4C7B8',
          medium: '#BFB2A3',
        },
        text: {
          DEFAULT: '#212529',
        },
      },
    },
  },
  plugins: [],
};
