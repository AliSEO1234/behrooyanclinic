import BranchCard from "./branchCard";
import p1 from "@/assets/images/about/about/p1.jpeg";
import p2 from "@/assets/images/about/about/p2.jpg";
import p3 from "@/assets/images/about/about/p3.jpg";
import p4 from "@/assets/images/about/about/p4.jpeg";
import { BranchComType } from "@/types/about/aboutPageType";
const OurBranches = ({locale} : BranchComType) => {
  const photoList = [p1, p2, p3, p4];
  return (
    <>
      <div className="mb-10 s1280:mb-20">
        <p className="text-center font-medium s1280:text-[20px] s1280:leading-[36px] text-[#474744] s1280:px-20 s1512:px-40">
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
