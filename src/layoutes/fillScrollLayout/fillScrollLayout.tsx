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

    const pathLength = path?.getTotalLength() ?? 0;
    const pathLength2 = path2?.getTotalLength() ?? 0;
    const pathLength3 = path3?.getTotalLength() ?? 0;
    const pathLength4 = path4?.getTotalLength() ?? 0;
    const pathLength5 = path5?.getTotalLength() ?? 0;

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
            <svg className="border__style--layout-first hidden s1920:block z-[2]" width="540" height="752" viewBox="0 0 540 752" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M53.5065 745.381L63.5065 739.607L63.5065 751.154L53.5065 745.381ZM518.559 745.381L518.559 746.381L518.559 745.381ZM19.5599 18.5137L518.559 18.5137L518.559 20.5137L19.5599 20.5137L19.5599 18.5137ZM539.559 39.5137L539.559 725.381L537.559 725.381L537.559 39.5137L539.559 39.5137ZM518.559 746.381L62.5065 746.381L62.5065 744.381L518.559 744.381L518.559 746.381ZM539.559 725.381C539.559 736.979 530.157 746.381 518.559 746.381L518.559 744.381C529.052 744.381 537.559 735.874 537.559 725.381L539.559 725.381ZM518.559 18.5137C530.157 18.5137 539.559 27.9157 539.559 39.5137L537.559 39.5137C537.559 29.0203 529.052 20.5137 518.559 20.5137L518.559 18.5137Z" fill="#0CA5A5"/>
            <g filter="url(#filter0_d_1021_9951)">
            <ellipse cx="23.6943" cy="19.514" rx="14.1318" ry="13.722" fill="#B7EACC" fillOpacity="0.4" shapeRendering="crispEdges"/>
            </g>
            <ellipse cx="23.6964" cy="19.5135" rx="6.10461" ry="5.92756" fill="url(#paint0_linear_1021_9951)"/>
            <defs>
            <filter id="filter0_d_1021_9951" x="0.5625" y="0.791992" width="46.2637" height="45.4443" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1021_9951"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1021_9951"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1021_9951" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_1021_9951" x1="27.3032" y1="15.28" x2="19.5084" y2="25.6631" gradientUnits="userSpaceOnUse">
            <stop stopColor="#82DFB5"/>
            <stop offset="0.464" stopColor="#00979A"/>
            </linearGradient>
            </defs>
            </svg>
            
            
           
          )}
          {viewportWidth >= 1728 && viewportWidth < 1920 && (
            <svg className="border__style--layout-first z-[2]" width="480" height="769" viewBox="0 0 480 769" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M51.311 762.276L61.311 756.503L61.311 768.05L51.311 762.276ZM21.6926 20.0049L458.173 20.0049L458.173 22.0049L21.6926 22.0049L21.6926 20.0049ZM479.173 41.0049L479.173 742.276L477.173 742.276L477.173 41.0049L479.173 41.0049ZM458.173 763.276L60.311 763.276L60.311 761.276L458.173 761.276L458.173 763.276ZM479.173 742.276C479.173 753.874 469.771 763.276 458.173 763.276L458.173 761.276C468.666 761.276 477.173 752.77 477.173 742.276L479.173 742.276ZM458.173 20.0049C469.771 20.0049 479.173 29.4069 479.173 41.0049L477.173 41.0049C477.173 30.5115 468.666 22.0049 458.173 22.0049L458.173 20.0049Z" fill="#0CA5A5"/>
            <g filter="url(#filter0_d_1021_14851)">
            <ellipse cx="25.7988" cy="21.0049" rx="16.0371" ry="15.3828" fill="#B7EACC" fillOpacity="0.4" shapeRendering="crispEdges"/>
            </g>
            <ellipse cx="25.8026" cy="21.0054" rx="6.92764" ry="6.645" fill="url(#paint0_linear_1021_14851)"/>
            <defs>
            <filter id="filter0_d_1021_14851" x="0.761719" y="0.62207" width="50.0742" height="48.7656" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1021_14851"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1021_14851"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1021_14851" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_1021_14851" x1="29.8957" y1="16.2595" x2="21.1879" y2="28.0015" gradientUnits="userSpaceOnUse">
            <stop stopColor="#82DFB5"/>
            <stop offset="0.464" stopColor="#00979A"/>
            </linearGradient>
            </defs>
            </svg>
          
          )}
          {viewportWidth >= 1600 && viewportWidth < 1728 && (
            <svg className="border__style--layout-first z-[2]" width="568" height="754" viewBox="0 0 568 754" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M104.659 747.987L114.659 742.214L114.659 753.761L104.659 747.987ZM546.254 747.987L546.254 748.987L546.254 747.987ZM24.3087 20.2012L546.254 20.2012L546.254 22.2012L24.3087 22.2012L24.3087 20.2012ZM567.254 41.2012L567.254 727.987L565.254 727.987L565.254 41.2012L567.254 41.2012ZM546.254 748.987L113.659 748.987L113.659 746.987L546.254 746.987L546.254 748.987ZM567.254 727.987C567.254 739.585 557.852 748.987 546.254 748.987L546.254 746.987C556.747 746.987 565.254 738.481 565.254 727.987L567.254 727.987ZM546.254 20.2012C557.852 20.2012 567.254 29.6032 567.254 41.2012L565.254 41.2012C565.254 30.7078 556.747 22.2012 546.254 22.2012L546.254 20.2012Z" fill="#0CA5A5"/>
            <g filter="url(#filter0_d_1021_16476)">
            <circle cx="25.0322" cy="21.2012" r="16.0371" fill="#B7EACC" fillOpacity="0.4" shapeRendering="crispEdges"/>
            </g>
            <circle cx="25.0351" cy="21.2011" r="6.92764" fill="url(#paint0_linear_1021_16476)"/>
            <defs>
            <filter id="filter0_d_1021_16476" x="-0.00488281" y="0.164062" width="50.0742" height="50.0742" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1021_16476"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1021_16476"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1021_16476" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_1021_16476" x1="29.1281" y1="16.2533" x2="19.9468" y2="28.1287" gradientUnits="userSpaceOnUse">
            <stop stopColor="#82DFB5"/>
            <stop offset="0.464" stopColor="#00979A"/>
            </linearGradient>
            </defs>
            </svg>
          )}
          {viewportWidth >= 1512 && viewportWidth < 1600 && (
            <svg className="border__style--layout-first z-[2]" width="527" height="661" viewBox="0 0 527 661" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M98.3472 654.915L108.347 649.142L108.347 660.689L98.3472 654.915ZM505.254 654.915L505.254 655.915L505.254 654.915ZM24.0352 20.2012L505.254 20.2012L505.254 22.2012L24.0352 22.2012L24.0352 20.2012ZM526.254 41.2012L526.254 634.915L524.254 634.915L524.254 41.2012L526.254 41.2012ZM505.254 655.915L107.347 655.915L107.347 653.915L505.254 653.915L505.254 655.915ZM526.254 634.915C526.254 646.513 516.852 655.915 505.254 655.915L505.254 653.915C515.747 653.915 524.254 645.408 524.254 634.915L526.254 634.915ZM505.254 20.2012C516.852 20.2012 526.254 29.6032 526.254 41.2012L524.254 41.2012C524.254 30.7078 515.747 22.2012 505.254 22.2012L505.254 20.2012Z" fill="#0CA5A5"/>
            <g filter="url(#filter0_d_1021_16476)">
            <circle cx="25.6982" cy="21.2012" r="16.0371" fill="#B7EACC" fillOpacity="0.4" shapeRendering="crispEdges"/>
            </g>
            <circle cx="25.7011" cy="21.2011" r="6.92764" fill="url(#paint0_linear_1021_16476)"/>
            <defs>
            <filter id="filter0_d_1021_16476" x="0.661133" y="0.164062" width="50.0742" height="50.0742" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1021_16476"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1021_16476"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1021_16476" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_1021_16476" x1="29.7941" y1="16.2533" x2="20.6128" y2="28.1287" gradientUnits="userSpaceOnUse">
            <stop stopColor="#82DFB5"/>
            <stop offset="0.464" stopColor="#00979A"/>
            </linearGradient>
            </defs>
            </svg>
          )}
          {viewportWidth >= 1280 && viewportWidth < 1512 && (

            <svg className="border__style--layout-first z-[2]" width="442" height="728" viewBox="0 0 442 728" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M79.8911 721.951L89.8911 716.178L89.8911 727.725L79.8911 721.951ZM29.0791 20.9512L420.883 20.9512L420.883 22.9512L29.0791 22.9512L29.0791 20.9512ZM441.883 41.9512L441.883 701.951L439.883 701.951L439.883 41.9512L441.883 41.9512ZM420.883 722.951L88.8911 722.951L88.8911 720.951L420.883 720.951L420.883 722.951ZM441.883 701.951C441.883 713.549 432.481 722.951 420.883 722.951L420.883 720.951C431.376 720.951 439.883 712.445 439.883 701.951L441.883 701.951ZM420.883 20.9512C432.481 20.9512 441.883 30.3532 441.883 41.9512L439.883 41.9512C439.883 31.4578 431.376 22.9512 420.883 22.9512L420.883 20.9512Z" fill="#0CA5A5"/>
            <g filter="url(#filter0_d_3890_79070)">
            <circle cx="25.1406" cy="21.9512" r="16.0371" fill="#B7EACC" fillOpacity="0.4" shapeRendering="crispEdges"/>
            </g>
            <circle cx="25.1435" cy="21.9511" r="6.92764" fill="url(#paint0_linear_3890_79070)"/>
            <defs>
            <filter id="filter0_d_3890_79070" x="0.103516" y="0.914062" width="50.0742" height="50.0742" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_3890_79070"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3890_79070"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3890_79070" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_3890_79070" x1="29.2365" y1="17.0033" x2="20.0552" y2="28.8787" gradientUnits="userSpaceOnUse">
            <stop stopColor="#82DFB5"/>
            <stop offset="0.464" stopColor="#00979A"/>
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
              className="border__style--layout-second z-[2]"
              width="545"
              height="851"
              viewBox="0 0 545 851"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M544.853 845.148L534.853 839.375V850.922L544.853 845.148ZM21.5586 845.149L21.5586 844.149L21.5586 845.149ZM491.439 20.4785H21.5586V22.4785H491.439V20.4785ZM0.558594 41.4785V825.149H2.55859V41.4785H0.558594ZM21.5586 846.149L535.853 846.148V844.148L21.5586 844.149L21.5586 846.149ZM0.558594 825.149C0.558594 836.747 9.96062 846.149 21.5586 846.149L21.5586 844.149C11.0652 844.149 2.55859 835.642 2.55859 825.149H0.558594ZM21.5586 20.4785C9.96062 20.4785 0.558594 29.8805 0.558594 41.4785H2.55859C2.55859 30.9851 11.0652 22.4785 21.5586 22.4785V20.4785Z"
                fill="#0CA5A5"
              />
              <g filter="url(#filter0_d_1021_9936)">
                <circle
                  cx="490.268"
                  cy="21.4785"
                  r="16.0371"
                  fill="#B7EACC"
                  fillOpacity="0.4"
                  shapeRendering="crispEdges"
                />
              </g>
              <circle
                cx="490.269"
                cy="21.4784"
                r="6.92764"
                fill="url(#paint0_linear_1021_9936)"
              />
              <defs>
                <filter
                  id="filter0_d_1021_9936"
                  x="465.23"
                  y="0.441406"
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
                  x1="494.362"
                  y1="16.5307"
                  x2="485.181"
                  y2="28.4061"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#82DFB5" />
                  <stop offset="0.464" stopColor="#00979A" />
                </linearGradient>
              </defs>
            </svg>
          )}
          {viewportWidth >= 1728 && viewportWidth < 1920 && (
            <svg className="border__style--layout-second z-[2]" width="518" height="850" viewBox="0 0 518 850" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M517.23 843.752L507.23 837.978L507.23 849.525L517.23 843.752ZM21.8867 843.752L21.8867 842.752L21.8867 843.752ZM430.382 20.3486H21.8867V22.3486H430.382V20.3486ZM0.886719 41.3486V823.752H2.88672V41.3486H0.886719ZM21.8867 844.752L508.23 844.752L508.23 842.752L21.8867 842.752L21.8867 844.752ZM0.886719 823.752C0.886719 835.35 10.2887 844.752 21.8867 844.752L21.8867 842.752C11.3933 842.752 2.88672 834.245 2.88672 823.752H0.886719ZM21.8867 20.3486C10.2887 20.3486 0.886719 29.7507 0.886719 41.3486H2.88672C2.88672 30.8552 11.3933 22.3486 21.8867 22.3486V20.3486Z" fill="#0CA5A5"/>
            <g filter="url(#filter0_d_1021_14836)">
            <circle cx="430.967" cy="21.3486" r="16.0371" fill="#B7EACC" fillOpacity="0.4" shapeRendering="crispEdges"/>
            </g>
            <circle cx="430.971" cy="21.3485" r="6.92764" fill="url(#paint0_linear_1021_14836)"/>
            <defs>
            <filter id="filter0_d_1021_14836" x="405.93" y="0.311523" width="50.0742" height="50.0742" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1021_14836"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1021_14836"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1021_14836" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_1021_14836" x1="435.064" y1="16.4008" x2="425.882" y2="28.2762" gradientUnits="userSpaceOnUse">
            <stop stopColor="#82DFB5"/>
            <stop offset="0.464" stopColor="#00979A"/>
            </linearGradient>
            </defs>
            </svg>
            
          
            
          )}
          {viewportWidth >= 1600 && viewportWidth < 1728 && (
            
            <svg className="border__style--layout-second z-[2]" width="517" height="852" viewBox="0 0 517 852" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M516.281 845.661L506.281 839.888L506.281 851.435L516.281 845.661ZM21.5781 845.661L21.5781 844.661L21.5781 845.661ZM468.113 20.9912H21.5781V22.9912H468.113V20.9912ZM0.578125 41.9912V825.661H2.57812V41.9912H0.578125ZM21.5781 846.661L507.281 846.661L507.281 844.661L21.5781 844.661L21.5781 846.661ZM0.578125 825.661C0.578125 837.259 9.98014 846.661 21.5781 846.661L21.5781 844.661C11.0847 844.661 2.57812 836.155 2.57812 825.661H0.578125ZM21.5781 20.9912C9.98014 20.9912 0.578125 30.3932 0.578125 41.9912H2.57812C2.57812 31.4978 11.0847 22.9912 21.5781 22.9912V20.9912Z" fill="#0CA5A5"/>
            <g filter="url(#filter0_d_1021_16461)">
            <circle cx="465.056" cy="21.9912" r="16.0371" fill="#B7EACC" fillOpacity="0.4" shapeRendering="crispEdges"/>
            </g>
            <circle cx="465.056" cy="21.9911" r="6.92764" fill="url(#paint0_linear_1021_16461)"/>
            <defs>
            <filter id="filter0_d_1021_16461" x="440.019" y="0.954102" width="50.0742" height="50.0742" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1021_16461"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1021_16461"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1021_16461" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_1021_16461" x1="469.149" y1="17.0434" x2="459.967" y2="28.9188" gradientUnits="userSpaceOnUse">
            <stop stopColor="#82DFB5"/>
            <stop offset="0.464" stopColor="#00979A"/>
            </linearGradient>
            </defs>
            </svg>

          )}
          {viewportWidth >= 1512 && viewportWidth < 1600 && (
            <svg className="border__style--layout-second z-[2]" width="489" height="834" viewBox="0 0 489 834" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M488.623 827.716L478.623 821.942V833.489L488.623 827.716ZM464.08 20.3496H21.7891V22.3496H464.08V20.3496ZM0.789062 41.3496V807.716H2.78906V41.3496H0.789062ZM21.7891 828.716H479.623V826.716H21.7891V828.716ZM0.789062 807.716C0.789062 819.314 10.1911 828.716 21.7891 828.716V826.716C11.2957 826.716 2.78906 818.209 2.78906 807.716H0.789062ZM21.7891 20.3496C10.1911 20.3496 0.789062 29.7516 0.789062 41.3496H2.78906C2.78906 30.8562 11.2957 22.3496 21.7891 22.3496V20.3496Z" fill="#0CA5A5"/>
            <g filter="url(#filter0_d_1021_21355)">
            <circle cx="461.283" cy="21.3496" r="16.0371" fill="#B7EACC" fillOpacity="0.4" shapeRendering="crispEdges"/>
            </g>
            <circle cx="461.286" cy="21.3495" r="6.92764" fill="url(#paint0_linear_1021_21355)"/>
            <defs>
            <filter id="filter0_d_1021_21355" x="436.246" y="0.3125" width="50.0742" height="50.0742" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1021_21355"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1021_21355"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1021_21355" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_1021_21355" x1="465.379" y1="16.4018" x2="456.198" y2="28.2772" gradientUnits="userSpaceOnUse">
            <stop stopColor="#82DFB5"/>
            <stop offset="0.464" stopColor="#00979A"/>
            </linearGradient>
            </defs>
            </svg>
          )}
          {viewportWidth >= 1280 && viewportWidth < 1512 && (
            <svg className="border__style--layout-second z-[2]" width="400" height="762" viewBox="0 0 400 762" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M399.986 755.946L389.986 750.172V761.719L399.986 755.946ZM352.552 21.9727H21.3955V23.9727H352.552V21.9727ZM0.395508 42.9727V735.946H2.39551V42.9727H0.395508ZM21.3955 756.946H390.986V754.946H21.3955V756.946ZM0.395508 735.946C0.395508 747.544 9.79753 756.946 21.3955 756.946V754.946C10.9021 754.946 2.39551 746.439 2.39551 735.946H0.395508ZM21.3955 21.9727C9.79751 21.9727 0.395508 31.3747 0.395508 42.9727H2.39551C2.39551 32.4792 10.9021 23.9727 21.3955 23.9727V21.9727Z" fill="#0CA5A5"/>
            <g filter="url(#filter0_d_3901_79072)">
            <ellipse cx="357.11" cy="22.9722" rx="16.0371" ry="17.0269" fill="#B7EACC" fillOpacity="0.4" shapeRendering="crispEdges"/>
            </g>
            <ellipse cx="357.113" cy="22.9724" rx="6.92764" ry="7.35522" fill="url(#paint0_linear_3901_79072)"/>
            <defs>
            <filter id="filter0_d_3901_79072" x="332.073" y="0.945312" width="50.0742" height="52.0537" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_3901_79072"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3901_79072"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3901_79072" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_3901_79072" x1="361.206" y1="17.7193" x2="351.327" y2="29.7547" gradientUnits="userSpaceOnUse">
            <stop stopColor="#82DFB5"/>
            <stop offset="0.464" stopColor="#00979A"/>
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
            <svg className="border__style--layout-third z-[2]" width="577" height="387" viewBox="0 0 577 387" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.622039 381.227L10.622 375.453L10.622 387L0.622039 381.227ZM82.1879 20.291L555.624 20.291L555.624 22.291L82.1879 22.291L82.1879 20.291ZM576.624 41.291L576.624 361.227L574.624 361.227L574.624 41.291L576.624 41.291ZM555.624 382.227L9.62204 382.227L9.62204 380.227L555.624 380.227L555.624 382.227ZM576.624 361.227C576.624 372.825 567.222 382.227 555.624 382.227L555.624 380.227C566.117 380.227 574.624 371.72 574.624 361.227L576.624 361.227ZM555.624 20.291C567.222 20.291 576.624 29.693 576.624 41.291L574.624 41.291C574.624 30.7976 566.117 22.291 555.624 22.291L555.624 20.291Z" fill="#0CA5A5"/>
            <g filter="url(#filter0_d_3871_77312)">
            <circle cx="85.8486" cy="21.29" r="16.0371" fill="#B7EACC" fillOpacity="0.4" shapeRendering="crispEdges"/>
            </g>
            <circle cx="85.8524" cy="21.2899" r="6.92764" fill="url(#paint0_linear_3871_77312)"/>
            <defs>
            <filter id="filter0_d_3871_77312" x="60.8115" y="0.25293" width="50.0742" height="50.0742" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_3871_77312"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3871_77312"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3871_77312" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_3871_77312" x1="89.9455" y1="16.3422" x2="80.7642" y2="28.2176" gradientUnits="userSpaceOnUse">
            <stop stopColor="#82DFB5"/>
            <stop offset="0.464" stopColor="#00979A"/>
            </linearGradient>
            </defs>
            </svg>
          )}
          {viewportWidth >= 1600 && viewportWidth < 1728 && (
            <svg className="border__style--layout-third z-[2]" width="573" height="377" viewBox="0 0 573 377" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.284149 370.295L10.2841 364.521L10.2841 376.068L0.284149 370.295ZM551.03 370.295L551.03 369.295L551.03 370.295ZM74.7118 20.2949L551.03 20.2949L551.03 22.2949L74.7118 22.2949L74.7118 20.2949ZM572.03 41.2949L572.03 350.295L570.03 350.295L570.03 41.2949L572.03 41.2949ZM551.03 371.295L9.28415 371.295L9.28415 369.295L551.03 369.295L551.03 371.295ZM572.03 350.295C572.03 361.893 562.628 371.295 551.03 371.295L551.03 369.295C561.524 369.295 570.03 360.788 570.03 350.295L572.03 350.295ZM551.03 20.2949C562.628 20.2949 572.03 29.6969 572.03 41.2949L570.03 41.2949C570.03 30.8015 561.524 22.2949 551.03 22.2949L551.03 20.2949Z" fill="#0CA5A5"/>
            <g filter="url(#filter0_d_3876_79061)">
            <circle cx="72.7881" cy="21.2939" r="16.0371" fill="#B7EACC" fillOpacity="0.4" shapeRendering="crispEdges"/>
            </g>
            <circle cx="72.7919" cy="21.2938" r="6.92764" fill="url(#paint0_linear_3876_79061)"/>
            <defs>
            <filter id="filter0_d_3876_79061" x="47.751" y="0.256836" width="50.0742" height="50.0742" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_3876_79061"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3876_79061"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3876_79061" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_3876_79061" x1="76.8849" y1="16.3461" x2="67.7036" y2="28.2215" gradientUnits="userSpaceOnUse">
            <stop stopColor="#82DFB5"/>
            <stop offset="0.464" stopColor="#00979A"/>
            </linearGradient>
            </defs>
            </svg>
          

          )}
          {viewportWidth >= 1512 && viewportWidth < 1600 && (
            <svg className="border__style--layout-third z-[2]" width="533" height="377" viewBox="0 0 533 377" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.250031 370.716L10.25 364.942L10.25 376.489L0.250031 370.716ZM511.613 370.716L511.613 371.716L511.613 370.716ZM44.7955 20.7158L511.613 20.7158L511.613 22.7158L44.7955 22.7158L44.7955 20.7158ZM532.613 41.7158L532.613 350.716L530.613 350.716L530.613 41.7158L532.613 41.7158ZM511.613 371.716L9.25003 371.716L9.25003 369.716L511.613 369.716L511.613 371.716ZM532.613 350.716C532.613 362.314 523.211 371.716 511.613 371.716L511.613 369.716C522.107 369.716 530.613 361.209 530.613 350.716L532.613 350.716ZM511.613 20.7158C523.211 20.7158 532.613 30.1178 532.613 41.7158L530.613 41.7158C530.613 31.2224 522.107 22.7158 511.613 22.7158L511.613 20.7158Z" fill="#0CA5A5"/>
            <g filter="url(#filter0_d_1021_21358)">
            <circle cx="46.3555" cy="21.7158" r="16.0371" fill="#B7EACC" fillOpacity="0.4" shapeRendering="crispEdges"/>
            </g>
            <circle cx="46.3583" cy="21.7157" r="6.92764" fill="url(#paint0_linear_1021_21358)"/>
            <defs>
            <filter id="filter0_d_1021_21358" x="21.3184" y="0.678711" width="50.0742" height="50.0742" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1021_21358"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1021_21358"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1021_21358" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_1021_21358" x1="50.4513" y1="16.768" x2="41.27" y2="28.6434" gradientUnits="userSpaceOnUse">
            <stop stopColor="#82DFB5"/>
            <stop offset="0.464" stopColor="#00979A"/>
            </linearGradient>
            </defs>
            </svg>
           
          )}
          {viewportWidth >= 1280 && viewportWidth < 1512 && (
            <svg className="border__style--layout-third z-[2]" width="474" height="377" viewBox="0 0 474 377" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.748077 370.386L10.7481 364.612L10.7481 376.159L0.748077 370.386ZM452.43 370.386L452.43 369.386L452.43 370.386ZM114.436 20.3857L452.43 20.3857V22.3857L114.436 22.3857V20.3857ZM473.43 41.3857L473.43 350.386L471.43 350.386L471.43 41.3857L473.43 41.3857ZM452.43 371.386L9.74808 371.386L9.74808 369.386L452.43 369.386L452.43 371.386ZM473.43 350.386C473.43 361.984 464.028 371.386 452.43 371.386L452.43 369.386C462.923 369.386 471.43 360.879 471.43 350.386L473.43 350.386ZM452.43 20.3857C464.028 20.3857 473.43 29.7878 473.43 41.3857L471.43 41.3857C471.43 30.8923 462.923 22.3857 452.43 22.3857V20.3857Z" fill="#0CA5A5"/>
            <g filter="url(#filter0_d_3906_79073)">
            <circle cx="114.01" cy="21.3135" r="16.0371" fill="#B7EACC" fillOpacity="0.4" shapeRendering="crispEdges"/>
            </g>
            <circle cx="114.013" cy="21.3134" r="6.92764" fill="url(#paint0_linear_3906_79073)"/>
            <defs>
            <filter id="filter0_d_3906_79073" x="88.9727" y="0.276367" width="50.0742" height="50.0742" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_3906_79073"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3906_79073"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3906_79073" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_3906_79073" x1="118.106" y1="16.3656" x2="108.924" y2="28.241" gradientUnits="userSpaceOnUse">
            <stop stopColor="#82DFB5"/>
            <stop offset="0.464" stopColor="#00979A"/>
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
            <svg  className="border__style--layout-fourth z-[2]" width="1070" height="828" viewBox="0 0 1070 828" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1069.7 821.808L1059.7 816.034V827.581L1069.7 821.808ZM21.5586 21.8076V22.8076V21.8076ZM663.976 20.8076L21.5586 20.8076V22.8076L663.976 22.8076V20.8076ZM0.558594 41.8076V801.808H2.55859V41.8076H0.558594ZM21.5586 822.808H1060.7V820.808H21.5586V822.808ZM0.558594 801.808C0.558594 813.406 9.96061 822.808 21.5586 822.808V820.808C11.0652 820.808 2.55859 812.301 2.55859 801.808H0.558594ZM21.5586 20.8076C9.96061 20.8076 0.558594 30.2096 0.558594 41.8076H2.55859C2.55859 31.3142 11.0652 22.8076 21.5586 22.8076V20.8076Z" fill="#0CA5A5"/>
            <g filter="url(#filter0_d_1021_9942)">
            <circle cx="663.979" cy="21.8076" r="16.0371" fill="#B7EACC" fillOpacity="0.4" shapeRendering="crispEdges"/>
            </g>
            <circle cx="663.98" cy="21.8075" r="6.92764" fill="url(#paint0_linear_1021_9942)"/>
            <defs>
            <filter id="filter0_d_1021_9942" x="638.941" y="0.770508" width="50.0742" height="50.0742" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1021_9942"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1021_9942"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1021_9942" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_1021_9942" x1="668.073" y1="16.8598" x2="658.892" y2="28.7352" gradientUnits="userSpaceOnUse">
            <stop stopColor="#82DFB5"/>
            <stop offset="0.464" stopColor="#00979A"/>
            </linearGradient>
            </defs>
            </svg>
            
          )}
          {viewportWidth >= 1728 && viewportWidth < 1920 && (
            <svg className="border__style--layout-fourth z-[2]" width="949" height="812" viewBox="0 0 949 812" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M948.83 805.641L938.83 799.867V811.414L948.83 805.641ZM598.068 19.4004H21.8007V21.4004H598.068V19.4004ZM0.800781 40.4004V785.641H2.80078V40.4004H0.800781ZM21.8008 806.641H939.83V804.641H21.8008V806.641ZM0.800781 785.641C0.800781 797.239 10.2028 806.641 21.8008 806.641V804.641C11.3074 804.641 2.80078 796.134 2.80078 785.641H0.800781ZM21.8007 19.4004C10.2028 19.4004 0.800781 28.8024 0.800781 40.4004H2.80078C2.80078 29.907 11.3073 21.4004 21.8007 21.4004V19.4004Z" fill="#0CA5A5"/>
            <g filter="url(#filter0_d_1021_14842)">
            <ellipse cx="599.889" cy="20.4" rx="16.0371" ry="14.7594" fill="#B7EACC" fillOpacity="0.4" shapeRendering="crispEdges"/>
            </g>
            <ellipse cx="599.892" cy="20.4001" rx="6.92764" ry="6.37569" fill="url(#paint0_linear_1021_14842)"/>
            <defs>
            <filter id="filter0_d_1021_14842" x="574.852" y="0.640625" width="50.0742" height="47.5186" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1021_14842"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1021_14842"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1021_14842" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_1021_14842" x1="603.986" y1="15.8466" x2="595.737" y2="27.4394" gradientUnits="userSpaceOnUse">
            <stop stopColor="#82DFB5"/>
            <stop offset="0.464" stopColor="#00979A"/>
            </linearGradient>
            </defs>
            </svg>
          )}
          {viewportWidth >= 1600 && viewportWidth < 1728 && (
            <svg className="border__style--layout-fourth z-[2]" width="951" height="778" viewBox="0 0 951 778" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M950.855 771.32L940.855 765.547V777.094L950.855 771.32ZM599.052 20.3203H21.5788V22.3203H599.052V20.3203ZM0.578797 41.3203L0.578143 751.32L2.57814 751.32L2.5788 41.3203L0.578797 41.3203ZM21.5781 772.32H941.855V770.32H21.5781V772.32ZM0.578143 751.32C0.578133 762.918 9.98016 772.32 21.5781 772.32V770.32C11.0847 770.32 2.57813 761.814 2.57814 751.32L0.578143 751.32ZM21.5788 20.3203C9.98087 20.3203 0.578808 29.7223 0.578797 41.3203L2.5788 41.3203C2.57881 30.8269 11.0854 22.3203 21.5788 22.3203V20.3203Z" fill="#0CA5A5"/>
            <g filter="url(#filter0_d_1021_16467)">
            <circle cx="601.751" cy="21.3203" r="16.0371" fill="#B7EACC" fillOpacity="0.4" shapeRendering="crispEdges"/>
            </g>
            <circle cx="601.754" cy="21.3202" r="6.92764" fill="url(#paint0_linear_1021_16467)"/>
            <defs>
            <filter id="filter0_d_1021_16467" x="576.714" y="0.283203" width="50.0742" height="50.0742" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1021_16467"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1021_16467"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1021_16467" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_1021_16467" x1="605.847" y1="16.3725" x2="596.666" y2="28.2479" gradientUnits="userSpaceOnUse">
            <stop stopColor="#82DFB5"/>
            <stop offset="0.464" stopColor="#00979A"/>
            </linearGradient>
            </defs>
            </svg>
          )}
          {viewportWidth >= 1512 && viewportWidth < 1600 && (
            <svg className="border__style--layout-fourth z-[2]" width="938" height="764" viewBox="0 0 938 764" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M937.876 757.625L927.876 751.851V763.398L937.876 757.625ZM560.133 20.1934H21.0196V22.1934H560.133V20.1934ZM0.0195312 41.1934V737.625H2.01953V41.1934H0.0195312ZM21.0195 758.625H928.876V756.625H21.0195V758.625ZM0.0195312 737.625C0.0195312 749.223 9.42155 758.625 21.0195 758.625V756.625C10.5261 756.625 2.01953 748.118 2.01953 737.625H0.0195312ZM21.0196 20.1934C9.42158 20.1934 0.0195312 29.5954 0.0195312 41.1934H2.01953C2.01953 30.7 10.5261 22.1934 21.0196 22.1934V20.1934Z" fill="#0CA5A5"/>
            <g filter="url(#filter0_d_1021_21361)">
            <circle cx="562.057" cy="21.1934" r="16.0371" fill="#B7EACC" fillOpacity="0.4" shapeRendering="crispEdges"/>
            </g>
            <circle cx="562.059" cy="21.1933" r="6.92764" fill="url(#paint0_linear_1021_21361)"/>
            <defs>
            <filter id="filter0_d_1021_21361" x="537.02" y="0.15625" width="50.0742" height="50.0742" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1021_21361"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1021_21361"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1021_21361" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_1021_21361" x1="566.152" y1="16.2455" x2="556.971" y2="28.1209" gradientUnits="userSpaceOnUse">
            <stop stopColor="#82DFB5"/>
            <stop offset="0.464" stopColor="#00979A"/>
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
    // about

    if (order === "five") {
      return (
        <>
          {viewportWidth >= 1920 && (
            <svg
              width="617"
              height="765"
              viewBox="0 0 617 765"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="44.998" cy="5.71875" r="5" fill="#2E5A90" />
              <path
                d="M45.4019 5.71875H585.843C602.411 5.71875 615.843 19.1502 615.843 35.7188V733.797C615.843 750.366 602.411 763.797 585.843 763.797H0.708984"
                stroke="#2E5A90"
              />
            </svg>
          )}
          {viewportWidth >= 1728 && viewportWidth < 1920 && (
            <svg
              width="531"
              height="764"
              viewBox="0 0 531 764"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="44.8262" cy="5.21875" r="5" fill="#2E5A90" />
              <path
                d="M45.6235 5.21875H499.774C516.343 5.21875 529.774 18.6502 529.774 35.2188V733.297C529.774 749.866 516.343 763.297 499.774 763.297H0.536998"
                stroke="#2E5A90"
              />
            </svg>
          )}
          {/* {viewportWidth >= 1600 && viewportWidth < 1728 && (
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
          )} */}
          {viewportWidth >= 1512 && viewportWidth < 1728 && (
            <svg
              width="517"
              height="764"
              viewBox="0 0 517 764"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="44.5479" cy="5.22266" r="5" fill="#2E5A90" />
              <path
                d="M44.2129 5.22266H486.205C502.774 5.22266 516.205 18.6541 516.205 35.2227V733.301C516.205 749.87 502.774 763.301 486.205 763.301H0.25868"
                stroke="#2E5A90"
              />
            </svg>
          )}
          {viewportWidth >= 1280 && viewportWidth < 1512 && (
            <svg
              width="395"
              height="661"
              viewBox="0 0 395 661"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="53.8662" cy="5.23047" r="5" fill="#2E5A90" />
              <path
                d="M52.5552 5.23047H363.662C380.23 5.23047 393.662 18.6619 393.662 35.2305V629.605C393.662 646.173 380.23 659.604 363.662 659.604H0.829102"
                stroke="#2E5A90"
              />
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
