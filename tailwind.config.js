/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#263A84'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        lin1: {
          '0%': {
            transfrom: 'translateX(0px)'
          },
          '100%': {
            transform: 'translateX(-200px)'
          }
        },
        lin2: {
          '0%': {
            transfrom: 'translateX(0px)'
          },
          '100%': {
            transform: 'translateX(200px)'
          }
        }
      },
    },
  },
  plugins: [],
}
