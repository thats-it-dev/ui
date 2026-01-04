/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFAA00',
        secondary: '#0032A0',
        accent: '#e4002b',
        success: '#00843D',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        worksans: ['Work Sans', 'sans-serif'],
      },
      borderRadius: {
        sm: '0.15rem',
        DEFAULT: '0.15rem',
        md: '0.15rem',
        lg: '0.15rem',
      },
    },
  },
  plugins: [],
}
