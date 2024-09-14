/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'shake':{
          '0%, 100%': {transform: 'translateX(0)'},
          '25%': {transform: 'translateX(8px)'},
          '75%': {transform: 'translateX(-8px)'}
        }
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'shake':'shake 0.14s 3',
      },
      colors: {
        primary: '#6400e6',
        secondary: '#eba5ff',
        dark: '#0e0e0f',
        slate :'#181818',
        offWhite: '#edeaf1',
        gray: '#adabb0',
        grayBorder: '#333338',
        green: '#04e004',
        bottleGreen: '#85e13a',
        orange: '#ffb218'
      },
    },
  },
  plugins: [],
};
