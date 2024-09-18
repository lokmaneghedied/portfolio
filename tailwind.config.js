/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,svg}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(8px)" },
          "75%": { transform: "translateX(-8px)" },
        },
        "slide-in-top": {
          "0%": { transform: "translateY(-10%)", opacity: "0" },
          "5%": { transform: "translateY(0%)", opacity: "1" },
          "95%": { transform: "translateY(50%)", opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        slide: {
          "-10%": { transform: "translateX(-%10)" },
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        loading: {
          "50%": { transform: "rotate(-80deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        shake: "shake 0.14s 3",
        "slide-in-top":
          "slide-in-top 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite both",
        slide: "slide 10s linear infinite",
        loading: "loading 2.5s ease-in-out infinite",
      },
      colors: {
        primary: "#6400e6",
        secondary: "#eba5ff",
        dark: "#0e0e0f",
        slate: "#181818",
        offWhite: "#edeaf1",
        gray: "#adabb0",
        grayBorder: "#333338",
        orange: "#EB6200",
        green: "#559d3a",
        blue: "#145ff4",
      },
      backgroundImage: {
        "custom-radial":
          "radial-gradient(50% 50% at 50% 50%, rgba(99, 0, 230, 0.23) 0%, rgb(14, 14, 16) 100%)",
        "custom-radial-white":
          "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0) 100%)",
        contact: "url('/src/assets/contact.avif')",
      },
    },
  },
  plugins: [],
};
