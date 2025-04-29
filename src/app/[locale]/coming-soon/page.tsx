import Link from "next/link";
import soonbanner from "@/assets/images/soontreatment.png";
import ImgFetcher from "@/components/imgFetcher";
import SoonForm from "@/components/soonPage/soonForm";
import CircleAnimate from "@/components/circleAnimate";
const Page = async ({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}) => {
  const { locale } = await params;
  const circleList: {
    position: "left" | "right";
    xValue: number;
    topValue: number;
  }[] = [
    {
      position: "left",
      xValue: 80,
      topValue: 200,
    },
    {
      position: "right",
      xValue: 900,
      topValue: 200,
    },
  ];
  return (
    <>
      <section className="viewport-p mt-16 s1280:mt-16 s1512:mt-20 relative z-[2]">
        <div className="text-[#25A6A9] flex flex-col items-center justify-center mb-3">
          <h1 className="font-extrabold text-[24px] s1280:text-[32px] s1512:text-[36px] s1728:text-[40px] s1920:text-[48px] text-center mb-3">
            {locale === "ru" ? "Скоро будет..." : "Coming Soon..."}
          </h1>
          <p className="font-medium s1512:text-[18px] s1728:text-[20px] s1920:text-[24px] text-center">
            {locale === "ru"
              ? "Нужно поговорить со специалистом о вашем лечении? Просто свяжитесь с нами — AzpoHealth начнёт вашу оценку немедленно!"
              : "Need to speak with a specialist about your treatment? Just contact us — AzpoHealth will start your evaluation immediatly!"}
          </p>
        </div>
        <div className="flex-cen">
          <Link
            href={`/${locale}`}
            className="font-bold text-[#25A6A9] s1512:text-[18px] s1728:text-[20px] s1920:text-[24px] border-b border-[#25A6A9]"
          >
            {locale === "ru" ? "Перейти на главную страницу" : "Go to home page"}
          </Link>
        </div>
      </section>
      <section className="viewport-p grid grid-cols-12 s1280:gap-x-8 s1512:gap-x-12 s1728:gap-x-20 -mt-14">
        {circleList.map((circle, index) => (
          <CircleAnimate key={index} {...circle} />
        ))}
        <div className="order-2 s1280:order-1 col-span-12 s1280:col-span-6 flex-cen relative z-[2]">
          <SoonForm />
        </div>
        <div className="order-1 s1280:order-2 col-span-12 s1280:col-span-6 flex-cen relative z-[2]">
          <div className="w-full h-[334px] sm:w-[390px] s1280:w-[487px] s1280:h-[402px] s1512:w-[570px] s1512:h-[470px] s1728:w-[679px] s1728:h-[562px]">
            <ImgFetcher unoptimized src={soonbanner} />
          </div>
        </div>
      </section>
    </>
  );
};
export default Page;
