/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transitionDuration: {
        0: '0ms',
        2000: '2000ms',
        4000: '4000ms',
      },
    },
  },
  plugins: [],
};
