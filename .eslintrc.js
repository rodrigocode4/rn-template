module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/no-unresolved': [0],
    'import/extensions': [0],
    'import/prefer-default-export': [0],
    'react/display-name': [0],
    'react/react-in-jsx-scope': [0],
    '@typescript-eslint/no-var-requires': [0],
    'no-restricted-exports': [0],
    'no-undef': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
