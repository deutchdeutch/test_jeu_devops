module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'google'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'camelcase': 'off',
    'no-unused-vars': 'warn',
    'no-var': 'warn',
    'indent': 'off',
    'object-curly-spacing': 'off',
    'arrow-parens': 'off',
    'operator-linebreak': 'off',
    'one-var': 'off',
    'max-len': 'off',
    'comma-dangle': 'off',
  },
};
