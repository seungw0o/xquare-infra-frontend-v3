export interface FontStyle {
  fontSize: string;
  lineHeight: string;
}

export interface FontWeight {
  bold: string;
  medium: string;
  regular: string;
}

export interface TextStyles {
  h1: FontStyle;
  h2: FontStyle;
  h3: FontStyle;
  h4: FontStyle;
  h5: FontStyle;
  h6: FontStyle;
  body1: FontStyle;
  body2: FontStyle;
  body3: FontStyle;
  caption: FontStyle;
}
export interface ColorPalette {
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
}

export interface ThemeColor {
  blue: ColorPalette;
  gray: ColorPalette;
  red: ColorPalette;
  green: ColorPalette;
  purple: ColorPalette;
  pink: ColorPalette;
  white: string;
  black: string;
}

const colorToken = {
    blue: { 500: "#5050FF" },
    gray: { 200: "#EAEAEA", 400: "#BEBEBE", 500: "#EAEAEA" },
    green: {
      400: "#A0FFA8",
      500: "#5CE768",
    },
    pink: { 500: "#FF68D7" },
    purple: {
      100: "#B982FF",
      200: "#9650FA",
      300: "#9650FA",
      400: "#9650FA",
      500: "#8A38F5",
      600: "#433459",
      800: "#0B001A",
    },
    red: {
      400: "#FF9090",
      500: "#FF5353",
      600: "#FF0000",
    },
    white: "#FFFFFF",
    black: "#000000",
}

const colorSemantic = {
  xquare: {
    icon: {
      red: {
        dark: colorToken.red[500],
        light: colorToken.red[400],
      },
      green: {
        dark: colorToken.green[500],
        light: colorToken.green[400],
      },
    },
    toggle: {
      off: {
        gray: colorToken.gray[500],
      },
      on: {
        purple: colorToken.purple[500],
      },
    },
    card: {
      none: {
        white: colorToken.white,
      },
      hover: {
        gray: colorToken.gray[200],
      },
      select: {
        purple: colorToken.purple[400],
      },
    },
    button: {
      none: {
        gray: colorToken.gray[400],
      },
      hover: {
        purple: colorToken.purple[500],
      },
      select: {
        purple: {
          dark: colorToken.purple[500],
          light: colorToken.purple[100],
        },
      },
    },
    text: {
      none: {
        white: colorToken.white,
        black: colorToken.black,
        gray: {
          dark: colorToken.gray[500],
          light: colorToken.gray[400],
        },
        purple: {
          dark: colorToken.purple[600],
          light: colorToken.purple[500],
        },
      },
      hover: {
        white: colorToken.white,
        purple: colorToken.purple[600],
      },
      select: {
        purple: colorToken.purple[500],
      },
    },
    background: {
      white: colorToken.white,
      gray: colorToken.gray[200],
      purple: {
        dark: colorToken.purple[800],
        medium: colorToken.purple[300],
        light: colorToken.purple[100],
      },
      green: colorToken.green[500],
      blue: colorToken.blue[500],
    },
  },
} as const;

export interface XquareTheme {
  color: typeof colorSemantic.xquare;
  font: TextStyles;
  fontWeight: FontWeight;
  fontFamily: string;
}

const fontToCss = (size: number, lineHeight: number): FontStyle => ({
  fontSize: `${size}px`,
  lineHeight: `${lineHeight}px`,
});

const textStyles: TextStyles = {
  h1: fontToCss(40, 60),
  h2: fontToCss(36, 54),
  h3: fontToCss(32, 48),
  h4: fontToCss(28, 40),
  h5: fontToCss(24, 36),
  h6: fontToCss(20, 28),
  body1: fontToCss(18, 26),
  body2: fontToCss(16, 24),
  body3: fontToCss(14, 20),
  caption: fontToCss(12, 18),
};

const fontWeight: FontWeight = {
  bold: "700",
  medium: "500",
  regular: "400",
};

export const lightTheme: XquareTheme = {
  color: colorSemantic.xquare,
  font: textStyles,
  fontWeight: fontWeight,
  fontFamily: '"Pretendard Variable", "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", sans-serif',
};