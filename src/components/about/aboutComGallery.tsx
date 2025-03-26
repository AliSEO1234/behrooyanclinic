"use client";
import ph1 from "@/assets/images/about/gallery/p1.jpg";
import ph2 from "@/assets/images/about/gallery/p2.jpg";
import arman5 from "@/assets/images/about/gallery/p3.jpg";
import ph4 from "@/assets/images/about/gallery/p-4.jpg";
import ph5 from "@/assets/images/about/gallery/p-5.jpg";
import arman2 from "@/assets/images/about/gallery/armn (2).jpg";
import arman3 from "@/assets/images/about/gallery/armn (3).jpg";
import arman4 from "@/assets/images/about/gallery/armn (4).jpg";
import arman12 from "@/assets/images/about/gallery/armn (5).jpg";
import arman7 from "@/assets/images/about/gallery/armn (7).jpg";
import arman8 from "@/assets/images/about/gallery/armn (8).jpg";
import arman9 from "@/assets/images/about/gallery/armn (9).jpg";
import arman21 from "@/assets/images/about/gallery/armn (12).jpg";

import health1 from "@/assets/images/about/gallery/health (1).png";
import health2 from "@/assets/images/about/gallery/health (2).png";
import health3 from "@/assets/images/about/gallery/health (3).png";
import health4 from "@/assets/images/about/gallery/health (4).png";
import health5 from "@/assets/images/about/gallery/health (5).png";
import health6 from "@/assets/images/about/gallery/health (6).png";
import health7 from "@/assets/images/about/gallery/health (7).png";
import health8 from "@/assets/images/about/gallery/health (8).png";
import health9 from "@/assets/images/about/gallery/health (9).png";
import AboutGallery from "./aboutGallery";
import { useAppContext } from "@/contexts/app-context/app-context";
import { ImgType } from "@/types/about/galleryAbout";
import ImgFetcher from "../imgFetcher";

