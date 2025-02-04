"use client";
import { BorderStyleLayoutType } from "@/types/fillScroll/fillScroll";
import { useEffect, useState } from "react";
const BorderLayoutAbout = ({
  className,
  title,
  children,
  order,
  classLabel,
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
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [viewportWidth, setViewportWidth] = useState<number>(0);
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function renderSVG(order: string) {
    if (order === "first") {
      return (
        <>
          {viewportWidth >= 1920 && (
            <svg
              width="540"
              height="831"
              viewBox="0 0 540 831"
              fill="none"
              className="border__style--layout-first hidden s1920:block z-[2]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M52.9791 824.794L62.9791 819.02L62.9791 830.567L52.9791 824.794ZM518.031 824.794L518.031 825.794L518.031 824.794ZM19.0326 20.9922L518.031 20.9922L518.031 22.9922L19.0326 22.9922L19.0326 20.9922ZM539.031 41.9922L539.031 804.794L537.031 804.794L537.031 41.9922L539.031 41.9922ZM518.031 825.794L61.9791 825.794L61.9791 823.794L518.031 823.794L518.031 825.794ZM539.031 804.794C539.031 816.392 529.629 825.794 518.031 825.794L518.031 823.794C528.525 823.794 537.031 815.287 537.031 804.794L539.031 804.794ZM518.031 20.9922C529.629 20.9922 539.031 30.3942 539.031 41.9922L537.031 41.9922C537.031 31.4988 528.525 22.9922 518.031 22.9922L518.031 20.9922Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_1021_9951)">
                <circle
                  cx="25.0723"
                  cy="21.9922"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="25.0741"
                cy="21.9921"
                r="6.92764"
                fill="url(#paint0_linear_1021_9951)"
              />
              <defs>
                <filter
                  id="filter0_d_1021_9951"
                  x="0.0351562"
                  y="0.955078"
                  width="50.0742"
                  height="50.0742"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_1021_9951"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1021_9951"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1021_9951"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1021_9951"
                  x1="29.1671"
                  y1="17.0443"
                  x2="19.9858"
                  y2="28.9197"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#82DFB5" />
                  <stop offset="0.464" stopColor="#00979A" />
                </linearGradient>
              </defs>
            </svg>
          )}
          {viewportWidth >= 1728 && viewportWidth < 1920 && (
            <svg
              width="476"
              height="896"
              viewBox="0 0 476 896"
              fill="none"
              className="border__style--layout-first hidden s1728:block s1920:hidden z-[2]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.7204 889.883L33.7204 884.109L33.7204 895.656L23.7204 889.883ZM454.914 889.883L454.914 890.883L454.914 889.883ZM454.914 21.291L454.914 20.291L454.914 21.291ZM18.4338 20.2911L454.914 20.291L454.914 22.291L18.4338 22.2911L18.4338 20.2911ZM475.914 41.291L475.914 869.883L473.914 869.883L473.914 41.291L475.914 41.291ZM454.914 890.883L32.7204 890.883L32.7204 888.883L454.914 888.883L454.914 890.883ZM475.914 869.883C475.914 881.481 466.512 890.883 454.914 890.883L454.914 888.883C465.407 888.883 473.914 880.376 473.914 869.883L475.914 869.883ZM454.914 20.291C466.512 20.291 475.914 29.693 475.914 41.291L473.914 41.291C473.914 30.7976 465.407 22.291 454.914 22.291L454.914 20.291Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_1021_14851)">
                <circle
                  cx="25.6777"
                  cy="21.3545"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="25.6815"
                cy="21.3544"
                r="6.92764"
                fill="url(#paint0_linear_1021_14851)"
              />
              <defs>
                <filter
                  id="filter0_d_1021_14851"
                  x="0.640625"
                  y="0.317383"
                  width="50.0742"
                  height="50.0742"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_1021_14851"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1021_14851"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1021_14851"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1021_14851"
                  x1="29.7746"
                  y1="16.4066"
                  x2="20.5933"
                  y2="28.282"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#82DFB5" />
                  <stop offset="0.464" stopColor="#00979A" />
                </linearGradient>
              </defs>
            </svg>
          )}
          {viewportWidth >= 1600 && viewportWidth < 1728 && (
            <svg
              width="425"
              height="910"
              viewBox="0 0 425 910"
              fill="none"
              className="border__style--layout-first hidden s1600:block s1728:hidden z-[2]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.6088 903.738L61.6088 897.965L61.6088 909.512L51.6088 903.738ZM403.254 903.738L403.254 904.738L403.254 903.738ZM403.254 21.5332L403.254 20.5332L403.254 21.5332ZM19.7064 20.5333L403.254 20.5332L403.254 22.5332L19.7064 22.5333L19.7064 20.5333ZM424.254 41.5332L424.254 883.738L422.254 883.738L422.254 41.5332L424.254 41.5332ZM403.254 904.738L60.6088 904.738L60.6088 902.738L403.254 902.738L403.254 904.738ZM424.254 883.738C424.254 895.336 414.852 904.738 403.254 904.738L403.254 902.738C413.747 902.738 422.254 894.232 422.254 883.738L424.254 883.738ZM403.254 20.5332C414.852 20.5332 424.254 29.9352 424.254 41.5332L422.254 41.5332C422.254 31.0398 413.747 22.5332 403.254 22.5332L403.254 20.5332Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_1021_16476)">
                <circle
                  cx="25.4316"
                  cy="21.5332"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="25.4345"
                cy="21.5331"
                r="6.92764"
                fill="url(#paint0_linear_1021_16476)"
              />
              <defs>
                <filter
                  id="filter0_d_1021_16476"
                  x="0.394531"
                  y="0.496094"
                  width="50.0742"
                  height="50.0742"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_1021_16476"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1021_16476"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1021_16476"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1021_16476"
                  x1="29.5275"
                  y1="16.5854"
                  x2="20.3462"
                  y2="28.4607"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#82DFB5" />
                  <stop offset="0.464" stopColor="#00979A" />
                </linearGradient>
              </defs>
            </svg>
          )}
          {viewportWidth >= 1512 && viewportWidth < 1600 && (
            <svg
              width="442"
              height="793"
              viewBox="0 0 442 793"
              fill="none"
              className="border__style--layout-first hidden  s1512:block s1600:hidden z-[2]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.7088 786.368L61.7088 780.595L61.7088 792.142L51.7088 786.368ZM420.613 786.368L420.613 785.368L420.613 786.368ZM26.9295 20.9727L420.613 20.9727L420.613 22.9727L26.9295 22.9727L26.9295 20.9727ZM441.613 41.9727L441.613 766.368L439.613 766.368L439.613 41.9727L441.613 41.9727ZM420.613 787.368L60.7088 787.368L60.7088 785.368L420.613 785.368L420.613 787.368ZM441.613 766.368C441.613 777.966 432.211 787.368 420.613 787.368L420.613 785.368C431.107 785.368 439.613 776.861 439.613 766.368L441.613 766.368ZM420.613 20.9727C432.211 20.9727 441.613 30.3747 441.613 41.9727L439.613 41.9727C439.613 31.4792 431.107 22.9727 420.613 22.9727L420.613 20.9727Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_1021_21367)">
                <circle
                  cx="25.8223"
                  cy="21.9727"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="25.8251"
                cy="21.9726"
                r="6.92764"
                fill="url(#paint0_linear_1021_21367)"
              />
              <defs>
                <filter
                  id="filter0_d_1021_21367"
                  x="0.785156"
                  y="0.935547"
                  width="50.0742"
                  height="50.0742"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_1021_21367"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1021_21367"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1021_21367"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1021_21367"
                  x1="29.9181"
                  y1="17.0248"
                  x2="20.7368"
                  y2="28.9002"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#82DFB5" />
                  <stop offset="0.464" stopColor="#00979A" />
                </linearGradient>
              </defs>
            </svg>
          )}
          {viewportWidth >= 1280 && viewportWidth < 1512 && (
            <svg
              className="border__style--layout-first hidden s1280:block s1512:hidden z-[2]"
              width="388"
              height="880"
              viewBox="0 0 388 880"
              fill="none"
            >
              <path
                d="M72.6458 873.366L82.6458 867.593L82.6458 879.14L72.6458 873.366ZM28.466 20.4072L366.52 20.4072L366.52 22.4072L28.466 22.4072L28.466 20.4072ZM387.52 41.4072L387.519 853.366L385.519 853.366L385.52 41.4072L387.52 41.4072ZM366.519 874.366L81.6458 874.366L81.6458 872.366L366.519 872.366L366.519 874.366ZM387.519 853.366C387.519 864.964 378.117 874.366 366.519 874.366L366.519 872.366C377.013 872.366 385.519 863.86 385.519 853.366L387.519 853.366ZM366.52 20.4072C378.118 20.4072 387.52 29.8092 387.52 41.4072L385.52 41.4072C385.52 30.9138 377.013 22.4072 366.52 22.4072L366.52 20.4072Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_361_6747)">
                <circle
                  cx="25.6426"
                  cy="21.4072"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="25.6454"
                cy="21.4071"
                r="6.92764"
                fill="url(#paint0_linear_361_6747)"
              />
              <defs>
                <filter
                  id="filter0_d_361_6747"
                  x="0.605469"
                  y="0.370117"
                  width="50.0742"
                  height="50.0742"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_361_6747"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_361_6747"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_361_6747"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_361_6747"
                  x1="29.7384"
                  y1="16.4594"
                  x2="20.5571"
                  y2="28.3348"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#82DFB5" />
                  <stop offset="0.464" stopColor="#00979A" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </>
      );
    }

    if (order === "second") {
      return (
        <>
          {viewportWidth >= 1920 && (
            <svg
              width="664"
              height="851"
              viewBox="0 0 664 851"
              fill="none"
              className="border__style--layout-second z-[2]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M663.282 844.831L653.282 839.058V850.605L663.282 844.831ZM490.912 20.1611H21.0313V22.1611H490.912V20.1611ZM0.03125 41.1611V824.831H2.03125V41.1611H0.03125ZM21.0312 845.831H654.282V843.831H21.0312V845.831ZM0.03125 824.831C0.03125 836.429 9.43327 845.831 21.0312 845.831V843.831C10.5378 843.831 2.03125 835.325 2.03125 824.831H0.03125ZM21.0313 20.1611C9.43328 20.1611 0.03125 29.5632 0.03125 41.1611H2.03125C2.03125 30.6677 10.5378 22.1611 21.0313 22.1611V20.1611Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_1021_9936)">
                <circle
                  cx="489.74"
                  cy="21.1611"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="489.742"
                cy="21.161"
                r="6.92764"
                fill="url(#paint0_linear_1021_9936)"
              />
              <defs>
                <filter
                  id="filter0_d_1021_9936"
                  x="464.703"
                  y="0.124023"
                  width="50.0742"
                  height="50.0742"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_1021_9936"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1021_9936"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1021_9936"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1021_9936"
                  x1="493.835"
                  y1="16.2133"
                  x2="484.654"
                  y2="28.0887"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#82DFB5" />
                  <stop offset="0.464" stopColor="#00979A" />
                </linearGradient>
              </defs>
            </svg>
          )}
          {viewportWidth >= 1728 && viewportWidth < 1920 && (
            <svg
              width="601"
              height="851"
              viewBox="0 0 601 851"
              fill="none"
              className="border__style--layout-second z-[2]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M600.886 844.807L590.886 839.033V850.58L600.886 844.807ZM430.382 20.1367H21.8867V22.1367H430.382V20.1367ZM0.886719 41.1367V824.807H2.88672V41.1367H0.886719ZM21.8867 845.807H591.886V843.807H21.8867V845.807ZM0.886719 824.807C0.886719 836.405 10.2887 845.807 21.8867 845.807V843.807C11.3933 843.807 2.88672 835.3 2.88672 824.807H0.886719ZM21.8867 20.1367C10.2887 20.1367 0.886719 29.5387 0.886719 41.1367H2.88672C2.88672 30.6433 11.3933 22.1367 21.8867 22.1367V20.1367Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_1021_14836)">
                <circle
                  cx="430.967"
                  cy="21.1367"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="430.971"
                cy="21.1366"
                r="6.92764"
                fill="url(#paint0_linear_1021_14836)"
              />
              <defs>
                <filter
                  id="filter0_d_1021_14836"
                  x="405.93"
                  y="0.0996094"
                  width="50.0742"
                  height="50.0742"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_1021_14836"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1021_14836"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1021_14836"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1021_14836"
                  x1="435.064"
                  y1="16.1889"
                  x2="425.882"
                  y2="28.0643"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#82DFB5" />
                  <stop offset="0.464" stopColor="#00979A" />
                </linearGradient>
              </defs>
            </svg>
          )}
          {viewportWidth >= 1600 && viewportWidth < 1728 && (
            <svg
              width="551"
              height="852"
              viewBox="0 0 551 852"
              fill="none"
              className="border__style--layout-second z-[2]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M550.641 845.468L540.641 839.694V851.241L550.641 845.468ZM397.158 20.7979H21.5781V22.7979H397.158V20.7979ZM0.578125 41.7978V825.468H2.57812V41.7978H0.578125ZM21.5781 846.468H541.641V844.468H21.5781V846.468ZM0.578125 825.468C0.578125 837.066 9.98015 846.468 21.5781 846.468V844.468C11.0847 844.468 2.57812 835.961 2.57812 825.468H0.578125ZM21.5781 20.7979C9.98013 20.7979 0.578125 30.1999 0.578125 41.7978H2.57812C2.57812 31.3044 11.0847 22.7979 21.5781 22.7979V20.7979Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_1021_16461)">
                <circle
                  cx="397.65"
                  cy="21.7979"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="397.653"
                cy="21.7978"
                r="6.92764"
                fill="url(#paint0_linear_1021_16461)"
              />
              <defs>
                <filter
                  id="filter0_d_1021_16461"
                  x="372.613"
                  y="0.760742"
                  width="50.0742"
                  height="50.0742"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_1021_16461"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1021_16461"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1021_16461"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1021_16461"
                  x1="401.746"
                  y1="16.85"
                  x2="392.565"
                  y2="28.7254"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#82DFB5" />
                  <stop offset="0.464" stopColor="#00979A" />
                </linearGradient>
              </defs>
            </svg>
          )}
          {viewportWidth >= 1512 && viewportWidth < 1600 && (
            <svg
              width="550"
              height="834"
              viewBox="0 0 550 834"
              fill="none"
              className="border__style--layout-second z-[2]"
            >
              <path
                d="M549.602 827.688L539.602 821.914V833.461L549.602 827.688ZM405.717 20.3213H21.7891V22.3213H405.717V20.3213ZM0.789062 41.3213V807.688H2.78906V41.3213H0.789062ZM21.7891 828.688H540.602V826.688H21.7891V828.688ZM0.789062 807.688C0.789062 819.285 10.1911 828.688 21.7891 828.688V826.688C11.2957 826.688 2.78906 818.181 2.78906 807.688H0.789062ZM21.7891 20.3213C10.1911 20.3213 0.789062 29.7233 0.789062 41.3213H2.78906C2.78906 30.8279 11.2956 22.3213 21.7891 22.3213V20.3213Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_1021_21355)">
                <circle
                  cx="405.568"
                  cy="21.3213"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="405.571"
                cy="21.3212"
                r="6.92764"
                fill="url(#paint0_linear_1021_21355)"
              />
              <defs>
                <filter
                  id="filter0_d_1021_21355"
                  x="380.531"
                  y="0.28418"
                  width="50.0742"
                  height="50.0742"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_1021_21355"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1021_21355"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1021_21355"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1021_21355"
                  x1="409.664"
                  y1="16.3734"
                  x2="400.483"
                  y2="28.2488"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#82DFB5" />
                  <stop offset="0.464" stopColor="#00979A" />
                </linearGradient>
              </defs>
            </svg>
          )}
          {viewportWidth >= 1280 && viewportWidth < 1512 && (
            <svg
              width="405"
              height="733"
              viewBox="0 0 405 733"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="border__style--layout-second z-[2]"
            >
              <path
                d="M404.489 726.923L394.489 721.149V732.696L404.489 726.923ZM312.803 20.2891H21.0312V22.2891H312.803V20.2891ZM0.03125 41.2891V706.923H2.03125V41.2891H0.03125ZM21.0312 727.923H395.489V725.923H21.0312V727.923ZM0.03125 706.923C0.03125 718.521 9.43327 727.923 21.0312 727.923V725.923C10.5378 725.923 2.03125 717.416 2.03125 706.923H0.03125ZM21.0312 20.2891C9.43323 20.2891 0.03125 29.6911 0.03125 41.2891H2.03125C2.03125 30.7957 10.5378 22.2891 21.0312 22.2891V20.2891Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_1166_15222)">
                <circle
                  cx="314.146"
                  cy="21.2891"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="314.146"
                cy="21.289"
                r="6.92764"
                fill="url(#paint0_linear_1166_15222)"
              />
              <defs>
                <filter
                  id="filter0_d_1166_15222"
                  x="289.109"
                  y="0.251953"
                  width="50.0742"
                  height="50.0742"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_1166_15222"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1166_15222"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1166_15222"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1166_15222"
                  x1="318.239"
                  y1="16.3412"
                  x2="309.058"
                  y2="28.2166"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#82DFB5" />
                  <stop offset="0.464" stopColor="#00979A" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </>
      );
    }

    if (order === "third") {
      return (
        <>
          <svg
            width="438"
            height="397"
            viewBox="0 0 438 397"
            fill="none"
            className="border__style--layout-third z-[2] hidden s1280:block"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.942503 390.518L10.9425 384.744L10.9425 396.291L0.942503 390.518ZM416.066 390.518L416.066 391.518L416.066 390.518ZM65.5574 19.0723L416.066 19.0723L416.066 21.0723L65.5574 21.0723L65.5574 19.0723ZM437.066 40.0723L437.066 370.518L435.066 370.518L435.066 40.0723L437.066 40.0723ZM416.066 391.518L9.9425 391.518L9.9425 389.518L416.066 389.518L416.066 391.518ZM437.066 370.518C437.066 382.116 427.664 391.518 416.066 391.518L416.066 389.518C426.56 389.518 435.066 381.011 435.066 370.518L437.066 370.518ZM416.066 19.0723C427.664 19.0723 437.066 28.4743 437.066 40.0723L435.066 40.0723C435.066 29.5789 426.56 21.0723 416.066 21.0723L416.066 19.0723Z"
              fill="#0CA5A5"
            />
            <g filter="url(#filter0_d_1166_15225)">
              <circle
                cx="66.4707"
                cy="21.5352"
                r="16.0371"
                fill="#B7EACC"
                fillOpacity="0.4"
                shapeRendering="crispEdges"
              />
            </g>
            <circle
              cx="66.4735"
              cy="21.5351"
              r="6.92764"
              fill="url(#paint0_linear_1166_15225)"
            />
            <defs>
              <filter
                id="filter0_d_1166_15225"
                x="41.4336"
                y="0.498047"
                width="50.0742"
                height="50.0742"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="1"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect1_dropShadow_1166_15225"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1166_15225"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1166_15225"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1166_15225"
                x1="70.5666"
                y1="16.5873"
                x2="61.3853"
                y2="28.4627"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#82DFB5" />
                <stop offset="0.464" stopColor="#00979A" />
              </linearGradient>
            </defs>
          </svg>
        </>
      );
    }

    if (order === "fourth") {
      return (
        <>
          {viewportWidth >= 1920 && (
            <svg
              width="1070"
              height="881"
              viewBox="0 0 1070 881"
              fill="none"
              className="border__style--layout-fourth z-[2]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1069.17 874.71L1059.17 868.936V880.483L1069.17 874.71ZM21.0312 21.4902V22.4902V21.4902ZM663.449 20.4902H21.0312V22.4902H663.449V20.4902ZM0.03125 41.4902V854.71H2.03125V41.4902H0.03125ZM21.0312 875.71H1060.17V873.71H21.0312V875.71ZM0.03125 854.71C0.03125 866.308 9.43327 875.71 21.0312 875.71V873.71C10.5378 873.71 2.03125 865.203 2.03125 854.71H0.03125ZM21.0312 20.4902C9.43326 20.4902 0.03125 29.8923 0.03125 41.4902H2.03125C2.03125 30.9968 10.5378 22.4902 21.0312 22.4902V20.4902Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_1021_9942)">
                <circle
                  cx="663.451"
                  cy="21.4902"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="663.453"
                cy="21.4901"
                r="6.92764"
                fill="url(#paint0_linear_1021_9942)"
              />
              <defs>
                <filter
                  id="filter0_d_1021_9942"
                  x="638.414"
                  y="0.453125"
                  width="50.0742"
                  height="50.0742"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_1021_9942"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1021_9942"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1021_9942"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1021_9942"
                  x1="667.546"
                  y1="16.5424"
                  x2="658.365"
                  y2="28.4178"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#82DFB5" />
                  <stop offset="0.464" stopColor="#00979A" />
                </linearGradient>
              </defs>
            </svg>
          )}
          {viewportWidth >= 1728 && viewportWidth < 1920 && (
            <svg
              width="949"
              height="881"
              viewBox="0 0 949 881"
              fill="none"
              className="border__style--layout-fourth z-[2]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M948.83 874.686L938.83 868.912V880.459L948.83 874.686ZM598.068 20.4658H21.8007V22.4658H598.068V20.4658ZM0.800781 41.4658V854.685H2.80078V41.4658H0.800781ZM21.8008 875.686H939.83V873.686H21.8008V875.686ZM0.800781 854.685C0.800781 866.284 10.2028 875.686 21.8008 875.686V873.686C11.3074 873.686 2.80078 865.179 2.80078 854.685H0.800781ZM21.8007 20.4658C10.2028 20.4658 0.800781 29.8678 0.800781 41.4658H2.80078C2.80078 30.9724 11.3073 22.4658 21.8007 22.4658V20.4658Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_1021_14842)">
                <circle
                  cx="599.889"
                  cy="21.4658"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="599.892"
                cy="21.4657"
                r="6.92764"
                fill="url(#paint0_linear_1021_14842)"
              />
              <defs>
                <filter
                  id="filter0_d_1021_14842"
                  x="574.852"
                  y="0.428711"
                  width="50.0742"
                  height="50.0742"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_1021_14842"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1021_14842"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1021_14842"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1021_14842"
                  x1="603.986"
                  y1="16.518"
                  x2="594.804"
                  y2="28.3934"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#82DFB5" />
                  <stop offset="0.464" stopColor="#00979A" />
                </linearGradient>
              </defs>
            </svg>
          )}
          {viewportWidth >= 1600 && viewportWidth < 1728 && (
            <svg
              width="856"
              height="881"
              viewBox="0 0 856 881"
              fill="none"
              className="border__style--layout-fourth z-[2]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M855.739 874.347L845.739 868.573V880.12L855.739 874.347ZM562.146 20.127H21.5781V22.127H562.146V20.127ZM0.578125 41.127V854.347H2.57812V41.127H0.578125ZM21.5781 875.347H846.739V873.347H21.5781V875.347ZM0.578125 854.347C0.578125 865.945 9.98014 875.347 21.5781 875.347V873.347C11.0847 873.347 2.57812 864.84 2.57812 854.347H0.578125ZM21.5781 20.127C9.98012 20.127 0.578125 29.529 0.578125 41.127H2.57812C2.57812 30.6335 11.0847 22.127 21.5781 22.127V20.127Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_1021_16467)">
                <circle
                  cx="564.154"
                  cy="21.127"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="564.157"
                cy="21.1269"
                r="6.92764"
                fill="url(#paint0_linear_1021_16467)"
              />
              <defs>
                <filter
                  id="filter0_d_1021_16467"
                  x="539.117"
                  y="0.0898438"
                  width="50.0742"
                  height="50.0742"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_1021_16467"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1021_16467"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1021_16467"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1021_16467"
                  x1="568.25"
                  y1="16.1791"
                  x2="559.069"
                  y2="28.0545"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#82DFB5" />
                  <stop offset="0.464" stopColor="#00979A" />
                </linearGradient>
              </defs>
            </svg>
          )}
          {viewportWidth >= 1512 && viewportWidth < 1600 && (
            <svg
              width="823"
              height="881"
              viewBox="0 0 823 881"
              className="border__style--layout-fourth z-[2]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M822.251 874.385L812.251 868.611V880.158L822.251 874.385ZM560.133 20.165H21.0196V22.165H560.133V20.165ZM0.0195312 41.165V854.385H2.01953V41.165H0.0195312ZM21.0195 875.385H813.251V873.385H21.0195V875.385ZM0.0195312 854.385C0.0195312 865.983 9.42155 875.385 21.0195 875.385V873.385C10.5261 873.385 2.01953 864.878 2.01953 854.385H0.0195312ZM21.0196 20.165C9.42158 20.165 0.0195312 29.5671 0.0195312 41.165H2.01953C2.01953 30.6716 10.5261 22.165 21.0196 22.165V20.165Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_1021_21361)">
                <circle
                  cx="562.057"
                  cy="21.165"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="562.059"
                cy="21.1649"
                r="6.92764"
                fill="url(#paint0_linear_1021_21361)"
              />
              <defs>
                <filter
                  id="filter0_d_1021_21361"
                  x="537.02"
                  y="0.12793"
                  width="50.0742"
                  height="50.0742"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_1021_21361"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1021_21361"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1021_21361"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1021_21361"
                  x1="566.152"
                  y1="16.2172"
                  x2="556.971"
                  y2="28.0926"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#82DFB5" />
                  <stop offset="0.464" stopColor="#00979A" />
                </linearGradient>
              </defs>
            </svg>
          )}
          {viewportWidth >= 1280 && viewportWidth < 1512 && (
            <svg
              width="633"
              height="762"
              viewBox="0 0 633 762"
              fill="none"
              className="border__style--layout-fourth z-[2]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M632.465 755.494L622.465 749.721V761.268L632.465 755.494ZM424.787 20.9453H21.586V22.9453H424.787V20.9453ZM0.585938 41.9453V735.494H2.58594V41.9453H0.585938ZM21.5859 756.494H623.465V754.494H21.5859V756.494ZM0.585938 735.494C0.585938 747.092 9.98796 756.494 21.5859 756.494V754.494C11.0925 754.494 2.58594 745.988 2.58594 735.494H0.585938ZM21.586 20.9453C9.98797 20.9453 0.585938 30.3473 0.585938 41.9453H2.58594C2.58594 31.4519 11.0925 22.9453 21.586 22.9453V20.9453Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_1166_15228)">
                <circle
                  cx="418.002"
                  cy="21.9453"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="418.005"
                cy="21.9452"
                r="6.92764"
                fill="url(#paint0_linear_1166_15228)"
              />
              <defs>
                <filter
                  id="filter0_d_1166_15228"
                  x="392.965"
                  y="0.908203"
                  width="50.0742"
                  height="50.0742"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_1166_15228"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1166_15228"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1166_15228"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1166_15228"
                  x1="422.098"
                  y1="16.9975"
                  x2="412.917"
                  y2="28.8729"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#82DFB5" />
                  <stop offset="0.464" stopColor="#00979A" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </>
      );
    }
  }

  return (
    <div className={`${className} round40 s1280:relative`}>
      <div
        className={`${
          classLabel ? classLabel : "flex-cen"
        }  s1280:my-0 my-10 s1280:absolute s1280:-top-0 s1280:left-0 w-full s1600:-top-3`}
      >
        <h2 className="w-fit font-semibold text-[20px] s1280:text-[36px] s1512:text-[40px] s1600:text-[48px] s1280:-mt-2 text-[#333333] z-[4]">
          {title}
        </h2>
      </div>
      <div className="flex justify-center items-start w-full h-full">
        {children}
      </div>
      {renderSVG(order)}
    </div>
  );
};
export default BorderLayoutAbout;
