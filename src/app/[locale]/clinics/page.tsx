import girlChar from "@/assets/images/clinics/girlChar.png";
import desk from "@/assets/images/clinics/desk.png";
import pres from "@/assets/images/clinics/pres.png";
import ImgFetcher from "@/components/imgFetcher";
import { clinicsData } from "@/staticData/clinics/clinicsData";
import ClinicCard from "@/components/clinics/clinicCard";
import { Metadata } from "next";
import { headers } from "next/headers";
type Props = {
  params: Promise<{ locale: string }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const headerRequest = await headers();
  const host = headerRequest.get("host");
  return {
    alternates: {
      canonical: `https://${host}/${locale}/clinics`,
    },
    robots: {
      index: locale === "en" ? true : false,
      follow: locale === "en" ? true : false,
    },
  };
}
const Clinics = async ({ params }: Props) => {
  const { locale } = await params;
  const isRu = locale === "ru";
  const description = isRu
    ? `
                    Турция — это страна, где расположено множество международных аккредитованных больниц, включая
                    <strong>
                      учреждения с сертификатом JCI. В Azpo Health мы стремимся соединить вас с лучшими медицинскими услугами
                    </strong>
                    путём сотрудничества с
                    <strong>ведущими больницами и опытными врачами</strong> по всей Турции.
                    Мы сотрудничаем с одними из самых надёжных медицинских центров в
                    <strong>
                      Стамбуле, Анталье, Измире, Каппадокии, Самсуне и Анкаре
                    </strong>
                    — все они являются ведущими направлениями для медицинского туризма. Наша цель? Обеспечить вам лечение мирового уровня с самым высоким уровнем заботы и комфорта.

                  `
    : `
                    Turkey is home to many internationally accredited hospitals,
                    including
                    <strong>
                      JCI-certified institutions. At Azpo Health, we’re all about
                      connecting you with the best healthcare services
                    </strong>
                    by working with
                    <strong>top hospitals and expert doctors</strong> across Turkey.
                    We’ve partnered with some of the most trusted medical centers in
                    <strong>
                      Istanbul, Antalya, Izmir, Cappadocia, Samsun, and Ankara
                    </strong>
                    —all top destinations for health tourism. Our goal? To make sure
                    you get world-class treatment with the highest standards of care
                    and comfort
                  `;
  return (
    <>
      <div className="pt-28 s1280:pt-40 s1280:pb-20 viewport-size">
        {/* headers */}
        <div className="flex flex-col items-center justify-start gap-y-10 s1280:gap-y-0 s1280:flex-row s1280:items-center s1280:justify-around mb-14 s1280:mb-40">
          <div className="s1280:w-[437px] s1920:w-fit flex flex-col items-center justify-center s1280:flex-row">
            <div className="s1280:hidden mb-8">
              <span className="font-semibold text-[#25A6A9] text-center text-[24px]">
                {isRu ? "Больницы и клиники" : "Hospital & Clinics"}
              </span>
            </div>
            <div className="flex-cen relative">
              <div className="w-[176px] h-[176px] s1280:w-[348px] s1280:h-[348px] s1728:w-[424px] s1728:h-[424px] s1920:w-[516px] s1920:h-[516px] bg-gradient-to-b from-[#25A6A9] to-[#0F4243] rounded-full backdrop-blur-[20px] opacity-60"></div>
              <div className="w-[242px] s390:w-[248px] s1280:w-[486px] s1728:w-[586px] s1920:w-[721px] absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]">
                <ImgFetcher width={2000} height={2000} src={girlChar} />
              </div>
              {/* circle */}
              <div className="w-[53px] h-[53px] s1280:w-[104px] s1280:h-[104px] s1728:w-[128px] s1728:h-[128px] s1920:w-[155px] s1920:h-[155px] rounded-full bg-gradient-to-b from-[#0f424357] to-[#25a7a950] absolute -right-5 top-5 s1280:top-10 s1280:-right-5 s1728:-right-5 s1920:-right-14 backdrop-blur-[20px] z-[1] flex-cen p-3 s1280:p-5 s1920:p-7">
                <ImgFetcher src={pres} width={6000} height={6000} />
              </div>
              <div className="w-[82px] h-[82px] s1280:w-[160px] s1280:h-[160px] s1728:w-[196px] s1728:h-[196px] s1920:w-[238px] s1920:h-[238px] rounded-full bg-gradient-to-b from-[#0f424357] to-[#25a7a950] absolute -bottom-5 -left-5 s1280:-bottom-14 s1280:-left-10 s1728:-left-5 s1920:-left-20 backdrop-blur-[20px] z-[1] p-3 s1280:p-5 s1728:p-7 s1920:p-9">
                <ImgFetcher src={desk} width={6000} height={6000} />
              </div>
            </div>
          </div>
          <div className="s1280:w-[571px]">
            <div className="mb-6 s1280:mb-14">
              <h1 className="text-[#25A6A9] font-semibold s1280:text-[30px] s1728:text-[48px] s1280:mb-4 s1512:mb-6 s1728:mb-8 s1920:mb-10 hidden s1280:block">
                {isRu ? "Больницы и клиники" : "Hospital & Clinics"}
              </h1>
              <p
                dangerouslySetInnerHTML={{ __html: description }}
                className="text-[#474744] px-5 s1280:px-0 font-medium s1280:text-[18px] s1728:text-[20px] s1280:leading-[33px]"
              ></p>
            </div>
            {/* <SearchClinic /> */}
          </div>
        </div>
        {/* content */}
        <div>
          {/* bg */}
          <div className="w-full h-[54px] s1280:h-[138px] bg-gradient-to-b from-[#25A6A9] to-[#0F4243] backdrop-blur-[20px] rounded-[20px] z-[1] opacity-60"></div>
          {/* clinics */}
          <div className="flex items-center justify-center flex-wrap gap-y-10 s1512:gap-y-12 s1280:gap-x-2 s1512:gap-x-5 s1920:gap-x-10 -mt-5 s1280:-mt-20 px-2 s1280:px-0">
            {clinicsData.map((clinic, index) => {
              return <ClinicCard key={index} {...clinic} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Clinics;
