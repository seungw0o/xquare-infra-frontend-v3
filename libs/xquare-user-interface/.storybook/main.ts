import type {StorybookConfig} from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-onboarding',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    viteFinal: async (config) => {
        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve?.alias,
                    '@xquare/design-system': path.resolve(__dirname, '../../xquare-design-system/src'),
                },
            },
        };
    },
};

export default config;