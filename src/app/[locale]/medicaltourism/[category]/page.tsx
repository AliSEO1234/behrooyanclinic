// import PrevNextBtn from "@/features/treatment/prevNextTreat/prevNextBtn";
import borderTreat from "@/assets/images/treatment/bordertreat.png";
import eye from "@/assets/images/treatment/eye.png";
import bgCate from "@/assets/images/treatment/bg-category.svg";
import ImgFetcher from "@/components/imgFetcher";
import borderPhone from "@/assets/images/treatment/borderTreatPhone.png";
import Pagination from "@/components/pagination";
import Sidebar from "@/layoutes/sidebar/sidebar";
import TreatCard from "@/features/treatment/treatCard";
import { categoryDataHandler } from "@/staticData/subCategoryList";
import SubContent from "@/components/shortLongDesc";
type PropsPageType = {
  params: Promise<{ category: string; locale: string }>;
};
const Page = async ({ params }: PropsPageType) => {
  const { category, locale } = await params;  
  const fetchData = categoryDataHandler(category, locale);  
  return (
    <div className="bg-[#FCFCFC]">
      <div className="grid grid-cols-12 gap-y-5 s1280:gap-y-0 mt-16 s1512:mt-20 ps-[10px] s430:ps-5 pt-10 s1280:ps-[71px] s1512:ps-[79px] s1600:ps-[85px] s1728:ps-[100px] s1920:ps-[131px] rounded-b-[40px] shadow-[0px_19px_30px_-25px_#0000001C] overflow-hidden mb-10 s1280:mb-20 pb-5 s1280:pb-0 s1280:h-[520px] s1512:h-[620px] s1728:h-[750px]">
        <div className="order-2 s1280:order-1 col-span-12 s1280:col-span-6 s1600:col-span-5 s1920:col-span-6 pe-[10px] s430:pe-5 z-[2] s1512:mt-10 s1600:mt-0 s1280:pb-4 flex flex-col items-start justify-center">
          <div className="mb-5">
            <h1 className="hidden s1280:block mb-4 s1512:mb-6 font-black s1280:text-[36px] s1512:text-[40px] s1728:text-[60px] text-[#00979A]">
              {fetchData?.title}
              {/* Eye Surgeries */}
            </h1>
            <p className="text-[#333333] font-medium s1280:text-[20px] s1512:text-[24px] s1728:text-[30px] s1280:text-start leading-[25px] s1280:leading-[30px] s1600:leading-[45px] s1280:line-clamp-[8]">
              {fetchData?.descriptionTop}
            </p>
          </div>
          {/* <PrevNextBtn /> */}
        </div>
        <div className="order-1 s1280:order-2 col-span-12 s1280:col-span-6 s1600:col-span-7 s1920:col-span-6 relative flex-right z-[2]">
          {/* text */}
          <h1 className="s1280:hidden line-clamp-2 absolute top-0 left-0 font-bold text-[30px] text-[#00979A] w-1/2">
          {fetchData?.title}
          </h1>
          {/* phone */}
          <div className="s1280:hidden w-[200px] h-[500px]">
            <ImgFetcher width={2000} height={2000} src={borderPhone} />
          </div>
          {/* desktop */}
          <div className="hidden s1280:block s1280:w-[40%] s1280:h-[450px] s1512:h-[550px] s1512:w-[30%] s1600:w-[40%] s1600:h-[600px] s1920:h-[650px] absolute bottom-0 right-0">
            <ImgFetcher width={2000} height={2000} src={borderTreat} />
          </div>
          {/* service icon */}
          <div className="w-[320px] h-[320px] s1280:w-[404px] s1280:h-[404px] s1512:w-[487px] s1512:h-[473px] s1600:w-[473px] s1600:h-[473px] s1728:w-[503px] s1728:h-[503px] s1920:w-[578px] s1920:h-[578px] absolute top-1/2 s1280:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ImgFetcher width={3000} height={3000} src={bgCate} />
          </div>
          <div className="w-[320px] h-[320px] s1280:w-[404px] s1280:h-[404px] s1512:w-[487px] s1512:h-[473px] s1600:w-[473px] s1600:h-[473px] s1728:w-[503px] s1728:h-[503px] s1920:w-[578px] s1920:h-[578px] absolute top-1/2 s1280:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ImgFetcher className="object-cover" width={3000} height={3000} src={fetchData?.imgCover || eye} />
          </div>
        </div>
      </div>
      <div className="viewport-p">
        {/* service categoryies */}
        <div>
          <div>
            <div className="mb-10 flex flex-col justify-start gap-y-2 s1280:gap-y-0 s1280:flex-row items-start s1280:justify-start s1280:mb-20">
              <div className="w-full s1280:w-fit mb-5">
                <h2 className="[text-shadow:0px_1px_2px_#00000040] font-bold text-[20px] s1280:text-[40px] s1600:text-[48px] text-[#00979A]">
                  {fetchData?.subCategoryContent.title}
                </h2>
              </div>
              {/* <div className="w-full s1280:w-fit">
                <SearchBox />
              </div> */}
            </div>
            <div className="flex flex-col items-center justify-start s1280:flex-row s1280:items-start s1280:justify-between gap-y-10 s1280:gap-y-0 s1280:gap-x-5 s1512:gap-x-4">
              <div className="flex items-center flex-col justify-start s1280:flex-row s1280:justify-start flex-wrap w-full gap-y-10 s1280:flex-grow s1280:gap-x-4 s1600:gap-x-[10px] s1728:gap-x-6">
                {/* content */}
                {fetchData?.subCategoryList.map((subCategory, index) => {
                  return (
                    <TreatCard
                      path={`${fetchData.categoryKey}/${subCategory.path}`}
                      key={index}
                      img={subCategory.img}
                      desc={subCategory.description}
                      title={subCategory.title}
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
