import ImgFetcher from "@/components/imgFetcher";
import VideoPlayer from "@/features/services/videoPlayer/videoPlayer";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import videoIcon from "@/assets/images/icons/video.svg";
import Sidebar from "@/layoutes/sidebar/sidebar";
import ServiceCard from "@/features/services/serviceCard";
import Pagination from "@/components/pagination";
import ServiceSlider from "@/features/services/serviceSlider/serviceSlider";
import SubContent from "@/components/shortLongDesc";
import { medicalTourismContent } from "@/staticData/medicalTourismContent";
import handleServices from "@/staticData/services/handleServices";
const Treatments = async ({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}) => {
  const { locale } = await params;
  const services = handleServices(locale);
  return (
    <div className="viewport-p bg-[#FCFCFC]">
      {/* header */}
      <div className="grid grid-cols-12 gap-y-10 s1280:gap-y-0 mb-10 s1280:mb-20 mt-20">
        <div className="col-span-12 s1280:col-span-5 s1728:col-span-6">
          <div className="mb-3 s1280:mb-20 s1728:mb-10">
            <h1 className="text-[30px] s1280:text-[30px] s1512:text-[40px] s1920:text-[60px] font-black s1280:font-semibold text-[#00979A] mb-4 s1280:mb-10">
              {locale === "ru"
                ? "Медицинский туризм в Турции: Ваш путь к первоклассному здравоохранению"
                : "Medical Tourism in Turkey - Your Gateway to World-Class Healthcare"}
              Treatments
            </h1>
            {/* <p className="font-semibold flex-left gap-x-1 text-[14px] s1280:text-[24px] text-[#00979A] [text-shadow:0_2px_3px_#00000040] mb-4">
              <span>85</span>
              <span>Service</span>
            </p> */}
            <p className="font-medium s1280:text-[20px] s1512:text-[24px] s1728:text-[28px] s1920:text-[30px] leading-[22px] s1280:leading-[27px] s1512:leading-[32px] s1728:leading-[40px] s1280:pe-24 s1600:pe-40 s1728:pe-72 s1920:pe-80">
              {locale === "ru"
                ? "Ищете доступное и качественное медицинское обслуживание? Откройте для себя медицинский туризм в Турции! AZPO Health предлагает комплексные пакеты для различных медицинских нужд, от косметической хирургии до специализированных процедур. Совместите заботу о здоровье с уникальным культурным опытом."
                : "Seeking affordable, high-quality healthcare? Discover medical tourism in Turkey! AZPO Health offers comprehensive packages for various medical needs, from cosmetic surgery to specialized treatments. Combine your health journey with a unique cultural experience."}
            </p>
          </div>
          <div className="flex items-center justify-start s1280:justify-between gap-x-4 s1280:gap-x-0 s1280:pe-20 s1600:pe-40 s1728:pe-72 s1920:pe-80">
            <div>
              <Link
                className="flex-cen rounded-[40px] w-[157px] h-[41px] s1280:w-[197px] s1280:h-[52px] text-center bg-[#0CA5A5] text-white font-bold s1280:text-[18px] border border-[#0CA5A5] hover:bg-white hover:text-[#0CA5A5] anm"
                href={`/${locale}`}
              >
                Back To Home
              </Link>
            </div>
            <div>
              <a
                href="#video-service"
                className="flex-cen gap-x-2 text-[#00979A] s1280:text-[20px] font-semibold"
              >
                <span className="bg-[#DAEDE6] rounded-full p-1 s1280:p-2 flex-cen w-[37px] h-[37px] s1280:w-[62px] s1280:h-[62px]">
                  <span className=" bg-[#25A6A9] hover:bg-[#0c797b] anm w-full h-full rounded-full flex-cen text-white">
                    <FaPlay className="size-3 s1280:size-5 ms-1" />
                  </span>
                </span>
                <span>Play video</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-12 s1280:col-span-7 s1728:col-span-6">
          <ServiceSlider />
        </div>
      </div>
      {/* azpo service video */}
      <div className="mb-14 s1280:mb-28">
        <div className="flex-bet mb-2 s1280:mb-10">
          <hr className="border-[1px] border-[#333333] border-dashed w-[10%] s1280:w-[34%]" />
          <h2 className="flex-cen font-semibold text-[20px] s1280:text-[30px]">
            <span className="w-[55px] h-[40px]  s1280:w-[70px] s1280:h-[53px]">
              <ImgFetcher src={videoIcon} />
            </span>
            <span>Azpo Service video</span>{" "}
          </h2>
          <hr className="border-[1px] border-[#333333] border-dashed w-[10%] s1280:w-[34%]" />
        </div>
        <div className="flex-cen">
          <VideoPlayer
            toolsbarStyle="h-[38px] s1280:h-[60px]"
            src={
              locale === "ru"
                ? "https://azpo.com/api/files/property-videos/site_health.mp4"
                : "https://azpo.com/api/files/property-videos/site_health_en.mp4"
            }
            className="s1280:w-[916px] h-[200px] s1280:h-[501px]"
          />
        </div>
      </div>
      {/* all treatments */}
      <div>
        <div className="mb-10 flex flex-col justify-start gap-y-2 s1280:gap-y-0 s1280:flex-row items-start s1280:justify-start s1280:mb-20">
          <div className="w-full s1280:w-fit">
            <h2 className="[text-shadow:0px_1px_2px_#00000040] font-bold text-[20px] s1280:text-[40px] s1600:text-[48px] text-[#00979A]">
              All Treatments
            </h2>
          </div>
          {/* <div className="w-full s1280:w-fit">
            <SearchBox />
          </div> */}
        </div>
        <div className="flex flex-col items-center justify-start s1280:flex-row s1280:items-start s1280:justify-between gap-y-10 s1280:gap-y-0 s1280:gap-x-5">
          <div className="flex items-center flex-col justify-start s1280:flex-row s1280:justify-start flex-wrap w-full gap-y-10 s1280:flex-grow s1280:gap-x-5">
            {services.map(({ countService, img, label, path }, index) => (
              <ServiceCard
                key={index}
                imgStyle="p-4 w-[190px] h-[190px] s1280:h-[160px] s1280:w-[160px] s1512:h-[207px] s1512:w-[207px] s1728:w-[238px] s1728:h-[238px] s1920:w-[250px] s1920:h-[250px]"
                titleStyle="text-[20px] s1280:text-[16px] s1512:text-[20px]"
                linkStyle="w-full text-[18px] s1280:text-[16px] s1512:text-[18px]"
                className="treatments__card-container w-[210px] s1280:w-[185px] s1512:w-[238px] s1600:w-[245px] s1728:w-[270px] s1920:w-[282px]"
                countService={countService}
                img={img}
                linkService={path}
                title={label}
              />
            ))}
            <div className="w-full">
              <Pagination totalPages={80} />
            </div>
            <div className="w-full">
              <SubContent
                desc={medicalTourismContent(locale, "desc")}
                header={medicalTourismContent(locale, "title")}
              />
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};
export default Treatments;
