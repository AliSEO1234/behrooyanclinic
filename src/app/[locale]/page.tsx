import { FaPlay } from "react-icons/fa";
import ImgFetcher from "@/components/imgFetcher";
import squire from "@/assets/images/icons/home/squire.svg";
import star from "@/assets/images/icons/star.svg";
import point from "@/assets/images/icons/home/points.svg";
import Link from "next/link";
import ServiceCard from "@/features/services/serviceCard";
import RoadmapIntersectionObserver from "@/components/scripts/roadmap-intersection-observer";
import HelpingIntersectionObserver from "@/components/scripts/helping-intersection-observer";
import InfoIntersectionObserver from "@/components/scripts/info-intersection-observer";
import videoCover from "@/assets/images/videoCover.jpg";
import cell from "@/assets/images/icons/services/cells.png";
import fertility from "@/assets/images/icons/services/fertility.png";
import eye from "@/assets/images/icons/services/eye.png";
import dental from "@/assets/images/icons/services/dental.png";
import aesthetics from "@/assets/images/icons/services/aesthetics.png";
import videoIcon from "@/assets/images/icons/video.svg";
import medalIcon from "@/assets/images/icons/medal.svg";
import VideoPlayer from "@/features/services/videoPlayer/videoPlayer";
import RoadmapCard from "@/components/roadmap/roadmapCard";
import passport from "@/assets/images/icons/passport.png";
import date from "@/assets/images/icons/date.png";
import air from "@/assets/images/icons/air.png";
import earth from "@/assets/images/icons/earth.png";
import RoadmapArrowMobile from "@/components/roadmap/roadmapArrowMobile";
import help1 from "@/assets/images/icons/home/helptop.jpg";
import help2 from "@/assets/images/icons/home/helpunder.jpg";
import ArrowHelping from "@/components/arrowHelping";
import FeedBackLayout from "@/layoutes/feedbackLayoute/feedbackLayoute";
import InfoHealthCard from "@/components/infoHealth/infoHealthCard";
import heart from "@/assets/images/icons/heart.svg";
import BundleIcon from "@/components/infoHealth/bundleIcon";
import FillScrollLayout from "@/layoutes/fillScrollLayout/fillScrollLayout";
import chooseIcon from "@/assets/images/chooseIcon.svg";
import chooseUs from "@/assets/images/chooseus.jpg";
import ChooseUsCard from "@/components/chooseUs/chooseUsCard";
import SeeAll from "@/components/seeAll";
import DistinctiveCard from "@/components/distinctive/distinctiveCard";
import dist1 from "@/assets/images/distinctive/distinctive1.jpg";
import dist2 from "@/assets/images/distinctive/distinctive2.jpg";
import dist3 from "@/assets/images/distinctive/distinctive3.jpg";
import dist4 from "@/assets/images/distinctive/distinctive4.jpg";
import dist1icon from "@/assets/images/distinctive/icon1.svg";
import dist2icon from "@/assets/images/distinctive/icon2.svg";
import dist3icon from "@/assets/images/distinctive/icon3.svg";
import dist4icon from "@/assets/images/distinctive/icon4.svg";
import ExperienceCard from "@/components/experience/experienceCard";
import noIcon from "@/assets/images/icons/experience/noicon.svg";
import freeconsul from "@/assets/images/icons/experience/freeconsul.svg";
import pay from "@/assets/images/icons/experience/pay.svg";
import experienceIcon from "@/assets/images/icons/home/experience.svg";
import exPhone from "@/assets/images/icons/home/exPhone.svg";
import BlogCard from "@/components/blogs/blogCard";
import { blogList } from "@/staticData/blogList";
import ComplimentaryConsultationForm from "@/features/complimentaryConsultationForm";
import PlatformWorkForm from "@/features/platformWork/platformWorkForm";
import InfoCard from "@/features/platformWork/infoCard";
import pltWork from "@/assets/images/workPlatform.png";
import doctorIcon from "@/assets/images/doctorPltWork.svg";
import ring from "@/assets/images/ring.svg";
import phone from "@/assets/images/phone.svg";
import apoint from "@/assets/images/apointment.svg";
import online from "@/assets/images/online.svg";
import VideoPlayerCom from "@/features/videoPlayer/videoPlayer";
const Home = async ({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}) => {
  const { locale } = await params;
  // https://azpo.com/api/files/property-videos/azpo_main.mp4
  return (
    <>
      <div className="bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF12] via-4% to-[#FCFCFC]">
        <div className="relative s1280:h-full pt-12 s1280:pt-14 s1512:pt-28 overflow-hidden">
          <VideoPlayerCom />
          <div className="grid grid-cols-12 gap-x-4 s1512:gap-x-[23px] s1728:gap-x-[28px] gap-y-10 mb-10 s1280:mb-[60px] viewport-p">
            <div className="col-span-12 s412:pt-5 s1280:col-span-6 s1512:col-span-4  relative">
              {/* points */}
              <div className="hidden w-60 h-60 absolute -bottom-20 -right-36 s1600:-right-40">
                <ImgFetcher src={point} />
              </div>
              {/* points */}
              <div className="hidden w-72 h-72 absolute -bottom-6 left-40">
                <ImgFetcher src={point} />
              </div>
              {/* squire icon */}
              <div className="hidden w-[60px] top-0 -right-12 h-[120px] s1280:w-[243px] s1280:h-[290px] absolute s1280:top-10 s1280:-right-40 z-[2]">
                <ImgFetcher
                  className="object-contain filter drop-shadow-[inset_5px_10px_10px_rgb(0,0,0)]"
                  src={squire}
                />
              </div>
              <div className="relative z-[3]">
                {/* text-[#00979A] */}
                <h1 className="text-[20px] s1280:text-[48px] s1512:text-[60px] font-black text-center s1280:text-start text-white">
                  AZPO Health
                </h1>
                {/* text-[#2A2A2A] */}
                <p className="text-[14px] s1280:text-[40px] s1512:text-[38px] s1920:text-[45px]  text-center s1280:text-start font-medium text-white">
                  Trust, Care, and Wellness
                </p>
                {/* text-[#2A2A2A] */}
                <p className="text-[14px] s1280:text-[40px] s1512:text-[38px] s1920:text-[45px]  text-center s1280:text-start font-medium text-white">
                  Beyond Borders
                </p>
                <hr className="bg-[#9996A0] w-full mt-1 s1280:hidden" />
                <div className="flex-cen s1280:flex-left mt-2">
                  <p className="text-[14px] text-center s1280:text-start rounded-[20px] s1280:text-[20px] s1512:text-[16px] s1600:text-[18px] s1728:text-[20px] s1280:rounded-[40px] w-fit font-medium bg-[#DAEDE6] text-[#2A2A2A] s1280:p-3 px-1 py-2 shadow-[0px_4px_4px_0px_#00000040] relative z-[3]">
                    Travel with confidence, heal with peace
                  </p>
                </div>
                <div className="mt-10 hidden s1280:block">
                  <div>
                    {/* text-[#2A2A2A] */}
                    <p className="font-medium s1280:pe-10 s1600:text-[18px] text-white ">
                      Discover a life-changing medical journey with tailored
                      care, comprehensive services, and dedicated 24/7 support
                      throughout your experience!
                    </p>
                  </div>
                  <div className="mt-5">
                    <button className="flex-cen gap-x-2 text-white s1512:text-[20px] font-semibold">
                      <span className="bg-[#DAEDE6] rounded-full flex-cen p-2">
                        <span className="w-[45px] h-[45px] bg-[#25A6A9] rounded-full flex-cen text-white">
                          <FaPlay className="size-4 ms-1" />
                        </span>
                      </span>
                      <span>Play Azpo video</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6 s1280:col-span-3 s1512:col-span-5 z-1"></div>
            {/* <div className="col-span-6 s1280:col-span-6 s1512:col-span-5 z-1">
            <div className="s1280:h-[560px] relative rounded-[20px] s1280:rounded-[30px] overflow-hidden bg-inherit shadow-[0_5px_10px_#00000040]">
              <ImgFetcher width={500} src={homeBg} />
              <div className="header__dots-container w-6 h-6 s1280:w-[55px] s1280:h-[55px] absolute top-2 right-2 s1280:top-2 s1280:p-2 s1280:right-2">
                <ImgFetcher src={pointtop} />
              </div>
              <div className="header__dots-container w-6 h-6 s1280:w-[55px] s1280:h-[55px] absolute bottom-2 left-2 s1280:bottom-2 s1280:left-2 s1280:p-2">
                <ImgFetcher src={pointbot} />
              </div>
            </div>
          </div> */}
            <div className="col-span-12 s1280:hidden relative">
              {/* points */}
              <div className="w-48 h-48 absolute -top-10 left-0">
                <ImgFetcher src={point} />
              </div>
              <div>
                <p className="font-medium text-white text-center px-6 s412:px-0 text-[14px]">
                  Discover a life-changing medical journey with tailored care,
                  comprehensive services, and dedicated 24/7 support throughout
                  your experience!
                </p>
              </div>
              <div className="mt-5 flex-cen">
                <button className="flex-cen gap-x-2 text-white s1512:text-[20px] font-semibold">
                  <span className="bg-[#DAEDE6] rounded-full flex-cen p-2">
                    <span className="bg-[#25A6A9] rounded-full flex-cen p-2 text-white">
                      <FaPlay className="size-4" />
                    </span>
                  </span>
                  <span>Play Azpo video</span>
                </button>
              </div>
            </div>
            {/* Complimentary Consultation */}
            <div className="col-span-12 s1280:col-span-3 s1512:col-span-3 relative s1512:flex flex-col items-end">
              {/* star */}
              <div className="w-[78px] h-[78px] absolute -top-20 left-0 z-[2] s1280:-top-4 s1600:-top-5 s1280:-left-8">
                <ImgFetcher src={star} />
              </div>
              {/* points */}
              <div className="hidden w-60 h-60 absolute -top-8 s1512:-top-10 right-0">
                <ImgFetcher src={point} />
              </div>
              <div className="relative z-[3] s1512:flex s1512:flex-col">
                <div className="mb-4 s1280:px-[27px] s1600:px-0 s1600:mt-5">
                  <h2 className="text-center text-[20px] s1280:text-[24px] s1728:text-[30px] font-bold s1512:text-center text-white">
                    Complimentary Consultation
                  </h2>
                </div>
                {/* form */}
                <div className="p-4 s412:px-[35px] s1280:px-[27px] bg-[#ffffff4f] backdrop-blur-[10px] rounded-[30px] s1512:mt-auto shadow-[0px_4px_15px_0px_#0000001A] s1280:py-5  mt-auto">
                  <ComplimentaryConsultationForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="viewport-p">
          {/* Specialized Treatments */}
          <div className="mb-10 s1280:mb-[60px]">
            <div className="flex-bet mb-5 s1280:mb-10">
              <div>
                <h2 className="font-semibold text-[20px] s1280:text-[36px] s1512:text-[40px] s1728:text-[48px] treat-shadow">
                  <span className="text-[#00979A]">Specialized</span> Treatments
                </h2>
              </div>
              <div className="flex-right">
                <SeeAll
                  className="h-[40px] w-[89px] s1280:w-[194px] s1280:h-[54px] text-[14px] s1280:text-[20px]"
                  link={`/${locale}/medicaltourism`}
                />
              </div>
            </div>
            {/* show service */}
            <div className="flex flex-col s1280:flex-row s1280:flex-wrap items-center justify-start s1280:items-center s1280:justify-between gap-y-8 s1280:gap-4 s1280:px-0">
              <ServiceCard
                linkStyle=" text-[18px] s1512:text-[18px]"
                titleStyle=" text-[20px] s1512:text-[20px]"
                imgStyle="p-4 w-[190px] h-[190px] s1280:h-[180px] s1280:w-[180px] s1512:h-[220px] s1512:w-[220px] s1728:w-[250px] s1728:h-[250px]"
                className="treatments__card-container w-[210px] s1280:w-[210px] s1512:w-[252px] s1600:w-[262px] s1728:w-[282px]"
                countService={27}
                img={aesthetics}
                linkService="/medicaltourism/aesthetic"
                title="Aesthetics"
              />
              <ServiceCard
                linkStyle=" text-[18px] s1512:text-[18px]"
                titleStyle=" text-[20px] s1512:text-[20px]"
                imgStyle=" p-4 w-[190px] h-[190px] s1280:h-[180px] s1280:w-[180px] s1512:h-[220px] s1512:w-[220px] s1728:w-[250px] s1728:h-[250px]"
                className="treatments__card-container w-[210px] s1280:w-[210px] s1512:w-[252px] s1600:w-[262px] s1728:w-[282px]"
                countService={74}
                img={dental}
                linkService="/medicaltourism/dental"
                title="Dental"
              />
              <ServiceCard
                linkStyle=" text-[18px] s1512:text-[18px]"
                titleStyle=" text-[20px] s1512:text-[20px]"
                imgStyle=" p-4 w-[190px] h-[190px] s1280:h-[180px] s1280:w-[180px] s1512:h-[220px] s1512:w-[220px] s1728:w-[250px] s1728:h-[250px]"
                className="treatments__card-container w-[210px] s1280:w-[210px] s1512:w-[252px] s1600:w-[262px] s1728:w-[282px]"
                countService={51}
                img={eye}
                linkService="/medicaltourism/eyeSurgeries"
                title="Eye Surgeries"
              />
              <ServiceCard
                linkStyle=" text-[18px] s1512:text-[18px]"
                titleStyle=" text-[20px] s1512:text-[20px]"
                imgStyle=" p-4 w-[190px] h-[190px] s1280:h-[180px] s1280:w-[180px] s1512:h-[220px] s1512:w-[220px] s1728:w-[250px] s1728:h-[250px]"
                className="treatments__card-container w-[210px] s1280:w-[210px] s1512:w-[252px] s1600:w-[262px] s1728:w-[282px]"
                countService={45}
                img={fertility}
                linkService="/medicaltourism/Fertility"
                title="Fertility"
              />
              <ServiceCard
                linkStyle=" text-[18px] s1512:text-[18px]"
                titleStyle=" text-[20px] s1512:text-[20px]"
                imgStyle="p-8 w-[190px] h-[190px] s1280:h-[180px] s1280:w-[180px] s1512:h-[220px] s1512:w-[220px] s1728:w-[250px] s1728:h-[250px]"
                className="treatments__card-container w-[210px] s1280:w-[210px] s1512:w-[252px] s1600:w-[262px] s1728:w-[282px]"
                countService={24}
                img={cell}
                linkService="/medicaltourism/stemCell"
                title="Stem Cell"
              />
            </div>
          </div>
          {/* Watch Your Health Journey */}
          <div className="mb-10 s1280:mb-[60px]">
            <div className="flex-bet mb-2 s1280:mb-10">
              <hr className="border-[1px] border-[#333333] border-dashed w-[4%] s375:w-[7%] s1280:w-[32%] s1600:w-[28%]" />
              <h2 className="flex-cen font-semibold text-[20px] s1280:text-[24px] s1512:text-[30px] s1600:text-[40px]">
                <span className="w-[48px] h-[34px] s1280:w-[70px] s1280:h-[53px]">
                  <ImgFetcher src={videoIcon} />
                </span>
                <span>Watch Your Health Journey</span>{" "}
              </h2>
              <hr className="border-[1px] border-[#333333] border-dashed w-[4%] s375:w-[7%] s1280:w-[32%] s1600:w-[28%]" />
            </div>
            <div className="flex-cen">
              <VideoPlayer
                className="s1280:w-[916px] s1280:h-[501px]"
                toolsbarStyle="h-[38px] s1280:h-[57px]"
                src={
                  locale === "ru"
                    ? "https://azpo.com/api/files/property-videos/site_health.mp4"
                    : "https://azpo.com/api/files/property-videos/site_health_en.mp4" ||
                      videoCover
                }
              />
            </div>
          </div>
          {/* Your Treatment Roadmap */}
          <div className="mb-10 s1280:mb-[80px]">
            <RoadmapIntersectionObserver />
            <div className="mb-2 s1280:mb-10">
              <div className="flex-bet mb-4">
                <hr className="border-[1px] border-[#333333] border-dashed w-[6%] s375:w-[9%] s390:w-[10%] s1280:w-[32%] s1600:w-[28%]" />
                <h2 className="flex-cen font-semibold text-[20px] s1280:text-[24px] s1512:text-[30px]  s1600:text-[40px]">
                  <span className="w-[42px] h-[42px] s1280:w-[70px] s1280:h-[53px]">
                    <ImgFetcher src={medalIcon} />
                  </span>
                  <span>Your Treatment Roadmap</span>
                </h2>
                <hr className="border-[1px] border-[#333333] border-dashed w-[6%] s375:w-[9%] s390:w-[10%] s1280:w-[32%] s1600:w-[28%]" />
              </div>
              <p className="text-center s1280:text-[24px] s1512:text-[28px] s1728:text-[29px] font-normal text-[#333333]">
                We are here to make your medical journey as smooth and
                reassuring as possible, with a dedicated team of doctors,
                healthcare professionals, and experienced patient coordinators
                supporting you every step of the way.
              </p>
            </div>
            <div className="grid grid-cols-12 s1280:gap-y-[10px] s1280:px-10 s1600:px-20 s1728:px-34 s1920:px-36">
              <RoadmapCard
                order={1}
                align="left"
                cover={passport}
                title="Personalized Consultation & Treatment Planning"
                desc="The process starts when clients contact us. We assess their needs, arrange consultations, and design a customized treatment plan with clear and transparent cost estimates."
                className="s1280:w-[650px] s1280:h-[150px] s1512:w-[872px] s1512:h-[185px] s1728:w-[55%] s1920:w-[50%]"
              />
              <div className="col-span-12 flex-cen">
                <RoadmapArrowMobile />
              </div>
              <RoadmapCard
                order={2}
                align="right"
                cover={air}
                title="Online & Pre-Travel Arrangements"
                desc="Clients consult with their doctor online to address any questions before traveling. We assist with booking flights, accommodation, transfers,and visa support if needed."
                className="s1280:w-[650px] s1280:h-[150px] s1512:w-[872px] s1512:h-[185px] s1728:w-[55%] s1920:w-[50%]"
              />
              <div className="col-span-12 flex-cen">
                <RoadmapArrowMobile />
              </div>
              <RoadmapCard
                order={3}
                align="left"
                cover={earth}
                title="Receiving World-Class Treatment"
                desc="Clients are supported throughout their treatment with regular updates, and follow-up care is arranged post-treatment for a seamless experience."
                className="s1280:w-[650px] s1280:h-[150px] s1512:w-[872px] s1512:h-[185px] s1728:w-[55%] s1920:w-[50%]"
              />
              <div className="col-span-12 flex-cen">
                <RoadmapArrowMobile />
              </div>
              <RoadmapCard
                order={4}
                endArrow
                align="right"
                cover={date}
                title=" 7/24 Ongoing Support"
                desc="Our relationship doesn’t end with the treatment. We remain available for questions, additional assistance, and long-term care."
                className="s1280:w-[650px] s1280:h-[150px] s1512:w-[872px] s1512:h-[185px] s1728:w-[55%] s1920:w-[50%]"
              />
            </div>
          </div>
          {/* helping */}
          <HelpingIntersectionObserver />
          <div className="mb-10 s1280:mb-[60px] bg-white shadow-[0_4px_15px_0_#0000001A] rounded-[40px] grid grid-cols-12 pt-4 pb-8 s1280:p-[27px] s1728:px-[30px] s1920:px-[70px] s1920:py-[38px] s1280:gap-x-[36px] s1512:gap-x-[42px] s1600:gap-x-[48px]">
            <div className="col-span-12 s1280:col-span-6 relative">
              <div className="helping__image-container--top flex items-center justify-center s1280:justify-end">
                <div className="w-[320px] h-[206px] s390:w-[336px] s412:w-[366px] s1280:w-[366px] s1280:h-[206px] s1512:w-[439px] s1512:h-[247px] s1920:w-[528px] s1920:h-[297px] rounded-[40px] overflow-hidden">
                  <ImgFetcher width={1000} src={help1} />
                </div>
              </div>
              <div className="helping__image-container--bottom hidden s1280:flex-left s1280:-mt-20">
                <div className="s1280:w-[345px] s1280:h-[405px] s1512:w-[433px] s1512:h-[438px] s1600:w-[454px] s1600:h-[460px] s1728:w-[480px] s1728:h-[487px] s1920:w-[474px] s1920:h-[437px] rounded-[40px] overflow-hidden ">
                  <ImgFetcher width={1000} src={help2} />
                </div>
              </div>
              {/* consultation */}
              <div className="helping__consultation-container flex-cen s1280:block w-full s1280:w-fit absolute -bottom-6 s1280:bottom-10 s1280:right-0 s1512:top-16 s1512:left-0 s1600:top-24 s1728:top-16">
                <Link
                  href="/"
                  className="w-[266px] h-[55px] s1280:h-[86px] s1280:w-[316px] flex-left ps-2 s1280:ps-4 gap-x-2 rounded-[40px] bg-[#FFFFFF99] shadow-[-8px_22px_15px_-15px_#0000001A] backdrop-blur-[10px]"
                >
                  <div>
                    <div className="flex-cen w-[45px] h-[45px] s1280:w-[64px] s1280:h-[64px] rounded-full help-shadow text-[#00979A] p-3 s1280:p-4">
                      <ImgFetcher src={ring} />
                      {/* <BiSolidPhoneCall className="size-7" /> */}
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-[#474744] s1280:mb-3">
                      Zero-Cost Consultation
                    </p>
                    <p className="text-[#474744] text-[14px] s1280:text-[16px]">
                      Consultation with the best
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-span-12 s1280:col-span-6 flex flex-col mt-16 s1280:mt-0 px-2 s412:px-4 s1600:px-0">
              <div className="mb-10 s1280:mb-2">
                <h3 className="text-[14px] s390:text-[15px] s1280:text-[20px] s1512:text-[24px] s1600:text-[28px] s1728:text-[30px] font-semibold text-[#00979A] mb-5">
                  HELPING PATIENTS FROM AROUND THE GLOBE!!
                </h3>
                <h4 className="font-semibold text-[20px] s1280:text-[24px] s1512:text-[30px] s1728:text-[40px] mb-1">
                  Our <span className="text-[#00979A]">Mission</span>
                </h4>
                <p className="text-[#474744] font-medium text-[14px] s1512:text-[16px] s1600:text-[18px] s1728:text-[20px] s1512:leading-[30px] text-justify">
                  At AzpoHealth, we aim to transform healthcare from a routine
                  process into an inspiring journey. Our goal is to make
                  advanced medical technologies accessible to patients
                  worldwide, providing the most suitable treatment plans and
                  ensuring access to high-quality healthcare. From the moment
                  you step into Turkey until you return home, we’ll be with you
                  every step of the way, supporting you to become the best
                  version of yourself. Our team of expert doctors and
                  professionals will be continuously by your side, offering
                  guidance and support throughout your treatment, ensuring the
                  safest and most comfortable experience possible. Welcome to a
                  new age of medical tourism, where your path to wellness meets
                  the excitement of discovering new possibilities.
                </p>
              </div>
              <div className="font-medium text-[#474744] mt-auto flex flex-col items-start justify-end gap-y-4 s1512:gap-y-6 text-[14px] s1280:text-[20px]">
                <div className="flex justify-start items-center gap-x-3">
                  <div className="helping__first-icon flex-cen w-[50px] h-[40px]">
                    <ImgFetcher src={phone} />
                    {/* <BsHeartPulse className="size-6 s1280:size-8 text-[#00979A]" /> */}
                  </div>
                  <ArrowHelping />
                  <div className="helping__small-text-container">
                    <p>Stay Updated About Your Health</p>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-x-3">
                  <div className="flex-cen w-[50px] h-[40px]">
                    <ImgFetcher src={online} />
                    {/* <MdOutlineCloudDone className="size-6 s1280:size-8 text-[#00979A]" /> */}
                  </div>
                  <ArrowHelping />
                  <div className="helping__small-text-container">
                    <p>Check Your Results Online</p>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-x-3">
                  <div className="flex-cen w-[50px] h-[40px]">
                    <ImgFetcher src={apoint} />
                    {/* <MdManageHistory className="size-6 s1280:size-8 text-[#00979A]" /> */}
                  </div>
                  <ArrowHelping />
                  <div className="helping__small-text-container">
                    <p>Manage Your Appointments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* We Appreciate Your Thoughts */}
          <div className="mb-10 s1280:mb-[60px]">
            <div className="mb-10">
              <h2 className="[text-shadow:_0_4px_4px_#00000040] text-center text-[#474744] font-semibold text-[20px] s1280:text-[24px] s1512:text-[30px] s1600:text-[40px] s1728:text-[48px]">
                We Appreciate Your Thoughts
              </h2>
            </div>
            <div>
              <FeedBackLayout align="right" />
              <FeedBackLayout align="left" />
            </div>
          </div>
          {/* information about Azpo Health */}
          <div className="mb-10 s1280:mb-[200px]">
            <div className="flex-bet mb-[10px] s1280:mb-16">
              <hr className="w-[42%] s1280:w-[44%] h-0 border-[2px] border-dashed border-[#333333]" />
              <div className="w-[42px] h-[42px] s1280:w-[100px] s1280:h-[100px]">
                <ImgFetcher src={heart} />
              </div>
              <hr className="w-[42%] s1280:w-[44%] h-0 border-[2px] border-dashed border-[#333333]" />
            </div>

            <div className="flex flex-col items-center gap-y-4 s1280:hidden">
              <div className="flex justify-between items-center w-full">
                <InfoHealthCard
                  title="Successful Consultations"
                  value="10000+"
                />
                <BundleIcon
                  className="w-[120px] h-[67px] top-5"
                  destination="top"
                />
                <InfoHealthCard
                  title="Healthcare Professionals"
                  value="2.500"
                />
              </div>
              <BundleIcon
                className="hidden s1280:block w-[120px] h-[67px]"
                destination="bottom"
              />
              <div className="flex justify-between items-center w-full">
                <InfoHealthCard title="Patient Satisfaction Rate" value="90%" />
                <BundleIcon
                  className="w-[120px] h-[67px] top-5"
                  destination="top"
                />
                <InfoHealthCard title="Top Specialists" value="200" />
              </div>
            </div>
            <div className="hidden s1280:flex items-center s1280:justify-between">
              <InfoIntersectionObserver />
              <InfoHealthCard
                order={1}
                title="Successful Consultations"
                value="10000+"
              />
              <BundleIcon
                order={1}
                className="w-[246px] s1600:w-[346px] h-[67px] s1600:h-[80px] top-24 s1600:top-24"
                destination="top"
              />
              <InfoHealthCard
                order={2}
                title="Healthcare Professionals"
                value="2.500"
              />
              <BundleIcon
                order={2}
                className="w-[246px] s1600:w-[346px] h-[67px] s1600:h-[80px] top-24 s1600:top-24"
                destination="bottom"
              />
              <InfoHealthCard
                order={3}
                title="Patient Satisfaction Rate"
                value="90%"
              />
              <BundleIcon
                order={3}
                className="w-[246px] s1600:w-[346px] h-[67px] s1600:h-[80px] top-24 s1600:top-24"
                destination="top"
              />
              <InfoHealthCard order={4} title="Top Specialists" value="200" />
            </div>
          </div>
          {/* Why choose us? */}
          <FillScrollLayout
            className="s1280:h-[852px] s1512:h-[780px] s1600:h-[898px] s1728:h-[884px] s1920:h-[819px] s1280:px-[25px] s1280:pt-44 s1512:pt-36"
            order="first"
            classLabel="flex-cen s1280:mt-2 s1512:mt-1"
            title="Why choose us?"
          >
            <div className="grid grid-cols-12 gap-y-10 px-2 s1280:gap-y-0 s1280:gap-x-10 s1600:gap-x-[55px] s1728:gap-x-[40px] s1920:gap-x-[75px] z-[3]">
              <div className="col-span-12 s1280:col-span-3 s1512:col-span-4 relative">
                <div className="w-full h-[289px] s1280:h-full rounded-tr-[50px] rounded-bl-[50px] overflow-hidden">
                  <ImgFetcher
                    className="object-cover"
                    src={chooseUs}
                    width={2000}
                  />
                </div>
                {/* icon */}
                <div className="hidden s1280:block s1280:w-[307px] s1280:h-[290px] absolute -bottom-14 -right-28">
                  <ImgFetcher src={chooseIcon} width={3000} />
                </div>
              </div>
              <div className="col-span-12 s1280:col-span-9 s1512:col-span-8 grid grid-cols-12 s1280:gap-x-5 s1600:gap-x-[26px] s1920:gap-x-[39px] gap-y-[32px]">
                <ChooseUsCard
                  className="col-span-12 s1280:col-span-6"
                  desc="What sets us apart is our dedication to personalized, reliable care. Our expert doctors and patient coordinators truly understand your needs. From the first contact, we provide one-on-one consultations to craft the best treatment plan for you. We stand by you as a trusted guide on your healthcare journey."
                  header="High Expertise"
                  index={1}
                />
                <ChooseUsCard
                  className="col-span-12 s1280:col-span-6"
                  desc="Throughout your medical journey in Turkey Azpo Health team will take care of everything—treatment, transfers, accommodation, and visas—so you can focus on your recovery. Your case is thoroughly assessed by top specialists and double-checked by Azpo's consultant doctors to guarantee the highest quality care. All you need to do is trust the process and leave it to Azpo Health."
                  header="360-degree Service"
                  index={3}
                />
                <ChooseUsCard
                  className="col-span-12 s1280:col-span-6"
                  desc="With 20 years of experience serving international clients and building strong partnerships, we have have a deep understanding of your needs and ensure seamless coordination. Our expert team and strong medical partnerships enable us to recommend the best solutions. Anticipating every detail, we stand by you with unwavering support before, during, and after your treatment"
                  header="Long-term Experience"
                  index={2}
                />
                <ChooseUsCard
                  className="col-span-12 s1280:col-span-6"
                  desc="Thanks to our years of experience and extensive network, we’re here to support you in top health tourism destinations in Turkey, including Istanbul, Antalya, Alanya, Ankara, Izmir, Samsun, and Cappadocia, as well as in several countries with well-established medical tourism. No matter where you choose to receive treatment and benefit from our services, our local representatives are ready to offer you the best service in that city."
                  header="Network"
                  index={4}
                />
                {/* <div className="col-span-12 s1280:col-span-6"></div>
                <div className="col-span-12 s1280:col-span-6"></div> */}
              </div>
            </div>
          </FillScrollLayout>
          {/* Video Distinctive Features */}
          <FillScrollLayout
            classLabel="hidden s1280:flex-cen s1280:mt-3 s1512:mt-2"
            className="mt-10 s1280:mt-0 s1280:h-[733px] s1512:h-[780px] s1600:h-[898px] s1728:h-[884px] s1920:h-[819px] s1280:px-[25px] s1280:pt-10 s1512:pt-16 s1512:-mt-4"
            order="second"
            title="Video Distinctive Features"
          >
            <div className="w-full z-[3]">
              <div className="flex items-center justify-between s1280:justify-end mb-10 s1280:mb-5">
                <div className="s1280:hidden">
                  <h2 className="font-semibold text-[20px] text-[#333333]">
                    Video experience
                  </h2>
                </div>
                <div>
                  <SeeAll
                    className="h-[40px] w-[89px] s1280:w-[174px] s1512:w-[170px] s1512:text-[18px] s1600:w-[194px] s1600:text-[20px] s1280:h-[54px] text-[14px] s1280:text-[16px]"
                    link="/"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 px-5 s390:px-8 sm:px-36 s412:px-10 gap-y-10 s1280:gap-y-0 s1280:px-0 s1280:gap-x-5 s1728:gap-x-12 s1920:gap-x-20">
                <DistinctiveCard
                  icon={dist1icon}
                  desc="Some quick example text to build on the card title and make up the bulk of the card's content. This card has even longer"
                  link="/"
                  service="Aesthetics"
                  title="Ali mosadegh"
                  video={dist1}
                />
                <DistinctiveCard
                  icon={dist2icon}
                  desc="Some quick example text to build on the card title and make up the bulk of the card's content."
                  link="/"
                  service="Eye Surgeries"
                  title="Rasul bey"
                  video={dist2}
                />
                <DistinctiveCard
                  icon={dist3icon}
                  desc="Some quick example text to build on the card title and make up the bulk of the card's content. This card has even longer content than the first to show that equal height action."
                  link="/"
                  service="Bariatric surgeries"
                  title="Parinaz"
                  video={dist3}
                />
                <DistinctiveCard
                  icon={dist4icon}
                  desc="Some quick example text to build on the card title and make up the bulk of the card's content. This card has even longer content than the first to show that equal height action."
                  link="/"
                  service="Bariatric surgeries"
                  title="Parinaz"
                  video={dist4}
                />
              </div>
            </div>
          </FillScrollLayout>
          {/* experience */}
          <FillScrollLayout
            title="Experience"
            order="third"
            classLabel="s1512:-mt-1 flex-cen s1280:mt-3 s1512:mt-2 s1600:mt-0"
            className="s1280:h-[385px] s1280:pt-40  s1280:-mt-6 s1512:mt-7 relative s1600:-mt-[70px] s1728:-mt-[60px] s1920:mt-[12px]"
          >
            <div className="s1280:hidden w-full h-full absolute s1280:top-5 left-0 z-[1]">
              <ImgFetcher src={exPhone} width={2000} />
            </div>
            <div className="hidden s1280:block w-full h-full absolute s1280:top-5 left-0 z-[1]">
              <ImgFetcher src={experienceIcon} width={2000} />
            </div>
            <div className="grid grid-cols-12 gap-y-10 s1280:-mt-5 s1280:gap-x-[61px] s1512:gap-x-[42px] s1600:gap-x-[85px] s1728:gap-x-[114px] s1920::gap-x-[175px] s1280:px-[25px] s1600:px-[20px] s1728:px-10 s1920:px-[44px] z-[3]">
              <ExperienceCard icon={noIcon} title="No upfront fees" />
              <ExperienceCard
                icon={pay}
                title="Payments directly at the clinic"
              />
              <ExperienceCard
                icon={freeconsul}
                title="Free video consultation with the Dr’s"
              />
            </div>
          </FillScrollLayout>
          {/* blog azpo */}
          <FillScrollLayout
            className="s1280:pt-20 s1280:h-[750px] s1280:-mt-6 mt-10"
            title="AZPO Blog"
            order="fourth"
            classLabel="hidden s1280:flex-cen ms-4 s1280:mt-4 s1512:mt-3 s1600:mt-0"
          >
            <div className="z-[3] s1280:pt-10">
              <div className="flex items-center justify-between s1280:justify-end mb-10">
                <div className="s1280:hidden">
                  <h2 className="font-semibold text-[20px] text-[#333333]">
                    AZPO Blog
                  </h2>
                </div>
                <div>
                  <SeeAll
                    className="h-[40px] w-[89px] s1280:w-[170px] s1512:w-[194px] s1512:text-[20px] s1600:w-[194px] s1600:text-[20px] s1280:h-[54px] text-[14px] s1280:text-[16px]"
                    link="/"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 px-4 s412:px-[27px] gap-y-5 s1280:gap-y-0 s1280:gap-x-5 s1600:gap-x-8 s1920:gap-x-14 z-[3] s1280:px-5 s1600:px-10">
                {blogList.map((blog) => {
                  return <BlogCard key={blog.blogId} {...blog} />;
                })}
              </div>
            </div>
          </FillScrollLayout>
          {/* how our platform works */}
          <div className="my-10 s1280:my-0">
            <div className="flex items-center justify-center s1280:justify-end s1280:-mt-5 s1512:mt-24 s1600:mt-20 mb-10">
              <h2 className="text-[#3D3D3D] font-semibold text-[20px] s1280:text-[36px] s1512:text-[40px] s1600:text-[48px]">
                How <span className="text-[#0CA5A5]">our platform</span> works
              </h2>
            </div>
            <div className="grid grid-cols-12 gap-y-[49px] s1280:gap-y-0 s1280:gap-x-[25px] s1512:gap-x-[33px] s1600:gap-x-[25px] s1728:gap-x-[53px]">
              <div className="order-3 s1280:order-1 col-span-12 s1280:col-span-4 s1512:pe-16 s1920:pe-20">
                <PlatformWorkForm />
              </div>
              <div className="order-2 col-span-12 s1280:col-span-4 s1512:col-span-3 flex flex-col items-center justify-end gap-y-5 px-2 s1280:px-0">
                <InfoCard
                  counter={1}
                  desc="Sign up and fill in your medical history securely. Setting up your profile this way would ensure that you stay up-to-date with your medical processes."
                  title="Create Your Profile"
                />
                <InfoCard
                  counter={2}
                  desc="Select from our range of services and book a consultation. Booking a consultation with HealNet is fairly simple and straight-forward."
                  title="Choose Your Service"
                />
                <InfoCard
                  counter={3}
                  desc="Have a virtual consultation with one of our certified specialists, or go for a physical visit to the doctor in case you opted for a physical check-up."
                  title="Meet Your Doctor"
                />
              </div>
              <div className="order-1 s1280:order-3 col-span-12 s1280:col-span-4 s1512:col-span-5 relative flex items-start justify-center s1512:justify-end">
                <div className="w-[213px] s1280:w-[405px]">
                  <ImgFetcher width={3000} height={3000} src={pltWork} />
                </div>
                <div className="s1280:px-5 absolute  bottom-0 s1280:bottom-12 s1512:bottom-6 left-0 s1512:-left-20 flex-cen w-full">
                  <div className="w-[325px] h-[50px] s1600:w-[360px] s1280:h-[78px] rounded-[40px] flex-left gap-x-2 bg-[#FFFFFF99] backdrop-blur-[10px] shadow-[-8px_22px_15px_-15px_#0000001A] px-2">
                    <div className="w-[40px] h-[40px] s1280:w-[64px] s1280:h-[64px] p-2 s1280:p-4 rounded-full plt-work-title-shadow">
                      <ImgFetcher src={doctorIcon} />
                    </div>
                    <div>
                      <p className="font-bold text-[14px] s1600:text-[16px] text-[#474744]">
                        Best Certified Team of Specialists
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header */}
    </>
  );
};
export default Home;
