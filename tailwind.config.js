import { url } from 'inspector';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige': '#f7f4ea',
        'grey': '#363238',
        'lavanda': '#bfb9d5',
      },
      fontFamily: {
        Avenir: ["Avenir"],
        Branch: ["Branch"],
      },
      backgroundImage: {
        'hero': 'url("public/Assets/Immagini/header.png")', 
      }
    },
  },
  plugins: [],
}
