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
        lightBtn: '#7FCDEE',
        navBg: '#1D101D',
        footerBg: "#F2E5F2"
      },
      boxShadow:{
        'lightShadow': '0 4px 4px 4px rgb(255,237,213, 0.3)',
        'darkShadow': '0 4px 4px 4px rgb(7,64,123)',
      },
      backgroundImage: {
        'lightBlueCircle': 'radial-gradient(circle, rgba(127,205,238,0.5318860820695466) 45%, rgba(255,237,213,0.6) 100%);',
        'orangeCircle': 'radial-gradient(circle, rgba(255,130,44,1) 50%, rgba(253,186,116,1) 100%)',
        'lightOrangeCircle': 'radial-gradient(circle, rgba(251,146,60,1) 45%, rgba(255,237,213,0.7) 95%)',
        'bigBlue': 'radial-gradient(circle, rgba(251,146,60,1) 45%, rgba(255,237,213,0.7) 95%)',
       
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
