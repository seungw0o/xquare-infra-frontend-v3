import {colorSemantic} from '../semantic';

export type ThemeMode = 'light';

export interface XquareTheme {
    mode: ThemeMode;
    color: typeof colorSemantic.xquare;
}

export const lightTheme: XquareTheme = {
    mode: 'light',
    color: colorSemantic.xquare,
};
