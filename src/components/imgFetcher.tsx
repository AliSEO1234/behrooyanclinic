"use client";
import { ImgFetcherType } from "@/types/imgFetcher";
import Image from "next/image";

const ImgFetcher = ({
  src,
  height,
  title,
  width,
  className,
  dynamic = false,
}: ImgFetcherType) => {
  const link = dynamic ? src : src;
  return (
    <Image
      className={`w-full h-full min-w-full min-h-full max-w-full max-h-full ${
        className && className
      }`}
      loading="lazy"
      src={link}
      alt={title || ""}
      width={width || 1000}
      height={height || 1000}
      title={title || ""}
    />
  );
};
export default ImgFetcher;
