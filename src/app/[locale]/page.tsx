import ImgFetcher from "@/components/imgFetcher";
import HelpingIntersectionObserver from "@/components/scripts/helping-intersection-observer";
import InfoIntersectionObserver from "@/components/scripts/info-intersection-observer";
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
import chooseUs from "@/assets/images/chooseus.jpg";
import ChooseUsCard from "@/components/chooseUs/chooseUsCard";
import SeeAll from "@/components/seeAll";
import DistinctiveCard from "@/components/distinctive/distinctiveCard";
import ExperienceCard from "@/components/experience/experienceCard";
import noIcon from "@/assets/images/icons/experience/noicon.svg";
import freeconsul from "@/assets/images/icons/experience/freeconsul.svg";
import pay from "@/assets/images/icons/experience/pay.svg";
import experienceIcon from "@/assets/images/icons/home/experience.svg";
import exPhone from "@/assets/images/icons/home/exPhone.svg";
import BlogCard from "@/components/blogs/blogCard";
import { blogList } from "@/staticData/blogList";
import PlatformWorkForm from "@/features/platformWork/platformWorkForm";
import InfoCard from "@/features/platformWork/infoCard";
import pltWork from "@/assets/images/workPlatform.png";
import doctorIcon from "@/assets/images/doctorPltWork.svg";
// import ring from "@/assets/images/ring.svg";
import phone from "@/assets/images/phone.svg";
import apoint from "@/assets/images/apointment.svg";
import online from "@/assets/images/online.svg";
import VideoPlayerCom from "@/features/videoPlayer/videoPlayer";
import { FeedbackCardType } from "@/types/feedback/feebackLayout";
import { patientContents } from "@/staticData/patientContent";
import { FaPlay } from "react-icons/fa6";
import ComplimentaryConsultationForm from "@/features/complimentaryConsultationForm";
import ScrollServices from "@/components/services/scrollServices";
import CircleAnimate from "@/components/circleAnimate";
import LeadForm from "@/components/leadForm";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
const Home = async ({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}) => {
  const { locale } = await params;
  const feedBackOne: FeedbackCardType[] = [
    {
      fullName: locale === "ru" ? "" : "Mahour afshar",
      rateCount: 5,
      desc:
        locale === "ru"
          ? ""
          : "I'm really really grateful to this amazing team. I must admit that although we'd gone through every stage of the operation in a detailed manner beforehand, I was still nervous. However, they changed my mind by how meticulous they were about everything  and alleviated the situation the moment we met.",
    },
    {
      fullName: locale === "ru" ? "" : "Sheena ahangar",
      rateCount: 5,
      desc:
        locale === "ru"
          ? ""
          : "İ came to this center from Italy and used the hair servicesTheir team was very professional and friendly, it was very satisfying Thanks azpo health🙏",
    },
    {
      fullName: locale === "ru" ? "" : "Mozhgaan panahi",
      rateCount: 5,
      desc:
        locale === "ru"
          ? ""
          : "One of the best experiences I’ve ever had in health tourism in turkey, thanks to the professional staff .Recommend it to everyone",
    },
    {
      fullName: locale === "ru" ? "" : "Saina Tayebi",
      rateCount: 5,
      desc:
        locale === "ru"
          ? ""
          : "Very friendly coordinators and good prices they have. Highly recommended.",
    },
    {
      fullName: locale === "ru" ? "" : "Александр Степин",
      rateCount: 5,
      desc:
        locale === "ru"
          ? ""
          : "A wonderful clinic with attentive and sensitive specialists. I had a transplant six months ago, and I can already see the results. Thank you very much for your work!",
    },
  ];
  const feedBackTwo: FeedbackCardType[] = [
    {
      fullName: locale === "ru" ? "" : "Irina Kulagina",
      rateCount: 5,
      desc:
        locale === "ru"
          ? ""
          : "Professionals in their field. They work only with trusted clinics and doctors.",
    },
    {
      fullName: locale === "ru" ? "" : "Mehmet Nastrullah",
      rateCount: 5,
      desc:
        locale === "ru"
          ? ""
          : "İ came to this center from Italy and used the hair servicesTheir team was very professional and friendly, it was very satisfying Thanks azpo health🙏",
    },
    // {
    //   fullName: locale === "ru" ? "" : "Mozhgaan panahi",
    //   rateCount: 5,
    //   desc:
    //     locale === "ru"
    //       ? ""
    //       : "I contacted them for a hair transplant. They are very attentive both before and after the treatment.",
    // },
    {
      fullName: locale === "ru" ? "" : "Aleysa Mahmutçepoğlu",
      rateCount: 5,
      desc: locale === "ru" ? "" : "A perfect clinic, amazing in every way ❤️",
    },
    {
      fullName: locale === "ru" ? "" : "Erhan Günal",
      rateCount: 5,
      desc: locale === "ru" ? "" : "Thank you for your attention and care ❤️",
    },
  ];
  return (
    <>
      <div className="bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF12] via-4% to-[#FCFCFC]">
        <div className="viewport-p relative s1280:h-screen pt-24 s1280:pt-28 s1512:pt-28 flex flex-col items-center">
          <VideoPlayerCom />
          <div className="flex flex-col items-center justify-center z-[3] relative mb-6 s1280:mb-0 w-fit p-3 rounded-[38px] bg-gradient-to-r from-[#FFFFFF6E] to-[#25A6A945]">
            <h1 className="font-black text-[24px] s1280:text-[32px] text-white h1-homepage-shadow">
              AZPO Health
            </h1>
            <p className="font-medium text-[18px] s1280:text-[24px] text-white">
              Trust, Care, and Wellness Beyond Borders
            </p>
            <div className="mt-5">
              <a
                href="#video-service"
                className="flex-cen w-fit gap-x-2 text-white s1280:text-[18px] s1512:text-[20px] font-semibold"
              >
                <span className="bg-[#DAEDE6] rounded-full flex-cen p-1 w-10 h-10">
                  <span className="w-full h-full bg-[#25A6A9] hover:bg-[#0c797b] anm rounded-full flex-cen text-white">
                    <FaPlay className="size-4 ms-[2px]" />
                  </span>
                </span>
                <span>What We Do?</span>
              </a>
            </div>
          </div>
          <ComplimentaryConsultationForm />
        </div>
        <div className="viewport-p">
          <CircleAnimate position="left" xValue={80} topValue={200} />
          <CircleAnimate position="right" xValue={900} topValue={1200} />
          <CircleAnimate position="left" xValue={80} topValue={2200} />
          <CircleAnimate position="right" xValue={900} topValue={3200} />
          <CircleAnimate position="right" xValue={80} topValue={4200} />
          {/* Specialized Treatments */}
          <div className="mb-10 s1280:mb-[60px] z-[2] relative">
            <div className="flex-bet mb-5 s1280:mb-10">
              <div>
                <h2 className="font-semibold text-[20px] s1280:text-[36px] s1512:text-[40px] s1728:text-[48px] treat-shadow">
                  Treatments
                </h2>
              </div>
              {/* <div className="flex-right">
                <SeeAll
                  className="h-[40px] w-[89px] s1280:w-[170px] s1280:h-[54px] text-[14px] s1280:text-[18px]"
                  link={`/${locale}/medicaltourism`}
                />
              </div> */}
            </div>
            {/* show service */}
            <ScrollServices />
          </div>
          {/* Watch Your Health Journey */}
          <div className="mb-10 s1280:mb-[60px] relative z-[2]">
            <div className="flex-bet mb-2 s1280:mb-10">
              <hr className="border-[1px] border-[#333333] border-dashed w-[4%] s375:w-[7%] s1280:w-[32%] s1600:w-[29%] s1728:w-[30%] s1920:w-[32%]" />
              <h2 className="flex-cen gap-x-1 font-semibold text-[20px] s1280:text-[24px] s1512:text-[30px] s1600:text-[40px]">
                <span className="w-[48px] h-[34px] s1280:w-[65px] s1280:h-[46px]">
                  <ImgFetcher src={videoIcon} />
                </span>
                <span>Watch Your Health Journey</span>{" "}
              </h2>
              <hr className="border-[1px] border-[#333333] border-dashed w-[4%] s375:w-[7%] s1280:w-[32%] s1600:w-[29%] s1728:w-[30%] s1920:w-[32%]" />
            </div>
            <div className="flex-cen relative">
              <VideoPlayer
                className="w-[300px] h-[170px] s1280:w-[916px] s1280:h-[501px] object-cover"
                toolsbarStyle="h-[38px] s1280:h-[57px]"
                src={
                  locale === "ru"
                    ? "https://azpo.com/api/files/property-videos/site_health.mp4"
                    : "https://www.youtube.com/watch?v=VEqbI7eBgJY"
                }
              />
            </div>
          </div>
          {/* Your Treatment Roadmap */}
          <div className="mb-10 s1280:mb-[80px] relative z-[2]">
            {/* <RoadmapIntersectionObserver /> */}
            <div className="mb-2 s1280:mb-10">
              <div className="flex-bet mb-4">
                <hr className="border-[1px] border-[#333333] border-dashed w-[6%] s375:w-[9%] s390:w-[10%] s1280:w-[33%] s1600:w-[30%] s1728:w-[31%] s1920:w-[33%]" />
                <h2 className="flex-cen font-semibold text-[20px] s1280:text-[24px] s1512:text-[30px]  s1600:text-[40px]">
                  <span className="w-[42px] h-[42px] s1280:w-[70px] s1280:h-[53px]">
                    <ImgFetcher src={medalIcon} />
                  </span>
                  <span>Your Treatment Roadmap</span>
                </h2>
                <hr className="border-[1px] border-[#333333] border-dashed w-[6%] s375:w-[9%] s390:w-[10%] s1280:w-[33%] s1600:w-[30%] s1728:w-[31%] s1920:w-[33%]" />
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
          <div className="mb-10 s1280:mb-[60px] bg-white shadow-[0_4px_15px_0_#0000001A] rounded-[40px] grid grid-cols-12 pt-4 pb-8 s1280:p-[27px] s1728:px-[30px] s1920:px-[70px] s1920:py-[38px] s1280:gap-x-[36px] s1512:gap-x-[42px] s1600:gap-x-[48px] relative z-[2]">
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
              {/* <div className="helping__consultation-container flex-cen s1280:block w-full s1280:w-fit absolute -bottom-6 s1280:bottom-10 s1280:right-0 s1512:top-16 s1512:left-0 s1600:top-24 s1728:top-16">
                <Link
                  href="tel:+90 539 332 32 30"
                  className="w-[266px] h-[55px] s1280:h-[86px] s1280:w-[316px] flex-left ps-2 s1280:ps-4 gap-x-2 rounded-[40px] bg-[#FFFFFF99] shadow-[-8px_22px_15px_-15px_#0000001A] backdrop-blur-[10px]"
                >
                  <div>
                    <div className="flex-cen w-[45px] h-[45px] s1280:w-[64px] s1280:h-[64px] rounded-full help-shadow text-[#00979A] p-3 s1280:p-4">
                      <ImgFetcher src={ring} />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-[#474744]">
                      Zero-Cost Consultation
                    </p>
                  </div>
                </Link>
              </div> */}
            </div>
            <div className="col-span-12 s1280:col-span-6 flex flex-col mt-16 s1280:mt-0 px-2 s412:px-4 s1600:px-0">
              <div className="mb-10 s1280:mb-2">
                <h3 className="text-[14px] s390:text-[15px] s1280:text-[20px] s1512:text-[24px] s1600:text-[28px] s1728:text-[30px] font-semibold text-[#00979A] mb-5">
                  HELPING PATIENTS FROM AROUND THE GLOBE!!
                </h3>
                <h4 className="font-semibold text-[20px] s1280:text-[24px] s1512:text-[30px] s1728:text-[40px] mb-1">
                  Our <span className="text-[#00979A]">Mission</span>
                </h4>
                <p className="text-[#474744] font-medium text-[14px] s1512:text-[16px] s1600:text-[18px] s1728:text-[20px] s1512:leading-[30px]">
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
          <div className="mb-10 s1280:mb-[60px] relative z-[2]">
            <div className="mb-10">
              <h2 className="[text-shadow:_0_4px_4px_#00000040] text-center text-[#474744] font-semibold text-[20px] s1280:text-[24px] s1512:text-[30px] s1600:text-[40px] s1728:text-[48px]">
                We Appreciate Your Thoughts
              </h2>
            </div>
            <div>
              <FeedBackLayout feedbackList={feedBackOne} align="right" />
              <FeedBackLayout feedbackList={feedBackTwo} align="left" />
            </div>
          </div>
          {/* information about Azpo Health */}
          <div className="mb-10 s1280:mb-[200px] relative z-[2]">
            <div className="flex-bet mb-[10px] s1280:mb-16">
              <hr className="w-[42%] s1280:w-[44%] s1512:w-[45%] s1600:w-[46%] h-0 border-[1px] border-dashed border-[#333333]" />
              <div className="w-[42px] h-[42px] s1280:w-[100px] s1280:h-[100px]">
                <ImgFetcher src={heart} />
              </div>
              <hr className="w-[42%] s1280:w-[44%] s1512:w-[45%] s1600:w-[46%] h-0 border-[1px] border-dashed border-[#333333]" />
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
            <div className="home__info-container--bottom hidden s1280:flex items-center s1280:justify-between">
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
          <LeadForm className="s1280:mb-20" />
          {/* Why choose us? */}
          <FillScrollLayout
            className="s1280:h-[852px] s1512:h-[780px] s1600:h-[898px] s1728:h-[884px] s1920:h-[819px] s1280:px-[25px] s1280:pt-28 s1512:pt-24 s1600:pt-20 s1728:pt-32"
            order="first"
            classLabel="flex-cen s1280:mt-2 s1512:mt-1 s1600:mt-4 s1728:mt-0"
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
                {/* <div className="hidden s1280:block s1280:w-[307px] s1280:h-[290px] absolute -bottom-14 -right-28">
                  <ImgFetcher src={chooseIcon} width={800} />
                </div> */}
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
            classLabel="hidden s1280:flex-cen s1280:mt-3 s1512:mt-2 s1600:mt-5 s1728:mt-2 s1920:mt-1"
            className="mt-10 s1280:h-[340px] s1512:h-[380px] s1728:h-[471px] s1728:pt-20 s1920:h-[453px] s1280:ps-[25px] s1280:pt-14 s1280:-mt-40 s1512:-mt-[150px] s1600:-mt-52 s1728:-mt-36 s1920:-mt-24"
            order="second"
            title="Patients Speak"
          >
            <div className="w-full z-[3]">
              <div className="flex items-center justify-between s1280:justify-end mb-10 s1280:mb-5">
                <div className="s1280:hidden">
                  <h2 className="font-semibold text-[20px] text-[#333333] s1280:hidden">
                    Patients Speak
                  </h2>
                </div>
                <div className="s1280:hidden">
                  <Link
                    href={`/${locale}/medicaltourism`}
                    className="flex-cen gap-x-1 font-normal text-[14px] text-[#00979A]"
                  >
                    <span>See All</span>
                    <span>
                      <IoIosArrowForward className="size-4" />
                    </span>
                  </Link>
                  {/* <SeeAll
                    className="h-[40px] w-[89px] s1280:w-[170px] s1600:w-[194px] s1600:text-[20px] s1280:h-[54px] text-[14px] s1280:text-[18px]"
                    link="/"
                  /> */}
                </div>
              </div>
              <div className="flex items-center justify-start flex-nowrap overflow-x-scroll scroll-hide s1280:overflow-x-hidden s1280:flex-row gap-x-3 s1512:gap-x-8 s1920:gap-x-10">
                {patientContents.map(
                  ({ desc, header, service, serviceIcon, video }, index) => {
                    return (
                      <DistinctiveCard
                        icon={serviceIcon}
                        service={service}
                        title={header}
                        video={video}
                        desc={desc}
                        key={index}
                      />
                    );
                  }
                )}
                <div className="s1512:ms-5 hidden s1280:block">
                  <SeeAll
                    className="h-[40px] w-[89px] s1280:w-[170px] s1600:w-[194px] s1600:text-[20px] s1280:h-[54px] text-[14px] s1280:text-[18px]"
                    link={`/${locale}/medicaltourism`}
                  />
                </div>
              </div>
            </div>
          </FillScrollLayout>
          {/* experience */}
          <FillScrollLayout
            title="Distinctive Features"
            order="third"
            classLabel=" flex-cen s1280:mt-2 s1512:mt-1 s1600:mt-4 s1728:mt-0"
            className="s1280:h-[385px] s1280:pt-40 s1280:mt-0 relative"
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
            className="s1280:pt-14 s1280:h-[750px] s1280:-mt-9 mt-10 s1512:-mt-10 s1600:-mt-9 s1728:-mt-6 s1920:-mt-10"
            title="AZPO Blog"
            order="fourth"
            classLabel="hidden s1280:flex-cen ms-4 s1280:mt-2 s1512:mt-2 s1600:mt-5 s1728:mt-1"
          >
            <div className="z-[3]">
              <div className="flex items-center justify-between s1280:justify-end mb-10 s1280:mb-5">
                <div className="s1280:hidden">
                  <h2 className="font-semibold text-[20px] text-[#333333]">
                    AZPO Blog
                  </h2>
                </div>
                <div>
                  <SeeAll
                    className="h-[40px] w-[89px] s1280:w-[170px] s1600:w-[194px] s1600:text-[20px] s1280:h-[54px] text-[14px] s1280:text-[18px]"
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
            <div className="flex items-center justify-center s1280:justify-end s1280:-mt-[93px] s1512:-mt-4 s1600:mt-0 s1728:mt-4 s1920:mt-8 mb-10">
              <h2 className="text-[#3D3D3D] font-semibold text-[20px] s1280:text-[28px] s1512:text-[30px] s1728:text-[48px]">
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
    </>
  );
};
export default Home;
