module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/no-unresolved': [0],
    'import/extensions': [0],
    'import/prefer-default-export': [0],
    'react/display-name': [0],
    'react/react-in-jsx-scope': [0],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    '@typescript-eslint/no-var-requires': [0],
    'no-restricted-exports': [0],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
