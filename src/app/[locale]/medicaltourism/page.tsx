import ImgFetcher from "@/components/imgFetcher";
import Link from "next/link";
import { FaPlay, FaCheck } from "react-icons/fa";
import Sidebar from "@/layoutes/sidebar/sidebar";
import ServiceCard from "@/features/services/serviceCard";
import SubContent from "@/components/shortLongDesc";
import { medicalTourismContent } from "@/staticData/medicalTourismContent";
import handleServices from "@/staticData/services/handleServices";
import { Metadata } from "next";
import { headers } from "next/headers";
import doctor from "@/assets/images/our1.png";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const headerRequest = await headers();
  const host = headerRequest.get("host");
  return {
    alternates: {
      canonical: `https://${host}/${locale}/medicaltourism`,
    },
    robots: {
      index: locale === "en" ? true : false,
      follow: locale === "en" ? true : false,
    },
  };
}

const serviceTags = [
  "رنوویِن",
  "بلفاروپلاستی",
  "بوتاکس لیفت",
  "کاشت مو",
  "هایفو",
  "مزوتراپی",
  "لاغری نوین",
  "پی آر پی",
];

const Treatments = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const services = handleServices(locale);

  return (
    <div className="viewport-size bg-[#FCFCFC]" dir="rtl" lang="fa">

      {/* header section */}
      <div className="grid grid-cols-12 gap-y-10 s1280:gap-y-0 mb-10 s1280:mb-20 mt-20">

        {/* doctor image */}
        <div className="col-span-12 s1280:col-span-5 order-2 s1280:order-2">
          <div className="relative w-full h-[350px] s1280:h-[500px] rounded-[30px] overflow-hidden">
            <ImgFetcher className="object-cover object-top" width={1500} height={1500} src={doctor} />
            <div className="absolute inset-0 flex items-center justify-center">
              <a href="#video-service" className="w-[60px] h-[60px] rounded-full bg-white/80 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <FaPlay className="text-[#A855F7] ms-1 size-5" />
              </a>
            </div>
          </div>
        </div>

        {/* clinic info */}
        <div className="col-span-12 s1280:col-span-7 order-1 s1280:order-1 flex flex-col justify-center s1280:pe-10 s1280:ps-20">
          <h1 className="text-[28px] s1280:text-[40px] s1920:text-[48px] font-black text-right mb-4">
            <span className="text-[#A855F7]">خدمات</span>{" "}
            <span className="text-[#1a1a1a]">کلینیک بهرویان</span>
          </h1>
          <p className="text-right text-[14px] s1280:text-[16px] text-[#555] leading-7 mb-2">
            جایی که علم پزشکی، زیبایی را بازتعریف می‌کند.
          </p>
          <p className="text-right text-[14px] s1280:text-[16px] font-bold text-[#333] leading-7 mb-1">
            در کلینیک بهرویان، ما به «تغییر زودگذر» اعتقاد نداریم؛
          </p>
          <p className="text-right text-[14px] s1280:text-[16px] text-[#555] leading-7 mb-6">
            هدف ما زیبایی ماندگار، طبیعی و ایمن بر پایه حدیدترین تکنولوژی‌های روز دنیاست.
          </p>

          {/* service tags */}
          <div className="grid grid-cols-2 s1280:grid-cols-4 gap-x-6 gap-y-3 mb-8">
            {serviceTags.map((tag, index) => (
              <span key={index} className="flex items-center justify-end gap-x-2 text-[14px] s1280:text-[15px] text-[#555]">
                {tag}
                <span className="w-5 h-5 rounded-full bg-[#e0e0e0] flex items-center justify-center flex-shrink-0">
                  <FaCheck className="text-white text-[10px]" />
                </span>
              </span>
            ))}
          </div>

          {/* buttons */}
          <div className="flex items-center justify-end gap-x-4">
            <Link href={`/${locale}`} className="flex-cen rounded-[40px] px-8 h-[44px] s1280:h-[52px] bg-white text-[#555] font-medium text-[14px] s1280:text-[16px] border border-[#d1d5db] hover:border-[#A855F7] hover:text-[#A855F7] transition-colors">
              دریافت مشاوره
            </Link>
            <Link href={`/${locale}/contact-us`} className="flex-cen rounded-[40px] px-8 h-[44px] s1280:h-[52px] bg-[#A855F7] text-white font-bold text-[14px] s1280:text-[16px] hover:bg-[#9333ea] transition-colors">
              تماس با بهرویان
            </Link>
          </div>
        </div>
      </div>

      {/* scroll indicator - mouse icon */}
      <div className="flex justify-center mb-10">
        <div className="w-7 h-11 border-2 border-[#ccc] rounded-full flex flex-col items-center pt-2">
          <div className="w-[3px] h-3 bg-[#ccc] rounded-full animate-bounce"></div>
        </div>
      </div>

      {/* all services */}
      <div>
        <div className="mb-10 flex items-center justify-end gap-x-3 s1280:mb-16">
          <h2 className="text-[20px] s1280:text-[36px] font-bold text-[#1a1a1a] text-right">
            خدمات تخصصی زیبایی و جوانسازی
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-l from-[#A855F7] to-transparent"></div>
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
