import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },

      colors: {
        primary: {
          white: '#ffffff', // Blue-600
          grey: '#eff2f7',   // Blue-500
          black: '#000000',    // Blue-700
          button: '#1a2745',
        },
      },
    },
  },
  plugins: [],
};

export default config;
