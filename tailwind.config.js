/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "boton-naranja":'#fe9606',
      },
    },
  },
  plugins: [
    function ({addUtilities}) {
    const extendUnderline = {
        '.underline': {
            'textDecoration': 'underline',
            'text-decoration-color': '#fe9606',
        },
    }
    addUtilities(extendUnderline)
}],
}

