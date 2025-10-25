/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'apw-blue': '#1e3a8a',
        'apw-light-blue': '#3b82f6',
        'apw-cyan': '#06b6d4',
        'apw-dark': '#1f2937',
        'apw-gray': '#6b7280',
        'apw-light-gray': '#f3f4f6'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      }
    },
  },
  plugins: [],
}