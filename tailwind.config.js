/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fusion-yellow': '#FFD700',
        'fusion-orange': '#FF8C00',
        'fusion-dark': '#2C3E50',
        'fusion-gray': '#6C757D',
        'fusion-light-gray': '#F8F9FA',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
