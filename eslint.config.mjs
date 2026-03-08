import nextConfig from 'eslint-config-next';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

const eslintConfig = [
  ...nextConfig,
  prettierRecommended,
  {
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
      'jsx-quotes': ['error', 'prefer-single'],
    },
  },
];

export default eslintConfig;
