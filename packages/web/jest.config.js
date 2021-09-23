/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.{ts,tsx}'],
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['./tests/setupTests.ts'],
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    // To ignore an individual file add this on line one `/* istanbul ignore file */`
    './src/**/*.{ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
};
