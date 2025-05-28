import { BlogCardType } from "@/types/blog/blogType";
import ImgFetcher from "../imgFetcher";

const BlogCard = ({ blogDate, desc, img, title, className }: BlogCardType) => {
  return (
    <article
      className={`${
        className ? className : ""
      } home__blog--card-container flex flex-col col-span-12 s1280:col-span-3 rounded-t-[500px] py-4 rounded-b-[80px] border-t-[5px] border-[#86D1AB] shadow-[0_4px_15px_0_#0000001A] bg-white`}
    >
      <div className="flex-cen mb-3">
        <div className="home__blog--image-container w-[274px] h-[274px] s390:w-[295px] s390:h-[295px] s1280:w-[223px] s1280:h-[223px] s1512:w-[274px] s1512:h-[274px] s1600:w-[278px] s1600:h-[278px] s1728:w-[295px] s1728:h-[295px]  rounded-full overflow-hidden">
          <ImgFetcher
            className="object-cover"
            src={img}
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="px-2 mb-2">
        <h3 className="text-[#00979A] px-3 s1280:px-2 font-medium text-[20px] s1280:text-[14px] s1512:text-[20px] text-center mb-4 line-clamp-1">
          {title}
        </h3>
        <p className="line-clamp-3 s1600:px-4 font-normal s1280:text-[14px] s1512:text-[16px] text-[#474744] text-center mb-4">
          {desc}
        </p>
        <p className="text-center font-normal text-[14px] s1280:text-[12px] s1512:text-[14px] text-[#474744]">
          {blogDate}
        </p>
      </div>
      <div className="flex-cen mt-auto">
        <button className="bg-[#86D1AB] text-[18px] s1280:text-[18px] font-bold text-center w-[173px] h-[44px] rounded-[40px] text-white">
          Read More
        </button>
      </div>
    </article>
  );
};
export default BlogCard;
