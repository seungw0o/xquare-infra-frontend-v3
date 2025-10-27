import type {Preview} from '@storybook/react';
import {ThemeProvider} from '@emotion/react';
import {lightTheme} from '@xquare/design-system';

const withTheme = (Story: any) => (
    <ThemeProvider theme={lightTheme}>
        <Story/>
    </ThemeProvider>
);

const preview: Preview = {
    parameters: {
        layout: 'centered',
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [withTheme],
};

export default preview;