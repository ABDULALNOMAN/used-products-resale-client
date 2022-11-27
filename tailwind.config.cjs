/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#406882",
        secondary: '#1D3E53',
        info: '#3282B8',
        success:"#005555"
      },
    },
  },
  plugins: [require("daisyui")],
}
