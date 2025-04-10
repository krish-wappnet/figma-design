/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html', // or wherever your HTML/TSX files are
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          serif: ["Cormorant Garamond","Cinzel Decorative",'"Playfair Display"', 'serif'],
        },
      },
    },
    plugins: [],
  };
  