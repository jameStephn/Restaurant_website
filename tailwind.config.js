
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel_regular:["Cinzel", "serif"] ,
        cormorant:["Cormorant SC", "serif"],
        great_vibes: ["Great Vibes", "cursive"]
      },
      backgroundImage: {
        heroBg: "url('https://cdn.pixabay.com/photo/2016/06/03/14/31/dinner-1433494_1280.jpg')",
        dining1: "url('https://cdn.pixabay.com/photo/2018/08/13/21/42/table-setting-3604064_1280.jpg')",
        Dinning: `url("https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_960_720.jpg")`
      },
      letterSpacing: {
        'extra-wide': '0.45em', // Custom value for extra-wide spacing
      },
    },
  },
  plugins: [],
}

