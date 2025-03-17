import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import eslintPrettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    eslintPrettier,
    {
        settings: {
            react: {
                version: 'detect', // Automatically detect React version
                runtime: 'automatic', // Enable the new JSX transform
            },
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
            'no-unexpected-multiline': 'error',
            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': ['error'],
        },
        // 'jsx-runtime': {
        //     plugins: ['react'],
        //     parserOptions: {
        //         ecmaFeatures: {
        //             jsx: true,
        //         },
        //         jsxPragma: null, // for @typescript/eslint-parser
        //     },
        //     rules: {
        //         'react/react-in-jsx-scope': 0,
        //         'react/jsx-uses-react': 0,
        //     },
        // },
    },
]
