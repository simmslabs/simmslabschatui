module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/es/', '/dist/', 'examples'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: "jsdom"
};
