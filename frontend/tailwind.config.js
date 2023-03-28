/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
// const { colors: defaultColors } = require('tailwindcss/defaultTheme')

// const colors = {
//     ...defaultColors,
//     ...{
//                 current: "currentColor",
//       transparent: "transparent",
//       white: "#FFFFFF",
//       black: "#090E34",
//       blue: "#153deb", 
//       link: "#bfdbfe", 
//       orange: "#ec6817",
//       purple: "#671def",
//       midnight: '#121063',
//       metal: '#565584',
//       tahiti: '#3ab7bf',
//       silver: '#ecebff',
//       bubble: '#ff77e9',
//       bermuda: '#78dcca',
//       dark: "#1D2144",
//       primary: "#4A6CF7",
//       yellow: "#FBB040",
//       "body-color": "#959CB1"
//     },
// }
module.exports = {

  content: [
    
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
  ],
  darkMode: "class",
     theme: {
  extend: { colors: {
              'black': '#090E34',
              'primary': '#4A6CF7',
              'current': 'currentColor',
              'transparent': 'transparent',
              'white': '#FFFFFF',
              'blue': '#153deb',
              'link': "#bfdbfe",
              'body-color': '#959CB1',
              'dark': '#1D2144'

  },

  boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
},
            // colors: {
            // current: "currentColor",
            // transparent: "transparent",
            // white: "#FFFFFF",
            // black: "#090E34",
            // blue: "#153deb", 
            // link: "#bfdbfe", 
            // orange: "#ec6817",
            // purple: "#671def",
            // primary: "#4A6CF7",
            // yellow: "#FBB040",
      //              current: "currentColor",
      // transparent: "transparent",
      // white: "#FFFFFF",
      // black: "#090E34",
      // blue: "#153deb", 
      // link: "#bfdbfe", 
      // orange: "#ec6817",
      // purple: "#671def",
      // midnight: '#121063',
      // metal: '#565584',
      // tahiti: '#3ab7bf',
      // silver: '#ecebff',
      // bubble: '#ff77e9',
      // bermuda: '#78dcca',
      // dark: "#1D2144",
      // primary: "#4A6CF7",
      // yellow: "#FBB040",
      // 'body-color': "#959CB1",
            // },
   
 
    container: {
      center: true,
      padding: "1rem",
    },
   
    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },

  },
  plugins: [],
};
