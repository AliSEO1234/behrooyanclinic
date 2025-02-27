import ImgFetcher from "../imgFetcher";
import VideoComponent from "./videoComponent";
import healthlogo from "@/assets/images/about/healthabout.svg";
import ph1 from "@/assets/images/about/about/p1.jpeg";
import ph2 from "@/assets/images/about/about/p2.jpg";
import ph3 from "@/assets/images/about/about/p3.jpg";
import ph4 from "@/assets/images/about/about/p4.jpeg";
import ph5 from "@/assets/images/about/about/p5.jpeg";
import ph6 from "@/assets/images/about/about/p6.jpeg";
import { AboutComType } from "@/types/about/aboutPageType";
const AboutContent = ({ locale }: AboutComType) => {
  return (
    <>
      <div className="s1280:mb-20 mb-10">
        <p className="font-medium text-[14px] leading-[25px] s1280:text-[20px] text-[#474744] text-center s1280:px-20 s1280:leading-[36px]">
          {locale === "ru"
            ? "Вот уже 20 лет Azpo Group является надёжным проводником для наших клиентов и партнёров в Турции, помогая находить оптимальные решения и подтверждая свою репутацию востребованного бренда, которому доверяют и который рекомендуют.Мы делаем всё возможное, чтобы ваше лечение в Турции было комфортным и безопасным, взяв на себя все организационные вопросы. Индивидуальный подход к каждому пациенту и тщательная проработка всех деталей — основа нашей работы, обеспечивающая вам уверенность в каждом шаге на пути к здоровью."
            : "Azpo Group has been a trusted name in the industry for over 20 years, establishing itself as a well-known and preferred brand. As a newly established division of Azpo Group, Azpo Health operates with official recognition from the Turkish Ministry of Health under the Health Tourism License, providing expert advisory services to international patients seeking medical treatment in Turkey."}
        </p>
      </div>
      <div className="s1280:px-[89.5px] s1512:px-[108px]">
        <div className="s1280:mb-20 mb-10">
          <div className="mb-5">
            <h2 className="text-center font-semibold text-[18px] s1280:text-[36px]">
              {
                locale === "ru" ? "Введение в Azpo (видео)" : "Azpo introduction video"
              }
            </h2>
          </div>
          <div className="flex-cen">
            <VideoComponent
              text="the steps to buy this property"
              src="https://azpo.com/api/files/property-videos/azpo_main.mp4"
              className="s1280:w-[959px] s1280:h-[506px] s1512:w-[1140px] s1512:h-[601px] rounded-[40px] overflow-hidden"
            />
          </div>
        </div>
        <div className="mb-10 s1280:mb-20">
          <div className="mb-5">
            <h2 className="text-center font-medium text-[18px] s1280:text-[30px] s1512:text-[36px]">
              {
                locale === "ru" ? "Здоровье Azpo" : "Azpo Health"
              }
            </h2>
          </div>
          <div className="flex items-center flex-col s1280:flex-row s1280:justify-between">
            <div className="order-2 s1280:order-1 -mt-[175px] s1280:-mt-0 rounded-[20px] s1280:rounded-none p-5 s1280:p-0 bg-white s1280:bg-inherit   s1280:pe-10 s1512:pe-0 s1280:w-[642px] s1512:w-[750px] s1728:w-[1035px] s1728:pe-10">
              <p className="font-medium text-[#727272] text-[12px] s1280:text-[16px] leading-[24px] s1280:leading-[30px]">
                {
                  locale === "ru" ? "Наш опыт в построении партнёрских отношений и внимательность к деталям помогают решать сложные задачи и достигать реальных результатов. Именно поэтому Azpo Group занимает лидирующие позиции на рынке, предлагая качественные услуги. Наша команда экспертов поддержит вас на каждом этапе: от оформления визы до выбора клиники и врача, организации проживания и трансфера." : "To ensure patients make informed decisions, Azpo Health offers comprehensive translation support and personalized guidance throughout the entire process. From visa arrangements and accommodation to professional transfers, every detail is carefully managed for a seamless and stress-free experience."
                }
              </p>
            </div>
            <div className="order-1 s1280:order-2 w-[273px] h-[273px] s1280:w-[350px] s1280:h-[350px]">
              <ImgFetcher src={healthlogo} />
            </div>
          </div>
        </div>
        <div>
          <div className="s1280:mb-20 hidden s1280:block">
            <h2 className="font-semibold s1280:text-[30px] s1512:text-[36px] text-center">
              {
                locale === "ru" ? "Галерея Azpo" : "Azpo Gallery"
              }
            </h2>
          </div>
          <div className="grid grid-cols-12 s1280:gap-x-4">
            <div className="col-span-12 s1280:col-span-6 grid grid-cols-4 grid-rows-3 gap-4">
              <div className="col-span-2 row-span-2 rounded-[20px] overflow-hidden">
                {/* <div className="absolute top-0 left-0 w-full h-full flex bg-gradient-to-t from-[#208385] to-[#00000000]">
                  <p className="font-medium text-white line-clamp-3 mt-auto px-2 mb-2 s1280:px-4 s1280:mb-4 text-[12px] s1280:text-[16px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias odio quae, animi consectetur corrupti est harum? Iure
                    dolorem ipsam expedita nobis, odio quisquam eveniet rerum,
                    aliquam, laudantium officia tenetur odit.
                  </p>
                </div> */}
                <ImgFetcher
                  width={2000}
                  height={2000}
                  src={ph4}
                  className="object-cover"
                />
              </div>
              <div className="col-span-2 row-span-1 rounded-[20px] overflow-hidden">
                {/* <div className="absolute top-0 left-0 w-full h-full flex bg-gradient-to-t from-[#208385] to-[#00000000]">
                  <p className="font-medium text-white line-clamp-3 mt-auto px-2 mb-2 s1280:px-4 s1280:mb-4 text-[12px] s1280:text-[16px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias odio quae, animi consectetur corrupti est harum? Iure
                    dolorem ipsam expedita nobis, odio quisquam eveniet rerum,
                    aliquam, laudantium officia tenetur odit.
                  </p>
                </div> */}
                <ImgFetcher
                  width={2000}
                  height={2000}
                  src={ph5}
                  className="object-cover"
                />
              </div>
              <div className="col-span-2 row-span-1 rounded-[20px] overflow-hidden">
                {/* <div className="absolute top-0 left-0 w-full h-full flex bg-gradient-to-t from-[#208385] to-[#00000000]">
                  <p className="font-medium text-white line-clamp-3 mt-auto px-2 mb-2 s1280:px-4 s1280:mb-4 text-[12px] s1280:text-[16px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias odio quae, animi consectetur corrupti est harum? Iure
                    dolorem ipsam expedita nobis, odio quisquam eveniet rerum,
                    aliquam, laudantium officia tenetur odit.
                  </p>
                </div> */}
                <ImgFetcher
                  width={2000}
                  height={2000}
                  src={ph6}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="col-span-12 s1280:col-span-6 grid grid-cols-4 grid-rows-3 gap-4 -mt-32 s1280:mt-0">
              <div className="col-span-2 row-span-2 rounded-[20px] overflow-hidden">
                {/* <div className="absolute top-0 left-0 w-full h-full flex bg-gradient-to-t from-[#208385] to-[#00000000]">
                  <p className="font-medium text-white line-clamp-3 mt-auto px-2 mb-2 s1280:px-4 s1280:mb-4 text-[12px] s1280:text-[16px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias odio quae, animi consectetur corrupti est harum? Iure
                    dolorem ipsam expedita nobis, odio quisquam eveniet rerum,
                    aliquam, laudantium officia tenetur odit.
                  </p>
                </div> */}
                <ImgFetcher
                  width={2000}
                  height={2000}
                  src={ph3}
                  className="object-cover"
                />
              </div>
              <div className="col-span-2 row-span-1 rounded-[20px] overflow-hidden">
                {/* <div className="absolute top-0 left-0 w-full h-full flex bg-gradient-to-t from-[#208385] to-[#00000000]">
                  <p className="font-medium text-white line-clamp-3 mt-auto px-2 mb-2 s1280:px-4 s1280:mb-4 text-[12px] s1280:text-[16px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias odio quae, animi consectetur corrupti est harum? Iure
                    dolorem ipsam expedita nobis, odio quisquam eveniet rerum,
                    aliquam, laudantium officia tenetur odit.
                  </p>
                </div> */}
                <ImgFetcher
                  width={2000}
                  height={2000}
                  src={ph1}
                  className="object-cover"
                />
              </div>
              <div className="col-span-2 row-span-1 rounded-[20px] overflow-hidden">
                {/* <div className="absolute top-0 left-0 w-full h-full flex bg-gradient-to-t from-[#208385] to-[#00000000]">
                  <p className="font-medium text-white line-clamp-3 mt-auto px-2 mb-2 s1280:px-4 s1280:mb-4 text-[12px] s1280:text-[16px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias odio quae, animi consectetur corrupti est harum? Iure
                    dolorem ipsam expedita nobis, odio quisquam eveniet rerum,
                    aliquam, laudantium officia tenetur odit.
                  </p>
                </div> */}
                <ImgFetcher
                  width={2000}
                  height={2000}
                  src={ph2}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutContent;
