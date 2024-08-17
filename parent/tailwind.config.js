/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#42B9EA',
        secondary: '#373A40',
      },
      boxShadow: {
        custom_shadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
