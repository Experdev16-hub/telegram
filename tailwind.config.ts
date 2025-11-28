/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tg-bg': '#1a1a1a',
        'tg-card': '#2d2d2d',
        'tg-gold': '#FFD700',
        'tg-orange': '#FFA500',
        'tg-gray': '#888888',
        'tg-light-bg': 'rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(45deg, #FFD700, #FFA500)',
      }
    },
  },
  plugins: [],
}
