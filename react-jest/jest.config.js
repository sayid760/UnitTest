module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transformIgnorePatterns: ['/node_modules/'], // 不需要被转换
  watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
  moduleFileExtensions: ['jsx', 'tsx', 'ts', 'js', 'json'],
  testMatch: ['<rootDir>/src/**/*spec.[jt]s?(x)'],  // '/specs/**/*spec.[jt]s?(x)'
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
};