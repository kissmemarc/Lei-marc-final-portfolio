/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ffb400',
        dark: {
          bg: '#1e1e1f',
          card: '#252527',
          border: '#393939',
        },
        light: {
          bg: '#ffffff',
          card: '#f8f9fa',
          border: '#e0e0e0',
        }
      },
    },
  },
  plugins: [],
}
