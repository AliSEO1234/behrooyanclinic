import dist1icon from "@/assets/images/distinctive/icon1.svg";
// import dist2icon from "@/assets/images/distinctive/icon2.svg";
// import dist3icon from "@/assets/images/distinctive/icon3.svg";
// import dist4icon from "@/assets/images/distinctive/icon4.svg";
import { StaticImageData } from "next/image";
export const patientContents: {
  service: string;
  serivceKey: string;
  header: string;
  desc: string;
  video: string;
  serviceIcon: StaticImageData;
}[] = [
  {
    service: "Aesthetics",
    serivceKey: "aesthetic",
    serviceIcon: dist1icon,
    header: "Timur's",
    desc: "Hair Transplant Journey",
    video: "https://azpo.com/api/files/property-videos/otziv_1_eng.mp4",
  },
  {
    service: "Aesthetics",
    serivceKey: "aesthetic",
    serviceIcon: dist1icon,
    header: "Alexander's",
    desc: "Hair Transplant Journey",
    video: "https://azpo.com/api/files/property-videos/otziv_2_eng.mp4",
  },
  {
    service: "Aesthetics",
    serivceKey: "aesthetic",
    serviceIcon: dist1icon,
    header: "Vadim's",
    desc: "Hair Transplant Journey",
    video: "https://azpo.com/api/files/property-videos/otziv_3_en.mp4",
  },
  {
    service: "Aesthetics",
    serivceKey: "aesthetic",
    serviceIcon: dist1icon,
    header: "Ludmila's",
    desc: "Hip Replacement Surgery",
    video: "https://azpohealth.com/api/files/content-videos/feedback_1.mp4",
  },
];
