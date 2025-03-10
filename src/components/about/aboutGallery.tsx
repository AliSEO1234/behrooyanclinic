"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAppContext } from "@/contexts/app-context/app-context";
import { GalleryAboutType } from "@/types/about/galleryAbout";
import AboutCarouselGallery from "./aboutCarousel";

const AboutGallery = ({ images }: GalleryAboutType) => {
  const { aboutGallery, setAboutGallery, imgsAbout } = useAppContext();
  return (
    <Dialog open={aboutGallery} onOpenChange={setAboutGallery}>
      <DialogContent className="z-[901] h-[60vh] s1280:h-[656px] s1512:h-[710px] w-[90vw] min-w-[90vw] sm:w-[60vw] sm:min-w-[60vw] s1280:w-[1100px] s1280:min-w-[1100px] s1512:w-[1329px] s1512:min-w-[1329px] s1728:w-[1444px] s1728:min-w-[1444px] s1920:w-[60vw] s1920:min-w-[60vw] bg-white px-0 rounded-[20px] s1280:round40">
        <DialogHeader className="hidden">
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="py-2 pt-10 s1280:pt-[35px] s1280:py-2 px-2 s1280:px-8 s1512:pt-6 s1728:px-10  overflow-y-scroll s1280:overflow-y-hidden scrollbar-custom">
          <AboutCarouselGallery
            images={images ? images : imgsAbout.length > 0 ? imgsAbout : []}
          />
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default AboutGallery;
