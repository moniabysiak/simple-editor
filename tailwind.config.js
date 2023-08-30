/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink': '#FBD2F2'
      },
    },
  },
  plugins: [],
  safelist: ['text-red-500', 'text-green-500', 'text-blue-500'],
}

