/** @type {import('tailwindcss').Config} */
const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {

  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        ubuntu: ['var(--font-ubuntu)'],
      },


      colors: {
        //light mode colors
        primary: "#dbe1e8",
        secondary: "#FFF",
        h_color: "#12181B",
        text_color: "#454E56",

        //dark mode colors
        dark_primary: "#12181B",
        dark_secondary: "#2A2E35",
        dark_h_color: "#FFF",
        dark_text_color: "#D4D5D7",

        bg_btn: "#473bd5",
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            body: {
              innerHeight: theme('min-h-screen'),
              fontFamily: theme('font-ubuntu'),
              color: theme('colors.dark_primary'),
              text_color: theme('colors.text_color'),
            },

          }
        },
        dark: {
          css: {
            color: theme('colors.dark_primary'),

            main: {
              color: theme('colors.primary'),
              text_color: theme('colors.dark-text_color'),
            }
          }
        }
      }),


    },

  },


  plugins: [require('@tailwindcss/typography')],
};
