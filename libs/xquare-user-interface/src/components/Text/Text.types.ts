import type { XquareTheme } from "@xquare/design-system";

export interface Props {
  $size: keyof XquareTheme["font"];
  $weight?: keyof XquareTheme["fontWeight"];
  $color?: string;
  $span?: boolean;
  $align?: "left" | "center" | "right" | "justify";
  $underline?: boolean;
}
