import { StaticImageData } from "next/image";

export type PatientServiceType = {
  label: string;
  desc: string;
  photos: StaticImageData[];
  count: number
};
