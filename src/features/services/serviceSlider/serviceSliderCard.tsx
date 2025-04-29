import ImgFetcher from "@/components/imgFetcher";
import { ServiceSliderCardType } from "@/types/services/serviceSlider";

const ServiceSliderCard = ({
  className,
  img,
  imgStyle,
  changeImageHandler,
  keyImg,
}: ServiceSliderCardType) => {
  return (
    <button
      disabled={keyImg === "none"}
      onMouseEnter={() => changeImageHandler(keyImg)}
      onMouseLeave={() => changeImageHandler("")}
      className={`${
        className ? className : ""
      } ${keyImg === "none" ? "pointer-events-none" : ""} cursor-pointer absolute shadow-slider-card hover:shadow-slider-card-hover w-[52px] h-[52px] s1280:w-[90px] s1280:h-[90px] s1512:w-[116px] s1512:h-[116px] s1600:w-[135px] s1600:h-[135px] rounded-full p-1 s1280:p-3 z-[2] anm`}
    >
      <ImgFetcher
        width={800}
        height={800}
        className={imgStyle ? imgStyle : ""}
        src={img}
      />
    </button>
  );
};
export default ServiceSliderCard;
