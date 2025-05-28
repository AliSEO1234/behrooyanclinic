"use client";

import { CircleAnimateType } from "@/types/circleAnimate";
import clsx from "clsx";
import { motion } from "framer-motion";

const CircleAnimate = ({ position, topValue, xValue }: CircleAnimateType) => {
  return (
    <motion.div
      initial={{ x: xValue, y: topValue }}
      animate={{
        x: [
          xValue + 150 * Math.cos(0),
          xValue + 150 * Math.cos(Math.PI / 2),
          xValue + 150 * Math.cos(Math.PI),
          xValue + 150 * Math.cos((3 * Math.PI) / 2),
          xValue + 150 * Math.cos(0),
        ],
        y: [
          topValue + 150 * Math.sin(0),
          topValue + 150 * Math.sin(Math.PI / 2),
          topValue + 150 * Math.sin(Math.PI),
          topValue + 150 * Math.sin((3 * Math.PI) / 2),
          topValue + 150 * Math.sin(0),
        ],
      }}
      transition={{
        duration: 50,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={clsx(
        `circle-animate ${position === "left" ? `left-[${xValue}px]` : `right-[${xValue}px]`}`
      )}
    />
  );
};

export default CircleAnimate;
