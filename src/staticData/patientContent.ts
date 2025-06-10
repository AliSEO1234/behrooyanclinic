import dist1icon from "@/assets/images/distinctive/icon1.svg";
// import dist2icon from "@/assets/images/distinctive/icon2.svg";
// import dist3icon from "@/assets/images/distinctive/icon3.svg";
// import dist4icon from "@/assets/images/distinctive/icon4.svg";
import { StaticImageData } from "next/image";
export const handlePatient = (locale: string) => {
  const patientContents: {
    service: string;
    serivceKey: string;
    header: string;
    desc: string;
    video: string;
    serviceIcon: StaticImageData;
  }[] = [
    {
      service: locale === "ru" ? "Эстетическая медицина" : "Aesthetics",
      serivceKey: "aesthetic",
      serviceIcon: dist1icon,
      header: "Maliba",
      desc: "Hair Transplant Journey",
      video: "https://youtu.be/gsQ849f0x-I?si=sQ3nz3PbXQ7O3zFw",
    },
    {
      service: locale === "ru" ? "Эстетическая медицина" : "Aesthetics",
      serivceKey: "aesthetic",
      serviceIcon: dist1icon,
      header: "Timur's",
      desc: "Hair Transplant Journey",
      video: "https://www.youtube.com/shorts/CUzIi1Yyikg",
    },
    {
      service: locale === "ru" ? "Эстетическая медицина" : "Aesthetics",
      serivceKey: "aesthetic",
      serviceIcon: dist1icon,
      header: "Alexander's",
      desc: "Hair Transplant Journey",
      video: "https://www.youtube.com/shorts/gvc__8i32cI",
    },
    {
      service: locale === "ru" ? "Эстетическая медицина" : "Aesthetics",
      serivceKey: "aesthetic",
      serviceIcon: dist1icon,
      header: "Vadim's",
      desc: "Hair Transplant Journey",
      video: "https://www.youtube.com/shorts/9Tb9jafBfAI",
    },

    {
      service: locale === "ru" ? "Эстетическая медицина" : "Aesthetics",
      serivceKey: "aesthetic",
      serviceIcon: dist1icon,
      header: "Ludmila's",
      desc: "Hip Replacement Surgery",
      video: "https://www.youtube.com/shorts/V9S1j1aldmM",
    },
  ];
  return patientContents;
};
