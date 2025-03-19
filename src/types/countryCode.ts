import { Dispatch, SetStateAction } from "react";
import { OptionType } from "./comboBox/comboType";

export type CountryType = {
  name: {
    common: string;
  };
  idd?: {
    root: string;
    suffixes?: string[];
  };
}
export type CountrycodeItemType = {
  label : string
  key : string
  id: number
}
export type CountryCodeType = {
  setCodes: Dispatch<SetStateAction<OptionType | null>>;
  codes : OptionType | null
};
