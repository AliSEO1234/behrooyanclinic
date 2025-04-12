import ImgFetcher from "@/components/imgFetcher";
import VideoTab from "@/features/subTreat/videoTab";
import benefitIcon from "@/assets/images/subTreatment/benefits.png";
import BenefCard from "@/components/benefits/benefCard";
import BenefBorder from "@/components/benefits/benefBorder";
import person from "@/assets/images/subTreatment/person.svg";
import consider from "@/assets/images/subTreatment/consider.svg";
import drag from "@/assets/images/subTreatment/drag.svg";
import BFSwiper from "@/features/BF/BFSwiper";
import SubContent from "@/components/shortLongDesc";

import { dataSubCategoryHandler } from "@/staticData/subCategoryList";
import { handleBFRelation } from "@/staticData/BFs/relationBFsDrive";
import BorderSubNested from "@/components/subNestedCategory/borderSubNested";
import bfIcon from "@/assets/images/bficon.svg";
import subnestedvideo from "@/assets/images/subnestedvideo.svg";
import advantageicon from "@/assets/images/advantageicon.svg";
import subnestedcontent from "@/assets/images/subnestedcontent.svg";
import TableOfContentCard from "@/components/subNestedCategory/tableOfContentCard";
import health from "@/assets/images/healthlogo.png";
import LeadForm from "@/components/leadForm";
import { Accordion } from "@/components/ui/accordion";
import QuestionAcco from "@/components/questionAccordion";
import faqcover from "@/assets/images/faqcover.png";
import posticon from "@/assets/images/post.svg";
import preicon from "@/assets/images/pre.svg";
import PrePostLayout from "@/layoutes/prePostLayout/presPostLayout";
import SubTreatAdvantagesIntersectionObserver from "@/components/scripts/sub-treat-advantages-intersection.observer";
import CircleAnimate from "@/components/circleAnimate";
type PropsPageType = {
  params: Promise<{ treat: string; subTreat: string; locale: string }>;
};
const Page = async ({ params }: PropsPageType) => {
  const { subTreat, locale, treat } = await params;
  const bfRelations = handleBFRelation();
  const findSubnestedRelation = bfRelations.find((bf) => bf.path === subTreat);
  const handleBfList = () => {
    const basePath = `/${findSubnestedRelation?.driveFolder}/${findSubnestedRelation?.sizeNameFolder}/`;
    let bfLinkList: string[] | null = [];
    if (findSubnestedRelation?.images) {
      for (const bf of findSubnestedRelation!.images) {
        const concatPath = basePath.concat(bf);
        bfLinkList.push(concatPath);
      }
    } else {
      bfLinkList = null;
    }
    return bfLinkList;
  };
  const bfCurrentLinks = handleBfList();
  const fetchData = dataSubCategoryHandler(
    subTreat,
    locale,
    bfCurrentLinks ? bfCurrentLinks : null
  );
  const tableOfContents = [
    {
      link: "patient-bf",
      label: "Befor/After",
      icon: bfIcon,
      isActive: fetchData?.bfs && fetchData.bfs.length > 0,
    },
    {
      link: "video",
      label: "Videos",
      icon: subnestedvideo,
      isActive: true,
    },
    {
      link: "advantages",
      label: "Advantages",
      icon: advantageicon,
      isActive: true,
    },
    {
      link: "content",
      label: "Content",
      icon: subnestedcontent,
      isActive: true,
    },
  ];
  const circleList: {
    position: "left" | "right";
    xValue: number;
    topValue: number;
  }[] = [
    {
      position: "left",
      xValue: 160,
      topValue: 500,
    },
    {
      position: "left",
      xValue: 160,
      topValue: 2200,
    },
  ];
  return (
    <>
      <section className="sub-nested-home-first-section">
        <div>
          <h1>{fetchData?.title}</h1>
          <p>{fetchData?.descriptionTop}</p>
          <BorderSubNested
            label="Table of content"
            className="home-first-child-section"
            labelStyle="home-first-child-section-label"
          />
          <div>
            {tableOfContents.map((card, index) => {
              if (card.isActive) {
                return <TableOfContentCard key={index} {...card} />;
              }
            })}
            <div></div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <ImgFetcher
                className="object-cover"
                src={fetchData?.imgCover || health}
                width={700}
                height={700}
              />
            </div>
          </div>
        </div>
        {/* paht */}
        {/* <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[75%] h-[50px] rounded-b-[400px] z-10 bg-rose-600"></div> */}
      </section>
      {/* content */}
      <section className="viewport-p bg-[#FCFCFC]">
        {circleList.map((circle, index) => (
          <CircleAnimate key={index} {...circle} />
        ))}
        {/* video */}
        <section id="video" className="sub-nested-video-section">
          <BorderSubNested
            label="Video"
            className="sub-nested-video-label"
            labelStyle="sub-nested-video-label-style"
          />
          <VideoTab
            videoSrc={
              treat === "hair-transplantation"
                ? "https://youtu.be/VEqbI7eBgJY?si=1NTS-RyYETB_Gjn5"
                : fetchData?.video
                ? "https://youtu.be/MI2Ed8Y_hnU?si=4IzIP-nXWpgQLjgf"
                : locale === "ru"
                ? "https://youtu.be/VEqbI7eBgJY?si=1NTS-RyYETB_Gjn5"
                : "https://youtu.be/VEqbI7eBgJY?si=1NTS-RyYETB_Gjn5"
            }
          />
        </section>
        {/* benefits */}
        {fetchData?.benefits && (
          <section id="advantages" className="sub-nested-advantages">
            <div>
              <div>
                <div className="w-full">
                  <h2>{locale === "ru" ? "Преимущества" : "Advantages"}</h2>
                </div>
                <div>
                  <ImgFetcher width={1500} height={1500} src={benefitIcon} />
                </div>
              </div>
              <div>
                <SubTreatAdvantagesIntersectionObserver />
                <BenefCard
                  desc={fetchData?.benefits.items[0].desc || ""}
                  title={fetchData?.benefits.items[0].title || ""}
                />
                <BenefBorder />
                <BenefCard
                  desc={fetchData?.benefits.items[1].desc || ""}
                  title={fetchData?.benefits.items[1].title || ""}
                />
                <BenefBorder />
                <BenefCard
                  desc={fetchData?.benefits.items[2].desc || ""}
                  title={fetchData?.benefits.items[2].title || ""}
                />
              </div>
            </div>
            <div>
              {/* category */}
              <div className="text-[#474744]">
                <div className="mb-8 s1280:mb-5">
                  <h4 className="">
                    <span className="w-[18px] h-[39px]">
                      <ImgFetcher src={person} />
                    </span>
                    <span>
                      {fetchData?.benefits.categories[0]?.header || ""}
                    </span>
                  </h4>
                </div>
                <ul className="font-normal flex flex-col gap-y-6 relative">
                  {/* border dashed */}
                  <li className="h-full w-[18px] absolute top-2 left-0 flex items-start justify-center z-[1] pb-4">
                    <div
                      className="w-0 h-full"
                      style={{
                        border: "1px dashed",
                        borderImageSource:
                          "linear-gradient(50deg, #FCFCFC 0%, #000000 100%)",
                        borderImageSlice: 1,
                      }}
                    ></div>
                  </li>
                  <li className="text-[14px] s1512:text-[20px] s1920:text-[23px] z-[2] flex items-start justify-start gap-x-4 relative ps-8 s1280:ps-8">
                    <span className="absolute top-2 left-0 w-[18px] flex-cen">
                      <span className="w-[10px] h-[10px] bg-[#00CCA1] rounded-full border border-[#474744]"></span>
                    </span>
                    <span>{fetchData?.benefits.categories[0]?.desc || []}</span>
                  </li>
                </ul>
              </div>
              {/* category */}
              {fetchData?.benefits.categories[1]?.header &&
                fetchData?.benefits.categories[1]?.desc && (
                  <div className="text-[#474744]">
                    <div className="mb-8 s1280:mb-5">
                      <h4 className="flex-left gap-x-4 s1280:gap-x-5 font-medium text-[20px] s1920:text-[24px]">
                        <span className="w-[18px] h-[39px]">
                          <ImgFetcher src={consider} />
                        </span>
                        <span>{fetchData?.benefits.categories[1].header}</span>
                      </h4>
                    </div>
                    <ul className="font-normal flex flex-col gap-y-6 relative">
                      <li className="h-full w-[18px] absolute top-2 left-0 flex items-start justify-center z-[1] pb-4">
                        <div
                          className="w-0 h-full"
                          style={{
                            border: "1px dashed",
                            borderImageSource:
                              "linear-gradient(50deg, #FCFCFC 0%, #000000 100%)",
                            borderImageSlice: 1,
                          }}
                        ></div>
                      </li>
                      {fetchData?.benefits.categories[1].desc && (
                        <li className="text-[14px] s1280:text-[16px] s1512:text-[20px] s1920:text-[23px] flex items-start justify-start gap-x-4 z-[2] ps-8 relative s1280:ps-8">
                          <span className="absolute top-1 s1280:top-2 left-0 w-[18px] flex-cen">
                            <span className="w-[10px] h-[10px] bg-[#00CCA1] rounded-full border border-[#474744]"></span>
                          </span>
                          <span>
                            {fetchData.benefits.categories[1].desc}
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
                
              <div className="text-[#474744]">
                <div className="mb-8 s1280:mb-5">
                  <h4 className="flex-left gap-x-4 s1280:gap-x-5 font-medium text-[20px] s1920:text-[24px]">
                    <span className="w-[18px] h-[39px]">
                      <ImgFetcher src={consider} />
                    </span>
                    <span>{fetchData?.benefits.categories[2]?.header}</span>
                  </h4>
                </div>
                <ul className="font-normal flex flex-col gap-y-6 relative">
                  <li className="h-full w-[18px] absolute top-2 left-0 flex items-start justify-center z-[1] pb-4">
                    <div
                      className="w-0 h-full"
                      style={{
                        border: "1px dashed",
                        borderImageSource:
                          "linear-gradient(50deg, #FCFCFC 0%, #000000 100%)",
                        borderImageSlice: 1,
                      }}
                    ></div>
                  </li>

                  <li className="text-[14px] s1280:text-[16px] s1512:text-[20px] s1920:text-[23px] flex items-start justify-start gap-x-4 z-[2] ps-8 relative s1280:ps-8">
                    <span className="absolute top-1 s1280:top-2 left-0 w-[18px] flex-cen">
                      <span className="w-[10px] h-[10px] bg-[#00CCA1] rounded-full border border-[#474744]"></span>
                    </span>
                    <span>{fetchData?.benefits.categories[2]?.desc}</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}
        <LeadForm className="my-10 relative z-[2]" />
        <section className="mb-10 relative z-[2]">
          {fetchData?.posts && fetchData?.posts.length > 0 && (
            <PrePostLayout
            iconLabel={preicon}
            itemList={fetchData.preList}
            position="post"
            />
          )}
          {fetchData?.posts && fetchData?.posts.length > 0 && (
            <PrePostLayout
              iconLabel={posticon}
              itemList={fetchData.posts}
              position="pre"
            />
          )}
        </section>
        {/*  Conclusion */}
        {fetchData?.conclusion && (
          <section className="relative mb-10 s1280:mb-16 z-[2]">
            <BorderSubNested
              label="Conclusion"
              className="w-[108px] s1280:w-[182px] s1512:w-[215px] s1728:w-[393px] mb-5 s1512:mb-8"
              labelStyle="text-[#333333] s1280:text-[24px] s1512:text-[30px] s1728:text-[36px] s1920:text-[40px]"
            />
            <p className="font-light s1280:font-medium s1280:text-[16px] s1512:text-[18px] s1728:text-[20px] text-center s1280:px-32 s1512:px-44 s1600:px-56 s1728:px-64 text-[#474744] leading-[30px] z-[3]">
              {fetchData?.conclusion.desc}
            </p>
          </section>
        )}
        {/* before && after */}
        {Boolean(bfCurrentLinks) && (
          <section
            id="patient-bf"
            className="mb-[24px] s1280:mb-20 relative z-[2]"
          >
            <div className="font-bold flex-left relative w-fit mb-5">
              <h2 className="s1280:text-[48px]">
                {locale === "ru" ? "До" : "Before"}
              </h2>
              <div
                className={`bg-gradient-to-r from-[#FCFCFC] via-[#3EBB9A] to-[#FCFCFC] s1280:w-[140px] w-[80px] h-[2px] s1280:h-[6px] -rotate-45 absolute -translate-x-1/2 -translate-y-1/2 ${
                  locale === "ru"
                    ? "top-[58%] left-[20%] s1280:top-[55%] s1280:left-[20%]"
                    : "top-[58%] left-[42%] s1280:top-[55%] s1280:left-[42%]"
                }`}
              ></div>
              <h2
                className={`text-[30px] s1280:text-[96px] text-[#3EBB9A] [text-shadow:0px_3px_2.8px_#00000040]  ${
                  locale === "ru"
                    ? "mt-7 -ms-0 s1280:-ms-1 s1280:mt-20"
                    : "mt-7 -ms-2 s1280:-ms-6 s1280:mt-20"
                }`}
              >
                {locale === "ru" ? "После" : "After"}
              </h2>
            </div>
            <div>
              <BFSwiper
                dynamic={Boolean(bfCurrentLinks)}
                bfList={fetchData?.bfs || []}
              />
            </div>
            <div className=" hidden s1280:block s1280:-mt-16">
              {/* <div className="s1280:h-[340px] s1600:h-[360px] s1920:h-[420px]">
              <ImgFetcher
                className="object-cover object-top  clip-path-custom s1280:scale-75"
                width={1000}
                height={1000}
                src={pile}
              />
            </div> */}
              <div className="mt-20">
                <div className="mb-4">
                  <p className="text-center font-normal text-[#7E7D7D]">
                    Drag the Pill to explore more Patient
                  </p>
                </div>
                <div className="flex-cen">
                  <div className="s1280:w-[66px] h-[56px]">
                    <ImgFetcher src={drag} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* faq */}
        {fetchData?.faqs && fetchData.faqs.length > 0 && (
          <section className="mb-10 s1280:mb-16 relative z-[2]">
            <BorderSubNested
              label="Frequently Asked Questions"
              className=" w-[108px] s1280:w-[182px] s1512:w-[215px] s1728:w-[393px] mb-5 s1280:mb-10 s1512:mb-12"
              labelStyle="text-[#333333] s1280:text-[24px] s1512:text-[30px] s1728:text-[36px] s1920:text-[40px]"
            />
            <div className="grid grid-cols-12 gap-y-5">
              <Accordion
                type="single"
                collapsible
                className="order-2 s1280:order-1 col-span-12 s1280:col-span-6 grid grid-cols-12 gap-y-5 s1280:gap-y-3 4xl:gap-x-5 px-1 pb-2"
              >
                {fetchData.faqs.map((qu, index) => {                  
                  return <QuestionAcco key={index} item={index} answer={qu.answer} question={qu.question} />;
                })}
              </Accordion>
              <div className="order-1 s1280:order-2 col-span-12 s1280:col-span-6 flex items-center justify-center">
                <div className="w-full s430:w-[390px] h-[345px] s390:h-[362px] s412:h-[382px] s1280:w-[405px] s1280:h-[398px] s1512:w-[471px] s1512:h-[463px] s1728:w-[546px] s1728:h-[536px] s1920:w-[666px] s1920:h-[671px]">
                  <ImgFetcher src={faqcover} width={3000} height={3000} />
                </div>
              </div>
            </div>
          </section>
        )}
        {/* content */}
        <section className="relative z-[2]" id="content">
          <BorderSubNested
            label="Content"
            className=" w-[108px] s1280:w-[182px] s1512:w-[215px] s1728:w-[393px] mb-5 s1280:mb-10 s1512:mb-12"
            labelStyle="text-[#333333] s1280:text-[24px] s1512:text-[30px] s1728:text-[36px] s1920:text-[40px]"
          />
          <SubContent
            header={fetchData?.contents.title || ""}
            desc={fetchData?.contents.content || ""}
          />
        </section>
      </section>
    </>
  );
};
export default Page;
