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
    const path5 = document.querySelector<SVGPathElement>(
      ".border__style--layout-five path"
    );
    const path6 = document.querySelector<SVGPathElement>(
      ".border__style--layout-six path"
    );
    const path7 = document.querySelector<SVGPathElement>(
      ".border__style--layout-seven path"
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
    const svg5 = document.querySelector<SVGElement>(
      ".border__style--layout-five"
    );
    const svg6 = document.querySelector<SVGElement>(
      ".border__style--layout-six"
    );
    const svg7 = document.querySelector<SVGElement>(
      ".border__style--layout-seven"
    );

    const pathLength = path?.getTotalLength() ?? 0;
    const pathLength2 = path2?.getTotalLength() ?? 0;
    const pathLength3 = path3?.getTotalLength() ?? 0;
    const pathLength4 = path4?.getTotalLength() ?? 0;
    const pathLength5 = path5?.getTotalLength() ?? 0;
    const pathLength6 = path6?.getTotalLength() ?? 0;
    const pathLength7 = path7?.getTotalLength() ?? 0;

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

      // five one
      const drawingSpeed5 = -7.5;
      const drawPercentage5 = scrollPercentage * drawingSpeed5;
      const dashoffset5 = pathLength5 * (1 - drawPercentage5);
      if (svg5) {
        svg5.style.strokeDasharray = `${pathLength5}`;
        svg5.style.strokeDashoffset = `${dashoffset5}`;
      }
      // six one
      const drawingSpeed6 = -7.5;
      const drawPercentage6 = scrollPercentage * drawingSpeed6;
      const dashoffset6 = pathLength6 * (1 - drawPercentage6);
      if (svg6) {
        svg6.style.strokeDasharray = `${pathLength6}`;
        svg6.style.strokeDashoffset = `${dashoffset6}`;
      }
      // seven one
      const drawingSpeed7 = -7.5;
      const drawPercentage7 = scrollPercentage * drawingSpeed7;
      const dashoffset7 = pathLength7 * (1 - drawPercentage7);
      if (svg7) {
        svg7.style.strokeDasharray = `${pathLength7}`;
        svg7.style.strokeDashoffset = `${dashoffset7}`;
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
              className="border__style--layout-first hidden s1920:block z-[2]"
              width="610"
              height="752"
              viewBox="0 0 610 752"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.459887 745.381L10.4599 739.607L10.4599 751.154L0.459887 745.381ZM588.559 745.381L588.559 746.381L588.559 745.381ZM39.4589 18.5137L588.559 18.5137L588.559 20.5137L39.4589 20.5137L39.4589 18.5137ZM609.559 39.5137L609.559 725.381L607.559 725.381L607.559 39.5137L609.559 39.5137ZM588.559 746.381L9.45989 746.381L9.45989 744.381L588.559 744.381L588.559 746.381ZM609.559 725.381C609.559 736.979 600.156 746.381 588.559 746.381L588.559 744.381C599.052 744.381 607.559 735.874 607.559 725.381L609.559 725.381ZM588.559 18.5137C600.157 18.5137 609.559 27.9157 609.559 39.5137L607.559 39.5137C607.559 29.0203 599.052 20.5137 588.559 20.5137L588.559 18.5137Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_1021_9951)">
                <ellipse
                  cx="39.7412"
                  cy="19.514"
                  rx="14.1318"
                  ry="13.722"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <ellipse
                cx="39.7433"
                cy="19.5135"
                rx="6.10461"
                ry="5.92756"
                fill="url(#paint0_linear_1021_9951)"
              />
              <defs>
                <filter
                  id="filter0_d_1021_9951"
                  x="16.6094"
                  y="0.791992"
                  width="46.2637"
                  height="45.4443"
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
                  x1="43.35"
                  y1="15.28"
                  x2="35.5553"
                  y2="25.6631"
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
              className="border__style--layout-first z-[2]"
              width="549"
              height="778"
              viewBox="0 0 549 778"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.11503 771.386L10.115 765.613L10.115 777.16L0.11503 771.386ZM32.4695 19.6592L527.173 19.6592L527.173 21.6592L32.4695 21.6592L32.4695 19.6592ZM548.173 40.6592L548.173 751.386L546.173 751.386L546.173 40.6592L548.173 40.6592ZM527.173 772.386L9.11503 772.386L9.11503 770.386L527.173 770.386L527.173 772.386ZM548.173 751.386C548.173 762.984 538.771 772.386 527.173 772.386L527.173 770.386C537.666 770.386 546.173 761.879 546.173 751.386L548.173 751.386ZM527.173 19.6592C538.771 19.6592 548.173 29.0612 548.173 40.6592L546.173 40.6592C546.173 30.1658 537.666 21.6592 527.173 21.6592L527.173 19.6592Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_1021_14851)">
                <ellipse
                  cx="31.0566"
                  cy="20.6589"
                  rx="16.0371"
                  ry="15.0368"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <ellipse
                cx="31.0605"
                cy="20.6596"
                rx="6.92764"
                ry="6.49552"
                fill="url(#paint0_linear_1021_14851)"
              />
              <defs>
                <filter
                  id="filter0_d_1021_14851"
                  x="6.01953"
                  y="0.62207"
                  width="50.0742"
                  height="48.0732"
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
                  x1="35.1535"
                  y1="16.0205"
                  x2="26.6996"
                  y2="27.6824"
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
              className="border__style--layout-first z-[2]"
              width="559"
              height="721"
              viewBox="0 0 559 721"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625306 714.839L10.6253 709.065L10.6253 720.612L0.625306 714.839ZM537.254 714.839L537.254 715.839L537.254 714.839ZM35.6122 20.2012L537.254 20.2012V22.2012L35.6122 22.2012V20.2012ZM558.254 41.2012L558.254 694.839L556.254 694.839L556.254 41.2012L558.254 41.2012ZM537.254 715.839L9.62531 715.839L9.62531 713.839L537.254 713.839L537.254 715.839ZM558.254 694.839C558.254 706.437 548.852 715.839 537.254 715.839L537.254 713.839C547.747 713.839 556.254 705.332 556.254 694.839L558.254 694.839ZM537.254 20.2012C548.852 20.2012 558.254 29.6032 558.254 41.2012L556.254 41.2012C556.254 30.7078 547.747 22.2012 537.254 22.2012V20.2012Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_1021_16476)">
                <circle
                  cx="34.4658"
                  cy="21.2012"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="34.4687"
                cy="21.2011"
                r="6.92764"
                fill="url(#paint0_linear_1021_16476)"
              />
              <defs>
                <filter
                  id="filter0_d_1021_16476"
                  x="9.42871"
                  y="0.164062"
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
                  x1="38.5617"
                  y1="16.2533"
                  x2="29.3804"
                  y2="28.1287"
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
              className="border__style--layout-first z-[2]"
              width="543"
              height="658"
              viewBox="0 0 543 658"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.92957 651.272L19.9296 645.499L19.9296 657.046L9.92957 651.272ZM521.827 651.272L521.827 652.272L521.827 651.272ZM25.0586 20.8262L521.827 20.8262L521.827 22.8262L25.0586 22.8262L25.0586 20.8262ZM542.827 41.8262L542.827 631.272L540.827 631.272L540.827 41.8262L542.827 41.8262ZM521.827 652.272L18.9296 652.272L18.9296 650.272L521.827 650.272L521.827 652.272ZM542.827 631.272C542.827 642.87 533.425 652.272 521.827 652.272L521.827 650.272C532.321 650.272 540.827 641.766 540.827 631.272L542.827 631.272ZM521.827 20.8262C533.425 20.8262 542.827 30.2282 542.827 41.8262L540.827 41.8262C540.827 31.3328 532.321 22.8262 521.827 22.8262L521.827 20.8262Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_1021_21367)">
                <circle
                  cx="25.3809"
                  cy="21.8262"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="25.3837"
                cy="21.8261"
                r="6.92764"
                fill="url(#paint0_linear_1021_21367)"
              />
              <defs>
                <filter
                  id="filter0_d_1021_21367"
                  x="0.34375"
                  y="0.789062"
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
                  x1="29.4767"
                  y1="16.8783"
                  x2="20.2954"
                  y2="28.7537"
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
              className="border__style--layout-first z-[2]"
              width="442"
              height="728"
              viewBox="0 0 442 728"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.13855 721.951L13.1386 716.178L13.1385 727.725L3.13855 721.951ZM29.0801 20.9512L420.884 20.9512L420.884 22.9512L29.0801 22.9512L29.0801 20.9512ZM441.884 41.9512L441.884 701.951L439.884 701.951L439.884 41.9512L441.884 41.9512ZM420.884 722.951L12.1385 722.951L12.1385 720.951L420.884 720.951L420.884 722.951ZM441.884 701.951C441.884 713.549 432.482 722.951 420.884 722.951L420.884 720.951C431.377 720.951 439.884 712.445 439.884 701.951L441.884 701.951ZM420.884 20.9512C432.482 20.9512 441.884 30.3532 441.884 41.9512L439.884 41.9512C439.884 31.4578 431.377 22.9512 420.884 22.9512L420.884 20.9512Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_3890_79070)">
                <circle
                  cx="25.1416"
                  cy="21.9512"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="25.1444"
                cy="21.9511"
                r="6.92764"
                fill="url(#paint0_linear_3890_79070)"
              />
              <defs>
                <filter
                  id="filter0_d_3890_79070"
                  x="0.104492"
                  y="0.914062"
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
                    result="effect1_dropShadow_3890_79070"
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
                    result="effect1_dropShadow_3890_79070"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_3890_79070"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_3890_79070"
                  x1="29.2375"
                  y1="17.0033"
                  x2="20.0562"
                  y2="28.8787"
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
            <svg className="border__style--layout-second z-[2]" width="624" height="481" viewBox="0 0 624 481" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M544.683 474.556L534.683 468.782V480.329L544.683 474.556ZM21.3887 474.556V475.556V474.556ZM601.206 20.5225H21.3887V22.5225H601.206V20.5225ZM0.388672 41.5225V454.556H2.38867V41.5225H0.388672ZM21.3887 475.556L535.683 475.556V473.556L21.3887 473.556L21.3887 475.556ZM0.388672 454.556C0.388672 466.154 9.79069 475.556 21.3887 475.556L21.3887 473.556C10.8953 473.556 2.38867 465.049 2.38867 454.556H0.388672ZM21.3887 20.5225C9.79073 20.5225 0.388672 29.9245 0.388672 41.5225H2.38867C2.38867 31.0291 10.8953 22.5225 21.3887 22.5225V20.5225Z" fill="#0CA5A5"/>
            <g filter="url(#filter0_d_5625_15077)">
            <ellipse cx="598.514" cy="21.5222" rx="16.0371" ry="15.9148" fill="#B7EACC" fillOpacity="0.4" shapeRendering="crispEdges"/>
            </g>
            <ellipse cx="598.516" cy="21.5223" rx="6.92764" ry="6.87481" fill="url(#paint0_linear_5625_15077)"/>
            <defs>
            <filter id="filter0_d_5625_15077" x="573.477" y="0.607422" width="50.0742" height="49.8301" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_5625_15077"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5625_15077"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5625_15077" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_5625_15077" x1="602.609" y1="16.6123" x2="593.515" y2="28.4645" gradientUnits="userSpaceOnUse">
            <stop stopColor="#82DFB5"/>
            <stop offset="0.464" stopColor="#00979A"/>
            </linearGradient>
            </defs>
            </svg>
          )}
          {viewportWidth >= 1728 && viewportWidth < 1920 && (
            <svg className="border__style--layout-second z-[2]" width="570" height="499" viewBox="0 0 570 499" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M516.667 492.684L506.667 486.911V498.458L516.667 492.684ZM21.8105 492.685V491.685V492.685ZM543.666 20.0371H21.8106V22.0371H543.666V20.0371ZM0.810547 41.0371V472.685H2.81055V41.0371H0.810547ZM21.8105 493.685L507.667 493.684V491.684L21.8105 491.685V493.685ZM0.810547 472.685C0.810547 484.283 10.2126 493.685 21.8105 493.685V491.685C11.3171 491.685 2.81055 483.178 2.81055 472.685H0.810547ZM21.8106 20.0371C10.2126 20.0371 0.810547 29.4391 0.810547 41.0371H2.81055C2.81055 30.5437 11.3171 22.0371 21.8106 22.0371V20.0371Z" fill="#0CA5A5"/>
            <g filter="url(#filter0_d_5629_19857)">
            <ellipse cx="544.836" cy="21.0371" rx="16.0219" ry="16.0371" fill="#B7EACC" fillOpacity="0.4" shapeRendering="crispEdges"/>
            </g>
            <ellipse cx="544.841" cy="21.037" rx="6.92108" ry="6.92764" fill="url(#paint0_linear_5629_19857)"/>
            <defs>
            <filter id="filter0_d_5629_19857" x="519.814" y="0" width="50.0439" height="50.0742" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_5629_19857"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5629_19857"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5629_19857" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_5629_19857" x1="548.93" y1="16.0893" x2="539.747" y2="27.9562" gradientUnits="userSpaceOnUse">
            <stop stopColor="#82DFB5"/>
            <stop offset="0.464" stopColor="#00979A"/>
            </linearGradient>
            </defs>
            </svg>
          )}
          {viewportWidth >= 1600 && viewportWidth < 1728 && (
            <svg
              className="border__style--layout-second z-[2]"
              width="599"
              height="852"
              viewBox="0 0 599 852"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M529.815 845.661L519.815 839.888V851.435L529.815 845.661ZM573.391 20.9912H21.5781V22.9912H573.391V20.9912ZM0.578125 41.9912V825.661H2.57812V41.9912H0.578125ZM21.5781 846.661H520.815V844.661H21.5781V846.661ZM0.578125 825.661C0.578125 837.259 9.98015 846.661 21.5781 846.661V844.661C11.0847 844.661 2.57812 836.155 2.57812 825.661H0.578125ZM21.5781 20.9912C9.98014 20.9912 0.578125 30.3932 0.578125 41.9912H2.57812C2.57812 31.4978 11.0847 22.9912 21.5781 22.9912V20.9912Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_1021_16461)">
                <circle
                  cx="573.507"
                  cy="21.9912"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="573.507"
                cy="21.9911"
                r="6.92764"
                fill="url(#paint0_linear_1021_16461)"
              />
              <defs>
                <filter
                  id="filter0_d_1021_16461"
                  x="548.47"
                  y="0.954102"
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
                  x1="577.6"
                  y1="17.0434"
                  x2="568.418"
                  y2="28.9188"
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
              className="border__style--layout-second z-[2]"
              width="532"
              height="408"
              viewBox="0 0 532 408"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M487.965 401.373L477.965 395.6V407.147L487.965 401.373ZM507.551 20.6738H21.1308V22.6738H507.551V20.6738ZM0.130859 41.6738V381.373H2.13086V41.6738H0.130859ZM21.1309 402.373H478.965V400.373H21.1309V402.373ZM0.130859 381.373C0.130859 392.971 9.53288 402.373 21.1309 402.373V400.373C10.6375 400.373 2.13086 391.866 2.13086 381.373H0.130859ZM21.1308 20.6738C9.53287 20.6738 0.130859 30.0759 0.130859 41.6738H2.13086C2.13086 31.1804 10.6374 22.6738 21.1308 22.6738V20.6738Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_5629_24590)">
                <circle
                  cx="506.455"
                  cy="21.6738"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="506.455"
                cy="21.6737"
                r="6.92764"
                fill="url(#paint0_linear_5629_24590)"
              />
              <defs>
                <filter
                  id="filter0_d_5629_24590"
                  x="481.418"
                  y="0.636719"
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
                    result="effect1_dropShadow_5629_24590"
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
                    result="effect1_dropShadow_5629_24590"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_5629_24590"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_5629_24590"
                  x1="510.548"
                  y1="16.726"
                  x2="501.367"
                  y2="28.6014"
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
              className="border__style--layout-second z-[2]"
              width="452"
              height="369"
              viewBox="0 0 452 369"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M399.633 362.98L389.633 357.207V368.754L399.633 362.98ZM427.177 21.5068H21.0429V23.5068H427.177V21.5068ZM0.0429688 42.5068V342.98H2.04297V42.5068H0.0429688ZM21.043 363.98H390.633V361.98H21.043V363.98ZM0.0429688 342.98C0.0429688 354.578 9.44499 363.98 21.043 363.98V361.98C10.5496 361.98 2.04297 353.474 2.04297 342.98H0.0429688ZM21.0429 21.5068C9.44497 21.5068 0.0429688 30.9089 0.0429688 42.5068H2.04297C2.04297 32.0134 10.5495 23.5068 21.0429 23.5068V21.5068Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_5629_25979)">
                <ellipse
                  cx="425.978"
                  cy="22.5064"
                  rx="16.0371"
                  ry="17.0269"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <ellipse
                cx="425.98"
                cy="22.5066"
                rx="6.92764"
                ry="7.35522"
                fill="url(#paint0_linear_5629_25979)"
              />
              <defs>
                <filter
                  id="filter0_d_5629_25979"
                  x="400.94"
                  y="0.479492"
                  width="50.0742"
                  height="52.0537"
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
                    result="effect1_dropShadow_5629_25979"
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
                    result="effect1_dropShadow_5629_25979"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_5629_25979"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_5629_25979"
                  x1="430.073"
                  y1="17.2535"
                  x2="420.194"
                  y2="29.2888"
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
          {viewportWidth >= 1920 && (
            <svg
              className="border__style--layout-third hidden s1920:block z-[2]"
              width="632"
              height="377"
              viewBox="0 0 632 377"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.92099 371.151L10.921 365.378L10.921 376.925L0.92099 371.151ZM610.18 371.151L610.18 372.151L610.18 371.151ZM125.444 20.8818L610.18 20.8818L610.18 22.8818L125.444 22.8818L125.444 20.8818ZM631.18 41.8818L631.18 351.151L629.18 351.151L629.18 41.8818L631.18 41.8818ZM610.18 372.151L9.92099 372.151L9.92099 370.151L610.18 370.151L610.18 372.151ZM631.18 351.151C631.18 362.749 621.778 372.151 610.18 372.151L610.18 370.151C620.673 370.151 629.18 361.645 629.18 351.151L631.18 351.151ZM610.18 20.8818C621.778 20.8818 631.18 30.2839 631.18 41.8818L629.18 41.8818C629.18 31.3884 620.673 22.8818 610.18 22.8818L610.18 20.8818Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_3871_77212)">
                <circle
                  cx="124.779"
                  cy="21.8818"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="124.781"
                cy="21.8817"
                r="6.92764"
                fill="url(#paint0_linear_3871_77212)"
              />
              <defs>
                <filter
                  id="filter0_d_3871_77212"
                  x="99.7422"
                  y="0.844727"
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
                    result="effect1_dropShadow_3871_77212"
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
                    result="effect1_dropShadow_3871_77212"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_3871_77212"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_3871_77212"
                  x1="128.874"
                  y1="16.934"
                  x2="119.693"
                  y2="28.8094"
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
              className="border__style--layout-third z-[2]"
              width="577"
              height="387"
              viewBox="0 0 577 387"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.622039 381.227L10.622 375.453L10.622 387L0.622039 381.227ZM82.1879 20.291L555.624 20.291L555.624 22.291L82.1879 22.291L82.1879 20.291ZM576.624 41.291L576.624 361.227L574.624 361.227L574.624 41.291L576.624 41.291ZM555.624 382.227L9.62204 382.227L9.62204 380.227L555.624 380.227L555.624 382.227ZM576.624 361.227C576.624 372.825 567.222 382.227 555.624 382.227L555.624 380.227C566.117 380.227 574.624 371.72 574.624 361.227L576.624 361.227ZM555.624 20.291C567.222 20.291 576.624 29.693 576.624 41.291L574.624 41.291C574.624 30.7976 566.117 22.291 555.624 22.291L555.624 20.291Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_3871_77312)">
                <circle
                  cx="85.8486"
                  cy="21.29"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="85.8524"
                cy="21.2899"
                r="6.92764"
                fill="url(#paint0_linear_3871_77312)"
              />
              <defs>
                <filter
                  id="filter0_d_3871_77312"
                  x="60.8115"
                  y="0.25293"
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
                    result="effect1_dropShadow_3871_77312"
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
                    result="effect1_dropShadow_3871_77312"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_3871_77312"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_3871_77312"
                  x1="89.9455"
                  y1="16.3422"
                  x2="80.7642"
                  y2="28.2176"
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
              className="border__style--layout-third z-[2]"
              width="573"
              height="377"
              viewBox="0 0 573 377"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.284149 370.295L10.2841 364.521L10.2841 376.068L0.284149 370.295ZM551.03 370.295L551.03 369.295L551.03 370.295ZM551.03 21.2949V22.2949V21.2949ZM41.4844 20.2949L551.03 20.2949V22.2949L41.4844 22.2949L41.4844 20.2949ZM572.03 41.2949L572.03 350.295L570.03 350.295L570.03 41.2949L572.03 41.2949ZM551.03 371.295L9.28415 371.295L9.28415 369.295L551.03 369.295L551.03 371.295ZM572.03 350.295C572.03 361.893 562.628 371.295 551.03 371.295L551.03 369.295C561.524 369.295 570.03 360.788 570.03 350.295L572.03 350.295ZM551.03 20.2949C562.628 20.2949 572.03 29.6969 572.03 41.2949L570.03 41.2949C570.03 30.8015 561.524 22.2949 551.03 22.2949V20.2949Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_3876_79061)">
                <circle
                  cx="40.0254"
                  cy="21.2939"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="40.0292"
                cy="21.2938"
                r="6.92764"
                fill="url(#paint0_linear_3876_79061)"
              />
              <defs>
                <filter
                  id="filter0_d_3876_79061"
                  x="14.9883"
                  y="0.256836"
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
                    result="effect1_dropShadow_3876_79061"
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
                    result="effect1_dropShadow_3876_79061"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_3876_79061"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_3876_79061"
                  x1="44.1222"
                  y1="16.3461"
                  x2="34.9409"
                  y2="28.2215"
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
              className="border__style--layout-third z-[2]"
              width="533"
              height="377"
              viewBox="0 0 533 377"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.250031 370.716L10.25 364.942L10.25 376.489L0.250031 370.716ZM511.613 370.716L511.613 371.716L511.613 370.716ZM44.7955 20.7158L511.613 20.7158L511.613 22.7158L44.7955 22.7158L44.7955 20.7158ZM532.613 41.7158L532.613 350.716L530.613 350.716L530.613 41.7158L532.613 41.7158ZM511.613 371.716L9.25003 371.716L9.25003 369.716L511.613 369.716L511.613 371.716ZM532.613 350.716C532.613 362.314 523.211 371.716 511.613 371.716L511.613 369.716C522.107 369.716 530.613 361.209 530.613 350.716L532.613 350.716ZM511.613 20.7158C523.211 20.7158 532.613 30.1178 532.613 41.7158L530.613 41.7158C530.613 31.2224 522.107 22.7158 511.613 22.7158L511.613 20.7158Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_1021_21358)">
                <circle
                  cx="46.3555"
                  cy="21.7158"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="46.3583"
                cy="21.7157"
                r="6.92764"
                fill="url(#paint0_linear_1021_21358)"
              />
              <defs>
                <filter
                  id="filter0_d_1021_21358"
                  x="21.3184"
                  y="0.678711"
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
                    result="effect1_dropShadow_1021_21358"
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
                    result="effect1_dropShadow_1021_21358"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1021_21358"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1021_21358"
                  x1="50.4513"
                  y1="16.768"
                  x2="41.27"
                  y2="28.6434"
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
              className="border__style--layout-third z-[2]"
              width="427"
              height="377"
              viewBox="0 0 427 377"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.865173 370.386L10.8652 364.612L10.8652 376.159L0.865173 370.386ZM405.429 370.386L405.429 369.386L405.429 370.386ZM405.429 21.3857L405.429 22.3857L405.429 21.3857ZM26.1987 20.3857L405.429 20.3857L405.429 22.3857L26.1987 22.3857L26.1987 20.3857ZM426.429 41.3857L426.429 350.386L424.429 350.386L424.429 41.3857L426.429 41.3857ZM405.429 371.386L9.86517 371.386L9.86517 369.386L405.429 369.386L405.429 371.386ZM426.429 350.386C426.429 361.984 417.027 371.386 405.429 371.386L405.429 369.386C415.922 369.386 424.429 360.879 424.429 350.386L426.429 350.386ZM405.429 20.3857C417.027 20.3857 426.429 29.7878 426.429 41.3857L424.429 41.3857C424.429 30.8923 415.922 22.3857 405.429 22.3857L405.429 20.3857Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_3906_79073)">
                <circle
                  cx="26.3838"
                  cy="21.3135"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="26.3866"
                cy="21.3134"
                r="6.92764"
                fill="url(#paint0_linear_3906_79073)"
              />
              <defs>
                <filter
                  id="filter0_d_3906_79073"
                  x="1.34668"
                  y="0.276367"
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
                    result="effect1_dropShadow_3906_79073"
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
                    result="effect1_dropShadow_3906_79073"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_3906_79073"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_3906_79073"
                  x1="30.4796"
                  y1="16.3656"
                  x2="21.2983"
                  y2="28.241"
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
    if (order === "fourth") {
      return (
        <>
          {viewportWidth >= 1920 && (
            <svg
              className="border__style--layout-fourth z-[2]"
              width="1070"
              height="828"
              viewBox="0 0 1070 828"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1069.7 821.808L1059.7 816.034V827.581L1069.7 821.808ZM21.5586 21.8076V22.8076V21.8076ZM663.976 20.8076L21.5586 20.8076V22.8076L663.976 22.8076V20.8076ZM0.558594 41.8076V801.808H2.55859V41.8076H0.558594ZM21.5586 822.808H1060.7V820.808H21.5586V822.808ZM0.558594 801.808C0.558594 813.406 9.96061 822.808 21.5586 822.808V820.808C11.0652 820.808 2.55859 812.301 2.55859 801.808H0.558594ZM21.5586 20.8076C9.96061 20.8076 0.558594 30.2096 0.558594 41.8076H2.55859C2.55859 31.3142 11.0652 22.8076 21.5586 22.8076V20.8076Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_1021_9942)">
                <circle
                  cx="663.979"
                  cy="21.8076"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="663.98"
                cy="21.8075"
                r="6.92764"
                fill="url(#paint0_linear_1021_9942)"
              />
              <defs>
                <filter
                  id="filter0_d_1021_9942"
                  x="638.941"
                  y="0.770508"
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
                  x1="668.073"
                  y1="16.8598"
                  x2="658.892"
                  y2="28.7352"
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
              className="border__style--layout-fourth z-[2]"
              width="949"
              height="812"
              viewBox="0 0 949 812"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M948.83 805.641L938.83 799.867V811.414L948.83 805.641ZM598.068 19.4004H21.8007V21.4004H598.068V19.4004ZM0.800781 40.4004V785.641H2.80078V40.4004H0.800781ZM21.8008 806.641H939.83V804.641H21.8008V806.641ZM0.800781 785.641C0.800781 797.239 10.2028 806.641 21.8008 806.641V804.641C11.3074 804.641 2.80078 796.134 2.80078 785.641H0.800781ZM21.8007 19.4004C10.2028 19.4004 0.800781 28.8024 0.800781 40.4004H2.80078C2.80078 29.907 11.3073 21.4004 21.8007 21.4004V19.4004Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_1021_14842)">
                <ellipse
                  cx="599.889"
                  cy="20.4"
                  rx="16.0371"
                  ry="14.7594"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <ellipse
                cx="599.892"
                cy="20.4001"
                rx="6.92764"
                ry="6.37569"
                fill="url(#paint0_linear_1021_14842)"
              />
              <defs>
                <filter
                  id="filter0_d_1021_14842"
                  x="574.852"
                  y="0.640625"
                  width="50.0742"
                  height="47.5186"
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
                  y1="15.8466"
                  x2="595.737"
                  y2="27.4394"
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
              className="border__style--layout-fourth z-[2]"
              width="1046"
              height="778"
              viewBox="0 0 1046 778"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1045.15 771.32L1035.15 765.547V777.094L1045.15 771.32ZM599.052 20.3203H21.5788V22.3203H599.052V20.3203ZM0.578797 41.3203L0.578143 751.32L2.57814 751.32L2.5788 41.3203L0.578797 41.3203ZM21.5781 772.32H1036.15V770.32H21.5781V772.32ZM0.578143 751.32C0.578133 762.918 9.98016 772.32 21.5781 772.32V770.32C11.0847 770.32 2.57813 761.814 2.57814 751.32L0.578143 751.32ZM21.5788 20.3203C9.98087 20.3203 0.578808 29.7223 0.578797 41.3203L2.5788 41.3203C2.57881 30.8269 11.0854 22.3203 21.5788 22.3203V20.3203Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_1021_16467)">
                <circle
                  cx="601.751"
                  cy="21.3203"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="601.754"
                cy="21.3202"
                r="6.92764"
                fill="url(#paint0_linear_1021_16467)"
              />
              <defs>
                <filter
                  id="filter0_d_1021_16467"
                  x="576.714"
                  y="0.283203"
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
                  x1="605.847"
                  y1="16.3725"
                  x2="596.666"
                  y2="28.2479"
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
              className="border__style--layout-fourth z-[2]"
              width="974"
              height="764"
              viewBox="0 0 974 764"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M973.535 757.625L963.535 751.851V763.399L973.535 757.625ZM560.133 20.1934H21.0196V22.1934H560.133V20.1934ZM0.0195312 41.1934V737.625H2.01953V41.1934H0.0195312ZM21.0195 758.625H964.535V756.625H21.0195V758.625ZM0.0195312 737.625C0.0195312 749.223 9.42155 758.625 21.0195 758.625V756.625C10.5261 756.625 2.01953 748.118 2.01953 737.625H0.0195312ZM21.0196 20.1934C9.42158 20.1934 0.0195312 29.5954 0.0195312 41.1934H2.01953C2.01953 30.7 10.5261 22.1934 21.0196 22.1934V20.1934Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_1021_21361)">
                <circle
                  cx="562.057"
                  cy="21.1934"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="562.059"
                cy="21.1933"
                r="6.92764"
                fill="url(#paint0_linear_1021_21361)"
              />
              <defs>
                <filter
                  id="filter0_d_1021_21361"
                  x="537.02"
                  y="0.15625"
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
                  y1="16.2455"
                  x2="556.971"
                  y2="28.1209"
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
              className="border__style--layout-fourth z-[2]"
              width="758"
              height="688"
              viewBox="0 0 758 688"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M757.648 681.259L747.648 675.485V687.032L757.648 681.259ZM0.952148 41.2588V661.259H2.95215V41.2588H0.952148ZM21.9521 682.259H748.648V680.259H21.9521V682.259ZM461.754 20.2588H231.853V22.2588H461.754V20.2588ZM231.853 20.2588H21.9522V22.2588H231.853V20.2588ZM0.952148 661.259C0.952148 672.857 10.3542 682.259 21.9521 682.259V680.259C11.4587 680.259 2.95215 671.752 2.95215 661.259H0.952148ZM2.95215 41.2588C2.95215 30.7654 11.4587 22.2588 21.9522 22.2588V20.2588C10.3542 20.2588 0.952148 29.6608 0.952148 41.2588H2.95215Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_3907_79074)">
                <circle
                  cx="463.474"
                  cy="21.2588"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="463.476"
                cy="21.2587"
                r="6.92764"
                fill="url(#paint0_linear_3907_79074)"
              />
              <defs>
                <filter
                  id="filter0_d_3907_79074"
                  x="438.437"
                  y="0.22168"
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
                    result="effect1_dropShadow_3907_79074"
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
                    result="effect1_dropShadow_3907_79074"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_3907_79074"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_3907_79074"
                  x1="467.569"
                  y1="16.3109"
                  x2="458.388"
                  y2="28.1863"
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
    // about
    // if (order === "five") {
    //   return (
    //     <>
    //       {viewportWidth >= 1920 && (
    //         <svg className="border__style--layout-five z-[2]" width="617" height="765" viewBox="0 0 617 765" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <circle cx="44.998" cy="5.71875" r="5" fill="#2E5A90"/>
    //         <path d="M45.4019 5.71875H585.843C602.411 5.71875 615.843 19.1502 615.843 35.7188V733.797C615.843 750.366 602.411 763.797 585.843 763.797H0.708984" stroke="#2E5A90"/>
    //         </svg>

    //       )}
    //       {viewportWidth >= 1728 && viewportWidth < 1920 && (
    //         <svg className="border__style--layout-five z-[2]" width="531" height="764" viewBox="0 0 531 764" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <circle cx="44.8262" cy="5.21875" r="5" fill="#2E5A90"/>
    //         <path d="M45.6235 5.21875H499.774C516.343 5.21875 529.774 18.6502 529.774 35.2188V733.297C529.774 749.866 516.343 763.297 499.774 763.297H0.536998" stroke="#2E5A90"/>
    //         </svg>

    //       )}
    //       {viewportWidth >= 1512 && viewportWidth < 1728 && (
    //         <svg className="border__style--layout-five z-[2]" width="517" height="764" viewBox="0 0 517 764" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <circle cx="44.5479" cy="5.22266" r="5" fill="#2E5A90"/>
    //         <path d="M44.2129 5.22266H486.205C502.774 5.22266 516.205 18.6541 516.205 35.2227V733.301C516.205 749.87 502.774 763.301 486.205 763.301H0.25868" stroke="#2E5A90"/>
    //         </svg>
    //       )}
    //       {viewportWidth >= 1280 && viewportWidth < 1512 && (
    //         <svg className="border__style--layout-five z-[2]" width="395" height="661" viewBox="0 0 395 661" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <circle cx="53.8662" cy="5.23047" r="5" fill="#2E5A90"/>
    //         <path d="M52.5552 5.23047H363.662C380.23 5.23047 393.662 18.6619 393.662 35.2305V629.605C393.662 646.173 380.23 659.604 363.662 659.604H0.829102" stroke="#2E5A90"/>
    //         </svg>
    //       )}
    //     </>
    //   );
    // }
    // if (order === "six") {
    //   return (
    //     <>
    //       {viewportWidth >= 1920 && (
    //         <svg className="border__style--layout-six z-[2]" width="621" height="542" viewBox="0 0 621 542" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <circle cx="615.828" cy="5.0625" r="5" fill="#2E5A90"/>
    //         <path d="M610.825 5.0625H30.9454C14.3768 5.0625 0.945312 18.494 0.945312 35.0625V511.023C0.945312 527.592 14.3768 541.023 30.9453 541.023H610.825" stroke="#2E5A90"/>
    //         </svg>
    //       )}
    //       {viewportWidth >= 1728 && viewportWidth < 1920 && (
    //         <svg className="border__style--layout-six z-[2]" width="536" height="543" viewBox="0 0 536 543" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <circle cx="530.07" cy="5.875" r="5" fill="#2E5A90"/>
    //         <path d="M525.068 5.875H31.085C14.5164 5.875 1.08496 19.3065 1.08496 35.875V511.835C1.08496 528.404 14.5164 541.835 31.085 541.835H525.068" stroke="#2E5A90"/>
    //         </svg>
    //       )}
    //       {viewportWidth >= 1512 && viewportWidth < 1728 && (
    //         <svg className="border__style--layout-six z-[2]" width="436" height="489" viewBox="0 0 436 489" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <circle cx="430.951" cy="5.89844" r="5" fill="#2E5A90"/>
    //         <path d="M425.949 5.89844H30.5479C13.9793 5.89844 0.547852 19.3299 0.547852 35.8984V457.952C0.547852 474.521 13.9793 487.952 30.5479 487.952H425.949" stroke="#2E5A90"/>
    //         </svg>
    //       )}
    //       {viewportWidth >= 1280 && viewportWidth < 1512 && (
    //         <svg className="border__style--layout-six z-[2]" width="400" height="440" viewBox="0 0 400 440" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <circle cx="394.597" cy="5.25391" r="5" fill="#2E5A90"/>
    //         <path d="M394.681 5.25391H30.6494C14.0809 5.25391 0.649414 18.6854 0.649414 35.2539V409.072C0.649414 425.64 14.0809 439.072 30.6494 439.072H394.681" stroke="#2E5A90"/>
    //         </svg>
    //       )}
    //     </>
    //   );
    // }
    // if (order === "seven") {
    //   return (
    //     <>
    //       {viewportWidth >= 1920 && (
    //         <svg className="border__style--layout-seven z-[2]" width="662" height="721" viewBox="0 0 662 721" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <circle cx="5.94531" cy="5.49219" r="5" fill="#2E5A90"/>
    //         <path d="M5.49609 5.49219H631.473C648.041 5.49219 661.473 18.9236 661.473 35.4922V690.325C661.473 706.893 648.041 720.325 631.473 720.325H46.3388" stroke="#2E5A90"/>
    //         </svg>

    //       )}
    //       {viewportWidth >= 1728 && viewportWidth < 1920 && (
    //         <svg className="border__style--layout-seven z-[2]" width="576" height="722" viewBox="0 0 576 722" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <circle cx="5.08496" cy="5.96484" r="5" fill="#2E5A90"/>
    //         <path d="M5.7793 5.96484H544.716C561.284 5.96484 574.716 19.3963 574.716 35.9648V690.798C574.716 707.366 561.284 720.798 544.716 720.798H41.5479" stroke="#2E5A90"/>
    //         </svg>
    //       )}
    //       {viewportWidth >= 1512 && viewportWidth < 1728 && (
    //         <svg className="border__style--layout-seven z-[2]" width="563" height="721" viewBox="0 0 563 721" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <circle cx="5.83008" cy="5.44141" r="5" fill="#2E5A90"/>
    //         <path d="M6.00293 5.44141H532.169C548.738 5.44141 562.169 18.8729 562.169 35.4414V690.274C562.169 706.843 548.738 720.274 532.169 720.274H41.6845" stroke="#2E5A90"/>
    //         </svg>
    //       )}
    //       {viewportWidth >= 1280 && viewportWidth < 1512 && (
    //         <svg className="border__style--layout-seven z-[2]" width="426" height="586" viewBox="0 0 426 586" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <circle cx="5.22754" cy="5.32422" r="5" fill="#2E5A90"/>
    //         <path d="M10.2276 5.32422H395.103C411.671 5.32422 425.103 18.7557 425.103 35.3242V554.525C425.103 571.094 411.671 584.525 395.103 584.525H29.2114" stroke="#2E5A90"/>
    //         </svg>

    //       )}
    //     </>
    //   );
    // }
  }

  return (
    <div className={`${className ? className : ""} round40 s1280:relative`}>
      <div
        className={`${
          classLabel ? classLabel : "flex-cen"
        }  s1280:my-0 my-10 s1280:absolute s1280:-top-0 s1280:left-0 w-full s1600:-top-3`}
      >
        <h2 className="w-fit font-semibold text-[20px] s1280:text-[28px] s1512:text-[30px] s1728:text-[48px] s1280:-mt-2 text-[#333333] z-[4]">
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
