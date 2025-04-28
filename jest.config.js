module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/src/**/*.test.js', '**/src/**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
};