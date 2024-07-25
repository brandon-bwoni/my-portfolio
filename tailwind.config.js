/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/home-bg.png')",
      },
      screens: {
        'sm': '320px',
        // => @media (min-width: 640px) { ... }

        'md': '425px',
        // => @media (min-width: 768px) { ... }

        'lg': '768px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1024px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1440px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        'light': 'bg-gradient-to-br from-orange-300 from:30% via-pink-300 via:50% from:70% to-orange-300'
      }
    },
  },
  plugins: [],
};