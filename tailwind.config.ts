import { color } from "framer-motion";
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
      lg: "1440px",
    },
    extend: {
      fontFamily: {
        gellix: ['Gellix', 'sans-serif'], // Add Gellix as a utility class
      },
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
          blue: '#6490dc',
        },
      },

      fontSize: {
        lg: ['1.25rem', '1.5'], // font-size: 1.25rem; line-height: 150%;
        md: ['1.125rem', '1.5'], // font-size: 1.125rem; line-height: 150%;
        base: ['1rem', '1.5'], // font-size: 1rem; line-height: 150%;
        sm: ['0.875rem', '1.5'], // font-size: 0.875rem; line-height: 150%;
        tiny: ['0.75rem', '1.5'], // font-size: 0.75rem; line-height: 150%;
        tiny_2: ['0.625rem', '1.5'], // font-size: 0.75rem; line-height: 150%;

      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;


// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     screens: {
//       sm: "375px",
//       md: "768px",
//       lg: "1024px",
//     },
//     extend: {
//       container: {
//         center: true,
//         padding: '1rem',
//       },
//       colors: {
//         primary: {
//           white: '#ffffff',
//           grey: '#eff2f7',
//           black: '#000000',
//           button: '#1a2745',
//           blue: '#6490dc',
//         },
//       },
//       typography: (theme) => ({
//         DEFAULT: {
//           css: {
//             h1: {
//               fontSize: '3.5rem', // 56px
//               lineHeight: '120%',
//               fontWeight: '700', // Optional, adjust as needed
//               '@screen sm': {
//                 fontSize: '2.5rem', // 40px
//               },
//             },
//             h2: {
//               fontSize: '3rem', // 48px
//               lineHeight: '120%',
//               fontWeight: '700', // Optional, adjust as needed
//               '@screen sm': {
//                 fontSize: '2.25rem', // 36px
//               },
//             },
//           },
//         },
//       }),
//     },
//   },
//   plugins: [],
// };

// export default config;
