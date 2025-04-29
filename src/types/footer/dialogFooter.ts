import { StaticImageData } from "next/image";

export type PhotoType = {
  src: StaticImageData;
  key: string;
  id: number;
};
export type DialogFooterType = {
  photos: PhotoType[];
};
