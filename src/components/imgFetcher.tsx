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
  return (
    <Image
      className={`w-full h-full min-w-full min-h-full max-w-full max-h-full ${
        className ? className : ""
      }`}
      loading={dynamic ? "lazy" : undefined}
      src={src}
      alt={title || ""}
      width={width ? width : 200}
      height={height ? height : 200}
      title={title || ""}
    />
  );
};
export default ImgFetcher;
