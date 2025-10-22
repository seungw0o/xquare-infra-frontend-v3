import type {ThemeMode, XquareTheme} from './light';
import {lightTheme} from './light';

export {lightTheme} from './light';
export type {XquareTheme, ThemeMode} from './light';

type ThemeRegistry = Record<ThemeMode, XquareTheme>;

export const theme: ThemeRegistry = {
    light: lightTheme,
};