const AboutGalleryCom = () => {
  const imageList : ImgType[] = [
    {
      id: 25,
      src: ph1,
      key: "ph1",
    },
    {
      id: 26,
      src: ph2,
      key: "ph2",
    },
    {
      id: 27,
      src: arman3,
      key: "ph3",
    },
    {
      id: 28,
      src: ph4,
      key: "ph4",
    },
    {
      id: 29,
      src: ph5,
      key: "ph5",
    },
    { id: 0, key: "arman5", src: arman5 },
    { id: 1, key: "arman9", src: arman9 },
    { id: 2, key: "arman16", src: arman21 },
    { id: 3, key: "arman2", src: arman2 },
    { id: 4, key: "arman3", src: arman3 },
    { id: 5, key: "arman4", src: arman4 },
    { id: 7, key: "arman7", src: arman7 },
    { id: 8, key: "arman8", src: arman8 },
    { id: 11, key: "arman12", src: arman12 },

    { id: 12, key: "health1", src: health1 },
    { id: 13, key: "health2", src: health2 },
    { id: 14, key: "health3", src: health3 },
    { id: 15, key: "health4", src: health4 },
    { id: 16, key: "health5", src: health5 },
    { id: 17, key: "health6", src: health6 },
    { id: 18, key: "health7", src: health7 },
    { id: 19, key: "health8", src: health8 },
    { id: 20, key: "health9", src: health9 },
  ];
  const { setAboutGallery, setAboutGalleryIndex } = useAppContext();
  return (
    <>
      {/* gallery */}
      <AboutGallery images={imageList} />
      <div className="w-full grid grid-cols-12 s1280:gap-x-4 s1280:px-10 z-[3]">
        <div className="col-span-12 s1280:col-span-6 grid grid-cols-4 grid-rows-3 gap-4">
          <div
            onClick={() => {
              setAboutGalleryIndex("ph4");
              setAboutGallery((val) => !val);
            }}
            className="cursor-pointer col-span-2 row-span-2 rounded-[20px] overflow-hidden relative hover:shadow-[0px_4px_4px_#00000040] anm"
          >
            {/* <div className="absolute top-0 left-0 w-full h-full flex bg-gradient-to-t from-[#1B3452] to-[#00000000]">
                  <p className="font-medium text-white line-clamp-3 mt-auto px-2 mb-2 s1280:px-4 s1280:mb-4 text-[12px] s1280:text-[16px]"></p>
                </div> */}

            <ImgFetcher
              width={2000}
              src={ph4}
              className="object-cover hover:scale-105 anm"
            />
          </div>
          <div
            onClick={() => {
              setAboutGalleryIndex("ph5");
              setAboutGallery((val) => !val);
            }}
            className="cursor-pointer col-span-2 row-span-1 rounded-[20px] overflow-hidden relative hover:shadow-[0px_4px_4px_#00000040] anm"
          >
            {/* <div className="absolute top-0 left-0 w-full h-full flex bg-gradient-to-t from-[#1B3452] to-[#00000000]">
                  <p className="font-medium text-white line-clamp-3 mt-auto px-2 mb-2 s1280:px-4 s1280:mb-4 text-[12px] s1280:text-[16px]"></p>
                </div> */}
            <ImgFetcher
              width={2000}
              src={ph5}
              className="object-cover hover:scale-105 anm"
            />
          </div>
          <div
            onClick={() => {
              setAboutGalleryIndex("arman12");
              setAboutGallery((val) => !val);
            }}
            className="col-span-2 row-span-1 rounded-[20px] overflow-hidden relative hover:shadow-[0px_4px_4px_#00000040] anm"
          >
            {/* <div className="absolute top-0 left-0 w-full h-full flex bg-gradient-to-t from-[#1B3452] to-[#00000000]">
                  <p className="font-medium text-white line-clamp-3 mt-auto px-2 mb-2 s1280:px-4 s1280:mb-4 text-[12px] s1280:text-[16px]"></p>
                </div> */}
            <ImgFetcher
              width={2000}
              src={arman12}
              className="object-cover hover:scale-105 anm"
            />
          </div>
        </div>
        <div className="cursor-pointer col-span-12 s1280:col-span-6 grid grid-cols-4 grid-rows-3 gap-4 -mt-32 s1280:mt-0">
          <div
            onClick={() => {
              setAboutGalleryIndex("ph3");
              setAboutGallery((val) => !val);
            }}
            className="col-span-2 row-span-2 rounded-[20px] overflow-hidden relative hover:shadow-[0px_4px_4px_#00000040] anm"
          >
            {/* <div className="absolute top-0 left-0 w-full h-full flex bg-gradient-to-t from-[#1B3452] to-[#00000000]">
                  <p className="font-medium text-white line-clamp-3 mt-auto px-2 mb-2 s1280:px-4 s1280:mb-4 text-[12px] s1280:text-[16px]"></p>
                </div> */}
            <ImgFetcher
              width={2000}
              src={arman3}
              className="object-cover hover:scale-105 anm"
            />
          </div>
          <div
            onClick={() => {
              setAboutGalleryIndex("ph1");
              setAboutGallery((val) => !val);
            }}
            className="cursor-pointer col-span-2 row-span-1 rounded-[20px] overflow-hidden relative hover:shadow-[0px_4px_4px_#00000040] anm"
          >
            {/* <div className="absolute top-0 left-0 w-full h-full flex bg-gradient-to-t from-[#1B3452] to-[#00000000]">
                  <p className="font-medium text-white line-clamp-3 mt-auto px-2 mb-2 s1280:px-4 s1280:mb-4 text-[12px] s1280:text-[16px]"></p>
                </div> */}
            <ImgFetcher
              width={2000}
              src={ph1}
              className="object-cover hover:scale-105 anm"
            />
          </div>
          <div
            onClick={() => {
              setAboutGalleryIndex("ph2");
              setAboutGallery((val) => !val);
            }}
            className="cursor-pointer col-span-2 row-span-1 rounded-[20px] overflow-hidden relative hover:shadow-[0px_4px_4px_#00000040] anm"
          >
            {/* <div className="absolute top-0 left-0 w-full h-full flex bg-gradient-to-t from-[#1B3452] to-[#00000000]">
                  <p className="font-medium text-white line-clamp-3 mt-auto px-2 mb-2 s1280:px-4 s1280:mb-4 text-[12px] s1280:text-[16px]"></p>
                </div> */}
            <ImgFetcher
              width={2000}
              src={ph2}
              className="object-cover hover:scale-105 anm"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutGalleryCom;
