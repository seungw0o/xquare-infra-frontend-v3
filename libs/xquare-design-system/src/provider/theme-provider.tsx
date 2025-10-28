import { PropsWithChildren } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

import type { ThemeMode } from "../theme";
import { theme } from "../theme";

interface ThemeProviderProps extends PropsWithChildren {
  mode?: ThemeMode;
}

export const ThemeProvider = ({
  mode = "light",
  children,
}: ThemeProviderProps) => {
  const selectedTheme = theme[mode];

  return (
    <EmotionThemeProvider theme={selectedTheme}>
      {children}
    </EmotionThemeProvider>
  );
};
