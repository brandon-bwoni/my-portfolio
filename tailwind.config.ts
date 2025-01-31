import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        darkBg: '#0E0F3B',
        lightBg: '#FFEDD5',
        darkText: '#FFEDD5',
        lightText: '#07407B',
        lightBtn: '#7FCDEE'
      },
      boxShadow:{
        'lightShadow': '0 4px 4px 4px rgb(255,237,213, 0.3)',
        'darkShadow': '0 4px 4px 4px rgb(7,64,123)',
      },
      backgroundImage: {
        'light-theme': 'linear-gradient(122deg, rgba(253,186,116,1) 25%, rgba(249,168,212,0.9641981792717087) 40%, rgba(250,172,191,1) 60%, rgba(253,185,123,1) 75%)',
        'darkGrad': 'linear-gradient(90deg, rgba(249,115,22,1) 50%, rgba(249,115,22,1) 100%);',
        'lightGrad': 'linear-gradient(90deg, rgba(127,205,238,1) 50%, rgba(127,205,238,1) 100%);'
      },
    },
   
    screens: {
      sm: "320px",
      md: "425px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1440px",
    }
  },
  plugins: [],
};
export default config;
