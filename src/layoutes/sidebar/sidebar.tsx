"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CarouselAdmin from "@/features/sidebar/adminCard";
import SidebarForm from "@/features/sidebar/sidebarForm";
import handleServices from "@/staticData/services/handleServices";
import { handleAdmins } from "@/staticData/sidebar/handleAdmins";
import { useLocale } from "next-intl";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Sidebar = () => {
  const locale = useLocale();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeAdmin = handleAdmins(locale)[activeIndex].name;
  const admins = handleAdmins(locale);
  const [api, setApi] = useState<CarouselApi>();
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const services = handleServices(locale);
  useEffect(() => {
    if (!api) return;

    setActiveIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <aside className="hidden s1280:sticky s1280:top-0 s1280:flex s1280:flex-col w-full s1280:w-[318px] s1280:flex-shrink-0 s1280:min-w-[318px] s1600:w-[340px] s1600:min-w-[340px] rounded-[40px] shadow-[0_4px_15px_#0000001A] bg-white px-6 py-8">
      <div className="s1280:mb-10">
        <div className="mb-4">
          <h3 className="font-bold s1280:text-[20px] text-[#25A6A9] text-center">
            Free consultation
          </h3>
        </div>
        <div className="relative w-full px-5 h-[110px]">
          <button
            onClick={() => api?.scrollPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-[#777777] hover:color animation-global"
          >
            <IoIosArrowBack className="size-4" />
          </button>
          <button
            onClick={() => api?.scrollNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-[#777777] hover:color animation-global"
          >
            <IoIosArrowForward className="size-4" />
          </button>

          <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
            <CarouselContent ref={carouselRef}>
              {admins.map((admin, index) => {
                return (
                  <CarouselItem key={index}>
                    <CarouselAdmin
                      value={admin.desc}
                      langs={admin.languages}
                      image={admin.img}
                      name={admin.name}
                      userType="onlyView"
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            {/* <CarouselPrevious />
          <CarouselNext /> */}
          </Carousel>
        </div>
        <div>
          <SidebarForm activeAdmin={activeAdmin} />
        </div>
      </div>
      <div className="mt-auto">
        <div className="flex-bet mb-4">
          <span className="font-semibold s1280:text-[20px] w-1/4">Service</span>
          <span className="border-[1px] border-[#9996A0] w-[70%] h-0"></span>
        </div>
        <div className="flex flex-col items-start justify-start gap-y-4">
          {services.map((service, index) => {
            return (
              <div className="w-full" key={index}>
                <Link
                  href={`/${locale}/medicaltourism/${service.path}`}
                  className="w-full font-normal flex-bet hover:text-[#0CA5A5] anm text-[#333333]"
                >
                  <span>{service.label}</span>
                  <span className="flex-right gap-x-2">
                    <IoIosArrowForward className="size-5" />
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
