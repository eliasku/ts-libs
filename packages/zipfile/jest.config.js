export default {
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    // 'ts-jest': {
    //   packageJson: '<rootDir>/package.json'
    // }
    __PACKAGE_ROOT_DIR__: '<rootDir>',
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  // coveragePathIgnorePatterns: [
  //     "<rootDir>/dist"
  // ],
  coverageReporters: ['json', 'lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
