const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
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
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    prefix: '',
    darkTheme: 'custom',
    themes: [
      {
        custom: {
          primary: colors.emerald[600],
          'primary-focus': colors.emerald[700],
          'primary-content': colors.emerald[50],
          secondary: '#1888dd',
          'secondary-focus': colors.blue[700],
          'secondary-content': colors.blue[100],
          accent: colors.fuchsia[700],
          'accent-focus': colors.fuchsia[800],
          'accent-content': colors.fuchsia[100],
          'base-100': colors.gray[900],
          'base-200': colors.gray[800],
          'base-300': colors.gray[900],
          'base-content': colors.zinc[200],
          info: '#00b0e6',
          'info-content': colors.sky[100],
          success: '#00dc96',
          'success-content': colors.emerald[900],
          warning: '#ffbd00',
          'warning-content': colors.yellow[900],
          error: '#fc5547',
          'error-content': colors.red[900],

          '--rounded-box': '0.5rem',
          '--rounded-btn': '0.25rem',
        },
      },
      'dark',
    ],
  },
};
