import PrevNextBtn from "@/features/treatment/prevNextTreat/prevNextBtn";
import { BsMouse } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import borderTreat from "@/assets/images/treatment/bordertreat.png";
// import aesthetics from "@/assets/images/treatment/aesthetics.png";
// import cells from "@/assets/images/treatment/cells.png";
// import dent from "@/assets/images/treatment/dent.png";
// import fertility from "@/assets/images/treatment/fertility.png";
import bgCover from "@/assets/images/treatment/bg-category.svg";
import ImgFetcher from "@/components/imgFetcher";
import VideoPlayer from "@/features/services/videoPlayer/videoPlayer";
import borderPhone from "@/assets/images/treatment/borderTreatPhone.png";
import safe from "@/assets/images/treatment/safe.svg";
import SearchBox from "@/components/searchBox";
import Pagination from "@/components/pagination";
import Sidebar from "@/layoutes/sidebar/sidebar";
import TreatCard from "@/features/treatment/treatCard";
import eye1 from "@/assets/images/treatment/eye1.jpg";
// import eye2 from "@/assets/images/treatment/eye2.jpg";
// import aes1 from "@/assets/images/treatment/aes1.jpg";
import SubContent from "@/components/shortLongDesc";
import { subCategoryHandler } from "@/staticData/subCategoryList";
// import Ball from "@/components/ballAnimate";
type PropsPageType = {
  params: Promise<{ category: string; treat: string; locale: string }>;
};
const Page = async ({ params }: PropsPageType) => {
  const { treat, locale, category } = await params;
  const fetchData = subCategoryHandler(category, treat, locale);

  return (
    <div className="bg-[#FCFCFC]">
      <div className="grid grid-cols-12 gap-y-5 s1280:gap-y-0 mt-16 s1512:mt-20 ps-[10px] s430:ps-5 pt-10 s1280:ps-[71px] s1512:ps-[79px] s1600:ps-[85px] s1728:ps-[100px] s1920:ps-[131px] rounded-b-[40px] shadow-[0px_19px_30px_-25px_#0000001C] overflow-hidden mb-10 s1280:mb-20 pb-5 s1280:pb-0">
        <div className="order-2 s1280:order-1 col-span-12 s1280:col-span-6 s1600:col-span-5 s1920:col-span-6 pe-[10px] s430:pe-5 z-[2] s1512:mt-10 s1600:mt-0">
          <div className="mb-5">
            <h1 className="hidden s1280:block mb-4 s1512:mb-6 font-black s1280:text-[36px] s1512:text-[40px] s1728:text-[60px] text-[#00979A]">
              {fetchData?.title}
              {/* Eye Surgeries */}
            </h1>
            <p className="text-[#00979A] font-semibold text-[14px] flex-left gap-x-2 mb-2 s1280:hidden">
              <span>54</span>
              <span>Service</span>
            </p>
            <p className="text-[#333333] font-medium s1280:text-[20px] s1512:text-[24px] s1728:text-[30px] text-justify s1280:text-start leading-[25px] s1280:leading-[30px] s1600:leading-[45px] s1280:line-clamp-[8]">
              {fetchData?.descriptionTop}
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "} */}
            </p>
          </div>
          <PrevNextBtn />
          <div className="hidden s1280:flex-left gap-x-4 mt-6 s1512:mt-10 s1600:mt-16  text-[#00979A]">
            <div className="flex flex-col items-center justify-center">
              <span>
                <BsMouse className="size-10 s1512:size-12" />
              </span>
              <span>
                <IoIosArrowDown className="size-5" />
              </span>
            </div>
            {/* <div>
              <p className="font-semibold s1280:text-[24px]">
                view <span>69</span> Service
              </p>
            </div> */}
          </div>
        </div>
        <div className="order-1 s1280:order-2 col-span-12 s1280:col-span-6 s1600:col-span-7 s1920:col-span-6 relative flex-right z-[2]">
          {/* text */}
          <h1 className="s1280:hidden absolute top-0 left-0 font-bold text-[30px] text-[#00979A] w-1/2">
            Eye Surgeries
          </h1>
          {/* phone */}
          <div className="s1280:hidden w-[200px] h-[500px]">
            <ImgFetcher width={2000} height={2000} src={borderPhone} />
          </div>
          {/* desktop */}
          <div className="hidden s1280:block absolute bottom-0 right-0 s1280:w-[40%] s1280:h-[450px] s1512:h-[550px] s1512:w-[30%] s1600:w-[40%] s1600:h-[600px] s1920:h-[650px]">
            <ImgFetcher width={2000} height={2000} src={borderTreat} />
          </div>
          {/* service icon */}
          <div className="w-[320px] h-[320px] s1280:w-[404px] s1280:h-[404px] s1512:w-[487px] s1512:h-[473px] s1600:w-[473px] s1600:h-[473px] s1728:w-[503px] s1728:h-[503px] s1920:w-[578px] s1920:h-[578px] absolute top-1/2 s1280:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ImgFetcher width={3000} height={3000} src={bgCover} />
          </div>
          <div className="w-[320px] h-[320px] s1280:w-[404px] s1280:h-[404px] s1512:w-[487px] s1512:h-[473px] s1600:w-[473px] s1600:h-[473px] s1728:w-[503px] s1728:h-[503px] s1920:w-[578px] s1920:h-[578px] absolute top-1/2 s1280:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ImgFetcher width={800} height={800} src={fetchData!.imgCover} />
          </div>
        </div>
      </div>
      <div className="viewport-p">
        {/* videos */}
        <div className="grid grid-cols-12 gap-y-8 s1280:gap-y-0 s1280:mb-20 s1280:gap-x-20 s1920:gap-x-32">
          <div className="order-2 s1280:order-1 col-span-12 s1280:col-span-7 flex items-center justify-start">
            <div className="s1280:w-[688px] s1280:h-[434px] s1512:w-[798px] s1512:h-[506px] s1600:w-[836px] s1600:h-[530px] s1728:w-[850px] s1728:h-[650px] s1920:w-[900px] s1920:h-[700px]">
              <VideoPlayer
              showLogo={false}
                toolsbarStyle="h-[38px] s1280:h-[60px] border-[1px] border-white"
                className="s1280:w-[684px] s1280:h-[434px] s1512:w-[798px] s1512:h-[506px] s1600:w-[836px] s1600:h-[530px] s1728:w-[885px] s1728:h-[530px]  s1920:w-[996px] s1920:h-[580px]"
                src={
                  fetchData?.videoPage || locale === "ru"
                  ? "https://azpo.com/api/files/property-videos/site_health.mp4"
                  : "https://azpo.com/api/files/property-videos/site_health_en.mp4"
                }
              />
            </div>
          </div>
          <div className="order-1 s1280:order-2 col-span-12 s1280:col-span-5 flex flex-col h-fit">
            <div className="s1280:mb-20 s1512:mb-4">
              <h2 className="font-semibold text-[20px] [text-shadow:0px_1px_2px_#00000025] s1280:text-[30px] s1512:text-[36px] s1728:text-[40px] text-[#333333] shadow-treat-video mb-2">
                {fetchData?.videoContents.title}
              </h2>
              <p className="font-medium s1280:text-[20px] s1512:text-[24px] s1728:text-[30px] text-[#474744] text-justify s1280:text-start s1280:leading-8 s1512:leading-9 s1600:leading-[50px]">
                {fetchData?.videoContents.desc}
              </p>
            </div>
            {/* <div className="items-end justify-start gap-x-4 mt-auto hidden s1280:flex s1280:h-[188px] s1512:h-[236px]">
              <ChangeVideo videoList={videoList} />
            </div> */}
          </div>
          <div className="order-3 col-span-12 s1280:mt-10 s1728:mt-0 relative mt-8">
            {/* <div className="items-end justify-start gap-x-2 flex s1280:hidden h-[152px]">
              <ChangeVideo videoList={videoList} />
            </div> */}
            {/* <div className="s1280:w-[700px] s1280:h-[38px] absolute top-1/2 left-[30%] s1512:left-1/4 -translate-x-1/2 -translate-y-1/2"></div> */}
            {/* <div className="grdl-md s1280:w-[133px] s1280:h-[27px]  absolute top-0 s1280:top-1/2 right-0"></div>
            <div className="hidden s1280:block s1280:w-[121px] s1280:h-[378px] absolute -top-5 s1280:-top-[350px] right-0">
              <ImgFetcher width={2000} height={2000} src={videoChar} />
            </div> */}
          </div>
        </div>
        {/* service categoryies */}
        <div>
          <div className="flex-bet mb-10 s1280:mb-0">
            <hr className="w-[45%] h-0 border-[2px] border-dashed border-[#333333]" />
            <div className="w-[50px] h-[50px] s1280:w-[81px] s1280:h-[81px]">
              <ImgFetcher src={safe} />
            </div>
            <hr className="w-[45%] h-0 border-[2px] border-dashed border-[#333333]" />
          </div>
          <div>
            <div className="mb-10 flex flex-col justify-start gap-y-2 s1280:gap-y-0 s1280:flex-row items-start s1280:justify-between s1280:mb-20">
              <div className="w-full s1280:w-fit mb-5">
                <h2 className="[text-shadow:0px_1px_2px_#00000040] font-bold text-[20px] s1280:text-[40px] s1600:text-[48px] text-[#00979A]">
                  {fetchData?.subCategoryContent.title}
                </h2>
              </div>
              <div className="w-full s1280:w-fit">
                <SearchBox />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start s1280:flex-row s1280:items-start s1280:justify-between gap-y-10 s1280:gap-y-0 s1280:gap-x-5 s1512:gap-x-4">
              <div className="flex items-center flex-col justify-start s1280:flex-row s1280:justify-start flex-wrap w-full gap-y-10 s1280:flex-grow s1280:gap-x-4 s1600:gap-x-[10px] s1728:gap-x-6">
                {/* content */}
                {fetchData?.subNestedList.map((subNested, index) => {
                  return (
                    <TreatCard
                      key={index}
                      path={`${subNested.categoryKey}/${subNested.subCategoryKey}/${subNested.path}`}
                      img={subNested.img || eye1}
                      desc={subNested.description}
                      title={subNested.title}
                    />
                  );
                })}

                <div className="w-full">
                  <Pagination totalPages={80} />
                </div>
                {/* content */}
                <div>
                  <SubContent
                    header={fetchData?.contents.title || ""}
                    desc={fetchData?.contents.content || ""}
                  />
                </div>
              </div>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
