import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type BlogLayoutType = {
  children: ReactNode;
  blogCategories: { blogTitle: string; blogPath: string; id: number }[];
};
export type BlogCardType = {
  img: StaticImageData | string;
  title: string;
  desc: string;
  blogDate: string;
  blogId: number;
  className? : string
};
