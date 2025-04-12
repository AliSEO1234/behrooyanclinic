import BranchCard from "./branchCard";
import { BranchComType } from "@/types/about/aboutPageType";
import istanbulmap from "@/assets/images/about/iSTANBUL MAP HEALTH.png";
import alanyamap from "@/assets/images/about/ALANYA MAPS HEALTH.png";
import antalyamap from "@/assets/images/about/ANTALYA MAP HEALTH.png";

import alanyaBranch1 from "@/assets/images/about/alanya/13.jpg";
import alanyaBranch2 from "@/assets/images/about/alanya/14.jpg";
import alanyaBranch3 from "@/assets/images/about/alanya/15.jpg";
import alanyaBranch4 from "@/assets/images/about/alanya/3.jpg";

import antalyaBranch1 from "@/assets/images/about/antalya/antalya (13).jpg";
import antalyaBranch2 from "@/assets/images/about/antalya/antalya (2).jpg";
import antalyaBranch3 from "@/assets/images/about/antalya/antalya (8).jpg";

import istanbulBranch1 from "@/assets/images/about/istanbul/armn (16).jpg";
import istanbulBranch2 from "@/assets/images/about/istanbul/armn (17).jpg";
import istanbulBranch3 from "@/assets/images/about/istanbul/armn (19).jpg";
import istanbulBranch4 from "@/assets/images/about/istanbul/armn (8).jpg";
import { ImgType } from "@/types/about/galleryAbout";
import AboutGallery from "./aboutGallery";
const OurBranches = ({ locale }: BranchComType) => {
  const alanyaImages: ImgType[] = [
    { id: 0, key: "alanyaBranch1", src: alanyaBranch1 },
    { id: 1, key: "alanyaBranch2", src: alanyaBranch2 },
    { id: 2, key: "alanyaBranch3", src: alanyaBranch3 },
    { id: 3, key: "alanyaBranch4", src: alanyaBranch4 },
  ];
  const antalyaImages: ImgType[] = [
    { id: 0, key: "antalyaBranch1", src: antalyaBranch1 },
    { id: 1, key: "antalyaBranch2", src: antalyaBranch2 },
    { id: 2, key: "antalyaBranch3", src: antalyaBranch3 },
    { id: 3, key: "alanyaBranch4", src: alanyaBranch4 },
  ];
  const istanbulImages: ImgType[] = [
    { id: 0, key: "istanbulBranch1", src: istanbulBranch1 },
    { id: 1, key: "istanbulBranch2", src: istanbulBranch2 },
    { id: 2, key: "istanbulBranch3", src: istanbulBranch3 },
    { id: 3, key: "istanbulBranch4", src: istanbulBranch4 },
  ];

  return (
    <>
      <AboutGallery />
      <div className="mb-10 s1280:mb-20 flex-cen">
        <p className="font-medium s1280:text-[20px] s1280:leading-[36px] text-[#474744] s1280:w-[802px] s1512:w-[951px]">
          {locale === "ru"
            ? "Благодаря глобальной сети надёжных партнёров, Azpo Health обеспечивает пациентам со всего мира доступ к медицинским услугам высочайшего качества.Благодаря нашим широким партнёрским связям пациенты могут выбрать лечение в любом городе Турции, получая доступ к лучшим клиникам и специалистам, соответствующим их потребностям."
            : "With a global network of trusted partners, Azpo Health ensures that patients from all over the world receive top-quality medical services. Thanks to our wide-reaching partnerships, patients can choose to be treated in any city across Turkey, accessing the best hospitals and specialists suited to their needs. "}
        </p>
      </div>
      <div className="s1728:px-20 s1920:px-32">
        <BranchCard
          mapCover={antalyamap}
          mapLink="https://maps.app.goo.gl/uEwvNmATVzCg7hXm6"
          desc={
            locale === "ru"
              ? "Анталья: с её великолепным побережьем и расслабленной средиземноморской атмосферой, Анталья идеально подходит как для ценителей комфортной жизни, так и для инвесторов.Наш офис в Анталье поможет вам найти идеальную недвижимость, соответствующую вашему видению"
              : "Antalya: With its stunning coastline and laid-back Mediterranean charm, Antalya is perfect for both lifestyle seekers and investors. Our Antalya office will help you find the ideal property that fits your vision."
          }
          locationAddress="Fener Mahallesi, Bülent Ecevit Bulvarı, Özdemir Plaza No: 42/1, 07230 Muratpaşa/Antalya"
          phone="+90 539 332 32 30"
          photoList={antalyaImages}
          title="Antalya"
        />
        <BranchCard
          mapCover={alanyamap}
          mapLink="https://maps.app.goo.gl/dGDjgEvqdE6rVY8C8"
          desc={
            locale === "ru"
              ? "Аланья: благодаря тёплому климату и высокому качеству жизни, Аланья является одним из самых привлекательных направлений для инвестиций в недвижимость.Наша профессиональная команда обеспечит вам доступ к лучшим объектам, которые может предложить этот прекрасный регион."
              : "Alanya: Renowned for its warm climate and exceptional quality of life, Alanya is a hotspot for real estate investments. Our dedicated team ensures you access the best properties this beautiful region has to offer."
          }
          locationAddress="Cumhuriyet Mahallesi, Keykubat Bulvarı 270A/14, Alanya/Antalya"
          phone="+90 539 332 32 30"
          photoList={alanyaImages}
          title="Alanya"
        />
        <BranchCard
          mapCover={istanbulmap}
          mapLink="https://maps.app.goo.gl/D1cz5L6KG3MvNjZJ9"
          desc={
            locale === "ru"
              ? "Стамбул: как мировой центр культуры и торговли, Стамбул предлагает уникальные возможности для инвестиций в недвижимость.Наша команда здесь специализируется на подборе всего — от современных городских апартаментов до уникальных исторических объектов, чтобы вы смогли в полной мере воспользоваться потенциалом этого динамичного мегаполиса."
              : "Istanbul: As a global hub of culture and commerce, Istanbul offers unparalleled real estate opportunities. Our team here specializes in finding everything from sleek city apartments to unique historical properties, ensuring you make the most of this dynamic city."
          }
          locationAddress="Kayabaşı Mahallesi, Adnan Menderes Bulvarı, No: 5/A, Blok: B3, Kat: 2, Daire: 12, Başakşehir/Istanbul"
          phone="+90 539 332 32 30"
          photoList={istanbulImages}
          title="Istanbul"
        />
      </div>
    </>
  );
};
export default OurBranches;
