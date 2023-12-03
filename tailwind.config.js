/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        card: '#050E12'
      },
      fontFamily: {
        poppins: ['Poppins'],
        roboto: ['Roboto'],
        inter: ['Inter'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0EA5E9",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require('tailwind-scrollbar')],
};
