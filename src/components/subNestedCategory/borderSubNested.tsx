import { BorderSubNestedType } from "@/types/borderSubNestedType";
import syring from "@/assets/images/syring.svg";
import ImgFetcher from "../imgFetcher";
const BorderSubNested = ({ className, label , labelStyle }: BorderSubNestedType) => {
  return (
    <div className="flex flex-col items-center gap-y-2 w-fit mx-auto">
      <div>
        <p className={`text-center font-semibold mb-2 ${labelStyle || null}`}>{label}</p>
      </div>
      <div
        className={`${
          className || null
        } bg-[#3EBB9A33] h-[2px] relative`}
      >
        <hr className="bg-[#00979A] w-3/5 mx-auto h-full" />
        <div className="w-6 h-6 s1512:w-7 s1512:h-7 s1728:w-9 s1728:h-9 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ImgFetcher src={syring} />
        </div>
      </div>
    </div>
  );
};
export default BorderSubNested;
