import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PrevNextBtn = () => {
  return (
    <div className="flex items-center justify-end s1280:justify-start gap-x-4 text-white">
      <button className="w-[35px] h-[35px] s1280:w-[45px] s1280:h-[45px] bg-[#00979A] rounded-full flex-cen">
        <IoIosArrowBack className="size-5" />
      </button>
      <button className="w-[35px] h-[35px] s1280:w-[45px] s1280:h-[45px] bg-[#00979A] rounded-full flex-cen">
        <IoIosArrowForward className="size-5" />
      </button>
    </div>
  );
};
export default PrevNextBtn;
