import { DimensionValue } from "../../utils";

export type DropdownOption = {
  label: string;
  value: string;
};

export interface Props {
  options: DropdownOption[];
  selected?: string;
  onSelect?: (value: string) => void;
  $width?: DimensionValue;
}
