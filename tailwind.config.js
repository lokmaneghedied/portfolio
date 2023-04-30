/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '375px',
      xxs: '470px',
      sm: '600px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about.png')",
      },
    },
  },
  plugins: [],
};
