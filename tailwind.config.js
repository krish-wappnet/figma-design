/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html', // or wherever your HTML/TSX files are
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          serif: ['"Cormorant Upright"', 'serif'],
          mormont:['"Cormorant Upright"']
        }
      },
    },
    plugins: [],
  };
  