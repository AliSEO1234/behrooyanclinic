import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FaPlay } from "react-icons/fa";
import ServiceCard from "@/features/services/serviceCard";
import { medicalTourismContent } from "@/staticData/medicalTourismContent";
import handleServices from "@/staticData/services/handleServices";
import { Metadata } from "next";
import { headers } from "next/headers";
import doctor from "@/assets/images/our1.png";

const Sidebar = dynamic(() => import("@/layoutes/sidebar/sidebar"), {
  loading: () => <div className="hidden s1280:block s1280:w-[250px] s1512:w-[270px]" />,
});
const SubContent = dynamic(() => import("@/components/shortLongDesc"));

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
      index: locale === "en",
      follow: locale === "en",
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
] as const;

const Treatments = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const services = handleServices(locale);

  return (
    <div className="viewport-size bg-[#FCFCFC] font-yekan-bakh" dir="rtl" lang="fa">

      {/* Hero section */}
      <div className="grid grid-cols-12 gap-y-8 s1280:gap-y-0 s1280:gap-x-6 s1512:gap-x-8 mb-8 s1280:mb-14 s1512:mb-16 s1920:mb-20 mt-14 s1280:mt-16 s1920:mt-20">

        <div className="col-span-12 s1280:col-span-5 order-2">
          <div className="relative w-full h-[280px] s430:h-[320px] s1280:h-[380px] s1512:h-[420px] s1600:h-[450px] s1920:h-[500px] rounded-[20px] s1280:rounded-[30px] overflow-hidden">
            <Image
              src={doctor}
              alt="کلینیک بهرویان"
              width={800}
              height={600}
              className="w-full h-full object-cover object-top"
              priority
              sizes="(max-width: 1280px) 100vw, 42vw"
            />
            <a href="#video-service" className="absolute inset-0 flex items-center justify-center">
              <span className="w-[50px] h-[50px] s1280:w-[55px] s1280:h-[55px] s1920:w-[60px] s1920:h-[60px] rounded-full bg-white/80 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <FaPlay className="text-[#A855F7] ms-1 size-4 s1280:size-5" />
              </span>
            </a>
          </div>
        </div>

        <div className="col-span-12 s1280:col-span-7 order-1 flex flex-col justify-center s1280:pe-4 s1512:pe-8 s1920:pe-10">
          <h1 className="text-[26px] s430:text-[28px] s1280:text-[32px] s1512:text-[36px] s1600:text-[40px] s1920:text-[48px] font-black text-right mb-3 s1280:mb-4">
            <span className="text-[#A855F7]">خدمات</span>{" "}
            <span className="text-[#1a1a1a]">کلینیک بهرویان</span>
          </h1>
          <p className="text-right text-[13px] s430:text-[14px] s1280:text-[14px] s1512:text-[15px] s1920:text-[16px] text-[#555] leading-7 mb-2">
            جایی که علم پزشکی، زیبایی را بازتعریف می‌کند.
          </p>
          <p className="text-right text-[13px] s430:text-[14px] s1280:text-[14px] s1512:text-[15px] s1920:text-[16px] font-bold text-[#333] leading-7 mb-1">
            در کلینیک بهرویان، ما به «تغییر زودگذر» اعتقاد نداریم؛
          </p>
          <p className="text-right text-[13px] s430:text-[14px] s1280:text-[14px] s1512:text-[15px] s1920:text-[16px] text-[#555] leading-7 mb-4 s1280:mb-5 s1920:mb-6">
            هدف ما زیبایی ماندگار، طبیعی و ایمن بر پایه جدیدترین تکنولوژی‌های روز دنیاست.
          </p>

          <div className="grid grid-cols-2 s1280:grid-cols-4 gap-x-4 s430:gap-x-6 s1280:gap-x-7 s1512:gap-x-8 s1920:gap-x-10 gap-y-2 s1280:gap-y-2.5 mb-5 s1280:mb-6 s1920:mb-8">
            {serviceTags.map((tag) => (
              <span key={tag} className="flex flex-row-reverse items-center justify-end gap-x-1.5 s1280:gap-x-2 text-[13px] s430:text-[14px] s1280:text-[13px] s1512:text-[14px] s1920:text-[16px] text-[#555]">
                {tag}
                <Image src="/images/icon-tick.svg" alt="" width={20} height={20} className="flex-shrink-0 w-4 h-4 s1280:w-[18px] s1280:h-[18px] s1920:w-5 s1920:h-5" />
              </span>
            ))}
          </div>

          <div className="flex items-center justify-start gap-x-3 s1280:gap-x-4">
            <Link href={`/${locale}`} className="flex-cen w-full s430:w-[180px] s1280:w-[190px] s1512:w-[210px] s1920:w-[239px] h-[50px] s1280:h-[52px] s1512:h-[56px] s1920:h-[61px] rounded-[15px] bg-[#F4EDF2] text-[#9A62F7] font-bold text-[13px] s1280:text-[14px] s1512:text-[15px] s1920:text-[16px] hover:opacity-80 transition-opacity">
              دریافت مشاوره
            </Link>
            <Link href={`/${locale}/contact-us`} className="flex-cen w-full s430:w-[180px] s1280:w-[190px] s1512:w-[210px] s1920:w-[239px] h-[50px] s1280:h-[52px] s1512:h-[56px] s1920:h-[61px] rounded-[15px] bg-[#9A62F7] text-white font-bold text-[13px] s1280:text-[14px] s1512:text-[15px] s1920:text-[16px] hover:opacity-90 transition-opacity">
              تماس با بهرویان
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center mb-8 s1280:mb-10">
        <a href="#services-section" className="cursor-pointer">
          <Image src="/images/b2b-scroll.svg" alt="scroll" width={32} height={63} priority className="animate-bounce w-6 s1280:w-7 s1920:w-8 h-auto" />
        </a>
      </div>

      {/* Services section */}
      <div id="services-section" className="scroll-mt-24">
        <div className="mb-8 s1280:mb-12 s1920:mb-16 flex items-center justify-end gap-x-3">
          <h2 className="text-[18px] s430:text-[20px] s1280:text-[28px] s1512:text-[32px] s1920:text-[36px] font-bold text-[#1a1a1a] text-right whitespace-nowrap">
            خدمات تخصصی زیبایی و جوانسازی
          </h2>
          <div className="flex-1 h-0.5 bg-gradient-to-l from-[#A855F7] to-transparent" />
        </div>

        <div className="flex flex-col s1280:flex-row s1280:items-start s1280:justify-between gap-y-8 s1280:gap-y-0 s1280:gap-x-5">
          <div className="grid grid-cols-1 s430:grid-cols-2 s1280:grid-cols-3 gap-4 s1280:gap-5 s1512:gap-6 w-full s1280:flex-grow">
            {services.map(({ countService, img, label, path, description }, index: number) => (
              <ServiceCard
                key={path}
                countService={countService}
                img={img}
                linkService={path}
                title={label}
                description={description}
              />
            ))}
          </div>
          <Sidebar />
        </div>

        <div className="mt-8 s1280:mt-12">
          <SubContent
            desc={medicalTourismContent(locale, "desc")}
            header={medicalTourismContent(locale, "title")}
          />
        </div>
      </div>

    </div>
  );
};

export default Treatments;
