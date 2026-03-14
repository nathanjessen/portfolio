import nextConfig from 'eslint-config-next';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

const eslintConfig = [
  { ignores: ['node_modules/', '.next/', 'storybook-static/'] },
  ...nextConfig,
  prettierRecommended,
  {
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
      'jsx-quotes': ['error', 'prefer-single'],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { ignoreRestSiblings: true, argsIgnorePattern: '^_' },
      ],
    },
  },
];

export default eslintConfig;
