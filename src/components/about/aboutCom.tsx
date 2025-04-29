import ImgFetcher from "../imgFetcher";
import VideoComponent from "./videoComponent";
import healthlogo from "@/assets/images/about/healthabout.svg";
import { AboutComType } from "@/types/about/aboutPageType";
import FillScrollLayout from "@/layoutes/fillScrollLayout/fillScrollLayout";
import AboutGalleryCom from "./aboutComGallery";
const AboutContent = ({ locale }: AboutComType) => {
  return (
    <>
      <div className="s1280:mb-20 mb-10 flex-cen">
        <p className="font-medium text-[14px] leading-[25px] s1280:text-[20px] text-[#474744] s1280:leading-[36px] s1280:w-[802px] s1512:w-[951px]">
          {locale === "ru"
            ? "Azpo Group уже более 20 лет является надёжным и уважаемым именем в своей отрасли, зарекомендовав себя как узнаваемый и предпочтительный бренд.Azpo Health, новое подразделение группы Azpo, работает с официальным признанием Министерства здравоохранения Турции по лицензии на медицинский туризм и предоставляет профессиональные консультационные услуги для иностранных пациентов, ищущих лечение в Турции."
            : "Azpo Group has been a trusted name in the industry for over 20 years, establishing itself as a well-known and preferred brand. As a newly established division of Azpo Group, Azpo Health operates with official recognition from the Turkish Ministry of Health under the Health Tourism License, providing expert advisory services to international patients seeking medical treatment in Turkey."}
        </p>
      </div>
      <div>
        {/* video */}
        <FillScrollLayout
          title={
            locale === "ru"
              ? "Вступительное видео Azpo"
              : "Azpo introduction video"
          }
          order="five"
          className="s1280:pt-20"
          classLabel="s1280:-mt-3 flex-cen"
        >
          <VideoComponent
            text={locale === "ru" ? "Как мы работаем!" : "how we work !"}
            src={
              locale === "ru"
                ? "https://azpo.com/api/files/property-videos/site_health.mp4"
                : "https://azpo.com/api/files/property-videos/site_health_en.mp4"
            }
            className="s1280:w-[959px] s1280:h-[506px] s1512:w-[1140px] s1512:h-[601px] rounded-[40px] overflow-hidden"
          />
        </FillScrollLayout>
        {/* health */}
        <FillScrollLayout
          title={locale === "ru" ? "Здоровье Azpo" : "Azpo Health"}
          order="six"
          className="s1280:pt-14 s1280:mt-16"
          classLabel="s1280:-mt-1 flex-cen"
        >
          <div className="flex items-center flex-col s1280:flex-row s1280:justify-between">
            <div className="order-2 s1280:order-1 -mt-[175px] s1280:-mt-0 rounded-[20px] s1280:rounded-none p-5 s1280:p-0 bg-white s1280:bg-inherit   s1280:pe-10 s1512:pe-0 s1280:w-[642px] s1512:w-[750px] s1728:w-[1035px] s1728:pe-10">
              <p className="font-medium text-[#727272] text-[12px] s1280:text-[16px] leading-[24px] s1280:leading-[30px]">
                {locale === "ru"
                  ? "Чтобы пациенты могли принимать обоснованные решения, Azpo Health предлагает всестороннюю языковую поддержку и персональное сопровождение на всех этапах.От оформления визы и организации проживания до профессиональных трансферов — каждая деталь тщательно продумана для обеспечения комфортного и беззаботного опыта"
                  : "To ensure patients make informed decisions, Azpo Health offers comprehensive translation support and personalized guidance throughout the entire process. From visa arrangements and accommodation to professional transfers, every detail is carefully managed for a seamless and stress-free experience."}
              </p>
            </div>
            <div className="order-1 s1280:order-2 w-[273px] h-[273px] s1280:w-[350px] s1280:h-[350px]">
              <ImgFetcher src={healthlogo} />
            </div>
          </div>
        </FillScrollLayout>
        {/* gallery */}
        <FillScrollLayout
          title={locale === "ru" ? "azpo Галерея" : "Azpo Gallery"}
          order="seven"
          classLabel="s1280:-mt-2 flex-cen"
          className="s1280:mt-7 s1280:pt-24"
        >
          <AboutGalleryCom />
        </FillScrollLayout>
      </div>
    </>
  );
};
export default AboutContent;
