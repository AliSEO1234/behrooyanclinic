import { ReactNode } from "react";

export type ChangeDropdownType = {
  trigStyle?: string;
  bodyStyle?: string;
  children: ReactNode;
  trigText: string;
  align?: "end" | "start" | "center";
};
export type ChangeLanguageType = {
  trigStyle: string;
  BodyWidth: string;
};
