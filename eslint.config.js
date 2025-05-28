import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactNative from 'eslint-plugin-react-native';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from './prettier.config.js';

export default [
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      sourceType: 'module',
    },
    plugins: {
      react: eslintPluginReact,
      'react-native': eslintPluginReactNative,
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': ['error', prettierConfig],
      'react-native/no-inline-styles': 'off',
      'react/prop-types': 'off',
    },
  },
];
