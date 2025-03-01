import dist1icon from "@/assets/images/distinctive/icon1.svg";
import dist2icon from "@/assets/images/distinctive/icon2.svg";
import dist3icon from "@/assets/images/distinctive/icon3.svg";
import dist4icon from "@/assets/images/distinctive/icon4.svg";
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
    header: "Ali mosadegh",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content. This card has even longer",
    video: "https://azpo.com/api/files/property-videos/site_health_en.mp4",
  },
  {
    service: "Aesthetics",
    serivceKey: "aesthetic",
    serviceIcon: dist2icon,
    header: "Rasul bey",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content. This card has even longer",
    video: "https://azpo.com/api/files/property-videos/site_health_en.mp4",
  },
  {
    service: "Bariatric surgeries",
    serivceKey: "aesthetic",
    serviceIcon: dist3icon,
    header: "Parinaz",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content. This card has even longer content than the first to show that equal height action.",
    video: "https://azpo.com/api/files/property-videos/site_health_en.mp4",
  },
  {
    service: "Aesthetics",
    serivceKey: "aesthetic",
    serviceIcon: dist4icon,
    header: "Parinaz",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content. This card has even longer content than the first to show that equal height action.",
    video: "https://azpo.com/api/files/property-videos/site_health_en.mp4",
  },
];
