module.exports = {
  moduleFileExtensions: [
    "web.js",
    "js",
    "json",
    "web.jsx",
    "jsx",
    "node",
    "graphql"
  ],
  setupFiles: [
    "<rootDir>/node_modules/@reactioncommerce/admin-core/scripts/testPolyfills.js"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/node_modules/@reactioncommerce/admin-core/scripts/setupTests.js"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/config/",
    "<rootDir>/reports/",
    "<rootDir>/bin/",
    "<rootDir>/dist/",
    "<rootDir>/node_modules/",
    "<rootDir>/package/dist/"
  ],
  transform: {
    "\\.(gql|graphql)$": "@jagi/jest-transform-graphql",
    "^.+\\.jsx?$": "./babel.jest.js"
  }
};
