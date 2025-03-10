"use client";
import ph1 from "@/assets/images/about/gallery/p1.jpeg";
import ph2 from "@/assets/images/about/gallery/p2.jpg";
import arman5 from "@/assets/images/about/gallery/p3.jpg";
import ph4 from "@/assets/images/about/gallery/p4.jpeg";
import ph5 from "@/assets/images/about/gallery/p5.jpeg";
import ph6 from "@/assets/images/about/gallery/p6.jpeg";

import arman1 from "@/assets/images/about/gallery/armn (1).jpg";
import arman2 from "@/assets/images/about/gallery/armn (2).jpg";
import arman3 from "@/assets/images/about/gallery/armn (3).jpg";
import arman4 from "@/assets/images/about/gallery/armn (4).jpg";
import arman12 from "@/assets/images/about/gallery/armn (5).jpg";
import arman6 from "@/assets/images/about/gallery/armn (6).jpg";
import arman7 from "@/assets/images/about/gallery/armn (7).jpg";
import arman8 from "@/assets/images/about/gallery/armn (8).jpg";
import arman9 from "@/assets/images/about/gallery/armn (9).jpg";
import arman10 from "@/assets/images/about/gallery/armn (10).jpg";
import arman11 from "@/assets/images/about/gallery/armn (11).jpg";
import arman21 from "@/assets/images/about/gallery/armn (12).jpg";
import arman13 from "@/assets/images/about/gallery/armn (13).jpg";
import arman14 from "@/assets/images/about/gallery/armn (14).jpg";
import arman15 from "@/assets/images/about/gallery/armn (15).jpg";
import arman16 from "@/assets/images/about/gallery/armn (16).jpg";
import arman17 from "@/assets/images/about/gallery/armn (17).jpg";
import arman18 from "@/assets/images/about/gallery/armn (18).jpg";
import arman19 from "@/assets/images/about/gallery/armn (19).jpg";
import arman20 from "@/assets/images/about/gallery/armn (20).jpg";
import ph3 from "@/assets/images/about/gallery/armn (21).jpg";
import arman22 from "@/assets/images/about/gallery/armn (22).jpg";
import arman23 from "@/assets/images/about/gallery/armn (23).jpg";
import arman24 from "@/assets/images/about/gallery/armn (24).jpg";
import arman25 from "@/assets/images/about/gallery/armn (25).jpg";

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
      src: ph3,
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
    {
      id: 30,
      src: ph6,
      key: "ph6",
      
    },
    { id: 0, key: "arman5", src: arman5 },
    { id: 1, key: "arman9", src: arman9 },
    { id: 2, key: "arman16", src: arman16 },
    { id: 3, key: "arman2", src: arman2 },
    { id: 4, key: "arman3", src: arman3 },
    { id: 5, key: "arman4", src: arman4 },
    { id: 6, key: "arman6", src: arman6 },
    { id: 7, key: "arman7", src: arman7 },
    { id: 8, key: "arman8", src: arman8 },
    { id: 9, key: "arman10", src: arman10 },
    { id: 10, key: "arman11", src: arman11 },
    { id: 11, key: "arman12", src: arman12 },
    { id: 12, key: "arman1", src: arman1 },
    { id: 13, key: "arman13", src: arman13 },
    { id: 14, key: "arman14", src: arman14 },
    { id: 15, key: "arman15", src: arman15 },
    { id: 16, key: "arman17", src: arman17 },
    { id: 17, key: "arman18", src: arman18 },
    { id: 18, key: "arman19", src: arman19 },
    { id: 19, key: "arman20", src: arman20 },
    { id: 20, key: "arman21", src: arman21 },
    { id: 21, key: "arman22", src: arman22 },
    { id: 22, key: "arman23", src: arman23 },
    { id: 23, key: "arman24", src: arman24 },
    { id: 24, key: "arman25", src: arman25 },
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
              setAboutGalleryIndex("ph6");
              setAboutGallery((val) => !val);
            }}
            className="col-span-2 row-span-1 rounded-[20px] overflow-hidden relative hover:shadow-[0px_4px_4px_#00000040] anm"
          >
            {/* <div className="absolute top-0 left-0 w-full h-full flex bg-gradient-to-t from-[#1B3452] to-[#00000000]">
                  <p className="font-medium text-white line-clamp-3 mt-auto px-2 mb-2 s1280:px-4 s1280:mb-4 text-[12px] s1280:text-[16px]"></p>
                </div> */}
            <ImgFetcher
              width={2000}
              src={ph6}
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
              src={ph3}
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
