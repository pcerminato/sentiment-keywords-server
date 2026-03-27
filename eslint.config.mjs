// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['node_modules', 'build', 'dist'],
  },
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json', 
        tsconfigRootDir: import.meta.dirname,
      },
    },
    // Optional rules here
    rules: {
      // Example: require explicit function return types
      // '@typescript-eslint/explicit-function-return-type': 'error', 
    },
  },
  {
    // Configuration for JavaScript files (e.g., config files, build scripts)
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    ...eslint.configs.recommended,
    rules: {
      // Example: Node.js specific rule
      'no-console': 'warn',
    }
  }
);
