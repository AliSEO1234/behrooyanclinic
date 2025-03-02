import girlChar from "@/assets/images/clinics/girlChar.png";
import SearchClinic from "@/components/clinics/searchClinic";
import ImgFetcher from "@/components/imgFetcher";
const Clinics = () => {
  return (
    <>
      <div className="s1280:pt-48 s1280:pb-20 viewport-p">
        {/* headers */}
        <div className="flex s1280:flex-row items-center justify-between">
          <div className="s1280:w-[437px] flex-cen relative">
            <div className="s1280:w-[348px] s1280:h-[348px] bg-gradient-to-b from-[#25A6A9] to-[#0F4243] rounded-full backdrop-blur-[20px]"></div>
            <div className="s1280:w-[376px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]">
              <ImgFetcher src={girlChar} />
            </div>
            {/* circle */}
            <div className="s1280:w-[104px] s1280:h-[104px] rounded-full bg-gradient-to-b from-[#0F4243] to-[#25A6A9] absolute top-10 right-0 backdrop-blur-[20px] z-[1]"></div>
            <div className="s1280:w-[160px] s1280:h-[160px] rounded-full bg-gradient-to-b from-[#0F4243] to-[#25A6A9] absolute -bottom-14 left-0 backdrop-blur-[20px] z-[1]"></div>
          </div>
          <div className="s1280:w-[571px]">
            <div>
              <h1 className="text-[#25A6A9] font-semibold s1280:text-[30px] s1280:mb-4">
                Hospital&Clinics
              </h1>
              <p className="text-[#474744] font-medium s1280:text-[18px] s1280:leading-[33px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry
              </p>
            </div>
            <div>
              <SearchClinic />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Clinics;
