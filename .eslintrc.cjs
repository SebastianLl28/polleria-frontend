module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', '*.js'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      'react/prop-types': 'off',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-trailing-spaces': 'warn',
      indent: ['warn', 2],
      quotes: ['warn', 'single'],
      semi: ['warn', 'never'],
      'no-var': 'warn',
      'jsx-quotes': ["warn", "prefer-single"]
    }
  }