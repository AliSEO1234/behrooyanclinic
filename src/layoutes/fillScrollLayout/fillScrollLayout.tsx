"use client";
import { BorderStyleLayoutType } from "@/types/fillScroll/fillScroll";
import { useEffect } from "react";
const FillScrollLayout = ({
  className,
  title,
  children,
  order,
}: BorderStyleLayoutType) => {
  useEffect(() => {
    const path = document.querySelector<SVGPathElement>(
      ".border__style--layout-first path"
    );
    const path2 = document.querySelector<SVGPathElement>(
      ".border__style--layout-second path"
    );
    const path3 = document.querySelector<SVGPathElement>(
      ".border__style--layout-third path"
    );
    const path4 = document.querySelector<SVGPathElement>(
      ".border__style--layout-fourth path"
    );
    const svg = document.querySelector<SVGElement>(
      ".border__style--layout-first"
    );
    const svg2 = document.querySelector<SVGElement>(
      ".border__style--layout-second"
    );
    const svg3 = document.querySelector<SVGElement>(
      ".border__style--layout-third"
    );
    const svg4 = document.querySelector<SVGElement>(
      ".border__style--layout-fourth"
    );

    const pathLength = path?.getTotalLength() ?? 0;
    const pathLength2 = path2?.getTotalLength() ?? 0;
    const pathLength3 = path3?.getTotalLength() ?? 0;
    const pathLength4 = path4?.getTotalLength() ?? 0;

    const drawingSpeed1 = 4.7;

    const handleScroll = () => {
      console.log("scroll");

      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPercentage = scrollTop / (scrollHeight - windowHeight);

      const drawPercentage = scrollPercentage * drawingSpeed1;
      const dashoffset = pathLength * (1 - drawPercentage);
      if (svg) {
        svg.style.strokeDasharray = `${pathLength}`;
        svg.style.strokeDashoffset = `${dashoffset}`;
      }

      // second one
      const drawingSpeed2 = 6.8;
      const drawPercentage2 = scrollPercentage * drawingSpeed2;
      const dashoffset2 = pathLength2 * (1 - drawPercentage2);
      if (svg2) {
        svg2.style.strokeDasharray = `${pathLength2}`;
        svg2.style.strokeDashoffset = `${dashoffset2}`;
      }

      // third one
      const drawingSpeed3 = 8.5;
      const drawPercentage3 = scrollPercentage * drawingSpeed3;
      const dashoffset3 = pathLength3 * (1 - drawPercentage3);
      if (svg3) {
        svg3.style.strokeDasharray = `${pathLength3}`;
        svg3.style.strokeDashoffset = `${dashoffset3}`;
      }

      // fourth one
      const drawingSpeed4 = -7.5;
      const drawPercentage4 = scrollPercentage * drawingSpeed4;
      const dashoffset4 = pathLength4 * (1 - drawPercentage4);
      if (svg4) {
        svg4.style.strokeDasharray = `${pathLength4}`;
        svg4.style.strokeDashoffset = `${dashoffset4}`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function renderSVG(order: string) {
    if (order === "first") {
      return (
        <svg
          className="border__style--layout-first"
          width="318"
          height="419"
          viewBox="0 0 318 419"
          fill="none"
        >
          <ellipse cx="24.1675" cy="5" rx="4.79249" ry="5" fill="#2E5A90" />
          <ellipse cx="24.168" cy="5" rx="2.87505" ry="3" fill="#EDF4FC" />
          <path
            d="M27.4385 5H286.837C303.406 5 316.837 18.4315 316.837 35V388C316.837 404.569 303.406 418 286.837 418H0.488214"
            stroke="#2E5A90"
          />
        </svg>
      );
    }
    if (order === "second") {
      return (
        <svg
          className="border__style--layout-second"
          width="419"
          height="659"
          viewBox="0 0 419 659"
          fill="none"
        >
          <circle cx="413.168" cy="5.48438" r="5" fill="#2E5A90" />
          <circle cx="413.168" cy="5.48438" r="3" fill="#EDF4FC" />
          <path
            d="M408.169 5.48438H30.8164C14.2479 5.48438 0.816406 18.9158 0.816406 35.4844V628.504C0.816406 645.073 14.2479 658.504 30.8164 658.504H408.169"
            stroke="#2E5A90"
          />
        </svg>
      );
    }

    if (order === "third") {
      return (
        <svg
          className="border__style--layout-third"
          width="530"
          height="659"
          viewBox="0 0 530 659"
          fill="none"
        >
          <circle cx="5.21875" cy="5.17383" r="5" fill="#2E5A90" />
          <circle cx="5.21875" cy="5.17383" r="3" fill="#EDF4FC" />
          <path
            d="M10.2188 5.17383H499.142C515.71 5.17383 529.142 18.6053 529.142 35.1738V628.283C529.142 644.852 515.71 658.283 499.142 658.283H10.2188"
            stroke="#2E5A90"
          />
        </svg>
      );
    }

    if (order === "fourth") {
      return (
        <svg
          className="border__style--layout-fourth"
          width="753"
          height="740"
          viewBox="0 0 753 740"
          fill="none"
        >
          <circle cx="540.219" cy="5.71289" r="5" fill="#2E5A90" />
          <circle cx="540.219" cy="5.71289" r="3" fill="#EDF4FC" />
          <path
            d="M752.805 738.838H30.7265C14.158 738.838 0.726562 725.406 0.726562 708.838V35.7105C0.726562 19.1419 14.158 5.71043 30.7266 5.71043H537.264"
            stroke="#2E5A90"
          />
        </svg>
      );
    }
  }

  return (
    <div className={`${className} s1280:relative round40`}>
      <div className="flex-cen s1280:absolute top-0 left-0 w-full  my-10 s1280:my-0">
        <h2 className="w-fit font-semibold text-[18px] s1280:text-[30px] s1512:text-[36px] s1280:-mt-5 s1512:-mt-6">
          {title}
        </h2>
      </div>
      <div className="flex-cen w-full h-full">{children}</div>
      {renderSVG(order)}
    </div>
  );
};
export default FillScrollLayout;
