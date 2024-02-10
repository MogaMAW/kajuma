/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        transparent: "transparent",
        primary: "#e03131",
        primaryLight: "#ff8787",
        info: " #5BC0DE",
        warning: "#F0AD4E",
        error: "#D9534F",
        success: "#55C57A",
      },
    },
  },
  plugins: [],
};
