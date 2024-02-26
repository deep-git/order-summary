/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        redhat: ["Red Hat Display", "sans-serif"]
      },
      colors: {
        primary_paleblue: "hsl(225, 100%, 94%)",
        bright_blue: "hsl(245, 75%, 52%)",
        neutral_paleblue: "hsl(225, 100%, 98%)",
        desaturated_blue: "hsl(224, 23%, 55%)",
        darkblue: "hsl(223, 47%, 23%)",
        hover_purple: "rgb(118, 108, 241)"
      },
      backgroundImage: {
        'background-desktop': "url(/pattern-background-desktop.svg)",
        'background-mobile': "url(/pattern-background-mobile.svg)"
      }
    },
  },
  plugins: [],
}

