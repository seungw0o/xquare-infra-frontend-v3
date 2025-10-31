import { DimensionValue } from "../../utils";

export interface Props {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  $width?: DimensionValue;
  $errorMessage?: string;
}
