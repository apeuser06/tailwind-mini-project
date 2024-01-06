/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        customBlue: '#3498db',
        customRed: '#e74c3c',
        // Add more custom colors if needed
      },
    },
  },
  variants: {},
  plugins: [],
}


