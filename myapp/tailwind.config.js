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
        primary: '#90aa86',
        secondary: '000001',
        dutch: '#dccca3',
        litePurple: '#824c71',
        violet: '#4A2545'
      }
    },
  },
  plugins: [],
}
