"use client";
import { useAppContext } from "@/contexts/app-context/app-context";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { DialogFooterType } from "@/types/footer/dialogFooter";
import ImgFetcher from "../imgFetcher";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import { useEffect, useState } from "react";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

const DialogFooterCom = ({ photos }: DialogFooterType) => {
  const { footerDialog, setFooterDialog, footerImages } = useAppContext();
  useEffect(() => {
    console.log(footerImages);
  }, [footerImages]);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api, footerImages, photos]);

  return (
    <Dialog open={footerDialog} onOpenChange={setFooterDialog}>
      <DialogContent
        onClick={() => setFooterDialog(false)}
        className="w-full min-w-full bg-inherit border-none p-0 px-3 s1280:px-5 shadow-none h-full rounded-none"
      >
        <DialogHeader className="hidden">
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="flex-bet w-full min-w-full ">
          <div className="hidden s1280:block">
            <button
              onClick={() => api && api.scrollTo(current - 2)}
              disabled={current === 1}
              className="flex-cen text-white"
            >
              <MdOutlineArrowBackIos className="size-8" />
            </button>
          </div>
          <div className="w-full h-full">
            <Carousel
              setApi={setApi}
              className="w-full min-w-full h-full flex-cen"
            >
              <CarouselContent>
                {photos.map((cert, index) => {
                  return (
                    <CarouselItem key={index} className="flex-cen s1280:w-4/5">
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="s1280:h-[615px]"
                        key={index}
                      >
                        <ImgFetcher width={3000} height={3000} src={cert.src} />
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="hidden s1280:block">
            <button
              onClick={() => api && api.scrollTo(current)}
              disabled={current === count}
              className="flex-cen text-white"
            >
              <MdArrowForwardIos className="size-8" />
            </button>
          </div>
        </div>
        <DialogFooter className="hidden"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default DialogFooterCom;
