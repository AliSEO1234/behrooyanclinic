import BranchCard from "./branchCard";
import p1 from "@/assets/images/about/about/p1.jpeg";
import p2 from "@/assets/images/about/about/p2.jpg";
import p3 from "@/assets/images/about/about/p3.jpg";
import p4 from "@/assets/images/about/about/p4.jpeg";
import { BranchComType } from "@/types/about/aboutPageType";
const OurBranches = ({locale} : BranchComType) => {
  const photoList = [p1, p2, p3, p4];
  // const alanyaImages: ImgType[] = [
  //   { id: 0, key: "ala4", src: ala4 },
  //   { id: 1, key: "ala7", src: ala7 },
  //   { id: 2, key: "ala1", src: ala1 },
  //   { id: 3, key: "ala2", src: ala2 },
  //   { id: 4, key: "ala5", src: ala5 },
  //   { id: 5, key: "ala6", src: ala6 },
  //   { id: 6, key: "ala3", src: ala3 },
  // ];
  // const antalyaImages: ImgType[] = [
  //   { id: 0, key: "antalya14", src: antalya14 },
  //   { id: 1, key: "antalya9", src: antalya9 },
  //   { id: 2, key: "antalya1", src: antalya1 },
  //   { id: 3, key: "antalya4", src: antalya4 },
  //   { id: 4, key: "antalya2", src: antalya2 },
  //   { id: 5, key: "antalya3", src: antalya3 },
  //   { id: 6, key: "antalya5", src: antalya5 },
  //   { id: 7, key: "antalya6", src: antalya6 },
  //   { id: 8, key: "antalya7", src: antalya7 },
  //   { id: 9, key: "antalya8", src: antalya8 },
  //   { id: 10, key: "antalya10", src: antalya10 },
  //   { id: 11, key: "antalya11", src: antalya11 },
  //   { id: 12, key: "antalya12", src: antalya12 },
  //   { id: 13, key: "antalya13", src: antalya13 },
  //   { id: 14, key: "antalya15", src: antalya15 },
  // ];
  // const armanestanImages: ImgType[] = [
  //   { id: 0, key: "arman5", src: arman5 },
  //   { id: 1, key: "arman9", src: arman9 },
  //   { id: 2, key: "arman16", src: arman16 },
  //   { id: 3, key: "arman2", src: arman2 },
  //   { id: 4, key: "arman3", src: arman3 },
  //   { id: 5, key: "arman4", src: arman4 },
  //   { id: 6, key: "arman6", src: arman6 },
  //   { id: 7, key: "arman7", src: arman7 },
  //   { id: 8, key: "arman8", src: arman8 },
  //   { id: 9, key: "arman10", src: arman10 },
  //   { id: 10, key: "arman11", src: arman11 },
  //   { id: 11, key: "arman12", src: arman12 },
  //   { id: 12, key: "arman1", src: arman1 },
  //   { id: 13, key: "arman13", src: arman13 },
  //   { id: 14, key: "arman14", src: arman14 },
  //   { id: 15, key: "arman15", src: arman15 },
  //   { id: 16, key: "arman17", src: arman17 },
  //   { id: 17, key: "arman18", src: arman18 },
  //   { id: 18, key: "arman19", src: arman19 },
  //   { id: 19, key: "arman20", src: arman20 },
  //   { id: 20, key: "arman21", src: arman21 },
  //   { id: 21, key: "arman22", src: arman22 },
  //   { id: 22, key: "arman23", src: arman23 },
  //   { id: 23, key: "arman24", src: arman24 },
  //   { id: 24, key: "arman25", src: arman25 },
  // ];
  return (
    <>
      <div className="mb-10 s1280:mb-20 flex-cen">
        <p className="font-medium s1280:text-[20px] s1280:leading-[36px] text-[#474744] s1280:w-[802px] s1512:w-[951px]">
          {
            locale === "ru" ? "Компания Azpo Health — новое направление бренда Azpo, лицензированное Министерством здравоохранения Турции. Благодаря нашим партнёрским связям пациенты могут выбрать лечение в любом городе страны, получая доступ к лучшим клиникам и специалистам, соответствующим их индивидуальным потребностям." : "With a global network of trusted partners, Azpo Health ensures that patients from all over the world receive top-quality medical services. Thanks to our wide-reaching partnerships, patients can choose to be treated in any city across Turkey, accessing the best hospitals and specialists suited to their needs. "
          }
        </p>
      </div>
      <div className="s1728:px-20 s1920:px-32">
        <BranchCard
          desc={locale === "ru" ? " Анталия: с ее потрясающей береговой линией и неповторимым средиземноморским очарованием идеально сочетает в себе динамичный образ жизни и перспективные инвестиционные возможности. Наш офис в Анталии поможет вам найти идеальную недвижимость, соответствующую вашим критериям." : "Antalya: With its stunning coastline and laid-back Mediterranean charm, Antalya is perfect for both lifestyle seekers and investors. Our Antalya office will help you find the ideal property that fits your vision."}
          locationAddress="Fener Mahallesi, Bülent Ecevit Bulvarı, Özdemir Plaza No: 42/1, 07230 Muratpaşa/Antalya"
          phone="+ 90 545 555 0 555"
          photoList={photoList}
          title="Antalya"
        />
        <BranchCard
          desc={locale === "ru" ? "Алания: известная своим теплым климатом и высоким качеством жизни, является настоящим магнитом для инвестиций в недвижимость. Наша команда гарантирует, что вы получите доступ к самым лучшим объектам недвижимости, которые может предложить этот прекрасный регион." : "Alanya: Renowned for its warm climate and exceptional quality of life, Alanya is a hotspot for real estate investments. Our dedicated team ensures you access the best properties this beautiful region has to offer."}
          locationAddress="Cumhuriyet Mahallesi, Keykubat Bulvarı 270A/14, Alanya/Antalya"
          phone="+ 90 545 555 0 555"
          photoList={photoList}
          title="Alanya"
        />
        <BranchCard
          desc={locale === "ru" ? "Стамбул: как мировой центр культуры и торговли, Стамбул предлагает непревзойденные возможности в сфере недвижимости. Наша команда специализируется в поиске любых объектов: от элегантных городских квартир до уникальных исторических объектов, обеспечивая вам максимальную отдачу от этого динамичного города." : "Istanbul: As a global hub of culture and commerce, Istanbul offers unparalleled real estate opportunities. Our team here specializes in finding everything from sleek city apartments to unique historical properties, ensuring you make the most of this dynamic city."}
          locationAddress="Kayabaşı Mahallesi, Adnan Menderes Bulvarı, No: 5/A, Blok: B3, Kat: 2, Daire: 12, Başakşehir/Istanbul"
          phone="+ 90 545 555 0 555"
          photoList={photoList}
          title="Istanbul"
        />
      </div>
    </>
  );
};
export default OurBranches;
