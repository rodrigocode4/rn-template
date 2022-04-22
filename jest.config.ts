/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  preset: 'react-native',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts(x)',
    '!<rootDir>/src/(infrastructure|theme)'
  ],
  setupFilesAfterEnv: ['<rootDir>/src/infrastructure/test.setup.ts'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native-animatable|react-native)/)'
  ]
}
