"use client";
import FeedbackCard from "@/features/feedback/feedbackCard";

const FeedBackLayout = () => {
  // const feedParent = useRef<HTMLDivElement>(null);
  // const handleWheel = (e: React.WheelEvent) => {
  //   if (feedParent.current) {
  //     feedParent.current.scrollLeft += e.deltaY *2;
  //   }
  // };
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

  return (
    <div
      // ref={feedParent}
      // onWheel={handleWheel}
      className="flex flex-nowrap overflow-x-scroll overflow-y-hidden snap-x gap-x-5 pb-5 s1280:pt-5 px-3 scrollbar-custom"
    >
      {feedbacks.map((feed) => {
        return (
          <FeedbackCard
            key={feed.id}
            desc={feed.content}
            scoreCount={feed.score}
            title={feed.name}
          />
        );
      })}
    </div>
  );
};
export default FeedBackLayout;
