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
          blue: '#6490dc',
        },
      },

      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: '3.5rem',
              lineHeight: '120%',
              fontWeight: '700',
            },
            h2: {
              fontSize: '3rem',
              lineHeight: '120%',
              fontWeight: '700',

            },
            h3: {
              fontSize: '2.5rem',
              lineHeight: '120%',
              fontWeight: '700',

            },
            h4: {
              fontSize: '2rem',
              lineHeight: '130%',
              fontWeight: '700',

            },
            h5: {
              fontSize: '1.5rem',
              lineHeight: '140%',
              fontWeight: '700',

            },
            h6: {
              fontSize: '1.25rem',
              lineHeight: '140%',
              fontWeight: '700',

            },
          },
        },

        sm: {
          css: {
            h1: {
              fontSize: '2.5rem',
            },
            h2: {
              fontSize: '2.25rem',

            },
            h3: {
              fontSize: '2rem',

            },
            h4: {
              fontSize: '1.5rem',

            },
            h5: {
              fontSize: '1.25rem',

            },
            h6: {
              fontSize: '1.125rem',
            },
          },
        },
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
