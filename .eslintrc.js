module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest/globals": true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["jest", "jsdoc", "prettier", "react"],
  rules: {
    "prettier/prettier": "error"
  },
  overrides: [
    {
      files: ["bin/*.js", "lib/*.js"],
      excludedFiles: "*.test.js",
      rules: {
        quotes: ["error", "single"]
      }
    }
  ]
};
