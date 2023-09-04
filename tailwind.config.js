/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      screens:{
        "910":{
          "max": "910px"
        },
        "750": {
          "max": "750px"
        }
      }
    },
  },
  plugins: [],
}

