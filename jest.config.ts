import type { Config } from 'jest'

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
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|rollbar-react-native|@fortawesome|@react-native|@react-navigation)'
  ],
  transform: {
    '^.+/((@)?react-native)/.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(js|ts|jsx|tsx)$': '@swc/jest'
  },
  moduleNameMapper: {
    '~(.*)$': '<rootDir>/src$1'
  }
} as Config
