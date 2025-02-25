import { Dispatch, SetStateAction } from "react";

export type OptionType = {
  label: string;
  key: string;
  id: number;
};
export type ComboBoxType = {
  options: OptionType[];
  selectedValue: OptionType | null;
  onChange: Dispatch<SetStateAction<OptionType | null>>;
  className : string
  containertStyle?: string
  trigger : string
};
