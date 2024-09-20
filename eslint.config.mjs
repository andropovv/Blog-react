import jsdoc from 'eslint-plugin-jsdoc';

const config = [
    // configuration included in plugin
    jsdoc.configs['flat/recommended'],
    // other configuration objects...
    {
        files: ['src/**/*.{tsx|ts}'],
        plugins: {
            jsdoc,
        },
        rules: {
            'jsdoc/require-description': 'warn'
        },
    },
    {
        ignores: ['node_modules/**/*', 'build/**/*'],

    }
];

export default config;