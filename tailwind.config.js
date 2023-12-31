/** @type {import('tailwindcss').Config} */
export default {
  // darkmode
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      'sm': '340x',
    
      'md': '768px',
    
      'lg': '1024px',
    
      'xl': '1280px',
   },
    extend: {},
  },
  plugins: [],
};
