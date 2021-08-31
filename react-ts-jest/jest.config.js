module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transformIgnorePatterns: ['/node_modules/'], // 不需要被转换
  watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
  moduleFileExtensions: ['jsx', 'tsx', 'ts', 'js', 'json'],
  testMatch: ['<rootDir>/specs/**/*spec.[jt]s?(x)'],  // './specs/**/*.spec.[jt]s?(x)'
  // transform: {
  //   "^.+\\.(ts|tsx)$": "ts-jest" // 使用 ts-jest 来处理以 ts/tsx 结尾的文件
  // },
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
};