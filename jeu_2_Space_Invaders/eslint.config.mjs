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
      
      "valid-jsdoc": "off",
      "require-jsdoc": "off",
      
      // Tes préférences
      "camelcase": "off",
      "no-unused-vars": "off", 
      "no-var": "warn",
      "indent": "off",
      "object-curly-spacing": "off",
      "arrow-parens": "off",
      "operator-linebreak": "off",
      "max-len": "off",
      "comma-dangle": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  }
];