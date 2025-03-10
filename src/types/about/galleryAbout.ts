import { StaticImageData } from "next/image";
export type ImgType = {
  id: number;
  key: string;
  src: StaticImageData;
};

export type GalleryAboutType = {
  images?: ImgType[];
};
