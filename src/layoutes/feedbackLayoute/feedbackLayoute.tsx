"use client";
import FeedbackCard from "@/features/feedback/feedbackCard";
import { FeedbackLayoutType } from "@/types/feedback/feebackLayout";
import { useEffect, useRef, useState } from "react";

const FeedBackLayout = ({align} :FeedbackLayoutType) => {
  const feedParent = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const velocityRef = useRef(0);
  const [isMouseUp, setIsMouseUp] = useState(false);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const smoothScroll = () => {
      if (feedParent.current && isMouseUp) {
        feedParent.current.scrollLeft += velocityRef.current;
        if (Math.abs(velocityRef.current) > 0.5) {
          velocityRef.current *= 0.9;
          animationFrameId.current = requestAnimationFrame(smoothScroll);
        } else {
          setIsMouseUp(false);
        }
      }
    };

    if (isMouseUp) {
      smoothScroll();
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isMouseUp]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    if (feedParent.current) {
      setIsDragging(true);
      setStartX(e.pageX - feedParent.current.offsetLeft);
      setScrollLeft(feedParent.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && feedParent.current) {
      const x = e.pageX - feedParent.current.offsetLeft;
      const scroll = (startX - x) * 1.2;
      feedParent.current.scrollLeft = scrollLeft + scroll;
      velocityRef.current = scroll;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsMouseUp(true);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (feedParent.current) {
      setIsDragging(true);
      setStartX(e.touches[0].pageX - feedParent.current.offsetLeft);
      setScrollLeft(feedParent.current.scrollLeft);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && feedParent.current) {
      const x = e.touches[0].pageX - feedParent.current.offsetLeft;
      const scroll = (startX - x) * 1.2;
      feedParent.current.scrollLeft = scrollLeft + scroll;
      velocityRef.current = scroll;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setIsMouseUp(true);
  };
  const feedbacks = [
    {
      id: 0,
      name: "Amir Davari",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti a ducimus quia placeat minima non perferendis distinctio! Dignissimos sequi, nesciunt voluptatibus sed culpa quod, quos dolores eaque hic nulla fugiat!",
      score: 5,
    },
    {
      id: 1,
      name: "Reza Babaee",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti a ducimus quia placeat minima non perferendis distinctio! Dignissimos sequi, nesciunt voluptatibus sed culpa quod, quos dolores eaque hic nulla fugiat!",
      score: 5,
    },
    {
      id: 2,
      name: "Ali Gholami",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti a ducimus quia placeat minima non perferendis distinctio! Dignissimos sequi, nesciunt voluptatibus sed culpa quod, quos dolores eaque hic nulla fugiat!",
      score: 5,
    },
    {
      id: 3,
      name: "Pooya Bayati",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti a ducimus quia placeat minima non perferendis distinctio! Dignissimos sequi, nesciunt voluptatibus sed culpa quod, quos dolores eaque hic nulla fugiat!",
      score: 5,
    },
    {
      id: 4,
      name: "Pooya Bayati",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti a ducimus quia placeat minima non perferendis distinctio! Dignissimos sequi, nesciunt voluptatibus sed culpa quod, quos dolores eaque hic nulla fugiat!",
      score: 5,
    },
    {
      id: 5,
      name: "Pooya Bayati",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti a ducimus quia placeat minima non perferendis distinctio! Dignissimos sequi, nesciunt voluptatibus sed culpa quod, quos dolores eaque hic nulla fugiat!",
      score: 5,
    },
  ];
  useEffect(() => {
    if (feedParent.current && align === "right") {
      setTimeout(() => {
        feedParent.current!.scrollLeft = feedParent.current!.scrollWidth;
      }, 100);
    }
  }, [align]);
  
  
  return (
    <div
      ref={feedParent}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`flex ${
        align === "left" ? "flex-row items-center" : "flex-row-reverse items-center"
      } flex-nowrap overflow-x-hidden overflow-y-hidden gap-x-5 pb-5 s1280:pt-5 px-3 transition-all duration-500 ease-out ${
        isDragging ? "cursor-grabbing select-none " : "cursor-grab select-auto"
      }`}
    >
      {feedbacks.map((feed) => {
        return (
          <div
            className="w-fit min-w-fit max-w-fit"
            key={feed.id}
            onMouseDown={handleMouseDown}
          >
            <FeedbackCard
              key={feed.id}
              desc={feed.content}
              scoreCount={feed.score}
              title={feed.name}
            />
          </div>
        );
      })}
    </div>
  );
};
export default FeedBackLayout;
