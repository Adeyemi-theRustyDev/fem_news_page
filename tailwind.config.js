/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '368px',
      md: '700px',
      lg: '986px',
      xl: '1440px'
    },
    extend: {
      colors: {
        softOrange: 'hsl(35, 77%, 62%)',
        softRed: 'hsl(5, 85%, 63%)',
        offWhite: 'hsl(36, 100%, 99%)',
        grayishBlue: 'hsl(233, 8%, 79%)',
        darkGrayishBlue: 'hsl(236, 13%, 42%)',
        veryDarkBlue: 'hsl(240, 100%, 5%)'
      }
    },
  },
  plugins: [],
}

/*
screens: {
  sm: '368px',
  md: '580px',
  lg: '986px',
  xl: '1440px'
}
*/

