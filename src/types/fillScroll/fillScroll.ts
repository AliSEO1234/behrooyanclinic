import { ReactNode } from "react";

export type BorderStyleLayoutType = {
  className?: string;
  children: ReactNode;
  title: string;
  order: "first" | "second" | "third" | "fourth" | "five" | "six" | "seven";
  classLabel? : string
};
