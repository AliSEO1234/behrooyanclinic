"use client";

import { useState, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useAppContext } from "@/contexts/app-context/app-context";
import { ImgType } from "@/types/about/galleryAbout";
import ImgFetcher from "../imgFetcher";

interface ImageCarouselProps {
  images: ImgType[];
}

const AboutCarouselGallery: React.FC<ImageCarouselProps> = ({ images }) => {
  const {aboutGalleryIndex} = useAppContext()
  const [currentIndex, setCurrentIndex] = useState<number>(()=>{
    const index = images.findIndex(img => img.key === aboutGalleryIndex);
    if(index === -1) return 0
    else return index
  });
  const thumbnailsRef = useRef<HTMLDivElement | null>(null);

  const handleNext = (): void => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    scrollToThumbnail(nextIndex);
  };

  const handlePrev = (): void => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    scrollToThumbnail(prevIndex);
  };

  const scrollToThumbnail = (index: number): void => {
    const thumbnails  = thumbnailsRef.current;
    if (thumbnails) {
      const selectedThumbnail = thumbnails.children[index] as HTMLElement;
      const offsetLeft = selectedThumbnail.offsetLeft;
      thumbnails.scrollTo({ left: offsetLeft - 50, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex justify-start s1280:justify-between items-start flex-col s1280:flex-row  gap-x-4">
      <div className="relative w-full h-[215px] s1280:h-[546px] s1512:h-[620px] overflow-hidden rounded-[20px] s1280:round40 mb-2">
        <ImgFetcher
          className="object-cover"
          src={images[currentIndex].src}
          width={2000}
        />
        <button
          onClick={handlePrev}
          className="hover:bg-white hover:color animation-global outline-none w-[22px] h-[22px] s1280:w-12 s1280:h-12 absolute left-4 top-1/2 transform -translate-y-1/2 border text-white border-white bg-[#0505057A] color rounded-full flex-cen hover:bg-opacity-75 animation-global"
        >
          <IoIosArrowForward className="size-3 me-[2px] rotate-180 s1280:size-7" />
        </button>
        <button
          onClick={handleNext}
          className="hover:bg-white hover:color animation-global outline-none w-[22px] h-[22px] s1280:w-12 s1280:h-12 absolute right-4 top-1/2 transform -translate-y-1/2 border text-white border-white bg-[#0505057A] color animation-global rounded-full hover:bg-opacity-75 flex-cen"
        >
          <IoIosArrowForward className="size-3 ms-[2p2] s1280:size-7" />
        </button>
      </div>
      <div
        ref={thumbnailsRef}
        className="w-full s1280:w-[150px] s1280:h-[546px] s1512:w-[200px] s1512:h-[620px] overflow-hidden flex overflow-x-scroll s1280:flex-col items-center justify-start gap-2 s1280:overflow-y-scroll s1512:overflow-x-scroll scrollbar-custom scrollbar-hide"
      >
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-[64px] h-[60px] s1280:w-[96px] s1280:h-[96px] s1512:w-[114px] s1512:h-[114px] flex-shrink-0 border-4 ${
              currentIndex === index ? "border-[#2E5A90]" : "border-transparent"
            } rounded-[10px] s1280:rounded-[20px] overflow-hidden`}
          >
            <ImgFetcher
              src={image.src}
              width={200}
              className="object-cover min-w-full max-w-full max-h-full min-h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default AboutCarouselGallery;
