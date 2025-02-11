import { ReactNode } from "react";

export type AboutTabType = {
  trigerList: {
    id: number;
    title: string;
    keyTrigg: string;
  }[];
  children: { [key: string]: ReactNode };
};
