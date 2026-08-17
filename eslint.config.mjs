import js from "/home/ubuntu/scan/node_modules/@eslint/js/src/index.js";
import globals from "/home/ubuntu/scan/node_modules/globals/index.js";
export default [
  { ignores: ["script.min.js"] },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      globals: { ...globals.browser, ...globals.es2022 },
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "no-constant-condition": "error",
      "no-cond-assign": ["error", "except-parens"],
      "no-eval": "warn",
      "no-implied-eval": "error",
      "no-self-assign": "error",
      "no-unused-expressions": "warn",
      "no-compare-neg-zero": "error",
      "eqeqeq": ["warn", "smart"],
    },
  },
];
