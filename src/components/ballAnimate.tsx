"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Ball = ({ size}: { size: number }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveBall = () => {
      const maxX = window.innerWidth - size;
      const maxY = window.innerHeight - size;
      setPosition({
        x: Math.random() * maxX,
        y: Math.random() * maxY,
      });
    };
    moveBall()
    const interval = setInterval(moveBall, 15000);

    return () => clearInterval(interval);
  },[size]);

  return (
    <motion.div
      initial={{ x: 0, y: 0 }}
      animate={position}
      transition={{
        duration: 15 ,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full bg-gradient-to-b from-[#74B8B9] to-[#87C0C2] w-[${size}px] h-[${size}px] z-[1]`}
    ></motion.div>
  );
};

export default Ball;
