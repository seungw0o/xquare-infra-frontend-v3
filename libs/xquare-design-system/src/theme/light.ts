import {colorSemantic, typographySemantic} from '../semantic';

export type ThemeMode = 'light';

export interface XquareTheme {
    mode: ThemeMode;
    color: typeof colorSemantic.xquare;
    typography: typeof typographySemantic.xquare;
}

export const lightTheme: XquareTheme = {
    mode: 'light',
    color: colorSemantic.xquare,
    typography: typographySemantic.xquare,
};
