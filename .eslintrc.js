module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb", "plugin:react/recommended", "prettier", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "prettier", "jsx-a11y"],
  rules: {
    "prettier/prettier": "error"
  }
};
