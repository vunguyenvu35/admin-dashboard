module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/resources/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))',
    '<rootDir>/tests/unit/Dashboard.spec.js'
  ],
  verbose: true,
  testURL: "http://zili.admin.com/",
  collectCoverage: true,
  collectCoverageFrom: [
      "resources/src/**/*.{js,vue}",
      "!**/node_modules/**"
  ],
  coverageReporters: ["html", "text-summary"]
}
