module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    'overrides': [
        {

            'env': {
                'node': true
            },
            'files': ['*.js', '*.jsx'],
            'parserOptions': {
                'ecmaVersion': 2021,
                'sourceType': 'module'
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        cmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'error',
        // Treat console.log as a warning, allow console.error
        'no-console': ['warn', { allow: ['error'] }],
    },
}
