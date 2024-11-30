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
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center',
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
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
          primary: colors.teal[600],
          'primary-focus': colors.teal[700],
          'primary-content': colors.gray[50],
          secondary: colors.violet[600],
          'secondary-focus': colors.violet[700],
          'secondary-content': colors.violet[50],
          accent: colors.amber[500],
          'accent-focus': colors.amber[600],
          'accent-content': colors.amber[50],
          'base-100': colors.slate[900],
          'base-200': colors.slate[800],
          'base-300': colors.slate[700],
          'base-content': colors.slate[100],
          info: colors.sky[500],
          'info-content': colors.sky[50],
          success: colors.emerald[500],
          'success-content': colors.emerald[50],
          warning: colors.amber[500],
          'warning-content': colors.amber[50],
          error: colors.rose[500],
          'error-content': colors.rose[50],
          neutral: colors.slate[700],
          'neutral-focus': colors.slate[600],
          'neutral-content': colors.slate[100],
        },
        light: {
          primary: colors.teal[600],
          'primary-focus': colors.teal[700],
          'primary-content': colors.gray[50],
          secondary: colors.violet[600],
          'secondary-focus': colors.violet[700],
          'secondary-content': colors.violet[50],
          accent: colors.amber[500],
          'accent-focus': colors.amber[600],
          'accent-content': colors.amber[50],
          'base-100': colors.slate[50],
          'base-200': colors.slate[100],
          'base-300': colors.slate[200],
          'base-content': colors.slate[900],
          info: colors.sky[500],
          'info-content': colors.sky[50],
          success: colors.emerald[500],
          'success-content': colors.emerald[50],
          warning: colors.amber[500],
          'warning-content': colors.amber[50],
          error: colors.rose[500],
          'error-content': colors.rose[50],
          neutral: colors.slate[200],
          'neutral-focus': colors.slate[300],
          'neutral-content': colors.slate[900],
        },
      },
    ],
  },
};
