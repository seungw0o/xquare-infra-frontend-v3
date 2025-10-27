import {black, blue, gray, green, purple, red, white} from '../tokens/color';

export const colorSemantic = {
    xquare: {
        icon: {
            red: {
                dark: red[500],
                light: red[400],
            },
            green: {
                dark: green[500],
                light: green[400],
            }
        },
        toggle: {
            off: {
                gray: gray[500],
            },
            on: {
                purple: purple[500],
            }
        },
        card: {
            none: {
                white: white[100],
            },
            hover: {
                gray: gray[200],
            },
            select: {
                purple: purple[400],
            }
        },
        button: {
            none: {
                gray: gray[400],
            },
            hover: {
                purple: purple[500],
            },
            select: {
                purple: {
                    dark: purple[500],
                    light: purple[100],
                }
            }
        },
        text: {
            none: {
                white: white[100],
                black: black[900],
                gray: {
                    dark: gray[500],
                    light: gray[400],
                },
                purple: {
                    dark: purple[600],
                    light: purple[500],
                },
            },
            hover: {
                white: white[100],
                purple: purple[600],
            },
            select: {
                purple: purple[500],
            }
        },
        background: {
            white: white[100],
            gray: gray[200],
            purple: {
                dark: purple[800],
                medium: purple[300],
                light: purple[100],
            },
            green: green[500],
            blue: blue[500]
        }
    }
} as const;

export type ColorSemantic = typeof colorSemantic;
