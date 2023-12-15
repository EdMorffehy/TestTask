const rules = require("./.eslintrules.cjs");

module.exports = {
  rules: {
    ...rules,
    "no-console": [2, { allow: ["warn", "error", "info"] }],
    "no-debugger": 2,
    "no-unused-vars": 2,
    "no-duplicate-case": 2,
    "@typescript-eslint/no-unused-vars": 2
  }
};
