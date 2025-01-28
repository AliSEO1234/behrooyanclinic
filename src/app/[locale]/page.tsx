import { FaPlay } from "react-icons/fa";
import homeBg from "@/assets/images/icons/home/home.jpg";
import ImgFetcher from "@/components/imgFetcher";
import pointtop from "@/assets/images/icons/home/point-tr.svg";
import pointbot from "@/assets/images/icons/home/point-bl.svg";
import squire from "@/assets/images/icons/home/squire.svg";
import star from "@/assets/images/icons/star.svg";
import ComplimentaryConsultationForm from "@/layoutes/complimentaryConsultationForm";
import point from "@/assets/images/icons/home/points.svg";
const Home = () => {
  return (
    <>
      {/* header */}
      <div className="grid grid-cols-12 gap-x-4 gap-y-10">
        <div className="col-span-6 s412:pt-5 s1280:col-span-6 s1512:col-span-4 s1280:pt-20 s1280:pe-20 s1512:pe-0 relative">
          {/* points */}
          <div className="hidden s1280:block w-72 h-72 absolute -bottom-6 left-40">
            <ImgFetcher src={point} />
          </div>
          {/* squire icon */}
          <div className="w-[60px] top-0 -right-12 h-[120px] s1280:w-[243px] s1280:h-[290px] absolute s1280:top-10 s1280:-right-40 z-[2]">
            <ImgFetcher
              className="object-contain filter drop-shadow-[inset_5px_10px_10px_rgb(0,0,0)]"
              src={squire}
            />
          </div>
          <div className="relative z-[3]">
            <h1 className="text-[20px] s1280:text-[48px] s1512:text-[60px] font-black text-[#00979A]">
              AZPO Health
            </h1>
            <p className="text-[14px] s1280:text-[40px] s1512:text-[38px] s1920:text-[45px] font-medium text-[#2A2A2A]">
              Trust, Care, and Wellness
            </p>
            <p className="text-[14px] s1280:text-[40px] s1512:text-[38px] s1920:text-[45px] font-medium text-[#2A2A2A]">
              Beyond Borders
            </p>
            <hr className="bg-[#9996A0] w-full mt-1 s1280:hidden" />
            <div className="flex-left mt-2">
              <p className="text-[14px] text-center s1280:text-start rounded-[20px] s1280:text-[20px] s1512:text-[16px] s1600:text-[18px] s1728:text-[20px] s1280:rounded-[40px] w-fit font-medium bg-[#DAEDE6] text-[#2A2A2A] s1280:py-1 px-3 shadow-[0px_4px_4px_0px_#00000040] relative z-[3]">
                Travel with confidence, heal with peace
              </p>
            </div>
            <div className="mt-10 hidden s1280:block">
              <div>
                <p className="font-medium text-[#2A2A2A] text-justify s1280:pe-10 s1600:text-[18px]">
                  Discover a life-changing medical journey with tailored care,
                  comprehensive services, and dedicated 24/7 support throughout
                  your experience!
                </p>
              </div>
              <div className="mt-5">
                <button className="flex-cen gap-x-2 text-[#00979A] s1512:text-[20px] font-semibold">
                  <span className="bg-[#DAEDE6] rounded-full flex-cen p-2">
                    <span className="bg-[#25A6A9] rounded-full flex-cen p-2 text-white">
                      <FaPlay className="size-4" />
                    </span>
                  </span>
                  <span>Play Azpo video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 s1280:col-span-6 s1512:col-span-5 z-1">
          <div className="s1280:h-[600px] relative rounded-[20px] overflow-hidden">
            <ImgFetcher src={homeBg} />
            <div className="w-6 h-6 s1280:w-[55px] s1280:h-[55px] absolute top-2 right-2 s1280:top-5 s1280:right-5">
              <ImgFetcher src={pointtop} />
            </div>
            <div className="w-6 h-6 s1280:w-[55px] s1280:h-[55px] absolute bottom-2 left-2 s1280:bottom-5 s1280:left-5">
              <ImgFetcher src={pointbot} />
            </div>
          </div>
        </div>
        <div className="col-span-12 s1280:hidden relative">
          {/* points */}
          <div className="w-48 h-48 absolute -top-10 left-0">
            <ImgFetcher src={point} />
          </div>
          <div>
            <p className="font-medium text-[#2A2A2A] text-center px-6 s412:px-0 text-[14px]">
              Discover a life-changing medical journey with tailored care,
              comprehensive services, and dedicated 24/7 support throughout your
              experience!
            </p>
          </div>
          <div className="mt-5 flex-cen">
            <button className="flex-cen gap-x-2 text-[#00979A] s1512:text-[20px] font-semibold">
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
        <div className="col-span-12 s1280:col-span-12 s1512:col-span-3 relative s1512:flex">
          {/* star */}
          <div className="w-[78px] h-[78px] absolute -top-8 left-0 z-[2] s1600:-top-5">
            <ImgFetcher src={star} />
          </div>
          <div className="relative z-[3] s1512:flex s1512:flex-col">
            <div className="mb-4 s1280:px-[27px] s1600:px-0 s1600:mt-5">
              <h2 className="text-center s1280:text-start text-[20px] s1280:text-[24px] s1728:text-[26px] font-bold s1512:text-center text-[#474744]">
                Complimentary Consultation
              </h2>
            </div>
            {/* form */}
            <div className="p-4 s412:px-[35px] s1280:px-[27px] bg-white rounded-[30px] shadow-[0px_4px_15px_0px_#0000001A] s1280:py-5  mt-auto">
              <ComplimentaryConsultationForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
