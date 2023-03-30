/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      violet: {
        900: '#0F0D13',
        500: '#2A2141'
      },

      gray: {
        100: '#E1E1E6',
        200: '#C4C4CC',
        900: '#09090A',
      },
      blue: {
        900: '#181926',
        400: '#777CD9'
      },

      brand: {
        500: '#EFBE0E'
      }
    },
    extend: {}
  },
  plugins: []
}
