/* eslint-env node */

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  rules: {
    'prettier/prettier': 'error',
    'arrow-parens': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    camelcase: 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: ['function'],
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: ['variable'],
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: ['variable'],
        modifiers: ['destructured'],
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: ['parameter'],
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: ['typeLike'],
        format: ['PascalCase', 'UPPER_CASE'],
      },
      {
        selector: ['typeProperty'],
        format: ['camelCase', 'snake_case', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: ['objectLiteralProperty'],
        format: ['camelCase', 'snake_case', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: [
          'classProperty',
          'objectLiteralProperty',
          'typeProperty',
          'classMethod',
          'objectLiteralMethod',
          'typeMethod',
          'accessor',
          'enumMember',
        ],
        format: null,
        modifiers: ['requiresQuotes'],
      },
      {
        selector: ['interface'],
        format: ['PascalCase', 'UPPER_CASE'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
    ],
  },
  globals: {
    afterAll: true,
    afterEach: true,
    beforeAll: true,
    beforeEach: true,
    describe: true,
    env: true,
    expect: true,
    it: true,
    jest: true,
  },
  env: {
    browser: true,
    es2022: true,
  },
}
