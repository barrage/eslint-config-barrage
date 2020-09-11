module.exports = {
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:vue/recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  rules: {
    // eslint
    'comma-dangle': ['error', 'always-multiline'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
    'quote-props': ['error', 'as-needed'],
    'no-return-assign': 0,
  },
}
