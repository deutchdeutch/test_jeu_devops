import google from "eslint-config-google";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default [
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      ...google.rules,
      "indent": ["error", 2],
      "require-jsdoc": "off",
      "no-unused-vars": "warn",
      "object-curly-spacing": ["error", "always"]
    },
  },
];