/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        body: ['Inter']
      },
      colors:{
        primary: "#00004d",
        secondary: "#e68a00"
      }
    },
  },
  plugins: [],
}

